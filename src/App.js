// import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   <h2>Register here</h2>
   <form>

    <div className = "firstName">
      <label htmlFor="firstName">First Name </label>
      <input type="text" name='firstName' id='firstName' placeholder="First name"  />
    </div>

    <div className = "lastName">
      <label htmlFor="lastName">Last Name </label>
      <input type="text" name='lastName' id='lastName' placeholder="Last name" />
    </div>

    <div className = "address">
      <label htmlFor="address">Address </label>
      <input type="text" name='address' id='address' placeholder="Address" />
    </div>

    <div className = "gender">
      <label htmlFor="gender">Gender </label>
                          <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>LGBTQ</option>  
                          </select>
    </div>

    <div className = "password">
      <label htmlFor="password">Password </label>
      <input type="password" name='password' id='password' placeholder="Password" />
    </div>

    <div className = "dob">
      <label htmlFor="dob">Date of Birth </label>
      <input type="date" name='dob' id='dob' />
    </div>

    <button> Submit</button>

   </form>
   
   </>
  );
}

export default App;
