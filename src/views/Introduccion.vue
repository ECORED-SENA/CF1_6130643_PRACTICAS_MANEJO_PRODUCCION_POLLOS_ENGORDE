<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-color-1
      .col-12
        .p-5
          p(data-aos="fade-left") La producción avícola destinada al engorde de pollos para carne requiere la aplicación de conocimientos técnicos, sanitarios y zootécnicos que garanticen el bienestar de las aves, la eficiencia productiva y el cumplimiento de las normas de bioseguridad y sanidad animal. En este contexto, el manejo adecuado de los pollos de engorde implica comprender aspectos fundamentales como la fisiología aviar, el comportamiento y bienestar animal, las etapas de crecimiento, así como las características de las diferentes líneas genéticas utilizadas en la producción cárnica.
          .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Asimismo, es fundamental el conocimiento y la aplicación de prácticas de manejo relacionadas con el alojamiento, la preparación del galpón, la recepción de pollitos, la atención diaria de las aves y la implementación de programas de bioseguridad, vacunación y control sanitario. Estas acciones permiten prevenir enfermedades, optimizar el crecimiento, mejorar la conversión alimenticia y asegurar la sostenibilidad de la explotación avícola.
          .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade-left")
            .col-lg-10.mb-0.d-flex.align-items-center
              p.mb-0 De igual manera, el manejo técnico en la producción de pollo de engorde requiere la aplicación de planes zootécnicos y sanitarios que incluyan el control del peso corporal, la evaluación de la uniformidad del lote, el monitoreo de la mortalidad, el uso adecuado de medicamentos y la correcta aplicación de prácticas de manejo durante las diferentes etapas productivas. Además, es fundamental el uso adecuado de equipos e implementos para garantizar condiciones óptimas dentro del sistema productivo.
            .col-lg-2.bg-color-4.d-flex.align-items-center.justify-content-center.p-4
              figure
                img(src="@/assets/curso/intro/img2.png", data-aos="zoom-in", style="width: 80px").mx-auto
          .row.justify-content-center.align-items-stretch.g-0.mb-5(data-aos="fade-left")
            .col-lg-2.d-flex.align-items-center.justify-content-center
              figure
                img(src="@/assets/curso/intro/img3.png", style="width: 100%").mx-auto
            .col-lg-10.mb-0.d-flex.align-items-center.bg-color-5.p-4
              p.mb-0 Finalmente, la eficiencia en la producción de pollo de engorde depende también de la correcta ejecución de programas de alimentación, suministro de agua, ventilación, temperatura e iluminación, de acuerdo con parámetros técnicos establecidos y la normatividad vigente. Estos elementos, junto con el cumplimiento de las normas de bioseguridad, asepsia y seguridad y salud en el trabajo, contribuyen al desarrollo de sistemas de producción avícola eficientes, sostenibles y orientados a garantizar la calidad e inocuidad de la carne producida.
            


</template>

<script>
export default {
  name: 'Introduccion',
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
