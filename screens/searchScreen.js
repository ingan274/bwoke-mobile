import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon, StyleSheet } from 'react-native-elements'

export default function SearchScreen() {
    return (
        <View>

            <Card
                title='HELLO WORLD'
                image={require('../assets/images/city.gif')}>
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card>

        </View>
    )
}
