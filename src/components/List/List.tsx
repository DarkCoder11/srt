import { Fragment } from 'react'

import classNames from 'classnames'
import _map from 'lodash/map'

import { ListProps } from './List.props'

export function List<T>({ items, render, className }: ListProps<T>) {
  return (
    <ul className={classNames('tw-flex', className)}>
      {_map(items, (item, index) => (
        <Fragment key={index}>
          {render(item, index)}
        </Fragment>
      ))}
    </ul>
  )
}
