import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Box } from "../Box";
import Button from "../Button";

const SelectedNote = ({ note, closeModal }) => {
  console.log("note", note);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [date, setDate] = useState(note.date);
  const [beginTime, setBeginTime] = useState(note.beginTime);

  return (
    <Box>
      <h2>Edit idea item</h2>
      <p>Created at {note.created}</p>
      <Button type="button" onClick={closeModal}>
        <AiOutlineClose />
      </Button>

      <form>
        <label>
          Title
          <input type="text" name="title" value={title} />
        </label>
        <label>
          Description
          <input type="text" name="description" value={description} />
        </label>
        <label>
          Date
          <input type="date" name="date" value={date} />
        </label>
        <label>
          Begin time
          <input type="time" name="beginTime" value={beginTime} />
        </label>
        <Button type="submit">Delete</Button>
        <Button type="submit">Save</Button>
      </form>
    </Box>
  );
};

export default SelectedNote;
