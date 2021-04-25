
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    
    let hrs = day.getHours();
    let mins = day.getMinutes();
    let sec = day.getSeconds();

    //fration
    let secondsfraction = sec/60;
    let minfraction = (secondsfraction + mins)/60;
    let hrfraction = (minfraction + hrs)/12;

    //rotate angle
    let hh = hrfraction * 360;
    let mm = minfraction * 360;
    let ss = secondsfraction * 360;

    hr.style.transform = `rotateZ(${hh}deg)`;

    mn.style.transform = `rotateZ(${mm}deg)`;

    sc.style.transform = `rotateZ(${ss}deg)`;
})

