import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import { fetchUsers } from '../services/api';
import UserCard from '../components/UserCard';
import auth from '@react-native-firebase/auth';

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  function handleLogout() {
    auth()
      .signOut()
      .then(() => navigation.replace('Login'));
  }

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
      <FlatList
        data={users}
        keyExtractor={item => item.login.uuid}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  error: { color: 'red', textAlign: 'center', marginTop: 20 },
});
