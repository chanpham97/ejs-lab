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
        imageUrls: ["https://www.trueclassictees.com/cdn/shop/files/4000_BLACK_2_cea5a0d2-2928-432b-b8bf-28a5c88882aa_800x.jpg", "https://www.trueclassictees.com/cdn/shop/files/4000_CARBON_2_6792bbe7-7dc1-47b6-8f43-9b7484909d71_800x.jpg", "https://www.trueclassictees.com/cdn/shop/files/4000_WHITE_2_1a4b3f1d-1093-4b35-bbfd-bf413d2d12be_800x.jpg"],
        path: "/item/0",
        quantity: 120,
        colors: ["black", "white", "gray"]
      },
      {
        name: "Denim Jacket",
        cost: 49.99,
        imageUrls: ["https://slimages.macysassets.com/is/image/MCY/products/7/optimized/10138177_fpx.tif?op_sharpen=1&wid=500&fit=fit,1&fmt=webp", "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/10142478_fpx.tif?op_sharpen=1&wid=500&fit=fit,1&fmt=webp", "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/22666017_fpx.tif?op_sharpen=1&wid=500&fit=fit,1&fmt=webp"],
        path: "/item/1",
        quantity: 75,
        colors: ["blue", "black"]
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrls: ["https://dks.scene7.com/is/image/GolfGalaxy/22FHQMBND8BLCKWHTMNS_Outerspace?wid=1025&qlt=70&fmt=webp&op_sharpen=1", "https://dks.scene7.com/is/image/GolfGalaxy/22FHQMBND8BLCKWHTMNS_Alabaster?wid=1025&qlt=70&fmt=webp&op_sharpen=1", "https://dks.scene7.com/is/image/GolfGalaxy/22FHQMBND8BLCKWHTMNS_Sharkskin_Grey?wid=1025&qlt=70&fmt=webp&op_sharpen=1"],
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
        imageUrl: "https://ullajohnson.com/cdn/shop/files/ULLA_JOHNSON_BlaireDress__BLANC_01_MAIN.jpg?v=1714067305&width=960",
        path: "/item/3",
        quantity: 100,
        colors: ["pink", "yellow", "white"]
      },
      {
        name: "Leather Handbag",
        cost: 99.99,
        imageUrl: "https://www.letanneur.us/cdn/shop/files/TEMI1014G05-d_c4c045a7-8a31-4b47-943a-85913ad5c3df.jpg?v=1736851853",
        path: "/item/4",
        quantity: 40,
        colors: ["brown", "black"]
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://fullscopesports.com/wp-content/uploads/2022/07/Topo-Athletic-Women-Ultrafly-4-Comfortable-Lightweight-5MM-Drop-Road-Running-Shoes-Profile.jpg",
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



// Task 3: Set up the route handler for /mens which sends back category.ejs with the men's category object



// Task 4: Plug in the values in category.ejs to get the page working
// PINK ONLY: Set up a route handler for /womens to pass in similar data for women's



// Task 5: Set up the route handler for /item/0 which sends back the first item in product.ejs



// Task 6: Plug in the values in product.ejs to get the page working
// Extra credit: modify the /item/0 route handler to have dynamic path parameter and return any item's data

app.listen(3000, () => {
  console.log("Server running")
})