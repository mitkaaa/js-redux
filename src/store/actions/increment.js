import { INCREMENT } from "../types"

export default num => {
  return (dispatch, store) => {
    fetch("").then(response => {
      dispatch({
        type: INCREMENT,
        data: response.data
      })
    })

    setTimeout(
      () =>
        dispatch({
          type: INCREMENT,
          num
        }),
      1000
    )
  }
}
