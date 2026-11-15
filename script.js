// Mobile menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// If a photo file is missing, hide its whole slot so the page stays tidy
document.querySelectorAll('.media img').forEach(function (img) {
  function hide() { img.parentElement.classList.add('is-empty'); }
  img.addEventListener('error', hide);
  if (img.complete && img.naturalWidth === 0) { hide(); }
});

// Footer year
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Contact form: opens the visitor's email app with the message filled in
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var topic = document.getElementById('topic').value;
    var message = document.getElementById('message').value.trim();
    var subject = 'Explore India enquiry: ' + topic;
    var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
    window.location.href = 'mailto:doodlingart12@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
}
