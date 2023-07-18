# JavaScript

<meta charset="UTF-8">
<h6>

Web
```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Codeit JavaScript</title>
</head>
<body>
    <script src="./index.js"></script>
</body>
</html>
```

자료형(Data type)
```
숫자(Number) : 사칙연산(+ - * %) 가능
- 정수(Integer), 소수(Floating point)

문자열(string) : + 연산 가능

불린(Boolean)
- true, false
```

추상화(Abstraction)

변수(Valiable) 선언은 let
```
let espressoPrice;
espressoPrice= 3000;
```

식별자
```
1. (a-z, A-Z), (_), ($) 로 시작
2. '대문자'와 '소문자' 구별
```

스타일 가이드
- Airbnb의 자바스크립트 스타일 가이드(https://github.com/ParkSB/javascript-style-guide)
- Google의 자바스크립트 스타일 가이드(https://google.github.io/styleguide/jsguide.html)
- w3schools.com 스타일 가이드(https://www.w3schools.com/js/js_conventions.asp)
- StandardJS(https://standardjs.com/rules-kokr.html)
- Idiomatic.JS(https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR)
```
VSCode > Settings > 검색창에서 editor tab이라고 검색
Editor: Detect Indentation 체크 해제
Editor: Tab Size 는 2로 변경
스타일 가이드 자동 적용
이미 작성한 코드는 드래그 해서 마우스 오른쪽 클릭으로 나타나는 메뉴에서 Fomat Document 선택하면 적용
```

함수(Function)
```
//함수 선언
function functionName() {
    command;
    command;
};

//함수 호출
functionName();
```

매개변수(Parameter)
```
function funcName(parameter) {
    console.log(parameter);
}

funcName('Hola');
```

return
```
function funcName(parameter) {
    return parameter * 2 ;
}

let x = funcName(5);
console.log(x);

console.log(funcName(5));
```






