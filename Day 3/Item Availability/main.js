// Create variables itemInStock and isSubscribed.
// Use the && operator to log "You can purchase this item" if both conditions are true. Otherwise, provide a reason why they cannot purchase.
// if itemInStock is true and isSubscribed  is true then print message "You can purchase this item" 
// if itemInStock is false then print "The item is out of stock"
// if isSubscribed  is false then print message "You need to be subscribed"
// Handle via function all code on clicking button


let itemInStock = true;
let isSubscribed = true;
function purchaseItem(){
    if(itemInStock && isSubscribed){
        console.log("You can purchase this item");
        return "You can purchase this item";
    }
    else if(!itemInStock){
        console.log("The item is out of stock");
        return "The item is out of stock";
    }
    else{
        console.log("You need to be subscribed");
        return "You need to be subscribed";
    }
    
}
document.getElementById("ex1").innerText = purchaseItem();


   