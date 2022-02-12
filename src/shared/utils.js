export const saveStorage = (data) => {
  localStorage.setItem('carrito', JSON.stringify(data));
}

export const getStorage = () => {
  if (!localStorage.getItem('carrito')) localStorage.setItem('carrito', '[]');
  return JSON.parse(localStorage.getItem('carrito'));
}


export const addHandler = (id, token, navigate) => {
  if (token) {
    const carrito = getStorage();
    saveStorage([...carrito, id]);
  } else {
    navigate('/login');
    return [];
  }
}

export const removeHandler = (id) => {
  const tempStorage = getStorage()
  tempStorage.splice(id, 1)
  saveStorage(tempStorage);
  return tempStorage;
}

export const originalBooks = [
  { id: 0, quantity: 1, title: 'Harry Potter y el Cáliz de Fuego', price: '899.99', image: 'https://m.media-amazon.com/images/I/51Y6Exe5UiL.jpg' },
  { id: 1, quantity: 1, title: 'The Shining', price: '550.99', image: 'https://images-na.ssl-images-amazon.com/images/I/51jSPyJ8v2L._SX302_BO1,204,203,200_.jpg' },
  { id: 2, quantity: 1, title: 'El Código Da Vinci', price: '740.99', image: 'https://images-na.ssl-images-amazon.com/images/I/51WmNPpn5sL.jpg' },
  { id: 3, quantity: 1, title: 'El Principíto', price: '390.99', image: 'https://images-na.ssl-images-amazon.com/images/I/71mf0KoCQLL.jpg' },
  { id: 4, quantity: 1, title: 'Sobrenatural', price: '250.99', image: 'https://images-na.ssl-images-amazon.com/images/I/71wEj-CQGsL.jpg' },
];