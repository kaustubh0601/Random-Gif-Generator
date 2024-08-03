// import React, { useEffect, useState } from "react";

// import axios from 'axios';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// const useGif = (tag) =>{

//     const[gif, setGif] = useState('');
//     const[loading, setLoading] = useState(false);

//     async function fetchData(tag) {
//         // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//         // const {data} = await axios.get(url);
//         // const imageSource = data.data.images.downsized_large.url;
//         // setGif(imageSource);

//         try {
//             setLoading(true);
//             const data = await axios.get(tag ? `${url}&tag=${tag}` : url);
//             // console.log('Giphy API response:', data.data);    // for checking
//             const imageSource = data.data.images.downsized_large.url;
//             // console.log('GIF URL:', imageSource);  // lets check
//             // console.log(imageSource);
//             setGif(imageSource);
//             setLoading(false);
//           } catch (error) {
//             console.error('Error fetching random GIF: kaustubh', error);
//           }
//     }     

//     // async function fetchData(tag) {
      
//     //   try{
//     //     const res = await fetch(url);
//     //     const result = res.json();
//     //     console.log(result);
//     //   }
//     //   catch(error){
//     //       console.log("try try but dont cry");
//     //   }
//     // }
 
//     useEffect( () => {
//         fetchData();
//     }, [] )

//     return {gif, loading, fetchData};
// }

// export default useGif;


import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

export const useGif = (tag) => {

    const [gif, setgif] = useState("");
    const [loading , setLoading] = useState(false)
    const [heading , setHeading] = useState('RANDOM GIF');
    
  const fetchData = async () => {
    
    try{

      setLoading(true);
      console.log(`url is -> ${url}`)
      const data = await axios.get(!tag ?  url: `${url}&tag=${tag}`);
      console.log(`Data -> ${data}`)
      const imgSource = data.data.images.downsized_large.url;
      setgif(imgSource)
      setLoading(false)
      setHeading( tag ? `RANDOM ${tag} GIF` : "RANDOM GIF");

    }
    catch(error){
      console.log("SOmething mis wrong kk " + error)
    }
  }

  useEffect( () => {
    fetchData();
  }, [])

  return {gif, loading, fetchData, heading}

}
