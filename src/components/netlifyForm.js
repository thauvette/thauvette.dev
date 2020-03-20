import React from 'react'

const NetlifyForm = () => (
  <div style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }}>
    <form name="Contact Form" netlify netlify-honeypot="bot-field" hidden>
      <input name="email" />
      <textarea name="message" />
    </form>
  </div>
)
export default NetlifyForm
