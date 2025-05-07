window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    document.querySelector(".layer-2").style.transform = `translateY(${scrolled * 0.3}px)`;
    document.querySelector(".layer-3").style.transform = `translateY(${scrolled * 0.6}px)`;
    document.querySelector(".layer-4").style.transform = `translateY(${scrolled * 0.9}px)`;
  });
  