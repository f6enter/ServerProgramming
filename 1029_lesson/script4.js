// 함수

/**
 * 프로그램 안에서 반복해서 수행하는 계산이나 작업을 하나로 묶어 놓은 구조.
 * 함수를 활용해서 이전에 작성했던 코드를 재 사용 할 수 있다. 
 * 함수 내의 코드에서 오류가 발생했을 경우, 함수의 내용만 수정하면
 * 함수가 적용된 모든 부분에 같이 적용된다. -> 유지보수가 편하다.
 * 
 * 주의해야 될점
 * 함수는 기능에 따라서 각자 다른 이름을 가진다.
 * 함수 이름은 기능을 이해할 수 있도록 이름을 정해야 한다.
 * 
 * 함수는 기능에 따라서 필요한 재료(데이터)가 필요할 수 있다.
 * 이를 매개변수라 한다. 함수를 만들 때 매개변수도 같이 표시한다.
 * 참고로 매개변수가 필요하지 않은 경우 별도로 함수에 표시하지 않는다.
 * 
 * 함수는 기능에 따라서 반환값(리턴값)이 있거나 없을 수 있다.
 * 반환값은 함수가 기능을 수행한 결과 값이다.
 * 결과를 반환하는 코드(return)를 활용하여 함수의 결과 값을 도출한다.
 * num = window.prompt("안녕하세요","");
 * window.prompt()함수의 반환값은 변수 num에 들어간다.
 * 
 * 참고로 반환값이 없을 때는 결과를 반환하는 코드(return)를 작성하지 않아도 된다.
 * 
 * 기본형태)
 * function 함수이름(매개변수1, 매개변수2, 매개변수3, ...) {
 *     함수가 처리하는 내용
 *     return 결과값
 * }
 */

 /**
  * 예시) 두 수를 더하는 함수
  * 함수 이름 조건 : 영문자, 언더바(_), 달러기호($), 숫자를 사용할 수 있다.
  *                 단, 맨 처음 문자는 숫자가 올 수 없다.
  *                 대문자, 소문자를 구분한다. 
  */
 function addNumber(number1, number2) {
    window.document.write(number1, "<br>");
    window.document.write(number2, "<br>");
    sum = number1 + number2;

    return sum;
 }

 /**
  * 함수 사용법
  */

  result = addNumber(2, 5);
  window.document.write("결과값 : ", result, "<br>");




/**
 * 제비뽑기 프로그램을 함수 만들기.
 */

result = "";
result = window.prompt("입력하는 대화상자", "숫자");
  
select(result);


function select(num) {    
switch(num) {
    case "7":
        window.document.write("축하합니다. 1 등! 유럽여행권에 당첨되었습니다.");
        break;
    case "2":
    case "5":
        window.document.write("축하합니다. 2등! 100인치 TV에 당첨되었습니다.");
        break;
    case "4":
    case "6":
    case "9":
        window.document.write("축하합니다. 3등! 10만원 상품권에 당첨 되었습니다.");
        break;
   default :
        window.document.write("티슈 드립니다.");
        break;
  }
 }



/**
 * 국어, 영어, 수학성적을 매개변수로 받아 평균을 반환하는 함수를 만들기.
 */

 /**
  * 결과물 : 평균값
  * 재료 : 국어, 영어, 수학 점수
  */

  result = 0;
  korean = 90;
  english = 60;
  math = 50;

 function getAverage(aKorean, aEnglish, aMath) {
     sum = aKorean + aEnglish + aMath;
     return sum/3;
 }

 result = getAverage(korean,english,math);
 window.document.write("평균은 : ", result);


// 변수의 인식 범위 (scope)

/**
 * 함수 밖에서도 사용할 수 있는 변수, 함수 안에서만 쓸 수 있는 변수를 구분하여 활용할 수 있다. 
 * 
 * 로컬변수
 * 로컬 변수는 그 변수를 선언한 함 수 내에서만 사용할 수 있는 함수이며,
 * 그 범위는 함수를 감싸고 있는 대괄호({})의 시작부터 끝까지이다.
 * 함수안에서 만들 수 있으며, 변수 명 앞에 var 키워드를 붙여 만들 수 있다.
 * 기본형태)
 * function myFunction() {
 *   var num1 = 1; // 지역변수
 *   num2 = 2 // 전역변수
 * }
 */


 window.document.write("지역변수 예시<br>");
 a = 1;

 function showNumber() {
     var a;
     a = 2;
     window.document.write(a, "<br>");
 }
 showNumber();
 window.document.write(a);
  
 /**
  * 지역변수는 중괄호로 묶인 부분만 활용할 수 있으므로
  * 함수 밖에서는 활용할 수 없다.
  * 예시에서 변수의 이름이 같지만 변수를 참조하는 위치
  * (함수 밖/안)에 따라 값이 다르게 처리 된다.
  */

  // 글로벌 함수

  /**
   * 함수의 외부에서 만들고 사용한 변수를 글로벌 변수, 전역 변수라고한다.
   * 글로벌 변수는 함수의 안이나 밖에서 참조, 변경할 수 있다.
   * var를 붙이지 않는다.
   */

   num1 = 1;

   function showNumber2() {
       num1 = 3;
   }

   //showNumber2()
   window.document.write("<br>전역변수 : ", num1);

   /**
    * 지역변수는 함수 내에서 임시로 저장하는 값을 저장하는 용도.(임시저장장소)
    * 전역변수는 함수 밖에서 활용한다. 전역변수 값이 필요하면
    * 매개변수로 전역변수 값을 받는다.
    * -> 실수로 전역변수 값을 잘못 대입하면,
    * 코드 전체의 전역변수 값이 변경 될 수 있으므로 주의해야 한다.
    */


     


