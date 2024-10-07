import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase/FirebaseConfig';

function NewContest() {

    const [contests,setContests] = useState({
        id:'',
        title:'',
        description:'',
        difficulty: '',
        prizes:'',
        order:0   
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValue = e.target.value; // TypeScript knows e.target has a value property
        setContests({ ...contests, [e.target.name]: updatedValue });
      };

    const handleSubmit = async(e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const newProblem = {
            ...contests,
            order:parseInt(contests.order)
        }
        await setDoc(doc(db, "contests", contests.id), newProblem);
        alert("Contest Created");
    }
      

  return (
    <div style={{display:'flex', justifyContent:'center',backgroundColor:'#1c1c1c'

    }}>
        <form style={styles.form}
            onSubmit = {handleSubmit}>
            <h3 style={{justifyContent:'center',display:'flex'}}>Problem Details</h3>
            <input onChange={handleInputChange} type="text" placeholder="Contest ID" name="id" style={styles.input} />
            <input onChange={handleInputChange} type="text" placeholder="Title" name="title" style={styles.input}/>
            <input onChange={handleInputChange} type="text" placeholder="Description" name="description" style={styles.input}/>
            <input onChange={handleInputChange} type="text" placeholder="Difficulty" name="difficulty" style={styles.input}/>
            <input onChange={handleInputChange} type="text" placeholder="Prizes" name="prizes" style={styles.input}/>
            <input onChange={handleInputChange} type="text" placeholder="Order" name="order" style={styles.input}/>
            <button style={styles.button}> Add Contest</button>
        </form>
      
    </div>
  )
}

export default NewContest

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20, 
        padding: 20,
        border: '2px solid #333',
        borderRadius: 10,
        width: '60%',
        margin: '100px auto', 
        backgroundColor: '#1c1c1c', 
        color: '#f0f0f0', 
        boxShadow: '8px 8px 8px 8px rgba(50, 0, 120, 0.7)' 
    },
  
    input: {
        padding: 10,
        border: '1px solid #555', 
        borderRadius: 5,
        backgroundColor: '#2c2c2c', 
        color: '#f0f0f0', 
    },
  
    button: {
        marginTop: 20, 
        padding: 10,
        backgroundColor: '#3d3e52', 
        color: 'white',
        borderRadius: 5,
        cursor: 'pointer',
        border: 'none', 
        transition: 'background-color 0.3s',
        boxShadow: '0 1px 1px 1px rgba(230, 230, 255, 0.7)' 
    }
};


