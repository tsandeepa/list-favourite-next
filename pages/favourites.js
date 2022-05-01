import React, { useState, useEffect } from 'react';
import { Favouites } from '../styles/styled/favourite.styled';
import { motion } from 'framer-motion';
import { BiTrashAlt } from "react-icons/bi";


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
        // console.log(id);
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
      const listLoad = {
        hidden: { opacity: 0, scale:0.8},
        visible: i =>(
            { 
                opacity: 1,
                scale:1,
                transition:{
                    type: "easeIn",
                    delay: i * 0.08,
                } 
            }
        )
      }

    return ( 
        <Favouites>
            <div className='sub-banner'>
              <h2>Your Favourite Characters</h2>
              <p>Keep them or romove them from your list.</p>
            </div>
            {isLoading && <div className='loader'>
              <div className='l-anim'>
                  <span> Loading... </span>
              </div>
            </div>}
            <div className='fav-list'>
              {   favouriteItems &&
                  favouriteItems.map((item,i)=>(
                      <motion.div 
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={listLoad}
                      className='fav-item'
                      key={item.id}
                      >
                        <motion.div
                          whileHover={{scale:1.04}}
                          className="fi-bg"
                        >
                          <div>
                              <img src={item.image} alt="" />
                              <h3>{item.name}</h3>
                          </div>
                          <motion.button 
                            whileHover={{color:'#fff'}}
                          onClick={()=>notFavourite(item.id)}> <BiTrashAlt/> Remove </motion.button>
                        </motion.div>
                          
                      </motion.div>
                  ))
              }
            </div>
            
            
        </Favouites>
     );
}
 
export default Favourites;