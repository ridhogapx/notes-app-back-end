import  { nanoid } from 'nanoid';
import notes from './notes.js'

export const addNoteHandler = (req, h) => {
  const { title, tags, body } = req.payload;
  
  const id = nanoid(16)
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    id, title, tags, body, createdAt, updatedAt,
  };

  notes.push(newNote);

  const res = h.response({
    status: 'success',
    message: 'Successfully adding note',
    data: {
      noteId: id, 
    },
  });
  
  res.code(201);
  return res

};

export const getNotesHandler = (req, h) => {
  return h.response({
    status: 'success',
    data: {
      notes,
    },
  });

};

export const getNoteByIdHandler = (req, h) => {
  const { id } = req.params;

  const note = notes.filter((n) => n.id == id)[0];

  if (note !== undefined) {
    return h.response({
      status: 'success',
        data: {
        note,
      },
    });
  }
  
  const res = h.response({
    status: 'failure',
    message: 'Note is not found',
  });
  
  res.code(404);
  
  return res;

}

export const updateNote = (req, h) => {
  const { id } = req.params;

  const { title, tags, body } = req.payload;
  const updatedAt = new Date().toISOString();

  const i = notes.findIndex((n) => note.id === id);

  notes[i] = {
    ...notes[i],
    title,
    tags,
    body, 
    updatedAt,
  };

  const res = h.response({
    status: 'success',
    message: 'Note is updated',
  });

  res.code(200);
  return res;
};
