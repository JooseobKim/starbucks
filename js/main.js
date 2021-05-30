const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합 검색');
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges')
const toTopEL = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none'
    // gasp.to(애니메이션을 처리할 요소, 지속시간, 애니메이션을 어떻게 처리할 것인가에 대한 옵션)
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none"
    })

    // 버튼 보이기
    gsap.to(toTopEL, .2, {
      x: 0
    })
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block"
    })

    // 버튼 숨기기
    gsap.to(toTopEL, .2, {
      x: 100
    })
  }
}, 300))
// _.throttle(실행 함수, 몇 초에 한 번씩 실행된다(ms))

toTopEL.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7 // 0.7, 1.4, 2.1, 2.7
  })
})


// new Swiper(선택자, 옵션) | 공식 홈페이지: https://swiperjs.com/
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion

  if(isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide')
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide')
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
const random = (min, max) => {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

const floatingObject = (selector, delay, size) => {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(spyEl => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()