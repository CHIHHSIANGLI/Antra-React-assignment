// initialize item array
const items = [
    { name: "apple", category: "fruit" },
    { name: "Cucumber", category: "vegetable" },
    { name: "Banana", category: "fruit" },
    { name: "Celery", category: "vegetable" },
    { name: "orange", category: "fruit" },
    { name: "sausage", category: "meat" },
    { name: "bacon", category: "meat" }
];

const categories = [...new Set(items.map(item => item.category))];


// initialize selectors
let headerItem = document.getElementById('header');
let categorySelect = document.getElementById('category-select');
let itemSelect = document.getElementById('item-select');

categories.forEach(category => {
    let option = document.createElement("option");
    option.value = category;
    option.text = category;
    categorySelect.add(option);
});

// handler for category change
function updateItemSelect() {
    console.log("inside handler");
    itemSelect.innerHTML = "";
    const itemOfCategory = items.filter((item) => item.category === categorySelect.value);
    itemOfCategory.forEach(item => {
        let option = document.createElement("option");
        option.value = item.name;
        option.text = item.name;
        itemSelect.add(option);
    });
    headerItem.innerHTML = itemSelect.value;
};

// to initialize the page with default values
updateItemSelect();

// bind event listeners
categorySelect.addEventListener("change", updateItemSelect);
itemSelect.addEventListener("change", () => {
    headerItem.innerHTML = itemSelect.value;
});