$(function () { //testez variabilele din fuctie cu ajutorul regex(pentru acoperirea cazurilor cerute)
    var regexName = /^[a-zA-Z]{3,}$/; //valideaza stringul, sirul de caractere nume sa fie format doar din litere mari sau litere mici,
    var regexString = /^[a-zA-Z]+$/;  //fara spatii si sa contina cel putin 3 caractere. $ pentru selectare
    var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //testarea pentru numar de telefon
    var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; //testare email 

    $('#sendForm').on('click', function () { //afisarea mesajelor de alertare in cazul in care conditiile nu sunt respectate
        $('#contact_form').find('input').removeClass('invalid');
        if ($('#form_first_name')[0] && !regexName.test($('#form_first_name').val())) {
            $('#form_first_name').addClass('invalid');
            $('#errorAlert').find('.result').text('Lungimea numelui trebuie sa fie mai mare de 3 caractere sau conține caractere invalide');
            $('#errorAlert').show();
        } else if ($('#form_last_name')[0] && !regexName.test($('#form_last_name').val())) {
            $('#form_last_name').addClass('invalid'); 
            $('#errorAlert').find('.result').text('Lungimea prenumelui trebuie sa fie mai mare de 3 caractere sau conține caractere invalide');
            $('#errorAlert').show();
        } else if ($('#form_email')[0] && !regexEmail.test($('#form_email').val())) {
            $('#form_email').addClass('invalid');
            $('#errorAlert').find('.result').text('Emailul este obligatoriu sau conține caractere invalide');
            $('#errorAlert').show();
        } else if ($('#form_password')[0] && !$('#form_password').val().length) {
            $('#form_phone').addClass('invalid');
            $('#errorAlert').find('.result').text('Lungimea telefonului trebuie sa fie 12 cifre sau conține caractere invalide');
            $('#errorAlert').show();
        } else if ($('#form_address')[0] && !$('#form_address').val().length) {
            $('#form_address').addClass('invalid');
            $('#errorAlert').find('.result').text('Adresa este obligatorie sau conține caractere invalide');
            $('#errorAlert').show();
        } else if ($('#form_date_of_birth')[0] && !$('#form_date_of_birth').val().length) {
            $('#form_date_of_birth').addClass('invalid');
            $('#errorAlert').find('.result').text('Data de nastere este obligatorie sau conține caractere invalide');
            $('#errorAlert').show();
        } else if ($('#form_phone')[0] && !regexPhone.test($('#form_phone').val())) {
            $('#form_phone').addClass('invalid');
            $('#errorAlert').find('.result').text('Lungimea telefonului trebuie sa fie 12 cifre sau conține caractere invalide');
            $('#errorAlert').show();
        } else if ($('#form_color')[0] && !$('#form_color').val().length) {
            $('#errorAlert').find('.result').text('Culoarea este obligatiorie');
            $('#errorAlert').show();
        } else {
            $('#contact_form, #errorAlert').hide();
            $('#form_details').show();
            $('#form_details').find('#details_first_name').text($('#form_first_name').val());
            $('#form_details').find('#details_last_name').text($('#form_last_name').val());
            $('#form_details').find('#details_address').text($('#form_address').val());
            $('#form_details').find('#details_date_of_birth').text($('#form_date_of_birth').val());
            $('#form_details').find('#details_phone').text($('#form_phone').val());
            $('#form_details').find('#details_email').text($('#form_email').val());
            $('#form_details').find('#details_color').text($('#form_color').val());
        }
    });

    // Reset all input values on click
    $('#resetForm').on('click', function () {
        $('#contact_form').find('input').value('');
    });

    // Show password in clear
	$('.view-password').on('mousedown', function () {
		$(this).parent().find('input').attr('type', 'text');
	});
    // Hide password from plain text
	$('.view-password').on('mouseup', function () {
		$(this).parent().find('input').attr('type', 'password');
    });
    
    if ($('#login-form')[0]) {  //connditie pentru actiunea de logare
        var username = 'admin';  //username si password valide
        var password = '12345678';
        $('#submitForm').on('click', function (event) {  //pentru actiunea de submit a formularului la click 
            event.preventDefault();
            $('#errorAlert').hide();
            $('.form-control').removeClass('invalid');
            if ($('#login_username')[0] && !regexName.test($('#login_username').val())) {
                $('#login_username').addClass('invalid');
                $('#errorAlert').find('.result').text('Numele de utilizator este obligatoriu sau conține caractere invalide');
                $('#errorAlert').show();
            } else if ($('#login_username')[0] && $('#login_username').val() != username) {
                $('#login_username').addClass('invalid'); 
                $('#errorAlert').find('.result').text('Numele de utilizator este invalid');
                $('#errorAlert').show();
            } else if ($('#login_password')[0] && !$('#login_password').val().length) {
                $('#login_password').addClass('invalid');
                $('#errorAlert').find('.result').text('Parola este este obligatorie');
                $('#errorAlert').show();
            } else if ($('#login_password')[0] && $('#login_password').val() != password) {
                $('#login_password').addClass('invalid');
                $('#errorAlert').find('.result').text('Parola este invalidă');
                $('#errorAlert').show();
            } else {
                $('#login-form form').html('<h3 class="text-center">Autentificare reușită !</h3>');
            }
        });
    }
});