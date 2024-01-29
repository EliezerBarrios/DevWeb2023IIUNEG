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
            <div class="contacts-container">
                <div class="contacts-header">
                Contactos
                </div>
                <div class="contacts-list">
                <div class="contact">Contacto 1</div>
                <div class="contact">Contacto 2</div>
                <div class="contact">Contacto 3</div>
                <div class="contact">Contacto 3</div>
                <div class="contact">Contacto 3</div>
                <div class="contact">Contacto 3</div>
                <div class="contact">Contacto 3</div>
                <div class="contact">Contacto 3</div>
                </div>
            </div>

            <div className="chat-container d-flex flex-column">
                {messages.map((message, index) => (
                    <div key={index} className={`d-flex ${message.fromUser ? "justify-content-end" : "justify-content-start"} mb-2`}>
                        <div className={`message alert ${message.fromUser ? "burbuColoryo p-3 mx-4" : "burbuColorOtro"}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
            

                <Form className="fixed-bottom justify-content-center mx-5 mb-3 p-3">
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