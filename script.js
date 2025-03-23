document.addEventListener("DOMContentLoaded", function () {
  const cart = document.querySelector(".cart");

  cart.addEventListener("click", function (event) {
    const target = event.target;
    const item = target.closest(".cart-item");

    if (!item) return;

    let quantityElement = item.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    let priceElement = item.querySelector(".price");
    let pricePerItem = parseFloat(item.dataset.price);

    if (target.classList.contains("plus")) {
      quantity++;
    } else if (target.classList.contains("minus")) {
      if (quantity > 1) quantity--;
    } else if (target.classList.contains("delete")) {
      item.remove();
    } else if (target.classList.contains("like")) {
      target.classList.toggle("liked");
    }

    if (
      target.classList.contains("plus") ||
      target.classList.contains("minus")
    ) {
      quantityElement.textContent = quantity;
      priceElement.textContent = (quantity * pricePerItem).toFixed(2);
    }

    updateTotalPrice();
  });

  function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach((item) => {
      let price = parseFloat(item.querySelector(".price").textContent);
      total += price;
    });
    document.querySelector(".total-price").textContent = total.toFixed(2);
  }
});
