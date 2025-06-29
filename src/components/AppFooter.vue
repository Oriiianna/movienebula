<template>
  <footer class="custom-footer py-4">
      <div class="text-center small text-purple">
        © {{ new Date().getFullYear() }} MovieNebula. Todos los derechos reservados.
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

.footer-email {
  color: #ff5c8a;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}


.footer-divider {
  border-color: rgba(90, 24, 154, 0.3);
  margin: 2rem 0 1.5rem;
}

.text-purple {
  color: #ff5c8a;
}
</style>
