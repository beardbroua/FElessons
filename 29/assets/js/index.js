


let shoppingList = [
    {
        produkt: "beer",
        quantity: 2,
        purchased: true,
        price: 35,
        totalSum() { return +this.quantity * +this.price },
    },
    {
        produkt: "meat",
        quantity: 1,
        purchased: true,
        price: 135,
        totalSum() { return +this.quantity * +this.price },
    },
    {
        produkt: "fish",
        quantity: 2,
        purchased: false,
        price: 105,
        totalSum() { return +this.quantity * +this.price },
    },
    {
        produkt: "water",
        quantity: 2,
        purchased: true,
        price: 15,
        totalSum() { return +this.quantity * +this.price },
    },
]
// output of the list of products
let purchasedProduts = ''
let notPurchasedProduts = ''
let productsListOutput = function () {
    x = ''
    purchasedProduts = x
    notPurchasedProduts = x
    for (i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].purchased === true) {
            purchasedProduts += shoppingList[i].produkt + ' '
            console.log(purchasedProduts)
        } else notPurchasedProduts += shoppingList[i].produkt + ' '
    }
    alert(`Currently purchased: ${purchasedProduts} not purchased: ${notPurchasedProduts}`)
}
console.log(productsListOutput())

// output of the list of all products
let productsAllListOutput = function () {
    allProduktList = ''
    for (i = 0; i < shoppingList.length; i++) {
        allProduktList += shoppingList[i].produkt + ' '
    }
    return allProduktList
}

let productPurchase = function () {
    let notPurchasedProduktName = prompt(`Currently not purchased is: ${notPurchasedProduts}. Write the name of the products you want to buy`)
    for (i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].produkt == notPurchasedProduktName) {
            shoppingList[i].purchased = true
        }
    }
}
console.log(productPurchase())
console.log(productsListOutput())
// product delete
let produktDelete = prompt(`Write the name of the product to be removed from the list`)
let shoppingList2 = shoppingList.filter(produkt => produkt.produkt !== produktDelete)
console.log(shoppingList2)
// output of the list of products after produkt deleting
let delProductsListOutput = function () {
    x = ''
    purchasedProduts = x
    notPurchasedProduts = x
    for (i = 0; i < shoppingList2.length; i++) {
        if (shoppingList2[i].purchased === true) {
            purchasedProduts += shoppingList2[i].produkt + ' '
        } else notPurchasedProduts += shoppingList2[i].produkt + ' '
    }
    alert(`Currently purchased: ${purchasedProduts} not purchased: ${notPurchasedProduts}`)
}
console.log(delProductsListOutput())
// Adding a purchase to the list


let addProdukt = prompt(`Which product do you want to add to the list?`)
let addQuantity = +prompt('How much product to buy?')

let addPr = function () {
        let product = shoppingList.find(el =>el.produkt === addProdukt)

        if (product) {
            product.purchased = true
            product.quantity = product.quantity + addQuantity
        } else {
            let addPrice = +prompt('How much does the product cost per unit?')
            shoppingList.push({
                produkt: addProdukt,
                quantity: addQuantity,
                purchased: true,
                price: addPrice,
                totalSum() { return +this.quantity * +this.price },
            })
         }
}
addPr()

console.log(productsListOutput())
console.log(shoppingList)

// Total cost of products

let sum = 0
for (i = 0; i < shoppingList.length; i++) {
    shoppingList[i].totalProductSum = shoppingList[i].totalSum()
    sum += shoppingList[i].quantity * shoppingList[i].totalSum()
    console.log(shoppingList[i])
}
console.log(sum)
alert(`Total cost of products ${sum}`)

// Total cost of unpurchased products

let sumNotPurshased = 0
for (i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].purchased === false){
        shoppingList[i].totalProductSum = shoppingList[i].totalSum()
        sumNotPurshased += shoppingList[i].quantity * shoppingList[i].totalSum()
    }
}
console.log(sumNotPurshased)
alert(`Total cost of unpurchased products ${sumNotPurshased}`)


// Sorting by price

shoppingList.sort((a, b) => a.price - b.price);
alert(`Products sorted by increasing price ${productsAllListOutput()}`)
shoppingList.sort((a, b) => b.price - a.price);
alert(`Products sorted by decreasing price ${productsAllListOutput()}`)
