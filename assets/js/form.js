

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