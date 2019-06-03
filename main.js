// var view = document.getElementById("view") this.attr('data-view');
var edit = document.getElementById("edit");
var remove = document.getElementById("remove");
var showAnswer = "toggle";


var questions = ["question 1", "question 2", "question 3"];
var answers = ["answer 1", "answer 2", "answer 3"];

// _________________________________________________________ //

function createNewFlashCard (addNewForm) {
$("#b1").on("click", function (addNewInput, addNewForm) {
  var f1 = questions[Math.floor(Math.random()*questions.length)] + " " + answers[Math.floor(Math.random()*answers.length)];
  $form = $("<form></form>"), $form.append('<input type="paragraph" value="Flash Card Form">'), $('body').append($form);
  var last_id = $('input[type="text"]:last').attr('id');
  last_id++;
  $('input[type="text"]:last').append('<input type="text" name="'+last_id+'" id="'+last_id+'">');
document.getElementById("f1").insertAdjacentHTML('beforebegin', f1, addNewForm, last_id, remove);
});
};

console.log(createNewFlashCard)

function addNewForm() {
$form = $("<form></form>"), $form.append('<input type="paragraph" value="Flash Card Form">'), $('body').append($form);
}

function addNewInput() {
    var last_id = $('input[type="text"]:last').attr('id');
    last_id++;
    $('input[type="text"]:last').append('<input type="text" name="'+last_id+'" id="'+last_id+'">');
}

function createDiv() {
    $("#view").on("click", function () {
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.color = "white";
div.innerHTML = "Hello";
    });
};

function createToggleButton() {
    $("#view").on("click", function () {
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.color = "white";
div.innerHTML = "Hello";
    });
};

function createEditButton() {
    $("#edit").on("click", function () {
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.color = "white";
div.innerHTML = "Hello";
    });
};

function createDeleteButton() {
    $("#remove").on("click", function () {
var div = document.createElement("div");
var body = document.createElement("body").innerHTML = "HI";
body.style.width
div.style.width = "100px";
div.style.height = "100px";
div.style.color = "white";
div.innerHTML = "Hello";
    });
};

console.log()


// create variables & functions then call them into one function to make the panel.

// When you click the button, have it create a... panel? Have the panel generate a class & id.
// Use class to style with CSS.
// withink the panel have the 3 dyamic buttons that link to the panel id. 


// make divs for each flashcard. In that div put the buttons. 
// innerHTML will allow you to dynamically change the input from the generic entry to what you want it to be.
// so you can have it start with question, and only display question. Then click function to display answer. 


createNewFlashCard();