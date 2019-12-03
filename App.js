import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';

const style = StyleSheet.create({
    styleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
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

    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7151c9',
    },

    styleMargin: {
        marginTop: 50,
    },

    todoText: {
        margin: 10,
        fontSize: 20,
        borderWidth: 1,
        padding: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
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
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChangeText = async text => await this.setState({ text });

    handlePressButton = async () => {
        let verify = 0;

        this.state.todo.map(item => {
            if (item === this.state.text) {
                alert('Sorry, but this todo is already registred ');
                verify++;
            }
        });

        if (verify != 1) {
            await this.setState({
                todo: this.state.todo.concat(this.state.text),
                text: '',
            });
        }
    };

    handleRemove = async item => {
        const filter = this.state.todo.filter(value => value !== item);

        await this.setState({ todo: filter });
    };

    render() {
        return (
            <View style={style.styleView}>
                <Text style={style.titleStyle}>Todo App </Text>
                <TextInput
                    style={style.styleInput}
                    onChangeText={text => this.handleChangeText(text)}
                    value={this.state.text}
                />
                <Button
                    color="#715c91"
                    title="Click"
                    onPress={this.handlePressButton}
                />

                <View style={style.styleMargin} />

                {this.state.todo.map(item => (
                    <TouchableOpacity
                        key={item.toString()}
                        style={style.todoText}
                    >
                        <Text
                            style={style.styleList}
                            onPress={() => this.handleRemove(item)}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

export default App;
