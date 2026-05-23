import React, { useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AmosGloria",
    icon: Github,
    detail: "@AmosGloria",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gloria-amos/",
    icon: Linkedin,
    detail: "gloria-amos",
  },
  {
    label: "Email",
    href: "mailto:amoskesegloria@gmail.com",
    icon: Mail,
    detail: "amoskesegloria@gmail.com",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:gloriaamos@example.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full bg-transparent border border-gray-300 dark:border-gray-600 px-4 py-3 text-[13px] outline-none focus:border-purple-400 dark:focus:border-[#C778DD] transition-colors placeholder-gray-400 dark:placeholder-gray-500";

  return (
    <section className="px-8 md:px-26 py-16 flex flex-col gap-14">
      <div>
        <h2 className="font-black text-[28px] flex items-center gap-3">
          <span className="dark:text-[#C778DD] text-[#6E11B0]">#</span>contact
        </h2>
        <div className="mt-1 w-20 h-0.5 bg-purple-400 dark:bg-[#C778DD]" />
      </div>

      <div className="flex flex-col lg:flex-row gap-14 items-start">
        <div className="flex flex-col gap-6 max-w-sm">
          <p className="text-[14px] leading-relaxed opacity-80">
            I'm currently open to new opportunities. Whether you have a project in
            mind, a question, or just want to say hi — my inbox is always open!
          </p>

          <div className="flex flex-col gap-4">
            {socials.map(({ label, href, icon: Icon, detail }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-2 border border-gray-300 dark:border-gray-600 group-hover:border-purple-400 dark:group-hover:border-[#C778DD] transition-colors">
                  <Icon size={18} className="group-hover:dark:text-[#C778DD] group-hover:text-[#6E11B0] transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-[13px]">{label}</p>
                  <p className="text-[12px] opacity-60 font-mono">{detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-lg border border-gray-300 dark:border-gray-600 p-8"
        >
          <h3 className="font-bold text-[15px] mb-1">Send a message</h3>

          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-purple-400 dark:border-[#C778DD] dark:text-[#C778DD] text-[#6E11B0] font-semibold text-[13px] hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors mt-1"
          >
            {sent ? (
              <>
                <CheckCircle size={15} /> Opening mail client…
              </>
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </button>
        </form>

      </div>

    </section>
  );
}
