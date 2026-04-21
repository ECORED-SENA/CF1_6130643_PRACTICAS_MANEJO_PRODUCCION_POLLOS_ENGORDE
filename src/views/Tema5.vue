<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Planificación y organización
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")      
      .col-lg-10.mb-0.d-flex.align-items-center.bg-color-5.p-4
        p.mb-0 La planificación y organización en la avicultura de engorde constituyen la base para garantizar la eficiencia productiva, el cumplimiento sanitario y el bienestar animal. Este proceso integra la programación de actividades, el manejo de recursos físicos y el cálculo técnico de densidades y capacidades, conforme a los lineamientos establecidos por el Instituto Colombiano Agropecuario (ICA).
      .col-lg-2.d-flex.align-items-center.justify-content-center.bg-color-3
        figure
          img(src="@/assets/curso/tema3/img1.svg", style="width: 100px").mx-auto
    Separador
    //- Inicio Tema3.1
    .row.mt-5
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Cronograma de actividades: clase y características
    p(data-aos="fade-left") El cronograma de actividades es una herramienta de planificación que organiza en el tiempo todas las labores necesarias en el ciclo productivo del pollo de engorde, desde la preparación del galpón hasta la salida del lote. Las clases de cronograma en avicultura de engorde son:

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
