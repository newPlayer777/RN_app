import { View, Text, Image, StyleSheet } from "react-native";
import ts from "@util/transformSize.tsx";
export const CTop = () => {
    return <View style={styles.topCon}>
        <Image
            style={{
                width: 50,
                height: 50,
            }}
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
            }} />
        <View style={{
            marginTop: ts(80),

        }}>
            <Text style={{
                fontSize: ts(36),
            }}>{'千逢照片管理'}</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    topCon: {
        marginTop: ts(200),
        width: ts(750),
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CTop