function populates(cat,breed){
    var s1 = document.getElementById("cat");
    console.log(s1);
    var s2 = document.getElementById("breed");
    s2.innerHTML ="";
    if(s1.value=="Poultry"){
        var optionArray =["Hen|Hen","Duck|Duck","Kada|Kada"];
      }
      else if(s1.value == "Dairy"){
    var optionArray = ["Cow|Cow","Goat|Goat","Buffolow|Buffolow"];
  } else if(s1.value == "Farm"){
    var optionArray = ["Apple|Apple","Orange|Orange","Grapes|Grapes"];
  }
      for(var option in optionArray) {
        var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
    console.log(s2.options.add(newOption))
      }
    }  