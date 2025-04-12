import { globalStyles } from '@/styles/global-styles';
import { Text, Pressable } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';


interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress?: () => void;
}

const CalculatorBotton = ({ label,
     color = Colors.darkGray, 
     blackText = false,
      onPress } : Props) => {
  return (
<Pressable style={globalStyles.button}
onPress={ onPress }
>



<Text 
style={{
    ...globalStyles.buttonText,
    color: blackText ? 'black' : 'white'
}}>
    {label}</Text>

</Pressable>
  )
}

export default CalculatorBotton