import { addNoteHandler, getNotesHandler } from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNotesHandler,
  },
];

export default routes;
