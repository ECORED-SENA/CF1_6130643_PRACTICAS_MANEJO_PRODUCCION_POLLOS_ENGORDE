export default {
  global: {
    Name: 'Manejo técnico y productivo del pollo de engorde',
    Description:
      'La avicultura es un sector competitivo, pero muchos pequeños y medianos productores necesitan mejorar sus procesos y tecnificación. El programa de formación busca fortalecer sus capacidades técnicas, optimizar la producción y aumentar la rentabilidad mediante prácticas eficientes en el manejo de pollos de engorde',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos generales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas de producción en pollo de engorde',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procesos productivos en pollo de engorde',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Líneas comerciales para carne en Colombia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Bienestar animal, etología en pollos de engorde',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normatividad y seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos de protección personal (EPP)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Buenas prácticas avícolas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Principios de bioseguridad avícola',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Manejo ambiental',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Protocolos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Contingencias',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación y organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cronograma de actividades: clase y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Medidas de superficie, longitud, peso y volumen',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Densidad de aves y equipos: concepto, cálculos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Infraestructura y condiciones de la granja',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Alojamiento: tipos y características',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Condiciones ambientales: parámetros, control ambiental',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Calefacción: concepto, sistemas, operación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Iluminación: concepto, sistemas, operación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Camas: tipos y manejo',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo productivo del pollo de engorde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Agua: importancia y manejo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Alimento: importancia y tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Manejo de concentrado y factores que afectan el consumo',
            hash: 't_5_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Avicultura',
      significado:
        'Actividad productiva dedicada a la cría y explotación de aves para obtener carne, huevos u otros productos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas para prevenir el ingreso y propagación de enfermedades en sistemas avícolas.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Condición que garantiza salud, confort y comportamiento adecuado de las aves durante su producción.',
    },
    {
      termino: 'Conversión alimenticia',
      significado:
        'Relación entre la cantidad de alimento consumido y el peso ganado por el ave.',
    },
    {
      termino: 'Densidad avícola',
      significado: 'Número de aves por unidad de área en el galpón.',
    },
    {
      termino: 'Etología',
      significado:
        'Estudio del comportamiento animal aplicado al manejo productivo de las aves.',
    },
    {
      termino: 'Galpón',
      significado:
        'Estructura destinada al alojamiento y manejo de pollos de engorde.',
    },
    {
      termino: 'Manejo ambiental',
      significado:
        'Prácticas orientadas a reducir impactos ambientales en la producción avícola.',
    },
    {
      termino: 'Mortalidad',
      significado: 'Porcentaje de aves que mueren durante el ciclo productivo.',
    },
    {
      termino: 'Parámetros productivos',
      significado:
        'Indicadores técnicos que permiten evaluar el rendimiento del sistema avícola.',
    },
    {
      termino: 'Pollos de engorde',
      significado:
        'Aves criadas específicamente para la producción de carne en ciclos cortos.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'Conjunto de etapas desde la preparación del galpón hasta la comercialización de las aves.',
    },
    {
      termino: 'Sanidad avícola',
      significado:
        'Acciones destinadas a prevenir, controlar y erradicar enfermedades en las aves.',
    },
    {
      termino: 'Sistema intensivo',
      significado:
        'Modelo de producción con alta densidad y control técnico de variables ambientales.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir el historial de las aves desde su origen hasta su destino final.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2009). Resolución 3654 de 2009. Por la cual se establece el programa de control y erradicación de la enfermedad de Newcastle en el territorio nacional.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2013). Resolución 3642 de 2013. Por la cual se establecen los requisitos para el registro de predios pecuarios y otras disposiciones sanitarias.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2014). Resolución 3652 de 2014. Por la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de engorde y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 002536 de 2020. Por la cual se establecen disposiciones sobre bienestar animal en la producción pecuaria.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2021). Resolución 90464 de 2021. Por la cual se establecen disposiciones para el registro sanitario de predio pecuario (RSPP).',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2025). Plan nacional subsectorial de vigilancia y control de residuos de medicamentos veterinarios en pollo de engorde.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2007). Decreto 1500 de 2007. Por el cual se establece el sistema oficial de inspección, vigilancia y control de la carne y productos cárnicos comestibles.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 242 de 2013. Por la cual se establecen los requisitos sanitarios para el funcionamiento de plantas de beneficio de aves.',
      link: '',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia (FENAVI). (2024). Cartilla de gestión y optimización de unidades productivas de pollo de engorde.',
      link: '',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia (FENAVI). (s.f.). Programa pollo y normativa avícola en Colombia.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (WOAH). (2024). Código sanitario para los animales terrestres: Bienestar animal en aves de corral.',
      link: '',
    },
    {
      referencia:
        'National Research Council (NRC). (1994). Nutrient requirements of poultry (9th rev. ed.). National Academy Press.',
      link: '',
    },
    {
      referencia: 'Solla S.A. (s.f.). Manual de manejo para pollo de engorde.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
