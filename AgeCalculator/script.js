window.onload = function() {

  document.getElementById("manualBtn").disabled = true;
  document.getElementById("autoBtn").disabled = true;

  
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  let currentDate = yyyy + "-" + mm + "-" + dd;

  
  document.getElementById("askYourDate").setAttribute("max", currentDate);
};


function Save() {
  var xName = document.getElementById("userName").value;

  
  var namePattern = /^[A-Za-z\u0600-\u06FF\s]+$/;

  if (xName !== "" && namePattern.test(xName)) {
    document.getElementById("askName").innerText = "Welcome " + xName + "!";
    document.getElementById("manualBtn").disabled = false;
    document.getElementById("autoBtn").disabled = false;
  } else {
    document.getElementById("askName").innerText = "Try again (only letters allowed)";
    document.getElementById("manualBtn").disabled = true;
    document.getElementById("autoBtn").disabled = true;
  }
}


function Manual() {
  
  document.getElementById("autoBtn").disabled = true;

  
  document.getElementById("dateSection").style.display = "block";

  
  let today = new Date();

  
  if (today.getHours() === 0 && today.getMinutes() >= 0) {
    today.setDate(today.getDate() + 1);
  }

  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  let minDate = yyyy + "-" + mm + "-" + dd;

  
  document.getElementById("birthDate").setAttribute("min", minDate);

 
  document.getElementById("birthDate").addEventListener("change", function() {
    var birthDate = new Date(this.value);
  });
}


function automatic() {
  
  document.getElementById("manualBtn").disabled = true;

  
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  let formattedDate = yyyy + "-" + mm + "-" + dd;

  document.getElementById("Xautomatic").innerText =
    "Today's date is set automatically: " + formattedDate;

 
  calculateAge(today);
}


document.getElementById("askYourDate").addEventListener("change", function() {
  var chosenDate = new Date(this.value);

  if (!isNaN(chosenDate)) {
    document.getElementById("yourDate").innerText =
      "A special day - the day you were born (" + this.value + ")";
    calculateAge(chosenDate);
  }
});


function calculateAge(birthDate) {
  var today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("yourAge").innerText =
    "Your age: " + years + " years, " + months + " months, and " + days + " days";
}