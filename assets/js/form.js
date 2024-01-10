

function validation ()
{
    const email = document.Registration.email.value
    const first_name = document.Registration.first_name.value
    const second_name = document.Registration.last_name.value

    const gender = document.Registration.gender.value
    const country = document.Registration.country.value


    if (email.endsWith('@dci-student.org') == false)
    { 
        alert('Email should be end with dci-student.org')
        return false
    }

    if ( first_name.length < 8 )
    { 
        alert('First name should be greater than 8')
        return false
    }

    if ( second_name.length == 0)
    { 
        alert('Last name should be provided')
        return false
    }


    if (country == 'USA' && gender != 'female')
    {
        alert ('We only provide registration for females')
        return false
    }
}




function activateSubmit(){
   // alert ("its working")
    const email = document.Registration.email.value
    
    const first_name = document.Registration.first_name.value
    const second_name = document.Registration.last_name.value
    const submit_button = document.getElementById('Submit')

    if (email.length > 0 && first_name.length > 0 && second_name.length > 0 )
    {
        // remove submit -disabled class from submit button
        submit_button.classList.remove("submit-disabled")    }
    else
    {
        submit_button.classList.add("submit-disabled")
    }

}



function countText () {

    const textareaCnt = document.Registration.message.value.length
    const para = document.getElementById('textCount')
    if (textareaCnt == 100 )
    {
        para.style.color = 'green'
    }
    else{
        para.style.color = 'red'
    }
    
    para.textContent = textareaCnt + '/100'


}