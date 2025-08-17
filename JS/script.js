document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const drink = document.getElementById("drink").value;
    const topping = document.getElementById("topping").value;

    document.getElementById("orderResult").innerHTML =
        `<p>Thank you, ${name}! Your order for a ${drink} with ${topping} has been received!</p>`;
});
