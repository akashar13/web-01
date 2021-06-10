function validate(){
    var name = document.getElementById("name").value;
    
    var phone = document.getElementById("mobile").value;
    var email = document.getElementById("mail").value;
    
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter a Valid Name";
      error_message.innerHTML = text;
      return false;
    }
    
    
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter a Valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter a Valid Email";
      error_message.innerHTML = text;
      return false;
    }
   text= "Sucessfully added";
   error_message.innerHTML = text;
   document.getElementById("buypro").style.display="none";
   document.getElementById("hai").style.display="block";
   document.getElementById("1").style.display="none";
   document.getElementById("2").style.display="block";
   document.getElementById("payout").style.display="block";
   

    
    
    return false;
    
  }



  function aha(){
    var name = document.getElementById("name").value;
      
      var phone = document.getElementById("mobile").value;
      var email = document.getElementById("mail").value;
      var loca =document.getElementById("loc").value;
      var breeda=document.getElementById("breed").value;
      var cata=document.getElementById("cat").value;
      var service="";
      var lowm=email.toLowerCase();
      if(document.getElementById("cage").checked){
        service="Cage"
      }
      if(document.getElementById("transportation").checked){
        service=service+" Transportaion "
      }
      if(document.getElementById("sales").checked){
        service=service+" Sales"
      }
      var payment="";
      if(document.getElementById("cash").checked){
        payment="Cash"
      }
      else{
        payment="Pay Online"
      }
    
  
    
  //   
  var fina = document.getElementById("namie");
  fina.innerHTML=name[0].toUpperCase() +  
  name.slice(1);
  document.getElementById("m").innerHTML=phone;
  document.getElementById("e").innerHTML=lowm;
  document.getElementById("l").innerHTML=loca;
  document.getElementById("c").innerHTML=cata;
  document.getElementById("b").innerHTML=breeda;
  document.getElementById("s").innerHTML=service;
  document.getElementById("p").innerHTML=payment;
    }

  
  function f(){
    
    
    alert("Payment Successful");
  }
  function rest(){
    document.getElementById("buypro").reset();
    document.getElementById("breed").reset();
  }

  
  