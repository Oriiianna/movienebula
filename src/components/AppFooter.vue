<template>
  <footer class="custom-footer py-5">
    <div class="container px-5 text-white">
      <div class="row gy-4">
        <div class="col-md-5">
          <h4 class="footer-title text-purple fw-bold mb-3">MovieNebula</h4>
          <p class="footer-description">
            MovieNebula es una app que te permite explorar y guardar tus películas favoritas, con una experiencia sencilla, moderna y personalizada para cinéfilos como vos.
          </p>
        </div>

        <div class="col-md-3">
          <h5 class="footer-subtitle text-purple fw-semibold mb-3">Navegación</h5>
          <ul class="list-unstyled footer-links">
            <li><router-link to="/" class="footer-link">Inicio</router-link></li>
            <li><router-link to="/Favorites" class="footer-link">Favoritos</router-link></li>
            <li><router-link to="/about" class="footer-link">Acerca de</router-link></li>
            <li><router-link to="/contactPage" class="footer-link">Contacto</router-link></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h5 class="footer-subtitle text-purple fw-semibold mb-3">Redes Sociales</h5>
          <div class="social-icons d-flex gap-3 mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="social-link">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" class="social-link">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="social-link">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </div>
          <p class="footer-contact">
            ¿Consultas? Escríbenos a
            <a href="mailto:contacto@movienebula.com" class="footer-email">contacto@movienebula.com</a>
          </p>
        </div>
      </div>

      <hr class="footer-divider" />

      <div class="text-center small text-purple">
        © {{ new Date().getFullYear() }} MovieNebula. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>


<style scoped>
.custom-footer {
  background-color: #000000;
  box-shadow: inset 0 4px 15px rgba(90, 24, 154, 0.6);
  letter-spacing: 0.04em;
  user-select: none;
}

.footer-title {
  text-align: start;
  font-size: 1.75rem;
  letter-spacing: 0.08em;
  user-select: text;
}

.footer-description {
  text-align: start;

  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
  user-select: text;
}

.footer-subtitle {
  font-size: 1.25rem;
  letter-spacing: 0.06em;
  text-align: start;

}

.footer-links {
  padding-left: 0;
  
}

.footer-link {
  text-align: start;
  color: #b290ff;
  font-weight: 600;
  text-decoration: none;
  display: block;
  margin-bottom: 0.6rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-link:hover,
.footer-link:focus {
  color: #ff5c8a;
  text-decoration: underline;
  transform: scale(1.05);
}

.social-icons .social-link {
  color: #b290ff;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons .social-link:hover,
.social-icons .social-link:focus {
  color: #ff5c8a;
  transform: scale(1.2);
  text-decoration: none;
}

.footer-contact {
  text-align: start;

  font-size: 0.9rem;
  color: #ccc;
}

.footer-email {
  color: #ff5c8a;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.footer-email:hover,
.footer-email:focus {
  color: #b290ff;
  text-decoration: underline;
}

.footer-divider {
  border-color: rgba(90, 24, 154, 0.3);
  margin: 2rem 0 1.5rem;
}

.text-purple {
  color: #ff5c8a;
}
</style>
