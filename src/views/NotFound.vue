<template>
  <Header />
  <div class="not-found">
    <h1>404 - Page Non Trouvée</h1>
    <img src="../assets/notfound.png" alt="Erreur 404" style="height: 500px; width: 500px" />
    <br />
    <router-link to="/">Retour à l'accueil</router-link>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
@import url('../assets/main.css');
</style>
