function randomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0]
            const userDP = user.picture.large
            const userName = `${user.name.title} ${user.name.first} ${user.name.last}`
            const userBirthday = new Date(user.dob.date).toDateString()
            const userEmail = user.email
            const userCell = user.cell
            const userLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}.`
            document.getElementById("picture").src = userDP
            document.getElementById("user_name").innerText = userName
            document.getElementById("user_birthday").innerText = "Birthday : " + userBirthday
            document.getElementById("user_email").innerText = "Email : " + userEmail
            document.getElementById("user_phone").innerText = "Phone : " + userCell
            document.getElementById("user_address").innerText = "Address : " + userLocation
        })
}
randomUser()