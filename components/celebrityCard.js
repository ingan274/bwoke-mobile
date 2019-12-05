import React, {  PureComponent, Component, Fragment  } from 'react';
import {
    Card,
    Caption,
    ImageBackground,
    Image,
    ListView,
    Columns,
    Tile,
    Title,
    Subtitle,
    Overlay,
    Screen,
    TouchableOpacity,
    GridRow,
    View,
} from '@shoutem/ui';

export default function eventCard(props) {
    return (
        <Fragment>
            <View styleName="sm-gutter">
                <ImageBackground
                    styleName="featured placeholder"
                    source={props.image}
                >
                    <Tile>
                        <Title>{props.celeb}</Title>
                        <TouchableOpacity onPress={props.onClick}>
                            <View styleName="horizontal md-gutter-top" virtual>
                                <Caption
                                    styleName="collapsible"
                                    numberOfLines={1}>
                                    See the Charities They Support
                            </Caption>
                            </View>
                        </TouchableOpacity>
                    </Tile>
                </ImageBackground>
            </View>
        </Fragment>
    )
}


