import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Itmes from './items'
import Link from 'next/link'
import { Container } from '../styles/styled/layout.styled';
import { ItemGrid } from '../styles/styled/itemGrid.styled';
import { motion } from 'framer-motion';


// export const getStaticProps = async () =>{
//   // const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const res = await fetch('https://my-favourites-965fb-default-rtdb.firebaseio.com/items.json');
//   const data = await res.json()
//   console.log(data);
//   return{
//       props: {items: data}
//   }
// }
export default function Home() {

  const [items, setItems] = useState(null);
  const [isFavourite, setisFavourite] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true)
    fetch('https://my-favourites-965fb-default-rtdb.firebaseio.com/items.json')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        setIsLoading(false)
      })
  }, [isFavourite])


  console.log(items);
  const makeFavourite = async (id) =>{
    setIsLoading(true)
    console.log(id);
    const res = await fetch('https://my-favourites-965fb-default-rtdb.firebaseio.com/items/'+id+'.json',{
      method:'PATCH',
      body:JSON.stringify({
        favourite: true,
      })
    })
    .then(()=>{
      setisFavourite(!isFavourite)
    })
  }
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
  const gridLoad = {
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
    <>  
        
          <h1>Home Page</h1>


        {isLoading && <div className='loader'>Loading</div>}
        <ItemGrid className='items'>
          {     items &&
                items.map((item,i)=>(
                  <motion.div 
                  
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={gridLoad}
                    className='item' key={item.id}>
                      <div className="character">
                        <motion.img 
                          initial={{
                            borderRadius:60
                          }}
                          whileHover={{
                            borderRadius:10,
                            scale: 0.9
                          }}
                        src={item.image} />
                        <h3>{item.name}</h3>
                        {
                          item.favourite ? <button onClick={()=>notFavourite(item.id)}>Not Favourite</button> :
                          <button onClick={()=>makeFavourite(item.id)}>Favourite</button>
                        }
                      </div>
                      
                  </motion.div>
                ))
            }
        </ItemGrid>
    </>
  )
}
