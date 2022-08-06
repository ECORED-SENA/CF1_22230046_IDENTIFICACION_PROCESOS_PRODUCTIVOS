<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 1
      h1 La organización
    
    .d-flex.flex-wrap.mb-5
      img(src="@/assets/curso/temas/tema1/img-1.png" data-aos="fade-right" style="max-width: 505px").col-12.col-lg-5.m-auto.mb-4.m-lg-auto
      .col-lg-7.ps-lg-4(data-aos="fade-left")
        .text-decorativo-v1(data-aos="fade-right")
          p Al analizar el diario vivir, se puede establecer que las personas se desenvuelven en diferentes organizaciones, como la familia, el colegio, la universidad, las oficinas, los clubes, las iglesias, entre otros. De ahí que las organizaciones influyen en diferentes aspectos de la sociedad, bajo distintas formas y constituyendo diversos sistemas de valor al interior del grupo social al que pertenecen
        p En su gran mayoría los objetivos que se alcanzan dentro de una colectividad se logran porque hay conjuntos de personas enfocadas en un mismo propósito y aunando esfuerzos conjuntos. Por lo cual, ordenar y coordinar de manera racional los recursos que hacen parte de un grupo social son herramientas fundamentales para lograr la eficacia y es eso lo que se reconoce como organización.
        .text-decorativo-v2
          p Además, la organización requiere una planeación, porque esta permite establecer los objetivos a alcanzar, diseñando cómo hacerlo y bajo qué medidas para obtener lo que se espera, por lo cual, desempeña un papel importante previo a la organización.
    p.mb-4.fw-bold Ampliando el concepto

    .d-flex.flex-wrap.mx-auto.mb-5.pb-xl-5(data-aos="fade-right")
      .col-xl-8.order-2.order-xl-1.pe-xl-4
        .text-decorativo-v3.mb-3
          p.text-center.p-4.mb-0 Una organización se podría considerar como un sistema integrado por personas que se interrelacionan y actúan en función del todo

        .bloque-texto-e.p-4(data-aos="fade-left" style="background-color: #F8EAEA")
          .bloque-texto-e__texto.d-flex.flex-wrap
            .d-flex.flex-wrap.flex-xl-nowrap.mb-2
              i.fas.fa-quote-left
              p.text-regular La organización debe concebirse como un sistema abierto; es decir, que tiene múltiples relaciones con el ambiente, por lo cual, define la organización como la coordinación planificada de las actividades de un grupo de personas para procurar el logro de un objetivo o propósito explícito y común a través de la división del trabajo y funciones mediante una jerarquía de autoridad y responsabilidad, como se presenta en figura 1.
            p.ms-xl-5.fw-bold -Shein (2006, como citó Murguía, Ocegueda  y Castro, 2006), 
            i.fas.fa-quote-right.ms-auto
      img(src="@/assets/curso/temas/tema1/img-2_1.png" style="max-width: 404px").col-xl-4.m-auto.mb-4.mb-xl-0.order-1.order-xl-2
    .titulo-sexto.color-primario.ms-3(data-aos="fade-right")
      .d-block
        h5 Figura 1 Organización de un sistema integrado
    img(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-left")
    p.px-4.py-3(style="background-color: #F6F6F6;" data-aos="fade-left") Nota. Tomada de Murguía, Ocegueda y Castro (2006)

    Separador

    .titulo-segundo.color-primario
      h2#t_1_1 1.1 Tipos de actividad económica

    p.mb-5(data-aos="fade-right") La actividad económica es el proceso que involucra la elaboración e intercambio de bienes, servicios y productos para satisfacer las necesidades de las personas, por lo cual, involucra la generación del bien, servicio o producto, su distribución y el consumo; todo esto en conjunto para generar un beneficio económico. Es así que se puede dividir las actividades económicas en tres grupos:

    SlyderA.p-4.p-lg-4.slider-v1.mb-5(tipo="b" data-aos="fade-left" :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-bg-carousel.svg')})`}")
      .d-flex.flex-wrap.mb-4.px-2
        .col-md-6.col-lg-5.mt-md-5.pe-md-4.order-2.order-md-1
          h4.mb-4 Actividades económicas primarias 
          p Constan de la primera etapa del proceso de producción, obteniéndose las materias primas para la generación de bienes y servicios; por ejemplo, ganadería, pesca, agricultura, entre otras.
        img.col-md-6.col-lg-7.my-auto.mb-4.mb-md-0.order-1.order-md-2(src="@/assets/curso/temas/tema1/img-slider-1.png")
      
      .d-flex.flex-wrap.mb-4.px-2
        .col-md-6.col-lg-5.mt-md-5.pe-md-4.order-2.order-md-1
          h4.mb-4 Actividades económicas secundarias 
          p Son aquellas que se encargan de transformar las materias primas para la producción de bienes y servicios, por ejemplo, las actividades industriales como producción de calzado, textiles, alimentos, construcción, entre otras.
        img.col-md-6.col-lg-7.my-auto.mb-4.mb-md-0.order-1.order-md-2(src="@/assets/curso/temas/tema1/img-slider-2.png")
      
      .d-flex.flex-wrap.mb-4.px-2
        .col-md-6.col-lg-5.mt-md-5.pe-md-4.order-2.order-md-1
          h4.mb-4 Actividades económicas terciarias 
          p Se encargan de distribuir y comercializar productos y servicios, es decir brindan al consumidor final los bienes obtenidos de las actividades primarias y secundarias; por  ejemplo, los supermercados, agencias, educación.
        img.col-md-6.col-lg-7.my-auto.mb-4.mb-md-0.order-1.order-md-2(src="@/assets/curso/temas/tema1/img-slider-3.png")
    
    p(data-aos="fade-right") Es importante mencionar que cada lugar se enfoca en las actividades dependiendo de las materias primas o potencialidades que posea.

    Separador

    .titulo-segundo.color-primario
      h2#t_1_2 1.2 Áreas funcionales de la organización

    p.mb-5(data-aos="fade-right") El hecho de que una organización opere indica que existe una estructura organizacional en marcha con el fin de lograr los objetivos propuestos.  Según Fayol (citado en Molinari, Alfonso y Scaramellini, 2018), las operaciones que se realizan en las empresas se clasifican en seis grupos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.color-acento-botones.p-4.h-100(style="background-color: #CEE6E6")
        .row.justify-content-center.mb-3
          .col-10.mb-4
            img(src='@/assets/curso/temas/tema1/slide-1.svg')
        h4.mb-4.text-center Actividades técnicas 
        p.text-center Producción, transformación y fabricación
      
      .tarjeta.color-acento-botones.p-4.h-100(style="background-color: #0E8282")
        .row.justify-content-center.mb-3
          .col-7.mb-4
            img(src='@/assets/curso/temas/tema1/slide-2.svg')
        h4.mb-4.text-center(style="color: white") Actividades comerciales 
        p.text-center(style="color: white") Compras, ventas e intercambios.
      
      .tarjeta.color-acento-botones.p-4.h-100(style="background-color: #CEE6E6")
        .row.justify-content-center.mb-3
          .col-10.mb-4
            img(src='@/assets/curso/temas/tema1/slide-3.svg')
        h4.mb-4.text-center Actividades financieras 
        p.text-center Captación y administración de capitales.
      
      .tarjeta.color-acento-botones.p-4.h-100(style="background-color: #0E8282")
        .row.justify-content-center.mb-3
          .col-10.mb-4
            img(src='@/assets/curso/temas/tema1/slide-4.svg')
        h4.mb-4.text-center(style="color: white") Actividades de seguridad 
        p.text-center(style="color: white") Protección de los bienes y de las personas.
      
      .tarjeta.color-acento-botones.p-4.h-100(style="background-color: #CEE6E6")
        .row.justify-content-center.mb-3
          .col-10.mb-4
            img(src='@/assets/curso/temas/tema1/slide-5.svg')
        h4.mb-4.text-center Actividades contables 
        p.text-center Inventarios, balances y costos.
      
      .tarjeta.color-acento-botones.p-4.h-100(style="background-color: #0E8282")
        .row.justify-content-center.mb-3
          .col-10.mb-4
            img(src='@/assets/curso/temas/tema1/slide-6.svg')
        h4.mb-4.text-center(style="color: white") Actividades administrativas 
        p.text-center(style="color: white") Dirección, previsión, organización, mando, coordinación y control.

    p.mb-5(data-aos="fade-right") En toda organización se establecen funciones básicas y funciones de apoyo, las cuales son:
    .d-flex.flex-wrap.mb-5
      .col-xl-7.order-2.order-xl-1
        AcordionA.mb-5.acordeon-edit-v1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-left")
          .row.col-lg-11.mx-auto.align-items-center(titulo="Las funciones básicas")
            .me-auto.my-4.mb-md-0
              p.mb-5 Se relacionan con los temas organizacionales, sin importar el tipo y tamaño (personal y presupuesto) de la organización permitiendo lograr objetivos, por ejemplo, ventas, producción, prestaciones, entre otras.
          
          .row.col-lg-11.mx-auto.align-items-center(titulo="Las funciones de apoyo")
            .me-auto.my-4.mb-md-0
              p.mb-5 Son fundamentales y complementarias de las básicas, ya que apoyan el cumplimiento de la misión organizacional como clave para el suministro de recursos necesarios para el desarrollo de la actividad de la organización; por ejemplo, gestión de los recursos humano, financiero, organizacional y sistemático, y de administración.
      img(src="@/assets/curso/temas/tema1/img-3_1.png" style="max-width: 404px").col-xl-5.m-auto.mb-4.m-xl-auto.order-1.order-xl-2
    p.mb-5(data-aos="fade-right") Como se observa en la figura 2.las empresas cuentan, normalmente, con cuatro grandes áreas funcionales en las que se organizan y agrupan las actividades y personas según sus funciones; aunque de acuerdo con la capacidad y tamaño de las empresas estas áreas se pueden fusionar.

    .titulo-sexto.color-primario.mb-0
      .d-block
        h5 Figura 2 Ejemplo de áreas funcionales de una empresa – organigrama

    img.img-bg(src='@/assets/curso/temas/tema1/img-3.svg' data-aos="fade-left")

    Separador

    .titulo-segundo.color-primario
      h2#t_1_3 1.3  Grupos de interés (#[em stakeholders])

    .d-flex.flex-wrap.mb-5
      .col-xl-5.m-auto
        img(src='@/assets/curso/temas/tema1/img-4_1.png' style="max-width: 504px" data-aos="fade-right").mb-4.mx-auto
      .col-xl-7.ps-xl-4(data-aos="fade-left")
        p Es necesario entender que, en el desarrollo diario de las actividades y operaciones propias de la organización, existen decisiones y acciones que afectan a las personas vinculadas de forma directa o indirecta con la empresa, los cuales son conocidos como grupos de interés (#[em stakeholders]); entre ellos se destacan los accionistas, empleados, proveedores, clientes y sociedad en general. Sin embargo, es necesario resaltar que, la influencia y afectación no solo la ejerce la organización sobre los grupos de interés, sino que esta se puede dar en viceversa. Hay que mencionar, además, que los grupos de interés pueden influir en diferentes aspectos sobre la organización, como la toma de decisiones, la estrategia y direccionamiento, las operaciones e ingresos y la imagen corporativa de la empresa
        p(style="background-color: #F8EAEA; padding: .5rem") Entonces, una parte fundamental de las estrategias de las organizaciones es la relación con los grupos de interés, dado que es indispensable, mantener la armonía y adecuada relación con cada uno de estos actores económicos para lograr maximizar los beneficios de la actividad empresarial y alcanzar la sostenibilidad de la empresa. 
        p De esta manera, el primer paso es identificar y clasificar las personas o grupos que tiene relación o reciben algún impacto con el desarrollo de las actividades de acuerdo con el área o dependencia de la empresa y la dimensión al que pertenece, ya que no solo se debe analizar desde el punto  de vista económico, sino que se debe tener en cuenta la parte social y ambiental.

    p.mb-5(data-aos="fade-right") A continuación, se presenta la tabla 1 que resume la clasificación de los grupos de interés de acuerdo con las principales dimensiones (social, económica y ambiental). 

    .tarjeta.color-primario.p-3.p-xl-4.mb-5.col-xl-10.mx-auto(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.px-2.px-xl-0
          img(src="@/assets/curso/temas/tema1/descargar.svg")
        .col-md-10.col-xl-9
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0.text-small Tabla 1  Clasificación de los grupos de interés
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro.py-1(:href="obtenerLink('downloads/tabla-1.pdf')" target="_blank")
                span.pe-3 Descargar
                img(src="@/assets/curso/temas/tema1/icon-archivo.svg" style="max-width: 35px")

    .d-flex.flex-wrap.align-items-center.p-2.p-xl-0(style="background-color: #E1EFEF;" data-aos="fade-left")
      .col-xl-7.p-3.p-xl-4.h-100.order-2.order-xl-1
        p De esta forma, una vez identificados los grupos, es adecuado agrupar los #[em stakeholders] de acuerdo con la similitud para facilitar la selección y priorización de los grupos más relevantes para la organización, teniendo en cuenta factores como el tipo y nivel de influencia actual o futura que estos ejercen; sus expectativas, intereses, compromisos y necesidades, debido a que los diferentes #[em stakeholders] en torno a la organización tienen características, necesidades y objetivos propios. 
        p.mb-0 Más aún, la comunicación y el diálogo son el medio más efectivo, ya que son herramientas que permiten construir y mantener relaciones en las que prevalezca el compromiso mutuo que aporte al posicionamiento socialmente responsable y a la construcción de una sociedad más sostenible
      .col-xl-5.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2
        img(src="@/assets/curso/temas/tema1/img-5-1.png").d-none.d-xl-flex
        img(src="@/assets/curso/temas/tema1/img-5.jpg").d-flex.d-xl-none

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.text-decorativo-v1
  position: relative
  p
    position: relative
    z-index: 1
    padding: .5rem
  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 349px
    height: 50px
    background-color: #F8EAEA
.text-decorativo-v2
  position: relative
  p
    position: relative
    z-index: 1
  &::after
    content: ''
    position: absolute
    bottom: 0
    right: 0
    width: 505px
    height: 56px
    background-color: #E1EFEF
.text-decorativo-v3
  background-color: #E9E9EC
  width: 100%
  overflow: hidden
  position: relative
  margin-bottom: 5rem
.edit-cajon-v1.bloque-texto-f.color-secundario:before
  background-color: #FCE5E4 !important
.slider-v1
  background-image: url('/img/img-bg-carousel.svg')
  background-repeat: no-repeat
  background-position: 50%
  border-radius: 30px
  .slyder-a__btn--sigt.hide, .slyder-a__btn--atrs.hide
    opacity: 0
  .slyder-a__btn--sigt, .slyder-a__btn--atrs
    background-color: #FFD947
    opacity: 1
.slyder-f
  .slyder-f__main
    .horizontal-scroll
      align-items: stretch !important
.acordeon-edit-v1
  .tarjeta--azul
    transition: all .5s linear
    background-color: #AAD3D3
  .acordion__activo
    background-color: #E1EFEF
    .acordion__header
      margin-bottom: 0 !important
</style>
