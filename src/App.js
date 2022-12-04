
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { v4 } from 'uuid';
import { db, storage } from './firebase';
import './App.css';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';

function App() {

const [imageUpload,setImageUpload] =useState(null)



const uploadImage=(k)=>{

 if (imageUpload ===null) return
 const imageRef= ref(storage,`images/${imageUpload.name + v4()}`)
 uploadBytes(imageRef,imageUpload).then((res)=>{
  console.log(res);
  getDownloadURL(res.ref).then(async(downloadURL) => {
    console.log('File available at', downloadURL);
    await addDoc(collection(db, "imgData"), {
      name: "image data",
      url: downloadURL,
      dateExample: Timestamp.fromDate(new Date())
    });
    
  });
 })
  
}

  return (
    <div className="App">
     <input type='file' onChange={e=>setImageUpload(e.target.files[0])}/>
     <button onClick={uploadImage}>Upload Image</button>
     
    </div>
  );
}

export default App;
