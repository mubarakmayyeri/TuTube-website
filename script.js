$(document).ready(function(){
    $('#search-button').click(function(){
        alert('This feature is still in developement')
    })
})

$.validator.addMethod("checklower", function(value) {
    return /[a-z]/.test(value);
  });
  $.validator.addMethod("checkupper", function(value) {
    return /[A-Z]/.test(value);
  });
  $.validator.addMethod("checkdigit", function(value) {
    return /[0-9]/.test(value);
  });
  $.validator.addMethod("checksymbol",function(value) {
    return /[!@#$%^&*()_=]/.test(value) });

$(document).ready(function(){
    $('#sign-up').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            address:{
                required:true,
                minlength:15
            },
            age:{
                required:true
            },
            gender:{
                required:true
            },
            pass1:{
                minlength:8,
                maxlength:15,
                checklower: true,
                checkupper: true,
                checkdigit: true,
                checksymbol: true
            },
            pass2:{
                equalTo: "#pass"
            }
        },
        messages: {
            pass1: {
              checklower: "Need atleast 1 lowercase alphabet",
              checkupper: "Need atleast 1 uppercase alphabet",
              checkdigit: "Need atleast 1 digit",
              checksymbol: "Need atleast 1 symbol"
            },
            pass2: {
                equalTo: "Please enter the same password"
            }
          }
    })
})