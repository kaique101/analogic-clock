let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');//Seconds
let mElement = document.querySelector('.p_m');//minutes
let hElement = document.querySelector('.p_h');//hours

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}: ${fixZero(minute)}: ${fixZero(second)}`;
    sDeg = ((360/60) * second) -90 ; // this is calc to calculate the degres of the clock in the seconds
    mDeg = ((360/60)* minute - 90);// this is calc to calculate the degres of the clock in the minutes
    let hDeg = ((360/12)*hour - 90) // here I put 12 because the clock has only 12 hours in the analogic style.
    sElement.style.transform = `rotate(${sDeg}deg)`; // this style is what makes the analogic clock works
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero (time){ // this function is just to fix the 0 in the timer
    return time < 10 ? `0 ${time}` : time;
}

setInterval(updateClock,1000); //native function on JS 1000 is the same as 1 second.
updateClock(); // I put this function again to avoid the delay of the clock


