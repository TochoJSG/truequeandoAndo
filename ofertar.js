const buttonUs=document.querySelectorAll('#btnOfertar');
buttonUs.forEach(boton=>{
	boton.onclick=()=>{document.getElementById('ofertar').style.display='block';document.getElementsByTagName('body')[0].style.overflow='hidden';}});
const us=document.querySelector('#closeOferta');
us.onclick=()=>{document.getElementById('ofertar').style.display='none';document.getElementsByTagName('body')[0].style.overflow='visible';}


