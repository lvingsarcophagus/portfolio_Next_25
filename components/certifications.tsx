"use client"

import { useEffect } from "react"

const Certifications = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//cdn.credly.com/assets/utilities/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="fe39381c-e1d1-4f09-b184-75e5f52fa2b5"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </section>
  )
}

export default Certifications
