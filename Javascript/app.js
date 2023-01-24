// Path: StickerSmash/Timestamp.js

//Timestamp checker
const current_time_epoch_in_seconds = new Date().getTime() / 1000;

let createdDate = "2022-09-19T13:27:27.550Z";

//Convert the createdDate to epoch time
let createdDate_epoch_in_seconds = new Date(createdDate).getTime() / 1000;

let days = current_time_epoch_in_seconds - createdDate_epoch_in_seconds;
let relativeDays = days / 86400;

console.log("Created Date: ", createdDate_epoch_in_seconds);
console.log("Current Date: ", current_time_epoch_in_seconds);
console.log("Days: ", days);
console.log("Relative Days: ", relativeDays);

//Seconds per day 86400
//Seconds per hour 3600
//Seconds per minute 60
