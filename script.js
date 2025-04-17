const headerIconMore = document.querySelector(".header__icon-more");
const headerIconClose = document.querySelector(".header__icon-close");
const headerInner = document.querySelector(".header__inner");

headerIconMore.onclick = () => {
  headerIconClose.classList.remove("hide");
  headerIconMore.classList.add("hide");
  headerInner.classList.add("xl");
};

headerIconClose.onclick = () => {
  headerIconClose.classList.add("hide");
  headerIconMore.classList.remove("hide");
  headerInner.classList.remove("xl");
};

function checkScreenSize() {
  if (window.innerWidth > 1280) {
    headerInner.classList.remove("xl");
    headerIconClose.classList.add("hide");
    headerIconMore.classList.remove("hide");
  }
}

// Kiểm tra khi load trang
checkScreenSize();

// Kiểm tra lại khi resize màn hình
window.addEventListener("resize", checkScreenSize);
