/**
 * 루프 중단하기
 * 
 * for문이나 while 같은 반복문을 도중에 중단하는 방법이다.
 * 이때 break문을 사용한다. 반복문 안에 break가 있으면,
 * 반복문 대괄호 부분의 마지막으로 코드의 실행 흐름이 이동한다.
 * 
 * 기본형태)
 * while(조건){
 *      실행되는 부분 1
 *      break;
 *      실행 안되는 부분
 * }
 * 실행되는 부분 2
 */

 b = 2;
 for(a=0;a<5;a++) {
    // a는 1,2,3,4 
    if(b==a) {
        continue;
     }
     window.document.write(b, "-", a, "=", b-a,"<br>");
 }


 /**
  * 기본형태)
  * while(조건) {
  *     실행되는 부분 1
  *     if(조건2) {
  *     continue;
  *     }
  *     실행이 될 수도 있고 안될 수도 있는 부분
  *  }
  * 실행되는 부분2
  */

  /**
   * 선택문
   * 
   * 프로그램의 실행흐름에서 값에 따라 경우에 따라 다른 처리를 해야 할 경우를 
   * 간단하게 처리하기 위한 구문이다.
   * 
   * switch문은 여러개의 case라는 선택 사항에 따라 값이 맞는 것을 골라 처리한다.
   * 선택사항 값이 맞지 않는 경우는 default선택으로 넘어간다.
   * 
   * 기본형태)
   * switch(변수이름) {
   *    case 변수값1 :
   *        처리하고 싶은 내용1
   *        break;
   *    case 변수값2 :
   *        처리하고 싶은 내용2
   *        break;
   *    default :
   *        처리하고 싶은 내용3
   * }
   */

i = 10;
switch(i) {
    case 10 :
        window.document.write("변수값은 10이다.","<br>");
        break;
    case 20 :
        window.document.write("변수값은 20이다.","<br>");
        break;
    default :
        window.document.write("변수값은 10, 20이 아니다.","<br>");
}

// break 문을 생락하는 경우
/**
 * 예시) 월마다 말일을 알려주는 프로그램을 작성할 때
 * 
 * 각 case마다 같은 처리를 하는 경우에는 break를 의도적으로
 * 제외하여 코드를 작성하면 여러번 반복해서 작성하지 않아도 된다.
 */

 month = 4;
 day = 30;
 switch(month) {
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
    case 10 :
    case 12 :
        day = 31;   
        break;
    case 2 :
        day = 28;   
        break;
    case 4 :
    case 6 :
    case 9 :
    case 11 :
        day = 30;   
        break;
    default :
        day = -1;
        break;
 }
 window.document.write(month,"월은 " ,day,"일 이다.");

 /**
  * 참고 : 웹페이지에서 사용자에게 값 입력받기
  * 
  * 변수 : window.prompt("메시지 내용","기본값");
  * 웹페이지에서 사용자에게 입력 받을 수 있는 대화상자가 나타난다.
  * 변수에 사용자가 입력한 값이 저장된다.
  */

  mes = window.prompt("입력하는 대화상자","안녕하세요");
  window.document.write(mes);


  