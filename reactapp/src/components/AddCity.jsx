import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
export const AddCity = () => {
  const [cArr, setCArr] = useState([]);
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    id: nanoid(),
    city: '',
    population: '',
    country: '',
  });

  const { id } = useParams();

  useEffect(() => {
    getCountries();
    if (id) {
      fetchCurrentData();
    }
  }, []);
  const fetchCurrentData = () => {
    axios.get(`http://localhost:8000/cities/${id}`).then((res) => {
      console.log(res.data);
      setData({ ...res });
    });
  };

  const getCountries = () => {
    axios.get(`http://localhost:8000/countries`).then((res) => {
      setCArr([...res.data]);
      //   console.log(cArr);
    });
  };

  //   const [text, setText] = useState("");
  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm({ ...form, [id]: value });
    // console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/cities`, form)
      .then(() => alert(`${form.city} has been added`))
      .then(() => window.location.reload());
  };
  return (
    <div>
      <h1>Add Cities</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id={'city'}
          // value={}
          onChange={(e) => handleChange(e)}
          placeholder="Enter a City"
          required
        />
        <input
          type="text"
          id={'population'}
          //   value={text}
          onChange={(e) => handleChange(e)}
          placeholder="Enter a Population"
          required
        />

        <select name="" id={'country'} onChange={(e) => handleChange(e)}>
          <option value="">Select</option>
          {cArr.map((el) => (
            <option value={el.country} key={el.id}>
              {el.country}
            </option>
          ))}
        </select>

        <input type="submit" value={'Save City'} />
      </form>
    </div>
  );
};
