import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Image } from 'react-native';
import { useEffect, memo, useState } from 'react'
import ts from "@util/transformSize.tsx";
//登录页面
export const CLogin = memo(() => {
    return <View style={styles.constent}>
        <CTop />
    </View>
})
//顶部说明
const CTop = memo((props: any) => {
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
})
//输入框



const styles = StyleSheet.create({
    constent: {
        flex: 1,
        alignItems: 'center',
        width: ts(750),
    },
    topCon: {
        marginTop: ts(200),
        width: ts(750),
        justifyContent: 'center',
        alignItems: 'center'
    }
});