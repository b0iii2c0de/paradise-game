import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { calculateUpgradeBenefit, calculateUpgradeCost } from '../lib/calculations';
import { energyUpgradeBaseBenefit, LEVELS } from '../const/consts'

export interface InitialPlayState {
  userTelegramInitData: string;
  userTelegramName: string;

  lastClickTimestamp: number;
  playLevelIndex: number;
  points: number;
  pointsBalance: number;
  unsynchronizedPoints: number;
  multitapLevelIndex: number;
  pointsPerClick: number;
  energy: number;
  maxEnergy: number;
  energyRefillsLeft: number;
  energyLimitLevelIndex: number;
  lastEnergyRefillTimestamp: number;
  mineLevelIndex: number;
  profitPerHour: number;
}

export interface PlayState extends InitialPlayState {

  initializeState: (initialState: Partial<PlayState>) => void;

  updateLastClickTimestamp: () => void
  setPoints: (points: number) => void
  clickTriggered: () => void
  setPointsBalance: (points: number) => void
  incrementPoints: (amount: number) => void
  decrementPointsBalance: (amount: number) => void
  resetUnsynchronizedPoints: (syncedPoints: number) => void;
  setPointsPerClick: (pointsPerClick: number) => void
  upgradeMultitap: () => void
  setEnergy: (energy: number) => void
  incrementEnergy: (amount: number) => void
  refillEnergy: () => void
  upgradeEnergyLimit: () => void
  resetDailyRefills: () => void
  setMineLevelIndex: (mineLevelIndex: number) => void
  upgradeMineLevelIndex: () => void
}

export const usePlayStore = defineStore('play', () => {
  const userTelegramInitData = ref("");
  const userTelegramName = ref("");
  const lastClickTimestamp = ref(0);
  const playLevelIndex = ref(0);
  const points = ref(10000);
  const pointsBalance = ref(10000);
  const unsynchronizedPoints = ref(0);
  const multitapLevelIndex = ref(0);
  const pointsPerClick = ref(1);
  const energy = ref(energyUpgradeBaseBenefit);
  const maxEnergy = ref(energyUpgradeBaseBenefit);
  const energyRefillsLeft = ref(6);
  const energyLimitLevelIndex = ref(0);
  const lastEnergyRefillTimestamp = ref(Date.now());
  const mineLevelIndex = ref(0);
  const profitPerHour = ref(0);

  const calculateLevelIndex = (points: number): number => {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (points >= LEVELS[i].minPoints) {
        return i;
      }
    }
    return 0; // Default to 0 if something goes wrong
  }

  const updateLastClickTimestamp = () => {
    lastClickTimestamp.value = Date.now();
  };

  const clickTriggered = () => {
    if (energy.value - pointsPerClick.value < 0) return;
    points.value += pointsPerClick.value;
    pointsBalance.value += pointsPerClick.value;
    unsynchronizedPoints.value += pointsPerClick.value;
    energy.value -= pointsPerClick.value;
    playLevelIndex.value = calculateLevelIndex(points.value);
    lastClickTimestamp.value = Date.now();
  };

  return {
    userTelegramInitData,
    userTelegramName,
    lastClickTimestamp,
    playLevelIndex,
    points,
    pointsBalance,
    unsynchronizedPoints,
    multitapLevelIndex,
    pointsPerClick,
    energy,
    maxEnergy,
    energyRefillsLeft,
    energyLimitLevelIndex,
    lastEnergyRefillTimestamp,
    mineLevelIndex,
    profitPerHour,
    updateLastClickTimestamp,
    clickTriggered,
  };
});
