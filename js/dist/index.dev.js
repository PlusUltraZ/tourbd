"use strict";

//  !Responsive Mega Menu
var menu = document.querySelector(".menu");
var menuMain = menu.querySelector(".menu-main");
var goBack = menu.querySelector(".go-back");
var menuTrigger = document.querySelector(".mobile-menu-trigger");
var closeMenu = menu.querySelector(".mobile-menu-close");
var subMenu;
menuMain.addEventListener("click", function (e) {
  if (!menu.classList.contains("active")) {
    return;
  }

  if (e.target.closest(".menu-item-has-children")) {
    var hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", function () {
  hideSubMenu();
});
menuTrigger.addEventListener("click", function () {
  toggleMenu();
});
closeMenu.addEventListener("click", function () {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", function () {
  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}

function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  var menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(function () {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
}; // !Loader section


setTimeout(function () {
  $(".loader_bg").fadeToggle();
  $(".fa-music").click(function () {
    if ($(this).hasClass("pause")) {
      $("#myAudio")[0].play();
    } else {
      $("#myAudio")[0].pause();
    }

    $(this).toggleClass("pause"); // $('#myAudio')[0];
  });
  $(window).on('load', function () {
    $('.loader_bg').addClass('loader');
  });
}, 1000 //100
); //  !SVG aniamtions