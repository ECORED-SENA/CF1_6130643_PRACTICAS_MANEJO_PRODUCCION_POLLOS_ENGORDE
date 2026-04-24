<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Planificación y organización
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")      
      .col-lg-10.mb-0.d-flex.align-items-center.bg-color-5.p-4
        p.mb-0 El manejo productivo del pollo de engorde comprende un conjunto de prácticas técnicas orientadas a garantizar el crecimiento, desarrollo, sanidad, bioseguridad, bienestar animal y rendimiento de las aves, desde su recepción hasta la etapa final de producción. Estas prácticas deben ajustarse a la normatividad vigente en Colombia, en especial a la Resolución ICA 3652 de 2014, sobre certificación de granjas bioseguras, y a la Resolución ICA 002536 de 2020, relacionada con bienestar animal. Un manejo eficiente optimiza la conversión alimenticia, reduce la mortalidad, previene enfermedades y asegura la inocuidad del producto, cumpliendo con los estándares sanitarios nacionales.
      .col-lg-2.d-flex.align-items-center.justify-content-center.bg-color-3
        figure
          img(src="@/assets/curso/tema5/img1.svg", style="width: 100px").mx-auto
    p(data-aos="fade-left") A continuación, se presentarán los aspectos de fundamentación para la recepción de aves y el respectivo protocolo:
    //- Inicio Tarjetas
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema5/tarjeta01_1.svg', alt='' style="width:100px").m-auto
          h4.text-white Preparación previa (Resolución 3652 – Bioseguridad)                
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Limpieza, lavado y desinfección total del galpón. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Implementación de vacío sanitario (mínimo recomendado: 10–15 días). 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Control de ingreso de personas (uso de ropa y calzado exclusivo).
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Instalación y desinfección de equipos (comedores, bebederos). 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Precalentamiento del galpón mínimo 24 horas antes. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Temperatura inicial: 32–34 °C. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Cama nueva, seca, libre de contaminantes (8–10 cm).
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-7(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema5/tarjeta01_2.svg', style="width:100px").m-auto
          h4.card-title.mb-4 Protocolo de recepción
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Verificación del transporte (condiciones térmicas y ventilación). 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Revisión de guía sanitaria de movilización (ICA). 
            //- Sub-list section starts here
            li.d-block.mb-0
              .d-flex.mb-2
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Evaluación de calidad del pollito: 
              ul.lista-ul.ms-4.mb-0
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#689494")
                  p.mb-0 Activo y alerta 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#689494")
                  p.mb-0 Ombligo cicatrizado 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#689494")
                  p.mb-0 Plumón seco 
                li.d-flex
                  i.fas.fa-check-circle.me-3(style="color:#689494")
                  p.mb-0 Buena hidratación
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Descarga rápida para evitar estrés térmico (Resolución 002536). 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Suministro inmediato de agua potable y alimento. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Registro del lote (trazabilidad obligatoria).
    //- Fin Tarjetas
    Separador
    //- Inicio Tema5.1
    .row.mt-5
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Agua: importancia y manejo
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-left")      
      .col-lg-8.mb-0.d-flex.align-items-center.bg-color-12.p-4
        p.mb-0 El agua es un nutriente esencial en la producción avícola, ya que regula la temperatura corporal y participa en los procesos digestivos. Su suministro debe ser potable, con sistemas protegidos de contaminación y adecuada limpieza, según la normatividad vigente. Un manejo correcto implica disponibilidad permanente, control de temperatura y limpieza de bebederos. El agua contaminada o insuficiente puede causar enfermedades, estrés y mortalidad.
      .col-lg-4.d-flex.align-items-center.justify-content-center
        figure
          img(src="@/assets/curso/tema5/img1.png", style="width: 100%").mx-auto
    Separador
    //- Inicio Tema5.2
    .row.mt-5
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Alimento: importancia y tipos
    p(data-aos="fade-left") Es el principal factor que determina el crecimiento, la conversión alimenticia y la rentabilidad del sistema. Los tipos, normatividad y manejo son:
    //- Inicio Tarjetas
    .row(data-aos="fade-right").justify-content-center
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column              
        .tarjeta.rounded-5.h-100.bg-color-9.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema5/tarjeta02_1.png').w-100
          .p-4
            h4.card-title.text-center.mb-4 Tipos de alimento          
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Preiniciador. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Iniciador. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Engorde.               
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-color-9.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema5/tarjeta02_2.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Normatividad            
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Uso de alimentos certificados. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Almacenamiento en condiciones higiénicas. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Protección contra plagas. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Registro de consumo.              
      .col-12.col-md-6.col-xl-4.mb-4.d-flex.flex-column
        .tarjeta.rounded-5.h-100.bg-color-9.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema5/tarjeta02_3.png').w-100                
          .p-4
            h4.card-title.text-center.mb-4 Manejo            
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Suministro continuo. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Ajuste de altura de comederos. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Evitar desperdicios. 
              li.d-flex
                i.fas.fa-check-circle.me-3(style="color:#AD9721")
                p.mb-0 Control de calidad.               
      //- Fin Tarjetas
    p(data-aos="fade-left") La alimentación en pollos de engorde se divide en fases, cada una con requerimientos nutricionales específicos que garantizan crecimiento óptimo, buena conversión alimenticia y cumplimiento de estándares productivos. En la siguiente tabla se presentarán las fases de alimentación:
    //- Inicio Tabla
    .row.justify-content-center
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span  Fases de alimentación.
        .tabla-a
          table
            thead
              tr
                th(style="width: 10%") Fase
                th(style="width: 15%") Edad (días)
                th(style="width: 20%") Tipo de alimento
                th(style="width: 15%") Presentación
                th(style="width: 15%") Consumo aprox./ave
                th(style="width: 10%") Proteína (%)
                th(style="width: 15%") Energía (Kcal. /kg.)
            tbody
              tr
                td Preiniciador
                td Entre 0 y 7
                td Concentrado inicial
                td Migaja
                td 150 – 200 g
                td 21 – 23 %
                td 2900 – 3000
              tr
                td Iniciador
                td Entre 8 y 21
                td Concentrado crecimiento
                td Migaja / Pellet
                td 800 – 1000 g
                td 20 – 22 %
                td 3000 – 3100
              tr
                td Engorde
                td Entre 22 y 35
                td Concentrado final
                td Pellet
                td 1800 – 2200 g
                td 18 – 20 %
                td 3100 – 3200
              tr
                td Finalizador
                td Entre 36 y sacrificio
                td Concentrado final
                td Pellet
                td 1200 – 1500 g
                td 17 – 19 %
                td 3200 – 3300              
    //- FinTabla
    p.mt-5.mb-5(data-aos="fade-left") En la siguiente tabla se encuentra registrado el consumo estimado por ave.
    //- Inicio Tabla
    .row.justify-content-center
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span  Consumo total estimado por ave.
        .tabla-a
          table
            thead
              tr
                th(style="width: 20%") Edad final (días)
                th(style="width: 30%") Consumo total alimento (kg. /ave)
                th(style="width: 20%") Peso esperado (kg.)
                th(style="width: 30%") Conversión alimenticia
            tbody
              tr
                td 35 días
                td 3.5 – 4.0 kg.
                td 2.0 – 2.3 kg.
                td 1.6 – 1.8                
              tr
                td 42 días
                td 4.5 – 5.0 kg.                
                td 2.5 – 3.0 kg.                
                td 1.7 – 1.9                    
    //- FinTabla
    p.mt-5.mb-5 Los requerimientos nutricionales básicos están en la siguiente tabla.
    //- Inicio Tabla
    .row.justify-content-center
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span  Requerimientos nutricionales básicos
        .tabla-a
          table
            thead
              tr
                th(style="width: 20%") Nutriente
                th(style="width: 20%") Preiniciador
                th(style="width: 20%") Iniciador
                th(style="width: 20%") Engorde
                th(style="width: 20%") Finalizador
            tbody
              tr
                td Proteína (%)
                td Entre 22 y 23
                td Entre 20 y 22
                td Entre 18 y 20
                td Entre 17 y 19
              tr
                td Energía (Kcal/kg.)
                td 2900 – 3000
                td 3000 – 3100
                td 3100 – 3200
                td 3200 – 3300
              tr
                td Calcio (%)
                td 0.9 – 1.0
                td 0.85 – 0.9
                td 0.8 – 0.85
                td 0.75 – 0.8
              tr
                td Fósforo (%)
                td 0.45 – 0.5
                td 0.40 – 0.45
                td 0.35 – 0.4
                td 0.30 – 0.35
    //- FinTabla
    Separador
    //- Inicio Tema5.1
    .row.mt-5
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Manejo de concentrado y factores que afectan el consumo
        //- Inicio Tarjetas
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 25px 0 0 25px; background-color: #4d6666;")
          .row.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema5/tarjeta01_1.svg', alt='' style="width:100px").m-auto
          h4.text-white Manejo del concentrado (según BPA e ICA)
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Utilizar alimentos certificados. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Almacenar en lugares secos, ventilados y libres de plagas. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Evitar contacto directo con el suelo. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Rotación de inventarios (primero en entrar, primero en salir). 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white No suministrar alimento húmedo o contaminado. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Ajustar comederos para evitar desperdicio. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0.text-white Registrar consumo diario (trazabilidad). 
      .col-lg-6.col-md-6
        .tarjeta.p-5.h-100.bg-color-7(style="border-radius: 0 25px 25px 0; background-color: #d8f0f0;")
          .row.mb-4
            .col-auto
              figure
                img(src='@/assets/curso/tema5/tarjeta01_2.svg', style="width:100px").m-auto
          h4.card-title.mb-4 Factores que afectan el consumo
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Temperatura ambiental. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Calidad del alimento.             
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Disponibilidad de agua. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Densidad de aves. 
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Estado sanitario.
    //- Fin Tarjetas
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
