<template>
  <div class="container">
    <div v-if="movies.length === 0" class="alert alert-warning text-center">
      No hay resultados
    </div>

    <div class="row justify-content-center">
      <div
        class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4"
        v-for="movie in movies"
        :key="movie.id"
      >
        <div class="movie-card">
          <img
            v-if="movie.poster_path"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            class="movie-poster"
            :alt="movie.title"
          />
          <div class="movie-body">
            <h5 class="movie-title">{{ movie.title }}</h5>
            <p class="movie-date">{{ movie.release_date }}</p>
            <div class="movie-actions">
              <router-link :to="`/movie/${movie.id}`" class="details-button">
                Ver detalles
              </router-link>
              <button
                @click="toggleFavorite(movie)"
                class="favorite-button"
                :aria-label="
                  isFavorite(movie.id)
                    ? 'Quitar de favoritos'
                    : 'Agregar a favoritos'
                "
              >
                <font-awesome-icon
                  :icon="
                    isFavorite(movie.id) ? ['fas', 'heart'] : ['far', 'heart']
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      this.favorites = JSON.parse(stored);
    }
  },
  methods: {
    toggleFavorite(movie) {
      const index = this.favorites.findIndex((f) => f.id === movie.id);
      if (index === -1) {
        this.favorites.push(movie);
      } else {
        this.favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
    isFavorite(movieId) {
      return this.favorites.some((f) => f.id === movieId);
    },
  },
};
</script>

<style scoped>
.movie-card {
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}
.movie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}
.movie-poster {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.movie-body {
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.movie-title {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin: 0;
}
.movie-date {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}
.movie-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}
.details-button {
  padding: 0.3rem 0.6rem;
  font-size: 0.85rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s, border 0.3s;
}
.details-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}
.favorite-button {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;
}
.favorite-button:hover {
  color: #ff5c8a;
}
</style>
