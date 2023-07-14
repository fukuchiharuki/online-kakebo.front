import { Fragment } from 'react'

type Props = {
  if: any
  children: any
}

function Mount(props: Props) {
  if (!props.if) return null
  const children =
    typeof props.children === 'function' ? props.children() : props.children
  return <Fragment>{children}</Fragment>
}

export default Mount
