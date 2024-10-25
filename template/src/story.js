// src/story.ts

// First, import the necessary classes
import { Story, Scene, Character, Image, Menu, Word, Transform } from "narraleaf-react";

// Create a new story
// The name of the story is human-readable and is used for debugging purposes
const story = new Story("My First NarraLeaf Story");

// Create a new scene
// The name of the scene should be unique and is used for debugging purposes
const scene1 = new Scene("scene1_hello_world", {
    background: "#f0f0f0",
    invertY: true,
});

// then let's create a "character" with image
const character1 = new Character("me");
const character1Image = new Image({
    src: "https://placehold.co/300x600/orange/white",
    position: {
        xalign: 0.5,
        yalign: 0.5,
    },
    scale: 0.8
});

// Add actions to the scene
scene1.action([
    // Show the image for 1 second
    character1Image.show({
        duration: 1000,
    }),

    // apply an animation to the image
    character1Image.applyTransform(new Transform([
        {
            props: {
                position: {
                    yoffset: -30
                }
            },
            options: {
                duration: 300,
                easing: "easeInOut"
            }
        },
        {
            props: {
                position: {
                    yoffset: 0
                }
            },
            options: {
                duration: 300,
                easing: "easeInOut"
            }
        },
    ], {
        sync: false
    })),

    // Say something
    character1
        .say("Hello, world!")
        .say("This is my first NarraLeaf story.")
        .say([
            "Start editing ",
            new Word("src/story.js", {
                color: "blue",
                bold: true,
            }),
            " and enjoy the journey!"
        ]),

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