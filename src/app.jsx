import React from "react"
import { Provider, connect } from "react-redux"

import store, { actions } from "./store"

// BUTTON
const Button = props => {
  return (
    <button onClick={() => props.increment(props.value)}>
      {props.children}
    </button>
  )
}
const InputWithDispatch = connect(
  null,
  { increment: actions.increment }
)(Button)

// INPUT
const Input = props => {
  return <input type="text" value={props.increment} />
}
const mapStateToProps = state => {
  return {
    increment: state.increment
  }
}
const InputWithStore = connect(mapStateToProps)(Input)

export default () => {
  return (
    <Provider store={store}>
      <InputWithDispatch value={1}>+1</InputWithDispatch>
      <InputWithStore />
      <InputWithDispatch value={-1}>-1</InputWithDispatch>
    </Provider>
  )
}
