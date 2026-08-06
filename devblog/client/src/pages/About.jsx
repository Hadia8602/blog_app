const About = () => {
  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ color: '#d6336c' }}> About Me</h1>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem',
          padding: '1rem',
          background: '#ffe4ec',
          borderRadius: '15px'
        }}>
          <h2 style={{ color: '#d6336c' }}>Hadia Ishaq</h2>
          <p style={{ fontSize: '1.1rem', color: '#4a1942' }}>
             Student at University of Gujrat
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#d6336c' }}> About Me</h3>
          <p style={{ lineHeight: '1.8' }}>
            Hello! I'm Hadia Ishaq, a passionate student at the University of Gujrat.
            I'm currently learning web development and building this blog as part of the 
            MERN Stack Development Workshop 2026.
          </p>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ color: '#d6336c' }}> My Goals</h3>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li> Become a Full Stack Developer</li>
            <li> Build amazing web applications</li>
            <li> Contribute to open source projects</li>
            <li> Keep learning and growing</li>
          </ul>
        </div>

        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, #ffe4ec 0%, #ffc1d6 100%)',
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#d6336c', fontWeight: 'bold' }}>
             Built with love using the MERN Stack
          </p>
          <p style={{ color: '#4a1942', marginTop: '0.5rem' }}>
            MERN Stack Development Workshop 2026
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
             Session 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;