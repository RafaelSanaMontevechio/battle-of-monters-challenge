import Divider from '@mui/material/Divider';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  MonsterImage,
  ProgressBar,
  Strength,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <BattleMonsterCard centralized>
      {monster && <MonsterImage src={monster?.imageUrl} alt={monster.name} />}

      <BattleMonsterTitle centralized={monster ? false : true}>
        {title!}
      </BattleMonsterTitle>

      {monster && (
        <>
          <Divider sx={{ marginTop: '5px' }} />

          <Strength>HP</Strength>
          <ProgressBar variant="determinate" value={monster?.hp} />

          <Strength>Attack</Strength>
          <ProgressBar variant="determinate" value={monster?.attack} />

          <Strength>Defense</Strength>
          <ProgressBar variant="determinate" value={monster?.defense} />

          <Strength>Speed</Strength>
          <ProgressBar variant="determinate" value={monster?.speed} />
        </>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
