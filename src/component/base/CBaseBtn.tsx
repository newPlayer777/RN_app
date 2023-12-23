import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { memo } from "react";
import ts from "@util/transformSize.tsx";
interface IProps_CBaseBtn {
    title: string
    width?: number
    height?: number
    btStyle?: object
    titleStyle?: object
}
/**
 * 普通文字按钮
 */
const CBaseBtn = memo((props: IProps_CBaseBtn) => {
    const { title, width = ts(240), height = ts(90) } = props
    const btnStyle = props?.btStyle ?? {}
    const titleStyle = props?.titleStyle ?? {}
    return <TouchableOpacity
        style={[
            styles.nomal,
            {
                width,
                height,
            },
            btnStyle
        ]}
    >
        <Text
            style={titleStyle}
        >{title}</Text>
    </TouchableOpacity>
})
const styles = StyleSheet.create({
    nomal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: ts(20),
        borderWidth: 1,
        
    }
})
export default CBaseBtn