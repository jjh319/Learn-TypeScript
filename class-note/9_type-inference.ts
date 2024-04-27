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

// Best Common Type 추론 방식
/**
 * 타입은 보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론,
 * 그 표현식을 이용하여 가장 근접한 타입을 추론하게 되는데 이 가장
 * 근접한 타입을 Best Common Type 이라고 합니다.
 */
var arr = [1, 1, true, 'a'];
