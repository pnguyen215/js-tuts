function escapeHTML(string){
	string = string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,'&#gt;').replace(/'/g,'&#39;').replace(/"/g,'&qout;');
	return string;
}


let text = "<h1>phuocnguyen</h1><br/>";
console.log(escapeHTML(text));