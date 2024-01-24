/*import React from "react";

function Chatbot() {
    return(
        
        <div>
            <h1>hola</h1>
            hello world
        </div>
    )
}

export default Chatbot*/

import React, { useState } from "react";
import { Button, Navbar, Nav } from 'react-bootstrap';

function Chatbot() {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Mi Proyecto React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Enlace</Nav.Link>
            </Nav>
            <Button variant="outline-success">Botón</Button>
          </Navbar.Collapse>
        </Navbar>
      );
}
export default Chatbot;
/*function Chatbot() {
  const [messages, setMessages] = useState([
    { user: "Bot", text: "Hola, ¿en qué puedo ayudarte?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { user: "User", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "auto" }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;
*/