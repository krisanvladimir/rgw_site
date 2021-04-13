// Создание слайдера range для цены
import noUiSlider from "nouislider";

const catalogRange = document.querySelector(".catalog-filters__item--range");
const catalogRangeBefore = document.querySelector(
  ".catalog-filters__item--before input"
);
const catalogRangeAfter = document.querySelector(
  ".catalog-filters__item--after input"
);

if (catalogRange) {
  noUiSlider.create(catalogRange, {
    start: [4000, 8000],
    connect: true,
    range: {
      min: [2000],
      max: [10000],
    },
  });

  catalogRange.noUiSlider.on("update", function (values, handle) {
    const value = values[handle];

    if (handle) {
      catalogRangeAfter.value = Math.round(value);
    } else {
      catalogRangeBefore.value = Math.round(value);
    }
  });

  catalogRangeAfter.addEventListener("change", function () {
    catalogRange.noUiSlider.set([null, this.value]);
  });

  catalogRangeBefore.addEventListener("change", function () {
    catalogRange.noUiSlider.set([this.value, null]);
  });
}
