import * as React from 'react';
import { renderToString } from 'react-dom/server';

const data = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
];

function X() {
  return (
    <div>
      <table>
        {data.map((row, ri) => (
          <tr key={`row${ri}`}>
            {row.map((cell, ci) => (
              <td key={`row${ri}-cell${ci}`}>
                {cell === 0 || (ri === 1 && ci === 1) ? 1 : 0}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

const content = renderToString(<X />);
const expected = '<div data-reactroot=""><table><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td></tr></table></div>';

console.log(content === expected);

export default X;