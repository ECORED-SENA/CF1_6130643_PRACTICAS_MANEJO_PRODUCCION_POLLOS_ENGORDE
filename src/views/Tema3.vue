<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
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
    //- Inicio Accordion
    .bg--img_03.mt-5.acordeon-tipo-2(data-aos="fade-right")
      .row.justify-content-center        
        .col-lg-12
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="1. Cronograma pre-operativo")
              .col-12               
                .row
                  .col-md-6
                    p Incluye todas las actividades antes de la llegada de los pollitos:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Limpieza y desinfección del galpón (POES). 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Vacío sanitario. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Mantenimiento de equipos.
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Instalación de cama nueva. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Verificación de temperatura y ventilación. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Preparación de comederos y bebederos.
                  .col-md-6
                    figure
                      img(src="@/assets/curso/tema3/acordeon01_1.png", style="width: 350px").mx-auto                   
            .row(titulo="2. Cronograma operativo (durante el ciclo productivo)")
              .col-12                
                .row
                  .col-md-6
                    p Comprende el manejo diario del lote:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Alimentación y suministro de agua. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Control ambiental (temperatura, ventilación, humedad). 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Monitoreo de consumo. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Revisión sanitaria diaria. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Aplicación de vacunas. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Registro de mortalidad. 
                  .col-md-6
                    figure
                      img(src="@/assets/curso/tema3/acordeon01_2.png", style="width: 350px").mx-auto
            .row(titulo="3. Cronograma post-operativo")
              .col-12                
                .row
                  .col-md-6
                    p Actividades después de la salida del lote:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Retiro de gallinaza. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Limpieza profunda. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Desinfección total. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Control de plagas. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Periodo de descanso sanitario.
                    p.mt-5 Características del cronograma:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Secuencial y organizado en el tiempo. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Basado en la edad de las aves (días o semanas). 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Flexible ante contingencias. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Debe quedar registrado (bitácoras). 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Alineado con normativa ICA y bioseguridad. 
                    p.mt-5 Importancia:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Evita errores de manejo. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Mejora la eficiencia productiva. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Permite control sanitario oportuno. 
                      li.d-flex
                        i.fas.fa-check-circle(style="color: #ad9721;")
                        span.ms-2 Facilita auditorías e inspecciones. 
                  .col-md-6
                    figure
                      img(src="@/assets/curso/tema3/acordeon01_3.png", style="width: 350px").mx-auto
    //- Fin Accordion
    Separador
    //- Inicio Tema3.2
    .row.mt-5
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Medidas de superficie, longitud, peso y volumen
    p(data-aos="fade-left") Las medidas físicas en avicultura son fundamentales para el diseño de instalaciones, cálculo de densidad, suministro de alimento y agua, y control del crecimiento de las aves. Los tipos de medidas más utilizadas son:    
    .row.bg-color-1
      .col-12
        .p-5
          .row.justify-content-center.align-items-start
            .col-lg-10(data-aos="fade-right")
              //- El contenedor de TabsA ocupando 9 columnas
              TabsA.color-acento-botones
                //- Pestaña 1
                .tarjeta.p-5.bg-color-11(titulo="1. Medidas de superficie")
                  h4 Se utilizan para calcular el área disponible en el galpón.
                  p Unidad principal: metro cuadrado (m²).
                  h4 Aplicación:                   
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Distribución de aves. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Ubicación de equipos.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Cálculo de densidad. 
                //- Pestaña 2
                .tarjeta.p-5.bg-color-11(titulo="2. Medidas de longitud")
                  h4 Permiten dimensionar instalaciones y equipos.
                  p Metro (m), centímetro (cm). 
                  h4 Aplicación:                   
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Largo y ancho del galpón. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Altura del techo. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Espacio lineal de comederos y bebederos.
                //- Pestaña 3
                .tarjeta.p-5.bg-color-11(titulo="3. Medidas de peso")
                  h4 Se emplean para evaluar el crecimiento y desempeño productivo.
                  p Gramos (g) y kilogramos (kg). 
                  h4 Aplicación:                   
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Peso inicial del pollito. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Ganancia diaria de peso. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Peso final de sacrificio.
                //- Pestaña 4
                .tarjeta.p-5.bg-color-11(titulo="4. Medidas de volumen")
                  h4 Relacionadas con el consumo de agua y capacidad de almacenamiento.
                  p Litros (L), mililitros (ml). 
                  h4 Aplicación:                   
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Consumo de agua. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Capacidad de tanques. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #AD9721")
                      p.mb-0 Preparación de soluciones.
            .col-lg-2.d-none.d-lg-block(data-aos="fade-left")
              //- La imagen fuera del TabsA ocupando las 3 columnas restantes
              figure
                img(src="@/assets/curso/tema3/acordeon02_1.png", alt="Imagen decorativa", style="width: 100%")
          p.mt-5(data-aos="fade-left") La importancia en la producción radica en que permite realizar cálculos técnicos precisos, evitando la sobrepoblación y garantizando un adecuado suministro de recursos. Además, contribuye al cumplimiento de las exigencias normativas, favoreciendo la eficiencia y sostenibilidad del sistema productivo.
          Separador
          //- Inicio Tema3.3
          .row.mt-5
              #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 3.3 Densidad de aves y equipos: concepto y cálculos
          p(data-aos="fade-left") En el marco de la presente sección se estudiará el concepto, la normatividad y cálculos de densidad de aves y equipos.
          //- Inicio Accordion
          .bg--img_03.mt-5.acordeon-tipo-2(data-aos="fade-right")
            .row.justify-content-center        
              .col-lg-3
                figure
                      img(src="@/assets/curso/tema3/img2.png", style="width: 350px").mx-auto
              .col-lg-9
                AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                  .row(titulo="Concepto")
                    .col-12                   
                      p La densidad avícola es la relación entre el número de aves y el área disponible dentro del galpón. Es un factor crítico que influye en el bienestar animal, la sanidad y la productividad. 
                  .row(titulo="Normatividad en Colombia")
                    .col-12                      
                      p Según lineamientos del Instituto Colombiano Agropecuario (ICA) y estándares de bienestar:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 La densidad debe garantizar espacio suficiente para movilidad. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Debe evitar estrés térmico y hacinamiento. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Se ajusta según clima, peso final y sistema de producción.
                  .row(titulo="Valores recomendados")
                    .col-12                
                      p Referenciales para engorde en clima medio:
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Entre 10 y 12 aves/m² en condiciones estándar.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 30 kg / m² a 35 kg / m² como límite productivo. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Menor densidad en climas cálidos.
                  .row(titulo="Cálculo de densidad de aves")
                    .col-12                
                      h4 Fórmula:
                      p.mb-5 Densidad = Número de aves / Área (m²).
                      h4 Ejemplo:
                      p Si hay 1.000 aves en un galpón de 100 m²:
                      p Densidad = 1.000 / 100 = 10 aves/m².
                  .row(titulo="Cálculo por peso")
                    .col-12                
                      p Densidad (kg. /m²) = Peso total de las aves / Área.
                      h4 Ejemplo: 
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 1.000 aves × 2 kg. = 2.000 kg. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Área: 100 m².
                      p Densidad = 2.000 / 100 = 20 kg. /m².
                  .row(titulo="Densidad de equipos")
                    .col-12                
                      p Se refiere a la cantidad de equipos disponibles por número de aves.
                      h4 Comederos: 
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 1 comedero por cada 40 o 50 aves.
                      h4.mt-3 Bebederos: 
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 1 bebedero por cada 50 o 80 aves.
                      h4.mt-3 Importancia de la densidad adecuada: 
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Reduce estrés y mortalidad.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Mejora conversión alimenticia. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Disminuye enfermedades. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Optimiza el espacio productivo.
                      h4.mt-3 Factores que afectan la densidad
                      ul.lista-ul
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Temperatura ambiental. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Ventilación. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Tipo de galpón. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Peso final de las aves. 
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #ad9721;")
                          span.ms-2 Sistema de manejo.
          //- Fin Accordion
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
