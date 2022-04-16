import { Link } from 'react-router-dom';

export const TableRow = ({ data }) => {
  return (
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
        <button>Delete</button>
      </td>
    </tr>
  );
};
