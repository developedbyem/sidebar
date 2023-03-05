const openSidebarBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close-btn");

openSidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
closeSidebarBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });