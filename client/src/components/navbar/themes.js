
import { DefaultTheme } from '@react-navigation/native';
import {OFF_BLACK} from "../../styles/colors";

const navTheme = {
    ...DefaultTheme,
    colors: {
    ...DefaultTheme.colors,
    card: OFF_BLACK,
    },
};

export default navTheme;