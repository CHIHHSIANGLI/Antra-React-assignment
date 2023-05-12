const API = (() => {
	const URL = "http://localhost:3000";
  
	const request = async (path, method = "GET", body = null) => {
	  try {
		const response = await fetch(URL + path, {
		  method,
		  headers: { "Content-Type": "application/json" },
		  body: body ? JSON.stringify(body) : null,
		});
		if (!response.ok) {
		  throw new Error(response.statusText);
		}
		return response.json();
	  } catch (error) {
		console.log(error);
	  }
	};

    // define your method to get cart data
	const getCart = () => request("/cart");

	// define your method to get inventory data
	const getInventory = () => request("/inventory");

	// define your method to add an item to cart
	const addToCart = (inventoryItem) => request("/cart", "POST", inventoryItem);

	// define your method to update an item in cart
	const updateCart = (id, newItem) => request(`/cart/${id}`, "PATCH", newItem);

	const updateInventory = (id, newItem) =>
	  request(`/inventory/${id}`, "PATCH", newItem);

	// define your method to delete an item in cart
	const deleteFromCart = (id) => request(`/cart/${id}`, "DELETE");

	const checkout = async () => {
	  const cartItems = await getCart();
	  const deletePromises = cartItems.map((item) => deleteFromCart(item.id));
	  return Promise.all(deletePromises);
	};
  
	return {
	  getCart,
	  updateCart,
	  updateInventory,
	  getInventory,
	  addToCart,
	  deleteFromCart,
	  checkout,
	};
  })();
  
  class State {
	#onChangeCart;
	#onChangeInventory;
	#inventory;
	#cart;
  
	constructor() {
	  this.#inventory = [];
	  this.#cart = [];
	}
  
	get cart() {
	  return this.#cart;
	}
  
	get inventory() {
	  return this.#inventory;
	}
  
	set cart(newCart) {
	  this.#cart = newCart;
	  this.#onChangeCart();
	}
  
	set inventory(newInventory) {
	  this.#inventory = newInventory;
	  this.#onChangeInventory();
	}
  
	subscribe(onChangeCart, onChangeInventory) {
	  this.#onChangeCart = onChangeCart;
	  this.#onChangeInventory = onChangeInventory;
	}
  }
  
  // implement your logic for Model
  const model = (() => {
	const {
	  getCart,
	  updateCart,
	  updateInventory,
	  getInventory,
	  addToCart,
	  deleteFromCart,
	  checkout,
	} = API;
  
	return {
	  State,
	  getCart,
	  updateCart,
	  updateInventory,
	  getInventory,
	  addToCart,
	  deleteFromCart,
	  checkout,
	};
  })();
  
  // implement your logic for View
  const view = (() => {
	const inventoryEl = document.querySelector(".inventory-container ul");
	const cartEl = document.querySelector(".cart-wrapper ul");
	const checkoutBtn = document.querySelector(".checkout-btn");
  
	const renderItems = (items, containerEl, templateFn) => {
	  containerEl.innerHTML = items.map(templateFn).join("");
	};
  
	const inventoryItemTemplate = (item) => `
	  <li inventory-id="${item.id}">
		<span>${item.content}</span>
		<button class="minus-btn">-</button>
		<span>${item.amount}</span>
		<button class="plus-btn">+</button>
		<button class="add-btn">add to cart</button>
	  </li>
	`;
  
	const cartItemTemplate = (item) => `
	  <li cart-id="${item.id}">
		<span>${item.content} x ${item.amount}</span>
		<button class="delete-btn">delete</button>
	  </li>
	`;
  
	const renderInventory = (inventoryItems) => {
		renderItems(inventoryItems, inventoryEl, inventoryItemTemplate);
	  };
	
	  const renderCart = (cartItems) => {
		renderItems(cartItems, cartEl, cartItemTemplate);
	  };
	
	  return {
		inventoryEl,
		cartEl,
		checkoutBtn,
		renderInventory,
		renderCart,
	  };
	})();
	
	// implement your logic for Controller
	const controller = ((model, view) => {
	  const state = new model.State();
	
	  const init = async () => {
		state.inventory = await model.getInventory();
		state.cart = await model.getCart();
	  };
	

	  const handleUpdateAmount = () => {
		view.inventoryEl.addEventListener("click", (event) => {
		  event.preventDefault();
		  if (
			event.target.className !== "plus-btn" &&
			event.target.className !== "minus-btn"
		  )
			return;
	
		  const id = Number(event.target.parentNode.getAttribute("inventory-id"));
		  const inventoryItem = state.inventory.find((element) => element.id === id);
	
		  if (event.target.className === "plus-btn") {
			inventoryItem.amount++;
			console.log("plus amount");
		  } else if (event.target.className === "minus-btn") {
			inventoryItem.amount--;
			console.log("minus amount");
		  }
	
		  inventoryItem.amount = Math.max(0, inventoryItem.amount);
	
		  const inventoryObj = {
			content: inventoryItem.content,
			amount: inventoryItem.amount,
			id,
		  };
	
		  model.updateInventory(id, inventoryObj).then(() => {
			state.inventory = [...state.inventory];
		  });
		});
	  };
	
	  

	  const handleAddToCart = () => {
		view.inventoryEl.addEventListener("click", (event) => {
		  event.preventDefault();
		  if (event.target.className !== "add-btn") return;
	
		  const id = Number(
			event.target.parentNode.getAttribute("inventory-id")
		  );
		  const inventoryItem = state.inventory.find(
			(element) => element.id === id
		  );
	
		  if (inventoryItem.amount === 0) return;
	
		  const { amount, content } = inventoryItem;
		  const cartObj = { content, amount, id };
	
		  if (!state.cart.some((item) => item.content === content)) {
			model.addToCart(cartObj).then(() => {
			  state.cart = [...state.cart, cartObj];
			});
		  } else {
			const initialAmount = state.cart.find((item) => item.id === id).amount;
			const newAmount = amount + initialAmount;
			const updatedCartObj = { content, amount: newAmount, id };
	
			model.updateCart(id, updatedCartObj).then(() => {
			  state.cart = state.cart.map((item) => {
				if (item.id === id) {
				  item.amount = newAmount;
				}
				return item;
			  });
			});
		  }
		});
	  };
	


	  const handleDelete = () => {
		view.cartEl.addEventListener("click", (event) => {
		  event.preventDefault();
		  if (event.target.className !== "delete-btn") return;
	
		  const id = Number(event.target.parentNode.getAttribute("cart-id"));
	
		  model.deleteFromCart(id).then(() => {
			state.cart = state.cart.filter((item) => item.id !== id);
		  });
		});
	  };
	


	  const handleCheckout = () => {
		view.checkoutBtn.addEventListener("click", (event) => {
		  event.preventDefault();
	
		  model.checkout().then(() => {
			state.cart = [];
		  });
		});
	  };
	


	  const bootstrap = () => {
		handleAddToCart();
		handleDelete();
		handleCheckout();
		init();
		handleUpdateAmount();
	
		state.subscribe(() => view.renderCart(state.cart),
		() => view.renderInventory(state.inventory)
	  );
	};
  
	return {
	  bootstrap,
	};
  })(model, view);
  
  controller.bootstrap();
  
		 
	
  