import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sectionInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        alignItems: 'center',
        paddingHorizontal: 45,
    },
    yourMoney: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleCoin: {
        fontSize: 24,
        fontWeight: 700,
        color: 'black',
        marginRight: 15,
    },
    titleTypeCoin: {
        fontSize: 14,
        fontWeight: 700,
        color: 'rgba(34, 49, 186, 1)',
    },

    sectionSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#0058F0',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonText: {
        fontSize: 14,
        color: '#0058F0',
        marginRight: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        flex: 1,
        paddingHorizontal: 10,
        marginRight: 10,
    }
});
