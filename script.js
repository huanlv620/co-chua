// header
const headerIconMore = document.querySelector(".header__icon-more");
const headerIconClose = document.querySelector(".header__icon-close");
const headerInner = document.querySelector(".header__inner");

// marketing slider
const marketingBtnNext = document.querySelector(".marketing__btn-next");
const marketingBtnPrev = document.querySelector(".marketing__btn-prev");
const marketingSlides = document.querySelector(".marketing__slides");
const dots = document.querySelectorAll(".marketing__dot");

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

let currentIndex = 0;
const totalSlides = marketingSlides.children.length;

function updateActiveDot(index) {
  dots.forEach((dot) => dot.classList.remove("marketing__dot--active"));
  dots[index].classList.add("marketing__dot--active");
}

dots.forEach((item, index) => {
  item.onclick = () => {
    currentIndex = index;
    marketingSlides.style.marginLeft = `-${index * 100}%`;
    updateActiveDot(index);
  };
});

marketingBtnNext.onclick = () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    marketingSlides.style.marginLeft = `-${currentIndex * 100}%`;
    updateActiveDot(currentIndex);
  }
};

marketingBtnPrev.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    marketingSlides.style.marginLeft = `-${currentIndex * 100}%`;
    updateActiveDot(currentIndex);
  }
};
