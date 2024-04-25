// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');

// 유니온 타입(Union Type)
var seho2: string | number | boolean = true;

function logMessage(value: string | number) {
    if (typeof value === 'number') value.toLocaleString();

    if (typeof value === 'string') value.toString();

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer2 {
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

// Union 타입
function askSomeOne(someone: Developer2 | Person3) {
    someone.name; // 공통된 name만 사용 가능 - union 타입의 특징
}

// 인터섹션 타입
function askSomeOne2(someone: Developer2 & Person3) {
    someone.name;
    someone.age;
    someone.skill;
}
