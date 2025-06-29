<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container-fluid px-5">
      <router-link
        class="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2"
        to="/"
        @click="closeMenu"
      >
        <span class="text-logo">MovieNebula</span>
        <span class="brand-icon fs-2">🎬</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse overlay-menu" id="navbarContent">
        <ul class="navbar-nav ms-auto align-items-center gap-4">
          <li class="nav-item">
            <router-link
              class="nav-link text-light px-3 py-2 rounded"
              to="/"
              @click="closeMenu"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-light px-3 py-2 rounded"
              to="/favorites"
              @click="closeMenu"
              >Favoritos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-light px-3 py-2 rounded"
              to="/about"
              @click="closeMenu"
              >Acerca</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="btn btn-gradient text-white px-4 py-2 fw-semibold"
              to="/contactPage"
              @click="closeMenu"
            >
              Contacto
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
/* global bootstrap */
export default {
  name: "AppNavbar",
  methods: {
    toggleMenu() {
      const navbarCollapse = document.getElementById("navbarContent");
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      } else {
        new bootstrap.Collapse(navbarCollapse, { toggle: true });
      }
    },
    closeMenu() {
      const navbarCollapse = document.getElementById("navbarContent");
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    },
  },
};
</script>

<style scoped>
.text-logo {
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  border-radius: 10px;
  color: #ffffff;
  padding: 0 10px;
}

.custom-navbar {
  background-color: #000000;
  box-shadow: 0 4px 15px rgba(90, 24, 154, 0.6);
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  letter-spacing: 0.05em;
  transition: background-color 0.4s ease;
  position: sticky;
  top: 0;
  z-index: 1050;
}

.custom-navbar .navbar-brand {
  color: #5a189a;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  user-select: none;
}

.custom-navbar .navbar-brand:hover {
  color: #ff5c8a;
  cursor: pointer;
  transform: scale(1.05);
}

.brand-icon {
  font-size: 1.4rem;
  animation: bounce 2s infinite;
  display: inline-block;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Menú sobrepuesto para móviles */
.overlay-menu {
  position: fixed !important;
  top: 56px; /* altura navbar */
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1040;
  padding: 1rem 0;
  border-radius: 0 0 0.5rem 0.5rem;
}

/* Para escritorio dejar normal */
@media (min-width: 992px) {
  .overlay-menu {
    position: static !important;
    background-color: transparent !important;
    padding: 0 !important;
    border-radius: 0 !important;
  }
}

.nav-link {
  transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
  font-weight: 600;
}

.nav-link:hover,
.nav-link:focus {
  color: #ff5c8a !important;
  background-color: rgba(255, 92, 138, 0.15);
  transform: scale(1.1);
  border-radius: 6px;
  text-decoration: none;
}

.btn-gradient {
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  border: none;
  box-shadow: 0 0 15px #ff5c8aaa;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  border-radius: 30px;
  font-weight: 700;
}

.btn-gradient:hover,
.btn-gradient:focus {
  box-shadow: 0 0 25px #ff5c8aee;
  transform: scale(1.1);
  text-decoration: none;
}

/* Navbar toggler color blanco sin gradiente */
.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.3);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 767px) {
  .custom-navbar .navbar-nav {
    gap: 1rem;
  }
  .btn-gradient {
    width: 100%;
    text-align: center;
  }
}
</style>
