import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import bannerImage from '../assets/consulta_ja_logo_1.png';

const ServicoScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Image source={bannerImage} style={styles.banner}/>
        <Text style={styles.title}>Serviços</Text>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Cancelamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Acompanhamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Exames</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Avaliar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Avaliações</Text>
        </TouchableOpacity>
       </ScrollView>
    )
};

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
    },
    banner:{
        width:'100%',
        height: 150,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    serviceButton:{
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems:'center',
    },
    serviceButtonText: {
        color: '#fff',
        fontSize: 18,
    }
})

export default ServicoScreen;