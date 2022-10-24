import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import {
  BattleWinner,
  Monster,
} from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  initBattle,
} from '../../reducers/monsters/monsters.actions';
import {
  selectBattleWinner,
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';

const BattleOfMonsters = () => {
  const [computerMonster, setComputerMonster] = useState<Monster | undefined>(
    undefined,
  );
  const [winner, setWinner] = useState<BattleWinner | undefined>(undefined);

  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const battleWinner = useSelector(selectBattleWinner);
  const selectedMonster = useSelector(selectSelectedMonster);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  useEffect(() => {
    if (battleWinner) {
      setWinner(battleWinner);
    }
  }, [battleWinner]);

  function getRandom(max: number) {
    return Math.floor(Math.random() * (max - 0) + 1) - 1;
  }

  const chooseMonster = useCallback(() => {
    setWinner(undefined);

    const filteredMonsters = monsters.filter(
      (monster) => monster.id !== selectedMonster?.id,
    );

    const random = getRandom(filteredMonsters.length);
    const chosenMonster = filteredMonsters[random];

    setComputerMonster(chosenMonster);
  }, [monsters, selectedMonster?.id]);

  useEffect(() => {
    if (selectedMonster) {
      chooseMonster();
    } else {
      setComputerMonster(undefined);
    }
  }, [chooseMonster, computerMonster, monsters, selectedMonster]);

  const handleStartBattleClick = () => {
    if (selectedMonster && computerMonster) {
      dispatch(
        initBattle({
          monster1Id: selectedMonster.id,
          monster2Id: computerMonster.id,
        }),
      );
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {winner && <WinnerDisplay text={winner.winner.name} />}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={computerMonster?.name || 'Computer'}
          monster={computerMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
