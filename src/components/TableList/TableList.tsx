import { ITableItem } from '../../redux/types/types';
import Table from '../UI/Table/Table';

const TableList = ({ tableItems, tableList }: any) => {
  return (
    <Table title="Список заявок" tableList={tableList} width={'130'}>
      {tableItems &&
        tableItems.map((item: ITableItem) => {
          return (
            <tr className="table-body-item" key={item.id}>
              <td>
                <span className="table-body-title">
                  {item.id ? item.id : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.production ? item.production : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.shop ? item.shop : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.plot ? item.plot : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.floor ? item.floor : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.room ? item.room : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.date ? item.date : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.responseTime ? item.responseTime : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.employeeName ? item.employeeName : ''}
                </span>
              </td>
              <td>
                <span className="table-body-title">
                  {item.count ? item.count : ''}
                </span>
              </td>
            </tr>
          );
        })}
    </Table>
  );
};

export default TableList;
