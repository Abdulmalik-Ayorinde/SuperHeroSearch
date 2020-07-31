const searchBox = document.getElementById('searchbox')
const searchBtn = document.getElementById('searchBtn')
var results = document.getElementById('results')
var body = document.querySelector('body')
const box = searchBox.value

function getText(data) {
	var box = searchBox.value
	// console.log(box)
	fetch(`https://www.superheroapi.com/api.php/903577863471587/search/${box}`)
		.then((resp) => resp.json())
		.then((data) => {
			const info = data.results
			if (box === undefined) {
				prompt('Kindly input a name')
			} else {
				for (let i = 0; i < info.length; i++) {
					// console.log(info[i])
					const resultImage = document.createElement('img')
					const personalDetails = document.createElement('div')
					const resultBody = document.createElement('div')
					resultBody.innerHTML = `${info[i].name}`
					resultBody.classList.add('resultBody')
					personalDetails.classList.add('resultBody')
					personalDetails.innerHTML = `Base: ${info[i].work.base}`
					resultImage.setAttribute('src', `${info[i].image.url}`)
					resultImage.setAttribute('alt', `Broken Image`)
					results.appendChild(resultBody)
					results.appendChild(resultImage)
					results.appendChild(personalDetails)
				}
			}
		})
}

searchBtn.addEventListener('click', getText)
