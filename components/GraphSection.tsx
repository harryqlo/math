import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Problem } from '../types';
import { generatePlotPoints } from '../utils/math';
import Card from './ui/Card';
import Slider from './ui/Slider';
import Button from './ui/Button';
import { ICONS } from '../constants';

interface GraphSectionProps {
  problem: Problem;
}

const GraphSection: React.FC<GraphSectionProps> = ({ problem }) => {
  const [interactiveParams, setInteractiveParams] = useState(problem.funcParams);

  useEffect(() => {
    setInteractiveParams(problem.funcParams);
  }, [problem]);

  const handleSliderChange = (param: string, value: number) => {
    setInteractiveParams(prev => ({ ...prev, [param]: value }));
  };

  const handleReset = () => {
    setInteractiveParams(problem.funcParams);
  };
  
  const data = generatePlotPoints(problem.plot.type, interactiveParams, problem.plot.domain);
  const { enunciado, plot } = problem;

  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-4">
        <h3 className="text-xl font-bold text-primary">Visualización Interactiva</h3>
        {plot.interactiveControls && (
          <Button onClick={handleReset} variant="secondary" icon={ICONS.reset}>
            Reiniciar
          </Button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.3)" />
              <XAxis dataKey="x" type="number" domain={problem.plot.domain} label={{ value: 'x', position: 'insideBottomRight', offset: -5 }}/>
              <YAxis allowDataOverflow={true} domain={['auto', 'auto']} label={{ value: 'f(x)', angle: -90, position: 'insideLeft' }}/>
              <Tooltip
                formatter={(value: number) => typeof value === 'number' ? value.toFixed(2) : value}
                labelFormatter={(label: number) => typeof label === 'number' ? `x = ${label.toFixed(2)}`: label}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: '#800000',
                  borderRadius: '0.5rem'
                }}
                labelStyle={{ color: '#000000' }}
              />
              <Legend />
              <Line type="monotone" dataKey="y" name="f(x)" stroke="#800000" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {plot.interactiveControls && plot.interactiveControls.length > 0 && (
          <div className="w-full lg:w-64 flex-shrink-0 space-y-4">
            {plot.interactiveControls.map(control => (
              <Slider
                key={control.param}
                label={`Parámetro ${control.param}:`}
                min={control.min}
                max={control.max}
                step={control.step}
                value={interactiveParams[control.param] ?? 0}
                onChange={(e) => handleSliderChange(control.param, parseFloat(e.target.value))}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default GraphSection;