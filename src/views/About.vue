<template>
  <section class="about-section py-5 text-light">
    <div class="container">
      <div class="row align-items-center mb-5">
        <div class="col-md-6 mb-4 mb-md-0">
          <img
            src="../assets/img-about.avif"
            alt="Cine"
            class="img-fluid rounded shadow about-image"
          />
        </div>
        <div class="col-md-6">
          <h2 class="display-4 fw-bold mb-3">Sobre la App</h2>
          <p class="lead">
            Esta aplicación te permite explorar películas populares, ver detalles y agregar tus favoritas.
            Todo en una experiencia visual atractiva y fácil de usar.
          </p>
          <p>
            Utilice <strong>Vue.js</strong> y <strong>The Movie Database API</strong> para ofrecerte información actualizada y relevante sobre el mundo del cine.
          </p>
        </div>
      </div>

      <div class="row text-center gy-4">
        <div class="col-md-4">
          <div class="feature-card p-4 h-100">
            <font-awesome-icon :icon="['fas', 'heart']" size="2x" class="mb-3 text-accent"/>
            <h5 class="fw-bold">Catálogo Extenso</h5>
            <p>Encuentra películas de todos los géneros, décadas y países.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-card p-4 h-100">
            <font-awesome-icon :icon="['fas', 'heart']" size="2x" class="mb-3 text-accent"/>
            <h5 class="fw-bold">Tus Favoritos</h5>
            <p>Guarda tus películas preferidas en tu lista personal y accede rápido a ellas.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="feature-card p-4 h-100">
            <font-awesome-icon :icon="['fas', 'heart']" size="2x" class="mb-3 text-accent"/>
            <h5 class="fw-bold">Rendimiento Rápido</h5>
            <p>Gracias a Vue y Bootstrap, la app es ágil y responsiva en cualquier dispositivo.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about-image {
  transition: transform 0.3s ease;
}
.about-image:hover {
  transform: scale(1.05);
}

.feature-card {
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  border-radius: 8px;
  transition: background 0.3s, transform 0.3s;
}
.feature-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
}

.text-accent {
  color: #ff5c8a;
}
</style>
