import { useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';


const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Text style={styles.title}>Bem-vindo ao</Text>
                <Text style={styles.subtitle}>AgenX</Text>
                <Image source={require('./../../assets/images/agenda.svg')} style={{ width: 250, height: 250, color: 'white' }} />
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button icon={({ direction }) => (
                    <Image
                        source={('https://img.icons8.com/color/480/google-logo.png')}
                        style={[
                            {
                                transform: [{ scaleX: direction === 'rtl' ? -1 : 1 }],
                            },
                            {
                                width: 30,
                                height: 30,
                                tintColor: '#fff'
                            }
                        ]}
                    />
                )}
                    color='#db4a39'
                    mode="contained"
                    contentStyle={styles.loginButton}
                    style={{ borderRadius: 25 }}
                    onPress={() => navigation.navigate('Details')}>
                    Login Google
                </Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 35,
    },
    firstContainer: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        width: '100%',
        alignSelf: 'center',
        fontWeight: 500,
        color: '#555555',
        fontFamily: 'Anek_Latin'
    },
    subtitle: {
        fontSize: 40,
        fontWeight: 700,
        alignSelf: 'center',
        paddingTop: -20,
        paddingBottom: 20,
        color: '#555555',
        paddingBottom: 50,
        fontFamily: 'Anek_Latin'
    },
    loginButton: {
        justifyContent: 'space-between',
        alignItems: 'center',
        tintColor: '#db4a39',
        color: '#db4a39',
        backgroundColor: '#db4a39',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 45,
        borderRadius: 20
    },
});

export default Login;