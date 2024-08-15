<<<<<<< HEAD
import styled,{keyframes} from 'styled-components'
import { useWindowSize } from '../utils/useWindowSize'
const Orb = () => {
  const {width , height} = useWindowSize();
  const moveOrb = keyframes`
  0%{
    transform: translate(0,0);
  }
  50%{
    transform: translate(${width/1.2}px, ${height/2}px);
  }

  100%{
    transform: translate(0,0);
  }
  `
   const OrbStyle = styled.div`
      position:absolute;
      width:70vh;
      height:70vh;
      border-radius: 50%;
      margin-left: -37vh;
      margin-top: -37vh;
      background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
      filter: blur(400px);
      opacity:0.45;
      animation: ${moveOrb} 15s alternate linear infinite;
   `
  
  return  (<OrbStyle/>)

  
}

=======
import styled,{keyframes} from 'styled-components'
import { useWindowSize } from '../utils/useWindowSize'
const Orb = () => {
  const {width , height} = useWindowSize();
  const moveOrb = keyframes`
  0%{
    transform: translate(0,0);
  }
  50%{
    transform: translate(${width/1.2}px, ${height/2}px);
  }

  100%{
    transform: translate(0,0);
  }
  `
   const OrbStyle = styled.div`
      position:absolute;
      width:70vh;
      height:70vh;
      border-radius: 50%;
      margin-left: -37vh;
      margin-top: -37vh;
      background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
      filter: blur(400px);
      opacity:0.45;
      animation: ${moveOrb} 15s alternate linear infinite;
   `
  
  return  (<OrbStyle/>)

  
}

>>>>>>> a6c0315 (Add files via upload)
export default Orb