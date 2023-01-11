var count = 0;
var rec_list = [];

document.querySelector('#submit').addEventListener('click', function () {
    count += 1;
    var name, id, no, exp_date, rec_date, q_dem, q_rec, q_ret;
    name = document.querySelector('#name').value;
    id = document.querySelector('#id').value;
    no = document.querySelector('#phone').value;
    exp_date = document.querySelector('#exp-date').value;
    rec_date = document.querySelector('#rec-date').value;
    q_rec = document.querySelector('#received').value;
    q_dem = document.querySelector('#demanded').value;

    if((!name || !id || !no)) {
        alert('Please enter all the credentials')
        return;
    }
    if(!name.match(/[a-z | \s]/i) || name.match(/^ /)) {
         document.querySelector('#invalid-1').style.display = 'block';
        return;
    }
    else{
        document.querySelector('#invalid-1').style.display = 'none'
    }
    if(!id.match(/202[1-2][A|B][1-7][P][S][0-9]{4}[P]/i)) {
        document.querySelector('#invalid-2').style.display = 'block';
        return;
    }
    else{
        document.querySelector('#invalid-2').style.display = 'none'
    }
    if(!no.match(/[0-9]{10}/)) {
        document.querySelector('#invalid-3').style.display = 'block';
        return;
    }
    else{
        document.querySelector('#invalid-3').style.display = 'none'
    }
    if(!exp_date || !rec_date || !q_dem || !q_rec) {
        alert('Please fill out all the fields')
        return;
    }
    else if(rec_date < exp_date) {
        alert('Please enter valid received date.');
        return;
    }

    document.querySelector('.records').style.display = 'block'
    document.querySelector('.records').outerHTML += `
    <div id="rec-${count}">
        <br>
        <hr>
        <br>
        <div class="records-content" id="records-content-${count}">
            <p>Name: ${name}</p>
            <p>BITS Id: ${id}</p>
            <p>Contact No.: ${no}</p>
            <p>Event's Start Date: ${exp_date}</p>
            <p>Event's Last Date: ${rec_date}</p>
            <p>Department's Name: ${q_dem}</p>
            <p>Event's name: ${q_rec}</p>
        </div>
        <button class="btn del-btn" id="del-btn-${count}">Delete</button>   
    </div>
    `
})

document.querySelector('#clear').addEventListener('click', function () {
    exp_date = document.querySelector('#exp-date').value = "";
    rec_date = document.querySelector('#rec-date').value = "";
    q_rec = document.querySelector('#received').value = "";
    q_dem = document.querySelector('#demanded').value = "";

    document.querySelector('#invalid-1').style.display = 'none'
    document.querySelector('#invalid-2').style.display = 'none'
    document.querySelector('#invalid-3').style.display = 'none'
})
