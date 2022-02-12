import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Layout from './components/Layout';
import RouterComponent from './routes/RouterComponent';
import { UserContext } from './context/UserContext';

import { originalBooks } from './shared/utils';

function App() {
  const [books, setBooks] = useState(originalBooks);

  const [copyBooks, setCopyBooks] = useState([...books])

  const { saveToken } = useContext(UserContext);


  const initBooks = () => {
    setCopyBooks([...books]);
  }

  useEffect(() => {
    const haveToken = localStorage.getItem('token');
    if (haveToken) saveToken(haveToken);
  }, []);

  const onSearch = (query) => {
    if (query === '') {
      setCopyBooks([...books]);
    } else {
      const temp = [...books];
      var res = [];
      temp.forEach(item => {
        if (item.price.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });

      setCopyBooks([...res]);
    }
  }

  const updateQuantity = (item) => {
    var temp = [...books];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].price = item.price;
    temp[index].image = item.image;
    temp[index].quantity = item.quantity;

    setBooks([...temp]);
    initBooks();
  }
  return (
    <div className="app">
      <Layout title="E-Books" onsearch={onSearch}>
        <RouterComponent className="list" onupdatequantity={updateQuantity} copyBooks={copyBooks} />
      </Layout>
    </div>
  );
}

export default App;
