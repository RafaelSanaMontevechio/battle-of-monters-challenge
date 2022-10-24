import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
  flexDirection: 'column',
}));

export const BattleMonsterTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized: boolean }>(({ centralized }) => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '42px',
  color: colors.black,
  alignSelf: centralized ? 'center' : '',
}));

export const MonsterImage = styled('img')(() => ({
  borderRadius: '7px',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,

  marginTop: '5px',

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

export const Strength = styled(Typography)(() => ({
  fontSize: '12px',
  fontWeight: '400',

  marginTop: '11px',
}));
