window.addEventListener("load", function(){
  setTimeout(() => {
    particlesJS.load('particles', './js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, 500);
});
