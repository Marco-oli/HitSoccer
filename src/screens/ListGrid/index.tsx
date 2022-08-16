import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ListCard} from '../../components/ListCard';

import Mock from '../../services/backend-classification.json';

export const ListGridScreen = () => {
  const [text, setText] = useState('');
  const [buttonSelected, setButtonSelected] = useState('');

  const buttons = [
    'nome',
    'aproveitamento acima de',
    'saldo de gols acima de',
    'ultimo jogo com vitoria',
    'ultimo jogo com derrota',
  ];

  const handleSelectButton = useCallback((item: string) => {
    setButtonSelected(item);

    if (
      item === 'ultimo jogo com vitoria' ||
      item === 'ultimo jogo com derrota'
    ) {
      setText('');
    }
  }, []);

  const showFilteredTeams = useCallback(() => {
    if (buttonSelected === 'ultimo jogo com vitoria') {
      return Mock.filter(item =>
        item.ultimos_jogos[item.ultimos_jogos.length - 1].includes('v'),
      );
    }

    if (buttonSelected === 'ultimo jogo com derrota') {
      return Mock.filter(item =>
        item.ultimos_jogos[item.ultimos_jogos.length - 1].includes('d'),
      );
    }

    if (buttonSelected === 'saldo de gols acima de') {
      return Mock.filter(item => item.saldo_gols > Number(text));
    }

    if (buttonSelected === 'aproveitamento acima de') {
      return Mock.filter(item => item.aproveitamento > Number(text));
    }

    if (buttonSelected === 'nome') {
      return Mock.filter(item => item.time.nome_popular.includes(text));
    }

    return Mock;
  }, [buttonSelected, text]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 15}}>
              Filtrar por:{' '}
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.containerButtons}>
              {buttons.map(item => (
                <TouchableOpacity
                  style={
                    buttonSelected === item
                      ? styles.buttonSelected
                      : styles.button
                  }
                  onPress={() => handleSelectButton(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TextInput
              value={text}
              onChangeText={setText}
              editable={
                buttonSelected === 'nome' ||
                buttonSelected === 'aproveitamento acima de' ||
                buttonSelected === 'saldo de gols acima de'
              }
              placeholder="Digite aqui"
              style={{backgroundColor: 'white', padding: 10, borderRadius: 4}}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={showFilteredTeams()}
        numColumns={3}
        renderItem={({item}) => <ListCard team={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  containerButtons: {
    marginBottom: 10,
  },
  buttonSelected: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: 'green',
    marginRight: 10,
  },
  button: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: 'white',
    marginRight: 10,
  },
});
