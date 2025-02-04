// Function to show the clicked tab and hide the others
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tab links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the clicked tab content and add "active" class to the tab link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Set default tab to show (Portfolio in this case)
document.getElementsByClassName("tablink")[0].click();
