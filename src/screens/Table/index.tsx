import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TableData} from '../../components/TableData';
import {DataTable} from 'react-native-paper';

import Mock from '../../services/backend-classification.json';
export const TableScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabela</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={Mock}
        ListHeaderComponent={
          <DataTable.Header style={{paddingHorizontal: 0}}>
            <DataTable.Title>Classificação</DataTable.Title>
            <DataTable.Title numeric>P</DataTable.Title>
            <DataTable.Title numeric>J</DataTable.Title>
            <DataTable.Title numeric>V</DataTable.Title>
            <DataTable.Title numeric>E</DataTable.Title>
            <DataTable.Title numeric>D</DataTable.Title>
          </DataTable.Header>
        }
        renderItem={({item}) => <TableData teams={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
