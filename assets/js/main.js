(function(){
  const toggle = document.querySelector('.nav-toggle');
  const mm = document.querySelector('.mobile-menu');
  if(toggle && mm){
    toggle.addEventListener('click', () => {
      const open = mm.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
})();