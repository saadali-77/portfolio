"use client";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {useState} from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import Container from "@/app/components/UI/container";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState('');
  const { register, handleSubmit, reset } = useForm<FormData>();

const onSubmit = async (data: FormData) => {
  try {
    console.log("Step 1: Sending admin email...");

    const adminResponse = await emailjs.send(
      "saadali6991550@gmail.com",
       "template_y4f90tn",
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      "skjVBpD38YZ430VaD"
    );

    console.log("✅ Admin email sent:", adminResponse);

    console.log("Step 2: Sending auto reply...");

    const replyResponse = await emailjs.send(
      "saadali6991550@gmail.com", // use the same Service ID
      "template_r2xso8b",
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      "skjVBpD38YZ430VaD"
    );

    console.log("✅ Auto reply sent:", replyResponse);

    setStatus("Message sent successfully!");
    reset();
    // Hide the message after 2 seconds
setTimeout(() => {
  setStatus("");
}, 2000);

  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus("❌ Failed to send message.");
   
}
  
};

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base-content/70">
            Have an idea or opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-3xl p-8 shadow-xl"
          >
            <div className="group relative h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src="/about.png"
                alt="Saad Ali"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
    <div className="mt-8 space-y-5">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=saadali6991550@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
      <FaEnvelope className="text-primary text-lg" />
    </span>
    <span className="group-hover:underline">
      saadali6991550@gmail.com
    </span>
  </a>

  <a
    href="tel:+923164163429"
    className="group flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
      <FaPhoneAlt className="text-primary text-lg" />
    </span>
    <span className="group-hover:underline">
      +92 316 4163429
    </span>
  </a>
</div>


            <div className="mt-8 flex gap-4">
              <Link
                href="https://github.com/saadali-77"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-base-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/saadali77"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-base-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass glow-border rounded-3xl p-8 space-y-5 shadow-xl"
          >
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your Name"
              className="input w-full border-base-300 bg-base-100/40 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email"
              className="input w-full border-base-300 bg-base-100/40 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              className="input w-full border-base-300 bg-base-100/40 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />

            <textarea
              {...register("message", { required: true })}
              rows={6}
              placeholder="Your Message"
              className="textarea w-full border-base-300 bg-base-100/40 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
{status && (
  <p className="mb-2 text-center text-green-500">
    {status}
  </p>
)}


          <button
  type="submit"
  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40 active:scale-[0.98]"
>
  <span className="relative z-10">Send Message</span>
  <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
</button>

          </motion.form>
        </div>
      </Container>
    </section>
  );
}