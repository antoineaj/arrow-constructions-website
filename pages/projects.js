export default function Projects() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#B21F24' }}>Our Projects</h1>
      <p style={{ marginBottom: '40px', color: '#555' }}>
        Discover some of the projects we have successfully delivered across various sectors, including commercial, industrial, and residential developments.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {[1, 2, 3].map(project => (
          <div key={project} style={{ flex: '1 1 300px', backgroundColor: '#eaeaea', borderRadius: '8px', padding: '20px', textAlign: 'center', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ marginBottom: '10px', color: '#B21F24' }}>Project {project}</h3>
            <p style={{ color: '#555' }}>Placeholder for project description and image.</p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '40px', color: '#555', textAlign: 'center' }}>
        Real project photos and details coming soon.
      </p>
    </div>
  );
}
