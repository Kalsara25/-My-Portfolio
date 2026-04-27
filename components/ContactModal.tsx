"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const myForm = e.currentTarget
    const formData = new FormData(myForm)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          onClose()
        }, 3000)
      })
      .catch(() => {
        setIsSubmitting(false)
        alert("Failed to send message. Please try again.")
      })
  }

  const handleClose = () => {
    setIsSuccess(false)
    setIsSubmitting(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 relative">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={handleClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            /* UI එකේ curve එක හදන්න overflow-hidden සහ rounded-3xl චෙක් කරන්න */
            className="relative w-full max-w-lg overflow-hidden rounded-[24px] bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-2xl pointer-events-auto transform-gpu"
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors"
              aria-label="Close modal"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <h2 className="text-2xl font-semibold text-white mb-6">
              {isSuccess ? "Thank you!" : "Let's Work Together"}
            </h2>
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#5851FF]/20 text-[#5851FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p className="text-white/80">
                  Your message has been successfully sent. <br /> I will get back to you shortly!
                </p>
              </motion.div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-sm font-medium text-white/90">Full Name</label>
                  <input required type="text" id="fullName" name="fullName" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#5851FF]/50 focus:bg-white/10 transition-all" placeholder="Jane Doe" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-white/90">Email Address</label>
                  <input required type="email" id="email" name="email" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#5851FF]/50 focus:bg-white/10 transition-all" placeholder="jane@example.com" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-sm font-medium text-white/90">Service Selection</label>
                  <select required id="service" name="service" defaultValue="" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#5851FF]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#1a1a1a]">Select a service</option>
                    <option value="web-development" className="bg-[#1a1a1a]">Web Development</option>
                    <option value="ui-ux-design" className="bg-[#1a1a1a]">UI/UX Design</option>
                    <option value="branding" className="bg-[#1a1a1a]">Branding</option>
                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-white/90">Project Message</label>
                  <textarea required id="message" name="message" rows={4} className="bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#5851FF]/50 focus:bg-white/10 transition-all resize-none" placeholder="Tell me about your project context and goals..."></textarea>
                </div>


                <button type="submit" disabled={isSubmitting} className="mt-4 mb-2 w-full rounded-xl bg-[#5851FF] py-3.5 font-semibold text-white shadow-[0_8px_20px_-6px_rgba(88,81,255,0.6)] hover:bg-[#4a44d4] transition-all active:scale-[0.98] disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}