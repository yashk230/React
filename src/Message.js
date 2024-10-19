import React, {Component} from "react";

class Message extends Component
{
    constructor()
    {
        super();
        this.state={
            message:'Welcome Visitors'
        }
    }

    changeMessage()
    {
        this.setState({
            message:'Thank you for subscribing'
        })
    }

    render()
    {
        return(
            <div>
                <h3>
                    {this.state.message}
                </h3><br/>

                <button onClick={()=>
                    this.changeMessage()
                }>
                    Subscribe
                </button>
            </div>
        )
    }
}

export default Message