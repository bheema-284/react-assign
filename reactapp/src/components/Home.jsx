import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TableRow } from './TableRow';
import { SortAndFilterButtons } from './SortAndFilterButtons';
export const Home = () => {
  const [cities, setCities] = useState([]);
  function handleSort(term) {
    if (term === 'ti') {
      let x = cities.sort((a, b) => a.id - b.id);
      console.log(x);
      setCities([...x]);
    }
    if (term === 'tg') {
      let x = cities.sort((a, b) => b.id - a.id);
      console.log(x);
      setCities([...x]);
    }
    if (term === 'pa') {
      let x = cities.sort((a, b) => a.population - b.population);
      console.log(x);
      setCities([...x]);
    }
    if (term === 'pd') {
      let x = cities.sort((a, b) => b.population - a.population);
      console.log(x);
      setCities([...x]);
    }
    if (term === 'td') {
      let x = cities.sort((a, b) => {
        if (a.city > b.city) return -1;
        if (a.city < b.city) return 1;
        return 0;
      });
      console.log(x);
      setCities([...x]);
    }
    if (term === 'ta') {
      let x = cities.sort((a, b) => {
        if (a.city > b.city) return 1;
        if (a.city < b.city) return -1;

        return 0;
      });
      console.log(x);
      setCities([...x]);
    }
  }
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
    <div className="homeContainer">
      <h2 style={{ textAlign: 'center' }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort} />
      <MainDiv>
        <div className="subDiv">
          <h2>List of Cities Population</h2>
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
    </div>
  );
};
