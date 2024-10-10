import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Cat({ breed, image }) {
  const [p, setP] = useState(false);

  const setAsPet = (isPet) => {
    if (isPet == false) {
      return true;
    } else if (isPet == true) {
      return true;
    }
  };

  if (p) {
    return (
      <Pressable>
        <Image style={styles.petted} source={{ uri: image }} />
        <Text style={styles.petText}>Thank you for petting me</Text>
      </Pressable>
    )
  }

  return (
    <Pressable style={{ marginHorizontal: 16, alignItems: 'center' }} onPress={() => setP((p) => setAsPet(p))}>
      <Image style={styles.cat} source={{ uri: image }} />
      <Text style={styles.breed}>Hi, I am a {breed}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cat: {
    marginVertical: 10,
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  petted: {
    marginVertical: 10,
    width: 100,
    height: 100,
    borderRadius: 16,
    opacity: 0.2,
  },
  petText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FF11FF',
  },
  breed: {
    textAlign: 'center',
    fontSize: 16,
  },
});
