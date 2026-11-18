/* Hay 4 condiciones:

1. if unidades > 100 -> 40 % descuento
2. if unidades = 100 to 25 -> 20 % descuento
3. if unidades = 10 to 24 -> 10 % descuento
4. if unidades = 10 -> no descuento


---

Requerimientos:

1.Recibir 2 datos del usuario como números enteros: Precio unitario y cantidad de productos 

2. Mostrar info con el subtotal, el porcentaje de descuento y el total con el descuento aplicado

No se especifica si será para varios productos a la vez o solo uno. Partiré del supuesto de que será solo para un producto.

---

Diseño general:

- Debe ser una app muy sencilla, pero que sea clara.

- Tal vez puedo añadir estilos sencillos. Nuevamente, no se especifica en la actividad.

- Se me ocurre dividirla en 2 archivos: index.html con la info para el usuario, index.js para la lógica en JS.

*/

const unitsInput = document.querySelector(".units-input");
const priceInput = document.querySelector(".price-input");
const calculateButton = document.querySelector(".calculate-button");

const unitsValue = Number(unitsInput.value)
const singlePrice = Number(priceInput.value)

const subtotalOutput = document.querySelector(".subtotal")
const discountOutput = document.querySelector(".discount")
const totalOutput = document.querySelector(".total")

let subtotal = Number(subtotalOutput.innerHTML)
let discount = Number(discountOutput.innerHTML)
let total = Number(totalOutput.innerHTML)

calculateButton.addEventListener("click", () => {
    calculate(unitsValue, singlePrice)
});

function calculate(units, price) {
    let remainingPercentage = 100 - discount

    if (remainingPercentage === 100) {
       remainingPercentage = 0 // I do this in order to preserve the calculation logic for subtotal 
    }

    subtotal = units * price
    total = subtotal - (subtotal * parseFloat(`0.${remainingPercentage}`))
    console.info(subtotal)
    console.info(discount)
    console.info(total)
    console.info(remainingPercentage)
    
    subtotalOutput.innerHTML = subtotal
    discountOutput.innerHTML = discount
    totalOutput.innerHTML = total 
   return 0 
}