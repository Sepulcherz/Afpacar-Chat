const textArea = document.querySelector('.messenger__text-area')
const input = document.querySelector('.messenger__input')

input.addEventListener('keypress', function (e) { if (e.keyCode === 13) { textArea.innerHTML += `<div class='message__sent'>${input.value}  </div>`  
input.value = null ;  } });

