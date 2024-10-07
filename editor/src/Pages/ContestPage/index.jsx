import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ContestPage() {
  const navigate = useNavigate();
  const location = useLocation();
    const selectedContest = location.state?.selectedContest;

  const leaderboardData = [
    { name: 'User1', score: 100 },
    { name: 'User2', score: 80 },
    { name: 'User3', score: 70 },
    // ... more users
  ];

  const handleStart = () => {
    navigate('/editor');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', minHeight: '100vh' }}>
     
      <div style={{ backgroundColor: '#0c1526', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <h2 style={{ color: 'white' }}>CONTEST DETAILS</h2>
          
        </div>
        <div style={{ backgroundColor: '#4c5d7d', width: '80%', height: 200, borderRadius: 15,boxShadow: '0px 5px 7px rgba(180, 120, 255, 0.5)', border:'1px solid white'  }}>
        <div style={{padding:10,marginLeft:10,color:'white',fontSize:20}}>{selectedContest.description}</div>
        </div>
        <div style={{ justifyContent: 'center', display: 'flex',marginTop:30, }}>
          <h2 style={{ color: 'white' }}>PRIZES</h2>
          
        </div>
        <div style={{ backgroundColor: '#4c5d7d', width: '80%', height: 300, borderRadius: 15, marginTop:5,boxShadow: '0px 5px 7px rgba(180, 120, 255, 0.5)',border:'1px solid white' }}>
        <div style={{padding:10,marginLeft:10,color:'white',fontSize:20}}>{selectedContest.prizes}</div>
        </div>
      </div>

     
      <div style={{ backgroundColor: '#1a253b', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <h2 style={{ color: 'white' }}>LEADERBOARD</h2>
        </div>
        <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding: 5, width: '100%',listStyleType: 'none' }}>
          <li style={{ color: 'white', fontSize: '25px' }}>User</li>
          <li style={{ color: 'white', fontSize: '25px' }}>Score</li>
        </ul>
        {leaderboardData.map((user, index) => (
          <ul
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              boxShadow: '0px 3px 5px rgba(180, 120, 255, 0.5)',
              backgroundColor: '#4c5d7d',
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
              listStyleType: 'none'
            }}
          >
            <li style={{ color: 'white', fontSize: '18px' }}>{user.name}</li>
            <li style={{ color: 'white', fontSize: '18px' }}>{user.score}</li>
          </ul>
        ))}
        <div style={{ justifyContent: 'center', display: 'flex', marginTop: 'auto', marginBottom: 30 }}>
          <button
            onClick={handleStart}
            style={{
              backgroundColor: '#4c5d7d',
              width: '100%',
              height: 50,
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              boxShadow: '0px 3px 5px rgba(180, 120, 255, 0.5)',
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContestPage;
