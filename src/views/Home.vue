<template>
  <div class="home-container">
    <h1 class="title">Buscar Películas</h1>
    <SearchBar @search="handleSearch" />
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import MovieList from "../components/MovieList.vue";

export default {
  name: "HomeView",
  components: { SearchBar, MovieList },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async fetchPopularMovies() {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.movies = data.results || [];
      } catch (error) {
        console.error("Error cargando películas populares:", error);
      }
    },
    async handleSearch(filters) {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;

      // Si hay texto de búsqueda, usamos /search/movie
      if (filters.query) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${encodeURIComponent(
          filters.query
        )}&sort_by=${filters.sortBy}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          this.movies = data.results || [];
        } catch (error) {
          console.error("Error buscando películas:", error);
        }
      } else {
        // Si no hay texto de búsqueda, usamos /discover/movie con filtros
        const params = new URLSearchParams({
          api_key: apiKey,
          language: "es-ES",
          sort_by: filters.sortBy,
        });

        if (filters.genre) {
          params.append("with_genres", filters.genre);
        }
        if (filters.year) {
          params.append("primary_release_year", filters.year);
        }

        const url = `https://api.themoviedb.org/3/discover/movie?${params}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          this.movies = data.results || [];
        } catch (error) {
          console.error("Error filtrando películas:", error);
        }
      }
    },
  },
  mounted() {
    this.fetchPopularMovies();
  },
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background-color: #0c0c0c;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
}
</style>
