checkAge3 (age3){
  age3 = prompt("How old are you?", "")
if (!isNaN(age3))
  {
    if (age3 < 18) {
    alert("You don't have access cause your age is "+age3+" It's less than 18")
    } else if (age3 >= 18 && age3 < 60) {
    alert("Welcome  !")
    }
    else if (age3>60){
      alert("Keep calm and look Culture channel")
    }
    else {alert("Technical work")}
 }
  else {
    alert("Data type error")
  }
}

checkAge3();