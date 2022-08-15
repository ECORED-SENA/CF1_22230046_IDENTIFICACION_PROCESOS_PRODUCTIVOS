<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.texto-blanco 3
      h1 Normatividad de producción sostenible

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.ps-xl-5.m-auto.mb-4.m-xl-auto(src="@/assets/curso/temas/tema3/img-1.png" data-aos="fade-right")
      .col-xl-7.ps-xl-4(data-aos="fade-left")
        p(data-aos="fade-right") Con el avance de las sociedades industriales, el medio ambiente y la disposición de recursos naturales se han visto impactadas negativamente. Por tal razón, se han generado normativas desde una mirada de producción sostenible que contribuyen a regular la producción en las organizaciones, a optimizar los recursos y que estos tengan una vida útil más amplia para reducir la contaminación e impactos ambientales. 
        p(data-aos="fade-right" style="background-color: #F8EAEA").p-3 De tal modo, la producción sostenible junto con la economía circular permiten que las empresas generen ahorros tanto en materia prima como en capital humano, así como optimizar los costos de producción y distribución; además, en la medida en que se generan nuevas necesidades dentro del mercado, la industria ha tomado subproductos que dejan las transformaciones de las materias primas lo que contribuye a generar nuevos ingresos y oportunidades de negocio. En la actualidad, las organizaciones no producen un solo objeto de consumo y, si es así, los desechos de la transformación son utilizados para suplir las necesidades internas o para comercializar en el mercado externo. 
        p(data-aos="fade-right") La estrategia va mucho más allá de producir para satisfacer las necesidades del cliente, también se impone una nueva forma de producción sostenible que aporte a la preservación del medio ambiente, a la organización y al ser humano mismo. Por tal razón, se establece la legislación ambiental que promueve el desarrollo sostenible y se regula la producción de bienes para contribuir con el medio ambiente. 
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-xl-9.pe-xl-3.order-2.order-lg-1(data-aos="fade-right")
        .bloque-texto-e.p-4.mb-3.d-flex.flex-wrap(data-aos="fade-left" style="background-color: #E1EFEF")
          .bloque-texto-e__texto.d-flex.flex-wrap
            .d-flex.flex-wrap.flex-xl-nowrap
              i.fas.fa-quote-left(style="color: #0E8282")
              p.mb-0.text-regular Así, son variadas las instituciones que se encargan del desarrollo de la legislación a nivel internacional para el manejo ambiental, entre las que se destaca la Organización de las Naciones Unidas - ONU, con su programa de las Naciones Unidas para el Medio Ambiente – Pnuma, cuyas principales funciones son promover la aplicación coherente de los aspectos ambientales del desarrollo sostenible y actuar como defensor autorizado del medio ambiente a nivel mundial
            p.ms-xl-5.ps-xl-4.fw-bold (Alfonso, 2015).
            i.fas.fa-quote-right.ms-auto(style="color: #0E8282")
        p Así mismo, el Programa de las Naciones Unidas para el Desarrollo - PNUD ha establecido los Objetivos de Desarrollo Sostenible, y dentro de la producción sostenible se destaca el Objetivo 12 “Garantizar modalidades de consumo y producción sostenibles” de la Agenda 2030. Este objetivo busca que el crecimiento económico tenga en cuenta el cuidado del medio ambiente en la promoción del desarrollo industrial, para que esta no ponga en riesgo la disposición de los recursos básicos y el desarrollo humano de las sociedades actuales y futuras. 
      img.mx-auto.col-lg-3.mb-4.mb-xl-0.order-1.order-lg-2(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 295px" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") En ese sentido, como se muestra en la tabla 2, Colombia ha establecido convenios para promover la preservación del medio ambiente:

    .titulo-sexto.color-primario
      .d-block
        h5 Anexo 2. Convenios para promover la preservación del medio ambiente

    .tabla-a.color-acento-botones.mb-5(data-aos="fade-left")
      table
        caption Nota. Adaptada de Suin-juriscol.gov.co. (2022).
        thead(style="background-color: #0E8282; border-color: transparent;")
          tr
            th.texto-blanco(style="border: none;") Convenio firmado 
            th.texto-blanco(style="border: none;") Objetivo
            th.texto-blanco(style="border: none;") Informacion web
        tbody
          tr(style="background-color: #F6F6F6;")
            td.fw-bold Convenio para el cambio climatico
            td Lograr la estabilidad de las concentraciones de gases efecto invemadero (GEI) en la atmósfera 
            td.py-4
              a(:href="obtenerLink('downloads/Convenio_Cambio_climatico.pdf')" target="_blank")
                img.mx-auto(src="@/assets/template/icono-pdf.svg" style="max-width: 36px; cursor: pointer;")
          tr
            td.fw-bold Convención de Viena (1985) y el Protocolo de Montreal (1987) República de Colombia (1992), los cuales protegen la  capa de ozono
            td Velar por la protección de la capa de ozono
            td.py-4.d-flex.justify-content-center
              a(href="downloads/Convenio_Viena_1985.pdf" target="_blank")
                img.mx-3(src="@/assets/template/icono-pdf.svg" style="max-width: 36px; cursor: pointer;")
              a(href="downloads/Protocolo_montreal_1989.pdf" target="_blank")
                img.mx-3(src="@/assets/template/icono-pdf.svg" style="max-width: 36px; cursor: pointer;")
              a(href="downloads/Colombia_1992_Capa_Ozono.pdf" target="_blank")
                img.mx-3(src="@/assets/template/icono-pdf.svg" style="max-width: 36px; cursor: pointer;")
              
          tr(style="background-color: #F6F6F6;")
            td.fw-bold Convención de Basilea Residuos peligrosos (1989)
            td Disminuir el volumen de losintercambios de residuos con el fin de protegerla salud humana y el medio ambiente, estableciendo un sistema de control de las exportaciones e importaciones de residuos peligrosos, así como su eliminación.
            td.py-4
              a(href="downloads/Convenio_Brasilea_1989_Residuos_Peligrosos.pdf" target="_blank")
                img.mx-auto(src="@/assets/template/icono-pdf.svg" style="max-width: 36px; cursor: pointer;")
          tr
            td.fw-bold Convención para la protección de la biodiversidad
            td Fue promulgada en la Conferencia de Rio de Janeiro, en el año de 1991; su objetivo principal es la conservación de la biodiversidad
            td.py-4
              a(href="downloads/Convenio_proteccion_biodiversidad.pdf" target="_blank")
                img.mx-auto(src="@/assets/template/icono-pdf.svg" style="max-width: 36px; cursor: pointer;")

    p.mb-5(data-aos="fade-right") Por otro lado, en lo que tiene que ver con la legislación nacional, la Ley 99 de 1993 crea el Ministerio de Ambiente y Desarrollo Rural, se ordena al sector público la gestión y conservación del medio ambiente y los recursos naturales renovables y se crea el Sistema Nacional Ambiental. En Colombia, la jerarquía institucional la encabeza el Ministerio de Ambiente y Desarrollo Rural, seguido de las corporaciones autónomas regionales llamadas CAR, y después la administración pública municipal. 
    p.mb-5(data-aos="fade-right") Los decretos y leyes para el desarrollo sostenible que más se destacan para la producción sostenible se encuentran detallados a continuación:

    .titulo-sexto.color-primario
      .d-block
        h5 Tabla 3  Decretos y leyes para el desarrollo sostenible

    .tabla-a.color-acento-botones.mb-5(data-aos="fade-left")
      table
        caption Nota. Adaptada de Suin-juriscol.gov.co. (2022)
        thead(style="background-color: #0E8282; border-color: transparent;")
          tr
            th.texto-blanco(style="border: none;") Convenio firmado 
            th.texto-blanco(style="border: none;") Objetivo
            th.texto-blanco(style="border: none;") Informacion web
        tbody
          tr(style="background-color: #F6F6F6;")
            td.fw-bold.text-center LEY 1964 2019
            td Por medio de la cual se promueve el uso de vehículos eléctricos en Colombia y se dictan otras disposiciones
            td.py-4
              a.d-flex.align-items-center.justify-content-center(href="https://www.suin-juriscol.gov.co/viewDocument.asp?id=30036636" target="_blank")
                img.me-3(src="@/assets/template/icono-link.svg" style="max-width: 36px; cursor: pointer;")
                p.mb-0.fw-bold(style="color: #006DF0") Enlace web.
          tr
            td.fw-bold.text-center LEY 1954 2019
            td Por medio de la cual se aprueba el “Acuerdo para el establecimiento del Instituto Global para el Crecimiento Verde”suscrito en Río de Janeiro, el 20 de junio de 2012
            td.py-4
              a.d-flex.align-items-center.justify-content-center(href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30036486" target="_blank")
                img.me-3(src="@/assets/template/icono-link.svg" style="max-width: 36px; cursor: pointer;")
                p.mb-0.fw-bold(style="color: #006DF0") Enlace web.
          tr(style="background-color: #F6F6F6;")
            td.fw-bold.text-center LEY 1950 2019
            td Por medio de la cual se aprueba el “Acuerdo sobre los Términos de la Adhesión de la República de Colombia a la Convención de la Organización para la Cooperación y el Desarrollo Económicos”, suscrito en París, el 30 de mayo de 2018 y la "Convención de la Organización para la Cooperación y el Desarrollo Económicos”, hecha en parís el 14 de diciembre de 1960.
            td.py-4
              a.d-flex.align-items-center.justify-content-center(href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30036085" target="_blank")
                img.me-3(src="@/assets/template/icono-link.svg" style="max-width: 36px; cursor: pointer;")
                p.mb-0.fw-bold(style="color: #006DF0") Enlace web.

    .w-100.d-flex.flex-wrap.align-items-center.mb-5.mb-lg-0(style="background-color: #E1EFEF;" data-aos="fade-left")
      img.m-auto.my-4.d-flex.d-xl-none(src="@/assets/curso/temas/tema3/img-4.jpg" style="max-width: 574px;" data-aos="fade-right")
      img.col-lg-5.d-none.d-xl-flex(src="@/assets/curso/temas/tema3/img-3.jpg" data-aos="fade-right")
      .col-xl-7
        p.p-4 En ese orden de ideas, la producción sostenible es sistemática, porque une las diferentes instituciones del sistema desde el ámbito político, social, cultural y económico; además, es plurisectorial al tomar en cuenta el sector salud, educativo y ambiental. En esa medida, la producción sostenible vela porque la transformación de bienes y servicios minimice el uso de los recursos naturales, los materiales tóxicos y las emisiones de efecto invernadero. Por tal razón, las organizaciones deben promover un proceso productivo integral, y que cada una de sus fases sean conducentes al enfoque preventivo y eficiente de los recursos naturales. 
                
</template>

<script>
export default {
  name: 'Tema3',
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
