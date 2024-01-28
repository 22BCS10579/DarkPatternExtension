// Select all Best Sellers on Search page
let elementsToRemove = document.querySelectorAll('div.a-row.a-badge-region');

// Remove each matching element
elementsToRemove.forEach(function(element) {
  element.parentNode.removeChild(element);
});