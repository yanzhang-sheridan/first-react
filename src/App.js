import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        chars : [],

    }
    removeChars = index=>{
        const {chars} = this.state
        this.setState({
            chars:chars.filter((character,i)=>{
                return i!==index
            })
        })

    }
    handleSubmit = character=>{
        this.setState({chars:[...this.state.chars,character]})
    }
    render(){
        const {chars} = this.state

        return (
            <div className="container">
                <Table charData={chars} removeChars={this.removeChars}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App