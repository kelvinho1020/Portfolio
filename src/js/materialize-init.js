document.addEventListener("DOMContentLoaded", function () {
	const sideNavElems = document.querySelectorAll(".sidenav");
	const sideNavInstances = M.Sidenav.init(sideNavElems, {
		edge: "right",
		preventScrolling: false,
	});

	const sliderElems = document.querySelectorAll(".slider");
	const sliderInstances = M.Slider.init(sliderElems, {
		indicators: false,
		interval: 5000,
	});

	const carouselElems = document.querySelectorAll(".carousel");
	const carouselInstances = M.Carousel.init(carouselElems, {
		fullWidth: true,
		indicators: true,
	});

	const parallaxElems = document.querySelectorAll(".parallax");
	const parallaxInstances = M.Parallax.init(parallaxElems);
});
