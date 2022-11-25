let cont = document.getElementById('cont');
let weathercont = document.getElementById("weathercont");
let animecont = document.getElementById("animecont");
let date = new Date();
let hours = date.getHours();

if((hours>=0 && hours<=4) || hours>=20){
   cont.style.backgroundImage = "url('https://pixnio.com/free-images/2017/05/31/2017-05-31-10-40-42.jpg')";
}
else if(hours>4 && hours<=8){
   cont.style.backgroundImage = "url('https://i.pinimg.com/originals/46/0a/e8/460ae8cd79ac4c24870c8d17dcd8fcbb.jpg')";
}
else if(hours>8 && hours<=15){
   cont.style.backgroundImage = "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/magic-noon-sky-sun-greece-chris-pappas.jpg')";
}
else if(hours>15 && hours<20){
  cont.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/002/042/985/original/cloudy-mountain-sunset-scene-vector.jpg')"
}

//console.log(date.getDay());
let dayarr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
let montharr = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
let toggle = "";
//console.log(date.getDate());
//console.log(date.getMonth());
//console.log(date.getMinutes());

if(hours>=0 && hours<12){
  toggle = "AM";
}
else{
  toggle = "PM";
}
let minutes = "";
if(date.getMinutes() >= 0 && date.getMinutes() < 10){
    minutes = `0 + ${date.getMinutes()}`
}
//---------------------------------------------------------------------------------------------//
