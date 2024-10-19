let menuBtn=document.querySelector('.menu');
let tab=document.querySelector('.tab');
let removeBtn=document.querySelector('.remove');
let overlay=document.querySelector('.overlay');
menuBtn.addEventListener('click', ()=>{
	tab.classList.add('show-tab');
	overlay.classList.add('show-overlay');
});
removeBtn.addEventListener('click', ()=>{
	tab.classList.remove('show-tab');
	overlay.classList.remove('show-overlay');
});