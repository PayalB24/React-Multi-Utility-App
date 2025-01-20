import React, { useState } from 'react';
import './style.css';

export default function Counter(props) {
  const [teamACount, setTeamACount] = useState(0);
  const [teamBCount, setTeamBCount] = useState(0);

  const reset = () => {
    setTeamACount(0);
    setTeamBCount(0);
  };

  return (
    <div>
      <br />
      <h3 className="text-center">{props.cnthead}</h3>
      <table border={2} className="table-bordered text-center container">
        <thead>
          <tr>
            <th className="p-3">Team A</th>
            <th className="p-3">Team B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">{teamACount}</td>
            <td className="p-2">{teamBCount}</td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-success" onClick={() => setTeamACount(teamACount + 1)}>INCREMENT</button>
              <button className="btn btn-danger" onClick={() => setTeamACount(teamACount - 1)}>DECREMENT</button>
            </td>
            <td>
              <button className="btn btn-success" onClick={() => setTeamBCount(teamBCount + 1)}>INCREMENT</button>
              <button className="btn btn-danger" onClick={() => setTeamBCount(teamBCount - 1)}>DECREMENT</button>
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: 'center' }}>
              <button className="btn btn-warning" onClick={reset}>Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
