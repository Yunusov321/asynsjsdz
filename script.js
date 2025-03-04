async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        
        document.getElementById('avatar').src = user.picture.large;
        document.getElementById('name').textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById('job').textContent = "Frontend Developer";
        document.getElementById('phone').textContent = `Phone: ${user.phone}`;
        document.getElementById('location').textContent = `Location: ${user.location.city}, ${user.location.country}`;
        document.getElementById('email').textContent = `Email: ${user.email}`;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}