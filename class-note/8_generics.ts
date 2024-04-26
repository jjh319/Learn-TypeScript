// function logText(text) {
//     console.log(text);

//     return text;
// }

function logText<T>(text: T): T {
    console.log(text);

    return text;
}

logText<string>('하이');
