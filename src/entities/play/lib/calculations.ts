/**
 * Рассчитывает стоимость улучшения на основе индекса уровня, базовой цены и коэффициента.
 * 
 * @param levelIndex - Индекс уровня улучшения
 * @param basePrice - Базовая цена улучшения
 * @param coefficient - Коэффициент увеличения стоимости
 * @returns Стоимость улучшения, округленная до целого числа
 */
export const calculateUpgradeCost = (levelIndex: number, basePrice: number, coefficient: number): number => {
  return Math.floor(basePrice * Math.pow(coefficient, levelIndex));
}

/**
* Рассчитывает суммарную выгоду от улучшений на основе индекса уровня, базовой выгоды и коэффициента.
* 
* @param levelIndex - Индекс уровня улучшения
* @param baseBenefit - Базовая выгода от улучшения
* @param coefficient - Коэффициент увеличения выгоды
* @returns Суммарная выгода от всех уровней улучшения до текущего, включительно
*/
export const calculateUpgradeBenefit = (levelIndex: number, baseBenefit: number, coefficient: number): number => {
  let benefit = 0;
  for (let i = 0; i <= levelIndex; i++) {
      benefit += Math.floor(baseBenefit * Math.pow(coefficient, i));
  }
  return benefit;
}