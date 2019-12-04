import { useDarkMode } from 'react-native-dark-mode'
 
function Component() {
    const isDarkMode = useDarkMode()
    return <View style={{ backgroundColor: isDarkMode ? 'black' : 'white' }} />
}