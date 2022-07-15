<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 2
      h1 Proceso productivo

    p.mb-5(data-aos="fade-right") En la sociedad industrial la elaboración de bienes y servicios requiere un conjunto de tareas y procedimientos para llevarse a cabo dentro de una organización, indistintamente del sector a que pertenezca. Es así como el proceso productivo precisa de diversas etapas y clasificaciones para la transformación de la materia prima y la prestación de servicios en la actualidad. De esta manera

    .col-xl-10.mx-auto.mb-5(data-aos="fade-left")
      .text-decorativo-v4
        p.p-4.mb-0 para garantizar el éxito en el proceso productivo, la organización debe contar con la capacidad instalada para llevar a cabo los objetivos mismos de la producción, así, se necesita contar con el conocimiento y la tecnología que permita suplir las condiciones propias de la producción y obtener el bien o servicio de calidad para su promoción y comercialización.
    
    p.mb-5(data-aos="fade-right") Dentro de las organizaciones actuales los procesos productivos están regulados por el sistema de administración de operaciones, este permite entender qué respuesta deben dar los bienes y servicios que produce la empresa como lo muestra la siguiente figura.

    .titulo-sexto.color-primario.col-xl-10.mx-auto
      .d-block
        h5 Figura 1 Organización de un sistema integrado
    img(src="@/assets/curso/temas/tema2/img-1.svg" data-aos="fade-left")
    p.mb-5.px-3.py-3(style="background-color: #F6F6F6;" data-aos="fade-left") Nota. Tomada de Carro y González (2012, p. 4)

    p(data-aos="fade-right") La figura 3 muestra que el proceso productivo debe responder a un contexto sistemático, en el cual es decisivo la direccionalidad que tiene la organización para alcanzar las metas, pues esta debe disponer de capital económico, humano, información y materiales que permitan que el proceso productivo responda a las actividades comerciales mediante la promoción y comercialización de los bienes y servicios terminados (Carro y González, 2012). 
    p.mb-5(data-aos="fade-right") En esa medida, la siguiente infografía, representa el proceso productivo:

    img.mb-5.d-none.d-md-flex(src="@/assets/curso/temas/tema2/img-2.svg" data-aos="fade-left")
    img.mb-5.d-flex.d-md-none(src="@/assets/curso/temas/tema2/img-2-movil.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") Retomando la figura 3, el sistema de producción se aplica no solo a la empresa, sino también a diferentes departamentos de la organización. Es así como el proceso productivo no solo responde a los clientes externos, sino también internos de la organización independientemente de si el producto final consiste en servicios o manufacturas. De este modo, el proceso productivo es un ciclo determinado por la transformación que está conectada a una serie de etapas que conecta la tecnología, el mercado y el capital humano de la organización.

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-xl-6.p-3.p-xl-4.order-2.order-xl-1(style="background-color: #E1EFEF; border: 1px solid #B5D8D8;" data-aos="fade-right")
        p.mb-0 Este proceso, en la realidad actual de las organizaciones, media entre la tecnología, la capacidad económica y las necesidades propias del mercado específico. Pues con las tecnologías de la comunicación las demandas del mercado son cada vez más específicas y devengan de una capacidad entre la producción y la distribución del bien o el servicio ofrecido. Por tal razón, el proceso productivo no debe tomarse a la ligera, de esto depende la calidad de los bienes y servicios ofertados, y, por ende, mantener vigente y competitiva la organización. Así, aunado al proceso productivo se encuentran las etapas de la planeación, organización, dirección y control, etapas propias del proceso administrativo interno. 
      .col-xl-6.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2
        img(src="@/assets/curso/temas/tema2/img-3.jpg" data-aos="fade-left")
    
    p.mb-5(data-aos="fade-right") No obstante, más allá de las fases administrativas a las que debe estar sometido el proceso productivo, este tiene sus propias etapas, como se evidencia en el siguiente recurso educativo:



</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.text-decorativo-v4
  background-color: #DBECEC
  width: 100%
  overflow: hidden
  position: relative
  &::after
    content: ''
    position: absolute
    right: -25px
    top: -25px
    width: 50px
    height: 50px
    transform: rotate(45deg)
    background-color: #0B6868
  &::before
    content: ''
    position: absolute
    left: -25px
    bottom: -25px
    width: 50px
    height: 50px
    transform: rotate(45deg)
    background-color: #0B6868
</style>
