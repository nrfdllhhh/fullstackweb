export default function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="row">
        {/* Kolom kiri - Form */}
        <div className="col-md-7">
          <form className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* Kolom kanan - Info Kontak */}
        <div className="col-md-5 d-flex align-items-center">
          <div className="p-4">
            <h4 className="mb-3">Get in Touch</h4>
            <p><strong>📍 Address:</strong> Jakarta, Indonesia</p>
            <p><strong>📧 Email:</strong> example@email.com</p>
            <p><strong>📞 Phone:</strong> +62 812-3456-7890</p>
            <p>
              Feel free to reach out for any questions, collaborations, 
              or just to say hello 👋
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
