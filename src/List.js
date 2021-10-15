import { Link } from 'react-router-dom';
import React from 'react';
import moment from 'moment';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://beningsindonesia.com/e-wallet/v1/wallet/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="item-list">
        {items.map((item) => (
          <div className="item-preview" key={item.id}>
            <Link to={`/items/${item.id}`}>
            <h2>Rp. {item.value.toLocaleString('en-US')}</h2>
            <h3>{item.information}</h3>
            <p> Type: {item.type}</p>
            <div>Created {moment(item.date).format('DD MMMM YYYY')}</div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
