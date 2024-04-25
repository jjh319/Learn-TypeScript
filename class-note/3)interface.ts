interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
    age: 33,
    name: '세호',
};

// 함수에 활용한 인터페이스
function getUser(user: User) {}

function capt(): User {
    const jjh = {
        age: 20,
        name: 'wlgns',
    };

    return jjh;
}

getUser(capt());

// 함수의 스팩(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum77: SumFunction;
sum77 = function (a: number, b: number) {
    return a + b;
};

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr2: StringArray = ['a', 'b', 'c'];
arr2[0] = 'asd';

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj2: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};

Object.keys(obj2).forEach(function (value) {});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    language: 'ts',
    age: 100,
    name: '지훈',
};
