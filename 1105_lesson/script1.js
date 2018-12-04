// 정규 표현

/**
 * 문자열을 추상적으로 표현(패턴)하여 주어진 문자열이
 * 올바른 자료인지 검사하기 위한 방법.
 * 
 * 숫자표현
 * [0-9], -> 0, 2, 3, 4, 5, 6, 7, 8, 9
 * 
 * 예시1)
 * 입력 : 1
 * 패턴 : [0-9]
 * -> 바른 입력
 * 
 * 예시2)
 * 입력 : a
 * 패턴 : [0-9]
 * -> 틀린 입력
 * 
 * 문자표현
 * [a-z] -> 소문자 a에서 z까지 허용
 * [A-Z] -> 소문자 A에서 Z까지 허용
 * 
 * 예시1)
 * 입력 : a
 * 패턴 : [a-b]
 * -> 바른 입력
 * 
 * 예시2)
 * 입력 : f 
 * 패턴 : [a-c]
 * -> 틀린 입력
 * 
 * 특수문자 표현
 * [~!@#$%^&*()] -> 대괄호 안에 허용할 특수 문자를 입력
 * 
 * 예시1)
 * 입력 : /
 * 패턴 : [!@#$]
 * -> 틀린입력
 * 
 * 예시2)
 * 입력 : /
 * 패턴 : [~!@#/]
 * -> 바른 입력
 */

 test_pat = /[0-9]/;
 test_pat_2 = /[a-b]/;
 test_pat_3 = /[~!@]/;

 user_input = "a" // 사용자가 입력한 내용

 /**
  * 패턴.test(검사할 문자열);
  * 
  * 검사할 문자열이 패턴에 맞는 바른 입력일 경우에는 true을 리턴
  * 검사할 문자열이 패턴에 맞지 않는 틀린 입력일 경우에는 false를 리턴
  */
 
 test_pat_2.test(user_input);


 window.document.write(test_pat_2.test(user_input));


 /**
  * for문 복습.
  * 1. 구구단 2~4단까지 출력하기.
  * 2. 오늘 날짜 만 출력하기 (시간필요 X)
  * 3. 다음 표와 같이 9개의 숫자값을 배열에 저장하고, 각 열의 합계를 구하자.
  * 28 38 62
  * 36 81 65
  * 47 46 46
  */



  // 구구단 2~4단까지 출력하기.
  a = 0;

  for(i=2; i<=4; i++) {
      for(j=1; j<=9; j++){
          a = i * j;
          window.document.write(i + "*" + j + "=" + i*j, "<br>" );
      }
  }
  



//오늘 날짜 출력
  now = new Date();

  window.document.write(now.getFullYear(), now.getMonth()+1, now.getDate(),"<br>");

  // 강사님 ver.
year = now.getFullYear();
month = now.getMonth()+1;
date = now.getDate();

window.document.write(year, month, date, "<br>");




  // 9개의 숫자값을 배열에 저장하고, 각 열의 합계를 구하자.

  b = new Array()
  b = [[28, 38, 62],[36, 81, 65], [47, 46, 46]];
  
  sum1 = 0;
  sum2 = 0;
  sum3 = 0;

  for(i=0; i<=2; i++){
      sum1 += b[i][0];  
      sum2 += b[i][1];
      sum3 += b[i][2];    
  }
  window.document.write(sum1,"<br>");
  window.document.write(sum2,"<br>");
  window.document.write(sum3,"<br>");


  // 강사님 ver.
  arr = [];
  arr[0] = [28, 38, 62];
  arr[1] = [36, 81, 65];
  arr[2] = [47, 46, 46];

  sum_1 = 0;
  sum_2 = 0;
  sum_3 = 0;

  for(i=0; i<3; i++) {
      sum_1 += arr[i][0];
      sum_2 += arr[i][1];
      sum_3 += arr[i][2];
  }

  window.document.write("<br>", sum_1, "/", sum_2, "/" ,sum_3 );
  
