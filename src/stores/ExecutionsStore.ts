import { observable } from 'mobx'

export interface Execution {
  chapter: { id: string, number: number }
  code: string
  id: string
  scores: number[]
  timestamp: string
  user: string
  expanded?: boolean
}

export default class ExecutionsStore {

  @observable
  stats: Execution[] = []

}