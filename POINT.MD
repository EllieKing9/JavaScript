
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
