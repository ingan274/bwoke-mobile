import React, { PureComponent, Component, Fragment } from 'react';
import { Platform, StyleSheet, Dimensions, AsyncStorage, View, Text, Navigator, PropTypes, TouchableOpacity } from 'react-native';
import color from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Forminput from '../components/formInput';
import FormButton from '../components/formButton';
import {
    Header,
    ListItem,
} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
window.navigator.userAgent = 'ReactNative';


export default class ChatRoom extends Component {
    state = {
        rooms: ["Immigration", "Women's Rights", "Foster Families", "LGBTQIA", "Civil Rights", "Animals", "Environment", "International", "Community Developement", "Public Policy", "Gun Safety"],
        newRoom: ''
    }

    avatar = [
        {
            name: 'Feeding America',
            avatar_url: 'https://bit.ly/386i8AE',
            subtitle: 'Vice President'
        },
        {
            name: "Boys and Girl's Club",
            avatar_url: 'https://bit.ly/34M9tB7',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'American Red Cross',
            avatar_url: 'https://bit.ly/34O6MiE',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Americares',
            avatar_url: 'https://bit.ly/2rbH9cY',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'UNICEF USA',
            avatar_url: 'data:image/png;base64,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',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Make-A-Wish Foundation',
            avatar_url: 'https://bit.ly/2RgaXj9',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'United Way Worldwide',
            avatar_url: 'data:image/png;base64,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',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Task Force for Global Health',
            avatar_url: 'https://bit.ly/34OigCK',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'The Salvation Army',
            avatar_url: 'https://bit.ly/34O9DrS',
            subtitle: 'Vice President'
        },
        {
            name: "St. Jude Children's Research Hospital",
            avatar_url: 'https://bit.ly/2YdoM3i',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Direct Relief',
            avatar_url: 'https://bit.ly/33OlRPT',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Habitat for Humanity',
            avatar_url: 'https://bit.ly/2OKc3SC',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'YMCA',
            avatar_url: 'https://bit.ly/35SZsT0',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Goodwill',
            avatar_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEhIQEBEQDxAVEBAQDxAQFREPEBERFhYXFhYTFRUYHSggGholJxUVITEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OGg8QGC4lHyU3Ny0wLTIrLisrLS4uKysrNy0tKy0rLSswKzctLTc3LywtLS0tLys3Nzc3LTgrLTcrN//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAACAEEBQYHAwL/xABNEAABAwECBwsJBAYJBQAAAAABAAIDBAURBgcSITVRshMUFzEyQVRhcXJ0CCJSc5GSk7HRNFOBoRYlQqKz0hgkJjM2YoKEwxUjY8HT/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAQFBgIDAf/EACoRAQABAgMIAQQDAAAAAAAAAAABAgMEMlEFERQVITNBcTESEyKBYZGh/9oADAMBAAIRAxEAPwDuKIo84ysYdqUdpVNPBUlkTHNDGZLTcC0HnCCQyKKfCxbXSz7jPonCxbXSz7jPoglYiinwsW10s+4z6JwsW10s+4z6IJWIop8LFtdLPuM+icLFtdLPuM+iCViKKfCxbXSz7jPonCxbXSz7jPoglYiinwsW10s+4z6JwsW10s+4z6IJWIop8LFtdLPuM+icLFtdLPuM+iCViKKfCxbXSz7jPonCxbXSz7jPoglYiinwsW10s+4z6JwsW10s+4z6IJWIop8LFtdLPuM+icLFtdLPuM+iCViKKfCxbXSz7jPonCxbXSz7jPoglYiinwr210s+4z6KSOBVbJUUFHPK7LlkpoZJHcV7nNBJQZtERAUUMcWl6zvs2GqV6ihji0vWd9mw1Br+Dlgz2jMKamaHSlrnAOOSLhx51t3A1bP3UXxGquIfS0fqZvkFKBBF7gatn7qL4jU4GrZ+6i+I1ShRBF7gatn7qL4jU4GrZ+6i+I1ShRBF7gatn7qL4jU4GrZ+6i+I1ShRBF7gatn7qL4jVrWFWCVXZb42VbWsdI0vZkuD7wDceJTGXAPKT+00fqJNsIOOtbfm/BXO8X9XtXhDxjtCzatdnYK3iIqmvw8btyaN25it4P6vam8H9XtWURWfJ7GsvHiKmL3g/q9qbwf1e1ZRE5PY1k4ipi94P6vam8H9XtWURfOT2NZOIqYveD+r2r5lpXNF5uuWWVvX8g9oXjiNl2bduquJno6ovTMxDFKX+LnRdn+Dp9gKICl/i50XZ/g6fYCzyU2NERAUUMcWl6zvs2GqV6ihji0vWd9mw1Bf4h9LR+pm+QUoFF/EPpaP1M3yClAgIitrQroqeN0sz2xRsBc97zktA6yguUXG7dx9QRvLKOlfUtGbdZX7g0n/ACsySSO27sVvZOP5jntbVUTo2E3GSGTdC0a9zc0X+8g7Yix1h21T10TZ6aRssbuIt4wdRHGD1FZFAXAPKU+00XqJNsLv64B5Sn2mi9RJthBx+HjHaFm1hIeMdoWbWh2JlrRcR4UREV6jCIiAiIgK3r+Qe0K4VvX8g9oUXG9iv07t5oYpS/xc6Ls/wdPsBRAUv8XOi7P8HT7AWLWDY0REBRQxxaXrO+zYapXqKGOLS9Z32bDUF/iH0tH6mb5BSgUX8Q+lo/UzfIKUCAo5Y+sK5KirNAxxFPT3ZbRmy5znJdrAFwA7VIxRCxjxubadaH8rfD7/AMbiPyIQa0qhURBvWKPCuSzq6Nhcd7zubDOy/wA29xua8D0gbs+olSoChRZLHOnha3lGaINu9IuFympACGtB4w1oPbcg9FwDylPtNF6iTbC7+uAeUp9po/USbYQcfh4x2hZtYSHlDtCza0OxMtaLiPCiIivUYREQEREBW9fyD2hXCt6/kHtCi43sV+ndvNDFKX+LnRdn+Dp9gKICl/i50XZ/g6fYCxawbGiIgKKGOLS9Z32bDVK9RQxxaXrO+zYagv8AEPpaP1M3yClAov4h9LR+pm+QUoEBcOx74CyvkFp0sZkaW5NWxmdzcnkygc4uzHVcOu7uKo5oOY5xzg8SCD1yXKVlv4q7JrXGR8BikOdz4HGK86y3k3/grex8UFj0zg/cXzuBvBneXj3Rc0+xBy/ElgNLVVLK+eMtpYfPiLs27Tfs5I52jjJ6gM+e6RoXzFE1gDWgNaBcABcANQC+0BcA8pT7TReol2wu/rgHlKfaaL1Eu2EHH4eUO0LNrCQ8Y7Qs2tDsTLWi4jwoiIr1GEREBERAVvX8g9oVwrev5B7QouN7Ffp3bzQxSl/i50XZ/g6fYCiApf4udF2f4On2AsWsGxoiICihji0vWd9mw1SvUUMcWl6zvs2GoL/EPpaP1M3yClAov4h9LR+pm+QUoEBERAREQEREBcA8pT7TReol2wu/rgHlKfaaL1Eu2EHH4eMdoWbWEh4x2hZtaHYmWtFxHhRERXqMIiICIiArev5B7QrhW9fyD2hRcb2K/Tu3mhilL/Fzouz/AAdPsBRAUv8AFzouz/B0+wFi1g2NERAUUMcWl6zvs2GqV6ihji0vWd9mw1Bf4h9LR+pm+QUoFEXFthLFZdayrmZI+MRyMLYg0vvcM3KIH5rsHD1ZvRq73YP/AKIOtK3rayOBjpZXtjjaL3PebgAuLWtj+zEUlFnu819RJmB642DP7wXMMKcNK+1DfVTFzAb2xMGRC3/SP/d6Do+EGPGVtZfRxtfRsvaRJ5r59bwRyRq/PUunYFYf0NrN/wCy/c5gPPp5bmyN7OZw6x+SiVHE5xDWgucSA1rQSSTxAAcZUicT2LU0OTXVjf625p3KI597tcM5P+cj2DMg6uiIgLgHlJn+s0fqJNsLv6jNj8tHdrTMYN4hhjju1OPnH5hBzmDlN7Qs2sRRtveFl1o9i0/hVP8AKLiPmFERFdowiIgIiICt6/kHtCuFb1/IPaFFxvYr9O7eaGKUv8XOi7P8HT7AUQFL/Fzouz/B0+wFi1g2NERAUUMcWl6zvs2GqV6ihji0vWd9mw1BpaLfcSVJHNakbJY2Ss3KUlkjWvbeAOY5lJH9G6DodJ8CH+VBDSOMuIa0FzibgACST1ALdcG8Vdq1pB3A00RuJkqL483UzlE/gFKOmooohdHHHGNTGtYPyC90Gj4C4saKyrpLt8VV2eeQDzeqNvE3t41vCqiAiKhQW9o1jKeKSaQhsccbpHuOa5rRefkoa2/abqypnqX35Usr5LjnyQT5rfwFw/Bdrx+YZtZH/wBLhdfI/JfVEfsM42xnrOY3au1cGAQXlmszl2oXLILyposhoHPxleq2OAs/asRE/KBdq+qoREU15iIiAiIgK3r+Qe0K4VvX8g9oUXG9iv07t5oYpS/xc6Ls/wAHT7AUQFL/ABc6Ls/wdPsBYtYNjREQFFDHFpes77NhqleooY4tL1nfZsNQX+IfS0fqZvkFKBRgxD6Wj9TN8gpPoCIiAiK3ra2OBhkleyJg43PIa0fiUHuStGxmYwobIiyGESVj2ncogR5gObdJNTdWtanh5jrjjDobMAlk4jUvB3NmvIb+0evi7VwyvrZZ5HSzPdJI83ve83uJQUraySeR80rjJI95e97s5c4m8lelBBeco8Q/MrypqcvPVzlZVjQ0XDiVvs3Azcqi5VHSP9eF659Mbo+X0qIi0yGIiL6CIiAiIgK3r+Qe0K4VvX8g9oUXG9iv07t5oYpS/wAXOi7P8HT7AUQFL/Fzouz/AAdPsBYtYNjREQFFDHFpes77NhqleooY4tL1nfZsNQYvAfCZ1lVTatsYmLWPZkOcWA5XPfcV0j+kBP0CL4z/AOVcZa0nizr63J2orqKKp6xBvdk/pAT9Ai+M7+VfEmP+pI82hhaeuR7hshce3J2ooInaivv269J/p83w6PaeOy1pQWxmnpv80ceU8fi8kfktGte3auscX1NRNOf/ACPc4DsbxAdgVo2lef2T+OZe8dAec3fmva3g71zLTL5NdMeVncrumoyc7sw/Mq8ipmt4hedZXsrfC7I3fldn9I9d/wAUvlrQBcBcF9KiK8ppimN0IwiIugREQEREBERAVvX8g9oVwrev5B7QouN7Ffp3bzQxSl/i50XZ/g6fYCiApf4udF2f4On2AsWsGxoiICihji0vWd9mw1SvUUMcWl6zvs2GoNWs7l/gVlFi7O5f4FZNafY8b7H7Q7+ZW9FRFbboeHVVUREFUVEX0EREBERAREQEREBERAVvX8g9oVwrev5B7QouN7Ffp3bzQxSl/i50XZ/g6fYCiApf4udF2f4On2AsWsGxoiICihji0vWd9mw1SvUUMcWl6zvs2GoNUoXhrrybsxWQNUz0gsOisMNtC5h6PopiHnXaiqd8sxvpnpBN9M9ILDopHOb2kOOHpZjfTPSCb6Z6QWHROc3tIOHpZjfTPSCb6Z6QWHROc3tIOHpZjfTPSCpvpnpBYhE5ze0g4elmN9M9IJvpnpBYdZuowRtGOIzyUdQyENyzI5jgwN9K/UnOb2kHD0vjfTPSCb6Z6QWHROc3tIOHpZjfTPSCb6Z6QWHROc3tIOHpZjfTPSCb6Z6QX3T4IWjJEJ46OofCWl4kaxxYW+kDqVrY9hVdaXClp5agsALxE0vyQb7r7uLiPsTnN7SDh6XvvpnpBeFZO1zSAQTmXzPYtTHMKV8ErKgloEJaRIS7iAb1q4tbBmuo2h9TSzwMJyQ6Rha0nVevO7tW7comiYjq+02Yid7EKX+LnRdn+Dp9gKICl/i50XZ/g6fYCq3s2NERAUUMcWl6zvs2GqV6ihji0vWd9mw1BqVJSSTOyIo3yvuJyY2ue64c9wzq9/R2u6HV/Bl/lW8eT7pX/azfNq7xhVhhRWWIzVy7nuhIY1oL3G7jdcOYXjOgia+wK1oJNJVADOSYZQANZNytqShlmJbDHJM4C8iJrpCBrIaOJTJqqlk1K+WNwfG+B7mOGcOaWm4rifk1f39b6mHacg5Z+j1d0Sq+DL/KqOsGtaCXUlUABeSYZQANZNylThnhxR2Rue+S/Kkyshkbcp2S269x6s4WYjrY6mm3eIh8UkBex3MWubeEENqSgmnJEMUsxFxcImOkIHMTkjMrn9Hq7olV8GX+Vdc8mYZ7R7KP/nXSMMcP6GyXxRVJflyNyw2NuXksvuyndV4PsQRZksOsYC51LUtaBe5zopQ0DWSRmXjR2ZPMCYYZZgDcTEx8gB68kFTAt2ZstBUSMIcx9FM9h5i10TiD+YXN/Jt+x1Xih/Dag4gMHa45t6VWfN/cy/RSlw4F1kVQOY7yN4/0heWFGMSgs2oZS1Dn7o4Nc7IblNja43AvPNrV1jCcDZdaRnBpXkdlyCJtJZlRML4YJpWjMTHG+QA6iWhUis6d7zEyGV8rb8qNrHukbdx3tAvHGPapC+TwP1dJ4l/yCsMBR/ae1fDybdOg4TLZ07HiJ8MrZHcmNzHtkdquaReVWrsuohGVNBNE0m4GSN8YJ1AuC7vh6P7S2T6lu3Mr/wAoYfq1niWfIoKYI4c0cNlU8bm1ZeykyXZNLUvYSAeJ4Zkkdd9y1zyZ+VaPdpPnMuk4CD9T0vghslc28mflWj3aT5zIPjC7/FdN3qX+GVtHlC6Mb4mP5Favhf8A4rpu2l2Cto8oXRjfEx/IoI2qX+LnRdn+Dp9gKICl/i50XZ/g6fYCDY0REBRQxxaXrO+zYapXqKGOLS9Z32bDUGY8nzSv+1m+bV2rDrAKltjcjO6SN8ROS6MgEtdcXNIOu4KPmKe15qOu3WClkrX7hI3cYjkuuN17r7jmF35rslLbFvWlUwNjpDZNJHIySokmIe+VgN5jAI5+LMOfjQbuaCOlo3U8QyY46dzGDj80NK4v5NX9/Xeph23LsmF1px0lFUzyEBrIJDcf2nFpDWjrJIH4qJFiW9VULnPpZnwOc3JeWXecOO43oJV4YYEUVrbnvpriYy7IdG7IcA668X6swWWjoo6em3CJoZHHAY42jia1rbgFFbhItnp8/wC59F8S4w7Xe0tdXTlrgWuHmi8HMeIIOkeTNx2j2UX/ADrpWF2AVBaz45Kpjy+NpY1zHFhLL78l13GL7/aVFmxMIqugL3Uk76cvAD8i7zgL7r79V59qy/CRbPT5/wBz6IJQW9A2OgqY2ANY2inYxo4g1sTgAPYub+Td9jqvFD+G1ciqsP7WlY6OStncx7Sx7b2i9pFxGYKysTCmuoWubSVEkDXHKeGXXF3FfnBQSewlxe2faM7KqpjcZWBoOS7JD2tN4Dxzr3xhNAsutAzAUrwBqFyjZwkWz0+f9z6K3r8O7UqI3QzVk0kbwWvYcm5w1G4IO2+Tzo6TxL/kFudmYIUtNWz2hGH74naWSXuvZcS0m5vNyGqK9i4WV9Cwx0tTLAwuyi1t11+vOFkOEi2enz/ufRBJi1MEaWprKe0JMvfEDcmLJdc269xzjn5Tlp3lDaNZ4mP5FcX4R7Y6fP8AufRWFtYWV9cwR1VTLOwOyg1112VrzBBJzATQ9L4IbJXNvJn5Vo92k+cy5lS4b2nFEKeOsmZCGbm2MZNwZqBuvVnYeEVXQF5pJ3wF4aJMi7zg2+6+8c159qDq2F/+K6bvUuwVtHlC6Mb4mP5FR/qbfqpagVb55HVILSJiRlgtFwu5syuLawsr65gjqqmSdgdlBr8m4HXmCDCqX+LnRdn+Dp9gKICl/i50XZ/g6fYCDY0REBRQxxaXrO+zYapXlRQxwn9b1nfZsNQe2Ju3KagtDdqqQRRbhKzLIJGUcm4ZuwrtVZjfsWMG6odIbszY45HX9V91yi4l6De8ZGMme2CImtMFI12U2K+9z3czpCM3YOZaGqqiAiIgIiICIiAiIgIiICIiAiIgIiICmBi50XZ/g6fYCiApf4udF2f4On2Ag2NERAVMkalVEFMkagmSNQVUQUyRqCZI1BVRBTJGoJkjUFVEFMkagmSNQVUQUyRqCZI1BVRBTJGoJkjUFVEFMkagmSNQVUQUyRqCZI1BVRBTJGoJkjUFVEFMkagsbb1o71iywzdJHPjhhjGbLlkcGsaTzC85zzAFZNYrCOz5KiICJzWzRyx1EJffkGSN2UGPuzhrs7SRnF96DSqPDedzwBdK7KqBuW93RMl3uTuzIZss+c24kZQF93NeuiUdQ2WNkjM7Hta9vYReFzGzcE54pGvgpp4KovrN2mndTmDJqSSc7Hlzsi+9tzQTcL7s66ZZ1I2CKOFvJYxrB2NFyC4REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'American Cancer Society',
            avatar_url: 'https://bit.ly/2DLncfP',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Food for the Poor',
            avatar_url: 'https://bit.ly/2LjIGVl',
            subtitle: 'Vice Chairman'
        },
    ]

