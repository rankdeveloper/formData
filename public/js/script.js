
document.getElementById("registration").addEventListener('submit' , formSumbit);

function formSumbit(e){
    e.preventDefault()
  
    document.querySelector('.alert').style.display="block";
 
    setTimeout(() => {
        document.querySelector('.alert').style.display="none";
        document.getElementById("registration").reset()
    } , 3000)


}

