import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sectionInfo: {
        backgroundColor: '#F2F4FF',
        height: 180,
        position: 'relative',
    },
    yourMoney: {
        borderRadius: '24px',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        top: 40,
        alignItems: 'center'
    },
    sectionSearch: {
        position: 'absolute',
        padding: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        top: 130,
    },
    titleSearch: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0F103C',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1D2089',
        textAlign: 'center',
    },
    avatarLogo: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
});
