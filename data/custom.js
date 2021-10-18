
function submitForm(){
    alert('Submitted')
}

var form = document.getElementById("contact");

form.addEventListener('submit', handleForm);

function handleForm(event) {
    alert('Submitted') 
    event.preventDefault(); 
} 