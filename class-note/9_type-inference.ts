// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

10 + '10'; // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'gg',
//     title: 'hi',
// };

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 'ggg', // T = number로 들어오기 때문에 에러
    tag: 100,
};
