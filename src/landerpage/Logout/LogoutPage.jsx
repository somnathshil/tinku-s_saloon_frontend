
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function LogoutPage({handleLogout}) {
    
    const navigate = useNavigate();
    useEffect(() => {
      const logout = async () => {
        try {
        const res =  await axios.post('http://localhost:8080/logout',{
          withCredentials: true, 
        });  // Backend call
          handleLogout();  // Remove from frontend
          // alert(res.data.message);
          navigate('/');
        } catch (error) {
          console.log('Logout failed:', error);
          alert('Failed to log out. Please try again.');
        }
      };
  
      logout();
    }, [navigate, handleLogout]);
  
    return <h2>Logging Out...</h2>;
  }
  
export default LogoutPage;
