const form = document.getElementById("formDelete");

form.addEventListener('submit', e =>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key) => obj[key]=value)
    console.log(obj)
    fetch(`/api/products/${obj.idProducto}`,{
        method: 'DELETE',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result=>{
        if(result.status === 200){
            window.location.replace('/prueba')
        }
    })
})