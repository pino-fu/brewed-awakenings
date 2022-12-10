import { getEmployees, getOrders, getProducts } from "./database.js"

const employees = getEmployees()
const orders = getOrders()


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


const employeeOrders = (employeeObj) => {
    let filledOrders = 0

    for (const order of orders) {
        if (employeeObj.id === order.employeeId) {
            filledOrders++
        }
    }
    return filledOrders
}


document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const ordersFilled = employeeOrders(employee)

                    window.alert(`${employee.name} has sold ${ordersFilled} products`)
                }
            }
        }
    }
)
