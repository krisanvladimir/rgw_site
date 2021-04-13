// Копирование текущей ссылки
import ClipboardJS from "clipboard";

const copyLink = document.querySelector(".post-links a:first-child");
if (copyLink) {
  copyLink.addEventListener("click", function (e) {
    e.preventDefault();
    const currentUrl = document.location.href;

    new ClipboardJS(e.target, {
      text: function (e) {
        return currentUrl;
      },
    });
  });
}
