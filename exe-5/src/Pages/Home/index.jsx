import { 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
} from "react-native"


export default function Home() {
    return (
        <>
            <Text style={Styles.containerTexto}>
                Página Principal
            </Text>

            <TouchableOpacity style={Styles.containerBotoes} onPress={() => {alert("Você clicou em Ranking")}}>
                <Text style={Styles.containerTexto}>Ranking</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.containerBotoes} onPress={() => {alert("Você clicou em Cadastro")}}>
                <Text style={Styles.containerTexto}>Cadastro</Text>
            </TouchableOpacity>
        
        </>
    );
}

const Styles = StyleSheet.create({
    containerBotoes:{
        backgroundColor: '#ddd',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
        width: 220
    },
    containerTexto:{
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        margin: 15
    }
})