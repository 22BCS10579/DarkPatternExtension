
try{
let dealBadge = document.querySelector('.dealBadge')
dealBadge.remove()
}
catch(e){

}

try{
let frequentlyBought = document.querySelector('#similarities_feature_div')
frequentlyBought.remove()
}
catch(e){}


try{
// Select all Best Sellers on Search page
var elementsToRemove = document.querySelectorAll('div.a-row.a-badge-region');

// Remove each matching element
elementsToRemove.forEach(function(element) {
  element.parentNode.removeChild(element);
});
}
catch(e){}

