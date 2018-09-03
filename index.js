




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







var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var h = window.innerHeight
var w  = window.innerWidth;
canvas.width = w;
canvas.height = h
var snowContainer=[];
var maxSnow = 500;

var angle = 0;
for(var i=0;i<maxSnow;i++)
    {
    var snow = 
        {x:Math.random()*w , 
        y:Math.random()*h , 
         r:Math.random()*10
        
        }
    snowContainer.push(snow)

    }
function drawSnow()
{
    
    ctx.clearRect(0,0,w,h);
    ctx.beginPath();
    for(var i=0;i<snowContainer.length;i++)
        {
            
ctx.moveTo(snowContainer[i].x,snowContainer[i].y)            
ctx.arc(snowContainer[i].x,snowContainer[i].y,snowContainer[i].r,0,2*Math.PI);
            
        }

ctx.fillStyle="white";
ctx.fill();    

moveSnow()
}


function moveSnow()
{
    angle +=0.01;
    for(var i=0;i<snowContainer.length;i++)
        {
            
        var s = snowContainer[i];
            s.y += Math.pow(1,2)+1;
                s.x +=Math.sin(angle)*2;
                            
    if(s.y>h)
        {
            snowContainer[i]=
            {
            x:s.x,
            y:0,
            r:s.r
            }
        }

        }
}

setInterval(drawSnow,20)

















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