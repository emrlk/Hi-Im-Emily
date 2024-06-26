
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "emilyraelouk",
      "template1",
      e.target,
      "JjC_Nnt4rUsjIsRtz"
    )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert('Thank you for reaching out! I will get back to you as soon as possible. (:');
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };  

  return (
    <div
  style={{
    backgroundImage:
      "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
    width: "80%",
    height: "96%",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  }}
>
      <div>
        <h2
          style={{ fontFamily: "Nature" }}
          className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["Reach out!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Body" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="First Name"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Last Name"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="example@gmail.com"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Hi!"
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              style={{ fontFamily: "Nature", fontSize: 24, letterSpacing: 3}}
              className="w-[100px] h-[50px] bg-primary-600 rounded-xl cursor-pointer hover:bg-primary-700"
              type="submit"
              value={!isSent ? 'Send' : 'Done!'}
              
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;