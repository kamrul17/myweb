setInterval(() => {
    
    d = new Date();
   htime= d.getHours();
    mtime= d.getMinutes();
    stime= d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    
}, 1000);

var clock = setInterval(timing,1000);
function timing(){
    var d = new Date();
    var tym = d.toLocaleTimeString();
    document.getElementById('digital').innerHTML  = tym;
}