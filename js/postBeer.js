const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    if( data.beer == "" 
	|| data.abv == "" 
	|| data.style == "" 
    || data.brewery == "" 
	){
        window.alert("Error Message");
    }
    else {
        fetch('https://beersapc.onrender.com/api_productname/v1/beers/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res =>{
        if (res.ok) { console.log("HTTP request Successful")}
        else { console.log("HTTP request unsuccessful")}
        return res
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(error => console.log(error))
    }
});
