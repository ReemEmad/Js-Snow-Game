




function validate()
{
    
    var username = document.getElementById("name");
    var regex = /^[a-zA-Z]{3,9}$/
    if (regex.test(username.value) == true)
    {
        console.log(true);
        username.className=" form-control is-valid";
    }
    else {
        console.log(false)
        username.className="form-control is-invalid";
                           }
}