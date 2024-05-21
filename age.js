function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert("Please enter a valid birthdate.");
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('result').innerText = `Age: ${years} years, ${months} months, and ${days} days`;
}
