import { Link } from 'react-router-dom';
import axios from 'axios';
export const TableRow = ({ data }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/cities/${id}`);
  };

  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>{data.country}</td>
        <td>{data.city}</td>
        <td>{data.population}</td>
        <td>
          <button>
            <Link to={`/update-city/${data.id}`}>Edit</Link>
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              handleDelete(data.id);
            }}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
