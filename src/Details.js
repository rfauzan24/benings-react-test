import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import moment from 'moment';

const Details = () => {
  const { id } = useParams();
  const { data: item, error, isPending } = useFetch('https://beningsindonesia.com/e-wallet/v1/wallet/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://beningsindonesia.com/e-wallet/v1/wallet/' + item.data.id, {
      method: 'PATCH'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="item-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { item && (
        <article>
          <h2>Rp. {item.data.value.toLocaleString('en-US')}</h2>
          <h3>{item.data.information}</h3>
          <p> Type: {item.data.type}</p>
          <div>{moment(item.data.date).format('DD MMMM YYYY')}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default Details;