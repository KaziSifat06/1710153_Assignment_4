function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";}

fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newName.value + "&appid=f4f76f0ee541baeae1d3e71bd61d2cec")
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(let i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 295.51).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(let i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 295.51).toFixed(2) + "°";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(let i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src =" https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
    }
    
    


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))


function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Dhaka";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    


