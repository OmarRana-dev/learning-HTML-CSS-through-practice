const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-image");
const navigationCircles = document.querySelectorAll(
  ".navigation-circle"
);
const prevButton = document.querySelector(".carousel-arrow-left");
const nextButton = document.querySelector(".carousel-arrow-right");

function showActiveImg(index) {
  images.forEach((activeImage) => {
    activeImage.removeAttribute("id");
  });

  console.log(index);
  images[index].setAttribute("id", "active");
}

function getActiveImageIndex() {
  const activeImage = Array.from(images).findIndex(
    (img) => img.id === "active"
  );
  return activeImage;
}

function goToNext() {
  const findIndex = getActiveImageIndex();
  if (findIndex === 3) {
    showActiveImg(0);
  } else {
    const index = findIndex + 1;
    showActiveImg(index);
  }
}

function goToPrevious() {
  const findIndex = getActiveImageIndex();
  if (findIndex === 0) {
    showActiveImg(3);
  } else {
    const index = findIndex - 1;
    showActiveImg(index);
  }
}

navigationCircles.forEach((dataIndex) => {
  console.log(dataIndex.getAttribute("data-index"));
  dataIndex.addEventListener("click", () => {
    showActiveImg(dataIndex.getAttribute("data-index"));
  });
});

nextButton.addEventListener("click", goToNext);
prevButton.addEventListener("click", goToPrevious);
setInterval(goToNext, 4000);
