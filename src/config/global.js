export default {
  global: {
    componenteFormativo: 'La organización y los procesos productivos',
    descripcionCurso:
      'En este componente formativo se abordan temas que permitirán entender, de forma general, la estructura y funcionamiento de las organizaciones, además la normativa que las rige para contribuir a regular la producción desde la óptica de la sostenibilidad',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de actividad económica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Áreas funcionales de la organización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Grupos de interés',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Etapas del proceso productivo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de los procesos productivos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ciclos de producción',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Gestión de los procesos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad de producción sostenible',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Organización',
      referencia:
        'Peralzate. (2017). #[em ¿Qué es una organización?] [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/V_NE3DyOluo',
    },
    {
      tema: 'Proceso productivo',
      referencia:
        'Michael Vásquez Marketing. (2018). #[em Qué es un proceso productivo, diferencias entre bienes y servicios.] [Video]. YouTube.',
      tipo:
        'Que es un proceso productivo, diferencias entre bienes y servicios.',
      link: 'https://youtu.be/XaB4wi79iFo',
    },
    {
      tema: 'Procesos productivos',
      referencia:
        'Arcusa, I., Gil, F., y Suñe A. (2004). #[em Manual práctico de diseño de sistemas productivos. Ediciones] Díaz de Santos, S.A.',
      tipo:
        'Capítulo 3 del libro Manual práctico de diseño de sistemas productivos',
      link:
        'https://books.google.com.co/books?id=oP0THCPJ2-gC&lpg=PR2&dq=ciclo%20productivo&hl=es&pg=PR2#v=onepage&q=ciclo%20productivo&f=false',
    },
    {
      tema: 'Gestión de los procesos',
      referencia:
        'Pérez, F. de V., J. (2012). #[em Gestión por procesos.] ESIC Editorial.',
      tipo: 'Capítulo 4 del libro Gestión por procesos',
      link: 'https://youtu.be/V_NE3DyOluo',
    },
    {
      tema: 'Normatividad de producción sostenible',
      referencia:
        'Unesco Etxea - Centro Unesco del País Vasco (2018). ODS 12. #[em Producción y consumo responsables.] [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y2n7xFQWOjo',
    },
  ],
  glosario: [
    {
      termino: 'Actividad económica',
      significado:
        'ordenación por cuenta propia de los medios de producción y de recursos humanos, o de uno de ambos, con la finalidad de intervenir en la producción o distribución de bienes o servicios, comprendiendo tanto las actividades profesionales como empresariales.',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad que mediante la organización de elementos humanos, materiales, técnicos y financieros proporciona bienes o servicios a cambio de un precio que le permite la reposición de los recursos empleados y la consecución de unos objetivos determinados.',
    },
    {
      termino: 'Organización',
      significado:
        'compañía, sociedad, firma, empresa, autoridad o institución, o parte o combinación de ellas, tenga o no personalidad jurídica, y sea pública o privada, que tiene sus propias funciones y medios de decisión y gestión. <br><br>Conjunto de personas organizadas con un objetivo específico. Están constituidas por un grupo de personas que interactúan entre sí, deben desarrollar un conjunto de acciones, utilizar habilidades, enfoques y técnicas que posibiliten el logro de determinados resultados. Cuando se mencionan estas acciones generalmente se les refiere como gestión.',
    },
    {
      termino: 'Proceso',
      significado:
        'mezcla de transformación de un conjunto específico de insumos en uno de rendimientos. Un proceso se hace para producir un artículo, concluir una tarea o prestar un servicio. También puede definirse como un conjunto de actividades.',
    },
    {
      termino: 'Productividad',
      significado:
        'relación entre la cantidad de bienes y servicios producidos (salidas) y la cantidad de fuerza de trabajo, capital, tierra, energía y otros recursos que intervinieron en la producción (entradas), diseñado para producir un resultado específico para un cliente / usuario o mercado particular.',
    },
    {
      termino: 'Producto',
      significado:
        'cualquier cosa que puede ser ofertada a un mercado con el objetivo de ganar su atención, su adquisición o su consumo y que pueda satisfacer un deseo o una necesidad. Incluye objetos, servicios, personas, lugares organizacionales e ideas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Suin-juriscol.gov.co. (2022). Normativa para el desarrollo sostenible. [en línea]',
      link: 'https://www.suin-juriscol.gov.co/legislacion/sostenible.html',
    },
    {
      referencia:
        'Alfonso, Á., N. Z. H. (2015). #[em Principales normas ambientales colombianas.] EAN.',
      link: '',
    },
    {
      referencia:
        'Alonso, M., E., Ocegueda, M., V., y Castro, E. (2006). #[em Teoría de las organizaciones.] Umbral Editorial. S.A. de C.V.',
      link: '',
    },
    {
      referencia:
        'Amorrazarain, M. (1999). #[em La gestión por procesos.] Editorial Mondragón Corporación Corporativa.',
      link: '',
    },
    {
      referencia:
        'Carro, R., y González, G., D. A. (2012). #[em El sistema de producción y operaciones.] Universidad Nacional del Mar del Plata.',
      link: '',
    },
    {
      referencia:
        'Castaño, Q., C. A., Díaz, C., N., & Lozano, C., J. (2013). #[em Manual para la gestión del relacionamiento con los grupos de interés.] EAN.',
      link: '',
    },
    {
      referencia:
        'Cetys Universidad. (2021). #[em ¿Qué es un proceso de producción empresarial?] Cetys -  Educación Continua.',
      link: '',
    },
    {
      referencia:
        'Molinari, G., Alfonso, A., y Scaramellini, N. (2018). #[em Las áreas funcionales en las organizaciones: particularidades en las organizaciones turísticas.] Universidad Nacional de la Plata.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Diana Julieth Núñez Ortegón',
        cargo: 'Experta Temática',
        centro: 'Regional Tolima, Centro de Comercio y Servicios',
      },
      {
        nombre: 'Yisela Andrea Vidales Vásquez',
        cargo: 'Experta Temática',
        centro: 'Regional Tolima, Centro de Comercio y Servicios',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
