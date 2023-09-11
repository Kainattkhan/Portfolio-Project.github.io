
// ---------------------------ftn to toggle the search popup---------------------------

        document.getElementById('search-icon').addEventListener('click', function () {
            var searchPopup = document.getElementById('search-popup');
            if (searchPopup.style.display === 'block') {
                searchPopup.style.display = 'none';
            } else {
                searchPopup.style.display = 'block';
            }
        });

        // ftn to close the search popup
        document.getElementById('close-icon').addEventListener('click', function () {
            var searchPopup = document.getElementById('search-popup');
            searchPopup.style.display = 'none';
        });
   
// ----------------------------for animations in the first section-------------------------

const imageContainers = document.querySelectorAll("#imageSection .image-container");
let currentIndex = 0;

function showImage() {
    const currentContainer = imageContainers[currentIndex];

    currentContainer.querySelector('img').classList.add("zoom-in");
    currentContainer.style.display = "block";

    // To Hide the text initially
    const imageText = currentContainer.querySelector('.image-text');
    imageText.style.opacity = 0;

    // After a delay, show the text and start the text animation
    setTimeout(() => {
        imageText.style.opacity = 1;

        // Start the text animation
        imageText.style.animation = 'fadeInText 1s ease-in-out forwards';

        setTimeout(() => {
            imageText.style.animation = 'none';
            currentContainer.querySelector('img').classList.remove("zoom-in");
            currentContainer.style.display = "none";

            // Move to the next image
            currentIndex++;
            if (currentIndex >= imageContainers.length) {
                currentIndex = 0; 
            }
            showImage();
        }, 6000); 
    }, 2500); 
}
showImage();


// ----------------------------- for textboxes animations--------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const textBoxes = document.querySelectorAll(".textbox");
    const delay = 500; // Delay in milliseconds between animations
    let delayCounter = 0;
  
    textBoxes.forEach((textBox) => {
      setTimeout(() => {
        textBox.style.opacity = 1;
        textBox.style.transform = "translateY(0)";
      }, delayCounter);
      delayCounter += delay;
    });
  });

// ------------------------------ for next and before images of clients section------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-row img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const row = document.querySelector('.image-row');
    let currentIndex = 0;

    function showImages() {
        images.forEach((image, i) => {
            if (i >= currentIndex && i < currentIndex + 4) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function updateButtons() {
        prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
        nextButton.style.display = currentIndex + 1 < images.length ? 'block' : 'none';
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex -= 1;
            showImages();
            updateButtons();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex + 1 < images.length) {
            currentIndex += 1;
            showImages();
            updateButtons();
        }
    });

    showImages();
    updateButtons();
});