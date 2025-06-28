<template>
  <div class="favorites-page">
    <h2 class="page-title">Mis Películas Favoritas</h2>

    <div v-if="favorites.length === 0" class="no-favorites-msg">
      No tienes películas favoritas.
    </div>

    <div v-if="favorites.length > 0" class="movies-grid">
      <div class="movie-card" v-for="movie in favorites" :key="movie.id">
        <img
          v-if="movie.poster_path"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          class="movie-poster"
        />
        <div class="movie-info">
          <h5 class="movie-title">{{ movie.title }}</h5>
          <p class="movie-date">{{ movie.release_date }}</p>
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

    <h3 class="suggestions-title">Películas Populares para Agregar</h3>

    <div class="movies-grid">
      <div class="movie-card" v-for="movie in popularMovies" :key="movie.id">
        <img
          v-if="movie.poster_path"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="movie.title"
          class="movie-poster"
        />
        <div class="movie-info">
          <h5 class="movie-title">{{ movie.title }}</h5>
          <p class="movie-date">{{ movie.release_date }}</p>
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
              :icon="isFavorite(movie.id) ? ['fas', 'heart'] : ['far', 'heart']"
            />
          </button>
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
      const stored = localStorage.getItem("favorites");
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
      return this.favorites.some((movie) => movie.id === movieId);
    },
    async fetchPopularMovies() {
      const apiKey = "4a9a018b06269de24dc238e30bb64e86";
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`
        );
        if (!res.ok) throw new Error("Error al cargar películas populares");
        const data = await res.json();
        this.popularMovies = data.results.slice(0, 5);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.favorites-page {
  padding: 2rem 1rem;
  background-color: #0c0c0c;
  color: white;
}

.page-title,
.suggestions-title {
  text-align: center;
  font-weight: 700;
  margin: 1rem 0;
}

.no-favorites-msg {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  font-style: italic;
  margin-bottom: 2rem;
}

.movies-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.movie-card {
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  border-radius: 8px;
  overflow: hidden;
  width: 180px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.movie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
}

.movie-poster {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.movie-info {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.movie-title {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-date {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.details-button {
  padding: 0.3rem 0.6rem;
  font-size: 0.85rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
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
  align-self: flex-start;
  transition: color 0.3s;
}

.favorite-button:hover {
  color: #ff5c8a;
}
</style>
