import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header.jsx'
import GalleryList from './GalleryList.jsx'

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

  const handleLikeClick = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: id
    }).then(() => {
      fetchGallery();
    }).catch((error) => {
      console.log('error in PUT /like', error)
    })
  }



  return (
    <div className="App">
      <Header />
      {(galleryList.length > 0) &&
        <GalleryList galleryList={galleryList} handleLikeClick={handleLikeClick}/>
      }
    </div>
  );
}

export default App;
