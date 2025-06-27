import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { generatePlotPoints } from '../utils/math';
import { FunctionType, PlotConfig } from '../types';
import Card from './ui/Card';
import Slider from './ui/Slider';
import LatexDisplay from './Latex';

const calculatorConfigs: Record<FunctionType, { params: Record<string, number>, controls: { param: string, min: number, max: number, step: number }[], plotConfig: PlotConfig }> = {
    cuadratica: {
        params: { a: 1, b: 0, c: 0 },
        controls: [
            { param: 'a', min: -5, max: 5, step: 0.1 },
            { param: 'b', min: -10, max: 10, step: 0.5 },
            { param: 'c', min: -10, max: 10, step: 0.5 },
        ],
        plotConfig: { type: 'parabola', params: ['a', 'b', 'c'], domain: [-10, 10] }
    },
    exponencial: {
        params: { a: 1, b: 2 },
        controls: [
            { param: 'a', min: -5, max: 5, step: 0.1 },
            { param: 'b', min: 0.1, max: 5, step: 0.1 },
        ],
        plotConfig: { type: 'exponential', params: ['a', 'b'], domain: [-5, 5] }
    },
    logaritmica: {
        params: { b: 2 },
        controls: [
            { param: 'b', min: 1.1, max: 10, step: 0.1 },
        ],
        plotConfig: { type: 'logarithmic', params: ['b'], domain: [0.1, 10] }
    },
    racional: {
        params: { a: 1, b: 0, c: 1, d: 0 },
        controls: [
            { param: 'a', min: -5, max: 5, step: 0.1 },
            { param: 'b', min: -10, max: 10, step: 0.5 },
            { param: 'c', min: -5, max: 5, step: 0.1 },
            { param: 'd', min: -10, max: 10, step: 0.5 },
        ],
        plotConfig: { type: 'rational', params: ['a','b','c','d'], domain: [-10, 10] }
    },
};

const functionNames: Record<FunctionType, string> = {
    cuadratica: 'Cuadrática: $f(x) = ax^2 + bx + c$',
    exponencial: 'Exponencial: $f(x) = a \\cdot b^x$',
    logaritmica: 'Logarítmica: $f(x) = \\log_b(x)$',
    racional: 'Racional: $f(x)=\\frac{ax+b}{cx+d}$'
};

const CalculatorView: React.FC = () => {
    const [funcType, setFuncType] = useState<FunctionType>('cuadratica');
    const [params, setParams] = useState<Record<string, number>>(calculatorConfigs.cuadratica.params);
    
    const handleFuncTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newFuncType = e.target.value as FunctionType;
        setFuncType(newFuncType);
        setParams(calculatorConfigs[newFuncType].params);
    };

    const handleParamChange = (param: string, value: number) => {
        setParams(prev => ({...prev, [param]: value}));
    };

    const config = calculatorConfigs[funcType];
    const data = generatePlotPoints(config.plotConfig.type, params, config.plotConfig.domain, 200);

    const functionDisplayName = funcType === 'logaritmica' 
        ? `Logarítmica: $f(x) = \\log_{${String(params.b?.toFixed(1) || 'b').replace(/\.?0+$/, '')}}(x)$` 
        : functionNames[funcType];

    return (
        <Card>
            <div className="p-6">
                 <h2 className="text-2xl font-bold text-primary mb-4">Calculadora Gráfica</h2>
                 <div className="mb-6">
                    <label htmlFor="func-type-select" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Función</label>
                    <select
                        id="func-type-select"
                        value={funcType}
                        onChange={handleFuncTypeChange}
                        className="block w-full sm:w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                        <option value="cuadratica">Función Cuadrática</option>
                        <option value="exponencial">Función Exponencial</option>
                        <option value="logaritmica">Función Logarítmica</option>
                        <option value="racional">Función Racional</option>
                    </select>
                 </div>

                 <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-80 flex-shrink-0 space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            <LatexDisplay as="span">{functionDisplayName}</LatexDisplay>
                        </h3>
                         {config.controls.map(control => (
                            <Slider
                                key={control.param}
                                label={`Parámetro ${control.param}:`}
                                min={control.min}
                                max={control.max}
                                step={control.step}
                                value={params[control.param] ?? 0}
                                onChange={(e) => handleParamChange(control.param, parseFloat(e.target.value))}
                            />
                        ))}
                    </div>

                    <div className="flex-grow h-96 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={data}
                                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.3)" />
                                <XAxis dataKey="x" type="number" domain={config.plotConfig.domain} allowDataOverflow={true} />
                                <YAxis allowDataOverflow={true} domain={['auto', 'auto']} />
                                <Tooltip
                                    formatter={(value: number) => typeof value === 'number' ? value.toFixed(2) : value}
                                    labelFormatter={(label: number) => typeof label === 'number' ? `x = ${label.toFixed(2)}`: label}
                                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: '#800000', borderRadius: '0.5rem' }}
                                    labelStyle={{ color: '#000000' }}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="y" name="f(x)" stroke="#800000" strokeWidth={2.5} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CalculatorView;