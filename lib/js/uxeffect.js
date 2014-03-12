var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p]+type, callback, false);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('logo'),
      overlay = document.getElementById('overlay'),
      user = document.getElementById('user'),
      apps = document.getElementById('apps');
  btn.addEventListener('click', function(){
    if(overlay.classList.contains('active')) {
      overlay.classList.add('fadeOut');
      PrefixedEvent(overlay, "AnimationEnd", function(){
        if(overlay.classList.contains('fadeOut')) {
          overlay.classList.remove('active');
        }
      });
      apps.classList.remove('fadeIn', 'delay');
      user.classList.remove('slideintop');
    }else {
      overlay.classList.remove('fadeOut');
      overlay.classList.add('active');
      
      apps.classList.add('fadeInLeft', 'delay');
      user.classList.add('slideintop');
    }
  });
  var btnApps = document.querySelectorAll('.btnClick');
  var closeBtn = document.querySelectorAll('.close');
  Array.prototype.forEach.call(btnApps, function(el) {
    el.addEventListener('click', function(e){
      e.preventDefault();
      var link = this.getAttribute('data-id');
      console.log(link);
      overlay.classList.add(link);
    })
  })

  Array.prototype.forEach.call(closeBtn, function(ele) {
    ele.addEventListener('click', function(e){
      e.preventDefault();
      if(overlay.classList.contains('password-active')) {
        overlay.classList.remove('password-active');
      }else if(overlay.classList.contains('user-active')) {
        overlay.classList.remove('user-active');
      }
    })
  })
});