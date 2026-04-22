<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Prácticas de manejo en la producción de pollos de engorde 
        p.mb-0 
          | Síntesis:          
          | Manejo técnico y productivo del pollo de engorde.
    p.mt-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El esquema organiza el manejo técnico del pollo de engorde, integrando fundamentos, normatividad, planificación, infraestructura y manejo productivo. Incluye sistemas, bioseguridad, condiciones ambientales y recursos clave, orientados a garantizar bienestar animal, eficiencia productiva y cumplimiento de estándares sanitarios en la producción avícola.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
