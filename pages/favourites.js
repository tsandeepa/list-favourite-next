import React, { useState, useEffect } from 'react';


const Favourites = () => {

  const [favouriteItems, setFavouriteItems] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [isFavourite, setisFavourite] = useState();


    useEffect(() => {
        setIsLoading(true)
        fetch('https://my-favourites-965fb-default-rtdb.firebaseio.com/items.json')
          .then((res) => res.json())
          .then((data) => {
            setFavouriteItems(data.filter((item)=> item.favourite == true))
            setIsLoading(false)
          })
      }, [isFavourite])

      const notFavourite = async (id) =>{
        setIsLoading(true)
        console.log(id);
        const res = await fetch('https://my-favourites-965fb-default-rtdb.firebaseio.com/items/'+id+'.json',{
          method:'PATCH',
          body:JSON.stringify({
            favourite: false,
          }),
        })
        .then(()=>{
          setisFavourite(!isFavourite)
        })
      }


    return ( 
        <div>
            <h2>Fav</h2>
            {
              isLoading && <div>Loading</div>
            }
            {   favouriteItems &&
                favouriteItems.map((item)=>(
                    <div>
                        
                        <p>{item.name}</p>
                        <button onClick={()=>notFavourite(item.id)}>Remove Favourite</button>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Favourites;