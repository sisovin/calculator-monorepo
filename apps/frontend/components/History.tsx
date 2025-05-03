import React, { useState, useEffect } from 'react';

interface HistoryProps {
  history: { input1: number; input2: number; result: number }[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div>
      <h2>Calculation History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.input1} and {entry.input2} = {entry.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
