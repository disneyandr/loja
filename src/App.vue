<script setup>
import { ref } from "vue";
import produto_lista from "./components/produto_lista.vue";
import produto_destacado from "./components/produto_destacado.vue";

const produtoDestacado = ref(null);

function atualizarProdutoDestacado(produto) {
  produtoDestacado.value = produto;
}

  const currentYear = new Date().getFullYear()



</script>

<template>
  <div class="app_content concert-one-regular">
    <header>
      <div class="header__container">Clima Store</div>
    </header>

    <main>
      <div class="main__container">
        <div class="produtos">
          <produto_destacado  :produto="produtoDestacado"/>
          <produto_lista @produtoSelecionado="atualizarProdutoDestacado"/>
        </div>
      </div>
    </main>

    <footer>
      <div class="footer__container">&copy; {{ currentYear }} - Clima Digital</div>
    </footer>
  </div>
</template>


