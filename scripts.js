var today = new Date();
if (today.getDay() == 5 && today.getDate() == 29 && today.getMonth() == 4) {
    document.getElementById("yes").innerHTML = "Yes";
} else {
    document.getElementById("yes").innerHTML = "No";
}
