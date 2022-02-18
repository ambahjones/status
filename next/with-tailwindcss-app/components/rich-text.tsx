// Work in progress tk

import React from 'react'
import createMarkup from '../utils/create'

export default function RichText({ attributes, children, id, style, tag }) {
  return React.createElement(tag, {
    ...attributes,
    id: id || null,
    dangerouslySetInnerHTML: createMarkup(children || ''),
    style: style,
  })
}

export interface RichTextProps {
  attributes: object
  children: string
  className: string
  dropCap: boolean
  id: string
  style: {
    backgroundColor: string
    color: string
    fontSize: string
  }
  tag: string
}

RichText.defaultProps = {
  dropCap: false,
  tag: 'div',
}
