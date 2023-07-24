const body=document.querySelector("body");
body.style.backgroundColor="grey";
const form=document.querySelector("#form1");
form.style.backgroundColor="yellow";
form.style.color="Blue";
const button=document.querySelector("button");
button.style.backgroundColor="orange";
button.style.color="black";
const data=document.querySelector("#data1");
data.style.backgroundColor="black";
data.style.color="white";
data.style.fontSize = "x-large";
button.addEventListener("click",(event)=>
{
    event.preventDefault();
    let amount=document.querySelector("#num1").value;
    let description=document.querySelector("#txt1").value;
    let category=document.querySelector("#category1").value;
    let fetchdata={
        "amount":amount,
        "description":description,
        "category":category
    }
    //creating a element
    const item=document.createElement("li");
    //delete button
    var deleteBtn=document.createElement('button');
  deleteBtn.className='delete';
   deleteBtn.className='btn btn-sm float-right btn-danger delete';
 deleteBtn.appendChild(document.createTextNode('Delete'));
//creating edit Button
   var editBtn=document.createElement('button');
  editBtn.className='edit';
   editBtn.className='btn btn-sm float-right btn-danger edit';
 editBtn.appendChild(document.createTextNode('edit'));
 //add a edit and delete button
 item.appendChild(document.createTextNode(amount+" - "+description+" - "+category+"        "));
   item.appendChild(deleteBtn);
   item.appendChild(editBtn);
   data.appendChild(item);
   localStorage.setItem(amount,JSON.stringify(fetchdata));
   

})
data.addEventListener('click',deleteItem);
data.addEventListener('click',edititem);
 
 function deleteItem(e){
    if(e.target.classList.contains('delete')){
       const text=e.target.parentNode.textContent;
       let slice=text.split(" - ")
      const p=JSON.parse(localStorage.getItem(slice[0]));
      const amount=p.amount;
      console.log(amount);
      localStorage.removeItem(amount);
      var li = e.target.parentElement;   
     data.removeChild(li);
    }
    
    
 }
 function edititem(e)
 {
  if(e.target.classList.contains('edit'))
  {
     var li=e.target;
     let data1=li.parentNode.textContent;
     let slice=data1.split(" - ");
     let data2=slice[0];
     const user=JSON.parse(localStorage.getItem(data2));
    const amount=user.amount;
     const description=user.description;
     const category=user.category;
     localStorage.removeItem(amount);       
        
     document.getElementById('num1').value=amount;
     document.getElementById('txt1').value=description;
     document.getElementById('category1').value=category;
     var li = e.target.parentElement;   
     data.removeChild(li);    
     
    
  }


  }
