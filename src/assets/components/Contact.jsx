import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_slc5cbu', 'template_h13m55n', form.current, {
        publicKey: 'UyA-_pl1225WMBH6j',
      })
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
          });
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-4">
      <div className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Get In Touch
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Name</label>
            <input
              type="text"
              name="sender_name"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/10 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              name="sender_email"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/10 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/10 rounded-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-bg-gray-900 to-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
