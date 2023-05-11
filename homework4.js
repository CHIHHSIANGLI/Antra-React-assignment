function myFetch(url, options) {
    return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      const method = options?.method ?? 'GET';
      xhttp.open(method, url);
  
      if (options?.headers) {
        for (const [key, value] of Object.entries(options.headers)) {
          xhttp.setRequestHeader(key, value);
        }
      }
  
      xhttp.onload = function() {
        if (xhttp.status >= 200 && xhttp.status < 300) {
          resolve(xhttp.response);
        } else {
          reject(new Error(`Failed to fetch ${url}. Status: ${xhttp.status}`));
        }
      };
  
      xhttp.onerror = function() {
        reject(new Error(`Failed to fetch ${url}.`));
      };
  
      if (options?.body) {
        xhttp.send(JSON.stringify(options.body));
      } else {
        xhttp.send();
      }
    });
  }
  
  const getOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  myFetch('https://jsonplaceholder.typicode.com/posts/1', getOptions)
    .then(data => console.log(`GET: ${data}`))
    .catch(error => console.error(error));
  
  const putOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      name: 'John',
      address: {
        street: '123 St',
      },
    },
  };
  
  myFetch('https://jsonplaceholder.typicode.com/posts/1', putOptions)
    .then(data => console.log(`PUT: ${data}`))
    .catch(error => console.error(error));
  
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      name: 'John',
      address: {
        street: '123 St',
      },
    },
  };
  
  myFetch('https://jsonplaceholder.typicode.com/posts', postOptions)
    .then(data => console.log(`POST: ${data}`))
    .catch(error => console.error(error));
  
  const deleteOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      name: 'John',
      address: {
        street: '123 St',
      },
    },
  };
  
  myFetch('https://jsonplaceholder.typicode.com/posts/1', deleteOptions)
    .then(data => console.log(`DELETE: ${data}`))
    .catch(error => console.error(error));