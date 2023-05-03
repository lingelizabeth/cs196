import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Button,
    Container,
    Component
  } from "reactstrap";

const DUMMY_CHAT_DATA = [
    {
      id: 1,
      senderId: "perborgen",
      text: "does anyone want to do HTML?"
    },
    {
      id: 2,
      senderId: "janedoe",
      text: "hello!"
    },
    {
        id: 3,
        senderId: "janedoe",
        text: "join my room!"
    },
    {
        id: 4,
        senderId: "janedoe",
        text: "we're starting in 10 minutes"
    },
    {
        id: 5,
        senderId: "perborgen",
        text: "ok thanks"
    },
    {
        id: 6,
        senderId: "perborgen",
        text: "intro to html right"
    }

  ]

class MessageList extends React.Component{
    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id} className="message">
               <div>
                 {message.senderId}
               </div>
               <div>
                 {message.text}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }

  class SendMessageForm extends React.Component{
    constructor() {
        super()
        this.state = {
          message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChange(e) {
        this.setState({
          message: e.target.value
        })
      }

      handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
          message: ''
        })
      }

    render() {
      return (
        <form
          className="send-message-form">
          <input
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Type your message and hit ENTER"
            type="text" />
        </form>
      )
    }
  }

function LobbyChat() {
    return(
        <>
        <div className="messages-root shadow p-3 mb-5 bg-white rounded">
            <h4>Lobby Chat</h4>
        <MessageList messages={DUMMY_CHAT_DATA}/>
            <SendMessageForm />

        </div>
        </>
    )
}

export default LobbyChat;