    goToRoom = async (room) => {
        // save room in local storage
        try {
            await AsyncStorage.setItem('room', `${room}`);
            console.log("room entering now: ", room)
            const {
                navigation: { navigate },
            } = this.props;
            navigate('Chat');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    setUpRoom = () => {
        let roomArray = this.state.rooms
        return roomArray.map((room, i) => {
            <TouchableOpacity
                // style={styles.roomButton}
                key={i}
                onClick={this.goToRoom(room)}>
                <Text style={styles.buttonText}>{room}</Text>
            </TouchableOpacity>
        })
    }

    handleSubmit = () => {
        this.state.rooms.push(this.state.newRoom)
        this.setUpRoom()
    }


    render = () => {

        return (
            <Fragment>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    // leftComponent={<MyCustomLeftComponent />}
                    centerComponent={{ text: 'bWoke', style: { color: '#fff' } }}
                    containerStyle={{
                        backgroundColor: '#000',
                        justifyContent: 'space-around',
                    }}
                />
                <ScrollView>
                    <View style={styles.container}>

                        {
                            this.avatar.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    bottomDivider
                                    chevron
                                    width={'100%'}
                                />
                            ))
                        }
                        {/* <Forminput
                        value={this.state.newRoom}
                        // onChangeText={(event) => this.setState({ newRoom: event })}
                        placeholder="New Chat Room"
                        name="newChatroom"
                        autoCorrect={true}
                        returnKeyType="done"
                    />

                    <FormButton label="Create Chatroom" onPress={this.handleSubmit} /> */}
                        {/* {this.setUpRoom()} */}
                    </View >
                </ScrollView>
            </Fragment>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.black,
        // paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: color.green,
        // marginBottom: 250,
        // marginTop: 30,
    },
    text: {
        color: 'white',
        textAlign: "center",
        height: 20
    },
    trendingButton: {
        borderRadius: 24,
        marginLeft: 5,
    }
});
