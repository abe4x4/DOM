let title = document.createElement('h3')
	title.innerText = document.getElementById('createTitle').value
	let content = document.createElement('p')
	content.innerText = document.getElementById('createContent').value
	let article = document.createElement('article')
	article.appendChild(title)
	article.appendChild(content)
	if(title.innerText != "" && content.innerText != ""){
		document.getElementById("articles").appendChild(article)
	}
	document.getElementById('createTitle').value = "";
	document.getElementById('createContent').value = "";
}