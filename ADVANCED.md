
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
if(propertyName in objectName) {
  delete objectName.propertyName
}
```
