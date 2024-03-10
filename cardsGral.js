const cardsGral = document.querySelector('.cardsGral');
let cardsGralTemplate = ''
productosJson.forEach(item=>{
	cardsGralTemplate+=`
<div class="boxRGB">
	<div class="imgBxRGB">
		<img src="${item.imgMain}"/>
	</div>
	<div class="contentRGB">
		<h2>${item.name}</h2>
		<p>publicado por ${item.propietario}</p>
		<p>${item.intereses}</p>
		<p>${item.desc}</p>
		<a id="btnOfertar" type="button">Ofertar</a>
	</div>
</div>`;
});
cardsGral.innerHTML = cardsGralTemplate;