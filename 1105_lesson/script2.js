// Object 오브젝트 형
/**
 * 사용자가 기본자료형(number, string, boolean)을 조합해서 만든
 * 사용자 정의 형태 자료형.
 */

 /**
  * 오브젝트 이름 = { 자료이름 : 데이터값}
  */

  a = { name : "배철수", score : 100};
  b = { name : "홍길동", score : 40};

  /**
   * 오브젝트에 저장된 값을 읽어오려면 ?
   * 
   * 오브젝트 이름.자료이름 -> 데이터값 리턴
   */

   window.document.write(a.score, "<br>");

   /**
    * 경우에 따라서 데이터값은 숫자, 문자, 배열, 함수
    */

   person = {
       name : "손흥민",
       number : 7,
       id : 3123,
       family : ["아버지", "어머니", "형"],
       say_hello : function() {
           return "good morning!";
       }
   }
   window.document.write("<br>", person.name);
   window.document.write("<br>", person.number);
   window.document.write("<br>", person.id);
   window.document.write("<br>", person.family);
   window.document.write("<br>", person.say_hello());



   // 오브젝트 안에 오브젝트를 넣을 수 있다.
   player = {
       son : {
        name : "손흥민",
        number : 7,
        id : 3123,
        family : ["아버지", "어머니", "형"],
        say_hello : function() {
            return "good morning!";
        }
    },
       park : {
        name : "박지성",
        number : 13,
        id : 3123,
        family : ["아버지", "어머니", "형"],
        say_hello : function() {
            return "good job!";
        } 
    }    
   }

window.document.write("<br>", player.park.name);



// 배열에 오브젝트를 넣을 수 있다.
korean = [];
son = {
    name : "손흥민",
    number : 7,
    id : 3123,
    family : ["아버지", "어머니", "형"],
    say_hello : function() {
        return "good morning!";
    }
};

park = {
    name : "박지성",
    number : 13,
    id : 3123,
    family : ["아버지", "어머니", "형"],
    say_hello : function() {
        return "good job!";
    } 
};

korean.push(son);
korean.push(park);

console.log(korean);
window.document.write(korean[0].name);
window.document.write(korean[0].number);
window.document.write(korean[0].id);
window.document.write(korean[0].family);
window.document.write(korean[0].say_hello());



// 스마트폰을 대상으로 정하고 오브젝트 만들기
/**
 * 대상의 상태 : 스마트폰 전원, 스마트폰 통화중
 * 대상의 행동 : 전화를 건다, 문자메시지를 보낸다, 사진을 찍는다.
 */

 smartphone = {
     on_off : "on",
     calling : "calling",
     call_func : function(){
         return "전화중입니다.";
     },
     sms : function() {
         return "문자를 보냅니다.";
     },
     photo : function() {
         return "사진을 찍습니다.";
     }
 }

 window.document.write("<br>", "지금 켜져 있나요 ?", smartphone.on_off);
 window.document.write("<br>", smartphone.photo(), "<br>");





// 자동차 오브젝트 만들기 (for문으로 내용 출력)
/**
 * 제작사  차량명   색상    연료    사동을 건다(함수)
 * 기아    소울    빨강   가솔린    화면에 "붕붕~" 출력
 * 현대    코나    은색   전기      화면에 "위잉위잉~" 출력
 * 쌍용    티볼리  검정   디젤      화면에 "우와아앙~" 출력 
 */

Car = [];
//Car = [kia, hyundai, ssangyong];

kia = {
    type : 1,
    company : "기아",
    name : "소울",
    color : "빨강",
    gas : "가솔린",
    engine : function() {
         return "붕붕~";
     } 
};


hyundai = {
    type : 2,
    company : "현대",
    name : "코나",
    color : "은색",
    gas : "전기",
    votage : "10v",
    engine : function() {
        return "위잉위잉~";
    }
};

ssangyong = {
    type : 1,
    company : "쌍용",
    name : "티볼리",
    color : "검정",
    gas : "디젤",
    engine : function() {
        return "우와아앙~";
    }
};

Car.push(kia);
Car.push(hyundai);
Car.push(ssangyong);

console.log(Car);

for(i=0; i < Car.length; i++){
    // i = 0, 1, 2
    if(Car[i].type == 2){
        window.document.write(Car[i].votage, "<br>");
    }
    window.document.write(Car[i].company, "<br>");
    window.document.write(Car[i].name, "<br>");
    window.document.write(Car[i].color, "<br>");
    window.document.write(Car[i].gas, "<br>");
    window.document.write(Car[i].engine(), "<br>");
    window.document.write("<br>","<br>");
}


