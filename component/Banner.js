import { Text, View , Image} from 'react-native';
import {Entypo} from 'react-native-vector-icons'
import {styels} from '../styleSheet/home.style'


const logo = require('../assets/logo.png');
const bg_img = require('../assets/bg-effect.png');


export default function Home() {
  
    return (
      <>
        <Image style={styels.bg_img} source={bg_img}/>
        <View style={styels.home_header}>
          <Image style={styels.logo} source={logo}/>
          <View>
            <Entypo name="bell" size={30} color="#fff" />
          </View>
        </View>

        <View style={styels.home_balacne}>
          <Text style={styels.home_balacne_text_1}>Accout Balance</Text>
          <Text style={styels.home_balacne_text_2}> $ 34,756.00 </Text>
        </View>

        <View style={styels.current_box}>
          <View style={styels.current_box_child}>
            <Text style={styels.current_box_tittle}> $ 4500 </Text>
            <Text style={styels.current_box_small_text}> AVG Spendings </Text>
          </View>
          <View style={styels.current_box_child}>
            <Text style={styels.current_box_tittle}> +3% </Text>
            <Text style={styels.current_box_small_text}> AVG Shift </Text>
          </View>
        </View>
      </>
    );
};
