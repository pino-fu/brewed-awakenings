import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, employees) => {
    let orderEmployee = ""
    
    for (const employee of employees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }
    
    return orderEmployee //employee who took the order
}

// Function whose responsibility is to find the product for an order
const findProduct = (order) => {
    let orderProduct = null

    for (const product of products) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct //selected product of selected order
}




export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees) // determines which employee took the order
        const product = findProduct(order) // determines which product was ordered 

        html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }
    html += "</ul>"

    return html
}

