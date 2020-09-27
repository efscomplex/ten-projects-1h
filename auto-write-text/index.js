const app = document.getElementById('app')
const text =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab nulla veritatis eaque placeat omnis explicabo qui mollitia exercitationem neque magni rem delectus, cupiditate hic? Nisi tempora minima quas sit.'
let words = ''
let i = 0

const writerInterval = setInterval(() => {
	if (i === text.length) {
		i = 0
		words = ''
	}
	words += text.charAt(i)
	i++
	app.innerHTML = `<h1>
      ${words}
   </h1>`
}, 100)
