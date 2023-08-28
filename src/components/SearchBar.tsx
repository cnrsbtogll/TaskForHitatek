import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface SearchProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    color: '#000',
    borderWidth: 1,
    borderColor: 'gray',
  },
});
