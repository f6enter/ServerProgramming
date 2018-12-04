// 문자열 관련 함수
/**
 * 글자를 저장하는 문자열에 몇가지 함수들을 활용하여,
 * 문자열의 길이(글자수), 문자추출, 분할, 검색 등을 할 수 있는 함수들을 소개한다.
 */

// 문자열의 길이
/**
 * 문자열에 저장된 문자의 수를 구한다.
 * 
 * 변수.length;
 * 리턴값이 문자의 수.
 */
msg = "반갑습니다";
num = msg.length; // 5

// 문자열에서 특정 문자 잘라내기
/**
 * 문자열에서 지정된 한 문자를 잘라내려면, charAt()함수를 활용한다.
 * 
 * 변수.charAt(잘라낼 한 문자의 순서번호);
 * 변수에 저장된 원본은 변하지 않고, 리턴값은 잘라낸 한 문자가 나타난다.
 */

 msg = "그린컴퓨터아트학원";
 msg2 = msg.charAt(5);
 //window.document.write(msg2);

// 문자열을 특정 문자를 기준으로 분할 하려면 split()함수를 활용한다.
/**
 * 변수.split(기준이되는 글자) 
 * 리턴값으로 나누어진 문자열의 배열
 * (문자열이 나누어진 갯수에 따라서 배열의 크기가 결정)
 */

 mydate = "2018/05/30";
 arr = mydate.split("/");
 
 console.log(arr);

 /**
  * 나누어진 문자열을 저장한 리턴값은 나누어진 순서대로 순서번호를 활용하여 읽어올 수 있다.
  * 
  * 결과저장변수 = 변수이름[순서번호];
  */

  myMonth = arr[1];
  console.log(myMonth);

// 문자열 검색하기
/**
 * 문자열을 검색하려면 indexOf() 함수를 활용한다.
 * 문자를 찾았을 때 발견된 문자의 인덱스번호를 리턴하고,
 * 못찾았을 때는 -1을 반환한다.
 * 
 * 결과저장변수 = 변수이름.indexOf(찾을 문자열, 검색을 시작할 글자의 순서번호);
 */

 msg = "반갑습니다";
 result = msg.indexOf("안", 0);

 console.log(result);

 /**
  * 두개의 문자열을 입력받아서(prompt())
  * 두개 문자열의 글자가 더 긴 문자열을 보여주는 코드를 작성하시오.
  * 
  * 결과물 : 두개중 긴 문자열
  * 재료 : 문자열 2개, 각 문자열의 길이
  */

//   a = "장수하늘소";
//   b = "하늘소";

