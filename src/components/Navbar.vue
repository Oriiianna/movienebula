<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container-fluid px-5">
      <router-link
        class="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2"
        to="/"
      >
        <span class="text-logo">MovieNebula</span>
        <span class="brand-icon fs-2">🎬</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto align-items-center gap-4">
          <li class="nav-item">
            <router-link class="nav-link text-light px-3 py-2 rounded" to="/"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-light px-3 py-2 rounded"
              to="/favorites"
              >Favoritos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-light px-3 py-2 rounded"
              to="/about"
              >Acerca</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="btn btn-gradient text-white px-4 py-2 fw-semibold"
              to="/contactPage"
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
export default {
  name: "AppNavbar",
};
</script>

<style scoped>

.text-logo{
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
  z-index: 1030;
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
