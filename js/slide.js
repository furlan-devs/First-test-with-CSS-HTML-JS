let btn0 = document.querySelector('#btn-0')
let btn1 = document.querySelector('#btn-1')
let btn2 = document.querySelector('#btn-2')
let btn3 = document.querySelector('#btn-3')
let btn4 = document.querySelector('#btn-4')
let gallery = document.querySelector(".gallery")

btn0.addEventListener('click', () =>{
  gallery.style.backgroundImage = "url('/images/foto-fundo.png')"
})

btn1.addEventListener('click', () =>{
  gallery.style.backgroundImage = "url('/images/about/1.jpg')"
})

btn2.addEventListener('click', () =>{
  gallery.style.backgroundImage = "url('/images/about/2.jpg')"
})

btn3.addEventListener('click', () =>{
  gallery.style.backgroundImage = "url('/images/about/3.jpg')"
})

btn4.addEventListener('click', () =>{
  gallery.style.backgroundImage = "url('/images/about/4.jpg')"
})


