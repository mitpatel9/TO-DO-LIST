document.querySelector('form').addEventListener('submit',mytodo);

function mytodo(event){
    event.preventDefault();
    let fname=document.querySelector('#firstname').value;
    let Priority=document.querySelector('#Priority').value;
    dispaytable(fname,Priority)
    console.log(fname,Priority)
}

function dispaytable(fname,Priority){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=fname;
    let td2=document.createElement("td");
    td2.innerText=Priority;
    if(Priority=="High"){
        td2.style.backgroundColor='yellow';
        td2.style.color='black';
    }else{
        td2.style.backgroundColor='green';
        td2.style.color='black';  
    }
    let td3=document.createElement("td");
    td3.innerText="add fav";
    row.append(td1,td2,td3);
    document.querySelector('tbody').append(row)
}