// swiper

// const swiper = new Swiper(".mySwiper", {
//   direction: "horizontal",
//   slidesPerView: 2.3,
//   spaceBetween: 20,
//   mousewheel: true,
//   freeMode: true,
// });

// 화면 크기에 따른 slidesPerView 값을 반환하는 함수
function getSlidesPerView() {
  if (window.matchMedia("(max-width: 480px)").matches) {
    return 1.4;
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    return 1.03;
  } else if (window.matchMedia("(max-width: 1000px)").matches) {
    return 2.1;
  } else {
    return 2.5;
  }
}

// Swiper 인스턴스 생성 및 설정
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: getSlidesPerView(),
  spaceBetween: 20,
  mousewheel: true,
  freeMode: true,
});

gsap.registerPlugin(ScrollToPlugin);

function setupMobileLogoAnimation() {
  const logo_m = gsap.timeline();
  logo_m
    .from("#header .m_logo", { scale: 1 })
    .from("#header .album_etc", { opacity: 0 });

  ScrollTrigger.create({
    animation: logo_m,
    start: "top top",
    end: "=+800",
    toggleActions: "play none none none",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1,
  });
}

function setupDesktopLogoAnimation() {
  const logo_p = gsap.timeline();
  logo_p
    .from("#header .p_logo", { scale: 1 })
    .from("#header .album_etc", { opacity: 1 });

  ScrollTrigger.create({
    animation: logo_p,
    start: "top top",
    end: "=+600",
    toggleActions: "play none none none",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1,
  });
}
function checkMediaQuery() {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    setupMobileLogoAnimation();
  } else {
    setupDesktopLogoAnimation();
  }
}

// 페이지 로드 시 초기 호출
checkMediaQuery();

// 브라우저 크기 변경 시 다시 호출
window.addEventListener("resize", () => {
  swiper.params.slidesPerView = checkMediaQuery();
  getSlidesPerView();
  swiper.update();
});

const video = gsap.timeline();
video.to(".scrollTrigger", { y: -600 });

ScrollTrigger.create({
  animation: video,
  trigger: ".teaser",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pin: true,
  pinSpacing: false,
  markers: false,
  anticipatePin: 1,
});

// 메뉴
// scrollTo
gsap.registerPlugin(ScrollToPlugin);

function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }
  return link.hash;
}

function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});
scrollToHash(window.location.hash);

// 메뉴 숨기기 효과
const showNav = gsap
  .from("#nav", {
    yPercent: 200,
    paused: true,
    duration: 0.4,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  },
});

// scrollSmoder lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
