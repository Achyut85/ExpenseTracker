<<<<<<< HEAD
import React, { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth,window.innerHeight]);

  useEffect( () => {
      const updateSize = () =>{
        setSize([window.innerWidth, window.innerHeight])
      } 
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
  },[])
  return( 
    {
        width:size[0],
        height:size[1]
    }
)
}

=======
import React, { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth,window.innerHeight]);

  useEffect( () => {
      const updateSize = () =>{
        setSize([window.innerWidth, window.innerHeight])
      } 
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
  },[])
  return( 
    {
        width:size[0],
        height:size[1]
    }
)
}

>>>>>>> a6c0315 (Add files via upload)
