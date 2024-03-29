const menuItems = document.querySelectorAll(".individual-title");
const menuGrids = document.querySelectorAll(".menu-grid-items");

function setActiveAndVisible(menuItem, menuGrid) {
  const allMenuItems = document.querySelectorAll(".individual-title");
  allMenuItems.forEach((item) => item.classList.remove("active"));

  const allMenuGrids = document.querySelectorAll(".menu-grid-items");
  allMenuGrids.forEach((grid) => grid.classList.remove("visible"));

  menuItem.classList.toggle("active");
  menuGrid.classList.toggle("visible");
}

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    setActiveAndVisible(menuItem, menuGrids[index]);
  });
});

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting (default behavior)

    // Get form values
    var date = document.querySelector('input[name="date"]').value;
    var time = document.querySelector('input[name="time"]').value;
    var name = document.querySelector('input[name="full-name"]').value;
    var phoneNumber = document.querySelector(
      'input[name="phone-number"]'
    ).value;
    var numberOfPersons = document.querySelector(
      'input[name="number-of-persons"]'
    ).value;

    // Check if all required fields are filled
    if (date && time && name && phoneNumber && numberOfPersons) {
      // Display SweetAlert with the captured information
      Swal.fire({
        icon: "success",
        title: "Booked Successfully",
        html:
          "<strong>Name:</strong> " +
          name +
          "<br>" +
          "<strong>Date:</strong> " +
          date +
          "<br>" +
          "<strong>Time:</strong> " +
          time +
          "<br>" +
          "<strong>Phone Number:</strong> " +
          phoneNumber +
          "<br>" +
          "<strong>Number of Persons:</strong> " +
          numberOfPersons,
        customClass: {
          popup: "swal-custom-font",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // Reset the form
          document.getElementById("bookingForm").reset();
        }
      });
    } else {
      // Display an error message if any required field is missing
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all required fields.",
        customClass: {
          popup: "swal-custom-font",
          title: "swal-custom-font", // Apply custom font to title
          content: "swal-custom-font", // Apply custom font to content
          text: "swal-custom-font",
        },
      });
    }
  });
