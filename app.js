//elements



const startBtn = document.querySelector("#start");
 
/*
//weather setup
function weather(location) {
    const weatherCont = document.querySelector(".temp").querySelectorAll("*");
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=48ddfe8c9cf29f95b7d0e54d6e171008`;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            weatherCont[0].textContent = `Location :${data.name}`;
            weatherCont[1].textContent = `Country :${data.sys.country}`;
            weatherCont[2].textContent =  `Weather type :${data.weather[0].main}`;
            weatherCont[3].textContent = `weather description :${data.weather[0].description}`;
            weatherCont[4].src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherCont[5].textContent =`Original Temperature :${ktc(data.main.temp
            )}`;
            weatherCont[6].textContent = `feels like ${ktc(data.main.feels_like)}`;
            weatherCont[7].textContent =   `Min temperature ${ktc(data.main.temp_min)}`;
            weatherCont[8].textContent = `Max temperature ${ktc(data.main.temp.max)}`;
            weatherStatement = `sir the weather in ${data.name} is ${
                data.weather[0].description
            }and the temperture feels like ${ktc(data.main.feels_like)}`;
        }else{
            weatherCont[0].textContent = "Weather Info Not Found";
        }
};

xhr.send();
}
//convert kelvin to celcius
function ktc(k) {
    k = k- 273.15;
    return k.toFixed(2);
}
//calling the wather function
weather("vishakapatnam")

*/

//speech recogniton setup

const SpeechRecogniton =
window.SpeechRecogniton || window.webkitSpeechRecognition;

const recognition = new SpeechRecogniton();

// vr start
recognition.onstart = function () {
    console.log("vr active");
};

//sr result 
recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase()
    console.log(`my words : ${transcript}`);
    if(transcript.includes("hello bro")){
        readOut("hello sir");
    }
    if(transcript.includes("hello vamshi")){
        readOut("hi how are you im fine");
    }
    if(transcript.includes("open college website")){
        readOut("opening college website");
        window.open("https://www.scient.ac.in/");
    }
    if(transcript.includes("open google")){
        readOut("opening google");
        window.open("https://www.google.com/");
    }
    //google search

    if(transcript.includes("search for")) {
        readOut("here is the result");
        let input = transcript.split("");
        input.splice(0, 11);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    }
};

// vr stop
recognition.onend = function () {
     console.log("vr deactive");
};

//sr continous 
//recognition.continuous = true;

startBtn.addEventListener("click" , () => {
    recognition.start()
});

stopBtn.addEventListener("click", () => {
    recognition.stop()
});

// scient speech
function readOut(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1;
    speech.pitch = 0.9;
    speech.rate = 1;
     window.speechSynthesis.speak(speech);
    console.log("speaking out");
}

//example

speakBtn.addEventListener("click",() => {
    readOut("hi, my dear vamshi, lets speak somethig");
});
