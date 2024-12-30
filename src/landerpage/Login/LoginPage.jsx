import { useNavigate} from 'react-router-dom';
import React, { useState, useContext} from 'react';
import axios from 'axios';
import GeneralContext from '../GeneralContext';
function LoginPage() {
   const {handleLogin} = useContext(GeneralContext);
    const [formData, setFormData] = useState({
             username: "",
             password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e)=>{
          setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=>{
      e.preventDefault();
       try{
          const res = await axios.post("http://localhost:8080/login",
            {
              username: formData.username,
              password: formData.password,
            },
            {
              withCredentials: true  // Send cookies with the request
          }
          );
          const {user} = await res.data;
          const storedUser =await localStorage.setItem('user', JSON.stringify(user));
          handleLogin();
          navigate("/");
          alert(res.data.message);
       }catch(error){
           console.log('Error:', error);
           alert(error.response?.data?.message || 'Username or Password wrong!');
       }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="row" style={{ marginTop: "10rem", marginBottom: "3rem" }}>
        <h2 style={{ textAlign: "center", color: "white", fontSize: "3.5rem" }}>
          Log In
        </h2>
      </div>
      <div
        class="row"
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{
            width: "30%",
            borderRadius: "8px",
            border: "none",
            marginBottom: "1rem",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: "30%",
            borderRadius: "8px",
            border: "none",
            marginBottom: "1rem",
          }}
        />
        <button
          style={{
            width: "8%",
            height: "2rem",
            borderRadius: "8px",
            border: "none",
            marginBottom: "1rem",
            backgroundColor:" #89CFF0",
    
          }}
        >
          Submit
        </button>
      </div>
      </form>
    </>
  );
}

export default LoginPage;
