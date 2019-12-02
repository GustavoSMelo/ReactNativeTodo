import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const style = StyleSheet.create({
    styleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleInput: {
        height: 40,
        borderColor: '#715c91',
        borderWidth: 1,
        width: 180,
        margin: 20,
    },

    styleList: {
        margin: 10,
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            todo: [],
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handlePressButton = this.handlePressButton.bind(this);
    }

    handleChangeText = async text => await this.setState({ text });

    handlePressButton = async () =>
        await this.setState({
            todo: this.state.todo.concat(this.state.text),
            text: '',
        });

    render() {
        return (
            <View style={style.styleView}>
                <Text>Hello World! </Text>
                <TextInput
                    style={style.styleInput}
                    onChangeText={text => this.handleChangeText(text)}
                    value={this.state.text}
                />
                <Button
                    color="#715c91"
                    title="Clicka em mim"
                    onPress={this.handlePressButton}
                />

                {this.state.todo.map(item => (
                    <Text key={item.toString()} style={style.styleList}>
                        {item}
                    </Text>
                ))}
            </View>
        );
    }
}

export default App;
