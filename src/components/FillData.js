import React from "react";
import {db} from "./Firebase"
import { doc, setDoc } from "firebase/firestore"; 


async function FillData(){
    const docIds = [
        "forms-1",
        "intro-html-1",
        "tables-1",
        "intro-html-2",
        "intro-html-3",
        "navbar1",
        "intro-html-4",
        "intro-html-5",
        "intro-html-6",
        "intro-html-7",
        "intro-html-8",
        "intro-html-9",
        "intro-html-10",
    ];
    const data = [{
        'topic': 'Forms Buttons Inputs',
        'prompt1': 'Make a',
        'prompt2': 'quiz that gives personalized recommendations',
        'prompt3': 'for a beauty or lifestyle brand',
        'requirements': [0, 1],
        'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
        'tag': [null]},
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Create a',
            'prompt2': 'personal introduction webpage',
            'prompt3': 'that includes your name, a short bio, and a list of your favorite hobbies',
            'requirements': [0, 1, 5, 6],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'HTML Tables',
            'prompt1': 'Design a',
            'prompt2': 'simple restaurant menu',
            'prompt3': 'for an Italian restaurant in your city',
            'requirements': [7, 8, 9],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Build a',
            'prompt2': 'top 10 webpage',
            'prompt3': 'that showcases your favorite movies, books, or songs',
            'requirements': [11, 4],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Create an',
            'prompt2': 'informational webpage',
            'prompt3': 'that covers an ethical dilemma, such as animal testing, privacy vs. security, or climate change',
            'requirements': [2],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Navigation Bar',
            'prompt1': 'Design a',
            'prompt2': 'simple blog layout',
            'prompt3': 'for a travel or lifestyle blogger',
            'requirements': [6],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Design a',
            'prompt2': 'fanpage',
            'prompt3': 'for your favorite sports team or athlete',
            'requirements': [11],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Create a',
            'prompt2': 'webpage',
            'prompt3': 'dedicated to a specific animal species',
            'requirements': [1, 11],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Develop a',
            'prompt2': 'travel webpage',
            'prompt3': 'showcasing a fictional travel destination',
            'requirements': [1, 2, 11],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Build a',
            'prompt2': 'simple online resume or CV',
            'prompt3': 'for applying to jobs',
            'requirements': [5],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Create a',
            'prompt2': 'webpage',
            'prompt3': 'presenting a collection of inspirational quotes',
            'requirements': [1, 11],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Design a',
            'prompt2': 'gallery webpage',
            'prompt3': 'featuring a famous artworks',
            'requirements': [2, 11],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
        {
            'topic': 'Intro to HTML',
            'prompt1': 'Develop a',
            'prompt2': 'event invitation webpage',
            'prompt3': 'for an upcoming party or gathering',
            'requirements': [1],
            'link': 'https://replit.com/join/wghdkiyezg-lingelizabeth',
            'tag': [null]
        },
     ]

    const reqDocIds = [
        "heading",
        "paragraph",
        "lineBreak",
        "numberedList",
        "bulletedList",
        "link",
        "table",
        "bold",
        "italic",
        "underline",
        "image",
    ];
    const reqData = [{
        "icon": "🎈",
        "name": "heading",
        "required": false,
        "id": 1,
        "link": "https://www.w3schools.com/tags/tag_hn.asp",
    }, 
    {
        "icon": "🎆",
        "name": "paragraph",
        "required": false,
        "id": 2,
        "link": "https://www.w3schools.com/tags/tag_p.asp",
    },
    {
        "icon": "🎇",
        "name": "line break",
        "required": false,
        "id": 3,
        "link": "https://www.w3schools.com/tags/tag_br.asp",
    },
    {
        "icon": "🧨",
        "name": "numbered list",
        "required": false,
        "id": 4,
        "link": "https://www.w3schools.com/tags/tag_ol.asp",
    },
    {
        "icon": "✨",
        "name": "bulleted list",
        "required": false,
        "id": 5,
        "link": "https://www.w3schools.com/tags/tag_ul.asp",
    },
    {
        "icon": "🎉",
        "name": "link",
        "required": false,
        "id": 6,
        "link": "https://www.w3schools.com/tags/tag_a.asp",
    },
    {
        "icon": "📊",
        "name": "table",
        "required": false,
        "id": 7,
        "link": "https://www.w3schools.com/tags/tag_table.asp",
    },
    {
        "icon": "💪",
        "name": "bold",
        "required": false,
        "id": 8,
        "link": "https://www.w3schools.com/tags/tag_b.asp",
    },
    {
        "icon": "🧊",
        "name": "italic",
        "required": false,
        "id": 9,
        "link": "https://www.w3schools.com/tags/tag_i.asp",
    },
    {
        "icon": "⚡",
        "name": "underline",
        "required": false,
        "id": 10,
        "link": "https://www.w3schools.com/tags/tag_u.asp",
    },
    {
        "icon": "📷",
        "name": "image",
        "required": false,
        "id": 11,
        "link": "https://www.w3schools.com/tags/tag_img.asp",
    }


]

    for(var i =0; i<data.length; i++){
        // Add a new document in collection "cities"
        await setDoc(doc(db, "practice", docIds[i]), data[i]);
        console.log("on doc #", i);
    }

}

export default FillData;