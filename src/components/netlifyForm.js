import React from 'react';

const NetlifyForm = () => (
    <div style={{visibility: 'hidden', height: 0, overflow:'hidden'}}>
        <form data-netlify="true" name="Contact Form" method="POST">
            <input name="email" />
            <input name="message" />
        </form>
    </div>
)
export default NetlifyForm