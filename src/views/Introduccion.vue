<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: white")
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Le damos la bienvenida al componente formativo denominado “La organización y los procesos productivos”, el cual hace parte del programa de formación complementario “Identificación de procesos productivos con criterios de sostenibilidad”, para lo cual se invita a observar el siguiente video:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
