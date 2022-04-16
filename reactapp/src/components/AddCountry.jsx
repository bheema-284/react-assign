import { useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
export const AddCountry = () => {
  //   const [form, setForm] = useState({
  //     id: "",
  //     country: "",
  //   });
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/countries`, {
        id: nanoid(),
        country: text,
      })
      .then(() => alert(`${text} has been added`));
  };
  return (
    <div>
      <h1>Add Countries</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id={'country'}
          //   value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a Country"
        />
        <input type="submit" value={'Save Country'} />
      </form>
    </div>
  );
};
