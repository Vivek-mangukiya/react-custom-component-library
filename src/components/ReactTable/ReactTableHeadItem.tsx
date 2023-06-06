import { FunctionComponent } from 'react'
import { ReactTableHeadItemProps } from './ReactTableHeadItem.types'

export const ReactTableHeadItem: FunctionComponent<ReactTableHeadItemProps> = ({
  headerItem,
  tableHeaderTdClassName,
}) => {
  return (
    <td title={headerItem} className={tableHeaderTdClassName}>
      {headerItem}
    </td>
  )
}
