<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="query"
      placeholder="Buscar películas..."
      @keyup.enter="emitSearch"
      class="search-input"
    />

    <select v-model="year" class="filter-select">
      <option value="">Año</option>
      <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
    </select>

    <select v-model="genre" class="filter-select">
      <option value="">Género</option>
      <option v-for="g in genres" :key="g.id" :value="g.id">{{ g.name }}</option>
    </select>

    <select v-model="sortBy" class="filter-select">
      <option value="popularity.desc">Más populares</option>
      <option value="release_date.desc">Más recientes</option>
      <option value="vote_average.desc">Mejor puntuadas</option>
    </select>

    <button @click="emitSearch" class="search-button">Buscar</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
      year: "",
      genre: "",
      sortBy: "popularity.desc",
      years: this.generateYears(),
      genres: [
        { id: 28, name: "Acción" },
        { id: 35, name: "Comedia" },
        { id: 18, name: "Drama" },
        { id: 27, name: "Terror" },
      ],
    };
  },
  methods: {
    emitSearch() {
      this.$emit("search", {
        query: this.query,
        year: this.year,
        genre: this.genre,
        sortBy: this.sortBy,
      });
    },
    generateYears() {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: 50 }, (_, i) => currentYear - i);
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.search-input,
.filter-select,
.search-button {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: background 0.3s, box-shadow 0.3s;
}

.search-input:focus,
.filter-select:focus {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-button {
  background: white;
  color: #5a189a;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.search-button:hover {
  background: #e0e0e0;
  color: #4a148c;
}

.filter-select option {
  background: #5a189a;
  color: white;       
}

</style>
