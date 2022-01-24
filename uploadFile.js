const imageDiv = document.createElement("div");
const imageInput = document.querySelector("#image-input");
const submitButton = document.querySelector("#submit-button");
const textArea = document.querySelector("#comment");
const imgArea = document.createElement("img");
var uploadedImage = "";



imgArea.setAttribute("class", "image-area");

imageDiv.setAttribute("class", "uploaded-image-div");
imageDiv.appendChild(imgArea);

submitButton.addEventListener("click", function(){
  const file = imageInput.files[0];
  const textAreaValue = textArea.value;
  imageDiv.append(textAreaValue);
  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function() {
      imgArea.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);

  }
  document.body.appendChild(imageDiv);
});

imgArea.addEventListener("click", () => {
  if (imgArea.className == "image-area") {
    imgArea.className = "image-area-expanded";
  } else {
    imgArea.className = "image-area";
  }
})
