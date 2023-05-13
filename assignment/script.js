$(document).ready(function () {
    $('#showPass').on('click', function(){
        const passwordForm = $('#pass');
        const passwordFormType = passwordForm.attr('type');
    
        if(passwordFormType === 'password'){
            passwordForm.attr('type', 'text');
            $(this).removeClass('bi-eye').addClass('bi-eye-fill');
        } else if(passwordFormType === 'text'){
            passwordForm.attr('type', 'password');
            $(this).removeClass('bi-eye-fill').addClass('bi-eye');
        }
    });
});
document.getElementById('registration-form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = $('#name').value;
    const pass = $('#pass').value;
    if(name === '' || pass === ''){
        alert('Fill in blanks');
        return;
    };

    console.log({
        name : name,
        password : pass
    });
    alert("Registered succesfully!");
});
