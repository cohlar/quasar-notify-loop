export const calculateCircleArea = (radius: number | '', onError = console.error): number | '' => {
  if (radius === '') {
    onError('Please provide a radius to calculate the circle area');
    return '';
  }
  return Math.PI * Math.pow(radius, 2);
};
