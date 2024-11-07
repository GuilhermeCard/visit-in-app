import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEstablishmentHomeViewModel } from './ViewModel';
import { Camera, useCameraPermissions,CameraView} from 'expo-camera';
import { useNavigation } from 'expo-router';

export default function EstablishmentHomeView() {
  const { permission, requestPermission} = useEstablishmentHomeViewModel()

  const teste = async () => {
    console.log("aqui", permission)
    if(!permission.granted) {
      console.log("aqui22")
      const {status} = await Camera.requestCameraPermissionsAsync()
      
      if(status  !== 'granted'){
        alert('Desculpe, precisamos da permissão da câmera para fazer isso funcionar!');
      } else {
        requestPermission()
        //navigate...
      }

    }
    else {
      
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VISIT-IN</Text>
      
      <Text style={styles.subtitle}>
        What you wanna <Text style={styles.highlight}>do?</Text>
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={teste}>
          <LinearGradient 
            colors={['#A445B2', '#D41872']} 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 1 }} 
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Validate check-in</Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <LinearGradient 
            colors={['#A445B2', '#D41872']} 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 1 }} 
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Register reward</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 24,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 50,
  },
  highlight: {
    color: '#D41872',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
