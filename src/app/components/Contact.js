export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-700 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 rounded"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 bg-gray-700 rounded"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }