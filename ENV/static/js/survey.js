const ul_1 = document.querySelector(".option1")
const ul_2 = document.querySelector(".option2")
const ul_3 = document.querySelector(".option3")
const ul_4 = document.querySelector(".option4")
const ul_5 = document.querySelector(".option5")
const ul_6 = document.querySelector(".option6")
const ul_7 = document.querySelector(".option7")
const ul_8 = document.querySelector(".option8")


const q1 = document.querySelector(".q1")
const q2 = document.querySelector(".q2")
const q3 = document.querySelector(".q3")
const q4 = document.querySelector(".q4")
const q5 = document.querySelector(".q5")
const q6 = document.querySelector(".q6")
const q7 = document.querySelector(".q7")
const q8 = document.querySelector(".q8")


const survey = document.querySelector(".survey")
const end = document.querySelector(".end")

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var trash = 0
var water = 0
var co2 = 0
var energy = 0


// first question
ul_1.addEventListener("click", function() {
   
    var ul = document.getElementById("q1")
    ul.onclick = function(event){
        var target = getEventTarget(event)
        switch(target.innerHTML) {
            case 'Less than 5 minutes':
                water += 1;
                break;
            case '5-10 minutes':
                water += 2;
                break;
            case '10-30 minutes':
                water += 3;
                break;
            case 'More than 30 minutes':
                water += 4;
                break;
        } 
    }

    q1.style.display = "none"
    q2.style.display = "block"
})


// second question
ul_2.addEventListener("click", function() {
    
    var ul = document.getElementById("q2")
    ul.onclick = function(event){
        var target = getEventTarget(event)
        switch(target.innerHTML) {
            case 'Walking or Bike':
                co2 += 1;
                break;
            case 'Public Transportation':
                co2 += 2;
                break;
            case 'A Personal Electric Vehicle':
                co2 += 2;
                break;
            case 'A Personal Motor Vehicle':
                co2 += 4;   
                break;
        } 
    }

    q2.style.display = "none"
    q3.style.display = "block"
})


// third question
ul_3.addEventListener("click", function() {
   
    var ul = document.getElementById("q3")
    ul.onclick = function(event){
        var target = getEventTarget(event)
        switch(target.innerHTML) {
            case 'Less than 10 miles':
                co2 += 1;
                break;
            case '10-30 miles':
                co2 += 2;
                break;
            case 'More than 30 miles':
                co2 += 3;
                break;
            case 'I did not ride in a personal motor vehicle':
                co2 += 0;
                break;
        } 
    }
    q3.style.display = "none"
    q4.style.display = "block"
})


// fourth question
ul_4.addEventListener("click", function() {
   
    var ul = document.getElementById("q4")
    ul.onclick = function(event){
        var target = getEventTarget(event)
        switch(target.innerHTML) {
            case 'Yes':
                trash += 0;
                break;
            case 'No':
                trash += 4;
                break;
        } 
    }
    q4.style.display = "none"
    q5.style.display = "block"
})


// fifth question
ul_5.addEventListener("click", function() {
   
    var ul = document.getElementById("q5")
    ul.onclick = function(event){
        var target = getEventTarget(event)
        switch(target.innerHTML) {
            case 'Yes':
                energy += 0;
                break;
            case 'No':
                energy += 3;
                break;
        } 
    }
    q5.style.display = "none"
    q6.style.display = "block"
})

// sixth question
ul_6.addEventListener("click", function() {
   
    var ul = document.getElementById("q6")
    ul.onclick = function(event){
        var target = getEventTarget(event)
        switch(target.innerHTML) {
            case '1-3 flushes':
                water += 1;
                break;
            case '4-6 flushes':
                water += 2;
                break;
            case '6-10 flushes':
                water += 3;
                break;
            case 'More than 10 flushes':
                water += 4;
                break;
        } 
    }
    q6.style.display = "none"
    q7.style.display = "block"
})


//seventh question
ul_7.addEventListener("click", function() {
   
    var ul = document.getElementById("q7")
    ul.onclick = function(event){
        var target = getEventTarget(event)
        switch(target.innerHTML) {
             case 'Less than 65 degrees farenheit':
                energy += 4;
                break;
            case '65-75 degrees farenheit':
                energy += 2;
                break;
            case '75-80 degrees fareneheit':
                energy += 2;
                break;
            case 'More than 80 degrees fareneheit':
                energy += 1;
                break;
        } 
    }
    q7.style.display = "none"
    q8.style.display = "block"
})


// eighth
    ul_8.addEventListener("click", function() {

        var ul = document.getElementById("q8")
        ul.onclick = function(event){
            var target = getEventTarget(event)
            switch(target.innerHTML) {
                case 'Yes':
                    trash += 3;
                    break;
                case 'No':
                    trash += 0;
                    break;
            } 
            document.getElementById("trash").value = trash;
        }
        q8.style.display = "none"
        survey.style.display = "none"
        end.style.display = "block"
        
        document.getElementById("water").value = water;

        

        document.getElementById("co2").value = co2;
        
        document.getElementById("energy").value = energy;
        
    })