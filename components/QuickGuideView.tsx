import React from 'react';
import Card from './ui/Card';

const QuickGuideView: React.FC = () => {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Guía Rápida de las Pestañas</h2>
      <p className="text-gray-700">Estas son las secciones principales de la aplicación explicadas de forma sencilla:</p>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li><strong>Funciones Cuadráticas</strong>: se ven las famosas parábolas, como el arco de una pelota al lanzarla. Incluye ejercicios guiados para hallar vértices e interceptos paso a paso.</li>
        <li><strong>Funciones Exponenciales</strong>: explican crecimientos o decaimientos rápidos, como tus ahorros o una colonia de bacterias. Hay demos y ejercicios para ver en cuánto tiempo se duplica una cantidad.</li>
        <li><strong>Funciones Logaríticas</strong>: la inversa de las exponenciales. Se usan para medir el pH o el volumen del sonido. Practica resolviendo logaritmos cotidianos.</li>
        <li><strong>Funciones Racionales</strong>: dividen polinomios, como repartir una pizza. Descubre por qué aparecen huecos o asíntotas en la gráfica y practica con tus propios ejemplos.</li>
        <li><strong>Calculadora Gráfica</strong>: traza funciones y observa los cambios interactivos al mover deslizadores.</li>
        <li><strong>Tutor con IA</strong> y <strong>Chat de Dudas</strong>: pregunta lo que quieras y recibe explicaciones paso a paso en español.</li>
      </ol>
    </Card>
  );
};

export default QuickGuideView;
