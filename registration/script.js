document.getElementById("registration-form").addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passConfirmation = document.getElementById('confirmation').value;
    
    if(password !== passConfirmation){
        alert('Password confirmation is not valid');
        return;
    };

    console.log({
        username : username,
        password : password,
        email : email
    });
    alert('Successfully registered');
});
$(document).ready(function(){
    $('#showPass').on('click', function(){
        const passwordForm = $('#password');
        const passwordFormType = passwordForm.attr('type');

        if(passwordFormType === 'password'){
            passwordForm.attr('type', 'text');
            $(this).removeClass('bi-eye').addClass('bi-eye-fill');
        } else if(passwordFormType === 'text'){
            passwordForm.attr('type', 'password');
            $(this).removeClass('bi-eye-fill').addClass('bi-eye');
        }
    })
})