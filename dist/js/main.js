

var score = [-1, -1, -1];
var questions = [
    {
        index: 1,
        question: "¿Qué atributos debe tener el producto para ser un verdadero Scotch Whisky?",
        options: [
            "Que tenga falda escocesa.",
            "Producido, destilado y mezclado en Escocia.",
            "Producido en Ecuador."
        ],
        right: 2
    },
    {
        index: 2,
        question: "¿De qué casa viene Black & White?",
        options: [
            "Johnnie Walker & Sons.",
            "Producción Nacional.",
            "De la prestigiosa Casa Buchanan´s."
        ],
        right: 3
    },
    {
        index: 3,
        question: "¿Cuál es la principal característica del logo de Black & White?",
        options: [
            "El Caminante.",
            "Los Perritos.",
            "El Gato y el Ratón."
        ],
        right: 2
    },
    {
        index: 4,
        question: "¿Cuántos años de historia tiene Black & White?",
        options: [
            "45 años.",
            "55 años.",
            "Más de 100 años."
        ],
        right: 3
    }
];
var app;
var uquestions = []
var chosen = [-1, -1, -1, -1]
var a = 0
while (a < 3) {
    var temp = Math.floor((Math.random() * 3))
    if (chosen[temp] != 0) {
        uquestions.push(questions[temp])
        chosen[temp] = 0
        a++
        console.log(temp)
    }
}
console.log(uquestions)
app = angular.module("myApp", ['ngTouch']);
app.controller("mainController", function ($scope, $timeout) {
    $scope.active = 1;
    this.scores = score;
    $scope.isSet = function (index) {
        return index === $scope.active;
    };
    $scope.isScoring = false
    this.questions = uquestions;
    $scope.gotoNext = function (q) {

        if ($scope.active < questions.length){
            console.log("next"+q)
            $scope.active= q+2;
        }
    };
    this.processAnswer = function (q, o) {
        if($scope.isScoring){
            console.log("not yet")
            return
        }
        $scope.isScoring = true
        var opt = $('#opt-' + q + '-' + o);
        console.log(q + "   " + o);
        console.log("right: " + this.questions[q].right)
        var ganar = document.getElementById("yeah");
        var perder = document.getElementById("noyeah");
        var ganar2 = document.getElementById("yeah2");
        var perder2 = document.getElementById("noyeah2");

        if (this.questions[q].right == o + 1) {
            if (this.scores[q] == -1)
                this.scores[q] = 1;
            var audio = document.getElementById("good");
            audio.play();
            opt.fadeOut(100).delay(500).removeClass("fa-square-o").addClass("fa-check-square-o").fadeIn();
            $timeout(function () {
                $scope.gotoNext(q);
                console.log("done")
                $scope.isScoring = false
                console.log($scope.isScoring)
            }, 1500);
            if (q === 2) {
                var rights = 0;
                for (a = 0; a < this.scores.length; a++) {
                    if (this.scores[a] == 1)
                        rights++;
                }
                console.log("rights: " + rights)
                if (rights >= 2) {
                    ganar.play();
                    $timeout(function () {
                        $('.container').addClass('win');
                    }, 3500)
                } else {
                        perder.play();
                    $timeout(function () {
                        $('.containerbig').addClass('win');
                    }, 3500)
                }
            }
        } else {
            if (this.scores[q] == -1)
                this.scores[q] = 0;
            var audio = document.getElementById("bad");
            audio.play();
            var rightopt = $('#opt-' + q + '-' + (this.questions[q].right - 1))
            console.log('opt-' + q + '-' + (this.questions[q].right - 1))
            $timeout(function () {
                rightopt.fadeOut(100).delay(500).removeClass("fa-square-o").addClass("fa-check-square-o").fadeIn();
                var audio3 = document.getElementById("good");
                audio3.play();
            }, 2500)
            $timeout(function () {
                $scope.gotoNext(q);
                console.log("done")
                $scope.isScoring = false
                console.log($scope.isScoring)
            }, 5000);
            opt.fadeOut(100).delay(500).removeClass("fa-square-o").addClass("fa-minus-square").fadeIn();
            if (q === 2) {
                var rights = 0;
                for (a = 0; a < this.scores.length; a++) {
                    if (this.scores[a] == 1)
                        rights++;
                }
                console.log("rights: " + rights)
                if (rights >= 2) {
                        ganar2.play();
                    $timeout(function () {
                        $('.container').addClass('win');
                    }, 5500)
                } else {
                        perder2.play();
                    $timeout(function () {
                        $('.containerbig').addClass('win');
                    }, 5500)
                }
            }
        }
        console.log(this.scores);

    }
});
