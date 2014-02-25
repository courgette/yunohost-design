/*var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p]+type, callback, false);
  }
}
*/

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('menuBtn'),
      menu = document.getElementById('menuApps');
  btn.addEventListener('click', function(){
    if(menu.classList.contains('active')) {
      menu.classList.remove('active');
    }else {
      menu.classList.add('active');
    }
  });
  /*var elements = document.querySelectorAll('*[data-ajax]');
  var wrapperAjax = document.getElementById('wrapperAjax');

  [].forEach.call(elements, function(el) {
    el.addEventListener('click', function(e){
      e.preventDefault();
      var element = this;
      e.srcElement.parentNode.classList.add('slidetoleft');
      PrefixedEvent(e.srcElement.parentNode, "AnimationEnd", function(){
        var link = element.getAttribute('data-ajax');
      
        request = new XMLHttpRequest
        request.open('GET', link, true)

        request.onload = function() {
          if (request.status >= 200 && request.status < 400){
            // Success!
            resp = request.response
            wrapperAjax.innerHTML = resp;
            wrapperAjax.classList.add('fadeIn');
          } else {
            // We reached our target server, but it returned an error

          }
        }

        request.onerror = function() {
          // There was a connection error of some sort
        }

        request.send()
      });
    });
  });*/
});