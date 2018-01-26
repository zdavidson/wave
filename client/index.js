import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        {/* The music starts here! */}
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
