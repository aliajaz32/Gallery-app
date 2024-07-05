import './App.css';
import ImgIcon from './Component/ImgIcon';
import {useState} from 'react';
function App() {
  const [img,setImg]= useState('https://cdn.pixabay.com/photo/2023/11/01/11/24/path-8357201_1280.jpg')
  const imgArray = ['https://cdn.pixabay.com/photo/2023/11/01/11/24/path-8357201_1280.jpg','https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_640.jpg','https://cdn.pixabay.com/photo/2024/05/23/10/35/coffee-8782893_640.jpg']
 
  const setImage= (val)=>{
    setImg(val)
  }

  return (
    <div className="App">
     <h1>  gallery app  </h1>
     <img src={img} alt="" width="300" height="300" />
     <br/>
     {imgArray.map  ( (src)=>{
        return <ImgIcon src={src}  changeImage={ (val)=> setImage(val)}   />
     }  )}
    </div>
  );
}

export default App;
