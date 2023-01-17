$(document).ready(function() {

  
    // When the menuIcon is clicked the nav-list will show
    // and we will display the exit icon. 
    //When the exit icon is clicked we will close the nav-list
    
      const menuIcon = document.querySelector(".hamburgerMenu");
      const exit = document.querySelector(".exitMenu");
      const navigationList = document.querySelector(".nav-list");
    
      menuIcon.addEventListener("click", function () {
          navigationList.classList.remove("hide");
          exit.classList.remove("hide");
          menuIcon.classList.add("hide");
      });
    
      exit.addEventListener("click", function () {
          navigationList.classList.add("hide");
          exit.classList.add("hide");
          menuIcon.classList.remove("hide");
      });
      
    });