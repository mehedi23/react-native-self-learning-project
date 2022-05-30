import { StyleSheet} from 'react-native';

export const styels = StyleSheet.create({
    logo : {
        height: 90,
        width: 100,
        resizeMode: 'stretch',
    },
    container : {
        backgroundColor : "#fff",
        flex : 1
    },
    bg_img: {
        width : "100%",
        position: 'absolute',
        height: 400,
        resizeMode: 'stretch',
    },
    home_header : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    current_box : {
        flexDirection : 'row',
        backgroundColor : '#AD0B0B',
        marginHorizontal : 50,
        padding: 20,
        borderRadius: 20,
        justifyContent:'space-between'
    },
    current_box_child: {
        width: '50%'
    },
    current_box_tittle: {
        color: '#fff',
        fontSize : 24,
        textAlign: 'center',
        fontFamily : 'Kalam'
    },
    current_box_small_text: {
        fontSize : 16,
        textAlign: 'center',
        color : '#fff',
        opacity : .4,
        fontFamily : 'Kalam'
    },
    home_balacne: {
        marginHorizontal : 10,
        marginVertical : 35
    },
    home_balacne_text_1:{
        fontSize : 16,
        color : '#fff',
        paddingLeft: 53,
        marginBottom: 5,
        opacity: .3,
        fontFamily:'PoiretOne',
        fontWeight: 'bold',
        letterSpacing : 5
    },
    home_balacne_text_2:{
        fontSize : 36,
        color : '#fff',
        fontFamily:'PoiretOne',
        letterSpacing : 3
    },
    sendMoney_container:{
        marginTop: 40,
        marginHorizontal: 10
    },
    sendMoney_tittle: {
        fontSize: 24,
        opacity: .8,
        fontFamily:'Lobster',
        color: '#181B2C',
        letterSpacing : 2,
        marginBottom : 10
    },
    sendMoneySearchIcon: {
        width: 70,
        height: 70,
        backgroundColor: '#323755',
        borderRadius: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    sendMoneySearchImage:{
        width: 70,
        borderRadius: 100,
        height: 70,
    }
})