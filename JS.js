var potentialZodiacs=["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var beginningAndEndDates=[20, 18, 19, 20, 21, 19, 20, 20, 21, 20, 21, 22, 23, 22, 23, 22, 23, 22, 23, 21, 22, 21, 22, 19];
function onSubmit() {
    var month=document.getElementById("month").value;
    var day=document.getElementById("day").value;
    var name = document.getElementById("name").value;
    var sign = determineSign(day,month);
    var text=determineHoroscope(name, sign);
    var photo= determineImage(sign);
    var birthday=determineBirthday(day, month);
    document.getElementById("output").innerHTML= text;
    document.getElementById("image").innerHTML= photo;
    if(birthday==true){
        document.getElementById("birthdayMessage").innerHTML="<div id=actualMessage>Happy Birthday " +name+"!!!</div>";
    }else{
        document.getElementById("birthdayMessage").innerHTML="";
    }

}

function populateDays(month){
    document.getElementById("day").innerHTML="";
    var days=0;
    if(month==0||month==2||month==4||month==6||month==7||month==9||month==11){
        days =31;
    }
    if(month==3||month==5||month==8||month==10){
        days=30;
    }
    if(month==1){
        days=28;
    }
    for(i=1;i<=days;i++){
        var output = document.createElement("option");
        output.setAttribute("value", i);
        output.innerHTML=i;
        document.getElementById("day").appendChild(output);
    }
}

function determineSign(day,month){
    var zodiac="";
    var j=0;
    for(i=0;i<12; i++){
        if((month==i&&day>=beginningAndEndDates[j])||month==(i+1)&&day<=beginningAndEndDates[j+1]){
            return potentialZodiacs[i];
        }
        j+=2;
    }
    if(month==0&&day<=beginningAndEndDates[beginningAndEndDates.length-1]){
        return potentialZodiacs[potentialZodiacs.length-1]
    }
}

function determineHoroscope(name, sign){
    for(var i=0;i<potentialZodiacs.length;i++) {
        if (sign == potentialZodiacs[i]) {
            return "Hi " + name + ", your Zodiac sign is: " + sign + ". You are " + horoscope[i];
        }
    }
}

function determineImage(sign){
    var text="";
    for(var i=0;i<potentialZodiacs.length;i++){
        if(sign==potentialZodiacs[i]){
            text= "<image src = 'photos/"+i+".jpg'>";
        }
    }
    return text;
}

function determineBirthday(day, month){
    var date=new Date();
    var currentDay = date.getDate();
    var currentMonth = date.getMonth();
    if(day==currentDay&&month==currentMonth){
        return true;
    }else{
        return false;
    }
}

var horoscope=["progressive, original, independent, and humanitarian.",
    "compassionate, artistic, intuitive, gentle, wise, and musical.",
    "courageous, determined, confident, enthusiastic, optimistic, honest, and passionate.",
    "reliable, patient, practical, devoted, responsible, and stable.",
    "gentle, affectionate, curious, adaptable, and able to learn quickly and exchange ideas.",
    "tenacious, highly imaginative, loyal, emotional, sympathetic, and persuasive.",
    "creative, passionate, generous, warm-hearted, cheerful, and humorous.",
    "loyal, analytical, kind, hardworking, and practical.",
    "cooperative, diplomatic, gracious, fair-minded, and social.",
    "resourceful, brave, passionate, stubborn, and a true friend.",
    "generous, idealistic, and extremely funny.",
    "responsible, disciplined, self-controlled, and well mannered."];
