import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { useEffect, memo, useState } from 'react'
import ts from "@util/transformSize.tsx";
interface IProps_CRadioForm {
    onchange?: (checked: boolean) => void
}
const CRadioForm = memo((props: IProps_CRadioForm) => {
    const [checked, setChecked] = useState(false)
    const _onchange = () => {
        props?.onchange && props?.onchange(!checked)
        setChecked(!checked)
    }
        console.log("🚀 ~ file: CRadioForm.tsx:13 ~ CRadioForm ~ checked:", checked)
    return <TouchableOpacity
        onPress={_onchange}
        style={[styles.nomal,]}
    >
        <View
            style={[{
                width: ts(14),
                height: ts(14),
                borderRadius: ts(14),

            }, checked ? styles.checked : styles.unChecked
            ]}
        >

        </View>
    </TouchableOpacity>
})
const styles = StyleSheet.create({
    nomal: {
        width: ts(24),
        height: ts(24),
        borderRadius: ts(24),
        borderWidth: ts(1),
        borderColor: '#2287f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#2287f9',
    },
    unChecked: {
        backgroundColor: 'transparent',
    }
})
export default CRadioForm