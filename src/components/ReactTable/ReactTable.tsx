import { FunctionComponent } from 'react'
import { ReactTableProps } from './ReactTable.type'
import { ReactTableHeadItem } from './ReactTableHeadItem'

export const ReactTable: FunctionComponent<ReactTableProps> = ({
  tableClassName,
  tableHeaderItems,
  tableBodyItems,
  tableHeadClassName,
  tableHeadTrClassName,
  tableBodyClassName,
  tableHeaderTdClassName,
}) => {
  return (
    <table className={tableClassName}>
      <thead className={tableHeadClassName}>
        <tr className={tableHeadTrClassName}>
          {tableHeaderItems.map((headerItem: any, headerIndex: number) => {
            return (
              <ReactTableHeadItem
                key={headerIndex}
                headerItem={headerItem}
                tableHeaderTdClassName={tableHeaderTdClassName}
              />
            )
          })}
        </tr>
      </thead>
      <tbody className={tableBodyClassName}>{tableBodyItems}</tbody>
    </table>
  )
}
