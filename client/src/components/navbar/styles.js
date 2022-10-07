import { StyleSheet } from "react-native";
import { BLUE, OFF_BLACK, RED, WHITE } from "../../styles/colors";

const navbarStyles = StyleSheet.create({
  navbarContainer: {
    flex: 1,
    backgroundColor: OFF_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60
  },
  activeColor: {
    color: BLUE
  },
  inactiveColor: {
    color: WHITE
  },
  size:{
    size: 60
  },
  flex:{
    justifyContent: 'flex-end'
  }
  
});

export default navbarStyles;