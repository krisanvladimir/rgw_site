import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

// Изменение следующей картинки в hero
const heroNextImage = document.querySelector(".hero-text__next img");
UIkit.util.on(".hero-slider ", "itemshow", function (e) {
  const nextIndex = e.detail[0].index + 1;
  const slidesCount = e.detail[0].slides.length;
  if (nextIndex === slidesCount) {
    const nextImage = e.detail[0].slides[0].children[0].getAttribute("src");
    heroNextImage.setAttribute("src", nextImage);
  } else {
    const nextImage = e.detail[0].slides[nextIndex].children[0].getAttribute(
      "src"
    );
    heroNextImage.setAttribute("src", nextImage);
  }
});

// Изменение количества продуктов
const packageForm = document.querySelector(".product-controls__quantity");

if (packageForm) {
  packageForm.addEventListener("click", (e) => {
    const formInput = packageForm.querySelector("input");

    if (
      e.target.matches(".product-controls__quantity--minus svg") ||
      e.target.matches(".product-controls__quantity--minus")
    ) {
      let formValue = parseInt(formInput.value);
      formValue--;
      if (formValue <= 1) {
        formInput.setAttribute("value", 1);
      } else {
        formInput.setAttribute("value", formValue);
      }
    } else if (
      e.target.matches(".product-controls__quantity--plus svg") ||
      e.target.matches(".product-controls__quantity--plus")
    ) {
      let formValue = parseInt(formInput.value);
      formValue++;
      formInput.setAttribute("value", formValue);
    }
  });
}

// Изменениче количества в заказе
const cartProducts = document.querySelectorAll(".cart-product");

if (cartProducts) {
  cartProducts.forEach((cartProduct) => {
    cartProduct.addEventListener("click", (e) => {
      const formInput = cartProduct.querySelector("input");

      if (
        e.target.matches(".cart-product__description--quantity-minus svg") ||
        e.target.matches(".cart-product__description--quantity-minus")
      ) {
        let formValue = parseInt(formInput.value);
        formValue--;
        if (formValue <= 1) {
          formInput.setAttribute("value", 1);
        } else {
          formInput.setAttribute("value", formValue);
        }
      } else if (
        e.target.matches(".cart-product__description--quantity-plus svg") ||
        e.target.matches(".cart-product__description--quantity-plus")
      ) {
        let formValue = parseInt(formInput.value);
        formValue++;
        formInput.setAttribute("value", formValue);
      }
    });
  });
}
