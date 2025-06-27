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

1. **Funciones Cuadráticas**: aquí se estudian las parábolas. Piensa en la
   trayectoria que sigue una pelota al lanzarla; esa curva es un ejemplo de
   función cuadrática.
2. **Funciones Exponenciales**: explican fenómenos que crecen o disminuyen muy
   rápido, como cuando tus ahorros se duplican cada cierto tiempo o la población
   de bacterias se multiplica.
3. **Funciones Logarítmicas**: son la herramienta inversa de las exponenciales.
   Se usan para medir escalas enormes, por ejemplo el pH de una sustancia.
4. **Funciones Racionales**: tratan fracciones de polinomios, parecidas a la
   división de una pizza en porciones. A veces presentan valores donde la
   fracción no existe, lo que produce asíntotas en la gráfica.
5. **Calculadora Gráfica**: permite trazar tus propias funciones y ver los
   cambios de forma interactiva moviendo deslizadores.
6. **Tutor con IA** y **Chat de Dudas**: dos espacios para preguntar lo que sea
   y recibir explicaciones paso a paso en español.
