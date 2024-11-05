//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"calidad",
        titulo:"¿En qué década comenzaron a surgir los primeros modelos de calidad de software?",
        opcionA:"1950",
        opcionB:"1960",
        opcionC:"1970",
        opcionD:"1980",
        correcta:"c"
    },
    {
        id:2,
        categoria:"calidad",
        titulo:"¿Cuál de las siguientes normas se enfoca en la gestión de calidad general, aplicable a cualquier organización?",
        opcionA:"ISO/IEC 25010",
        opcionB:"IEEE 730",
        opcionC:"CMMI",
        opcionD:"ISO 9001",
        correcta:"d"
    },
    {
        id:3,
        categoria:"calidad",
        titulo:"¿Qué herramienta se utiliza principalmente para analizar la calidad del código y detectar problemas de seguridad?",
        opcionA:"Selenium",
        opcionB:"SonarQube",
        opcionC:"JIRA",
        opcionD:"ISO 9001",
        correcta:"b"
    },
    {
        id:4,
        categoria:"calidad",
        titulo:"¿Qué característica evalúa la norma ISO/IEC 25010 en un producto de software?",
        opcionA:"Gestión de errores",
        opcionB:"Trazabilidad",
        opcionC:"Fiabilidad",
        opcionD:"Modularidad",
        correcta:"c"
    },
    {
        id:5,
        categoria:"calidad",
        titulo:"¿Cuál es el propósito principal del modelo CMMI en el desarrollo de software?",
        opcionA:"Automatizar pruebas",
        opcionB:"Mejorar la calidad del código",
        opcionC:"Medir la madurez de los procesos",
        opcionD:"Establecer criterios de usabilidad",
        correcta:"c"
    },
    {
        id: 6,
        categoria: "requerimientos",
        titulo: "¿Qué proceso asegura que los requerimientos sean claros y completos antes de iniciar el desarrollo?",
        opcionA: "Validación",
        opcionB: "Verificación",
        opcionC: "Trazabilidad",
        opcionD: "Documentación",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "requerimientos",
        titulo: "¿Cuál de los siguientes es un artefacto común en el análisis de requerimientos?",
        opcionA: "Diagrama de secuencia",
        opcionB: "Historia de usuario",
        opcionC: "Historia de usuario",
        opcionD: "Prueba de carga",
        correcta: "b"
    },
    {
        id: 8,
        categoria: "requerimientos",
        titulo: "¿Cuál es el objetivo principal de la validación en el análisis de requerimientos?",
        opcionA: "El software cumple con las necesidades del cliente",
        opcionB: "Verificar la calidad del código",
        opcionC: "Identificar y gestionar riesgos",
        opcionD: "Mejorar la trazabilidad",
        correcta: "a"
    },
    {
        id: 9,
        categoria: "requerimientos",
        titulo: "¿Qué formato se utiliza para detallar los escenarios de uso desde la perspectiva del usuario?",
        opcionA: "Caso de uso",
        opcionB: "Estimación de PERT",
        opcionC: "Diagrama de clases",
        opcionD: "Criterios de aceptación",
        correcta: "a"
    },
    {
        id: 10,
        categoria: "requerimientos",
        titulo: "¿Qué actividad es fundamental en la verificación de requerimientos?",
        opcionA: "Pruebas de estrés",
        opcionB: "Revisiones técnicas",
        opcionC: "Estimación de costos",
        opcionD: "Implementación de código",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "diseno",
        titulo: "¿Cuál es una recomendación clave en el diseño de un sistema para asegurar su mantenibilidad?",
        opcionA: "Usar únicamente diseño arquitectónico",
        opcionB: "Evitar la separación de responsabilidades",
        opcionC: "Fomentar la simplicidad y modularidad",
        opcionD: "Priorizar el diseño detallado desde el inicio",
        correcta: "c"
    },
    {
        id: 12,
        categoria: "diseno",
        titulo: "¿Qué tipo de modelo representa los conceptos y relaciones del negocio en un sistema?",
        opcionA: "Modelo de dominio",
        opcionB: "Modelo de datos",
        opcionC: "Modelo arquitectónico",
        opcionD: "Modelo de clases",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "diseno",
        titulo: "¿Qué diagrama muestra la interacción entre objetos en un flujo de mensajes?",
        opcionA: "Diagrama de clases",
        opcionB: "Diagrama de secuencia",
        opcionC: "Diagrama de dominio",
        opcionD: "Diagrama de flujo de datos",
        correcta: "b"
    },
    {
        id: 14,
        categoria: "diseno",
        titulo: "¿Cuál de los siguientes es un tipo de diseño enfocado en identificar y relacionar objetos?",
        opcionA: "Diseño arquitectónico",
        opcionB: "Diseño detallado",
        opcionC: "Diseño orientado a objetos",
        opcionD: "Diseño modular",
        correcta: "c"
    },
    {
        id: 15,
        categoria: "diseno",
        titulo: "¿Qué diagrama se utiliza para representar las funcionalidades del sistema para el usuario?",
        opcionA: "Diagrama de clases",
        opcionB: "Diagrama de secuencia",
        opcionC: "Diagrama de casos de uso",
        opcionD: "Diagrama de flujo",
        correcta: "c"
    },
    {
        id: 16,
        categoria: "factores",
        titulo: "¿Qué técnica se usa para estimar tiempos y recursos en el desarrollo de software?",
        opcionA: "JIRA",
        opcionB: "CMMI",
        opcionC: "PERT",
        opcionD: "Trazabilidad",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "factores",
        titulo: "¿Cuál de los siguientes es un riesgo común en el desarrollo de software?",
        opcionA: "Trazabilidad completa",
        opcionB: "Falta de requisitos claros",
        opcionC: "Automatización de pruebas",
        opcionD: "Modularidad excesiva",
        correcta: "b"
    },
    {
        id: 18,
        categoria: "factores",
        titulo: "¿Qué técnica de pruebas se utiliza en la etapa de estabilización?",
        opcionA: "Trazabilidad",
        opcionB: "Prueba de regresión",
        opcionC: "Estimación de Puntos de Función",
        opcionD: "Modelo CMMI",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "factores",
        titulo: "¿Qué ayuda a identificar y priorizar riesgos en un proyecto?",
        opcionA: "PERT",
        opcionB: "Trazabilidad",
        opcionC: "Matriz de riesgos",
        opcionD: "JIRA",
        correcta: "c"
    },
    {
        id: 20,
        categoria: "factores",
        titulo: "¿Qué herramienta es útil para la trazabilidad en proyectos de software?",
        opcionA: "SonarQube",
        opcionB: "Selenium",
        opcionC: "Azure DevOps",
        opcionD: "CMMI",
        correcta: "c"
    },
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 4){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})