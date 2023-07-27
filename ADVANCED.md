
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

배열
```

```
