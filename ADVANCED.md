
객체(Object)와 속성(Property)
```
//key(값이름, property name)와 value(값, property value) 한 쌍을 속성(property)이라고 한다.
//객체는 여러개의 속성과 객체을 가지고 있을 수 있다.
let objectName = {
  'key': value,
  key2: value2,
  key3: value3,
  ...,
  key5: {
    key: value,
    key: value,
    ... },
  ...
}
```

property name 주의 사항!
```
1. 첫 번째 글자: 문자, 밑줄, 달러기호로 시작
2. 뛰어쓰기 금지(뛰어쓰기 할려면 따옴표로 구성)
3. 하이픈 금지
```

점 표기법(objectName.propertyName)
```
objectName.propertyName.propertyName
```

대괄호 표기법(objectName['propertyName']) 
```
//점 표기법으로 표현이 불가한 경우 사용
objectName['propertyName']['propertyName']
```

객체 다루기
```
//생성
objectName.newPropertyName

//삭제
if('propertyName' in objectName) {
  delete objectName.propertyName
}
```

메소드(Method)
```
let myVoca = {
  addVoca: function(word, meaning) {
    // myVoca[`${word}`] = meaning;
    myVoca[word] = meaning;
  },
  deleteVoca: function(word) {
    // delete myVoca[`${word}`];
    delete myVoca[word];
  },
  printVoca: function(word) {
    // console.log(`"${word}"의 뜻은 "${myVoca[`${word}`]}"입니다.`);
    console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`)
  }
};

myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

myVoca.printVoca('property');
```

for..in 반복문
```
let myObject = {
  '3': '정수3',
  name: 'codeit',
  '1': '정수1',
  birthDay: '2017.5.17',
  '2': '정수2',
  300: '정수',
  1.2: '소수',
};
//기본적으로 key값(프로퍼티 네임)은 문자열로 형 변환되어 사용
//다만 정수형 key값(프로퍼티 네임)은 오름차순으로 먼저 정렬되어 사용

for (let key in myObject) {
  console.log(key);
}

console.log(myObject[1.2]);

->
1
2
3
300
name
birthDay
1.2
소수
```

내장객체(Standard built-in objects)
```
// Date
let myDate = new Date(2023, 6, 26, 22, 58, 00);
//let myDate = new Date('2023-07-26T22:58:00');

console.log(Date.now());
console.log(myDate.getTime()); //타임스탬프(time stamp)
//time stamp : 1970년 1월 1일 00:00:000 UTC 부터 몇 밀리초 지났는지

.getFullYear()
.getmonth() //return 0 ~ 11
.getDate()
.getDay() //return 0 ~ 6(일~토)
.getHours()
.getMinutes()
.getSeconds()
.getMilliseconds()

.toLocaleDateString()
.toLocaleTimeString()
.toLocaleString()


// 실습
let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
  let timeDiff = today.getTime() - startDate.getTime();
  let dayDiff = timeDiff / 1000 / 60 / 60 / 24;

  console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);
```

배열(array)과 요소(element)의 인덱스(index)
```
let members = [`짜장면`, '짬뽕', '탕수육']

members.length //members['length']

members.splice(members.length - 1, 1) -> members.pop //[`짜장면`, '짬뽕']
members.splice(members.length, 0, '곱배기') -> members.push('곱배기') //[`짜장면`, '짬뽕', '탕수육', '곱배기']
members.splice(0, 1) -> members.shift() //['짬뽕', '탕수육']
members.splice(0, 0, '양파') -> members.unshift('양파') //['양파', '짜장면', '짬뽕', '탕수육']

members.splice(0, 1, '단무지', '양파') //['단무지', '양파', '짬뽕', '탕수육']
members.splice(1, 0, '단무지') //[`짜장면`, '단무지', '짬뽕', '탕수육']
```

배열 메소드
```
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao')); //1
console.log(brands.indexOf('Daum')); //-1

console.log(brands.lastIndexOf('Kakao')); //3
console.log(brands.lastIndexOf('Daum')); //-1

console.log(brands.includes('Kakao')); //true
console.log(brands.includes('Daum')); //false

brands.reverse(); //["Kakao", "Naver", "Kakao", "Google"]
```

for ... of 반복문
```
let influencer = ['insta', 'face', 'twitter'];

for(let element of influencer) {
  console.log(element);
}
```

다차원 배열(multidimensional array)
```
let multiArray = [[0, 1], [2, 3], [4, 5], [6, 7]];
console.log(multiArray[0][0]);
console.log(multiArray[1][0]);
console.log(multiArray[0][1]);
console.log(multiArray[1][1]);
```

다양한 숫자 표기법
```
//지수표기법
1e3 === 1000 //true
3.5e-3 === 0.0035 //true
-9.1e-5 === -0.000091 //true

//16진법(Hexadecimal)
0xff, 0xFF //255

//8진법(Octal)
0o377 //255

//2진법(Binary numeral system)
0b11111111 //255

//toFixed(0~100), 문자열로 반환
let num = 0.3591;
console.log(num.toFixed(3)); //0.359(문자열)
console.log(num.toFixed(5)); //0.35910(문자열)
console.log(Number(num.toFixed(5))); //0.3591(숫자형)
console.log(+num.toFixed(5)); //0.3591(숫자형)

//toString(2~36), 문자열로 반환
let num = 255;
(255).toString(2); 255..toString(2); //11111111
num.toString(8); //377
num.toString(16); //0xff
```

Math 객체
```
//절대값(Absolute Number)
Math.abs(-10); //10

//최대값(Maximum) 과 최소값(Minimum)
Math.max(2, -1, 4, 5, 0); //5
Math.min(2, -1, 4, 5, 0); //-1

//거듭제곱(Exponentiation)
Math.pow(2, 3); //8

//제곱근(Square Root)
Math.sqrt(25); //5

//반올림(Round)
Math.round(2.49); //2
Math.round(2.5); //3

//버림과 올림(Floor and Ceil)
Math.floor(2.4); //2
Math.ceil(2.4); //3

//난수(Random) //0이상 1미만 값이 랜덤으로 반환
Math.random(); //0.785172717569619

//min <= num < max
Math.floor(Math.random() * (max - min)) + min;
//min <= num <= max
Math.floor(Math.random() * (max - min + 1)) + min;
```

유의하기
```
let sum = 0.1 + 0.2;
sum //0.30000000000......4
//해결
Number(sum.toFixed(1)); //0.3
+sum.toFixed(1); //0.3
Math.round(sum*10) / 10; //0.3
```

문자열(string) 심화
```
let myString = 'Hi Codeit';

myString.length;

myString.indexOf('a'); //없으면 -1 반환
myString.lastIndexOf('i'); //있으면 해당 인덱스 번호 반환

myString[3];
myString.charAt(3);

myString.toUpperCase();
myString.toLowerCase();

myString.trim(); //앞, 뒤에 있는 공백을 전부제거

myString.slice(0, 2); //Hi
myString.slice(3); //Codeit
```

배열은 'mutable(바뀔 수 있는)' 자료형인 반면 문자열은 'immutable(바뀔 수 없는)' 자료형













