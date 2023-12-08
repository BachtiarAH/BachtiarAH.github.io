function htmlLoad(parent, path) {
  parent.load(path);
}

function enableCustomSliderBehavior(sliderElement, scrollSpeed = 3) {
  let isDown = false;
  let startX;
  let scrollLeft;

  sliderElement.addEventListener("mousedown", (e) => {
    isDown = true;
    sliderElement.classList.add("active");
    startX = e.pageX - sliderElement.offsetLeft;
    scrollLeft = sliderElement.scrollLeft;
  });

  sliderElement.addEventListener("mouseleave", () => {
    isDown = false;
    sliderElement.classList.remove("active");
  });

  sliderElement.addEventListener("mouseup", () => {
    isDown = false;
    sliderElement.classList.remove("active");
  });

  sliderElement.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderElement.offsetLeft;
    const walk = (x - startX) * scrollSpeed; // Adjust the scroll speed here
    sliderElement.scrollLeft = scrollLeft - walk;
  });
}
