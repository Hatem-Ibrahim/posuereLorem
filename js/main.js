var myMail = document.getElementsByName('Email')[0] 
var defaultMail = "1234@gmail.com" ;
    


    myMail.onkeyup = function()
    {
        if(myMail.value == defaultMail)
        {
            myMail.style.boxShadow = '0px 0px 10px 10px #f00'
            alert(" Sorry you can't use that email.")
        }
        else
        {
            myMail.style.boxShadow = '0px 0px 10px 10px var(--blue)'
        }
    }