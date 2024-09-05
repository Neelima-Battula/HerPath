import React from 'react';

function Home() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-surprised-woman-looking-computer-screen-indoor-excited-girl-chatting-on-laptop-computer-in-slow-motion-close-up-happy-businesswoman-closing-face-in-front-of-notebook-in-home-office_hkeobgddl_thumbnail-1080_01.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div className="overlay" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '85px',
          marginBottom: '10px',
          marginLeft:'-800px',
          marginTop:'250px'
        }}>HERPATH</h1>
        <p style={{
          color: '#ffffff',
          fontSize: '18px',
          marginTop: 0,
          marginLeft:'-800px',
        }}>Embark on Your Journey to Explore Education and Careers</p>
      </div>
    </div>
  );
}

export default Home;
