const heartAnimation = document.querySelector('.heart-animation');

for (let i = 0; i < 10; i++) {
	const heart = document.createElement('span');
	heart.classList.add('heart');
	heart.innerHTML
    (
        '&#10084;'
    );
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartAnimation.appendChild(heart);
}