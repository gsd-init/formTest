import React from 'react';
import './App.css';

const styles = {
  display: 'flex',
  flexDirection: 'column',  
  margin: '40px',
  width: '500px',
  height: '400px'

}

function App() {
  return (
    <div className="App">
     <h1 style={{margin: '40px' }}>Form Netlify Test</h1>
     <form style={styles} name="contact" action="/contact" method="post">
     <input type="hidden" name="form-name" value="contact"/>
     <input required type="text" name="name" placeholder="your name" />
     <input required type="email" name="email" placeholder="your email" />
     <input type="text" name="subject" placeholder="subject" />
     <textarea name="message" cols="30" rows="10" placeholder="message"></textarea>
     <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
