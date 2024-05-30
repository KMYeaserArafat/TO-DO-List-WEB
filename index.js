
function ShowTimeDate(){
    date  =   new Date();
    setDate = date.getDate();
    setMonth = date.getMonth();
    setYear = date.getFullYear();
    document.getElementById('timeDate').innerText ="Current Date : " + setDate + "/"+ setMonth + "/" + setYear; 
}


function AddNote(){
    document.getElementById('btn-Add-Schedule').addEventListener('click', function(event){
        var parentContainer  = document.getElementById('list-Container');
        var newData = document.getElementById('searchBox').value;
        var newItem  = document.createElement('li');
        newItem.innerText = newData;

        if(newData=="" || newData==" "){
            alert("InValid !!");
        }else{
            parentContainer.appendChild(newItem);
            document.getElementById('searchBox').value = " ";
        }
    })
}

function Remove(){
    document.getElementById('list-Container').addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target);
    })
}