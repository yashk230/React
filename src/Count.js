import React, { Component } from "react";

class Count extends Component
{
    constructor()
    {
        super()
        {
            this.state={
                number:0
            }
        }
    }

    Increment()
    {
        this.setState({
            number: this.state.number + 1
        })
    }

    Decrement()
    {
        this.setState({
            number: this.state.number - 1
        })
    }

    render(){
        return(
            <div>
                <p>
                    {this.state.number}
                </p>

                <button onClick={()=> this.Increment()}>
                    +
                </button>

                <button onClick={()=> this.Decrement()}>
                    -
                </button>
            </div>
        )
    }
}

export default Count