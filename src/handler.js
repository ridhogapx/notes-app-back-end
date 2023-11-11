const { nanoid }  = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (req, h) => {
  const { title, tags, body } = req.payload;
  
  const id = nanoid(16)
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    id, title, tags, body, createdAt, UpdatedAt,
  };

  notes.push(newNote);

  const res = h.response({
    status: "success",
    message: "Successfully adding note",
    data: {
      noteId: id, 
    },
  });
  
  res.code(201);
  return res

};

module.exports = { addNoteHandler };
