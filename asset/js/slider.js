
    const sliderTrack = document.getElementById('sliderTrack');
    const totalSlides = 9;
    let currentSlide = 0;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }, 4000);