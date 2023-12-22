import { Dimensions, PixelRatio } from 'react-native';

const UI_WIDTH = 750; // 设计稿宽度
const PIXEL_RATIO = PixelRatio.get();
//设计稿配置
const transformSize = (size: number) => {
    const { width } = Dimensions.get('window');
    return (size / UI_WIDTH) * width;
};
export default transformSize;
