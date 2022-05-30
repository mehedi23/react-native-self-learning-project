import {View , Text, ScrollView, Image} from 'react-native';
import {styels} from '../styleSheet/home.style';
import {Feather} from 'react-native-vector-icons';

export default function SearchHome () {
    return(
        <View style={styels.sendMoney_container}>
            <Text style={styels.sendMoney_tittle}>Send Money</Text>


            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styels.sendMoneySearchIcon}>
                    <Feather name="search" size={30} color="#fff"/>
                </View>

                {
                    user_data && user_data.map((item, index) => (
                        <View style={styels.sendMoneySearchIcon} key={index}>
                            <Image 
                                style={styels.sendMoneySearchImage} 
                                source={{uri : item.img}}
                            />
                        </View>
                    ))
                }


            </ScrollView>
        </View>
    )
};


const user_data = [
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "Harold D. Sena",
        img : "https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/01/Gentleman-small-tgj.00-900x600-c-center.png"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "Robert T. Cunningham",
        img : "https://wellgroomedgentleman.com/media/images/Modern_Pompadour_Gentleman.width-800.jpg"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "David G. Wyckoff",
        img : "https://wellgroomedgentleman.com/media/images/Haircut_for_a_Gentleman.2e16d0ba.fill-800x800-c100.jpg"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "Robert N. Gonyea",
        img : "https://i.pinimg.com/originals/49/b1/57/49b15751de3fc7b49e7bca55ac54e44a.jpg"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "Patrick V. Lombard",
        img : "https://haircutinspiration.com/wp-content/uploads/Side-Combed-Classic.jpg"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "Justin A. Schatz",
        img : "https://content.latest-hairstyles.com/wp-content/uploads/side-part-with-beard-500x625.jpg"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "David A. Durham",
        img : "https://www.dapperconfidential.com/wp-content/uploads/2020/10/Gentleman_Haircut_4_-_Modern-642x1024.jpg"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "Eric L. Sias",
        img : "https://haircutinspiration.com/wp-content/uploads/Thin-Side-Part-with-Mid-Fade.jpg"
    },
    {
        id : Math.floor((Math.random()*10000)**5),
        name : "Clarence J. Litten",
        img : "https://i.pinimg.com/736x/14/c4/91/14c491d30b2fdc9119ad645337bc0240.jpg"
    }
]