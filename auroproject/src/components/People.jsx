import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import content from "../images/content1.jpg";

const Members = () => {
  const [socket, setSocket] = useState(null);
  const [userNFTs, setUserNFTs] = useState(0);
  const [userName, setUserName] = useState("User");
  const [userBalance, setUserBalance] = useState(0);
  const navigateTo = useNavigate();

  useEffect(() => {
    const socketInstance = io("http://localhost:3000");
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("nftsUpdated", (data) => {
        setUserNFTs(data.userNFTs);
        setUserName(data.userName); 
        setUserBalance(data.userBalance); 

        if (data.userNFTs < 1) {
          navigateTo("/");
          alert(
            "address"
          );
        }
      });
    }
  }, [socket, navigateTo]);

  const redirectToMetaMaskMarket = () => {
    window.open("https://opensea.io", "_blank");  
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", textAlign: "center" }}>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <img
          src={content}
          alt="Welcome"
          style={{ width: "150px", height: "auto", marginBottom: "10px" }}
        />
        <h1>Welcome, {userName}!</h1>
        <p>NFT Holder</p>
      </div>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <div style={{ marginBottom: "30px", textAlign: "left" }}>
          <h2 style={{ color: "#333" }}>Your Information</h2>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li><strong>Username:</strong> {userName}</li>
            <li><strong>Your NFTs:</strong> {userNFTs}</li>
            <li><strong>Wallet Balance:</strong> {userBalance} ETH</li>
          </ul>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#333" }}>Your NFT Collection</h2>
          <p>You own {userNFTs} NFTs. Keep holding to access exclusive features!</p>
        </div>   

        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={redirectToMetaMaskMarket} 
            style={{
              backgroundColor: "#4CAF50", 
              color: "white", 
              border: "none", 
              padding: "10px 20px", 
              textAlign: "center", 
              textDecoration: "none", 
              display: "inline-block", 
              fontSize: "16px", 
              borderRadius: "5px", 
              cursor: "pointer"
            }}
          >
            Visit NFT Marketplace
          </button>
        </div>

        <div style={{ marginTop: "30px", fontSize: "12px", color: "#888" }}>
          <p>© 2025 NFT Dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Members;