'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const userDB ={
        userName:['ElenaI',
                'AntonL',
                'MikhailS'],
        password:['qwer',
                    '12345','123']
    };

    const signInButton = document.querySelector('#signInButton'),
            userNameField = document.querySelector('.textField[type="text"]'),
            passwordField = document.querySelector('.textField[type="password"]'),
            form = document.querySelector('.formSignIn');

    function incorrect(){
        console.log('Error');
            
        userNameField.style.border= '3px solid red'
        passwordField.style.border = '3px solid red';
        userNameField.value='';
        passwordField.value = '';
    }


    signInButton.addEventListener('click',(e) =>{
        
        if(userDB.userName.indexOf(userNameField.value)!=userDB.password.indexOf(passwordField.value)){
           
            incorrect();
        }else if(userNameField.value==null || passwordField.value==null){
            
            incorrect();
            
        }else if(userNameField.value=='' || passwordField.value==''){
            
            incorrect();
        
        }else{
            form.action = 'search.html';
            console.log(userNameField.value);
        }
            
        
    });


});