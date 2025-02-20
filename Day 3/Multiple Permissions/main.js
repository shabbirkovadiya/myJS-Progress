// Create variables isAdmin, isEditor, and isModerator. and set boolen value.
// Use || to log "Access granted" if any of the permission variables are true.
//  Log "Access denied" if none are true.

let isAdmin = true;
let isEditor = false;
let isModerator = false;
function access(){
if (isAdmin || isEditor || isModerator){
    return "Access granted";
}
else {
    return "Access denied";
}
}
console.log(access());
document.getElementById("ex1").innerText = access();