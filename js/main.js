var mySpinner = document.getElementById('spinner'),
    
    mySong = document.getElementById('player-flow'),
    
    myIcon = document.getElementById('icon'),
    
    myCenter = document.getElementById('center'),
    
    myOuter = document.getElementById('outer')

    volume = document.getElementById("controlVolume");



volume.onchange = function(){

    mySong.volume= volume.value;
}

mySong.onload = function(){
    alert('Oi');
} 

 mySpinner.onclick = function () {
    'use strict';
    
    if (mySong.paused === false) {
        mySong.pause();
        myIcon.innerHTML = "&#9650;";
        myIcon.classList.remove('pause');
        myCenter.classList.remove('animi');
        myOuter.classList.remove('animi');
        mySpinner.classList.remove('bigger');
        myIcon.classList.add('spinner-sprite');
        
    } else {
        mySong.play();
        myIcon.innerHTML = "&#9612;&#9612;";
        myIcon.classList.remove('spinner-sprite');
        myIcon.classList.add('pause');
        myCenter.classList.add('animi');
        myOuter.classList.add('animi');
        setTimeout(function () {
            mySpinner.classList.add('bigger');
        }, 500);
    }
};
