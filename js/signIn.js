'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const userDB ={
        userName:['ElenaI',
                'AntonL',
                'MikhailS'],
        password:['Htrhen@132',
                    '12345','123']
    };

    const signInButton = document.querySelector('#signInButton'),
            userNameField = document.querySelector('.textField[type="text"]'),
            passwordField = document.querySelector('.textField[type="password"]');


    signInButton.addEventListener('click',(e) =>{

        if(userDB.userName.indexOf(userNameField.value)!=userDB.password.indexOf(passwordField.value)){
            e.preventDefault();
            userNameField.style.borderColor = 'red';
            passwordField.style.borderColor = 'red';
            userNameField.value='';
            passwordField.value = '';
        }
            
        
    });


});