import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import { auth } from "../firebase"; // Certifique-se de que o auth está configurado corretamente
import { signInWithEmailAndPassword } from "firebase/auth";
 
export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            if (initializing) setInitializing(false);
        });
 
        return unsubscribe; // Limpa o listener quando o componente é desmontado
    }, [initializing]);
 
    function logar() {
        signInWithEmailAndPassword(auth, email, senha)
            .then(() => {
                navigation.navigate('Rotas', { email });
            })
            .catch((error) => {
                Alert.alert("Erro", error.message); // Use Alert para mensagens de erro
            });
    }
 
    if (initializing) {
        return <View><Text>Carregando...</Text></View>; // Adicione uma tela de carregamento
    }
 
    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Entrar</Text>
            <TextInput
                style={estilo.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Digite o email."
            />
            <TextInput
                style={estilo.input}
                secureTextEntry={true}
                onChangeText={setSenha}
                placeholder="Digite a senha."
            />
            <TouchableOpacity style={estilo.botaoLogar} onPress={logar}>
                <Text style={estilo.textoBotaoLogar}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}
 
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#116611',
    },
    titulo: {
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 35,
    },
    input: {
        width: 250,
        height: 30,
        backgroundColor: '#5f5c',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 25,
    },
    botaoLogar: {
        width: 200,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00008B',
        marginVertical: 40,
    },
    textoBotaoLogar: {
        fontSize: 25,
        color: '#fff',
    },
});
 
 