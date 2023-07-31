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

```
1부터 어떤 양의 정수 n까지의 정수를 모두 곱한 것을 말하며 n!로 나타낸다.

팩토리얼은 아래와 같이 계산합니다. 0!은 1이라는 점도 기억해주세요.

0! = 1
1! = 1
2! = 1 * 2 = 2
3! = 1 * 2 * 3 = 6
4! = 1 * 2 * 3 * 4 = 24
5! = 1 * 2 * 3 * 4 * 5 = 120
6! = 1 * 2 * 3 * 4 * 5 * 6 = 720
그러면, 파라미터로 양의 정수 n을 받고 n!을 계산해서 리턴해 주는 함수 factorial을 작성해 주세요.
```
```
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));
479001600
720
6
1
```

```
현태는 현명하게 거스름돈을 계산해 주는 프로그램을 만들려고 합니다. 예를 들어 33,000원짜리 물건을 사기 위해 100,000원을 냈다면,

50,000원 1장
10,000원 1장
5,000원 1장
1,000원 2장
이런 식으로 '가장 적은 수'의 지폐를 거슬러 주는 것입니다. 방금 같은 경우에는 총 5장을 거슬러 준 거죠.

우리는 calculateChange라는 함수를 작성하려고 하는데요. 이 함수는 지불한 금액을 나타내는 payment와 물건의 가격을 나타내는 cost를 파라미터로 받습니다.

주어진 코드에 이어서 깔끔하게 프로그램을 작성해 보세요.
```
```
function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  const fiftyCount = (change - (change % 50000)) / 50000;
  change = change - 50000 * fiftyCount;

  const tenCount = (change - (change % 10000)) / 10000;
  change = change - 10000 * tenCount;

  const fiveCount = (change - (change % 5000)) / 5000;
  change = change - 5000 * fiveCount;

  const oneCount = (change - (change % 1000)) / 1000;
  change = change - 1000 * oneCount;

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
```
```
floor 메소드를 활용한다면, 아래 코드와 같습니다.

function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  const fiftyCount = Math.floor(change / 50000);
  change = change - 50000 * fiftyCount;

  const tenCount = Math.floor(change / 10000);
  change = change - 10000 * tenCount;

  const fiveCount = Math.floor(change / 5000);
  change = change - 5000 * fiveCount;

  const oneCount = Math.floor(change / 1000);
  change = change - 1000 * oneCount;

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
```
```
//더욱 정리한 코드
function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  function billCounting(amount) {
    const count = (change - (change % amount)) / amount;
    change = change - amount * count;
    return count;
  }

  const fiftyCount = billCounting(50000);
  const tenCount = billCounting(10000);
  const fiveCount = billCounting(5000);
  const oneCount = billCounting(1000);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
```
```
//더욱 정리한 코드 + floor사용
function calculateChange(payment, cost) {
  // 여기에 코드를 작성하세요
  let change = payment - cost; // 거스름돈 총액

  function billCounting(amount) {
    const count = Math.floor(change / amount);
    change = change - amount * count;
    return count;
  }

  const fiftyCount = billCounting(50000);
  const tenCount = billCounting(10000);
  const fiveCount = billCounting(5000);
  const oneCount = billCounting(1000);

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
```

```
"토마토"나 "기러기"처럼 거꾸로 읽어도 똑같은 단어를 '팰린드롬(palindrome)'이라고 부릅니다.

팰린드롬 여부를 확인하는 함수 isPalindrome을 작성하려고 하는데요. isPalindrome은 파라미터 word가 팰린드롬이면 true를 리턴하고 팰린드롬이 아니면 false를 리턴합니다.

예를 들어서 "racecar"과 "토마토"는 거꾸로 읽어도 똑같기 때문에 true가 출력되어야 합니다. 그리고 "hello"는 거꾸로 읽으면 "olleh"가 되기 때문에 false가 나와야 하는 거죠.

function isPalindrome(word) {
  // 여기에 코드를 작성하세요
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    let left = word[i];
    let right = word[word.length - 1 - i];
    if (left !== right) {
      return false;
    }
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
true
false
true
true
false
true
```
