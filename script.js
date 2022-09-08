// Get our HTML elements
const $modal = document.getElementById("infoModal");
const $closeBtn = document.getElementsByClassName("close")[0];
const $modalTitle = document.getElementById("modalTitle");
const $modalContent = document.getElementById("modalContent");

// When the user clicks on (x), close the modal
$closeBtn.onclick = function () {
  $modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
};

function showInfo(areaClicked) {
  $modalTitle.innerHTML = content[areaClicked].title;
  $modalContent.innerHTML = content[areaClicked].content;

  $modal.style.display = "block";
}

