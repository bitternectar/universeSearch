'use strict';

const profile = document.getElementById('profButton'),
formProfile = document.querySelector('.formProfile'),
        addCard = document.getElementById('#addC');
console.log(profile);
 profile.addEventListener('click',(e)=>{

            formProfile.action = "index.html";

        });