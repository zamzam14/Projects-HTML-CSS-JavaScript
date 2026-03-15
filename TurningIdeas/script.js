function askName() {
  let xName = prompt("Can you tell me your name?");
  if (xName) {
    let now = new Date();
    let hour = now.getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    document.getElementById("myAskName").innerHTML =
      greeting + " " + xName + ".<p>Nice to meet you!</p>";
  }
}


    function today() {
      let xToday = prompt("Please let me know how you are?");
      if (xToday) {
        document.getElementById("askToday").innerHTML = xToday +"<p>" + "Have a Good Day" + "</p>"
    }
    }

    function specialty() {
       let xSpecialty = prompt("What is your specialty?");
      if (xSpecialty) {
      document.getElementById("mySpecialty").innerHTML = xSpecialty +"<p>" + "that's perfect" + "</p>" + "<p> Good Luck!</p>"
    }
    }