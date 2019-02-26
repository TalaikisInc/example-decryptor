import React, { PureComponent } from 'react'
import axios from 'axios'

import { save, get } from '../../store'
import './styles.css'

interface IRequest {
  message: any
}

interface State {
  input?: string,
  output?: string,
  error?: string,
  message?: string
}

export default class Input extends PureComponent<{}, State> {
  constructor(props: Object) {
    super(props)
    this.state = {
      input: '',
      output: '',
      error: ''
    }
  }

  handleChange = (event: any) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({ [name]: value })
    axios.post('/api', { message: value }).then((res: any) => {
      if (res.data.error) {
        this.setState({ error: res.data.error })
      } else if (res.data.message) {
        this.setState({ output: res.data.message, error: '' })
        save('item', res.data.message)
      }
    })
  }

  componentDidMount = () => {
    let output: any = get('item')
    output = typeof output === 'string' ? output : null
    this.setState({ output: output })
  }

  render() {
    return (
        <form>
          <div className='centered'>
            <input type='text' name='input' value={this.state.input} onChange={this.handleChange.bind(this)} />
            <h3>{ this.state.output }</h3>
            <h3>{ this.state.error }</h3>
          </div>
        </form>
      )
  }
}
