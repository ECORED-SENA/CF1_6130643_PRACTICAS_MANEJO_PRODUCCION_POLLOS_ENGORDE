<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario sobre manejo técnico y productivo de pollo de engorde.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el nivel de comprensión sobre los principios técnicos, normativos y productivos del manejo de pollos de engorde, fortaleciendo sus conocimientos en bioseguridad, bienestar animal, procesos productivos y toma de decisiones en el contexto avícola.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué caracteriza el sistema intensivo en avicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta densidad y control ambiental permanente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Baja densidad y manejo tradicional extensivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo de pastoreo y alimentación natural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción sin control sanitario ni bioseguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la densidad recomendada en engorde?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entre dos y cuatro aves por metro cuadrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre veinte y treinta aves por metro cuadrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre diez y doce aves por metro cuadrado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Entre cinco y seis aves por metro cuadrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué entidad regula la bioseguridad en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instituto Nacional de Vigilancia de Medicamentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ministerio de Transporte y movilidad nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Departamento Administrativo Nacional de Estadística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Instituto Colombiano Agropecuario ICA nacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo de la bioseguridad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar ingreso y propagación de enfermedades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el consumo diario de alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el tiempo de crecimiento productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la densidad de aves en un galpón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué temperatura inicial requieren los pollitos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entre veinte y veintidós grados constantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre diez y quince grados ambientales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre treinta y dos y treinta y cuatro grados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Entre cuarenta y cuarenta y cinco grados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es un indicador de bienestar animal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta mortalidad y bajo consumo alimenticio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presencia constante de enfermedades respiratorias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aves inmóviles y con comportamiento anormal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Baja mortalidad y consumo adecuado diario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es la densidad avícola?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relación entre número de aves y área disponible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de alimento consumido por día o fecha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de trabajadores ubicados en el galpón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiempo de crecimiento de cada lote o zona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué fase ocurre entre 0 y 21 días?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fase final de comercialización del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fase de sacrificio en planta de beneficio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fase de transporte hacia el mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fase de levante con desarrollo inicial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es un riesgo laboral en avicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso constante de equipos automatizados modernos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alimentación balanceada para las aves.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exposición a agentes biológicos y químicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Control permanente de temperatura ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué función cumple el cronograma?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar el peso individual de cada ave.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar actividades del ciclo productivo avícola.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar el precio final del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar los tipos de alimento utilizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué tipo de galpón tiene mayor control ambiental?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Galpón abierto con ventilación natural básica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Galpón tradicional sin control de variables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Galpón cerrado con ambiente totalmente controlado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Galpón rural con acceso libre al exterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función de la ventilación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir el consumo de alimento diario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la humedad dentro del galpón.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Renovar aire y eliminar los gases nocivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la iluminación en el o los galpones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué tipo de alimento se usa en fase inicial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alimento preiniciador con alto contenido proteico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alimento finalizador para etapa de sacrificio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alimento de mantenimiento para aves adultas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alimento natural sin control nutricional ni revisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué mide la conversión alimenticia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de agua consumida por las aves del galpón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Relación entre alimento consumido y peso ganado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tiempo total de producción del lote en el galpón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de aves por metro cuadrado en el galpón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es una buena práctica avícola?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el control sanitario en granja o zona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar densidad sin control ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar protocolos de limpieza y desinfección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplir normas sanitarias y de bioseguridad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué indica jadeo en las aves?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado normal de descanso en las aves.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presencia de estrés térmico por calor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Buen nivel de confort ambiental adecuado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bajo consumo de alimento diario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué es el bienestar animal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento de peso en menor tiempo posible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estado físico y mental adecuado del animal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción de costos en producción avícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso intensivo de tecnología en granjas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué función cumple el agua en las aves?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la densidad de aves en galpón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir completamente el consumo de alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regular temperatura y procesos digestivos básicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el crecimiento muscular de las aves.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué es una contingencia en producción avícola?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proceso normal dentro del ciclo productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Situación imprevista que afecta la producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Etapa final del proceso de comercialización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actividad programada en el cronograma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué permite la trazabilidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seguir el producto desde origen hasta consumo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Controlar la temperatura dentro del o los galpones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir el consumo diario de alimento consumido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar la densidad de aves por área del galpón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
