<template>
  <div class="produto-destacado" v-if="produto">
    <div class="produto-card">
      <img :src="produto.imagem" :alt="produto.nome" />
      <h3>{{ produto.nome }}</h3>
      <p>{{ produto.resumo }}</p>
      <a :href="produto.link" target="_blank" rel="noopener noreferrer"
        >Ver Produto</a
      >
    </div>
  </div>
  <div class="produto-destacado" v-else>
    <div class="produto-card">
      <img :src="produtoDefault.imagem" :alt="produtoDefault.nome" />
      <h3>{{ produtoDefault.nome }}</h3>
      <p>{{ produtoDefault.resumo }}</p>
      <a :href="produtoDefault.link" target="_blank" rel="noopener noreferrer"
        >Ver Produto</a
      >
    </div>
  </div>
</template>
<script>
import glImage from "/assets/gl.png";
export default {
  props: {
    produto: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      produtoDefault: {
        imagem: glImage,
          nome: "GetLeads",
          resumo:
            "Uma ferramenta. Várias possibilidades. Com apenas uma ferramenta e alguns cliques, você terá seu próprio site de maneira prática e bonita. ",
          link: "https://go.hotmart.com/S6894395K",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/areas.scss";

.produto-destacado {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.produto-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 90%;
  text-align: center;
  cursor: pointer;
  transition: $transition;

  p{
    color: $resumoColor;
  }
}
.produto-card:hover {
  box-shadow: $box-shadow-destaque;
}
.produto-card img {
  width: 68%;
  height: auto;
  margin-bottom: 8px;

  @include media('xl2'){
    width: 100%;
  }
}

.produto-card h3 {
  /* font-size: 1.2em; */
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