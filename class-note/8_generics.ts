// function logText(text) {
//     console.log(text);

//     return text;
// }

// 타입 추론에서의 이점
function logText<T>(text: T): T {
    console.log(text);

    return text;
}

logText<string>('하이');
logText<boolean>(true);

// 인터페이스에 제네릭 사용

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown2<number> = { value: 100, selected: true };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
} // logTextLength
logTextLength<string>(['ht', 'ddsd']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface logTextLength {
    length: number;
} // logTextLength

function logTextLength2<T extends logTextLength>(text: T): T {
    text.length;
    return text;
} // logTextLength2

logTextLength2(10); // 오류 - 기본타입 number는 length 속성을 가지고 있지 않기 때문
logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
} // ShoppingItem

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
} // getShoppingItemOption

getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock');
