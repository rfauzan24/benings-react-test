import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [nominal, setNominal] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://beningsindonesia.com/e-wallet/v1/wallet/in', {
      method: 'POST',
      body: JSON.stringify({
        value: nominal,
        information: 'Topup Benings Pay'
      })
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Topup</h2>
      <form onSubmit={handleSubmit}>
        <label>Nominal Topup:</label>
        <input 
          type="number"
          min="10000"
          required 
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
        <button>Confirm</button>
      </form>
    </div>
  );
}
 
export default Create;