import React, { useContext } from 'react'
import { FormContext } from '../../context/formContext'
import { ArrowRight } from '../icons'
import * as styles from './contact.module.scss'

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

  function renderBody() {
    if (formSubmissionState.success) {
      return (
        <>
          <h3>Thanks!</h3>
          <p>
            Thanks for reaching out. I&apos;ll be in touch as soon as I can.
          </p>
        </>
      )
    }
    if (formSubmissionState.error) {
      return (
        <>
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
        </>
      )
    }
    return (
      <>
        <form onSubmit={submitForm} netlify="true" netlify-honeypot="bot-field">
          <div className={styles.InputContainer}>
            <label htmlFor="email">
              <p>Your Email</p>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formValues.email.value}
                name="email"
                onChange={handleInputChange}
                onBlur={validateEmail}
              />
            </label>
            <span className={styles.ErrorMessage}>
              {formValues.email.error}
            </span>
          </div>
          <div className={styles.InputContainer}>
            <label htmlFor="message">
              <p>Message</p>
              <textarea
                id="message"
                placeholder="Please write your comment here..."
                name="message"
                onChange={handleInputChange}
                onBlur={validateMessage}
                value={formValues.message.value}
              />
            </label>
            <span className="error">{formValues.message.error}</span>
          </div>
          <input name="honey-pot" type="hidden" onChange={handleInputChange} />
          <div className="submit-container">
            <button
              className={`${styles.SubmitButton} btn btn-primary`}
              type="submit"
              disabled={!formIsComplete()}
            >
              <div className={styles.SubmitButtonInner}>
                <p>Submit</p>
                <ArrowRight />
              </div>
            </button>
          </div>
        </form>
      </>
    )
  }

  return <div className={styles.Contact}>{renderBody()}</div>
}

export default Contact
