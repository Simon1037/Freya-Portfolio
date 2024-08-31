console.log("Du kan godt Freya :(");

// Portfolio items
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Modals
const modals = document.querySelectorAll(".modal");

//Et loop gennem portfolio items and med added click event listener
portfolioItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Forhindre link opførelser

    // Fanger modalene's target udfra det klikkede items data attribute
    const modalId = this.getAttribute("data-modal-target");
    const modal = document.querySelector(modalId);

    // Viser modalen
    modal.showModal();
  });
});

// Opsætning af sluk knap
modals.forEach((modal) => {
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.close();
  });
});

// Tilføj et keydown event listener til document
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});

/* Enlarge image on click */

// Function to enlarge the image
function enlargeImage(event) {
  const image = event.target;
  const modal = image.closest(".modal");

  // Reset all images to their original size
  const images = modal.querySelectorAll(".modal-img");
  images.forEach((img) => {
    img.style.transform = "scale(1)";
    img.style.margin = "0";
  });

  // Enlarge the clicked image
  image.style.transform = "scale(1.3)";
  image.style.margin = "40px";
}

// Add event listener to the modal images
modals.forEach((modal) => {
  const images = modal.querySelectorAll(".modal-img");
  images.forEach((image) => {
    image.addEventListener("click", enlargeImage);
  });
});
