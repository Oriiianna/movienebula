<template>
  <div class="contact-page">
    <section class="hero text-center text-light py-5">
      <div class="container">
        <h2 class="display-3 fw-bold mb-3">Contáctanos</h2>
      </div>
    </section>

    <section class="contact-section py-5">
      <div class="container">
        <div class="row justify-content-center g-4">
          <div class="col-lg-6">
            <div class="form-card p-4 p-md-5 rounded shadow-lg">
              <h2 class="h4 mb-4 text-light">
                <i class="fas fa-envelope me-2"></i>Envía tu mensaje
              </h2>
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="name" class="form-label text-light">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="form-control"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label text-light">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    class="form-control"
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label text-light">Mensaje</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    class="form-control"
                    rows="4"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-gradient w-100 mt-3">
                  <i class="fas fa-paper-plane me-2"></i>Enviar
                </button>
              </form>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="info-card p-4 p-md-5 rounded shadow-lg h-100 text-light">
              <h2 class="h4 mb-4">
                <i class="fas fa-info-circle me-2"></i>Información
              </h2>
              <p class="mb-3">
                Puedes contactarnos también por correo o seguirnos en redes:
              </p>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="fas fa-envelope me-2"></i>
                  <a href="mailto:contacto@cineexplorer.com" class="text-decoration-none text-light">
                    contacto@cineexplorer.com
                  </a>
                </li>
                <li class="mb-2">
                  <i class="fab fa-twitter me-2"></i>
                  <a href="#" class="text-decoration-none text-light">
                    @CineExplorer
                  </a>
                </li>
                <li class="mb-2">
                  <i class="fab fa-instagram me-2"></i>
                  <a href="#" class="text-decoration-none text-light">
                    cineexplorer
                  </a>
                </li>
              </ul>
              <p class="mt-4 small text-muted">
                Te responderemos en un plazo de 24 a 48 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact-page {
  background-color: #0c0c0c;
}

.form-card,
.info-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-control,
.form-control:focus {
  background-color: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.btn-gradient {
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  border: none;
  color: white;
  font-weight: 600;
  transition: background 0.3s;
}
.btn-gradient:hover {
  background: linear-gradient(135deg, #5a189a, #33003d);
}
</style>
