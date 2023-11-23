const form1 = document.querySelector('form');

form1.addEventListener('submit', async (event) => {
    event.preventDefault();

const formData = new FormData(form1);
const data = Object.fromEntries(formData);

try { const response = await fetch('http://localhost:3000/index', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
});
    if (response.ok) {
        const responseData = await response.text();
        alert(responseData);
        location.reload(); 
    } else {
        alert('Ошибка при отправке данных');
    }
} catch(error) {
  alert('Ошибка при отправке данных: ' + error);
}
});