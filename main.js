(function (window, document) { //즉시실행 함수 만들기. 모듈화(전체범위를 더럽히지 못하게 범위를 설정함.)
  'use strict'

  const $toggles = document.querySelectorAll('.toggle'); //NodeList임.. 유사배열..
  const $toggleBtn = document.getElementById('toggle-btn');
  
  //클릭 시
  $toggleBtn.addEventListener('click', function() {
    toggleElements();
  });

  window.addEventListener('resize', function() {//브라우저의 크기가 줄어들거나 늘어날 때
    if(window.innerWidth > 1024) { //뷰포트 크기가 1024px보다 클때
      //Off toggle element
      offElements(); //토글을 닫는다
    }
  })

  function toggleElements() { //토글이 열리는 함수 선언
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.toggle('on');
    }) // toggles를 반복하는 이유? ==> 이 문서의 html에서는 아니지만, toggle의 갯수가 유동적으로 변경될 수도 있기 때문에 갯수에 상관없이 하나씩 처리하기 위해
  }

  function offElements() { //토글이 열린 상태에서 일정 뷰포트보다 커질 때 토글을 닫는 함수 선언
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.remove('on');
    })
  }

})(window, document)

//window는 기본적으로 브라우저 의미