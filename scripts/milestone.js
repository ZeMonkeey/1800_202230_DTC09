function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


function updateTasks() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if a user is signed in:
    if (user) {
      db.collection("users").doc(user.uid)
        .onSnapshot(userDoc => {                                                               //arrow notation                 //.data() returns data object
          total_tasks = userDoc.data().tasks_completed

          if (total_tasks / 0.1 >= 100) {
            milestone_1 = "completed"
          } else {
            milestone_1 = "incomplete"
          }

          if (total_tasks / 0.25 >= 100) {
            milestone_2 = "completed"
          } else {
            milestone_2 = "incomplete"
          }

          if (total_tasks / 0.5 >= 100) {
            milestone_3 = "completed"
          } else {
            milestone_3 = "incomplete"
          }

          if (total_tasks / 1 >= 100) {
            milestone_4 = "completed"
          } else {
            milestone_4 = "incomplete"
          }

          if (total_tasks / 10 >= 1000) {
            milestone_5 = "completed"
          } else {
            milestone_5 = "incomplete"
          }

          document.getElementById("number_of_tasks").innerHTML = "Total Tasks Completed: " + total_tasks;

          if (milestone_1 == "completed") {
            document.getElementById("progress_task_1").innerHTML = "10 / 10";
            document.getElementById("progress_task_1").style.width = "100%";
          } else if (total_tasks <= 10 && milestone_1 == "incomplete") {
            document.getElementById("progress_task_1").innerHTML = total_tasks + " / 10";
            document.getElementById("progress_task_1").style.width = total_tasks / 0.1 + "%";
          };

          if (milestone_2 == "completed") {
            document.getElementById("progress_task_2").innerHTML = "25 / 25";
            document.getElementById("progress_task_2").style.width = "100%";
          } else if (total_tasks <= 25 && milestone_2 == "incomplete") {
            document.getElementById("progress_task_2").innerHTML = total_tasks + " / 25";
            document.getElementById("progress_task_2").style.width = total_tasks / 0.25 + "%";
          };

          if (milestone_3 == "completed") {
            document.getElementById("progress_task_3").innerHTML = "50 / 50";
            document.getElementById("progress_task_3").style.width = "100%";
          } else if (total_tasks <= 50 && milestone_3 == "incomplete") {
            document.getElementById("progress_task_3").innerHTML = total_tasks + " / 50";
            document.getElementById("progress_task_3").style.width = total_tasks / 0.5 + "%";
          };

          if (milestone_4 == "completed") {
            document.getElementById("progress_task_4").innerHTML = "100 / 100";
            document.getElementById("progress_task_4").style.width = "100%";
          } else if (total_tasks <= 100 && milestone_4 == "incomplete") {
            document.getElementById("progress_task_4").innerHTML = total_tasks + " / 100";
            document.getElementById("progress_task_4").style.width = total_tasks / 1 + "%";
          };

          if (milestone_5 == "completed") {
            document.getElementById("progress_task_5").innerHTML = "1000 / 1000";
            document.getElementById("progress_task_5").style.width = "100%";
          } else if (total_tasks <= 1000 && milestone_5 == "incomplete") {
            document.getElementById("progress_task_5").innerHTML = total_tasks + " / 1000";
            document.getElementById("progress_task_5").style.width = total_tasks / 10 + "%";
          };

          completeTask(total_tasks, 10);
          completeTask(total_tasks, 25);
          completeTask(total_tasks, 50);
          completeTask(total_tasks, 100);
          completeTask(total_tasks, 1000);
        })
    }
    else {
      console.log("Error: Not a user.")
    }
  })
}
updateTasks();


function completeTask(amount_completed, amount_required) {
  if (amount_completed >= amount_required) {
    document.getElementById("done_" + amount_required).style.display = "block";
    document.getElementById("done_" + amount_required + "_header").style.color = "rgb(0, 190, 110)"
  }
}
