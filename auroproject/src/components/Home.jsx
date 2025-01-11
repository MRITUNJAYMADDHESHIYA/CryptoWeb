
import { useNavigate, useLocation } from "react-router-dom";
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const revealMsg = async () => {
    try {
      const account = location.state.address;
      const res = await fetch(`http://localhost:3000/members`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ from: account }),
      });
      const data = await res.json();
      if (data.status === 200) {
        navigateTo("/members");
      } else {
        window.alert(
          "Nothing"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <span className="beautiful-sentence">
        Message
        <br />
        address 
      </span>
      <br />
      <br />
      <button onClick={revealMsg}>Message</button>
    </>
  );
};

export default Home;
