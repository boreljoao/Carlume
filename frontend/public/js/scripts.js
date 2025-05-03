// Inicialização dos carrosséis com intervalo de 6 segundos
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach((carousel, index) => {
      new bootstrap.Carousel(carousel, {
          interval: 6000, // 6 segundos (corrigido de 1000)
          wrap: true,
          pause: false,
          keyboard: true
      });
  });
});

// Restante do código de autenticação permanece igual
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
function updateUI(isLoggedIn) {
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
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

if (loginModal) {
    if (isDark) {
        loginModal.querySelector('.modal-content').classList.add('dark-theme');
    } else {
        loginModal.querySelector('.modal-content').classList.remove('dark-theme');
    }
}

if (registerModal) {
    if (isDark) {
        registerModal.querySelector('.modal-content').classList.add('dark-theme');
    } else {
        registerModal.querySelector('.modal-content').classList.remove('dark-theme');
    }
}
}

// Event Listeners - Desktop
loginBtn.addEventListener('click', (e) => {
e.preventDefault();
isLoggedIn = true;
updateUI();

});

logoutBtn.addEventListener('click', (e) => {
e.preventDefault();
isLoggedIn = false;
updateUI();

});

// Event Listeners - Mobile
loginBtnOff.addEventListener('click', (e) => {
e.preventDefault();
isLoggedIn = true;
updateUI();
const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
offcanvas.hide(); // Fecha o menu

});

logoutBtnOff.addEventListener('click', (e) => {
e.preventDefault();
isLoggedIn = false;
updateUI();
const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
offcanvas.hide(); // Fecha o menu

});



// Inicializa
updateUI();


// Dark Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleOff = document.getElementById('theme-toggle-off');

// Função para alternar tema
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDark);
  
  // Atualiza ícones
  const icon = isDark ? 'sun' : 'moon';
  themeToggle.innerHTML = `<i class="fas fa-${icon}"></i> Tema`;
  themeToggleOff.innerHTML = `<i class="fas fa-${icon}"></i> Tema`;
}

// Verifica preferência salva ou do sistema
function checkTheme() {
  const savedTheme = localStorage.getItem('darkTheme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'true' || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Tema';
    themeToggleOff.innerHTML = '<i class="fas fa-sun"></i> Tema';
  }
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);
themeToggleOff.addEventListener('click', toggleTheme);

// Verifica tema ao carregar
document.addEventListener('DOMContentLoaded', checkTheme);


// Adicionar este código ao seu scripts.js
function showLoginModal() {
  const modalHTML = `
  <div class="modal fade" id="loginModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header border-0">
                  <h5 class="modal-title">Login</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <button class="btn btn-outline-danger w-100 mb-3" id="googleLogin">
                      <i class="fab fa-google me-2"></i> Continuar com Google
                  </button>
                  <div class="d-flex align-items-center my-3">
                      <hr class="flex-grow-1">
                      <span class="mx-3 text-muted">ou</span>
                      <hr class="flex-grow-1">
                  </div>
                  <form id="modalLoginForm">
                      <div class="mb-3">
                          <input type="email" class="form-control" placeholder="Email" required>
                      </div>
                      <div class="mb-3">
                          <input type="password" class="form-control" placeholder="Senha" required>
                      </div>
                      <button type="submit" class="btn btn-primary w-100">Entrar</button>
                  </form>
                  <div class="text-center mt-3">
                      <p class="small">Não tem conta? <a href="#" id="showRegister">Cadastre-se</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  const modal = new bootstrap.Modal(document.getElementById('loginModal'));
  modal.show();
  
  // Event listeners para o modal
  document.getElementById('modalLoginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.setItem('isLoggedIn', 'true');
      modal.hide();
      updateUI(true);
  });
  
  document.getElementById('showRegister').addEventListener('click', function(e) {
      e.preventDefault();
      modal.hide();
      showRegisterModal();
  });
}

function showRegisterModal() {
  const modalHTML = `
  <div class="modal fade" id="registerModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header border-0">
                  <h5 class="modal-title">Criar Conta</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <button class="btn btn-outline-danger w-100 mb-3" id="googleRegister">
                      <i class="fab fa-google me-2"></i> Registrar com Google
                  </button>
                  <div class="d-flex align-items-center my-3">
                      <hr class="flex-grow-1">
                      <span class="mx-3 text-muted">ou</span>
                      <hr class="flex-grow-1">
                  </div>
                  <form id="modalRegisterForm">
                      <div class="mb-3">
                          <input type="text" class="form-control" placeholder="Nome completo" required>
                      </div>
                      <div class="mb-3">
                          <input type="email" class="form-control" placeholder="Email" required>
                      </div>
                      <div class="mb-3">
                          <input type="password" class="form-control" placeholder="Senha" required>
                      </div>
                      <button type="submit" class="btn btn-primary w-100">Criar Conta</button>
                  </form>
                  <div class="text-center mt-3">
                      <p class="small">Já tem conta? <a href="#" id="showLogin">Faça login</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  const modal = new bootstrap.Modal(document.getElementById('registerModal'));
  modal.show();
  
  document.getElementById('modalRegisterForm').addEventListener('submit', function(e) {
      e.preventDefault();
      localStorage.setItem('isLoggedIn', 'true');
      modal.hide();
      updateUI(true);
  });
  
  document.getElementById('showLogin').addEventListener('click', function(e) {
      e.preventDefault();
      modal.hide();
      showLoginModal();
  });
}

// Atualize os event listeners dos botões de login/register
document.querySelectorAll('[id^="login-btn"]').forEach(btn => {
  btn.addEventListener('click', function(e) {
      e.preventDefault();
      showLoginModal();
  });
});

document.querySelectorAll('[id^="register-btn"]').forEach(btn => {
  btn.addEventListener('click', function(e) {
      e.preventDefault();
      showRegisterModal();
  });
});

function checkModalTheme(modalElement) {
  const isDark = document.body.classList.contains('dark-theme');
  if (isDark) {
      modalElement.querySelector('.modal-content').classList.add('dark-theme');
  }
}

// Atualize as funções showLoginModal e showRegisterModal para chamar checkModalTheme
// logo após criar o modal:
const modal = new bootstrap.Modal(document.getElementById('loginModal'));
modal.show();
checkModalTheme(document.getElementById('loginModal'));