document.addEventListener('click', function(event) {
 const contact = document.querySelector('.contact-float');
 if (contact && !contact.contains(event.target)) contact.open = false;
});
document.addEventListener('keydown', function(event) {
 const contact = document.querySelector('.contact-float');
 if (event.key === 'Escape' && contact && contact.open) {
  contact.open = false;
  contact.querySelector('summary').focus();
 }
});
