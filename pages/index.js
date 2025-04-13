export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#f4f4f4', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#B21F24' }}>Powering Progress. Building Trust.</h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px', color: '#333' }}>
          Reliable electrical and mechanical solutions tailored for lasting impact.
        </p>
        <a href="/contact" style={{ padding: '12px 24px', backgroundColor: '#B21F24', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Get in Touch
        </a>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#222' }}>Our Services</h2>
        <p style={{ marginBottom: '40px', color: '#555' }}>Comprehensive electrical and mechanical contracting, from design to delivery.</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {[
            'Electrical Contracting',
            'Mechanical Contracting',
            'Engineering & Design Coordination',
            'Construction Management',
            'Facility Management & Maintenance',
            'Turnkey Solutions'
          ].map(service => (
            <div key={service} style={{ flex: '1 1 250px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '10px', color: '#B21F24' }}>{service}</h3>
              <p style={{ color: '#666' }}>High-quality, reliable services tailored to your project needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#222' }}>About Arrow Constructions</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: '#555' }}>
          Since 2012, Arrow Constructions has delivered high-quality MEP solutions across Lebanon, combining technical expertise with a commitment to safety and excellence.
        </p>
        <a href="/about" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#B21F24', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Learn More
        </a>
      </section>

      {/* Projects Showcase */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#222' }}>Our Projects</h2>
        <p style={{ marginBottom: '40px', color: '#555' }}>Delivering excellence across commercial, industrial, and residential developments.</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {[1, 2, 3].map(project => (
            <div key={project} style={{ flex: '1 1 300px', backgroundColor: '#eaeaea', height: '200px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p style={{ color: '#666' }}>Project {project} (Placeholder)</p>
            </div>
          ))}
        </div>
        <a href="/projects" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#B21F24', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          View All Projects
        </a>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '60px 20px', backgroundColor: '#B21F24', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Let’s Build Something Exceptional</h2>
        <p style={{ marginBottom: '30px' }}>Contact our team today to discuss your project requirements.</p>
        <a href="/contact" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#fff', color: '#B21F24', textDecoration: 'none', borderRadius: '5px' }}>
          Contact Us
        </a>
      </section>
    </div>
  );
}
