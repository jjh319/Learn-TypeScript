// 함수의 파라미터에 타입을 정의하는 방식
function sum4(a: number, b: number) {
    return a + b;
}

sum4(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

function sum5(a: number, b: number): number {
    return a + b;
}

sum5(10); // 에러

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log('hello world');
log('hello ts', 'abc');
