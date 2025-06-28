<template>
  <div
    :style="backgroundStyle"
    class="detail-page d-flex justify-content-center align-items-center p-4"
  >
    <div
      v-if="movie"
      class="detail-container d-flex flex-column flex-lg-row shadow-lg rounded-4 overflow-hidden"
    >
      <div class="poster-wrapper flex-shrink-0 position-relative">
        <img
          v-if="movie.poster_path"
          :src="imageUrl"
          alt="Poster de la película"
          class="movie-poster rounded-start"
          loading="lazy"
        />
        <div
          class="rating-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill bg-purple text-white d-flex align-items-center gap-2 shadow-sm"
        >
          <font-awesome-icon icon="star" />
          <span class="fw-bold fs-5">{{ movie.vote_average.toFixed(1) }}</span>
        </div>
      </div>

      <div
        class="movie-info bg-black bg-opacity-10 text-white p-4 d-flex flex-column justify-content-between flex-grow-1"
      >
        <div>
          <h1 class="movie-title mb-3 text-gradient-purple">
            {{ movie.title }}
          </h1>
          <p class="movie-overview mb-4 fs-5">{{ movie.overview }}</p>

          <ul class="movie-meta list-unstyled d-flex flex-wrap gap-3 fs-6 mb-4">
            <li>
              <strong>Año:</strong>
              {{ movie.release_date?.split("-")[0] || "N/A" }}
            </li>
            <li><strong>Duración:</strong> {{ movie.runtime }} min</li>
            <li><strong>Géneros:</strong> {{ genreNames }}</li>
            <li><strong>Director:</strong> {{ director }}</li>
            <li><strong>Actores:</strong> {{ actors }}</li>
            <li>
              <strong>Idioma:</strong>
              {{ movie.original_language.toUpperCase() }}
            </li>
            <li><strong>Estado:</strong> {{ movie.status }}</li>
            <li>
              <strong>Votos:</strong> {{ movie.vote_count.toLocaleString() }}
            </li>
          </ul>
        </div>

        <button
          @click="toggleFavorite(movie)"
          :class="[
            'favorite-toggle btn btn-lg',
            isFavorite(movie.id) ? 'btn-danger' : 'btn-outline-light',
          ]"
          aria-label="Agregar o quitar de favoritos"
        >
          <font-awesome-icon
            :icon="isFavorite(movie.id) ? ['fas', 'heart'] : ['far', 'heart']"
            class="me-2"
          />
          {{
            isFavorite(movie.id) ? "Quitar de favoritos" : "Agregar a favoritos"
          }}
        </button>
      </div>
    </div>

    <div v-else class="loading text-white fs-3">Cargando...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
      credits: null,
      favorites: [],
    };
  },
  computed: {
    imageUrl() {
      return this.movie && this.movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
        : "";
    },
    genreNames() {
      if (!this.movie || !this.movie.genres) return "N/A";
      return this.movie.genres.map((g) => g.name).join(", ");
    },
    director() {
      if (!this.credits) return "N/A";
      const dir = this.credits.crew.find((member) => member.job === "Director");
      return dir ? dir.name : "N/A";
    },
    actors() {
      if (!this.credits || !this.credits.cast) return "N/A";
      return this.credits.cast
        .slice(0, 6)
        .map((actor) => actor.name)
        .join(", ");
    },
    backgroundStyle() {
      if (!this.movie || !this.movie.backdrop_path) {
        return {
          backgroundColor: "#0c0c0c",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        };
      }
      return {
        position: "relative",
        backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://image.tmdb.org/t/p/original${this.movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
    },
  },
  watch: {
    movie(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          const bg = this.$el;
          if (bg) {
            bg.style.filter = "none";
          }
        });
      }
    },
  },
  created() {
    const id = this.$route.params.id;
    const apiKey = "4a9a018b06269de24dc238e30bb64e86";

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener detalles");
        return res.json();
      })
      .then((data) => {
        this.movie = data;
      })
      .catch(() => {
        this.movie = null;
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=es-ES`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener créditos");
        return res.json();
      })
      .then((data) => {
        this.credits = data;
      })
      .catch(() => {
        this.credits = null;
      });

    const stored = localStorage.getItem("favorites");
    if (stored) this.favorites = JSON.parse(stored);
  },
  methods: {
    toggleFavorite(movie) {
      let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
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
      return this.favorites.some((f) => f.id === movieId);
    },
  },
};
</script>

<style scoped>
.detail-page {
  position: relative;
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow-x: hidden;
}

.detail-container {
  background: rgba(12, 12, 12, 0.85);
  max-width: 1400px; 
  width: 100%;
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 60px #5a189a;
  backdrop-filter: saturate(180%) blur(15px);
}

.poster-wrapper {
  max-width: 400px;
  position: relative;
  flex-shrink: 0;
}

.movie-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem 0 0 1rem;
  box-shadow: 0 0 30px #5a189a;
  transition: transform 0.3s ease;
}
.movie-poster:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.rating-badge {
  font-size: 1.2rem;
  background: #b290ff;
  filter: drop-shadow(0 0 5px #8b5cf6);
  font-weight: 700;
  user-select: none;
}

.movie-info {
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie-title {
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 1rem;
  text-shadow: 0 0 10px #5a189a;
  user-select: none;
  line-height: 1.1;
}

.movie-overview {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;
  margin-bottom: 2rem;
  user-select: text;
}

.movie-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  margin: 0 0 2rem;
  list-style: none;
}
.movie-meta li {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #eee;
  min-width: 180px;
  flex: 1 1 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.movie-meta li:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(186, 148, 255, 0.3);
}

.favorite-toggle {
  align-self: flex-start;
  padding: 0.7rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
}

.favorite-toggle.btn-outline-light:hover {
  background-color: #5a189a !important;
  color: white !important;
  box-shadow: 0 0 20px #5a189a;
}

.favorite-toggle.btn-danger {
  background: linear-gradient(135deg, #5a189a, #ff5c8a);
  border-color: #ff5c8a !important;
  box-shadow: 0 0 10px #ff5c8a;
  color: white !important;
}

.favorite-toggle.btn-danger:hover {
  background-color: #e04877 !important;
  box-shadow: 0 0 10px #e04877;
}

.loading {
  font-size: 2rem;
  user-select: none;
}

@media (max-width: 991.98px) {
  .detail-container {
    flex-direction: column;
    border-radius: 1rem;
  }
  .poster-wrapper {
    max-width: 100%;
  }
  .movie-poster {
    border-radius: 1rem 1rem 0 0;
    max-height: 450px;
  }
  .movie-info {
    padding: 1.5rem 2rem;
  }
  .movie-title {
    font-size: 2.2rem;
  }
  .movie-meta li {
    min-width: auto;
    flex: 1 1 45%;
  }
}
</style>
