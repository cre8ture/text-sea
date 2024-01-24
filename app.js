document.addEventListener("DOMContentLoaded", function () {
  var mountainContainer = document.getElementById("mountainContainer");
  let mountainBottom;
  for (let i = 0; i < 20; i++) {
    const mountain = document.createElement("div");

    const height = Math.random() * 200;
    const width = Math.random() * 50;

    var landscape = generateLandscape(height, width); // width and height of landscape
    mountain.className = "mountainContainer";
    mountain.textContent = landscape;

    // Position each mountain randomly across the width of the page and raise them by 100px
    mountain.style.position = "absolute";
    mountain.style.bottom = "100px";
    mountain.style.left = `${Math.random() * 100}%`;

    mountainContainer.appendChild(mountain);

    mountainBottom = mountain.offsetTop + mountain.offsetHeight;
  }
  const textDiv = document.createElement("div");
  textDiv.className = "textContainer";
  //   textDiv.textContent = generateRandomText(3000); // Generate 3000 characters of random text
  const text = generateRandomText(3000); // Generate 3000 characters of random text

  // Split the text into chunks of 200 characters
  const chunks = text.match(/.{1,200}/g);

  // Create a div for each chunk and append it to the textDiv
  chunks.forEach((chunk, index) => {
    const span = document.createElement("span");
    span.textContent = chunk;

    // Apply a CSS class to move the text to the left or right
    span.className = index % 2 === 0 ? "move-left_" : "move-right_";

    textDiv.appendChild(span);
  });

  // Get the mountainContainer

  // Calculate the bottom of the mountainContainer
  const mountainContainerBottom = mountainBottom; //mountainContainer.offsetTop + mountainContainer.offsetHeight;

  textDiv.style.position = "absolute";
  textDiv.style.top = `${mountainContainerBottom}px`; // Set the top to the bottom of the mountainContainer
  textDiv.style.width = "300%";
  //   textDiv.style.boxSizing = 'border-box'; // Include padding and border in the element's total width and height
  //   textDiv.style.whiteSpace = 'pre-wrap'; // Wrap text and create a new line when necessary
  textDiv.style.wordBreak = "break-all"; // Break words to prevent overflow

  document.body.appendChild(textDiv); // Append textDiv to the body of the document

// Existing code
const asciiChars = "Ñ@#W$9876543210?!abc;:+=-,._ ".split();
const spans = textDiv.querySelectorAll("span");
let frame = 0;

// Keep track of the original text
const originalText = Array.from(spans).map(span => span.textContent);

function main(index) {
  const asciiIndex = (index + frame) % asciiChars.length;
  return asciiChars[asciiIndex];
}

function updateFrame() {
  spans.forEach((span, index) => {
    // If frame is divisible by 100, change the text back to the original
    if (frame % 100 === 0) {
      span.textContent = originalText[index];
    } else {
      span.textContent = main(index) + span.textContent.slice(1);
    }
  });

  // If textDiv's textContent length is greater than 10000, randomly change the text
  if (textDiv.textContent.length > 10000) {
    const randomIndex = Math.floor(Math.random() * spans.length);
    spans[randomIndex].textContent = main(randomIndex) + spans[randomIndex].textContent.slice(1);
  }

  frame++;
  requestAnimationFrame(updateFrame);
}

updateFrame();
});

function generateRandomText(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateLandscape(width, height) {
  var landscape = "";
  var charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Characters to be used
  var peakHeight = height / 2;

  for (var y = 0; y < height; y++) {
    var line = "";
    for (var x = 0; x < width; x++) {
      // Simple mountain generation using a sine wave
      var mountainHeight = peakHeight * Math.sin((x / width) * 3 * Math.PI);
      // Determine if the current position is above the "ground"
      if (height - y > mountainHeight) {
        line += " "; // Sky (empty space)
      } else {
        // Random character from charset
        line += charset.charAt(Math.floor(Math.random() * charset.length));
      }
    }
    landscape += line + "\n";
  }

  return landscape;
}
