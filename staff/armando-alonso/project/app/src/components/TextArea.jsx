import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import 'react-quill/dist/quill.snow.css';

export const Editor = ( { textcontainer, placeholderText }) => {
  const [textValue, setTextValue] = useState()
 

  useEffect(() => {
    textcontainer(textValue)
    },)

  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={textValue}
        onChange={setTextValue}
        placeholder={`Write something awesome...${placeholderText}`}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;

