//HTML문서에 글자를 표시하는 코드
/*
* 문자열을 표시할 때 쌍따옴표(""), 따옴표('') 모두 사용 가능하다.
* 코드 마지막에는 세미클론(;)을 작성한다.
*/
window.document.write("김은정"+" ");


// 대화상자(메시지창)을 표시하느 코드
//window.alert("안녕하세요");

// 웹페이지 배경색을 바꾸는 코드
//window.document.bgColor="gray";

/*
* = 다음에는 색상 이름 혹은 색상의 RGB 코드를 작성한다.
* 색상 이름은 www.w3scool.com에서 color name을 검색하면 색상 목록이 출력된다.
* 색상 목록이 출력된다.
*/

window.document.fgColor="green";

// 변수
/*
 * 변수에 값(데이터)을 넣으려면 대입연산자(=)을 활용한다.
 * 변수 이름은 =을 기준으로 왼편에, 데이터는 오른편에 적는다.
 * 마지막은 세미콜론(;)으로 
 * 변수 이름 규칙 : 영문자, 언더바(_), 달러기호($) 단, 맨 첫 문자로는 숫자는 올 수 없다. 대소문자 구분한다.
 */

//  a = 1;
//  b = "글자";
//  b = 3;
// 최종 적으로 변수 a에는 1이 저장, b에는 "글자" >> 3으로 저장.

// 자료의 형태1 - Number
/**
 * Number 자료형에는 정수, 음수, 실수 모두 저장이 가능하다.
 */
// a = 1;
// a = -1;
// a = 1.1;

// 자료의 형태2 - boolean
/**
 * boolean 자료형은 true(참), false(거짓)만 저장이 가능하다.
 * 보통 boolean 자료형을 쓰는 경우는 2가지 중 한가지 상태일 때,
 * ex) 회원 여부, 결제 여부 등을 표시할 때 쓴다.
 */

 b = true;
 c = false;

// 자료의 형태3 - 문자열(String)
/**
 * 문자열이란 : 하나 이상의 문자를 나열한 것
 * 문자열은 큰 따옴표 혹은 작은 따옴표로 감싸서 표현
 * ex)"abcd", 'abcd'
 */ 

 d = "abcd";
 
 // 이스케이프 시퀸스
 /**
  * 문자열을 처리할 때 특정 문자가 문자열에 있으면, 해당 특정 문자는 글자로 처리하지 않는 문자들
  * \n : 줄 바꿈
  * \t : 탭
  * \" : 따옴표를 글자로 표시한다.
  * \' : 작은따옴표를 글자로 표시한다.
  * 
  * 문자열 중에 따옴표 혹은 작은 따옴표를 중복으로 쓰지 않는다.
  * d = "abc("")"; (이렇게 쓰지 않음 (중복))
  * d = "abc('')"; (안쪽의 따옴표를 작은 따옴표로 바꿔 쓴다.)
 */ 

 // d = "<pre>ab\ncd</pre>";
 //window.document.write(d);

 /**
  * 문자열을  html에 출력할때 <pre></pre>태그를 붙여준다.
  */

  // 자료의 형태4 - 오브젝트(Object)형
 //사용자가 기본 자료형(number, string, boolean)을 조합해서 만든 사용자 정의 형태 자료형
 /**
  * 학생의 점수 정보를 저장한다고 했을 때 기본 자료형으로만 저장한다면, 
  * 수학점수 : Number,
  * 학생이름 : String
 */ 
/**
 * 학생점수 정보 저장을 위해
 * Number형, String형 변수 한개씩을 묶어서 오브젝트 변수로 만듬.
 * 표현할 수 있는 데이터 형태 다양해짐
 * 코드를 작성할 때 별도의 변수를 참조하는 것보다, 데이터를 가져오기 편하다. 
 */ 

 // 자료의 형태5 - null 형
