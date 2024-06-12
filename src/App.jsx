import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [salary, setSalary] = useState('');
  const [reason, setReason] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    if (name.length < 4) {
      setError('Name must be at least 4 characters long.');
      return false;
    }
    const ageValue = new Date().getFullYear() - new Date(age).getFullYear();
    if (ageValue < 18 || ageValue > 70) {
      setError('Age must be greater than 18 and less than 70.');
      return false;
    }
    if (!city) {
      setError('Please select a city.');
      return false;
    }
    if (!salary) {
      setError('Please select the expected salary.');
      return false;
    }
    if (!reason) {
      setError('Please describe the reason for applying for this job.');
      return false;
    }
    if (!question1 || !question2 || !question3) {
      setError('Please answer all the questions.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Job Application Form</h2>
        
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Age:</label>
          <input
            type="date"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">City:</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select a city</option>
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Dammam">Dammam</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Expected Salary:</label>
          <select
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select expected salary</option>
            <option value="3000-8000">3000 - 8000</option>
            <option value="9000-13000">9000 - 13000</option>
            <option value="15000+">15000 and above</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Reason for Applying:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Do you have experience in this field?</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="Yes"
                name="question1"
                onChange={(e) => setQuestion1(e.target.value)}
                className="mr-1"
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="question1"
                onChange={(e) => setQuestion1(e.target.value)}
                className="mr-1"
                required
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Can you work under pressure?</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="Yes"
                name="question2"
                onChange={(e) => setQuestion2(e.target.value)}
                className="mr-1"
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="question2"
                onChange={(e) => setQuestion2(e.target.value)}
                className="mr-1"
                required
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Can you work independently?</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="Yes"
                name="question3"
                onChange={(e) => setQuestion3(e.target.value)}
                className="mr-1"
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name="question3"
                onChange={(e) => setQuestion3(e.target.value)}
                className="mr-1"
                required
              />
              No
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            The application has been successfully submitted!
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
