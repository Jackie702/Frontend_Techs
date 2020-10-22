import React from 'react'
import ReactDOM from 'react-dom'

// All React.Component has render() method,
// which describe what we want to render to the DOM
// all components should be capitalized
class Message extends React.Component {
    render(){
        return (
            <div style={style}>
                <h1>Hello Everyone</h1>
            </div>
        )
    }
}

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

ReactDOM.render(<Message />, document.getElementById('root'))