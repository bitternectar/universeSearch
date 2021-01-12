'use strict';

const profile = document.getElementById('profButton'),
formProfile = document.querySelector('.formProfile'),
        addCard = document.getElementById('#addC');
console.log(profile);
 profile.addEventListener('click',(e)=>{

            formProfile.action = "index.html";

        });

const sectionElements = document.querySelector('list'),
        searchField = document.querySelector('searchField'),
        array = ['2. НАстройка','4.Касса','10.Полное руководство'];




