import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ContestCard from '../../components/ContestCard';

function HomePage() {
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);
  
  const [selectedProblem, setSelectedProblem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "problems"));
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProblems(dataArray);
      } catch (error) {
        console.error('Error fetching problems:', error);
       
      }
    };

    fetchData();
  }, []);

  const handleProblemClick = (problem) => {
    setSelectedProblem(problem);
    navigate('/editor', { state: { selectedProblem:problem } });
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, width: 740, height: 800, backgroundColor: '#0c1526' }}>

        {/* Button for adding new problem */}
        <div style={{ display: 'flex', alignItems: 'center', height: '20px', marginTop:5 }}>
          <Link
            to="/new-problem"
            style={{
              color: 'white',
              fontSize: 30,
              textDecoration: 'none',
              fontStyle: 'bold',
              padding: 10,
              border: '2px solid white',
              width: 40,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            +
          </Link>
        </div>
        {/* Header for "Problem Sheet" */}
        <div style={{ marginTop: 40, justifyContent: 'center', display: 'flex',  }}>
          <h2 style={{ color: 'white' }}>PROBLEM SHEET</h2>
        </div>

        {/* Table for problems */}
        <table style={{ width: '100%', marginTop: 30 }}>
          <thead>
            <tr>
              <th style={styles.problemHeader}>Problem</th>
              <th style={styles.difficultyHeader}>Difficulty</th>
              <th style={styles.categoryHeader}>Category</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id}>
                <td style={styles.problemCell} onClick={() => handleProblemClick(problem)}>{problem.title}</td>
                <td style={styles.difficultyCell}>{problem.difficulty}</td>
                <td style={styles.categoryCell}>{problem.category}</td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
      <div style={{ backgroundColor: '#1a253b', width: 740, height: 800 }}>
        
        <div style={{ display: 'flex', alignItems: 'center', height: '20px', marginTop: 10 }}>
          <Link
            to="/new-contest"
            style={{
              color: 'white',
              fontSize: 30,
              textDecoration: 'none',
              fontStyle: 'bold',
              padding: 10,
              borderBottom: '2px solid white',
              borderRight: '2px solid white',
              width: 40,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            +
          </Link>
        </div>
       <ContestCard/>
      </div>
    </div>
  );
}

export default HomePage;

const styles = {
  list: {
    color: 'white',
    marginTop: 10,
    cursor: 'pointer',
  },
  problemHeader: {
    color: 'white',
    fontSize: 20,
    padding: '10px 0',
    borderRight: '1px solid white',
    textAlign: 'center'
  },
  difficultyHeader: {
    color: 'white',
    fontSize: 20,
    padding: '10px 0',
    borderRight: '1px solid white',
    textAlign: 'center'
  },
  categoryHeader: {
    color: 'white',
    fontSize: 20,
    padding: '10px 0',
    textAlign: 'center'
  },
  problemCell: {
    color: 'white',
    fontSize: 18,
    padding: '10px 0',
    textAlign: 'center',
    cursor: 'pointer'
  },
  difficultyCell: {
    color: 'white',
    fontSize: 18,
    padding: '10px 0',
    textAlign: 'center'
  },
  categoryCell: {
    color: 'white',
    fontSize: 18,
    padding: '10px 0',
    textAlign: 'center'
  }
};
