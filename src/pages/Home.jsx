import { useState, useEffect, useContext } from 'react';
import { getAllItemsService } from '../services/itemServices';
import { SearchContext } from '../context/Searchcontext';

const Home = () => {
  const [itemList, setItemList] = useState([]); // llenamos el estado de productos
  const { searchQuery } = useContext(SearchContext);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItemsService();
        if (response.status === 200) {
          setItemList(response.data);
        }
      } catch (error) {
        console.log('Ocurrio un error en Home', error);
      }
    };
    fetchItemData();
  }, []);

  const filteredItems = itemList.filter(item =>
    item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1>Bienvenido al Home</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {filteredItems && filteredItems.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              <a href='#' className='btn btn-primary'>comprar</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

