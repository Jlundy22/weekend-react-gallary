import GalleryItem from './GalleryItem.jsx';

function GalleryList({
    galleryList
}) {
    return (
        <ul>
          {galleryList.map((galleryItem) => {
            return (
              <GalleryItem 
                key={galleryItem.id}
                galleryItem={galleryItem} />
            )
          })}
        </ul>
      )
}

export default GalleryList;