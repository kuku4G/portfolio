const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

const cleanInput = (e) => {
    inputs.forEach(input => input.value = '');
    if(textarea) textarea.value = '';
};

form.addEventListener('submit', () => {

	fetch(form.action, {
		method: 'POST',
		body: new FormData(form),
	})
		.then((response) => {
			if (response.ok) {
				alert('Message sent successfully!');
				cleanInput();
			} else {
				alert('There was a problem sending your message.');
			}
		})
		.catch((error) => {
			alert('Error: ' + error.message);
		});
});
