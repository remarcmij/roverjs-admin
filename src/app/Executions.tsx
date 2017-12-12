import * as React from 'react'
import { observer } from 'mobx-react'
import { executionsStore } from '../stores'
import Execution from '../components/Execution'

@observer
export default class Executions extends React.Component {

  render() {
    return (
      <div>
        {executionsStore.stats.map(execution => {
          return (
            <Execution
              key={execution.timestamp}
              execution={execution}
            />
          )
        })}
      </div>
    )
  }
}
