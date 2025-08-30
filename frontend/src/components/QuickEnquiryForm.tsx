function QuickEnquiryForm() {
  return (
    <section className="bg-gray-50 py-10" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-6">Quick Enquiry</h3>
        <form className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Mobile No"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="border p-2 rounded md:col-span-3"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded md:col-span-3 hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default QuickEnquiryForm;
