import { View } from 'react-native';
import {styels} from '../styleSheet/home.style';

import Banner from '../component/Banner';
import SearchHome from '../component/SearchHome'




export default function Home() {
    return (
      <View style={styels.container}>
        <Banner/>
        <SearchHome/>
      </View>
    );
};
