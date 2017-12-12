import * as React from 'react'
import Paper from 'material-ui/Paper'
import { Execution } from '../stores'
import CodeBlock from '../components/CodeBlock'
import './Execution.css'

const style = {
  margin: 20,
  padding: 16,
}

interface Props {
  execution: Execution
}

function Execution(props: Props) {
  const { execution } = props
  return (
    <Paper key={execution.timestamp} zDepth={1} style={style}>
      <h2>Chapter: {execution.chapter.id}</h2>
      <h3>Level: {execution.id}</h3>
      <h3>User: {execution.user}</h3>
      <h3>Date: {new Date(execution.timestamp).toLocaleString()}</h3>
      <h3>Scores: {execution.scores.join(', ')}</h3>
      <CodeBlock code={execution.code} />
    </Paper>
  )
}

export default Execution