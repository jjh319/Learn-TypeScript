// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');

// 유니온 타입(Union Type)
function logMessage(value: string | number) {
    console.log(value);
}

logMessage('hello');
logMessage(100);
