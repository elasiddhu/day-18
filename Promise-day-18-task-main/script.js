async function foo(){
    let res =await fetch ("https://restcountries.com/v3.1/all");
    let res1=await res.json();
    console.log(res1);
    var name1 = res1.filter((obj)=>obj.region ==="Asia");
    console.log(name1);
//india
    var india1 = name1.filter((obj)=>obj.name.common === "India");
    console.log(india1);
    var na1 = india1.filter((obj1)=>{
        document.getElementById("country1").innerHTML=`<h3 class="text-center">${obj1.name.nativeName.eng.common}</h3>`;
        console.log(obj1.name.nativeName.eng.common);
        });
    var fla1 = india1.filter((obj1)=>{
        document.getElementById("flag1-img1").innerHTML=`<img src="${obj1.flags.png}" class="card-img-top" style="width:15rem;height:8rem; margin-top:10px; margin-left:50px;" alt="" >`;
        console.log(obj1.flags.png);
        });
    var reg1 = india1.filter((obj1)=>{
        document.getElementById(
            "card-text1"
            ).innerText=` 
            Region:${obj1.region}
            Native Name:${obj1.name.nativeName.eng.common}
            Population:${obj1.population}
            Country code:${obj1.cca3}
            Capital:${obj1.capital[0]}
            `;
        console.log(obj1.region);
        console.log(obj1.cca3);   
        console.log(obj1.capital[0]);
        console.log(obj1.population);
        console.log(obj1.latlng);
    });
    
// china 
    var china1 = name1.filter((obj)=>obj.name.common === "China");
    console.log(china1);
    var na2 = china1.filter((obj2)=>{
        document.getElementById("country2").innerHTML=`<h3 class="text-center">${obj2.name.common}</h3>`;
        console.log(obj2.name.common);
        });
    var fla2 = china1.filter((obj2)=>{
        document.getElementById("flag1-img2").innerHTML=`<img src="${obj2.flags.png}" class="card-img-top" alt="" style="width:15rem;height:8rem; margin-top:10px;margin-left:50px;" >`;
        console.log(obj2.flags.png);
        });
    var capi2 = china1.filter((obj2)=>{
        document.getElementById(
            "card-text2"
            ).innerText=` 
                    Region:${obj2.region}
                    Native Name:${obj2.name.common}
                    Population:${obj2.population}
                    Country code:${obj2.cca3}
                    Capital:${obj2.capital[0]}
                    `;
        console.log(obj2.region);
        console.log(obj2.cca3);   
        console.log(obj2.capital[0]);
        console.log(obj2.population);
        console.log(obj2.latlng);      
        });
//japan
    var japan1 = name1.filter((obj)=>obj.name.common === "Japan");
    console.log(japan1);
    var na3 = japan1.filter((obj3)=>{
        document.getElementById("country3").innerHTML=`<h3 class="text-center">${obj3.name.common}</h3>`;
        console.log(obj3.name.common);
        });
    var fla3 = japan1.filter((obj3)=>{
        document.getElementById("flag1-img3").innerHTML=`<img src="${obj3.flags.png}" class="card-img-top" alt="" style="width:15rem;height:8rem; margin-top:10px;margin-left:50px;" >`;
        console.log(obj3.flags.png);
        });
    var capi3 = japan1.filter((obj3)=>{
        document.getElementById(
            "card-text3"
            ).innerText=` 
            Region:${obj3.region}
            Native Name:${obj3.name.common}
            Population:${obj3.population}
            Country code:${obj3.cca3}
            Capital:${obj3.capital[0]}
            `;
        console.log(obj3.region);
        console.log(obj3.cca3);
        console.log(obj3.capital[0]);
        console.log(obj3.population);
        console.log(obj3.latlng);
        });  
}
foo();
// India Weather report
let bn1 = document.getElementById("btn1");
bn1.addEventListener('click',()=>{
    let ind = fetch ("https://api.openweathermap.org/data/2.5/weather?lat=20&lon=77&appid=ca112fd8ff007a6940a08407c211d787");
    ind.then((ind1)=>{
        return ind1.json();
    }).then((info1)=>{
        console.log(info1);
     
       document.getElementById(
                    "weather-info1"
                    ).innerHTML=`<ul class = "list-group">
                                <li class = "list-group-item bg-dark text-white text-center text-uppercase">weather reprt of ${info1.sys.country}</li>
                                <li class = "list-group-item list-group-item-secondary text-center">Temperature : ${info1.main.temp}celcious</li>
                                <li class = "list-group-item list-group-item-secondary text-center">Temperature : ${info1.wind.speed}m/s</li>
                                <li class = "list-group-item list-group-item-secondary text-center">Humidity : ${info1.main.humidity}%</li>
                                </ul> `;
});  
});
// China Weather Report
let bn2 = document.getElementById("btn2");
bn2.addEventListener('click',()=>{
    let cn = fetch ("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=105&appid=ca112fd8ff007a6940a08407c211d787");
    cn.then((cn1)=>{
        return cn1.json();
    }).then((info2)=>{
        console.log(info2);
     
       document.getElementById(
                    "weather-info2"
                    ).innerHTML=`<ul class = "list-group">
                                <li class = "list-group-item bg-dark text-white text-center text-uppercase">weather reprt of ${info2.sys.country}</li>
                                <li class = "list-group-item list-group-item-secondary text-center">Temperature : ${info2.main.temp}celcious</li>
                                <li class = "list-group-item list-group-item-secondary text-center">Temperature : ${info2.wind.speed}m/s</li>
                                <li class = "list-group-item list-group-item-secondary text-center">Humidity : ${info2.main.humidity}%</li>
                                </ul>`;
});
});
// Japan Weather Report
let bn3 = document.getElementById("btn3");
bn3.addEventListener('click',()=>{
let jp = fetch ("https://api.openweathermap.org/data/2.5/weather?lat=36&lon=138&appid=ca112fd8ff007a6940a08407c211d787");
jp.then((jp1)=>{
    return jp1.json();
}).then((info3)=>{
    console.log(info3);
 
   document.getElementById(
                "weather-info3"
                ).innerHTML=`<ul class = "list-group">
                            <li class = "list-group-item bg-dark text-white text-center text-uppercase">weather reprt of ${info3.sys.country}</li>
                            <li class = "list-group-item list-group-item-secondary text-center">Temperature : ${info3.main.temp}celcious</li>
                            <li class = "list-group-item list-group-item-secondary text-center">Temperature : ${info3.wind.speed}m/s</li>
                            <li class = "list-group-item list-group-item-secondary text-center">Humidity : ${info3.main.humidity}%</li>
                            </ul> `;
});
});         