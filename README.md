# 백예린 EP 물고기(Pisces) 작업일지

## 프로젝트 개요

## 컨셉

## 작업일지

#### 240122

- 모바일 버전에서 가로 스크롤이 생김  
  -> video가 있는 부분에 적용한 gsap scrollTrigger 때문에 생긴 것 같음
- html - &lt;&gt;에 링크 연결
- js - gsap scrollTo로 메뉴 연결  
  -> recommended도 연결하고 싶었으나 sticky로 고정된 상태에서 스크롤에 가려진 상태라서 이동을 해도 보이지 않고 스크롤을 해야지만 의미가 있음
- js - 화면의 크기가 달라지면 gsap 효과가 부드럽게 적용이 안되고 새로고침이 되어야 제대로 적용됨
- js - nav가 하단에 고정되어있어 가독성이 떨어질 수 있는 것을 감안해 scrollTrigger로 메뉴가 스크롤을 내리면 사라졌다가 올리면 다시 생기도록 구현

#### 240121

- js - recommended swiper를 적용한 부분이 화면 크기에 따라 slidesPerView를 다르게 적용하기 위해 window.matchMedia를 사용해 구현

#### 240120

- css/미디어쿼리 - 반응형 작업
- js - gsap scrollTirgger로 로고 애니메이션 추가

#### 240119

- css/미디어쿼리 - moblie/tablet 일부 수정, tablet footer에 텍스트 크기 조절, pc 푸터 작업
- 로고를 고정하기위해 header에 position fixed를 주었다가 sticky로 바꾸었는데 적용이 안됨  
  -> 부모요소에 주었던 overflow 때문  
  ->

#### 240118

- figma - 디자인 시안 수정 작업
- figma/photoshop - 이미지 소스 보정 및 정리
- html - 마크업 구조 작업
- css/미디어쿼리 - moblie/
  tablet/pc 작업(푸터 빼고)

#### 240117

- 주제 선정 및 컨셉 구상
- figma - pc/mobile 디자인 시안 작업
- css - mobile 모바일을 기준으로 스타일 작업 시작

## 문제 및 해결

#### 240118

- footer recommended - swiper에 감싸져 있는 이미지 크기가 화면 비율에 맞게 크기에 맞게 커졌다 작아졌다 해야하는데 고정되어있던 이슈

  -> swiper-slide에 flex-shrink: 1의 값을 주었기 때문에 고정이 되었던 것으로 1을 0으로 수정

- footer recommended - 앨범들을 가로로 나열해서 swiper로 넘길 수 있도록 하는데 swiper의 width가 콘텐츠의 가로보다 큰데, 조절이 잘 안됨

- footer recommended - 각각의 앨범 가사 부분만 mix-blend-mode: overlay를 주어 배경색과 어우러지도록 설정했으나 swiper를 적용하니 블렌드가 먹지 않음

  -> swiper에 통째로 overlay를 주는 것으로 대체  
  -> 마우스를 올리면 크기가 커지면 나머지는

#### 240117

- tracklist 이미지 텓스트
