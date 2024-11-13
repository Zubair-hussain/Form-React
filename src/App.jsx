import React, { useState } from 'react';
import './index.css';

function App(){
  const [formData, setFormData] = useState({
    name: '',
    sonOf: '',
    class: '',
    subject: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Simple validation to check if all fields are filled
    if (!formData.name || !formData.sonOf || !formData.class || !formData.subject) {
      setError('Please fill in all fields');
      return;
    }

    setError(''); // Clear error if all fields are filled
    console.log('Form submitted', formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1>Form Structure</h1>
      
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          S/O
          <input
            type="text"
            name="sonOf"
            placeholder="Son Of"
            value={formData.sonOf}
            onChange={handleChange}
          />
        </label>

        <label>
          Class
          <input
            type="text"
            name="class"
            placeholder="Enter Your Class"
            value={formData.class}
            onChange={handleChange}
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Which Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>

       

        <footer>
          For more, please contact our user <a href="https://www.Google.com">Services</a>
        </footer>
      </form>
    </div>
  );
}

export default App;








