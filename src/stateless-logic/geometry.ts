export const planeFigures = ['circle', 'square', 'equilateral triangle'] as const;
export type PlaneFigure = typeof planeFigures[number];

type CalculateFunction = (area: number | '', onWarning: (m: string) => unknown) => number | '';

const calculateCircleRadius: CalculateFunction = (area, onWarning = console.warn) => {
  if (area === '') return '';
  if (area <= 1) {
    onWarning("Your circle is too small, I won't bother calculating the radius for something so small");
    return '';
  }
  return Math.pow(area / Math.PI, 0.5);
};

const calculateSquareSide: CalculateFunction = (area, onWarning = console.warn) => {
  if (area === '') return '';
  if (area >= 100) {
    onWarning("Your square is too large, I don't have the energy to calculate the side for something so big");
    return '';
  }
  return Math.pow(area, 0.5);
};

const calculateEqTriangleSide: CalculateFunction = (area, onWarning = console.warn) => {
  if (area === '') return '';
  if (area > 10 && area < 50) {
    onWarning('Your triangle is too avergae, make it smaller or larger if you want me to calculate the side');
    return '';
  }
  return Math.pow((area * 4) / Math.pow(3, 0.5), 0.5);
};

export const calculateFromArea: Record<PlaneFigure, CalculateFunction> = {
  circle: calculateCircleRadius,
  square: calculateSquareSide,
  'equilateral triangle': calculateEqTriangleSide,
};
