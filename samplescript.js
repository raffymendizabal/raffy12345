const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

buttonname.addEventListener("click", function(){
    studentname.textContent = "Maria Santos";
}

)

const buttonBackground = document.getElementById('changeBackground');
const profileBox = document.getElementById('profile');
let backgroundChanged = false;

buttonBackground.addEventListener("click", function(){
    if (backgroundChanged) {
        profileBox.style.backgroundColor = "";        
    } else {
        profileBox.style.backgroundColor = "#53a393";
    }
    backgroundChanged = !backgroundChanged;
});


const buttonDetails = document.getElementById('toggleDetails');
const details = document.getElementById('details');

buttonDetails.addEventListener("click", function(){
    details.classList.toggle("hidden");
});