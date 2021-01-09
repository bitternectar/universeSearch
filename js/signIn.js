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

        for(let i=0;i<userDB.userName.length;i++){
            let item = userDB.userName[i];
            if(userNameField.value==item){break;}
            else{
                e.preventDefault();
                userNameField.value = '';
                passwordField.value='';
                userNameField.style.borderColor = 'red';
                console.log('Введено неверное имя пользователя');
             }
        }

        for(let i=0;i<userDB.password.length;i++){
            let item = userDB.password[i];
            if(passwordField.value==item){break;}
            else{
                e.preventDefault();
                userNameField.value = '';
                passwordField.value='';
                passwordField.style.borderColor = 'red';
                console.log('Введен неверный пароль');
             }
        }
            
        
    });


});