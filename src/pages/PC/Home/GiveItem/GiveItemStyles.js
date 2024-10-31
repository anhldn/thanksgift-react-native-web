import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    app: {
        flex: 3, // the number of columns you want to devide the screen into
        backgroundColor: 'rgb(242, 244, 255)',
    },
    container: {
        width: '85%',
        margin: 'auto',
    },
    mainItem: {
        borderRadius: '8px',
        backgroundColor: 'white',
        width: '30%',
        height: 310,
        marginVertical: 20,
        marginRight: 30,
        padding: 15,
    },
    arrow: {
        width: 25,
        height: 25,
    },
    sectionInfo: {
        flexDirection: 'row',
    },
    title: {
        fontWeight: '700',
    },
    avatarGive: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    avatarUser: {
        width: 105,
        height: 105,
    },
    avatarCoin: {
        width: 48,
        height: 48,
    },
    avatarHand: {
        width: 47,
        height: 20,
    },
    times: {
        color: '#BDBDBD',
        fontSize: 12,
        fontWeight: 500,
    },
    description: {
        color: '#828282',
        fontSize: 14,
        fontWeight: 400,
        marginVertical: 15,
    },
});
