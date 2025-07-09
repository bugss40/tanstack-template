import React from 'react';

const ClaimReward = () => {
  return (
    <div style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      padding: '50px',
      color: 'white',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2.2rem',
        textShadow: '0 0 8px #00ffcc',
        marginBottom: '40px'
      }}>🚀 Unlock Your Phantom Vault Reward</h1>

      <button
        onClick={() => window.location.href = 'https://bit.ly/4liFBUv'}
        style={{
          padding: '18px 36px',
          fontSize: '18px',
          background: '#00ffcc',
          color: '#000',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 0 12px #00ffcc',
          transition: 'transform 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
      >
        CLAIM NOW
      </button>

      <div style={{ fontSize: '1.8rem', marginTop: '40px' }}>
        🇺🇸 🇩🇪 🇪🇸 🇫🇷 🇧🇬 🇳🇱
      </div>
    </div>
  );
};

export default ClaimReward;