import * as React from 'react'
import './CodeBlock.css'

interface Props {
  code: string
}

function CodeBlock(props: Props) {

  const lines = props.code.split('\n')

  return (
    <div className="CodeBlock">
      {lines.map((line: string, index: number) => (
          <div key={index} className="CodeBlock--line">{line}</div>
      ))}
    </div>
  )
}

export default CodeBlock