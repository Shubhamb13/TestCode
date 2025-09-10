import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.picture.thumbnail }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>
        <Text>Age: {user.dob.age}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Location: {user.location.city}, {user.location.country}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  image: { width: 50, height: 50, borderRadius: 25 },
  name: { fontWeight: 'bold' },
});
