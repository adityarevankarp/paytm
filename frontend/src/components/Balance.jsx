import axios from "axios";
import { useEffect, useState } from "react"

export const Balance = ({ value }) => {
    const [balance, setBalance] = useState(null);
    useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchBalance = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    if (token) {
      fetchBalance();
    }
  }, []);

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}