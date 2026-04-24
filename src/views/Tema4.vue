<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Infraestructura y condiciones de la granja
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")      
      .col-lg-10.mb-0.d-flex.align-items-center.bg-color-5.p-4
        p.mb-0 La infraestructura y el ambiente son clave en la producción de pollos de engorde, pues influyen en el bienestar, la eficiencia y la rentabilidad. Un diseño adecuado del galpón asegura confort térmico, buena ventilación, bioseguridad y un manejo eficiente. A continuación, se estudiarán los alojamientos.
      .col-lg-2.d-flex.align-items-center.justify-content-center.bg-color-3
        figure
          img(src="@/assets/curso/tema4/img1.svg", style="width: 100px").mx-auto
    Separador
    //- Inicio Tema4.1
    .row.mt-5
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Alojamiento: tipos y características
    p(data-aos="fade-left") El alojamiento avícola o galpón es la estructura destinada a la cría de aves y debe diseñarse bajo criterios técnicos que garanticen su adecuado funcionamiento. Entre estos se incluyen una correcta orientación (preferiblemente oriente-occidente para reducir la radiación solar), buen drenaje del terreno, acceso a agua potable, adecuada distancia sanitaria entre granjas y control de ingreso para asegurar la bioseguridad. Los tipos de alojamiento son:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Galpones abiertos")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Galpones abiertos
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Estructura sencilla con laterales en malla. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Uso de cortinas plásticas para proteger de lluvia y viento. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Dependencia directa del clima externo.
                p.mt-5.fw-bold Características técnicas:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Ancho: entre 8 m y 12 m. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Largo variable. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Altura: entre 2.5 m a 3 m.
                  .row.p-2
                    .col-lg-6.bg-color-7.p-4
                      p.mt-5.fw-bold Ventajas:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Bajo costo de inversión. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Fácil mantenimiento. 
                    .col-lg-6.bg-color-7.p-4
                      p.mt-5.fw-bold Desventajas:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Variabilidad en temperatura.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Mayor incidencia de enfermedades respiratorias.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema4/tarjeta01_1.png')
          .py-3.py-md-4(titulo="Galpones semi-cerrados")
            .row              
              .col-md-8
                h4 Galpones semi-cerrados
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Incorporan ventilación mecánica parcial. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Permiten cierto control ambiental.                   
                p.mt-5.fw-bold Características técnicas:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Uso de extractores y ventiladores. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Cortinas automatizadas o manuales.                   
                  .row.p-2
                    .col-lg-6.bg-color-7.p-4
                      p.mt-5.fw-bold Ventajas:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Mejor control de temperatura y ventilación. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Reducción de estrés en aves. 
                    .col-lg-6.bg-color-7.p-4
                      p.mt-5.fw-bold Desventajas:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Requiere manejo técnico. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Costos medios de operación.
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta01_2.png')
          .py-3.py-md-4(titulo="Galpones cerrados o tecnificados")
            .row              
              .col-md-8
                h4 Galpones cerrados o tecnificados
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Sistemas de ambiente controlado (tipo túnel o presión negativa). 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Total aislamiento del ambiente externo. 
                p.mt-5.fw-bold Características técnicas:
                ul.lista-ul
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Paneles térmicos. 
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Sistemas automáticos (sensores de temperatura, humedad, CO₂).
                  li.d-flex
                    i.fas.fa-check-circle(style="color: #ad9721;")
                    span.ms-2 Ventilación tipo túnel. 
                  .row.p-2
                    .col-lg-6.bg-color-7.p-4
                      p.mt-5.fw-bold Ventajas:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Alta productividad. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Uniformidad del lote.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Mejor conversión alimenticia. 
                    .col-lg-6.bg-color-7.p-4
                      p.mt-5.fw-bold Desventajas:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Alta inversión inicial. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Dependencia de energía eléctrica.
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta01_3.png')     
    //- Cierres Pestanas horizontales
    Separador
    //- Inicio Tema4.2
    .row.mt-5
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Condiciones ambientales: parámetros y control ambiental
    p(data-aos="fade-left") El control ambiental es fundamental para evitar estrés térmico y garantizar el bienestar de las aves. Los parámetros ambientales ideales son:
    .row.justify-content-center.align-items-start
      .col-lg-9(data-aos="fade-right")
        //- El contenedor de TabsA ocupando 9 columnas
        TabsA.color-acento-botones
          //- Pestaña 1
          .tarjeta.p-5.bg-color-11(titulo="1. Temperatura")
            h4 1. Temperatura                              
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Entre 0 y 7 días: entre 32 °C y 34 °C.
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Entre 2 y 3 semanas: entre 28 °C y 30 °C. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Finalización: entre 20 °C y 24 °C.
            h4.mt-5 Importancia
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Temperaturas bajas → baja ganancia de peso.
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Temperaturas altas → estrés calórico y mortalidad.
          //- Pestaña 2
          .tarjeta.p-5.bg-color-11(titulo="2. Humedad relativa")
            h4 2. Humedad relativa                              
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Ideal: entre 50 % y 70 %.
            h4.mt-5 Problemas asociados:
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Alta humedad: cama húmeda, amoníaco, enfermedades.
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Baja humedad: polvo, problemas respiratorios. 
          //- Pestaña 3
          .tarjeta.p-5.bg-color-11(titulo="3. Ventilación")
            h4 Función principal:                      
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Renovar aire. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Controlar temperatura. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Eliminar gases tóxicos. 
            h4.mt-5 Gases críticos:
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Amoniaco (NH₃): máximo de 10 y 20 ppm. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 CO₂: máximo 3000 ppm. 
          //- Pestaña 4
          .tarjeta.p-5.bg-color-11(titulo="4. Calidad del aire")
            h4 Debe garantizar:              
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Bajo nivel de polvo. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Buena oxigenación. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Ausencia de olores fuertes.
          //- Pestaña 5
          .tarjeta.p-5.bg-color-11(titulo="5.	Control ambiental")
            h4 Se logra mediante:          
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Cortinas laterales. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Extractores de aire. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Ventiladores.
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Paneles evaporativos (<i>cooling pads</i>). 
              li.d-flex
                i.fas.fa-check-circle(style="color: #AD9721")
                p.mb-0 Sensores automáticos.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        //- La imagen fuera del TabsA ocupando las 3 columnas restantes
        figure
          img(src="@/assets/curso/tema4/img2.png", alt="Imagen decorativa", style="width: 100%")
    Separador
    //- Inicio Tema4.3
    .row.mt-5
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Calefacción: concepto, sistemas y operación
    p(data-aos="fade-left") La calefacción proporciona calor artificial necesario para mantener la temperatura corporal de los pollitos, ya que en sus primeros días no regulan bien su temperatura. Los aspectos fundamentales se presentan seguidamente:
    //- Inicio Infografia
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg
              h3 Criadoras a gas
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Funcionan con gas propano. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Distribuyen calor uniforme. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/infografia01_1.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/infografia01_2.png').img125
            .col-lg.text-start
              h3 Lámparas infrarrojas
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Uso en sistemas pequeños. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Generan calor localizado. 
          .row
            .col-lg
              h3 Sistemas de aire caliente
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Distribuyen calor por ductos. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Usados en galpones tecnificados. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/infografia01_3.png').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/infografia01_4.png').img125
            .col-lg.text-start
              h3 Manejo operativo
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Precalentar el galpón 24 horas antes. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Temperatura del piso: entre 28 °C y 30 °C.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Distribuir uniformemente las criadoras. 
          .row
            .col-lg
              h3 Indicadores de comportamiento:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Aves amontonadas: frío. 
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Aves dispersas lejos del calor: calor excesivo.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #ad9721;")
                  span.ms-2 Distribución uniforme: temperatura adecuada. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/infografia01_5.png').img125          
    //- Fin Infografia
    Separador
    //- Inicio Tema4.4
    .row.mt-5
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Iluminación: concepto, sistemas y operación
    p(data-aos="fade-left") La iluminación es un factor clave en la producción avícola, ya que influye directamente en el consumo de alimento, el crecimiento y la actividad metabólica de las aves. Un manejo adecuado de la luz favorece el desarrollo óptimo y el rendimiento productivo. Los sistemas de iluminación son:
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
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta02_1.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Luz natural
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Depende del clima. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Limitada en control. 
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta02_2.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Luz artificial
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Bombillos LED (más eficientes). 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Programación automática. 
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta02_3.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Programas de iluminación
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 De 1 a 7 días: 23 horas luz / 1 hora oscuridad. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Engorde: reducción progresiva (entre 18 y 20 horas luz). 
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta02_4.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Manejo
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Evitar cambios bruscos de luz. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Mantener uniformidad en el galpón.
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Revisar funcionamiento de bombillos.
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta02_5.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Normatividad
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Evitar cambios bruscos de luz. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Garantizar periodos de descanso.
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Mantener intensidad uniforme. 
          //- Fin Carrusel
              Separador
    //- Inicio Tema4.5
    .row.mt-5
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Camas: tipos y manejo
    p(data-aos="fade-left") La cama es un componente esencial del sistema productivo, ya que influye directamente en la sanidad y confort de las aves. Los tipos de cama y sus manejos se precisan a continuación:
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
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta03_1.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Tipos de cama
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Viruta de madera (más recomendada). 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Cascarilla de arroz. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Paja. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Aserrín.
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta03_2.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Características ideales
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Buena capacidad de absorción. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Seca y libre de hongos. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 No compacta. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Libre de contaminantes. 
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta03_3.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Manejo técnico de la cama
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Espesor inicial: entre 8 y 10 cm. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Remoción frecuente para evitar compactación. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Control de humedad: menor (<) que 25 %. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Retiro de zonas húmedas (bebederos). 
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta03_4.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Problemas comunes
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Cama húmeda → dermatitis, quemaduras, amoníaco. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Cama seca excesiva → polvo.                             
                      .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                        img(src='@/assets/curso/tema4/tarjeta03_5.png').w-100
                        .p-4
                          h4.mb-3.card-title.text-center Importancia productiva
                          ul.lista-ul
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Reduce enfermedades (pododermatitis). 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Mejora bienestar. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Disminuye mortalidad. 
                            li.d-flex
                              i.fas.fa-check-circle(style="color: #ad9721;")
                              span.ms-2 Optimiza conversión alimenticia.                            
          //- Fin Carrusel
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