/**
 * 값이 없다. 
 */ 

 // 자료의 형태6 - 미정의(undefined) 형
 /**
  * 변수가 존재하지 않는다.
  */

 // 자료의 형태7 - NoN(Not a Number) 형
 /**
  * '데이터가 숫자가 아니다'
  * ex) 글자를 숫자로 바꾸고 싶을 경우
  * '1' >> 1
  * '가나다라' >> NoN
  */

 // 자료의 형태8 - Infinity 형
 /**
  * 무한대를 표시한다.
  * ex) num = 100 / 0;
  * num >> '-Infinity'가 표시
  * 
  */

  // 데이터 형 변환하기
  /**
   * case 1)
   * 문자열을 순자(정수)로 바꾸는 경우
   * parseInt() >> 괄호 안에 문자열을 넣는다.
   * ex1)
   * a = "234";
   * num = parseInt(a);
   * 
   * num >> 234(숫자)
   * ex2) 
   * a = "hi";
   * num = parseInt(a);
   * 
   * num >> NoN(숫자가 아니다.)
   * 
   * case 2)
   * 문자열을 숫자(소수)로 바꾸는 경우
   * 
   * parseFloat() >> 괄호 안에 문자열을 넣는다.
   * 
   * ex)
   * b = "3.14";
   * num = parseFloat(b);
   * 
   * num >> 3.14(소수)
   * 
   * case 3)
   * 숫자를 문자열로 바꾸는 경우
   * 변수이름 .toString(); >> 변수이름이 붙는다, 괄호 안에는 아무것도 쓰지 않는다.
   * 변수 안의 값을 문자열로 바꾸어 주는 코드
   * 
   * ex)
   * a = 3;
   * str = a.toString();
   * 
   * str >> "3"(문자열)
   * 
   * b = true;
   * b.toString();
   * 
   * b = "true";
   * 
   * 모든 자료형은 toString() 코드로 문자열로 바꿀 수 있다.
   * 문자열은 number 형으로만 바꾸는 코드(parseInt(), parseFloat()가 제공된다.)
   * 
   * 주의) boolean형은 문자열로 문자열을 boolean형으로 바꾸는 기능을 제공하는 코드는 공식적으로는 없다.
   * 변환을 하려면, 직접 변환 코드를 작성해야한다.
   */

   // 연산자
   /**
    * 산술연산자(+, -, *, /, % )
    * % (나머지, 모듈러 연산)의 활용 : 나머지의 값이 항상 나누는 값보다 작다는 점을 이용해서
    * 특정 범위의 값을 얻고 싶을 때 활용한다.
    * 내가 0~2 사이에 값을 가지고 싶다면, 특정 수를 3으로 나누고 나머지를 취한다.
    */

    /**
     * 대입연산자 ( = ) : 데이터를 변수에 저장하는 연산자
     * 좌측에는 변수가, 우측에는 값을 적는다.
     * 
     * ex)
     * a = a + 2;
     * 
     * 우측 : 변수 a에 저장된 값과 2를 더한 결과값
     * 좌측 : 변수 a
     * 
     * a += 2; (축약형태 : 더해서 저장한다)
     * 
     * a -= 2; (빼고 저장한다)
     * a *= 2; (곱하고 저장한다)
     * a /= 2; (나누고 저장한다)
     * a %= 2; (나머지를 저장한다)
     * 
     */

     // 증가 연산자 & 감소 연산자
     /**
      * ++ : 증가 연산자, 변수의 값을 1 증가 시킨다.
      * b = 1;
      * b++;
      * 
      * b >> 2
      * -- : 감소 연산자, 변수의 값을 1 감소시킨다.
      * b = 0;
      * b--;
      * 
      * b >> -1
      * 
      * 활용 : 데이터의 묶음인 배열(리스트)에서 순서대로 데이터를 찾아갈때 
      * 주소에 증가 연산자, 감소 연산자를 활용하여 데이터를 참조한다. 
      * 
      */

      // 변수 이름++ 와 ++변수이름의 차이
      /**
       * case 1)
       * a = 1;
       * x = a++;
       * 
       * x >> 1
       * (변수x 에 먼저 저장하고 변수 a의 값을 1 더한다.)
       * 
       * case 2)
       * a = 1;
       * x = ++a;
       * 
       * x >> 2, a >> 2 (변수 a값을 1 더하고, 변수 x에 a의 값을 저장한다.)
       * 
       */
