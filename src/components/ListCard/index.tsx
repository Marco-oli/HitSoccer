import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ITeamInfoProps} from '../../interfaces/TableData';
import {IListStackNavigatorProps} from '../../Routes';

export interface IListCardProps {
  team: ITeamInfoProps;
}

export const ListCard = ({team}: IListCardProps) => {
  const navigation =
    useNavigation<NavigationProp<IListStackNavigatorProps, 'TeamDetail'>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TeamDetail', {team})}>
      <Image
        resizeMode="contain"
        source={{uri: team.time.escudo}}
        style={{width: 50, height: 50, marginBottom: 10}}
      />

      <Text style={styles.name}>{team.time.nome_popular}</Text>
      <Text>{team.posicao}˚ lugar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 8,
    paddingVertical: 10,
  },
  containerImage: {
    marginBottom: 10,
    width: 50,
    height: 50,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
