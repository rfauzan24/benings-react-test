import List from "./List";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: items } = useFetch('https://beningsindonesia.com/e-wallet/v1/wallet/')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { items && <List items={items} /> }
    </div>
  );
}
 
export default Home;
