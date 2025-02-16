function toggleMenu() {
    const menu = document.querySelector(".topbar .menu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
      menu.style.flexDirection = "column";
      menu.style.alignItems = "center";
    }
  }
  