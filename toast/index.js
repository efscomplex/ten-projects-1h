const toast = `
   <div id='toast'>
      <img src='https://icomoon.io/iconsabf18a1/21/48.svg'/>
      <span> I'am showing you this nice tooltip to help you..</span>
   </div>
`

document.getElementById('app').innerHTML = `
<h1>
  Want to see a beautiful toast?
</h1>
<div class='btn-group'>
   <button class='success'> Click Me </button>   
   <button class='warning' > Click Me </button>   
   <button class='danger' > Click Me </button>   
</div>
${toast}
`
const toastEl = document.getElementById('toast')
const showToast = (event) => {
	const type = event.target.classList[0]
	toastEl.style.backgroundColor = `var(--${type})`
	toastEl.classList.add('show')
	setTimeout(() => toastEl.classList.remove('show'), 2000)
}
const btns = document.querySelectorAll('button')
btns.forEach((btn) => btn.addEventListener('click', showToast))
