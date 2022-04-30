import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header.jsx'

function App() {
  useEffect(() => {
    fetchGallery();
  },[])


  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
      console.log(galleryList);
    }).catch((error) => {
      console.log('GET /gallery error',error)
    })
  }



  return (
    <div className="App">
      < Header />
      <ul>
        {galleryList.map((galleryItem) => {
          return (
            <li key={galleryItem.id}>
              <img src={galleryItem.path} width="100" height="100"/>
              {galleryItem.description}
              <button>LIKE</button>
              Likes: {galleryItem.likes}
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
