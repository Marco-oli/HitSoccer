import React from 'react';
import {DataTable} from 'react-native-paper';
import {ITeamInfoProps} from '../../interfaces/TableData';

export interface ITableDataProps {
  teams: ITeamInfoProps;
}

export const TableData = ({teams}: ITableDataProps) => {
  return (
    <DataTable.Row style={{paddingHorizontal: 0}}>
      <DataTable.Cell>
        {teams.posicao} {teams.time.sigla}
      </DataTable.Cell>
      <DataTable.Cell numeric>{teams.pontos}</DataTable.Cell>
      <DataTable.Cell numeric>{teams.jogos}</DataTable.Cell>
      <DataTable.Cell numeric>{teams.vitorias}</DataTable.Cell>
      <DataTable.Cell numeric>{teams.empates}</DataTable.Cell>
      <DataTable.Cell numeric>{teams.derrotas}</DataTable.Cell>
    </DataTable.Row>
  );
};
