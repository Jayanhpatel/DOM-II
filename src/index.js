import './less/index.less'
// load
window.onload = function (evt){
    console.log(`event ${evt.type} fired! Ready to go`)
    const heading = document.querySelector('h1');
    heading.textContent = 'Ready to go'

// Copy
window.addEventListener('copy',() => {
    navigator.clipboard.readText()
    .then(text =>{
        heading.textContent += text
    })
})
// click
document.body/addEventListener('click', evt =>{
    evt.target.classList.toggle('mirror')
})
// dbl click
document.body.addEventListener('dblclick', evt =>{
    evt.target.innerHTML =''
})
// key down
window.addEventListener('keydown' , evt =>{
    if (evt.key == 6){
        document.body.innerHTML ='<h1>Order 66</h>'
    }
})
document.body.addEventListener('mousemove', evt =>{
    const { clientX, clientY } = evt
})
}
const destinations = document.querySelectorAll('.destinations')
for (let destination of destinations){
    destination.addEventListener('mouseenter', () =>{
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () =>{
        destination.style.fontWeight = 'initial'
    })
}