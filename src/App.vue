<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-principal
  .tarjeta
    background-color: transparent !important
    border-top-right-radius: 0
    border-bottom-right-radius: 0
    @media (max-width: 1200px)
      background-image: url('/img/fondo-banner-principal.svg') !important
  .banner-principal__img
    min-height: 540px
    img
      display: none
.banner-principal__info
  .banner-principal__componente h1, .banner-principal__descripcion p
    color: black !important
.banner-interno__fondo
  background-image: url('/img/banner-interno.svg') !important
</style>
