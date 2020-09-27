const AppEl = document.getElementById('app')
const menu = `
   <nav id='nav'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
   </nav>
`
const header = `
   <header>
      <h1> Menu App Challenge </h1>
   </header>
`
const main = `
   <main>
      <h3 class='subtitle'> A beautyful app as an example of a toggle menu...</h3>
      <img class='hamb-pic'src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80'/>
   </main>
`
AppEl.innerHTML =  header + menu + main

const nav = document.getElementById('nav')

const toggleShow = () => {
   console.log('toggle please');
   nav.classList.toggle('show')
}

nav.addEventListener('click', toggleShow)
