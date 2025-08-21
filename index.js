import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Droplet, Image as ImageIcon } from "lucide-react";
import Head from "next/head";

export default function WashByMarine() {
  const [formStatus, setFormStatus] = useState("idle");

  return (
    <div className="font-sans text-gray-800">
      <Head>
        <title>Wash by Marine | We Shine on Your Driveway</title>
        <meta
          name="description"
          content="Wash by Marine offers professional mobile car wash and detailing services, right on your driveway."
        />
      </Head>

      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Wash by Marine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl"
        >
          We shine on your driveway
        </motion.p>
      </section>

      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {["Exterior Wash", "Interior Detailing", "Full Package"].map((service, i) => (
          <div key={i} className="rounded-2xl shadow-lg bg-white p-6 text-center">
            <Droplet className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">Professional {service.toLowerCase()} for a spotless car.</p>
          </div>
        ))}
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-200 h-40 flex items-center justify-center rounded-lg">
              <ImageIcon className="w-10 h-10 text-gray-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Book a Service</h2>
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          onSubmit={() => setFormStatus("submitted")}
          className="grid gap-4 bg-white p-6 rounded-2xl shadow-lg"
        >
          <input type="text" name="name" placeholder="Your Name" required className="border p-3 rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" required className="border p-3 rounded-lg" />
          <input type="tel" name="phone" placeholder="Your Phone" required className="border p-3 rounded-lg" />
          <select name="service" required className="border p-3 rounded-lg">
            <option value="">Select a Service</option>
            <option>Exterior Wash</option>
            <option>Interior Detailing</option>
            <option>Full Package</option>
          </select>
          <textarea name="message" placeholder="Additional Details" rows="4" className="border p-3 rounded-lg"></textarea>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
            Submit
          </button>
          {formStatus === "submitted" && <p className="text-green-600 mt-2">Thanks! We’ll get back to you soon.</p>}
        </form>
      </section>

      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-4 flex justify-center items-center gap-2">
          <Phone className="w-5 h-5 text-blue-600" />
          <a href="tel:+1234567890" className="text-blue-700 hover:underline">+1 (234) 567-890</a>
        </p>
        <p className="flex justify-center items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600" />
          <a href="mailto:info@washbymarine.com" className="text-blue-700 hover:underline">info@washbymarine.com</a>
        </p>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Wash by Marine. All rights reserved.</p>
      </footer>
    </div>
  );
}
