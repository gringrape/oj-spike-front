Feature('problem');

Scenario('shows problem page', ({ I }) => {
  I.amOnPage('/problem');

  I.see('문제 : 덧셈');
  I.see('두 숫자를 입력받아 결과를 출력하는 함수를 작성하세요');
});
