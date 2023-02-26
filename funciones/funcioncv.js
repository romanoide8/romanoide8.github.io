
/**  LOS VERDADERO Y FALSO CORRESPONDEN A : VERDADERO SI ESTA OCULTO EL CONTENIDO Y FALSO SI ESTA DESPLEGADO */

var cursos = false;
var formacion = false;
var experiencia = false;
var referencias = false;
var informatica = false;


const todoDescomprimido = () => {
    cursos = false;
    formacion = false;
    experiencia = false;
    referencias = false;
    informatica = false;
}

const todoComprimido = () => {

    cursos = true;
    formacion = true;
    experiencia = true;
    referencias = true;
    informatica = true;

}

const botonCursos = () => {

    botonUnificado('.contenidoCursos', cursos, 'botonCursos');
    cursos = !cursos;

}

const botonFormacion = () => {

    botonUnificado('.contenidoFormacion', formacion, 'botonFormacion');
    formacion = !formacion;

}

const botonExperiencia = () => {

    botonUnificado('.contenidoExperencia', experiencia, 'botonExperiencia');
    experiencia = !experiencia;

}

const botonReferencias = () => {

    botonUnificado('.contenidoReferencias', referencias, 'botonReferencias');
    referencias = !referencias;

}

const botonInformatica = () => {

    botonUnificado('.contenidoInformatica', informatica, 'botonInformatica');
    informatica = !informatica;
}


function botonResumen() {

    todoDescomprimido();
    botonCursos();
    botonExperiencia();
    botonFormacion();
    botonInformatica();
    botonReferencias();

}


function botonDespliegue() {

    todoComprimido();
    botonCursos();
    botonExperiencia();
    botonFormacion();
    botonInformatica();
    botonReferencias();

}


const botonUnificado = (clasecss, claselogica, idboton) => {
    const elements = document.querySelectorAll(clasecss);
    if (claselogica == false) {
        elements.forEach((element) => {
            element.classList.add('hidden');

        });
        document.getElementById(idboton).innerHTML = "Ver detalle"

    } else {

        elements.forEach((element) => {
            element.classList.remove('hidden');

        });

        document.getElementById(idboton).innerHTML = "Ocultar detalle";

    }
}


