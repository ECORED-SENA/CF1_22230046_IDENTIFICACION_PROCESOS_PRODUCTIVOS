<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Toda organización presenta una estructura funcional definida que le permite el desarrollo eficiente de sus procesos, con miras a satisfacer las necesidades del cliente y el logro de los objetivos propuestos, estableciendo mecanismos para coordinar, mejorar e incrementar la productividad, teniendo como prioridad el desarrollo de las actividades y operaciones propias de la organización, sin afectar a las personas vinculadas de forma directa o indirecta con el desarrollo de la misma.

    p Para cumplir con los objetivos organizacionales es importante conocer claramente la organización, el tipo de actividad económica que desarrolla, sus áreas funcionales, quiénes se ven involucrados de manera directa o indirecta con su funcionamiento, todos los componentes del proceso productivo, cómo se deben gestionar los procesos dentro de la organización y los requisitos para el cumplimiento de la normatividad, ya que de esta manera se estaría contemplando a la organización como un sistema.

    p.mb-5 Así pues, un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa conceptual


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
