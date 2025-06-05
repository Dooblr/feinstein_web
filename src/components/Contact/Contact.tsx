import React, { useState } from "react"
import "./Contact.scss"
import toast, { Toaster } from "react-hot-toast"
import { FaPhone, FaEnvelope, FaUser, FaProjectDiagram } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeInContainer, fadeInItem } from "../../utils/animations"

const Contact: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")

  // Submit handler
  const submitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")

    // Collect form data
    const form = event.currentTarget
    const formData = new FormData(form)

    // Show toast notification for submission start
    toast.loading("Submitting your message...", { id: "form-submit" })

    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/xgvewdwr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (response.ok) {
        setStatus("success")
        form.reset() // Clear form after successful submission

        // Show success toast and update status
        toast.success(
          "Thank you for your message! We'll get back to you soon.",
          { id: "form-submit" }
        )
      } else {
        throw new Error("Form submission failed.")
      }
    } catch (error) {
      setStatus("error")

      // Show error toast and update status
      toast.error(
        "Sorry, there was a problem submitting your form. Please try again later.",
        { id: "form-submit" }
      )
    } finally {
      // Reset status to idle after submission is handled
      setStatus("idle")
    }
  }

  return (
    <section className="contact-section">
      <Toaster position="top-center" reverseOrder={false} />

      <h2>Contact</h2>
      
      <motion.div 
        className="contact-content"
        variants={fadeInContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="contact-main">
          <motion.div 
            className="contact-info"
            variants={fadeInItem}
          >
            <div className="contact-methods">
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <a className="contact-link" href="tel:+18587741024">
                    (858) 774-1024
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a className="contact-link" href="mailto:DanielRonFeinstein@gmail.com">
                    DanielRonFeinstein@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submitContactForm}
            id="contact-form"
            variants={fadeInItem}
          >
            <div className="form-header">
              <h4>Send a Message</h4>
            </div>
            <div className="form-grid">
              <div className="field-container">
                <label htmlFor="name">
                  <FaUser className="field-icon" />
                  Name
                </label>
                <input id="name" name="name" required />
              </div>
              <div className="field-container">
                <label htmlFor="email">
                  <FaEnvelope className="field-icon" />
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="field-container field-full">
                <label htmlFor="description">
                  <FaProjectDiagram className="field-icon" />
                  Message
                </label>
                <textarea id="description" name="description" rows={4} />
              </div>
            </div>

            <button
              type="submit"
              id="submit-button"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <div className="spinner"></div>
              ) : (
                "Submit"
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
