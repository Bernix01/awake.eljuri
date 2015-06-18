var score = [0, 0, 0];
var questions = [
    {
        index:1,
        question:"asdasd",
        options : [
            "23423",
            "dfsfxcv",
            "sdfsfsd"
        ]
    },
        {
            index:2,
        question:"xzcxzcz",
        options : [
            "23423",
            "dfsfxcv",
            "sdfsfsd"
        ]
    },
        {
            index:3,
        question:"qweqwe",
        options : [
            "23423",
            "dfsfxcv",
            "sdfsfsd"
        ]
    }
];
var app;
app = angular.module("myApp", []);
app.controller("mainController", function() {
    this.active = 1;
    this.scores = score;
    this.isSet = function(index){
        return index === this.active;
    };
    this.questions = questions;
    this.gotoNext = function(){
        console.log("click");
        console.log(questions.length);
        console.log(this.active);
        if(this.active<questions.length)
            this.active++;
    }
});
