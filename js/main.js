import loadEvents from "./events.js";
import * as util from './util.js';
(function () {
    util.loadNotesLocalStorage();
    loadEvents();
})();

