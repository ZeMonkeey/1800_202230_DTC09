//Load skeleton files
function loadSkeleton() {
    console.log($('#navbarplaceholder').load('./skeleton_files/navbar.html'));
    console.log($('#footerplaceholder').load('./skeleton_files/footer.html'));
}
loadSkeleton();

//Logout the current signed in user
function logout() {
    console.log("logging out user");
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html";
    }).catch((error) => {
        // An error happened.
    });
};