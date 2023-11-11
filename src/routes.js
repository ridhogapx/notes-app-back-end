import { addNoteHandler } from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

export default routes;
