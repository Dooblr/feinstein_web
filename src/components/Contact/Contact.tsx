import React from "react"
import "./Contact.scss"

interface ContactSectionProps {
  submitContactForm: (event: React.FormEvent<HTMLFormElement>) => void
  handleSubmit: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const ContactSection: React.FC<ContactSectionProps> = ({
  submitContactForm,
  handleSubmit,
}) => {
  return (
    <section>
      <h2>Contact</h2>
      <form
        onSubmit={submitContactForm}
        id="contact-form"
        style={{ maxWidth: "90vw" }}
      >
        <div className="field-container">
          <label>Name</label>
          <input id="name" name="name" required />
        </div>
        <div className="field-container">
          <label>Email</label>
          <input id="email" name="email" required />
        </div>
        <div className="field-container">
          <label>Phone</label>
          <input id="phone" name="phone" type="tel" required/>
        </div>
        {/* Real submit button, hidden via CSS */}
        <button
          type="submit"
          id="submit-button"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactSection
