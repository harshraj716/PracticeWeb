"use client"

import { useState } from "react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, our software provides comprehensive file recovery capabilities for desktop systems. It can recover various types of deleted files including documents, images, videos, and more. The recovery process is simple and user-friendly.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "The software supports multiple file systems and can recover files from both internal and external storage devices. It uses advanced algorithms to ensure maximum recovery success.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Our software includes features like deep scan and quick scan options, allowing you to choose the most appropriate method for your situation. It's designed to recover files even after accidental deletion or formatting.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "The recovery process is safe and read-only, meaning it won't cause any additional damage to your files or system. You can preview files before recovery to ensure you're getting exactly what you need.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "We offer 24/7 technical support to assist you with any questions or issues during the recovery process. Our team is highly trained and ready to help you recover your important files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "We offer 24/7 technical support to assist you with any questions or issues during the recovery process. Our team is highly trained and ready to help you recover your important files.",
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "We offer 24/7 technical support to assist you with any questions or issues during the recovery process. Our team is highly trained and ready to help you recover your important files.",
    },
    
  ]

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5)

  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-[#FFA229] uppercase text-sm font-semibold tracking-wider">FAQ</span>
        <h2 className="text-3xl font-bold text-[#2D1D0C] mt-2">Frequent Ask Questions</h2>
      </div>

      <div className="space-y-4">
        {displayedFaqs.map((faq, index) => (
          <div key={index} className="relative overflow-hidden">
            {/* Gradient Border */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{
                background: "linear-gradient(to bottom, #FFA229 0%, #1C4670 100%)",
              }}
            />

            <div className="border rounded-lg shadow-sm bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {faqs.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Show {showAll ? "less" : "more"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

