import { API_URL } from '../../constants/env';
import {
  BattleWinner,
  Monster,
} from '../../models/interfaces/monster.interface';

type Battle = { monster1Id: string; monster2Id: string };

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const goBattle = async (params: Battle): Promise<BattleWinner> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monster1Id: params.monster1Id,
      monster2Id: params.monster2Id,
    }),
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  goBattle,
};
