let isLoggedIn = false;

// Elementos Desktop
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const registerBtn = document.getElementById('register-btn');
const profileBtn = document.getElementById('profile-btn');

// Elementos Mobile (offcanvas)
const loginBtnOff = document.getElementById('login-btn-off');
const logoutBtnOff = document.getElementById('logout-btn-off');
const registerBtnOff = document.getElementById('register-btn-off');
const profileBtnOff = document.getElementById('profile-btn-off');

// Itens
const loginItem = document.getElementById('login-item');
const registerItem = document.getElementById('register-item');
const profileItem = document.getElementById('profile-item');
const logoutItem = document.getElementById('logout-item');

const loginItemOff = document.getElementById('login-item-off');
const registerItemOff = document.getElementById('register-item-off');
const profileItemOff = document.getElementById('profile-item-off');
const logoutItemOff = document.getElementById('logout-item-off');

// Atualizar Interface
function updateUI() {
  if (isLoggedIn) {
    loginItem.classList.add('d-none');
    registerItem.classList.add('d-none');
    profileItem.classList.remove('d-none');
    logoutItem.classList.remove('d-none');

    loginItemOff.classList.add('d-none');
    registerItemOff.classList.add('d-none');
    profileItemOff.classList.remove('d-none');
    logoutItemOff.classList.remove('d-none');
  } else {
    loginItem.classList.remove('d-none');
    registerItem.classList.remove('d-none');
    profileItem.classList.add('d-none');
    logoutItem.classList.add('d-none');

    loginItemOff.classList.remove('d-none');
    registerItemOff.classList.remove('d-none');
    profileItemOff.classList.add('d-none');
    logoutItemOff.classList.add('d-none');
  }
}

// Event Listeners - Desktop
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isLoggedIn = true;
  updateUI();
  alert('Login simulado!');
});

logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isLoggedIn = false;
  updateUI();
  alert('Logout realizado!');
});

// Event Listeners - Mobile
loginBtnOff.addEventListener('click', (e) => {
  e.preventDefault();
  isLoggedIn = true;
  updateUI();
  const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
  offcanvas.hide(); // Fecha o menu
  alert('Login simulado!');
});

logoutBtnOff.addEventListener('click', (e) => {
  e.preventDefault();
  isLoggedIn = false;
  updateUI();
  const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
  offcanvas.hide(); // Fecha o menu
  alert('Logout realizado!');
});

// Inicializa
updateUI();
