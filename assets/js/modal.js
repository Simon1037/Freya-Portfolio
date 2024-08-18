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
