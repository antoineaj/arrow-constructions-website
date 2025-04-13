export default function Contact() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#B21F24' }}>Contact Us</h1>
      <p style={{ marginBottom: '40px', color: '#555' }}>
        Reach out to our team today. We are ready to assist you with your project inquiries.
      </p>

      <form method="POST" action="https://formspree.io/f/YOUR-FORM-ID">
        <label style={{ display: 'block', marginBottom: '10px', color: '#222' }}>
          Name:
          <input type="text" name="name" required style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px', color: '#222' }}>
          Email:
          <input type="email" name="email" required style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px', color: '#222' }}>
          Message:
          <textarea name="message" required style={{ width: '100%', padding: '8px', marginTop: '5px', marginBottom: '15px', height: '120px' }} />
        </label>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#B21F24', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Send Message
        </button>
      </form>

      <p style={{ marginTop: '20px', color: '#777' }}>
        Alternatively, email us directly at <a href="mailto:info@arrowlb.com" style={{ color: '#B21F24' }}>info@arrowlb.com</a>
      </p>
    </div>
  );
}
