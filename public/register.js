const formDOM = document.querySelector(".register-form")
formDOM.addEventListener('submit', async (e) => {
    const popUp = document.querySelector(".pop-up");
    const username = document.getElementById("username").value;
    const emailId = document.getElementById("emailId").value;
    const password = document.getElementById("password").value;
    
    e.preventDefault();
    try {
        const { data } = await axios.post("/api/register", {
            username,
            emailId,
            password
        });
        popUp.style.display = "block";
        localStorage.setItem('token', data.token);
    } catch (error) {
        console.log(error);
    }
});