import ImageList from '@mui/material/ImageList';
import Fab from '@mui/material/Fab';
import { useState } from 'react';

const Calculator = () => {
  const [key, setKey] = useState("")

  return (
    <>
      <div className="m-auto space-y-2 w-fit mt-20 bg-gray-200">
        <h2 className='font-bold px-1'>Casio</h2>
        <div className="place-self-start w-full border-4 text-right bg-white text-2xl">
         {key===""?0:key}
          </div>
        <div>
        <ImageList sx={{ width: 250, height: 60 }} cols={2} rowHeight={164}>
        <Fab variant="extended" color="secondary"
          onClick={()=>{
            setKey("")
          }}>
              AC
            </Fab><Fab variant="extended" color="secondary"
            onClick={()=>{
              let newkey = key.slice(0, -1);
              setKey(newkey)
            }}>
              DEL
            </Fab>
          </ImageList>
          <ImageList sx={{ width: 250, height: 250 }} cols={4} rowHeight={164}>
            {itemData.map((item) => (
              <Fab key={item.content} color="primary" aria-label="add"
                onClick={() => {
                  if(item.operation=="enter"){
                    try {
                      // Use the eval function to evaluate the expression
                      const result = eval(key);
            
                      // Check if the result is a valid number
                      if (typeof result === 'number' && !isNaN(result)) {
                         setKey((result).toString())
                      } else {
                        throw new Error('Invalid expression');
                      }
                    } catch (error) {
                      alert("Invalid Expression")
                    }
                  }
                  else{
                  let val = (key).toString() + (item.content).toString();
                  setKey(val)
                  }
                }}>
                {item.content}
              </Fab>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  )
}

export default Calculator

const itemData = [
  {
    content: 1,
    operation:"",
  },
  {
    content: 2,
    operation:"",
  }, {
    content: 3,
    operation:"",
  }, {
    content: "+",
    operation:"",
  }, {
    content: 4,
    operation:"",
  }, {
    content: 5,
    operation:"",
  }, {
    content: 6,
    operation:"",
  }, {
    content: "-",
    operation:"",
  }, {
    content: 7,
    operation:"",
  }, {
    content: 8,
    operation:"",
  }, {
    content: 9,
    operation:"",
  }, {
    content: "*",
    operation:"multiply",
  }, {
    content: 0,
    operation:"",
  }, {
    content: ".",
    operation:"",
  }, {
    content: "/",
    operation:"",
  }, {
    content: "=",
    operation:"enter",
  }
];