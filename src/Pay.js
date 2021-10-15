import { useState } from "react";
import { useHistory } from "react-router-dom";

const Pay = () => {
  const [value, setValue] = useState();
  const [information, setInformation] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { value, information };

    fetch('https://beningsindonesia.com/e-wallet/v1/wallet/out', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>Nominal Payment:</label>
        <input 
          type="number"
          min="10000" 
          required 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label>Information Payment:</label>
        <input 
          type="text" 
          required 
          value={information}
          onChange={(e) => setInformation(e.target.value)}
        />
        <button>Confirm</button>
      </form>
    </div>
  );
}
 
export default Pay;