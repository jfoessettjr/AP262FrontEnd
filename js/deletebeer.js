const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if( data.beer == "" 
	){
        window.alert("Error Message");
    }
    else {
        fetch('https://beersapc.onrender.com/api_productname/v1/beers/12', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
    }
});
