// var index = './index.html'
function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result;
}

function nestedTarget(){
  var result = document.querySelector('div#nested div.target')
  return result;
}

function deepestChild(){
  var result = document.querySelector('div#grand-node div div div div')
  return result;
}

function increaseRankBy(n){
  var listy = document.querySelectorAll('main#app ul.ranked-list li')
  for (var i=1; i<listy.length; i++){
    var toIncrease = listy[i].innerHTML;
    listy[i].innerHTML = parseInt(toIncrease) + n;
  }
  return listy
}
