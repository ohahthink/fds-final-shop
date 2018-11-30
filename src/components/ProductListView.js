import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';
import { Link } from 'react-router-dom';

class ProductListView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 상품 목록 데이터
    products: [
      // {
      //   id: 1,
      //   title: '자켓',
      //   imgURL: '...'
      // }
    ],
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.id}</div>
            <Link to={`/product/${p.id}`}>{p.title}</Link>
            <img src={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default withLoading(ProductListView);