//   window.document.write("a : ", a, "<br>");
//   window.document.write("b : ", b, "<br>");

  a = ""; // 첫번째 문자열
  b = ""; // 두번째 문자열
  result = ""; // 긴 문자열
  a_length = 0; // 첫번째 문자열 길이
  b_length = 0; // 두번째 문자열 길이

  a = window.prompt("첫 문자열을 입력하세요", "");
  b = window.prompt("두번째 문자열을 입력하세요", "");

  a_length = a.length; // 첫번째 문자열 길이
  b_length = b.length; // 두번째 문자열 길이


  if(a_length < b_length) {
      result = b;
    //window.document.write("하늘소");
  } else if(a_length > b_length) {
      result = a;
    //window.document.write("장수하늘소");
  } else {
      result = "두 문자열의 길이가 같다.";
    //window.document.write("글자 길이가 같다.");
  }
  window.document.write(result);

  console.log(result);


  // 수학 함수

  /**
   * 수학 관련된 기능들을 모아놓은 수학함수를 활용하여
   * 쉽게 값을 계산할 수 있다.
   * 
   * 변수 = Math.함수이름(함수의 매개변수들);
   * 
   * abs() / 절대값 / a = Math.abs(-1) / 1
   * ceil() / 절상(올림) / a = Math.ceil(100.4) / 101
   * floor() / 절하(내림) / a = Math.floor(100.4) / 100
   * max() / 최대값 반환 / a = Math.max(1, 8, 3) / 8
   * min() / 최소값 반환 / a = Math.min(1, 8, 3) / 1
   * pow() / 거듭제곱 / a = Math.pow(4, 2) / 16
   * random() / 임의 수를 선택(난수) / a = Math.random() / 랜덤
   * round() / 소수점이하는 버림 / a = Math.round(100.4) / 100
   * sqrt() / 평방근(루트값) / a = Math.sqrt(25) / 5
   * PI / 원주율 / a = Math.PI / 3.14...
   */

   
   a = Math.abs(-1);
   console.log("a의 값 : ");

   // random() 함수를 활용해서 임의의 수를 선택한다. (난수를 생성한다.)

   /**
    * random() 함수는 0이상 1미만의 범위의 임의의 실수를 만든다.
    * 주로 floor함수랑 같이 조합하여 임의의 정수를 만든다.
    */

    // 가정) 1에서 10까지의 정수로 된 난수가 필요하다.

    
          
    // Math.random() // 0 ~ 0.9999....
    // Math.random() * 10 // 최대 범위 값 = 10 -> 0 ~ 9.9999....
    // (Math.random() * 10) + 1 // 최소 범위 값 = 1 -> 1 ~ 10.99999...
    // Math.floor((Math.random() * 10) + 1 ) // floor() -> 1 ~ 10
    



    // 공식
    /**
     * 정수n부터 m까지 임의의 정수를 선택하는 방법 (n < m)
     * 
     * 임의의 정수 = Math.floor(Math.random() * (m - n + 1)) + n 
  
     */

    

    // 2 ~ 12 사이의 임의의 수를 반환하는 dice() 주사위 함수를 만들자.
    /**
     * 2부터 12의 정수로 된 난수가 필요하다면,
     * Math.floor((Math.random()) * 12) + 2 );
     * 
     * 숫자.toFix(자리수) -> 숫자 뒤에 소수부분을 자릿수 만큼 표시
     * a = 1234.5678;
     * a.toFix(1) -> 1234.5
     */


     // 날짜

     /**
      * 날짜나 시간을 다루려면 Date(객체)를 사용한다.
      * 시간을 지정지 않으면 현재 시간으로된 Date를 만든다.
      * 
      * 날짜를 저장할 변수 = new Date();
      * 
      * getFullYear() / 연도를 반환한다.
      * getMonth() / 월을 반환한다. (1월 0, 2월 1, ...), 반환값 +1
      * getDate() / 일을 반환한다.
      * getDay() / 요일을 반환한다. (0:일요일, ~ 6:토요일 (0 ~ 6))
      *  
      */

      now = new Date();
      window.document.write(now);


      // 날짜을 가져오는 함수들

      /*
        Date()함수 결과물에서 날짜를 가져올 수 있다.
        날짜를 저장할 변수.함수이름();
      */

      console.log(now.getFullYear());
      console.log(now.getMonth()+1);
      console.log(now.getDate());
      console.log(now.getDay());




      // 시간을 가져오는 함수들

      /**
       * getHours() / 시간을 반환한다.
       * getMinutes() / 분을 반환한다.
       * getSeconds() / 초를 반환한다.
       * 
       */
            
      /**
       * getTime() 1970년도 1월 1일 오전 0시부터 현재까지 밀리초 단위 값을 반환한다.
       */

      console.log(now.getHours());
      console.log(now.getMinutes());
      console.log(now.getSeconds());


// 특정 날짜로부터 현재까지 몇일이 지났는지 알아보기 
day = new Date(2002, 1, 1, 0, 0, 0);
now = new Date();

// getTime() 시간을 밀리초로 바꾸는 함수
day_mil = day.getTime();
now_mil = now.getTime();
console.log("2002년1월1일을 밀리초로 : " + day_mil);
console.log("오늘 날짜를 밀리초 단위로 바꾸면 : " + now_mil);

// 오늘날짜와 2002년도 값의 차이를 구한다.
dif = now_mil - day_mil;
console.log("2002년부터 오늘까지" + dif +"만큼 지났다.");

// 차이를 일 단위로 바꾼다.
dif_days = Math.ceil(dif/(24*60*60*1000));

window.document.write(dif_days);











    


