var weight;
var height;
var bmi;

function getWeight() {
    weight = document.getElementById('weight').value;
    if (weight < 0) {
        alert("Please enter a valid weight.");
        return;
    }
}

function getHeight() {
    if (height < 0) {
        alert("Please enter a valid height.");
        return;
    }
    height = document.getElementById('height').value;
}

function calcBMI() {
    bmi = weight * 703 / (height * height) ;
    document.getElementById('bmi').innerText = "Your BMI is " + bmi;
}

function calcHealthy() {
    if (bmi < 18.5) {
        document.getElementById('healthy').innerText = "Your BMI suggests that you are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById('healthy').innerText = "Your BMI suggests that you are a healthy weight.";
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById('healthy').innerText = "Your BMI suggests that you are overweight.";
    } else if (bmi >= 30){
        document.getElementById('healthy').innerText = "Your BMI suggests that you are obese.";
    } else {
        document.getElementById('healthy').innerText = "Your BMI has not yet been calculated.";
    }
}


var trackedFoods = [];

function trackCalories() {
 
    var foodName = document.getElementById('foodName').value;
    var calories = parseInt(document.getElementById('calories').value);

    if (!foodName || isNaN(calories) || calories <= 0) {
        alert("Please enter valid food name and calories.");
        return;
    }

    trackedFoods.push({ name: foodName, calories: calories });

    displayTrackedFoods();
}

function displayTrackedFoods() {
    var trackedList = document.getElementById('trackedList');
    trackedList.innerHTML = '';

    trackedFoods.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - ' + item.calories + ' calories';
        trackedList.appendChild(listItem);
    });
}