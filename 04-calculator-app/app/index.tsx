import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorBotton from "@/components/CalculatorBotton";
import { Colors } from '@/constants/Colors';

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

   {/* Resultados */}

      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        x<ThemeText variant="h1">50 x 500</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>


      {/* Filas de botones */}

<View style={globalStyles.row}>
 <CalculatorBotton label="C" blackText
 color={Colors.lightGray} 
  onPress={() => console.log('C')}/>

 <CalculatorBotton label="+/-" blackText
 color={Colors.lightGray} 
 onPress={() => console.log('+/-')}/>

 <CalculatorBotton label="del" blackText
 color={Colors.lightGray} 
 onPress={() => console.log('del')}/>

 <CalculatorBotton label="÷" 
 onPress={() => console.log('÷')}/>
</View>

    </View>
  );
};

export default CalculatorApp;
