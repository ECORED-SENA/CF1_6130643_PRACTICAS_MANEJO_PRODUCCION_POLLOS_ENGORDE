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
    .bg--img_03.mt-5.acordeon-tipo-2
      .row.justify-content-center        
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Sistema intensivo (predominante en Colombia)")
              .col-12
                p.mb-4 Es el sistema más utilizado en integraciones avícolas comerciales.                
                p.mb-3 #[b Características:]           
                .row.mb-4.justify-content-center
                    .col-6.col-md-3.text-center.mb-3
                        img.img-fluid(src='@/assets/curso/tema1/img1acordion.svg')
                    .col-6.col-md-3.text-center.mb-3
                        img.img-fluid(src='@/assets/curso/tema1/img2acordion.svg')                    
                    .col-6.col-md-3.text-center.mb-3
                        img.img-fluid(src='@/assets/curso/tema1/img3acordion.svg')                    
                    .col-6.col-md-3.text-center.mb-3
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
                        span.ms-2 Mejor conversión alimenticia (entre 1.5 kg. y 1.8 kg.).
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
                        | Entre 3% y 5%.
                      .bg-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                        img(src='@/assets/curso/tema1/tarjeta02_5.svg', style="max-width: 90px").mx-auto.mb-3
                        h4.card-title.text-center.mb-3 Uniformidad
                        p.card-text.text-center
                        | Mayor o igual (≥) que el 80% del lote.
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
              p.lista-ol--cuadro__vineta.p-1 1
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
              h4 Recepción de pollitos (día 1)
              p XXXXXXXXXXXXXXXXXXXXXXXXXX
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Levante (de 0 a 21 días)
              p XXXXXXXXXXXXXXXXXXXXXXXXXX
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Engorde (de 21 a 42 días)
              p XXXXXXXXXXXXXXXXXXXXXXXXXX
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Control sanitario
              p XXXXXXXXXXXXXXXXXXXXXXXXXX
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Captura
              p XXXXXXXXXXXXXXXXXXXXXXXXXX
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/slide01_7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Transporte
              p XXXXXXXXXXXXXXXXXXXXXXXXXX
    //- Fin Slideshow






 
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
