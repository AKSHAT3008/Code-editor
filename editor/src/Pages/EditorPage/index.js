import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import { useLocation } from 'react-router-dom';

const App = () => {
    const [code, setCode] = useState('');
    const [customInput, setCustomInput] = useState('');
    const [output, setOutput] = useState('');
    const location = useLocation();
    const selectedProblem = location.state?.selectedProblem;

    const compileCode = async () => {
        try {
            const response = await fetch('/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code, input: customInput }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }

            const result = await response.text();
            setOutput(result);
        } catch (error) {
            console.error('Error compiling code:', error);
            setOutput(`Error: ${error.message}`);
        }
    };

    return (
        <div className="App" style={{
            backgroundColor:'#000'
        }}>
            
            {selectedProblem && (
                <div style={{backgroundColor:'#2e2e2e',marginTop:'55px',padding:'8px',marginBottom:'8px'}}>
                    <h2 style={{color:'white',marginLeft:'10px',borderBottom:'1px solid white'}}>Problem Title: {selectedProblem.title}</h2>
                    <p style={{color:'white',marginLeft:'10px'}}>Problem Description: {selectedProblem.description}</p>
                </div>
            )}
            <div style={{ height: '400px' }}>
                <Editor
                    value={code}
                    onChange={(newValue) => setCode(newValue)}
                    theme={"vs-dark"}
                    language={"cpp"}
                    options={{
                        // Add additional Monaco editor options here
                    }}
                />
            </div>
            <br />
            <button onClick={compileCode}
            style={{
                backgroundColor: '#2e2e2e', 
                color: '#28c244', 
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '5px', 
                cursor: 'pointer', 
                marginTop: '15px',
                marginLeft:'5px',
                width:'10%',
                border:'1px solid #28c244',
                boxShadow: ' 5px 7px 6px rgba(0, 120, 0, 0.5)'
              }}
              
               >Compile</button>
            <div style={{display:'flex', flexDirection:'row',marginLeft:'5px'}}>
            <textarea
                placeholder="Enter custom input here..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                rows="4"
                cols="50"
                style={{
                    backgroundColor: '#2e2e2e',
                    color: '#f8f8f2',
                    borderRadius: '8px',
                    marginTop: '20px',
                    padding: '15px',
                }}
            />
         
            
            <pre  style={{
  padding: '15px',
  backgroundColor: '#2e2e2e',
  color: '#f8f8f2',
  borderRadius: '8px',
  border: '1px solid #444',
  fontFamily: 'monospace',
  fontSize: '14px',
  whiteSpace: 'pre-wrap',
  overflowX: 'auto',
  marginTop: '20px',
  marginLeft : '10px',
  width:'80%',
  
}}>
  {output}
</pre>
</div>

        </div>
    );
}

export default App;