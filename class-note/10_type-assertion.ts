// 타입 단언(type assertion)
var aa;
aa = 20;
aa = 'ab';
var b = aa as string;

// DOM API 조작
// <div id="app">hi</div>

var div = document.querySelector('div') as HTMLDivElement;
div.innerHTML;
