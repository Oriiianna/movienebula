<template>
  <div class="container">
    <h2 class="page-title">Mis Películas Favoritas</h2>

    <div v-if="favorites.length === 0" class="no-favorites-msg">
  No tienes películas favoritas.
</div>

    <div class="row justify-content-center" v-if="favorites.length > 0">
      <div
        class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4"
        v-for="movie in favorites"
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
                aria-label="Quitar de favoritos"
              >
                <font-awesome-icon icon="fas fa-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 class="suggestions-title">Películas Populares para Agregar</h3>

    <div class="row justify-content-center">
      <div
        class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4"
        v-for="movie in popularMovies"
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
  name: "FavoritesView",
  data() {
    return {
      favorites: [],
      popularMovies: [],
    };
  },
  mounted() {
    this.loadFavorites();
    this.fetchPopularMovies();
  },
  methods: {
    loadFavorites() {
      const stored = localStorage.getItem("favorites");
      this.favorites = stored ? JSON.parse(stored) : [];
    },
    toggleFavorite(movie) {
      let stored = localStorage.getItem("favorites");
      let favorites = stored ? JSON.parse(stored) : [];
      const index = favorites.findIndex((f) => f.id === movie.id);
      if (index === -1) {
        favorites.push(movie);
      } else {
        favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      this.favorites = favorites;
    },
    isFavorite(movieId) {
      return this.favorites.some((m) => m.id === movieId);
    },
    async fetchPopularMovies() {
      const apiKey = "4a9a018b06269de24dc238e30bb64e86";
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`
        );
        if (!res.ok) throw new Error("Error al cargar películas populares");
        const data = await res.json();
        this.popularMovies = data.results.slice(0, 6);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>

.no-favorites-msg {
  text-align: center;
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  color: white;
  font-weight: 600;
  padding: 1.2rem;
  border-radius: 0.75rem;
  margin: 2rem auto;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(90, 24, 154, 0.5);
}

.page-title,
.suggestions-title {
  color: #f0f0f0;
  text-align: center;
  font-weight: 700;
  margin: 1rem 0;
}

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
