"use strict";

class Invitation {

    constructor(displayElement){

        displayElement.append(`<img id="image">
                              <h1 id="title"></h1>
                              <p id="date"></p>
                              <p id="start"></p>
                              <p id="end"></p>
                              <p id="location"> </p>
                              <p id="description"></p>`);

        // Set properties on the class
        this.container = displayElement;
        this.imageEl = displayElement.children("img#image");
        this.titleEl = displayElement.children("h1#title");
        this.dateEl = displayElement.children("p#date");
        this.startEl = displayElement.children("p#start");
        this.endEl = displayElement.children("p#end");
        this.locationEl = displayElement.children("p#location");
        this.descriptionEl = displayElement.children("p#description");

    }

    changeTitle(newTitle){
        this.titleEl.text(newTitle);
    }

    changeDate(newDate) {
        this.dateEl.text("Join us on " + newDate);
    }

    changeStart(newStart) {
        this.startEl.text(newStart);
    }

    changeEnd(newEnd) {
        this.endEl.text(newEnd);
    }

    changeImage(newImage) {
        this.imageEl.attr("src", newImage);
    }

    changeFont(newFont) {
        this.container.css("font-family", newFont);
    }

    changeLocation(location) {
        this.locationEl.text(location);

    }

    changeDescription(description) {
        this.descriptionEl.text(description);

    }

    changeBackgroundColor(color) {
        this.container.css("background-color", color);
    }
}   



// PART 2:

// Create your invitation object
let invitationElement = $("#invite-display");
let invite = new Invitation(invitationElement);


$(".color-btn").on('click', function(){
    let bgColor = $(this).data("color");
    invite.changeBackgroundColor(bgColor);
    })

// $ indicating jquery, 
// calling on the class color-btn 
// .on indicating event listener ('click' indicating click, calling anon func)
// in anon funct: set bgColor to "key"(which is "color") of "data" (see html) 
// "(this) designates actual button being clicked"
// calling the changeBackgroundColor function on invite object with the bgcolor
// being passed in by what we set as var

$("#title-input").on('keyup',  function(){
    let title = $(this).text("input");
    invite.changeTitle(title);
})

// come back to more instances (below) later
// let invitationCopy = $("#invite-display");
// let inviteCopy = new Invitation(invitationCopy)
// Add event listeners
