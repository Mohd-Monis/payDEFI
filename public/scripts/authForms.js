const signUpButton = document.getElementById('signUp1');
const signInButton = document.getElementById('signIn1');
const container = document.getElementById('container');

console.log(signInButton);
console.log(container);

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});