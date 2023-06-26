import * as init from './init.js';
import * as events from './events.js';

export function createSectionNote(text) {
    const section = document.createElement('section');
    section.classList.add('note-container');

    const bodySection = `
    <div class="note">
    <div class="note-toolkit">
        <button id="note-toolkit__edit">
            <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button id="note-toolkit__delete">
            <i class="fa-regular fa-trash-can"></i>
        </button>
    </div>
    <div class="note-text__container">
        <div class="note-text__readonly hidden">${(text ? text : '')}</div>
        <textarea autofocus id="note-text__info">${(text ? text : '')}</textarea>
    </div>
    </div>`

    section.innerHTML = bodySection;
    init.main.appendChild(section);

    setEditMode(text, section);

    return section;
}


export function saveLocalStorage() {
    const notesTextInfoEL = document.querySelectorAll('#note-text__info');
    const notes = [];

    notesTextInfoEL.forEach(element => notes.push(element.value));

    localStorage.setItem('notes', JSON.stringify(notes));
}

export function setFocus(section) {
    const noteTextInfoEL = section.querySelector('#note-text__info');
    noteTextInfoEL.focus();
    console.dir(noteTextInfoEL);
}

export function loadNotesLocalStorage() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    
    if (notes) {
        notes.forEach(note => {
            const section = createSectionNote(note);
            events.loadToolkitEvents(section);
        });
    }
}

function setEditMode(isEditMode, section) {
    if (isEditMode) {
        const noteTextInfoEL = section.querySelector('#note-text__info');
        const divTextInfo = section.querySelector('.note-text__readonly');
        divTextInfo.classList.toggle('hidden');
        noteTextInfoEL.classList.toggle('hidden');
    }
}