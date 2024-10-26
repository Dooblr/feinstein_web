import React, { useState } from "react"
import "./Contact.scss"
import toast, { Toaster } from "react-hot-toast"

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
    <section>
      <Toaster position="top-center" reverseOrder={false} />

      <h2>Contact</h2>
      <h3 className="contact-subheader">
        For a free quote, please call, email, or use the form below
      </h3>
      {/* Phone link with "tel:" protocol */}
      <a className="contact-link" href="tel:+18587741024">
        (858) 774-1024
      </a>
      {/* Email link with "mailto:" protocol */}
      <a className="contact-link" href="mailto:DanielRonFeinstein@gmail.com">
        DanielRonFeinstein@gmail.com
      </a>
      <form
        onSubmit={submitContactForm}
        id="contact-form"
        style={{ maxWidth: "90vw" }}
      >
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required />
        </div>
        <div className="field-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="janedoe@gmail.com"
          />
        </div>
        <div className="field-container">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(123) 456 - 7890"
          />
        </div>
        <div className="field-container">
          <label htmlFor="description">Project description</label>
          <textarea id="description" name="description" />
        </div>

        {/* Submit button with loading spinner */}
        <button
          type="submit"
          id="submit-button"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <div className="spinner"></div> // Spinner element
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </section>
  )
}

export default Contact
