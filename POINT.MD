
사칙연산
```
+, -, *, /
**, %
```

문자열
```
"문자열", '문자열'
```

불대수
```
참(true), 거짓(false)
AND, OR, NOT

true AND false 는 false
true OR  false 는 true
NOT true 는 false
```

블린 (Boolean)
```
ANT연산자 &&
OR연산자 ||
NOT연산자 !

(3 === 3) true
(3 !== 3) false

===, !== 는 자료형까지도 비교
```

typeof 연산자
```

```

우선순위	연산자 유형	기호
```
21	그룹	(...)
...		
17	논리 NOT	! ...
17	typeof	typeof ...
16	거듭제곱	... ** ...
15	곱셈	... * ...
15	나눗셈	... / ...
15	나머지	... % ...
14	덧셈	... + ...
14	뺄셈	... - ...
...		
12	미만	... < ...
12	이하	... <= ...
12	초과	... > ...
12	이상	... >= ...
11	동등	... == ...
11	부등	... != ...
11	일치	... === ...
11	불일치	... !== ...
...		
6	논리 AND	... && ...
5	논리 OR	... II ...
...		
3	할당	... = ...
```

형 변환(Type Conversion)
```
String()
Number()
Boolean() //falsy : ``, 0, NaN

산술연산 -> 숫자형으로 자동 행변환하여 계산
예외) + : 문자열이 하나라도 잇따면 문자열 연산을 하게 된다.

관계비교연산(<, <==, ...) -> 숫자형으로 자동 행변환하여 계산

같음비교연산
일치, 불일치(===, !==) -> 행변환 없음
동등, 부등(==, !=) -> 동등, 부등 연산만 숫자형으로 자동 행변환하여 계산 
```

템플릿 문자열(template strings)
```
let year = 2018;
let month = 3;
let day = 11;
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

let myNumber = 3;
function getTwice(x) {
  return x * 2;
}
console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`)

템플릿 문자열을 쓰시려면 ' 와 같은 single quote 가 아니라 `(backtick)을
```

null, undefined
```
null : 값이 없다고 의도적으로 표현
undefined : 프로그램 실행 결과로 값이 없다는 것을 확인
```

할당 연산자(Assignment operators)
```
let left = 5, right =3;
left = left + right;
오른쪽의 피연산자를 왼쪽의 피연산자에 할당
```

복합 할당 연산자(Compound assignment operators), 
증가(increment), 감소(decrement) 연산자
```
x = x + 1; -> x += 1 -> x++
x = x - 1; -> x -= 1 -> x--
x *= 2, x /= 2, x %= 7
```

함수의 옵셔널 파라미터와 return문
```
function sayHello(name) {
  console.log(`안녕하세요 ${name}님!`);
}
sayHello(); -> 안녕하세요 undefined님! 이 로그에 출력
let x;
console.log(x); -> undefined 가 로그에 출력
console.log(sayHello('코드잇최고')); -> undefined 가 로그에 출력

Optional Parameter ==> 선언할 때 파라미터 중 가장 뒤쪽!!!에 선언
function sayHello(name = '코드잇') {
  console.log(`안녕하세요 ${name}님!`);
}
```

변수의 범위와 영역(Scope)
```
블록문(Block Statement)안에서만 유효한
로컬, 지역 변수(Local Variable)와
블록문을 포함한 좀 더 큰 영역에서 유효한
전역 변수(Global Variable)로 구분
```

상수(constant)
```
let myNumber = 3.14; -> const MY_NUMBER = 3.14;
```

if문(if statement)
```
//등호 세 개를 사용해 일치 비교
```
switch문(switch statement)
```
//값들을 비교할 때 자료형을 엄격하게 구분
let myChoice = 1;
switch(myChoice){
  case 1:
    console.log('1를 선택');
    break;
  case 2:
    console.log('2를 선택');
    break;
  default:
    console.log('수고하셨습니다.');
}
```
반복문(loop statement)
```
function printTriangle(height) {
	let message = '';
	for(let i = 1; i <= height; i++){
	  message += '*';
	  console.log(message);
	}
}
```


