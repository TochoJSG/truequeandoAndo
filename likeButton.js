function likeButton(){
		let heart = document.querySelector('.heart');
		let likes = document.querySelector('.likes');
		if(heart.src.match('heart.png')){
			heart.src = 'heart_red.png'; 
			likes.innerHTML = '3,685';
		}else{heart.src = 'heart.png'; likes.innerHTML = '3,684'; }
	}