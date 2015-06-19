var score = [-1, -1, -1];
var questions = [
    {
        index:1,
        question:"¿Qué atributos debe tener el producto para ser un verdadero Scotch Whisky?",
        options : [
            "Que tenga falda escocesa.",
            "Producido, destilado y mezclado en Escocia.",
            "Producido en Ecuador."
        ]
    },
        {
            index:2,
        question:"¿De qué casa viene Black & White?",
        options : [
            "Johnnie Walker & Sons.",
            "Pruoducción Nacional.",
            "De la prestigiosa Casa Buchanan´s."
        ]
    },
        {
            index:3,
        question:"¿Cuál es la principal característica del logo de Black & White?",
        options : [
            "El Caminante.",
            "Los Perritos.",
            "El Gato y el Ratón."
        ]
    },
        {
            index:4,
        question:"¿Cuántos años de historia tiene Black & White?",
        options : [
            "45 años.",
            "Más de 100 años.",
            "55 años."
        ]
    }
];
var app;
app = angular.module("myApp", []);
app.controller("mainController", function() {
    this.active = 1;
    this.scores = score;
    this.isSet = function(index){
        console.log("index: "+index);
        return index === this.active;
    };
    this.questions = questions;
    this.gotoNext = function(){
        console.log("click");
        console.log("tamaño: "+questions.length);
        console.log("activo: "+this.active);
        if(this.active<questions.length)
            this.active++;
    }
});
