<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos generales
    p(data-aos="fade-left") En este capítulo se abordarán los sistemas de producción, los procesos productivos, las líneas comerciales para carne en Colombia, así como el bienestar animal y la etología en pollos de engorde.
    .row.bg-color-1
      .col-12
        .p-5
          Separador
          //- Inicio Tema1.1
          .row.mt-5
              #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.1 Sistemas de producción en pollo de engorde
          p(data-aos="fade-left") Acto seguido, se procederá a estudiar el concepto general:
          //- Inicio Tarjetas
          .row.justify-content-center.g-0(data-aos="fade-right")
            .col-12.col-md-6.d-flex
              .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
                .row.mb-3
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/tarjeta01_1.svg', alt='' style="width:100px").m-auto
                h4.text-white Concepto
                p.text-white En Colombia, los sistemas de producción de pollo de engorde están orientados a la producción intensiva de carne en ciclos cortos (35–45 días), integrando genética, nutrición, manejo ambiental y bioseguridad, con el fin de lograr alta eficiencia productiva, inocuidad y sostenibilidad.
            .col-12.col-md-6.d-flex
              .tarjeta.p-5.h-100.bg-color-7(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
                .row.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/tarjeta01_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.mb-4 Requisitos
                p Estos sistemas deben cumplir con:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Bioseguridad certificada (Resolución 3652 de 2014 – ICA). 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Bienestar animal (Resolución 253 de 2020). 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Condiciones sanitarias controladas.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Trazabilidad del lote (desde pollito hasta sacrificio).                  
          //- Fin Tarjetas
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Tipos de sistemas en Colombia
    //- Título con imagen
    p(data-aos="fade-left") Los sistemas más representativos son:
    //- Inicio Accordion
    .bg--img_03.mt-5.acordeon-tipo-2(data-aos="fade-right")
      .row.justify-content-center        
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Sistema intensivo (predominante en Colombia)")
              .col-12
                p.mb-4 Es el sistema más utilizado en integraciones avícolas comerciales.                
                p #[b Características:]
                .row.mb-4.justify-content-center.p-5
                    .col-6.col-md-3.text-center
                        img.img-fluid(src='@/assets/curso/tema1/img1acordion.svg')
                    .col-6.col-md-3.text-center
                        img.img-fluid(src='@/assets/curso/tema1/img2acordion.svg')                    
                    .col-6.col-md-3.text-center
                        img.img-fluid(src='@/assets/curso/tema1/img3acordion.svg')                    
                    .col-6.col-md-3.text-center
                        img.img-fluid(src='@/assets/curso/tema1/img4acordion.svg')
                .row
                  .col-md-6
                    p #[b Ventajas:]
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Alta productividad.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Mejor conversión alimenticia (entre 1.5 kg y 1.8 kg).
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Mayor control sanitario.                  
                  .col-md-6
                    p #[b Desventajas:]
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Alta inversión.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Dependencia de energía y tecnología.
            .row(titulo="Sistema semi-intensivo (uso limitado)")
              .col-12
                p.mb-4 Se usa en pequeñas producciones o modelos alternativos.
                .row
                  .col-md-6
                    p #[b Características:]
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Galpones con acceso a patios.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Menor densidad (entre 6 y 10 aves/m²). 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Mayor libertad de movimiento.                   
                  .col-md-6
                    p #[b Uso en Colombia:]
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Producción campesina. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Mercados diferenciados (pollo criollo o campesino).
            .row(titulo="Sistema extensivo (tradicional)")
              .col-12
                p.mb-4 Poco utilizado en producción comercial.
                .row
                  .col-md-6
                    p #[b Características:]
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Aves en libertad. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Alimentación no controlada.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Bajo rendimiento.
    //- Fin Accordion
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Características técnicas en engorde
    //- Título con imagen
    .row.bg-color-2
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Conversión alimenticia
                        p.card-text.text-center
                        | Entre 1.5 kg. y 1.9 kg. de alimento/kg. de peso vivo.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_2.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Ganancia diaria de peso
                        p.card-text.text-center
                        | Entre 50 g/día y 65 g/día.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_3.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Peso final
                        p.card-text.text-center
                        | Entre 2.0 kg. y 3.0 kg.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_4.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Mortalidad aceptable
                        p.card-text.text-center
                        | Entre 3 % y 5 %.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Uniformidad
                        p.card-text.text-center
                        | Mayor o igual (≥) que el 80 % del lote.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_6.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Densidad
                        p.card-text.text-center
                        | Depende del clima (más baja en zonas cálidas como el Quindío).
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema1/img1.png', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Procesos productivos en pollo de engorde
    p(data-aos="fade-left") El proceso productivo del pollo de engorde en Colombia es un sistema técnico controlado que inicia con el alistamiento del galpón y finaliza con el envío a planta de beneficio, garantizando sanidad, bienestar animal y eficiencia productiva. Sus etapas son:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 1
                  |
                  h4 Alistamiento (clave en bioseguridad)
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Lavado, desinfección y descanso sanitario (entre 10 y 15 días). 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Instalación de camas (viruta de madera o cascarilla de arroz).
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Instalación de pediluvios. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Revisión de equipos.
              .row.mt-5.bg-color-4.p-2
                h4 Exigencia normativa:
                p Cumplimiento de Resolución 3652 de 2014.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 2
                  |
                  h4 Recepción de pollitos (día 1)
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Procedentes de incubadoras certificadas.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Peso promedio: entre 38 g y 45 g.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Temperatura inicial: entre 32 °C y 34 °C. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Hidratación inmediata.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 3
                  |
                  h4 Levante (de 0 a 21 días)
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Desarrollo del sistema digestivo e inmunológico. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Manejo estricto de temperatura y ventilación. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Programas de vacunación. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 4
                  |
                  h4 Engorde (de 21 a 42 días)
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Máximo crecimiento muscular. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Ajuste de densidad. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Control de amoníaco y ventilación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 5
                  |
                  h4 Control sanitario                
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p Registro diario de:
                      ul.mt-3
                        li - Mortalidad.
                        li - Consumo de alimento.
                        li - Consumo de agua.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Aplicación de vacunas.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Monitoreo de enfermedades (<i>Newcastle, Gumboro</i>)
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 6
                  |
                  h4 Captura
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Realizada en horas frescas (noche o madrugada).
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Evitar estrés y lesiones. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Personal capacitado (bienestar animal). 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span 7
                  |
                  h4 Transporte
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Guacales adecuados.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Ventilación adecuada.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Cumplimiento de normativa de bienestar.
    //- Fin Slideshow
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Indicadores productivos en Colombia
    //- Título con imagen
    p(data-aos="fade-left") En las siguientes líneas se informará cuáles son los indicadores de referencia en Colombia:
    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hiddenp(data-aos="fade-right")
      .row.g-0.align-items-stretch.justify-content-center        
        .col-12.col-lg-5.bg-color-7.p-4.p-lg-5.pe-lg-0
          h4 Indicadores productivos
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Conversión alimenticia: entre 1.6 kg y 1.8 kg. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Mortalidad: menor (<) que el 5 %. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Peso final: entre 2.2 kg y 2.8 kg. 
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Índice de eficiencia europeo (IEE). 
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema1/img2.png', style="width: 100%; object-fit: cover; object-position: left center;")
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.bg-color-9    
        //- Inicio Tabla
        .row.justify-content-center.p-4
          .col-md-10
            h4 Fase productiva
            .titulo-sexto.color-acento-contenido.mb-3              
              h5 Tabla 1.
              span  Fase productiva
            .tabla-a
              table
                thead
                  tr
                    th(style="width: 40%") Fase productiva
                    th(style="width: 60%") Pollos de engorde
                tbody
                  tr
                    td Reproductiva
                    td Pollitos de un día provenientes de incubadoras comerciales (Ross, Cobb, Hubbard).
                  tr
                    td Crecimiento / levante
                    td Entre 0 y 21 días: fase crítica, control de temperatura (de 32 °C a 28 °C).
                  tr
                    td Engorde / postura
                    td Entre 22 y 42 días: ganancia rápida de peso (2,2 kg Y 2,5 kg).
                  tr
                    td Comercialización
                    td A los 35 o a los 45 días, con un peso entre 2,3 kg y 2,5 kg.
                  tr
                    td Indicadores
                    td Conversión alimenticia: entre 1,6 kg Y 1,8 kg; con una mortalidad menor (<) que el 5 %.
                  tr
                    td Recomendaciones
                    td Control ambiental, densidad adecuada, bioseguridad.
        //- FinTabla
    Separador
    //- Inicio Tema1.2
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Líneas comerciales para carne en Colombia 
    p(data-aos="fade-left") Con el fin de conocer las líneas genéticas importadas utilizadas en Colombia por su alta eficiencia productiva, se invita a observar el siguiente video.
    //- Inicio Video
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    Separador
    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Bienestar animal y etología en pollos de engorde
    p(data-aos="fade-left") En este apartado se abordará el concepto de bienestar animal y la normatividad que la rige.
    //- Inicio Tarjetas
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-12.col-md-6.d-flex
        .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/tarjeta03_1.svg', alt='' style="width:100px").m-auto
          h4.text-white Concepto
          p.text-white El bienestar animal en pollos de engorde se define como el estado físico, sanitario y comportamental en el que las aves se desarrollan bajo condiciones que les permiten crecer sin dolor, estrés ni sufrimiento innecesario, garantizando su salud, confort y adecuado desempeño productivo.
      .col-12.col-md-6.d-flex
        .tarjeta.p-5.h-100.bg-color-10(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema1/tarjeta03_2.svg', alt='' style="width:100px").m-auto
          h4.card-title.mb-4 Normatividad
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 <b>Resolución 253 de 2020</b>, que establece condiciones de bienestar animal.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 <b>Resolución 3652 de 2014</b>, que regula la bioseguridad en granjas avícolas. 
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 <b>Resolución 00016409</b>, que está relacionada con el control sanitario y la vigilancia epidemiológica.
    //- Fin Tarjetas
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Evaluación del bienestar en pollos de engorde
    //- Título con imagen
    p(data-aos="fade-left") Continuando con el análisis del bienestar animal, es preciso mencionar que este se evalúa mediante indicadores técnicos agrupados en tres enfoques:
    .row.bg-color-1
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row(data-aos="fade-right")
            .col-sm-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-7
                .row.justify-content-center.mb-3.align-items-center
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta04_1.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 A. Medidas basadas en el animal
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Condición corporal. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Uniformidad del lote. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Presencia de lesiones (patas, pechuga). 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Estado del plumaje. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Comportamiento (jadeo, actividad). 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Mortalidad.
            .col-sm-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-7
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta04_2.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 B. Medidas basadas en los recursos
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Temperatura del galpón. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Ventilación. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Calidad de la cama. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Espacio disponible (densidad). 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Acceso a agua y alimento. 
            .col-sm-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-4.rounded-5.h-100.bg-color-7
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/tarjeta04_3.svg', alt='' style="width:100px").m-auto
                h4.card-title.text-center.mb-4 C. Medidas basadas en la gestión
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Registros productivos. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Protocolos de manejo. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Plan de bioseguridad. 
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Capacitación del personal. 
          //- Fin Tarjetas
          //- Título con imagen
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Aspectos clave del bienestar animal en la producción de pollos de engorde
          //- Título con imagen
          p(data-aos="fade-left") En esta sección se abordan los principales aspectos del bienestar animal en Colombia, incluyendo factores críticos, indicadores en granja, signos de alteraciones, etología aplicada, principios de bienestar, las cinco libertades y los cinco dominios, así como la sintiencia, la normativa vigente y su relación con la productividad.
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img3.png").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Factores críticos de bienestar en Colombia")
              p.mb-4 En sistemas intensivos de engorde, los principales factores que afectan el bienestar son:              
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Estrés térmico: causado por altas temperaturas, evidenciado por jadeo. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Ventilación deficiente: acumulación de gases como amoníaco. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Humedad de la cama: genera enfermedades y lesiones. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Alta densidad: incrementa competencia, estrés y mortalidad. 
          .row(titulo="Indicadores de bienestar en granja")
              p.mb-4 Los principales indicadores observables en campo son:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Consumo normal de alimento y agua. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Distribución uniforme de las aves en el galpón. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Crecimiento homogéneo.                
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Baja mortalidad: menor o igual (≤) que el 5 %. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Ausencia de cojeras o lesiones.
          .row(titulo="Signos de problemas de bienestar")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Jadeo (estrés por calor). 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Aglomeración de aves. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Disminución en el consumo. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Lesiones en patas o pechuga. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Letargo o debilidad. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Incremento en la mortalidad.
          .row(titulo="Etología aplicada a pollos de engorde")
              p.mb-4 La etología estudia el comportamiento de las aves y permite mejorar el manejo productivo.
              h4 Aplicaciones prácticas:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Identificación de estrés térmico. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Evaluación de condiciones ambientales. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Detección temprana de enfermedades. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Ajuste de densidad y ventilación. 
              h4.mt-3 Interpretación del comportamiento:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Aves dispersas → ambiente adecuado. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Aves agrupadas → frío o corrientes de aire. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Jadeo → exceso de temperatura.
          .row(titulo="Principios del bienestar animal aplicados al engorde")
              h4.mt-3 Integridad física y salud:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Prevención de enfermedades. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Cumplimiento de bioseguridad (Res. 3652 de 2014). 
              h4.mt-3 Estado fisiológico adecuado:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Alimentación balanceada. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Agua limpia y disponible. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Control ambiental. 
              h4.mt-3 Expresión de comportamiento:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Espacio suficiente. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Acceso a recursos. 
              h4.mt-3 Control del estrés:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Manejo adecuado del personal. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Evitar prácticas bruscas.                 
              h4.mt-3 Evaluación continua:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Monitoreo diario.
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Registros productivos.                
    //- Fin Accordion
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center      
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Las Cinco Libertades")              
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Libre de hambre y sed. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Libre de incomodidad. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Libre de dolor y enfermedad. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Libre de miedo y estrés. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Libre para expresar comportamiento.           
          .row(titulo="Los Cinco Dominios")              
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Nutrición. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Ambiente. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Salud. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Comportamiento. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Estado mental.
          .row(titulo="Sintiencia en pollos de engorde")
              p.mb-4 Los pollos son seres sintientes, capaces de experimentar dolor, estrés y miedo. Esto implica la obligación de garantizar un manejo humanitario durante todo el ciclo productivo, desde la recepción hasta el transporte.             
          .row(titulo="Aplicación normativa en Colombia")
              p Resolución 3652 de 2014:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Establece medidas de bioseguridad. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Control de ingreso y desinfección. 
              p.mt-3 Resolución 253 de 2020:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Regula el bienestar animal. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Exige manejo humanitario. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Control de densidad y condiciones de alojamiento. 
              p.mt-3 Resolución 00016409:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Control sanitario. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Vigilancia epidemiológica. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Registro de eventos productivos. 
          .row(titulo="Relación bienestar – productividad")
              p.mb-4 Un adecuado bienestar animal permite:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Mayor ganancia de peso.  
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Mejor conversión alimenticia.  
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Menor mortalidad.  
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  span.ms-2 Mejor calidad de la carne.  
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/img4.png").img400.m-auto     
    //- Fin Accordion
    p(data-aos="fade-left") El bienestar animal en pollos de engorde constituye un eje fundamental en la producción avícola en Colombia, al integrar aspectos técnicos, sanitarios y normativos. Su correcta aplicación garantiza sistemas productivos eficientes, sostenibles y alineados con la legislación vigente.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
