const formDOM = document.querySelector(".login-form")
formDOM.addEventListener('submit', async (e) => {
    e.preventDefault();
    const profile = document.querySelector(".profile");
    const email = document.getElementById("emailId").value;
    const password = document.getElementById("password").value;
    const alert = document.querySelector(".alert");
    const verify = document.querySelectorAll(".input-group");
    const validEmail = verify[0];
    const incorrectPassword = verify[1];

    if(email !== "" && password !== "" ) {
        const token = localStorage.getItem('token');
        try {
            const { data } = await axios.post('/api/login', {
                emailId: email,
                password: password
            }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            const { user } = data;
            if(user) {
                validEmail.classList.add("success");
                profile.innerHTML = `
                    <h1 class="user-name">Welcome ${user.username}</h1>
                    <p class="emailId">Your EmailId is ${user.emailId}</p>
                `
                profile.classList.add("visible");
            } else {
                console.log(data.msg);
            }
            
        } catch (error) {
            localStorage.removeItem('token');
            incorrectPassword.classList.add("error");
            validEmail.classList.remove("success");
            profile.innerHTML = `
            <h1 class="user-name">Please Register!</h1>
            `
            profile.classList.add("visible");
        }
    } else {
        console.log("Please Enter All Login Credinitals!");
        alert.style.display = "block";
        alert.innerText = `Please Enter All Login Credintals!`;
    }
    
    
    
});