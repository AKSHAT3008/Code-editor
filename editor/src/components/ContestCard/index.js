import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/FirebaseConfig';

function ContestCard() {

    const [contests, setContests] = useState([]);
    const navigate = useNavigate();
    const [selectedContest,setSelectedContest] =  useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "contests"));
            const dataArray = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setContests(dataArray);
          } catch (error) {
            console.error('Error fetching problems:', error);
           
          }
        };
    
        fetchData();
      }, []);

      const handleContestClick = (contest) => {
        setSelectedContest(contest);
        navigate('/contest', { state: { selectedContest:contest } });
      };
    

    return (
        <div>
    <div style={{ justifyContent: 'center', display: 'flex' }}>
          <h2 style={{ color: 'white' }}>CONTESTS</h2>
    </div>

        
        <div style={{ backgroundColor: '#4c5d7d', width: '80%', height: 300, marginTop: 5, marginLeft: 90, boxShadow: '0px 5px 7px rgba(180, 120, 255, 0.5)', border: '1px solid white', overflowY: 'scroll', borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}>
          <ul>
          {contests.map((contest) => (
            <li style={styles.list} onClick={() => handleContestClick(contest)}>
              {contest.title}
            </li>
            ))}
          </ul>
        </div>
     </div>

    )
}

export default ContestCard

const styles = {
    list: {
      color: 'white',
      marginTop: 10,
      cursor: 'pointer',
    }
}
