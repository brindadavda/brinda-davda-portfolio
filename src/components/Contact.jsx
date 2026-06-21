"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

import { Toaster, toast } from "react-hot-toast"
import Confetti from "react-confetti"
import ReCAPTCHA from "react-google-recaptcha"

import { styles } from "../styles"
import { EarthCanvas, Magnetic } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const formRef = useRef()
  const captchaRef = useRef()
  const [captchaToken, setCaptchaToken] = useState(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)
    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [])

  useEffect(() => {
    if (showConfetti) {
      document.body.style.overflowX = "hidden"
    } else {
      document.body.style.overflowX = ""
    }

    return () => {
      document.body.style.overflowX = ""
    }
  }, [showConfetti])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields before submitting. ⚠️", {
        duration: 3000,
        position: "bottom-right",
      })
      return
    }

    const sheetApiUrl = import.meta.env.VITE_SHEET_API_URL

    if (!sheetApiUrl) {
      // Local Mock Fallback Mode
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSuccess(true)
        console.log("Mock Spreadsheet Save Success: ", {
          Name: form.name,
          Email: form.email,
          Message: form.message,
          Date: new Date().toLocaleString()
        })
        setForm({ name: "", email: "", message: "" })
        toast.success("Message logged successfully! (Set VITE_SHEET_API_URL in .env to connect a real Google Sheet)", {
          duration: 6000,
          position: "bottom-right",
        })
        setShowConfetti(true)
        setCaptchaToken(null)
        if (captchaRef.current) {
          captchaRef.current.reset()
        }
        setTimeout(() => {
          setSuccess(false)
          setShowConfetti(false)
        }, 5000)
      }, 1000)
      return
    }

    setLoading(true)

    try {
      fetch(sheetApiUrl, {
        method: "POST",
        mode: "no-cors", // Crucial for Google Apps Script to bypass browser CORS redirection blocks
        headers: {
          "Content-Type": "text/plain", // Set to text/plain to prevent browser triggering preflight OPTIONS check
        },
        body: JSON.stringify({
          data: [
            {
              Name: form.name,
              Email: form.email,
              Message: form.message,
              Date: new Date().toLocaleString(),
            }
          ]
        })
      })
      .then(() => {
        // Since we are using no-cors, the response is opaque. 
        // If it resolved without throwing an error, the request has successfully reached Google Sheets!
        setLoading(false)
        setSuccess(true)
        setForm({ name: "", email: "", message: "" })
        toast.success("Message saved to spreadsheet successfully! 📊", {
          duration: 4000,
          position: "bottom-right",
        })
        setShowConfetti(true)
        setCaptchaToken(null)
        if (captchaRef.current) {
          captchaRef.current.reset()
        }
        setTimeout(() => {
          setSuccess(false)
          setShowConfetti(false)
        }, 5000)
      })
      .catch((error) => {
        setLoading(false)
        console.error("Spreadsheet Save Error: ", error)
        toast.error("Failed to save message to spreadsheet. Please check your API URL.", {
          duration: 4000,
          position: "bottom-right",
        })
      })
    } catch (err) {
      setLoading(false)
      console.error("Spreadsheet Sync Exception: ", err)
      toast.error(err?.message || "An unexpected error occurred. Please try again.", {
        duration: 4000,
        position: "bottom-right",
      })
    }
  }

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false)
  }, [])

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden no-select`}>
      <Toaster />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={windowDimension.width > 768 ? 200 : 100}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] glass-card sm:p-8 p-5 rounded-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <a
            href="tel:+917859855287"
            className="text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 hover:gap-3 group"
          >
            <FontAwesomeIcon icon={faPhone} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">+91 78598 55287</span>
          </a>
        </div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white-100 font-medium mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} className="text-purple-400" />
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="glass-input py-4 px-6 placeholder:text-secondary text-white-100 rounded-xl outline-none border-2 border-transparent font-medium transition-all duration-300 focus:ring-2 focus:ring-[var(--accent-1)] focus:border-[var(--accent-1)] hover:border-[var(--accent-1)]"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col">
                <span className="text-white-100 font-medium mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="glass-input py-4 px-6 placeholder:text-secondary text-white-100 rounded-xl outline-none border-2 border-transparent font-medium transition-all duration-300 focus:ring-2 focus:ring-[var(--accent-1)] focus:border-[var(--accent-1)] hover:border-[var(--accent-1)]"
                />
              </label>
            </div>
          </div>
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faComment} className="text-purple-400" />
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi Brinda, I’d love to discuss an iOS opportunity with you! 🚀"
              className="glass-input py-4 px-6 placeholder:text-secondary text-white-100 rounded-xl outline-none border-2 border-transparent font-medium transition-all duration-300 focus:ring-2 focus:ring-[var(--accent-1)] focus:border-[var(--accent-1)] hover:border-[var(--accent-1)] resize-none"
            />
          </label>

          {/* <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                theme="dark"
                ref={captchaRef}
              />
            </div>
          </div> */}
          {/* <span className="text-xs text-gray-400 text-center -mt-4">Protected by reCAPTCHA Enterprise. ⚔️</span> */}

          <Magnetic range={60} strength={0.35}>
            <button
              type="submit"
              className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
              disabled={loading}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin className="text-xl" />
              ) : success ? (
                <>
                  <span>Sent Successfully</span>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </>
              )}
            </button>
          </Magnetic>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
