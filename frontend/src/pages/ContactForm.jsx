/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import ContactMessage from "@components/ContactMessage";
import "./ContactForm.css";

export default function ContactForm() {
  const [isUserClick, setIsUserClick] = useState(false);

  return (
    <div className="contact">
      <form name="contact" method="post">
        <label htmlFor="name">Prénom, nom </label>
        <input
          id="name"
          type="texte"
          name="name"
          placeholder="Champ obligatoire"
        />

        <label htmlFor="email">Email </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Champ obligatoire"
        />

        <label htmlFor="objet">Objet</label>
        <input
          id="objet"
          type="objet"
          name="objet"
          placeholder="Champ obligatoire"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Ecrire votre message ici"
        />

        <button
          className="contactButton"
          type="submit"
          value="submit"
          onClick={() => setIsUserClick(true)}
        >
          Envoyer
        </button>
        {isUserClick && <ContactMessage />}
      </form>
    </div>
  );
}
