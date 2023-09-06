import { useState } from 'react'
import { View } from 'react-native'

//componente
const Box = (props) => {
  const [state, setState] = useState("teste");
  
//estilizar inline
  const boxStyle = {
    height: props.size,
    minwidth: props.size,
    //flex: props.size,
    backgroundColor: props.color
  }
  
  return <View style={boxStyle}></View>;
};

export default Box;