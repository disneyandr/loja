<template>
  <div class="produto-lista">
    <div
      v-for="produto in produtos"
      :key="produto.id"
      class="produto-card"
      @click="selecionarProduto(produto)"
    >
      <img :src="produto.imagem" :alt="produto.nome" />
      <h3>{{ produto.nome }}</h3>
      <!-- <p>{{ produto.resumo }}</p> -->
      <!-- <a :href="produto.link" target="_blank" rel="noopener noreferrer"
        >Ver Produto</a
      > -->
    </div>
  </div>
</template>
<script>
// import { getProdutos } from '@/services/produtosService';
import axios from "axios";
// const API_URL = 'http://localhost:3000/api/produtos';
export default {
  data() {
    return {
      produtos: [],
      loading: true,
      error: null,
      API_URL: "http://localhost:3000/api/produtos",
    };
  },
  mounted() {
    this.listaProdutos();
  },

  methods: {
    selecionarProduto(produto) {
      this.$emit("produtoSelecionado", produto);
    },
    async listaProdutos() {
      try {
        const response = await axios.get(this.API_URL);
        this.produtos = response.data;
      } catch (error) {
        this.error =  'Erro ao carregar os produtos';
        console.error(error);
      }finally{
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/areas.scss";
.produto-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  align-content: center;
  @include media("xl3") {
    justify-content: center;
  }
}

.produto-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  height: 250px;
  text-align: center;
  cursor: pointer;
  transition: $transition;
}
.produto-card:hover {
  box-shadow: $box-shadow;
}

.produto-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
}

.produto-card h3 {
  font-size: 1.2em;
  margin-bottom: 8px;
}

.produto-card p {
  font-size: 0.9em;
  margin-bottom: 12px;
}

.produto-card a {
  color: #007bff;
  text-decoration: none;
}

.produto-card a:hover {
  text-decoration: underline;
}
h3 {
  color: $titulo;
  font-size: 2.5rem;
}
</style>