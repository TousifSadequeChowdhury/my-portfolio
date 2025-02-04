import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

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
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-wide">Let's Connect</h2>
          <p className="text-lg text-gray-300">Have a question or want to work together? Drop me a message!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              { icon: <FiMapPin />, title: "Location", value: "Road 17, Sector 11, Uttara, Dhaka, Bangladesh" },
              { icon: <FiPhone />, title: "Phone", value: "+880 1776860947" },
              { icon: <FiMail />, title: "Email", value: "tousifchowdhurybd@gmail.com" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/10 p-6 rounded-xl transition transform hover:scale-105">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-lg text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-white/10 p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <input 
                type="text" name="sender_name" 
                className="w-full px-6 py-4 bg-white/5 text-white rounded-xl border border-transparent focus:border-blue-500 focus:outline-none transition duration-300" 
                placeholder="Your Name" required 
              />
              <input 
                type="email" name="sender_email" 
                className="w-full px-6 py-4 bg-white/5 text-white rounded-xl border border-transparent focus:border-blue-500 focus:outline-none transition duration-300" 
                placeholder="Your Email" required 
              />
              <textarea 
                name="message" 
                className="w-full px-6 py-4 bg-white/5 text-white rounded-xl border border-transparent focus:border-blue-500 focus:outline-none transition duration-300" 
                placeholder="Your Message" rows="6" required
              ></textarea>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center space-x-3 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FiSend className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="colored" />
    </section>
  );
};

export default Contact;
