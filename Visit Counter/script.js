let pageCount = document.querySelector('.page-count');

const viewCounter = () => {
    fetch('https://api.countapi.xyz/hit/kunalsalunkhe12-viewcounter/4ab2c360-e93e-48a4-a833-7568a4f46ba4')
        .then(res => res.json())
        .then(data => {
            let dataVal = data.value;

            let increment = Math.floor(dataVal/20);
            setInterval(() => {
                
                if (pageCount.innerHTML < dataVal) {
                    pageCount.innerHTML = increment++;
                }else{
                    return
                }
            }, 1)
        })
        .catch(err => console.log(err))
}

viewCounter();




