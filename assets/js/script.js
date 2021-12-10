let inputName = document.getElementById('cont-name'),
    inputMessage = document.getElementById('message');


inputName.addEventListener('input', function() {
    inputMessage.value = `My name ${inputName.value}. And I would like to ask:  `;
});