# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GOOGLE_GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Build for production

Run `npm run build` to generate the static files in the `dist` folder. Deploy this directory along with the `netlify/functions` folder to Netlify.

## Características principales

- Teoría explicada paso a paso en español.
- Problemas interactivos con gráficas y controles deslizantes.
- Chat de dudas y tutor asistido por IA (Gemini).
- Código escrito en React + TypeScript usando Vite y Tailwind.

## Guía rápida de las pestañas (para dummies)

El sitio está dividido en secciones o "pestañas" que puedes abrir desde el
menú principal. A continuación se describen de forma sencilla y con ejemplos
cotidianos:

1. **Funciones Cuadráticas**: se ven las famosas parábolas. Piensa en el arco
   que describe una pelota al lanzarla o la forma de un puente. Incluye
   ejercicios guiados para hallar vértices, interceptos y raíces paso a paso.
2. **Funciones Exponenciales**: explican crecimientos y decaimientos rápidos,
   como tus ahorros acumulados o una colonia de bacterias. Encontrarás demos y
   ejercicios interactivos para calcular en cuánto tiempo se duplica una
   cantidad.
3. **Funciones Logarítmicas**: son la herramienta inversa de las
   exponenciales. Se usan en la vida diaria para medir, por ejemplo, el pH o la
   intensidad de los sonidos. Practica resolviendo logaritmos sencillos con
   ejemplos cotidianos.
4. **Funciones Racionales**: abarcan divisiones entre polinomios, parecidas a
   repartir una pizza. Verás por qué a veces aparecen "huecos" o asíntotas en
   la gráfica y podrás practicar simplificando y graficando tus propios
   ejemplos.
5. **Calculadora Gráfica**: permite trazar tus propias funciones y ver los
   cambios de forma interactiva moviendo deslizadores.
6. **Tutor con IA** y **Chat de Dudas**: dos espacios para preguntar lo que sea
   y recibir explicaciones paso a paso en español.
