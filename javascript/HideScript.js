
// alert('This page is now in maintenance mode.');


// class HideHTMLCode {
//   constructor(selector) {
//       this.elements = document.querySelectorAll(selector);
//   }

//   hideElements() {
//       this.elements.forEach(element => {
//           element.style.display = 'none';
//       });
//   }
// }

// // Instantiate the HideHTMLCode class with the '.hidden' selector
// const codeHider = new HideHTMLCode('.hidden');

// // Call the hideElements method
// codeHider.hideElements();


document.addEventListener("DOMContentLoaded", function() {
  const codeHider = new HideHTMLCode('.hidden');
  codeHider.hideElements();
});


// debugging button
document.getElementById('debugButton').addEventListener('click', function() {

  alert('This page is now in maintenance mode.');
});


