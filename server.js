const http = require("http");
const requests = require("requests");
const fs = require('fs');


const replaceVal = (readFile,orgFile)=>{
  let celc_temp = orgFile.main.temp - 273.15;
   celc_temp = celc_temp.toFixed(2);
  let celc_min = orgFile.main.temp_min - 273.15;
   celc_min = celc_min.toFixed(2);
  let celc_max = orgFile.main.temp_max - 273.15;
   celc_max = celc_max.toFixed(2);
     let temperature = readFile.replace("{temp}",celc_temp);
     temperature = temperature.replace("{mintemp}",celc_min);
     temperature = temperature.replace("{maxtemp}",celc_max);
     temperature = temperature.replace("{city}",orgFile.name);
     temperature = temperature.replace("{country}",orgFile.sys.country);
     temperature = temperature.replace("{weatherstatus}",orgFile.weather[0].main);

     return temperature;
}

let homefile = fs.readFileSync("index.html","utf-8");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Bhopal,india&APPID=a460b454b9129c2fd1f2062658afd0bd"
    )
      .on("data", (chunk) => {
         let objData = JSON.parse(chunk);
         //console.log(objData);
         let arrData = [objData];
         //console.log(objData.main.temp-273.15);

         const realtimeData = arrData.map((val)=>replaceVal(homefile,val)).join("");
         res.write(realtimeData);
         //console.log(realtimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        console.log("end");
        res.end();
      });
  }
});
server.listen(8050, "127.0.0.1",()=>{
   console.log("Your WeatherApp server is ready");
});
