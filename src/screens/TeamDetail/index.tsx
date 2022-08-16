import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {IListStackNavigatorProps} from '../../Routes';

export const TeamDetail = () => {
  const {
    params: {team},
  } = useRoute<RouteProp<IListStackNavigatorProps, 'TeamDetail'>>();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Header />
      <Image
        source={{uri: team?.time.escudo}}
        resizeMode="contain"
        style={{width: 150, height: 150}}
      />

      <View style={styles.containerInfos}>
        <Text style={styles.TitleInfo}>Posição: {team.posicao}</Text>
        <Text style={styles.TitleInfo}>Pontos: {team.pontos}</Text>
        <Text style={styles.TitleInfo}>Nome: {team.time.nome_popular}</Text>
        <Text style={styles.TitleInfo}>Sigla: {team.time.sigla}</Text>
        <Text style={styles.TitleInfo}>Jogos: {team.jogos}</Text>
        <Text style={styles.TitleInfo}>Vitorias: {team.vitorias}</Text>
        <Text style={styles.TitleInfo}>Empates: {team.empates}</Text>
        <Text style={styles.TitleInfo}>Derrotas: {team.derrotas}</Text>
        <Text style={styles.TitleInfo}>Gols pró: {team.gols_pro}</Text>
        <Text style={styles.TitleInfo}>Gols contra: {team.gols_contra}</Text>
        <Text style={styles.TitleInfo}>Saldo de gols: {team.saldo_gols}</Text>
        <Text style={styles.TitleInfo}>
          Aproveitamento em %: {team.aproveitamento}
        </Text>
        <Text style={styles.TitleInfo}>
          Ultimos jogos:{' '}
          {team.ultimos_jogos.map(item => (
            <Text style={{borderWidth: 1, borderColor: 'red'}}> {item} </Text>
          ))}
        </Text>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  containerInfos: {
    width: '100%',
    marginTop: 20,
  },
  TitleInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