// 변수 a에 값 1을 저장한다.
a = 1;   

// 증가연산자(++)가 변수 a의 앞에 작성되어 있으므로
// 변수 a값에 1을 더한 값을 변수 x에 저장한다.
// x >> 2, a >> 2
x = ++a;

// 변수 x의 값을 HTML 문서에 출력한다.
window.document.write(x+" "); // <<< 가 = 2

// 증가연산자(++) 변수 a의 뒤에 작성되어 있으므로, 
// 변수 x에 변수 a의 값을 저장하고, 변수 a의 값을 1 더한다.
// x >> 2, a >> 3
x = a++;

// 변수 x의 값을 HTML 문서에 출력한다.
window.document.write(x+" "); // <<< 나 = 2

// 변수 a의 값을 HTML 문서에 출력한다.
window.document.write(a+" "); // <<< 다 = 3

    // 비교 연산자
    /**
     * 값의 크기를 비교하는 연산자 결과값이 true 혹은 false으로 나타난다.
     * 
     * ex) 10 < 20 (10은 20보다 작다) >> true(참)
     * ex2) 20 < 10 (20은 10보다 작다) >> false(거짓)
     * 
     * a < b  (a는 b보다 작다)
     * a > b  (a는 b보다 크다)
     * a <= b (a는 b보다 작거나 같다)
     * a >= b (a는 b보다 크거나 같다)
     * a == b (a는 b와 같다)
     * a != b (a는 b와 같지않다)
     */

     // 삼항 연산자
     /**
      * 조건식의 결과에 따라 값이나 처리를 선택하여 처리하는 연산자.
      * 
      * 조건식 ? 조건식이 참일 경우의 값 : 조건식이 거짓일 경우의 값
      * 
      * point = 90;
      * a = (point > 75) ? "합격" : "불합격"; >>> a ="합격";
      * 
      * a >> "합격"
      */

     //논리 연산자
     /**
      * 여러개의 비교연산자(조건)를 조합하여 활용할 때 활용하는 연산자.
      * 
      * 형태 : 조건1 && 조건2
      * 의미 : 조건1 그리고 조건2 (조건1 과 조건2가 모두 만족할 때 전체 조건이 참)
      * ex) ((a >= 10) && (a < 50))
      * 
      * 형태 : 조건1 || 조건2
      * 의미 : 조건1 또는 조건2 (조건1 과 조건2가 둘중에 하나라도 만족하면 전체조건이 참)
      * ex) ((a == 1) || (a == 100))
      * 
      * 형태 : !조건1
      * 의미 : 조건1이 아니다. (반대)
      * ex) !(a==100) 
      * 
      * 수학적 표기와 다른 것에 주의합시다.
      * ex)
      * 
      * 의미 : a값은 4보다 크고 4.5보다 작거나 같다.
      * 수학적 표기 : 4<a<=4.5
      * 논리 연산자 : (4 < a) && (a <= 4.5)
      * 
      */

      // 연산자 우선 순위
      /**
       * 규칙1 : 괄호()로 둘러싸인 부분을 무조건 먼저 계산 한다.
       * 규칙2 : 같은 순위일 경우는 왼편부터 계산한다.
       * ex)
       * d / (a + b)*c
       * 
       * 실행1 : a+b >> 괄호로 둘러싸였다.
       * 실행2 : d / (a + b) >> *,/비교했을 때 왼편 먼저 계산한다. 괄호를 활용하는것이 좋다. (d / (a + b))*c
       * 
       * ex)
       * a = b = c = 1
       * 
       * 실행1 : c = 1;
       * 실행2 : b = c;
       * 실행3 : a = b;
       */
