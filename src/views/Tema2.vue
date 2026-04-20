<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Normatividad y seguridad
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")      
            .col-lg-8.mb-0.d-flex.align-items-center.bg-color-5.p-4
              p.mb-0 La normatividad y seguridad en la avicultura de engorde integran el cumplimiento de disposiciones sanitarias, laborales y ambientales que garantizan la producción eficiente, la protección del trabajador y la sanidad del plantel avícola. Estas medidas están reguladas principalmente por el Instituto Colombiano Agropecuario (ICA) y otras entidades del sector agropecuario.
            .col-lg-4.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/tema2/img1.png", style="width: 100%").mx-auto
          Separador
          //- Inicio Tema2.1
          .row.mt-5
              #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.1 Seguridad y salud en el trabajo
          p(data-aos="fade-left") En el siguiente pódcast se conocerá el concepto de seguridad y salud en el trabajo, importancia, protocolos, riesgos labores en avicultura y normativa. 
          //- Inicio Podcast
          .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2
            .row.align-items-stretch
              .col-lg-7.mb-3
                .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
                  .row.align-items-center
                    .col-md-5.text-center.mb-4.mb-md-0
                      img(src="@/assets/curso/fondos/podcast.svg" style="max-width: 200px;").img-fluid
                    .col-md-7.ps-md-4
                      h2.mb-3.fw-bold(style="color:#fff") Pódcast
                      .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                        h5.mb-3.fw-bold Seguridad y salud en el trabajo: clave para la producción avícola.
                        TarjetaAudio.color-primario(
                          texto="" 
                          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
              .col-lg-5
                figure.mb-0
                  img(src='@/assets/curso/tema2/img2.png')
          //- Fin Podcast
          Separador
          //- Inicio Tema2.2
          .row.mt-5
              #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.2 Elementos de protección personal (EPP)
          p(data-aos="fade-left") El uso de EPP es obligatorio en granjas avícolas para prevenir riesgos laborales y evitar la contaminación cruzada. 
          p(data-aos="fade-right") Dando continuidad a lo anterior, se presentan los tipos, usos, almacenamiento y dotación del personal.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Tipos
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Overol o ropa de trabajo exclusiva. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Botas plásticas. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Guantes. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Tapabocas o mascarilla. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Gorro o cofia.              
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Usos
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Evitar el ingreso de agentes patógenos. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Proteger al trabajador de contaminantes. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Reducir riesgos sanitarios.                  
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0              
              h4 Almacenamiento
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Mantener en áreas limpias y secas. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Separados de ropa de uso externo. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Guardados en bolsas o casilleros exclusivos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Dotación personal
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Debe ser individual. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Uso obligatorio dentro de la granja. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Cambio frecuente según nivel de contaminación. 
    //- Fin Slideshow
    Separador
    //- Inicio Tema2.3
    .row.mt-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Buenas prácticas avícolas
    p(data-aos="fade-left") En esta sección se presentarán la normatividad, resoluciones y protocolos que le aplican:
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Tipos de sistemas en Colombia
    //- Título con imagen    
    //- Inicio Tabla
    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span  Normatividad
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(style="width: 20%") Norma
                th(style="width: 20%") Entidad
                th(style="width: 60%") Aplicación específica
            tbody
              tr
                td Decreto 1500 de 2007
                td Min. Salud / Invima
                td Crea el Sistema Oficial de Inspección, Vigilancia y Control de la carne, productos cárnicos y lácteos. Aplica a cunicultura, avicultura, caprinocultura y ovinocultura. Regula sacrificio, procesamiento y control sanitario.
              tr
                td Ley 84 de 1989
                td Congreso de la República
                td Establece el Estatuto Nacional de Protección Animal, que prohíbe actos de crueldad o maltrato hacia los animales domésticos y de granja.
              tr
                td Ley 1774 de 2016
                td Congreso de la República
                td Reconoce a los animales como seres sintientes, establece sanciones por maltrato y crea el marco general de protección y bienestar animal.
              tr
                td Ley 1955 de 2019 (Art. 247)
                td Congreso de la República
                td Promueve y fomenta la certificación en Buenas Prácticas Pecuarias (BPP) dentro de los sistemas de producción pecuaria en Colombia.
              tr
                td Resolución ICA 136 de 2020
                td ICA
                td Reglamenta el bienestar animal durante el transporte de especies pecuarias (incluye cuyes, conejos, aves, codornices, cabras y ovejas). Establece condiciones de manejo, densidad, tiempo y bienestar durante la movilización.
              tr
                td Resolución ICA 240 de 2013
                td ICA
                td Define la guía sanitaria de movilización y control sanitario para cabras y ovinos, con énfasis en bioseguridad, identificación y trazabilidad.
              tr
                td Resolución ICA 3651 y 3652 de 2014
                td ICA
                td Regula los programas de bioseguridad en granjas avícolas de engorde y postura. Incluye control sanitario, manejo ambiental y prevención de enfermedades.
              tr
                td Resolución ICA 067449 de 2020
                td ICA
                td Establece los requisitos para la certificación en Buenas Prácticas Pecuarias (BPP) aplicables a todas las especies menores (cuyes, conejos, aves, codornices, cabras y ovejas). Define estándares de producción limpia, bienestar animal y trazabilidad.
              tr
                td Resolución ICA 68167 de 2020
                td ICA
                td Define las condiciones sanitarias y de bioseguridad para la producción de especies menores, incluyendo manejo de residuos, trazabilidad, sanidad y bienestar animal.
    //- FinTabla
    .row.bg-color-1
      .col-12
        .p-5
          //- Título con imagen
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/fondos/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Protocolos (Bioseguridad)
          //- Título con imagen
          p(data-aos="fade-left") Sistema de medidas estructuradas para impedir la introducción y propagación de agentes patógenos en aves, instalaciones, equipos y productos.
          //- Inicio Tarjetas
          .row.justify-content-center.g-0(data-aos="fade-right")
            .col-lg-6.col-md-6
              .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
                .row.mb-3
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema1/tarjeta01_1.svg', alt='' style="width:100px").m-auto
                h4.text-white Incluye                
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0.text-white Bioseguridad externa. 
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0.text-white Bioseguridad interna.
            .col-lg-6.col-md-6
              .tarjeta.p-5.h-100.bg-color-7(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
                .row.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/tarjeta01_2.svg', style="width:100px").m-auto
                h4.card-title.mb-4 Objetivos obligatorios según normatividad:                
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0 Registro del predio avícola (RSPA) 
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0 Cumplimiento de infraestructura  
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0 Implementación de POES 
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0 Vigilancia epidemiológica
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0 Certificación GAB 
                  li.d-flex
                    i.fas.fa-check-circle.me-3(style="color:#AD9721")
                    p.mb-0 Planes vacunales obligatorios
          //- Fin Tarjetas
    Separador
    //- Inicio Tema2.4
    .row.mt-5
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Principios de bioseguridad avícola 
    p(data-aos="fade-left") Los principios de bioseguridad avícola se detallan a continuación:
    .row.bg-color-2
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-4")
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 1.	Control de acceso
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Restricción de ingreso. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Uso de ropa exclusiva. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Desinfección.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 2.	Manejo sanitario
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Aves certificadas. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Vacunación. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Monitoreo. 
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 3.	Higiene
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Limpieza periódica. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Manejo de residuos. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Control de agua.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 4.	Control de plagas
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Evitar fauna silvestre. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Uso de trampas.                          
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 5.	Manejo del personal
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Capacitación. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Higiene. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Registro.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 6.	Flujo de producción
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 “Todo dentro – todo fuera”. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Descanso sanitario. 
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 No mezclar edades.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_1.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 7.	Monitoreo
                        p.card-text.text-center
                        ul.lista-ul.mb-0
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Control productivo.
                          li.d-flex
                            i.fas.fa-check-circle.me-3(style="color:#AD9721")
                            p.mb-0 Reportes sanitarios.
                //- Fin Carrusel
    Separador
    //- Inicio Tema2.5
    .row.mt-5
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Manejo ambiental
    p(data-aos="fade-left") Conjunto de prácticas orientadas a minimizar el impacto ambiental de la producción avícola mediante el manejo adecuado de residuos, emisiones y recursos.
    //- Inicio Tarjetas
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/tarjeta01_1.svg', alt='' style="width:100px").m-auto
          h4.text-white Normativa                
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Regulaciones ambientales nacionales. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Normas del ICA. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Manejo de residuos y mortalidad.
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-7(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema2/tarjeta01_2.svg', style="width:100px").m-auto
          h4.card-title.mb-4 Aplicación en granja
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Manejo de gallinaza. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Disposición de aves muertas. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Control de olores. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Uso eficiente del agua.            
    //- Fin Tarjetas
    Separador
    //- Inicio Tema2.6
    .row.mt-5
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Protocolos
    p(data-aos="fade-left") Procedimientos estandarizados que indican cómo realizar las actividades dentro de la granja garantizando cumplimiento normativo. Las etapas son:
    //- Estructura de Galería de Imágenes Responsive
    .row.justify-content-center.align-items-stretch
      //- Tarjeta 1
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        //- Eliminamos .bg-white de la tarjeta principal
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_1.png', alt='Registro legal')
          //- Agregamos flex-grow-1 para que el fondo gris llene el espacio sobrante
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Registro legal (RSPA, GAB)
      //- Tarjeta 2
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_2.png', alt='Infraestructura')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Infraestructura
      //- Tarjeta 3
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_3.png', alt='Control de ingreso')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Control de ingreso
      //- Tarjeta 4
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_4.png', alt='Vacunación')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Vacunación
      //- Tarjeta 5
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_5.png', alt='Manejo de agua')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Manejo de agua y alimento
      //- Tarjeta 6
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_6.png', alt='Limpieza')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Limpieza y desinfección
      //- Tarjeta 7
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_7.png', alt='Residuos')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Manejo de residuos
      //- Tarjeta 8
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_8.png', alt='Monitoreo')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Monitoreo sanitario
      //- Tarjeta 9
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_9.png', alt='Reporte ICA')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Reporte al ICA
      //- Tarjeta 10
      .col-6.col-md-4.col-lg-3.mb-4(data-aos="zoom-in")
        .tarjeta.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta04_10.png', alt='Auditorías')
          .p-3.text-center.flex-grow-1(style="background-color: #e8e6d9; border-radius: 0 0 10px 10px;")
            p.mb-0.fw-bold Auditorías
    Separador
    //- Inicio Tema2.7
    .row.mt-5
        #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.7 Contingencias
    p(data-aos="fade-left") Son situaciones imprevistas que afectan la producción y requieren respuesta inmediata. A continuación, abordarán los tipos que existen, características, reconocimiento de enfermedades y obligaciones legales:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Tipos
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Enfermedades (Influenza Aviar, Newcastle). 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Alta mortalidad. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Fallas en bioseguridad. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Problemas ambientales.                           
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Características
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Aparición repentina. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Impacto sanitario. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Requieren acción inmediata. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Deben reportarse. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0              
              h4 Reconocimiento de enfermedades
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Mortalidad inusual. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Síntomas respiratorios. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Síntomas digestivos. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Síntomas nerviosos. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Decaimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/slide01_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Obligaciones legales del productor
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Mantener registros. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Cumplir normatividad ICA. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Permitir inspecciones. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 Reportar enfermedades. 
                li.d-flex
                  i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                  p.mb-0 No movilizar aves sin permisos.
    //- Fin Slideshow
    p(data-aos="fade-left") El cumplimiento de la normatividad y seguridad en la avicultura de engorde garantiza no solo la sanidad de las aves, sino también la protección del trabajador, la sostenibilidad ambiental y la productividad del sistema, siendo la bioseguridad el eje fundamental del proceso productivo.
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

<style lang="sass"></style>
