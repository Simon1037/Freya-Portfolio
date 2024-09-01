document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal-3");
    const closeModal = document.querySelector(".modal .close");
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    let currentIndex = 0;


    function showModal() {
        modal.style.display = "flex";
    }


    closeModal.addEventListener('click', function () {
        modal.style.display = "none";
    });


    prevBtn.addEventListener('click', function () {
        showImage(currentIndex - 1);
    });


    nextBtn.addEventListener('click', function () {
        showImage(currentIndex + 1);
    });

   
    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === currentIndex) {
                img.classList.add('active');
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

  
    showImage(currentIndex);


    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});