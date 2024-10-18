// Check if username exists in local storage
if (!localStorage.getItem("username")) {
    saveName();
  } else {
    document.getElementById("display-name").innerHTML = localStorage.username;
    document.getElementById("uname").innerHTML = localStorage.username;
}

// Button functions 
document.getElementById("save-btn").addEventListener("click", saveName);
document.getElementById("clear-btn").addEventListener("click", clearName);

// Save username to local storage
function saveName() {
    localStorage.setItem("username", document.getElementById("username").value);
    displayName();
  } 

// print username to html
function displayName(){
    const setUsername = localStorage.getItem("username");
    document.getElementById("display-name").value = setUsername;
    document.getElementById("uname").value = setUsername;

}

// clear username from local storage
function clearName(){
    localStorage.removeItem("username");
    document.getElementById("display-name").innerHTML = " ";
    document.getElementById("uname").innerHTML = "User";
}

// Check users time
const time = new Date().getHours();

let timedMessage;
// Greet user based on hour
if (time < 12){
    timedMessage = "Good Morning, ";
} else if (time < 17){
    timedMessage = "Good Afternoon, ";
} else {
    timedMessage = "Good Evening, ";
}
// Print greeting to html
document.getElementById("greet").innerHTML = timedMessage;

