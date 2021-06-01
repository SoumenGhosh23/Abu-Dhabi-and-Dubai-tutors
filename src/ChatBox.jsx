// import React, {useEffect}from 'react';
// import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
// import 'react-chat-widget/lib/styles.css';
 
// import logo from './logo.svg';
 
// function ChatBox() {
//   useEffect(() => {
//     addResponseMessage('Welcome to this awesome chat!');
//   }, []);
 
//   const handleNewUserMessage = (newMessage) => {
//     console.log(`New message incoming! ${newMessage}`);
//     // Now send the message throught the backend API
//   }
 
  
//     return (
//       <>
//       <div className="App">
//         <Widget
//           handleNewUserMessage={handleNewUserMessage}
//           profileAvatar={logo}
//           title="My new awesome title"
//           subtitle="And my cool subtitle"
//         />
//       </div>
//       </>
//     );
  
// }
 
// export default ChatBox;




import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
 
import logo from './logo.svg';
 
class ChatBox extends Component {
  componentDidMount() {
    addResponseMessage("WE are feel happy to help you!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
 
  render() {
    return (
      <div className="chatbox">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          // profileAvatar={logo}
          title="Support team"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}
 
export default ChatBox;