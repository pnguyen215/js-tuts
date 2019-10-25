let url  = "https://github.com/pnguyen215/?q={aaabbbccc}";
let encoded = encodeURI(url);
console.log(encoded); // https://github.com/pnguyen215/?q=%7Baaabbbccc%7D
try{
	let decoded = decodeURI(encoded);
	console.log(decoded); // https://github.com/pnguyen215/?q={aaabbbccc}
}catch(e){
	console.error(e);
}