
import React, { useState }  from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp =() => {

  //const categories1= ['Honda', 'Kawasaki', 'Yamaha'];
  /** usestate nos devuelve una propiedad y una funcion, la funcion sirvve 
   * para cambiar el estado
   */
  const [categories, setCategories] = useState(['Honda', 'Kawasaki', 'Yamaha']);

  // const add = ()=>{
  //   /**El set recibe el nuevo estado de la propiedad completo */
  //   categories.push(cat);
  //   setCategories([...categories]);
  // }

  // const deleteLast = ()=>{
  //   /**El set recibe el nuevo estado de la propiedad completo */
  //   categories.pop();
  //   setCategories([...categories]);
  // }

  // const deleteFirst = ()=>{
  //   /**El set recibe el nuevo estado de la propiedad completo */
  //   categories.shift();
  //   setCategories([...categories]);
  
  // }



  return (
    <>
      <h2 align="center"> GifApp </h2>
      <hr></hr>
      <AddCategory setCategories={setCategories}/>
        <ol>
            {
                categories.map((category) =>
                  <GifGrid
                    key={category}
                    category={category} />
                
                )
            }
        </ol>
       

    </>
  )

}

//IMPORTANTE exportar la clase
export default GifApp;