import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import {useGif} from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () =>{

    const[tag, setTag] = useState('');

 /*   const[gif, setGif] = useState('');
    const[loading, setLoading] = useState('false');

    async function fetchData() {
        // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        // const {data} = await axios.get(url);
        // const imageSource = data.data.images.downsized_large.url;
        // setGif(imageSource);

        try {
            setLoading(true);
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
            const data = await axios.get(url);
            // console.log('Giphy API response:', data.data);    // for checking
            const imageSource = data.data.images.downsized_large.url;
            // console.log('GIF URL:', imageSource);  // lets check
            // console.log(imageSource);
            setGif(imageSource);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching random GIF: kaustubh', error);
          }
    }
 
    useEffect( () => {
        fetchData();
    }, [] )               */


    //  called custom hook
    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler(){ 
        fetchData(tag);
    } 

    function changeHandler(event){
        setTag(event.target.value);
    }

    return(
        <div className="w-1/2 bg-pink-400 rounded-lg border border-black
                        flex flex-col items-center gap-y-5 mt-[15px]">
           <h1 className="mt-[15px] text-2xl underline uppercase font-bold ">Random {tag} Gif</h1>
           
           {
             loading ? (<Spinner/>) : (<img src={gif} width="450" alt="" />)
           }
           
           <input 
            type="text"
            onChange={changeHandler}
            // onChange = { (event) => setTag(event.target.value)}
            className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
            value={tag}
           />

           <button onClick={clickHandler}  className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>  
        </div>
    ); 
}

export default Tag;