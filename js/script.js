welcomeMessage();

function validateForm(){
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date-of-birth");
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const messageInput = document.getElementById("pesan");

    if(nameInput.value === "" || messageInput.value === "" || dateInput.value === "" || gender.value === ""){
        alert("Form harus diisi!");
    } else{
        document.getElementById("resultName").textContent = nameInput.value;
        document.getElementById("resultDate").textContent = dateInput.value;
        document.getElementById("resultGender").textContent = gender;
        document.getElementById("resultPesan").textContent = messageInput.value;
    }
}

function welcomeMessage(){
    const popup = prompt("Mohon masukkan nama anda : ");

    if(popup){
        const welcomeElement = document.getElementById("welcome-speech");

        welcomeElement.textContent = popup;
    }
}
