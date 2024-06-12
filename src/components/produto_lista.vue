<template>
  <div class="produto-lista">
    <div
      v-for="(produto, index) in produtos"
      :key="index"
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
import glImage from "../assets/gl.png";
import smImage from "../assets/socialMedia.jpg";
import fnImage from "../assets/familiaNomade.webp";
import efImage from "../assets/educacaoFinanceira.png";
import gaImage from "../assets/googleAds.png";
export default {
  data() {
    return {
      produtos: [
        {
          imagem: glImage,
          nome: "GetLeads",
          resumo:
            "Uma ferramenta. Várias possibilidades. Com apenas uma ferramenta e alguns cliques, você terá seu próprio site de maneira prática e bonita. ",
          link: "https://go.hotmart.com/S6894395K",
        },
        {
          imagem: smImage,
          nome: "Torne-se um Social Media",
          resumo: "Parabéns por sua decisão de se tornar um Social Media!",
          link: "https://go.hotmart.com/A93266264S",
        },
        {
          imagem: fnImage,
          nome: "Mapa do Caminho",
          resumo: "APRENDA A GANHAR DINHEIRO VIAJANDO",
          link: "https://go.hotmart.com/E93715888S?dp=1",
        },
        {
          imagem: efImage,
          nome: "Educação Financeira",
          resumo: "O melhor material de Educação Financeira!",
          link: "https://go.hotmart.com/C93716039I",
        },
        {
          imagem: gaImage,
          nome: "O Clube Google Ads Xpress",
          resumo:
            "O Clube Google Ads Xpress é um Treinamento Completo para quem deseja aprender anunciar no Google",
          link: "https://go.hotmart.com/K93716177F?dp=1",
        },
      ],
    };
  },
  methods: {
    selecionarProduto(produto) {
      this.$emit("produtoSelecionado", produto);
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