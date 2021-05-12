const home = document.getElementById("home");
const allSections = document.querySelectorAll(".section");
const nav = document.querySelector(".navBg");
const lazyImg = document.querySelectorAll("img[data-src]");

///// Navbar Animation /////
const stickyNav = function (entries) {
	const entry = entries[0];
	if (!entry.isIntersecting) nav.style.opacity = "0.8";
	if (entry.isIntersecting) nav.style.opacity = "0";
};

const homeObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
});
homeObserver.observe(home);

///// Revealing /////
const revealSection = function (entries, observer) {
	const entry = entries[0];
	if (!entry.isIntersecting) return;
	entry.target.classList.remove("section-hidden");

	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

///// Add padding-top /////
allSections.forEach(section => {
	sectionObserver.observe(section);
	section.style.paddingTop = getComputedStyle(nav).height;
	section.classList.add("section-hidden");
});

///// Lazy Loading /////
const loadImg = function (entries, observer) {
	const entry = entries[0];
	if (!entry.isIntersecting) return;

	entry.target.src = entry.target.dataset.src;
	entry.target.addEventListener("load", function () {
		entry.target.classList.remove("lazy");
	});

	observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
	root: null,
	threshold: 0,
});

lazyImg.forEach(img => imgObserver.observe(img));
