import { StyleSheet, Text, View, TextInput, ToastAndroid, TouchableOpacity, Image } from 'react-native';
import { useEffect, memo, useState } from 'react'
import ts from "@util/transformSize.tsx";
import CRadioForm from '@comp/base/CRadioForm';
import CBaseBtn from '@comp/base/CBaseBtn'
import CTop from '@comp/login/comp/CTop'
//登录页面
export const CLogin = memo(() => {
    return <View style={styles.constent}>
        {/* 顶部说明组件 */}
        <CTop />
        <_CLonginInput />
    </View>
})
//输入框
const _CLonginInput = memo((props: any) => {
    const [phone, setPhone] = useState('')
    const [isPhone, setIsPhone] = useState(false)
    const [isCode, setIsCode] = useState(false)
    const [code, setCode] = useState('')
    return <View
        style={{
            marginTop: ts(200),
        }}
    >
        <View style={{}}>
            <TextInput
                placeholder='请输入手机号码'
                placeholderTextColor={'#ccc'}
                style={{
                    width: ts(600),
                    height: ts(60),
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                }}
            />

            {

                <Text
                    style={{ color: 'red', marginTop: ts(20) }}
                >手机号未入驻，请确认</Text>
            }
        </View>
        <View style={{
            marginTop: ts(20),
        }}>
            <View
                style={{
                    width: ts(600),
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    paddingBottom: ts(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TextInput
                    style={{
                        width: ts(300),
                        height: ts(60),
                    }}
                    placeholder='请输入验证码'
                    placeholderTextColor={'#ccc'}
                />
                <TouchableOpacity
                    style={{
                        height: ts(60),
                        width: ts(150),
                        borderRadius: ts(20),
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text>获取</Text>
                </TouchableOpacity>
            </View>


            <Text
                style={{ color: 'red', marginTop: ts(20) }}
            >验证码有误。</Text>
            <View
                style={{
                    marginTop: ts(20),
                    flexDirection: 'row',
                    height: ts(40),
                    alignItems: 'center',
                }}
            >
                {/* 拿到同意隐私协议的状态 */}
                <CRadioForm
                    onchange={(checked) => {
                    }}
                />
                <View style={{
                    height: ts(24),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: ts(10),
                }}>
                    <Text>我已阅读并同意《用户协议》《隐私协议》</Text>
                </View>
            </View>
        </View>
        <View
            style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: ts(100),
            }}
        >
            <CBaseBtn
                title={'登录'}
            />
        </View>
    </View>
})


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