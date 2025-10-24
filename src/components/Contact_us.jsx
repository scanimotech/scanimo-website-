import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import image from "../assets/Contactus.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState({ message: "", type: "" }); // type: 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse({ message: "", type: "" });

    try {
      const res = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponse({ message: data.message, type: "success" });
        // Reset form after success
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        // Clear checkbox
        document.getElementById("privacy").checked = false;
      } else {
        setResponse({ message: data.message, type: "error" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponse({
        message: "Unable to connect to server. Please try again!",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6 xl:px-6 lg:px-8 md:px-4 sm:px-6">
  <div className="bg-white rounded-3xl shadow-lg flex flex-col lg:flex-row max-w-[100%] sm:max-w-[92%] w-full overflow-hidden lg:items-stretch min-h-[600px]">

        {/* Left Form Section */}
        <div className="w-full lg:w-[60%] p-10 flex flex-col justify-between">


          <p className="text-orange-500 text-[22px] mb-2">Get in Touch</p>
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Let's Chat, Reach Out to Us
          </h2>
          <p className="text-gray-600 font-poppins mb-6">
            Have questions or feedback? We're here to help. Send us a message,
            and we'll respond within 24 hours.
          </p>

          <form
             className="flex flex-col justify-between space-y-4 h-full"
             onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isSubmitting}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isSubmitting}
            />

            <textarea
              name="message"
              placeholder="Leave us a message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
              disabled={isSubmitting}
            ></textarea>

            <div className="flex items-center space-x-2 ">
              <input 
                type="checkbox" 
                id="privacy" 
                className="w-4 h-4" 
                required 
                disabled={isSubmitting}
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                I agree to our friendly{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  privacy policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Response Message */}
          {response.message && (
            <div
              className={`mt-4 p-4 rounded-lg text-center ${
                response.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {response.message}
            </div>
          )}
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex w-full md:w-[40%] bg-blue-50 flex-col items-center justify-center p-8 space-y-6">

          <img
            src={image}
            alt="Contact illustration"
            className="rounded-2xl w-95 h-auto object-cover"
          />

          <div className="bg-white shadow-md rounded-2xl p-5 w-full max-w-sm space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <div>
                <p className="text-gray-700 font-medium">Email</p>
                <a 
                  href="mailto:techteam@kawrwh.com"
                  className="text-sm text-gray-600 hover:text-blue-600 transition"
                >
                  scanimo.tech@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600" />
              <div>
                <p className="text-gray-700 font-medium">Phone</p>
                <a 
                  href="tel:+025283249231"
                  className="text-sm text-gray-600 hover:text-blue-600 transition"
                >
                  (0252) 8324 9231
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;