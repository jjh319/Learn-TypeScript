class Person {
    // 클래스 로직
    constructor(name, age) {
        // 기본생성자
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    } // Constructor
}

var see = new Person('지훈', 25);
console.log(see);
