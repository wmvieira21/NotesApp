import * as init from './init.js';
import * as util from './util.js';


export default function loadEvents() {
    init.addEventEL.addEventListener('click', () => {
        const section = util.createSectionNote();
        loadToolkitEvents(section);
        util.setFocus(section);
    });
}

export function loadToolkitEvents(section) {
    deleteToolkitEvent(section);
    editToolkitEvent(section);
    noteTextEventInput(section);
    //focusLostInput(section);
}

function deleteToolkitEvent(section) {
    const deleteEL = section.querySelector('#note-toolkit__delete');
    deleteEL.addEventListener('click', () => {
        section.remove();
        util.saveLocalStorage();
    });
}

function editToolkitEvent(section) {
    const editEL = section.querySelector('#note-toolkit__edit');
    const noteTextInfoEL = section.querySelector('#note-text__info');
    const divTextInfo = section.querySelector('.note-text__readonly');

    editEL.addEventListener('click', (e) => {
        divTextInfo.innerText = noteTextInfoEL.value;

        divTextInfo.classList.toggle('hidden');
        noteTextInfoEL.classList.toggle('hidden');
    });
}

function noteTextEventInput(section) {
    const noteTextInfoEL = section.querySelector('#note-text__info');

    noteTextInfoEL.addEventListener('input', (e) => {
        util.saveLocalStorage()
    });
}

// function focusLostInput(section) {
//     const noteTextInfoEL = section.querySelector('#note-text__info');
//     const divTextInfo = section.querySelector('.note-text__readonly');

//     noteTextInfoEL.addEventListener('focusout', () => {
//         divTextInfo.innerHTML = noteTextInfoEL.value;
//         divTextInfo.classList.remove('hidden');
//         noteTextInfoEL.classList.add('hidden');
//     });
// }
