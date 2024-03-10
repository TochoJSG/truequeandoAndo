const productosJson = [
    {name: "Trailer ", imgMain:"publicaciones/art0.png", intereses: "acepta{dinero,maquinaria}", desc: "trailer 1995 en excelentes condicions",propietario:"Usuario A",condicion:"seminuevo"},
    {name: "Bocinas", imgMain:"publicaciones/art1.png", intereses: "acepta{maquinas de vending}", desc: "sistema de audio rofesional funcionando con 6 meses de uso",propietario:"Usuario B",condicion:"seminuevo"},
    {name: "Mole", imgMain:"publicaciones/art2.png", intereses: "acepta{Pickup, dinero}", desc: "camion de volteo listo ara trabajar",propietario:"Usuario D",condicion:"seminuevo"},
    {name: "pulidora", imgMain:"publicaciones/art3.png", intereses: "acepta{dinero,comutadora}", desc: "ulidora profesional",propietario:"Usuario A",condicion:"nuevo"},
    {name: "Selladora", imgMain:"publicaciones/art4.png", intereses: "acepta{compresora,Pickup,dinero}", desc: "maquina profesional jaopnesa de sellado",propietario:"Usuario C",condicion:"seminuevo"},
    {name: "Camioneta", imgMain:"publicaciones/art5.png", intereses: "acepta{dinero,maquinas tragamoneda, maquinas de vending}", desc: "Pickup 2010 en regla",propietario:"Usuario B",condicion:"seminuevo"},
    {name: "Mecancias", imgMain:"publicaciones/art6.png", intereses: "acepta{dinero, mesas y silas,sistema de audio}", desc: "artticulos de importacion nuevos",propietario:"Usuario D",condicion:"nuevo"},
    {name: "Tractocamion", imgMain:"publicaciones/art7.png", intereses: "acepta{trailer y diferencia, dinero}", desc: "camion recien afinado listo para trabajar",propietario:"Usuario C",condicion:"seminuevo"},
	{name: "Trailer", imgMain:"publicaciones/art8.png", intereses: "acepta{maquinaria de produccion}", desc: "trailer 2000 en otimas condiciones refacturado",propietario:"Usuario A",condicion:"seminuevo"},
    {name: "Pickup", imgMain:"publicaciones/art9.png", intereses: "acepta{dinero, maquinas de vending}", desc: "Pickup 2018 unico dueño en regla todo",propietario:"Usuario E",condicion:"seminuevo"},
    {name: "Fabricadora", imgMain:"publicaciones/art10.png", intereses: "acepta{camioneta}", desc: "maquiina para fbricar cosas ",propietario:"Usuario E",condicion:"nuevo"},
    {name: "Productora", imgMain:"publicaciones/art11.png", intereses: "acepta{auto, camineta, dinero}", desc: "maquina para producir cosas",propietario:"Usuario E",condicion:"seminuevo"},
    {name: "Auto BMW", imgMain:"publicaciones/art12.jpeg", intereses: "acepta{maquinas de vending,maquinas de fabricacion}", desc: "bmw 2000 blindado unico dueño",propietario:"Usuario B",condicion:"seminuevo"},
    {name: "Fabrica", imgMain:"publicaciones/art13.png", intereses: "acepta{casa,dinero}", desc: "bien raiz",propietario:"Usuario F",condicion:"seminuevo"},
    {name: "Sierra Fija", imgMain:"publicaciones/art14.png", intereses: "acepta{pulidora}", desc: "sierra fija nueva",propietario:"Usuario A",condicion:"seminuevo"},
    {name: "Remachadora", imgMain:"publicaciones/art15.png", intereses: "acepta{auto, camineta, dinero}", desc: "maquina que hace algo",propietario:"Usuario C",condicion:"seminuevo"},
    {name: "Maquina X", imgMain:"publicaciones/art16.png", intereses: "acepta{auto, camineta}", desc: "maquina que remacha",propietario:"Usuario B",condicion:"seminuevo"},
    {name: "Nave", imgMain:"publicaciones/art17.png", intereses: "acepta{dinero, flota de autos}", desc: "nave industrial de 2000m cuadrados",propietario:"Usuario H",condicion:"seminuevo"}
];
const carruselA = document.getElementById('carrusel-gral');	
let plantillaCar='';
productosJson.forEach(item=>{
	plantillaCar+=`
	<div class="prod_car">
		<picture>
			<div class="imgBx">
			<img src="${item.imgMain}" alt="loading..."/>
			</div>
		</picture>
		<div class="details_car">
			<h2>${item.name}
				</h2>
			<p>${item.intereses}
				</p>
			<p>publicado por ${item.propietario}
				</p>
			<a id="btnOfertar" type="button">Ofertar
				</a>
		</div>
	</div>
	`;
});
carruselA.innerHTML = plantillaCar;

let span = document.querySelectorAll('span');
let product = document.getElementsByClassName('prod_car');
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
//Mobile View
let mobile_view = window.matchMedia("(max-width:100%)");
if(mobile_view.matches){
	movePer = 50.36;
	maxMove = 504;
}
let right_mover = () => {
	l = l + movePer;
	if(product == 1){
		l = 0;
	}
	for(const i of product){
		if(l > maxMove){l = l - movePer;}	
		i.style.left = '-' + l + '%';
	}
}
let left_mover = () => {
	l = l - movePer;
	if(product <= 1){
		l = 0;
	}
	for(const i of product){
		if(product_page > 1)
		i.style.left = '-' + l + '%';
	}
}
span[0].onclick = () => {left_mover();}
span[1].onclick = () => {right_mover();}