import { BattleWinner } from './../../models/interfaces/monster.interface';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import { API_URL } from '../../constants/env';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const initBattle = createAsyncThunk<
  BattleWinner,
  { monster1Id: string; monster2Id: string }
>('monsters/initBattle', async ({ monster1Id, monster2Id }) => {
  return await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monster1Id,
      monster2Id,
    }),
  }).then((response) => response.json());
});
