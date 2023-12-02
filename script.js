/* function for showing album details when checkbox checked*/
function showImageText(checkboxId, imageId, textId) {
    var checkbox = document.getElementById(checkboxId);
    var image = document.getElementById(imageId);
    var text = document.getElementById(textId);

    if (checkbox.checked) {/*shows details*/
      image.style.display = 'block';
      text.style.display = 'inline';
    } else {/*hides details*/
      image.style.display = 'none';
      text.style.display = 'none';
    }
  }