// components
"use client";

import Circles from "../../components/Circles";
import { useState } from "react";

import { BsArrowRight } from "react-icons/Bs";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:babatundesegun123@gmail.com?Subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(name + "\n\n" + message)}`;
  };
  // const handleFormSubmit1 = (e) => {
  //   e.preventDefault();
  //   const subject = 'Your Subject'; // Set your subject
  //   const name = 'Your Name'; // Set your name
  //   const message = 'Your Message'; // Set your message

  //   window.location.href = `mailto:babatundesegun123@gmail.com?Subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(name + '\n\n' + message)}`;
  // };

  return (
    <div>
      <div className="container mx-auto py-32 text-center xl:text-left-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&#39;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full "
            onSubmit={handleFormSubmit}
          >
            {/* input group */}
            <div className=" flex md:flex-row md:gap-x-6 w-full flex-col gap-3 ">
              <input
                type="text"
                value={name}
                placeholder="name"
                className="input"
                onChange={handleName}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="email"
                className="input"
                onChange={handleEmail}
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              value={subject}
              className="input"
              onChange={handleSubject}
              required
            />

            {/* <textarea
              placeholder='mes'
              className='textarea'
              rows='10'
            ></textarea> */}
            <textarea
              placeholder="message"
              className="textarea"
              onChange={handleMessage}
              required
            ></textarea>

            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
