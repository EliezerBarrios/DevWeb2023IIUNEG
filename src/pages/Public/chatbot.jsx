

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
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import './chat.css'


function Chatbot() {

  /*se crea una variable de estado llamada messages un array que contendrá los mensajes del chat
    setMessageses una funcion que lo actualiza. currentMessage representará el mensaje actual que
    el usuario está escribiendo en el cuadro de texto del chat*/
  const [messages, setMessages] = useState([
    { user: "Bot", text: "Hola, ¿en qué puedo ayudarte?" },
  ]);
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
      const newUserMessage = { user: "User", text: currentMessage };
      updateMessages(newUserMessage);
      setCurrentMessage("");
      handleBotResponse(currentMessage);
    }
  };
//aqui se generan las respuestas del bot
  const handleBotResponse = (userMessage) => {
    let botResponse = "";

    // Condición para manejar saludos
    if (userMessage.toLowerCase().includes("hola") || userMessage.toLowerCase().includes("hi")) {
      botResponse = "¡Hola! ¿Cómo puedo ayudarte?";
    }
    // Condición para manejar despedidas
    else if (userMessage.toLowerCase().includes("adios") || userMessage.toLowerCase().includes("adiós") || userMessage.toLowerCase().includes("bye") || userMessage.toLowerCase().includes("hasta luego")) {
      botResponse = "¡Hasta luego! Si tienes más preguntas, estoy aquí.";
    }
    // Condición para manejar agradecimientos
    else if (userMessage.toLowerCase().includes("gracias") || userMessage.toLowerCase().includes("bye") || userMessage.toLowerCase().includes("hasta luego")) {
      botResponse = "¡No hay porque! ¿Hay algo mas en lo que te pueda ayudar?";
    }
    //si el usuario olvido su contraseña
    else if ((userMessage.toLowerCase().includes("olvide")||userMessage.toLowerCase().includes("perdi")) && userMessage.toLowerCase().includes("contraseña")) {
      botResponse = "Bueno, no puedo decirte tu contraseña porque ni yo la se, pero pedo enviarte un correo con un enlace para que puedas crear una nueva";
    }
    else if ((userMessage.toLowerCase().includes("@") && userMessage.toLowerCase().includes(".com"))||userMessage.toLowerCase().includes("correo")) {
      botResponse = "Ok, revisa tu correo ya debio de llegar un enlace";
    }
    //si ocurrio una estafa o engaño
    else if (userMessage.toLowerCase().includes("estafado") || userMessage.toLowerCase().includes("estafa") || userMessage.toLowerCase().includes("engaño")|| userMessage.toLowerCase().includes("engañaron")) {
      botResponse = "¡Eso es terrible! mira, estos casos se deben enviar al siguiente email para que nuestros asesores puedan gestionar tu caso: unadireccion@botmail.com";
    }
    // Condición por defecto
    else {
      botResponse = generateBotResponse(userMessage);
    }

    const newBotMessage = { user: "Bot", text: botResponse };
    updateMessages(newBotMessage);
  };

  const generateBotResponse = (userMessage) => {
    return `Disculpa no entiendo: "${userMessage}". Aún estoy aprendiendo a responder a preguntas más complejas.`;
  };

  const updateMessages = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div>
      <h2>Hola, soy Chatbotsito</h2>
      <div className="chat-container d-flex flex-column">
        {messages.map((message, index) => (
          <div key={index} className={`d-flex ${message.user === "User" ? "user-message justify-content-end" : "bot-message justify-content-start"} mb-2`}>
            <div className={`message alert ${message.user === "User" ? "burbuColoryo p-3 mx-4" : "burbuColorOtro p-3 mx-4"}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <Form className="fixed-bottom mx-5 mb-3 p-3">
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