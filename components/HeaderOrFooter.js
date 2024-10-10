import { Text, View, StyleSheet } from 'react-native';

export default function ListHeaderOrFooter({ isHeader }) {
  if (isHeader) {
    return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        This is a list of cats
      </Text>
    </View>
  );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        This is the end of the cats
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  headerText: {
    size: 14,
    color: '#FF00FF',
  },
  footerText: {
    size: 16,
    color: '#00FF2A',
  },
});
