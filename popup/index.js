const modal = `
   <div id='modal'>
      <h3 id='modal-content'>Here you must place a message!
         <div id='close-btn'>x</div>
      </h3>
   </div>
`
document.getElementById('app').innerHTML = `
<h1 id='modalized'>
   Do you want to see my modal ...? 
</h1>
<h1>😄</h1>
${modal}
`
const openModal = () => {
	console.log('open')
	document.getElementById('modal').classList.add('show-modal')
}
const closeModal = (e) => {
	document.getElementById('modal').classList.remove('show-modal')
}

document.getElementById('modalized').addEventListener('click', openModal)
document.getElementById('close-btn').addEventListener('click', closeModal)
