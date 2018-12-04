// 2 ~ 12 사이의 임의의 수를 반환하는 dice() 주사위 함수를 만들자.

// 공식
/**
 * n부터 m까지의 정수로 된 난수가 필요하다면, 
 * Math.floor((Math.random()) * m) + n );
 */




/**
 * 2부터 12의 정수로 된 난수가 필요하다면,
 * Math.floor((Math.random()) * 12) + 2 );
 * 
 * 숫자.toFix(자리수) -> 숫자 뒤에 소수부분을 자릿수 만큼 표시
 * a = 1234.5678;
 * a.toFix(1) -> 1234.5
 */


 // 1 ~ 6까지만 나오는 주사위 함수.

 function dice() {
     return Math.floor(Math.random() * 6) + 1;
 }

 function twoDice() {
     return dice()+dice();
 }

 console.log("내가 던진 주사위 값은 ?", twoDice());