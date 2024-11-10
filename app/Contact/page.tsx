// pages/contact.js
import React from "react";




export default function Contact() {
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Me</h1>
      <form  style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ margin: '10px 0' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
           
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
           
            style={{ padding: '10px', width: '100%' }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <textarea
            name="message"
            placeholder="Your Message"
           
            style={{ padding: '10px', width: '100%', height: '100px' }}
          />
        </div>
        <button className="padding: 10px 20px bottom-1 border-collapse border-white  bg" type="submit">Send Message</button>
      </form>
    </div>
  );
}
