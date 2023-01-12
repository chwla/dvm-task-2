document.querySelector('#submit').addEventListener('click', function () {
    var name, no, id, start_date, end_date, dept, event;

    name=document.querySelector("#name").value;
    no=document.querySelector("#no").value;
    id=document.querySelector("#id").value;
    start_date=document.querySelector("#start_date").value;
    end_date=document.querySelector("#end_date").value;
    dept=document.querySelector("#dept").value;
    event=document.querySelector("#event").value;
    
    if(!name || !no || !id || !start_date || !end_date || !dept || !event){
        alert("Enter all the details!");
        document.querySelector('#invalid1').style.display = 'block';
        document.querySelector('#invalid2').style.display = 'block';
        document.querySelector('#invalid3').style.display = 'block';
        document.querySelector('#invalid4').style.display = 'block';
    }

    if(!name.match(/[a-z | \s]/i) || name.match(/^ /)) {
        document.querySelector('#invalid1').style.display = 'block';
       return;
   }
   else{
       document.querySelector('#invalid1').style.display = 'none';
   }
   if(!id.match(/202[1-2][A|B][1-7][P][S][0-9]{4}[P]/i)) {
       document.querySelector('#invalid2').style.display = 'block';
       return;
   }
   else{
       document.querySelector('#invalid2').style.display = 'none';
   }
   if(!no.match(/[0-9]{10}/)) {
       document.querySelector('#invalid3').style.display = 'block';
       return;
   }
   else{
       document.querySelector('#invalid3').style.display = 'none';
   }
    if (start_date>end_date){
        document.querySelector('#invalid4').style.display='block';
    } 
    else{
        document.querySelector('#invalid4').style.display = 'none';
    }

    document.querySelector('#records').style.display='block';
    document.querySelector('#records').outerHTML += `
    <fieldset>
    <div id="rec">
        <br>
            <p>Name: ${name}</p>
            <p>BITS Id: ${id}</p>
            <p>Contact No.: ${no}</p>
            <p>Event's Start Date: ${start_date}</p>
            <p>Event's Last Date: ${end_date}</p>
            <p>Department's Name: ${dept}</p>
            <p>Event's name: ${event}</p>  
    </div>
    </fieldset>
    `

})

document.querySelector('#clear').addEventListener('click', function () {
    name=document.querySelector("#name").value="";
    no=document.querySelector("#no").value="";
    id=document.querySelector("#id").value="";
    start_date=document.querySelector("#start_date").value="";
    end_date=document.querySelector("#end_date").value="";
    dept=document.querySelector("#dept").value="";
    event=document.querySelector("#event").value="";
})
