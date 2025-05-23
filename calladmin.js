// calladmin.js
document.addEventListener('DOMContentLoaded', function () {
  const html = `
    <div class="call-admin-btn" role="button" aria-label="Hubungi admin" onclick="toggleAdminPopup()">
      <i class="fab fa-whatsapp"></i> CALL ADMIN
    </div>

    <div class="admin-popup" id="adminPopup">
      <a href="https://wa.me/6281111111111" class="admin-option" target="_blank" rel="noopener noreferrer">Admin E-Team</a>
      <a href="https://wa.me/6282222222222" class="admin-option" target="_blank" rel="noopener noreferrer">Admin Elite</a>
      <a href="https://wa.me/6283333333333" class="admin-option" target="_blank" rel="noopener noreferrer">Admin Top Up</a>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

  // Script toggle
  window.toggleAdminPopup = function () {
    const popup = document.getElementById('adminPopup');
    popup.classList.toggle('show');
  };

  // Klik di luar tutup popup
  document.addEventListener('click', function (e) {
    const popup = document.getElementById('adminPopup');
    const button = document.querySelector('.call-admin-btn');
    if (popup && !popup.contains(e.target) && !button.contains(e.target)) {
      popup.classList.remove('show');
    }
  });
});
