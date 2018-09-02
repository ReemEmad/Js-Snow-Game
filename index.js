




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




















//start of habiba part
var username =document.getElementById("uname")
var userage =document.getElementById("uage")
var userdate =document.getElementById("udate")
var usersalary =document.getElementById("usalary")





var data=[]

function addrecord()
{
var record ={ name:username.value,age:userage.value, date:userdate.value,salary:usersalary.value          }



}

function toggleform()
{


    

/*document.getElementById("form-container").style.display = "block" ? "none" : "block";*/
    
    
    var form = document.getElementById("form-container");
    var showhide1 =document.getElementById("showhide");

    if(form.style.display == "none")
           {
            form.style.display="block";
            showhide.innerHTML="hide"
           }

    else
          {
            form.style.display="none";
                showhide.innerHTML="show"
          }     
}







var people =[   {name:"Mona", age:"56" ,dateofbrith:"1/1/2007", salary:"64645"},
                {name:"Ahmed", age:"86" ,dateofbrith:"3/3/2003", salary:"5345"},
                {name:"Habiba", age:"34" ,dateofbrith:"2/4/2004", salary:"3453"},
                {name:"Ali", age:"56" ,dateofbrith:"11/3/2008", salary:"5443"},


            ]

var out=""
for(var i=0;i<people.length;i++)
        { out += "<tr><td>"+people[i].name+"</td><td>"+people[i].age+"</td><td>"+people[i].dateofbrith+"</td><td>"+people[i].salary+"</td></tr>"

        } 
        document.getElementById("bodypart").innerHTML=out;  

//end of habiba part