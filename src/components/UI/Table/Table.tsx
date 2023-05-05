import { ITable } from '../../../redux/types/types';

// Styles
import './Table.css';

const Table = ({ title, className, width, tableList, children }: ITable) => {
  return (
    <table
      className={`table ${className ? className : ''}`}
      style={{ maxWidth: width, width: '100%', margin: '0 auto' }}
    >
      <caption>{title}</caption>
      <thead>
        <tr className="table-head-row">
          {tableList &&
            tableList.map((tableTitle, i) => {
              return (
                <th className="table-head-title" key={i}>
                  {tableTitle}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
