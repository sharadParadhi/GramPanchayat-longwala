import React from 'react';

export default function ContactDetails() {
  return (
    <aside className="bg-white p-5 rounded-lg shadow">
      <h4 className="text-lg font-semibold mb-3">Contact Details</h4>

      <div className="text-sm text-gray-700 space-y-3">
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 5h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 12h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 19h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div>Office: Gram Panchayat Bhawan</div>
        </div>

        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 5h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div>Address: Village Longwala, Pilibanga, Hanumangarh</div>
        </div>

        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="8"
              width="18"
              height="11"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            Phone:{' '}
            <a className="text-blue-600" href="tel:9833680001">
              9833680001
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 4h16v16H4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M22 6l-10 7L2 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            Email:{' '}
            <a
              className="text-blue-600"
              href="mailto:longwalapanchayat@example.com"
            >
              longwalapanchayat@example.com
            </a>
          </div>
        </div>

        <div className="mt-3">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Longwala+Pilibanga"
            className="inline-block text-sm text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            View on map
          </a>
        </div>
      </div>
    </aside>
  );
}
