// Task 1: Set up folders and move your files
const express = require('express')
const app = express()

const inventory = [
  {
    category: "Men's Clothing",
    items: [
      {
        name: "Classic T-Shirt",
        cost: 19.99,
        imageUrl: "https://example.com/mens-classic-tshirt.jpg",
        path: "/item/0",
        quantity: 120,
        colors: ["black", "white", "gray"]
      },
      {
        name: "Denim Jacket",
        cost: 49.99,
        imageUrl: "https://example.com/mens-denim-jacket.jpg",
        path: "/item/1",
        quantity: 75,
        colors: ["blue", "black"]
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://example.com/mens-running-shoes.jpg",
        path: "/item/2",
        quantity: 50,
        colors: ["red", "black", "white"]
      }
    ]
  },
  {
    category: "Women's Clothing",
    items: [
      {
        name: "Summer Dress",
        cost: 29.99,
        imageUrl: "https://example.com/womens-summer-dress.jpg",
        path: "/item/3",
        quantity: 100,
        colors: ["pink", "yellow", "white"]
      },
      {
        name: "Leather Handbag",
        cost: 99.99,
        imageUrl: "https://example.com/womens-leather-handbag.jpg",
        path: "/item/4",
        quantity: 40,
        colors: ["brown", "black"]
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://example.com/womens-running-shoes.jpg",
        path: "/item/5",
        quantity: 60,
        colors: ["blue", "pink", "white"]
      }
    ]
  }
]

// Task 1: Set the view engine to EJS. 



app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

// Task 1: Set up the static middleware



// Task 2: Set up the route handler for / to send back the index.html file



// Task 3: Set up the route handler for /mens which sends back category.ejs with the men's array



// Task 4: Plug in the values in category.ejs to get the page working
// PINK ONLY: Set up a route handler for /womens to pass in similar data for women's



// Task 5: Set up the route handler for /item/0 which sends back the first item in product.ejs



// Task 6: Plug in the values in product.ejs to get the page working
// Extra credit: modify the /item/0 route handler to have dynamic path parameter and return any item's data

app.listen(3000, () => {
  console.log("Server running")
})