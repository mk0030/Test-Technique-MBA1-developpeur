import React,{useEffect, useState} from 'react';
import './App.css';
import ImgCard from './components/ImgCard';
import axios from 'axios';

function App() {
  const [images, setImage] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() =>{
    const fetchData = async()=> {
      const {data}= await axios.get(`https://pixabay.com/api/?key=34450558-51a9210cf01b7959ca76c7c7e&q=${term}&image_type=photo&pretty=true`,
      );
     
    
      console.log(data.hits);
      setImage(data.hits);
      console.log(images);
    }
    fetchData();
      
      //setImage(data.hits);
    
     
  }, [term]);

  return (
   
    <>
    <div className="w-screen flex items-center justify-center h-40 bg-slate-400 fixed inset-0 z-50">
      <input 
      type ="recherche" 
      name="recherche" 
      id ="" 
      placeholder='Barre de recherche' 
      className='w-1/4 outline-none border border-r-0 border-slate-300 h-10 p-4 bg-white rounded-lg rounded-r-none'
      onChange={(e) => setTerm(e.target.value)}
      /> 
      
    </div>
    {images.length === 0 && (
      <h1 className='text-center text-4xl mt-44'>Aucune image trouvée</h1>
    )};
    <main className='mt-44 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-10'>
      {images.map((image) => (
      <ImgCard key={image.id} image={image}/>))}
    </main>
    </>
  );
}

export default App;
