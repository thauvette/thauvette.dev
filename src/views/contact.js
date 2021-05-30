import React, { useContext } from 'react'
import { FormContext } from '../context/formContext'

import './contact.scss'

const Contact = () => {
  const {
    formIsComplete,
    formSubmissionState,
    formValues,
    handleInputChange,
    resetFormSubmissionState,
    submitForm,
    validateEmail,
    validateMessage,
  } = useContext(FormContext)

  if (formSubmissionState.success) {
    return (
      <div className="contact">
        <h3>Thanks!</h3>
        <p>Thanks for reaching out. I&apos;ll be in touch as soon as I can.</p>
      </div>
    )
  }

  if (formSubmissionState.error) {
    return (
      <div className="contact">
        <h3>Sorry.</h3>
        <p>
          Something went wrong. Please try to{' '}
          <a href="mailto:matt@thauvette.dev">email me.</a> Or
          <button
            onClick={resetFormSubmissionState}
            className="btn btn-hollow"
            type="button"
          >
            Try Again
          </button>
        </p>
      </div>
    )
  }

  return (
    <div className="contact">
      <form onSubmit={submitForm} netlify="true" netlify-honeypot="bot-field">
        <div className="input-container">
          <label
            className={formValues.email.value.length ? 'has-value' : ''}
            htmlFor="email"
          >
            <span>Your Email</span>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formValues.email.value}
              name="email"
              onChange={handleInputChange}
              onBlur={validateEmail}
            />
          </label>
          <span className="error">{formValues.email.error}</span>
        </div>
        <div className="input-container">
          <label
            className={formValues.message.value.length ? 'has-value' : ''}
            htmlFor="message"
          >
            <span>Message</span>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              onChange={handleInputChange}
              onBlur={validateMessage}
              value={formValues.message.value}
            />
          </label>
          <span className="error">{formValues.message.error}</span>
        </div>
        <input name="honey-pot" type="hidden" onChange={handleInputChange} />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!formIsComplete()}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
