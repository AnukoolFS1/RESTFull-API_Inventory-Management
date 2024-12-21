let response = fetch("http://localhost:3000/product").then(res => res.json())
.then(res => console.log(res)).catch(err => console.log(err))