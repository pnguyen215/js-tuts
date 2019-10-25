function removeHTMLTags(string){
	return string.replace(/<[^>]*>/g, '');

}

let text = "<p>nguyen huu phuoc </p>";
console.log(removeHTMLTags(text));