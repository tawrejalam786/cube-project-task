 // Toggle Sidebar
    document.getElementById("humburger").addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("active");
    });

     // Toggle Dropdown for Shops dropdown
    document.querySelector("#shopDropdown .toggle").addEventListener("click", function (e) {
      e.preventDefault(); // prevent link behavior
      document.getElementById("shopDropdown").classList.toggle("open");
    });