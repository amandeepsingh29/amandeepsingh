import React from 'react';
    import { motion } from 'framer-motion';
    import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

    const contactInfo = [
      { icon: Mail, label: 'Email', value: 'contact@example.com', href: 'mailto:contact@example.com' },
      { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { icon: MapPin, label: 'Location', value: 'Patiala, Punjab, India' },
    ];

    const socialLinks = [
      { icon: Github, label: 'GitHub', href: 'https://github.com/amandeepsingh29' },
      { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
      { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    ];

    export default function Contact() {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto py-12 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-blue-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      );
    }
