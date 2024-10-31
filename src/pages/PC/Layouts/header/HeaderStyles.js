import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logoPC: {
        width: 200,
        height: 60,
    },
    avatarLogoSP: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    pcContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        shadowColor: '#0A114D', // Màu bóng (màu chính)
        shadowOffset: {
            width: 0,  // Độ dịch chuyển theo chiều ngang
            height: 3, // Độ dịch chuyển theo chiều dọc
        },
        shadowOpacity: 0.1, // Độ mờ của bóng (0.1 tương ứng với #0A114D1A)
        shadowRadius: 5,    // Bán kính của bóng
    },
    pcItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    avatarLogoAlertSP: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
});
