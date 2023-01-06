$("#month");
$("#day");
$("#date");
$("#year");


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
const month = d.getMonth();
const day = d.getDay();
const date = d.getDate();
const year = d.getFullYear();


$("#month").text(monthNames[month])
$("#day").text(dayNames[day]);
$("#date").text(date);
$("#year").text(year);

