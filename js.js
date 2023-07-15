const date = new Date();
console.log(date);
let day = date.getDate(); let month = date.getMonth() + 1;

var audio = new Audio('assets\\audio\\easteregg.mp3');
var audio2 = new Audio('assets\\audio\\easteregg_mega.mp3');
let achivements = 0;
let count = 0;
let i = 0; let x = 0; let y = 0; let z = 0;


/*---------------------------------------- SIDEBAR ----------------------------------------*/
function opensidebar(){
  document.getElementById("sidebar").style.transform = "translateX(0%)";
}
function closesidebar(){
  document.getElementById("sidebar").style.transform = "translateX(100%)";
}


/*----------------------------------------- COLORS -----------------------------------------*/
const colors = document.querySelectorAll('.color');

colors.forEach(element => {
  element.addEventListener('click', copyToClipboard);
});

function copyToClipboard() {
  const computedStyle = window.getComputedStyle(this);
  const rgbColor = computedStyle.getPropertyValue('background-color');

  // Convert RGB color to hex format
  const hexColor = rgbToHex(rgbColor);

  var tempInput = document.createElement("input");
  tempInput.value = hexColor;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  setTimeout("callNotification()", 500);
  setTimeout("closeNotification()", 4000);

}

function callNotification(){
  audio.play();
  document.getElementById("notification").style.transform = "translate(0,1vh)";
}
function closeNotification(){document.getElementById("notification").style.transform = "translate(0,-15vh)";}

// Function to convert RGB color to hex format
function rgbToHex(rgbColor) {
  // Extract RGB values from the string
  const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    return rgbColor;
  }

  // Convert the RGB values to hex format
  const hexColor = "#" + ((1 << 24) | (parseInt(match[1]) << 16) | (parseInt(match[2]) << 8) | parseInt(match[3])).toString(16).slice(1);

  return hexColor;
}


/*----------------------------------------- TYPING -----------------------------------------*/
var typed = new Typed('#typing', {
  strings: ['web developer^1000', 'software engineer^1000', 'web designer^1000'],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
  loopCount: Infinity,
});


/*---------------------------------------- EASTEREGGS ----------------------------------------*/
function calleaster(){
  console.log(achivements);

  if(achivements == 5){
    audio2.play();
    document.getElementById("easter").style.transform = "translate(0,1vh)";
    document.getElementById("eastertext").style.display = "none";
    document.getElementById("congrats").style.display = "inline";
  } else{
    audio.play();
    document.getElementById("score").innerHTML = achivements;
    document.getElementById("easter").style.transform = "translate(0,1vh)";
  }
}
function closeeaster(){document.getElementById("easter").style.transform = "translate(0,-15vh)";}


document.getElementById("avatar").addEventListener("click",function addCount(){
  count++;

  if(count == 12){
    document.getElementById("avatar").src = "assets\\img\\avatars\\avatar2.png";
    achivements++;
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
  } else if(count == 22)
    if(day >= 20 && month == 12)
      document.getElementById("avatar").src = "assets\\img\\avatars\\avatar_xmas.png";
    else
      document.getElementById("avatar").src = "assets\\img\\avatars\\avatar.png";
      
});

document.getElementById("game").addEventListener("click",function gameopened(){
    if(y == 0){
      achivements++;
      setTimeout("calleaster()", 500);
      setTimeout("closeeaster()", 4000);
      y++;
    }
});

document.getElementById("pfp").addEventListener("click",function pfpclicked(){
  if(i == 0){
    achivements++; i++;
    document.getElementById("pfp").src = "assets\\img\\pfp2.png";
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
  } else if(i % 2 != 0){document.getElementById("pfp").src = "assets\\img\\pfp.png"; i++;
  } else {document.getElementById("pfp").src = "assets\\img\\pfp2.png"; i++;}
});

document.getElementById("blender").addEventListener("click",function blender(){
  if(x == 0){
    achivements++; i++;
    window.open('https://youtu.be/3w5aJzEuHIk', '_blank');
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
  } else 
    window.open('https://youtu.be/3w5aJzEuHIk', '_blank');
});

document.getElementById("art").addEventListener("click",function artseen(){
  if(z == 0){
    achivements++;
    setTimeout("calleaster()", 500);
    setTimeout("closeeaster()", 4000);
    z++;
  }
});



/*---------------------------------------- FORM ----------------------------------------*/
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thank you!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem :(";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

/*---------------------------------------- EVENTS ----------------------------------------*/

function verifyEvents(){
  // Xmas
  if(day >= 19 && day <=31 && month == 12)
    XMAS();
  else if(day >= 30 && day <=31 && month == 10)
    HALLOWEEN();

  // Halloween
  //...

  // Portugal Day
  //...
}


function opensong(){document.getElementById("player").style.transform = "translate(0,1vh)";}
function closesong(){document.getElementById("player").style.transform = "translate(0,-15vh)";}

function palysong(song, name, link){

    var r =confirm("Would You Like To Listen to Music?");
    if (r == true) {
      song.currentTime = 0

      document.getElementById("nowplaying").innerText = name;
      document.getElementById("nowplaying").setAttribute('href', link);
    
      song.volume = 0.1;
      song.play();
      song.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
    
      setTimeout("opensong()", 500);
      setTimeout("closesong()", 4000);
    }

}


const XMAS = () =>{
  
  var link = document.createElement( "link" );
  link.href = "assets/xmas.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";
  document.getElementsByTagName( "head" )[0].appendChild( link );

  document.getElementById("avatar").src = "assets\\img\\avatars\\avatar_xmas.png";
  document.getElementById("footer_avatar").src = "assets\\img\\avatars\\avatar3_xmas.png";

  var song = new Audio('assets\\audio\\let-it-snow-let-it-snow-let-it-snow-official-music-video.mp3');
  palysong(song, "Frank Sinatra - Let It Snow! Let It Snow! Let It Snow!", "https://www.youtube.com/watch?v=sE3uRRFVsmc&ab_channel=FrankSinatraVEVO");

  setInterval(createSnowFlake, 50);

  function createSnowFlake() {
    const snow_flake = document.createElement("p");
    snow_flake.classList.add("fas");
    snow_flake.classList.add("fa-snowflake");
    snow_flake.style.left = Math.random() * window.innerWidth + "px";
    snow_flake.style.animationDuration = Math.random() * 8 + 3 + "s";
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 5 + 8 + "px";

    document.body.appendChild(snow_flake);

    setTimeout(() => {
      snow_flake.remove();
    }, 5000);
  }

}


const HALLOWEEN = () =>{
  
  document.getElementById("avatar").src = "assets\\img\\avatars\\avatar_hlw.png";
  document.getElementById("footer_avatar").src = "assets\\img\\avatars\\avatar3_hlw.png";
  //var song = new Audio('assets\\let-it-snow-let-it-snow-let-it-snow-official-music-video.mp3');
  //palysong(song, "Frank Sinatra - Let It Snow! Let It Snow! Let It Snow!", "https://www.youtube.com/watch?v=sE3uRRFVsmc&ab_channel=FrankSinatraVEVO");

}