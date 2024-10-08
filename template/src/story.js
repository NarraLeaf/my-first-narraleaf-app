// src/story.ts

// First, import the necessary classes
import { Story, Scene, Character, Image, Menu } from "narraleaf-react";

// Create a new story
// The name of the story is human-readable and is used for debugging purposes
const story = new Story("My First NarraLeaf Story");

// Create a new scene
// The name of the scene should be unique and is used for debugging purposes
const scene1 = new Scene("scene1_hello_world");

// then let's create a "character" with image
const character1 = new Character("me");
const character1Image = new Image({
    src: "https://placehold.it/200x400",
    scale: 0.2
});

// Add actions to the scene
scene1.action([
    // Show the image for 1 second
    character1Image.show({
        duration: 1000,
    }),

    // Say something
    character1
        .say("Hello, world!")
        .say("This is my first NarraLeaf story.")
        .say("Start editing src/story.js and enjoy the journey!"),

    new Menu("Start the journey")
        .choose("Yes I will!", [
            character1.say("Great! Let's start the journey!")
        ])
        .choose("No, I'm going to check the documentation", [
            character1.say("Sure! Take your time!")
        ])
]);

// Add the scene to the story
story.entry(scene1);

export { story };