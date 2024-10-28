import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoPC: {
        width: 200,
        height: 60,
    },
    logoSP: {
        width: 200,
        height: 40,
    },
    avatarLogoSP: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    pcHeader: {
        flexDirection: 'row',
    },
    mobileHeader: {
        flexDirection: 'row',
    },
    pcContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    mobileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    pcText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    pcItem: {
        marginHorizontal: 8,
    },
    pcPoints: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    companyName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    poweredBy: {
        fontSize: 12,
        color: '#888',
    },
    notificationIcon: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    avatarLogoAlertSP: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
});
