/**esto es similar al chatbot.jsx */

import React, { useState } from "react";
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import './Chat.css'

function Chat() {
    /*se crea una variable de estado llamada messages un array que contendrá los mensajes del chat
      setMessageses una funcion que lo actualiza. currentMessage representará el mensaje actual que
      el usuario está escribiendo en el cuadro de texto del chat*/
      const [messages, setMessages] = useState([]);
      const [currentMessage, setCurrentMessage] = useState("");
  
    /**cada vez que se produce un evento de cambio en el cuadro de texto, setCurrentMessage se llama 
     * con el nuevo valor del cuadro de texto, actualizando así el estado currentMessage con el contenido
     * del cuadro de texto en tiempo real. */
  
      const handleInputChange = (e) => {
          setCurrentMessage(e.target.value);
      };
  
      const handleEnterPress = (e) => {
        if (e.key === 'Enter' && currentMessage.trim() !== "") {
            e.preventDefault();
            setMessages([...messages, { text: currentMessage, fromUser: true }]);
            setCurrentMessage("");
        }
      };
  
      return (
        <div>
            <div className="contact-container d-flex flex-column">
                <ul className="list-group d-flex justify-content-start">
                    <li className="list-group-item">CONTACTO 1</li>
                    <li className="list-group-item">CONTACTO 2</li>
                    <li className="list-group-item">CONTACTO 3</li>
                    <li className="list-group-item">CONTACTO 4</li>
                    <li className="list-group-item">CONTACTO 5</li>
                </ul>
            </div>


            <div className="chat-container d-flex flex-column">
                {messages.map((message, index) => (
                    <div key={index} className={`d-flex ${message.fromUser ? "justify-content-end" : "justify-content-start"} mb-2`}>
                        <div className={`message alert ${message.fromUser ? "burbuColoryo p-3 mx-4" : "burbuColorOtro"}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
            

                <Form className="fixed-bottom mb-3 p-3">
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    placeholder="Escriba aqui"
                    value={currentMessage}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterPress}
                    />
                </Form.Group>
                </Form>

            </div>
        </div>
      );
  }
  
  export default Chat;