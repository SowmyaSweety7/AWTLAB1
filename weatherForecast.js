function weather(){
    let cityname = document.getElementById("cname").value;
    let apiKey = '88f7caede5de28233992b7cfabd9e660'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
    fetch(url).then((res) =>{
        return res.json()
    }).then((data)=>{
        document.getElementById("mintemp").value=data.main.temp_min
        document.getElementById("maxtemp").value=data.main.temp_max
    });
    
    }