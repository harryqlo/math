
import { PlotConfig } from './types';

export const generatePlotPoints = (
  funcType: PlotConfig['type'],
  params: Record<string, number>,
  domain: [number, number],
  numPoints: number = 100
): { x: number; y: number }[] => {
  const points: { x: number; y: number }[] = [];
  const [minX, maxX] = domain;
  const step = (maxX - minX) / (numPoints - 1);

  for (let i = 0; i < numPoints; i++) {
    const x = minX + i * step;
    let y: number;

    switch (funcType) {
      case 'parabola':
        const { a = 1, b = 0, c = 0 } = params;
        y = a * x * x + b * x + c;
        break;
      case 'exponential':
        const { a: expA = 1, b: expB = Math.E } = params;
        y = expA * Math.pow(expB, x);
        break;
      case 'logarithmic':
        const { b: logB = Math.E } = params;
        if (x > 0 && logB > 0 && logB !== 1) {
          y = Math.log(x) / Math.log(logB);
        } else {
          y = NaN; // Not in domain
        }
        break;
      case 'rational':
        const { a: ratA = 1, b: ratB = 0, c: ratC = 1, d: ratD = 0 } = params;
        const denom = ratC * x + ratD;
        if (denom !== 0) {
          y = (ratA * x + ratB) / denom;
        } else {
          y = NaN;
        }
        break;
      default:
        y = NaN;
    }
    
    if (!isNaN(y) && isFinite(y)) {
      points.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
    }
  }
  return points;
};
