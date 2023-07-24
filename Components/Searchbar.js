import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        onSubmitEditing={handleSearch}
      />
      <IconButton
        icon="magnify"
        onPress={handleSearch}
        color="#6200ee"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F6F9F8',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'white',
    width: 300,
    height: 37,
    borderWidth:0,
    borderRadius:40,
    paddingLeft:20,
    marginHorizontal:24,
  },
});

export default SearchBar;
