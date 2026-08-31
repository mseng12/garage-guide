import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // Validate each form field before showing the success message
  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      setFormMessage("Please enter your name.");
      return;
    }

    if (!email.includes("@")) {
      setFormMessage("Please enter a valid email.");
      return;
    }

    if (message.trim() === "") {
      setFormMessage("Please enter a message.");
      return;
    }

    setFormMessage("Message submitted successfully.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button type="submit">Submit</button>

      {formMessage && <p>{formMessage}</p>}
    </form>
  );
}

export default ContactForm;