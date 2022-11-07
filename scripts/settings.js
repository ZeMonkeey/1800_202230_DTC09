function changeName() {
    newFirstName = $("#firstname").val()
    newLastName = $("#lastname").val()

    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            
            user.updateProfile({
                displayName: `${newFirstName} ${newLastName}`,
              }).then(() => {
    
              }).catch((error) => {
                // An error occurred
                // ...
              });  

              alert("Settings successfully saved!")
              
            db.collection("users").doc(user.uid).update({
                name: user.displayName,
            })


        } else {
            // No user is signed in.
        }
    });
}

function setup() {
    $("#submitChanges").click(changeName)
}

function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid);
            console.log(user.displayName);
            user_Name = user.displayName;

            console.log(user.email);
            user_Email = user.email;

            //method #1:  insert with html only
            //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
            //method #2:  insert using jquery
            $(".name-goes-here").text(user_Name); //using jquery
            $(".email-goes-here").text(user_Email); //using jquery

        } else {
            // No user is signed in.
        }
    });
}
insertName(); //run the function
$(document).ready(setup)