# ASCII Animation

This project is about creating an ASCII animation in a web page. The animation cycles through a series of ASCII characters to create a dynamic visual effect.

## How It Works

The main part of the code is a function called `updateFrame` that updates the text content of each `span` element in the `textDiv` with a calculated ASCII character. This function is called repeatedly using `requestAnimationFrame` to create a smooth animation effect.

The ASCII character for each `span` is calculated by the `main` function, which takes the index of the `span` and the current frame of the animation as arguments. The function calculates an index in the `asciiChars` array based on the index and frame, and returns the ASCII character at the calculated index.

The `asciiChars` array is defined as a string of ASCII characters split into an array of individual characters. The `spans` NodeList is a collection of all the `span` elements in the `textDiv`.

The `updateFrame` function also includes a condition to change the text back to the original text when the frame is divisible by 100. This is done by keeping track of the original text of each `span` in the `originalText` array.

If the length of `textDiv`'s `textContent` is greater than 10000, a random `span`'s `textContent` is changed to an ASCII character. This is to prevent the text from becoming too long.

## How to Run

To run the animation, simply open the HTML file in a web browser. The animation will start automatically.