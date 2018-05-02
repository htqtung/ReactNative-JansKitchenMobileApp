import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    Image 
} from 'react-native';
import styles from './styles';
import { 
    Card, 
    ListItem, 
    Button 
} from 'react-native-elements'


export default class RecipeList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.data.results.map((u, i) => {
                        return (
                            <Card
                                key={i}
                                titleStyle={styles.title}
                                title={u.title}
                                containerStyle={styles.cardStyle}
                            >
                                <Text style={styles.text}>by {u.author}</Text>
                                <Image
                                    style={styles.image}
                                    resizeMode="cover"
                                    source={{ uri: u.href }}
                                />
                                <View style={styles.row} >
                                    <Button
                                        small
                                        icon={{ name: 'favorite-border', color: '#FF1744' }}
                                        title={u.love.toString()}
                                        buttonStyle={styles.smallButton}
                                        textStyle={styles.buttonOnCardText}
                                    />
                                    <Button
                                        small
                                        icon={{ name: 'bookmark-border', color: '#FF1744' }}
                                        buttonStyle={styles.smallButton}
                                    />
                                </View>
                            </Card>
                        );
                    })
                }
            </View>
        );
    }
}