let url = "https://github.com/pnguyen215/?q={aaabbbccc}";
let encoded = encodeURIComponent(url); // https%3A%2F%2Fgithub.com%2Fpnguyen215%2F%3Fq%3D%7Baaabbbccc%7D
console.log(encoded);
try{
	let decoded = decodeURIComponent(encoded);
	console.log(decoded);
}catch(e){
	console.error(e);
}