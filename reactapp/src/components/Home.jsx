import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TableRow } from './TableRow';

export const Home = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => getData(), []);

  const getData = () => {
    axios.get(`http://localhost:8080/cities`).then((res) => {
      console.log('res data', res.data);
      setCities([...res.data]);
    });
  };

  const MainDiv = styled.div`
    margin: auto;
    text-align: center;
    border: 1px solid red;
    width: 80%;
    .subDiv {
      border: 1px solid black;
      width: 80%;
      justify-content: center;
      margin: auto;
    }
    table {
      border: 1px solid black;
      margin: auto;
      /* padding: 10px; */
    }
    th {
      border: 1px solid black;
      padding: 10px;
    }
    td {
      border: 1px solid black;
    }
  `;
  return (
    <MainDiv>
      <div className="subDiv">
        <h2>See and Analyze the data</h2>
        <table>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {cities.map((el) => (
            <TableRow key={el.id} data={el} />
          ))}
        </table>
      </div>
    </MainDiv>
  );
};
