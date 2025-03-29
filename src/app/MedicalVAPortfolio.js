import * as React from "react";
import { FileText } from "lucide-react";

export default function MedicalVAPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <main className="max-w-5xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
          Roxanne N. Cabanilla, Virtual Medical Assistant
        </h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          Specializing in Insurance Medical Claim Review, Appeals & Denials, Itemized Billing Analysis, and Home Health & Skilled Nursing Facility Chart QA. Expert in Medicare and CMS Guidelines.
        </p>

        <div className="flex justify-center mb-6">
          <a
            href="/Roxanne_Cabanilla_Resume_Updated.pdf"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 inline-flex items-center gap-2"
            rel="noopener noreferrer"
          >
            ↓ Download Resume
          </a>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Core Specializations</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Insurance Claim Reviews & Appeals</li>
              <li>Denial Management & Resolution</li>
              <li>Itemized Medical Billing Review</li>
              <li>Home Health Chart Audits</li>
              <li>Skilled Nursing QA Evaluations</li>
              <li>Medicare & CMS Compliance</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Professional Edge</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>9+ Years in Nursing & Healthcare QA</li>
              <li>Team Leadership & Remote Oversight</li>
              <li>Skilled in UB-04 Review & CMS Compliance</li>
              <li>QA-Focused, HIPAA Certified Professional</li>
              <li>Proven Track Record in Home Health & Utilization Review</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
            <p className="text-gray-700 mb-2">
              "Roxanne's precision in claim reviews has significantly improved our appeal win rates. Her knowledge of Medicare policies is unmatched."
            </p>
            <p className="text-gray-700 italic text-right">– Director, Home Health Agency</p>
          </div>
        </section>

        <section className="mb-10">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Work Samples</h2>
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-center gap-3">
                <FileText className="text-blue-600" />
                <a
                  href="/sampleRedacted.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Sample Redacted Claim Review (PDF)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="text-blue-600" />
                <a
                  href="/gj1_merged.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Inpatient Billing Audit Report (PDF)
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Blog & Insights</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><a href="#" className="text-blue-700 hover:underline">Understanding CMS Guidelines for Home Health</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">How to Effectively Appeal Medical Claim Denials</a></li>
              <li><a href="#" className="text-blue-700 hover:underline">Top 5 Billing Errors in SNF Documentation</a></li>
            </ul>
          </div>
        </section>

        <section className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-700 mb-4">
            Ready to streamline your insurance processes and ensure compliance? Let’s work together.
          </p>
          <form
            action="https://formspree.io/f/xwkgoygy"
            method="POST"
            className="max-w-md mx-auto text-left space-y-4"
          >
            <input type="text" name="name" placeholder="Your Name" className="w-full border rounded-xl px-4 py-2" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full border rounded-xl px-4 py-2" required />
            <textarea name="message" placeholder="Your Message" rows={4} className="w-full border rounded-xl px-4 py-2" required></textarea>
            <input type="hidden" name="_redirect" value="https://thankyoupage.com" />
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-xl">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

