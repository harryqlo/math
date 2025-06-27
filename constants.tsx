
import React from 'react';
import { SectionDefinition, ProblemSet, TheorySet } from './types';

export const SECTION_DEFINITIONS: SectionDefinition[] = [
  { name: 'Funciones Cuadráticas', id: 'cuadratica' },
  { name: 'Funciones Exponenciales', id: 'exponencial' },
  { name: 'Funciones Logarítmicas', id: 'logaritmica' },
  { name: 'Calculadora Gráfica', id: 'calculadora' },
  { name: 'Tutor con IA', id: 'tutor_ia' },
];

export const THEORY_DATA: TheorySet = {
  cuadratica: {
    title: 'Análisis Profundo de la Función Cuadrática',
    paragraphs: [
      'Una función cuadrática es una función polinómica que tiene un término con $\\mathbf{x^2}$. Su "receta" o fórmula general es $\\mathbf{f(x) = ax^2 + bx + c}$. En esta receta, $\\mathbf{a}$, $\\mathbf{b}$ y $\\mathbf{c}$ son números fijos que llamamos "coeficientes". El coeficiente $\\mathbf{a}$ es el que multiplica a $\\mathbf{x^2}$, $\\mathbf{b}$ multiplica a $\\mathbf{x}$, y $\\mathbf{c}$ es el término que está solo. Hay una regla de oro: el coeficiente $\\mathbf{a}$ \\textbf{nunca puede ser cero}. Si lo fuera, el término $\\mathbf{x^2}$ se anularía y nos quedaría una simple función lineal (una línea recta), no una parábola.',
      'Su representación gráfica es una curva suave y simétrica llamada \\textbf{parábola}. Imagina la trayectoria que sigue una pelota al ser lanzada al aire; esa curva es una parábola. Entender cada uno de sus componentes nos permite predecir y dibujar su forma sin necesidad de calcular docenas de puntos.'
      ,'Como ejemplo concreto, la función $f(x)=(x-2)^2+1$ describe una parábola con vértice en $(2,1)$ y apertura hacia arriba. Cambiar los coeficientes permite desplazar y estirar la curva a nuestro gusto.'
    ],
    properties: [
      { term: 'Dominio y Rango', description: 'El \\textbf{Dominio} se refiere a todos los valores posibles que puede tomar $\\mathbf{x}$. En una función cuadrática, no hay ninguna restricción; podemos elevar al cuadrado cualquier número, multiplicarlo y sumarlo. Por lo tanto, el dominio es siempre el conjunto de todos los números reales, que se escribe como $\\mathbf{(-\\infty, \\infty)}$. El \\textbf{Rango}, sin embargo, son los valores que toma $\\mathbf{f(x)}$ (o $\\mathbf{y}$) y está limitado por el vértice. \\textit{Ejemplo}: Para $f(x) = x^2 - 4x + 5$, el vértice está en $(2, 1)$. Como $a=1$ es positivo, la parábola abre hacia arriba, y su punto más bajo es $y=1$. Por tanto, el rango es $\\mathbf{[1, \\infty)}$.' },
      { term: 'Concavidad (Dirección)', description: 'La concavidad indica si la parábola abre hacia arriba o hacia abajo, y depende exclusivamente del signo del coeficiente $\\mathbf{a}$. Si $\\mathbf{a > 0}$ (positivo), la parábola es \\textit{cóncava hacia arriba} (como una "U" o un tazón que puede contener agua) y tiene un punto \\textbf{mínimo}. Si $\\mathbf{a < 0}$ (negativo), es \\textit{cóncava hacia abajo} (como una "U" invertida) y tiene un punto \\textbf{máximo}.' },
      { term: 'Vértice $(x_v, y_v)$', description: 'Es el punto más importante de la parábola: su punto de inflexión, ya sea el más bajo (mínimo) o el más alto (máximo). Para encontrarlo, primero calculamos su coordenada $\\mathbf{x}$ con la fórmula: $\\mathbf{x_v = \\frac{-b}{2a}}$. Luego, para hallar la coordenada $\\mathbf{y}$, simplemente sustituimos este valor de $x_v$ en la función original: $\\mathbf{y_v = f(x_v)}$. \\textit{Ejemplo}: Para $f(x) = -2x^2 + 8x - 3$, tenemos $a=-2$ y $b=8$. $x_v = \\frac{-8}{2(-2)} = \\frac{-8}{-4} = 2$. Luego, $y_v = f(2) = -2(2)^2 + 8(2) - 3 = -8 + 16 - 3 = 5$. El vértice es $\\mathbf{(2, 5)}$.' },
      { term: 'Eje de Simetría', description: 'Es una línea vertical imaginaria que actúa como un espejo, dividiendo la parábola en dos mitades idénticas. Esta línea pasa siempre por el vértice. Su ecuación es muy simple: $\\mathbf{x = x_v}$. Para el ejemplo anterior con vértice en $(2, 5)$, el eje de simetría es la línea vertical $\\mathbf{x = 2}$.' },
      { term: 'Intercepto con el eje Y', description: 'Es el punto donde la gráfica cruza el eje vertical (eje Y). Esto ocurre cuando $\\mathbf{x = 0}$. Si sustituimos $x=0$ en la fórmula general, obtenemos $f(0) = a(0)^2 + b(0) + c = c$. Por lo tanto, el punto de intercepción con el eje Y es siempre $\\mathbf{(0, c)}$. Es el valor más fácil de encontrar. \\textit{Ejemplo}: En $f(x) = 3x^2 - 5x + 7$, el intercepto en Y es $\\mathbf{(0, 7)}$.' },
      { term: 'Raíces (Interceptos con el eje X)', description: 'Las \\textbf{raíces} o \\textbf{ceros} son los puntos donde la parábola corta el eje horizontal (eje X). En estos puntos, $\\mathbf{y=0}$, por lo que para encontrarlos debemos resolver la ecuación $\\mathbf{ax^2 + bx + c = 0}$. La herramienta universal para esto es la \\textit{fórmula cuadrática general}: $\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}}$. El término dentro de la raíz, llamado \\textit{discriminante}, nos dice cuántas raíces hay: si es positivo, hay dos raíces reales; si es cero, hay una; si es negativo, no hay raíces reales (la parábola no corta el eje X).' }
    ],
    videoUrl: 'https://www.youtube.com/embed/6JQw45YO3Fs'
  },
  exponencial: {
    title: 'Explorando la Función Exponencial',
    paragraphs: [
      'La función exponencial, con la forma $\\mathbf{f(x) = a \\cdot b^x}$ (donde $\\mathbf{b>0}$ y $\\mathbf{b \\neq 1}$), describe fenómenos cuyo cambio es proporcional a su tamaño actual. Piensa en el "efecto bola de nieve": mientras más grande es, más rápido crece. Modela desde el interés compuesto en una cuenta bancaria hasta el crecimiento de una población de bacterias o la desintegración de un isótopo radiactivo.',
      'Aquí, $\\mathbf{a}$ es el \\textit{valor inicial} (el valor de la función cuando $x=0$, ya que $b^0=1$), y $\\mathbf{b}$ es la \\textit{base} o \\textit{factor de crecimiento/decaimiento}.'
      ,'Un ejemplo común es el crecimiento de una población que se duplica cada hora. Si partimos de 50 organismos, la función es $f(t)=50\\cdot 2^t$ y describe cuántos habrá después de $t$ horas.'
    ],
    properties: [
      { term: 'Dominio y Rango', description: 'El \\textbf{Dominio} es $\\mathbf{(-\\infty, \\infty)}$ porque podemos elevar la base $\\mathbf{b}$ a cualquier potencia $\\mathbf{x}$, ya sea positiva, negativa o cero. El \\textbf{Rango}, sin embargo, depende del signo de $\\mathbf{a}$. Si $\\mathbf{a > 0}$, la función siempre será positiva (una base positiva elevada a cualquier potencia da un resultado positivo). Por tanto, el rango es $\\mathbf{(0, \\infty)}$. La gráfica vive enteramente por encima del eje X.' },
      { term: 'Crecimiento vs. Decaimiento', description: 'El comportamiento de la curva lo dicta la base $\\mathbf{b}$. Si $\\mathbf{b > 1}$, la función muestra un \\textbf{crecimiento exponencial}. \\textit{Ejemplo}: en $f(x) = 2^x$, los valores se duplican: $f(1)=2, f(2)=4, f(3)=8$. Si $\\mathbf{0 < b < 1}$, la función muestra un \\textbf{decaimiento exponencial}. \\textit{Ejemplo}: en $f(x) = (1/2)^x$, los valores se reducen a la mitad: $f(1)=0.5, f(2)=0.25, f(3)=0.125$.' },
      { term: 'Asíntota Horizontal', description: 'Una \\textit{asíntota} es una línea a la que la gráfica se acerca infinitamente pero nunca llega a tocar. Para la función exponencial básica, el \\textbf{eje X} (la línea $\\mathbf{y=0}$) es una \\textbf{asíntota horizontal}. En un decaimiento, la gráfica se aplana hacia la derecha acercándose a 0. En un crecimiento, se aplana hacia la izquierda.' }
    ],
    videoUrl: 'https://www.youtube.com/embed/IhsZKreUPE0'
  },
  logaritmica: {
    title: 'Descifrando la Función Logarítmica',
    paragraphs: [
      'La función logarítmica, $\\mathbf{f(x) = \\log_b(x)}$, es la operación \\textbf{inversa} de la función exponencial. Si la exponencial toma una base y un exponente para darte un resultado ($b^y=x$), el logaritmo toma la base y el resultado para darte el exponente ($\\log_b(x)=y$). Responde a la pregunta: \\textit{"¿A qué exponente $\\mathbf{y}$ debo elevar la base $\\mathbf{b}$ para obtener el número $\\mathbf{x}$?"}.',
      'Son indispensables para manejar escalas muy grandes (como en terremotos o pH) y para resolver ecuaciones donde la incógnita está en el exponente.'
      ,'En la vida diaria aparece, por ejemplo, en la medición del pH, donde $\text{pH}=-\log_{10}( [H^+] )$, usando una escala logarítmica de base 10 para manejar concentraciones diminutas.'
    ],
    properties: [
      { term: 'Dominio', description: 'Esta es la regla más importante: el argumento de un logaritmo (lo que está dentro del paréntesis) \\textbf{debe ser estrictamente positivo}. No puedes calcular el logaritmo de cero o de un número negativo. \\textit{¿Por qué?} Pensemos en $\\log_2(-4)$. Esto pregunta: $2^y = -4$. No existe ningún exponente real $\\mathbf{y}$ que haga que una base positiva como 2 se convierta en un número negativo. Por tanto, para $f(x) = \\log_b(x)$, el \\textbf{Dominio} es $\\mathbf{(0, \\infty)}$.' },
      { term: 'Rango', description: 'A diferencia del dominio, el \\textbf{Rango} de una función logarítmica es el conjunto de todos los números reales, $\\mathbf{(-\\infty, \\infty)}$. Esto se due a que el logaritmo es la inversa de la exponencial, y el dominio de la exponencial (todos los reales) se convierte en el rango del logaritmo.' },
      { term: 'Asíntota Vertical', description: 'Como consecuencia directa de la restricción del dominio, la gráfica tiene una \\textbf{asíntota vertical} en el \\textbf{eje Y} (la línea $\\mathbf{x=0}$). La curva se acerca infinitamente a esta línea a medida que $\\mathbf{x}$ se aproxima a 0 desde la derecha, pero nunca la toca.' },
      { term: 'Punto Clave de Paso', description: 'Toda función exponencial $b^y$ cumple que si $y=0$, entonces $b^0 = 1$. Llevando esto a su inversa, el logaritmo, significa que $\\log_b(1) = 0$ para cualquier base $\\mathbf{b}$. Esto nos da un punto de anclaje universal: toda función logarítmica básica pasa por el punto $\\mathbf{(1, 0)}$.' }
    ],
    videoUrl: 'https://www.youtube.com/embed/C0vUje9Uduc'
  }
};

export const PROBLEMS_DATA: ProblemSet = {
  cuadratica: [
    {
      id: 1,
      enunciado: 'Dada la función $f(x) = x^2 - 4x + 3$, encuentra sus raíces (los puntos de corte con el eje X).',
      funcParams: { a: 1, b: -4, c: 3 },
      solution: {
        type: 'encontrar_raices',
        pasos: [
          '\\textbf{1. ¿Qué significa "encontrar las raíces"?} Imagina la gráfica de la función, que es una curva en forma de "U" (una parábola). Las "raíces" son simplemente los puntos donde esta curva cruza la línea horizontal (el eje X). En esos puntos exactos, el valor de $f(x)$ (o $y$) es 0. Así que el problema nos pide resolver la ecuación $\\mathbf{x^2 - 4x + 3 = 0}$.',
          '\\textbf{2. ¿Qué herramienta usamos?} Para este tipo de ecuaciones, existe una "llave maestra" llamada \\textbf{fórmula cuadrática general}. Siempre funciona. La fórmula es: $\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}}$. Nuestro trabajo es averiguar qué son $a, b$ y $c$, y ponerlos en la fórmula.',
          '\\textbf{3. Identificando $a, b$ y $c$}. Comparamos nuestra ecuación $\\mathbf{1}x^2 \\mathbf{- 4}x \\mathbf{+ 3} = 0$ con el molde $ax^2 + bx + c = 0$. Es como un juego de correspondencia:\\n- $\\mathbf{a}$ es el número que acompaña a $x^2$. Si no ves un número, es un 1. Entonces, $\\mathbf{a=1}$.\\n- $\\mathbf{b}$ es el número que acompaña a $x$. ¡Ojo con el signo! $\\mathbf{b=-4}$.\\n- $\\mathbf{c}$ es el número que está solo. $\\mathbf{c=3}$.',
          '\\textbf{4. Reemplazando en la fórmula}. Ahora ponemos nuestros valores en la fórmula. Usamos paréntesis para no equivocarnos con los signos: $x = \\frac{-(\\mathbf{-4}) \\pm \\sqrt{(\\mathbf{-4})^2-4(\\mathbf{1})(\\mathbf{3})}}{2(\\mathbf{1})}$.',
          '\\textbf{5. Resolviendo la fórmula por partes (¡con calma!)}.\\n  - Primero, dentro de la raíz cuadrada: $(-4)^2$ significa $-4 \\times -4$, que es $\\mathbf{16}$. Y $4(1)(3)$ es $\\mathbf{12}$. Así que la raíz queda como $\\sqrt{16-12} = \\sqrt{4}$.\\n  - La raíz cuadrada de 4 es $\\mathbf{2}$.\\n  - Afuera de la raíz: $-(-4)$ se convierte en $\\mathbf{4}$ positivo. Y en el denominador, $2(1)$ es $\\mathbf{2}$.',
          '\\textbf{6. Juntando todo}. Nuestra fórmula simplificada ahora es: $\\mathbf{x = \\frac{4 \\pm 2}{2}}$.',
          '\\textbf{7. ¿Qué significa el "$\\pm$"?} Este símbolo significa que tenemos \\textit{dos} respuestas. Una la calculamos usando el "+" y la otra usando el "-".\\n  - \\textit{Respuesta 1 (con +)}: $x_1 = \\frac{4+2}{2} = \\frac{6}{2} = \\mathbf{3}$.\\n  - \\textit{Respuesta 2 (con -)}: $x_2 = \\frac{4-2}{2} = \\frac{2}{2} = \\mathbf{1}$.',
          '\\textbf{8. Conclusión}. ¡Lo logramos! Las raíces son $\\mathbf{1}$ y $\\mathbf{3}$. Esto nos dice que la parábola cruza el eje X en los puntos $(1,0)$ y $(3,0)$.'
        ],
        correctAnswers: [1, 3]
      },
      inputs: [
        { id: 'raiz1', label: 'Raíz 1:', type: 'number' },
        { id: 'raiz2', label: 'Raíz 2:', type: 'number' }
      ],
      plot: { type: 'parabola', params: ['a', 'b', 'c'], domain: [-1, 5], interactiveControls: [ { param: 'a', min: -5, max: 5, step: 0.1 }, { param: 'b', min: -10, max: 10, step: 0.5 }, { param: 'c', min: -10, max: 10, step: 0.5 } ] }
    },
    {
      id: 2,
      enunciado: 'Para la parábola $f(x) = -2x^2 + 8x - 6$, calcula las coordenadas de su vértice $(x_v, y_v)$.',
      funcParams: { a: -2, b: 8, c: -6 },
      solution: {
        type: 'encontrar_vertice',
        pasos: [
          '\\textbf{1. ¿Qué es el vértice?} El vértice es el "punto de giro" de la parábola. Puede ser el punto más bajo (un mínimo) o el más alto (un máximo). Para encontrarlo, necesitamos sus dos coordenadas: la horizontal ($x_v$) y la vertical ($y_v$).',
          '\\textbf{2. Encontrar la coordenada $x_v$}. Por suerte, hay una fórmula directa para esto: $\\mathbf{x_v = \\frac{-b}{2a}}$. Esta fórmula nos da la posición horizontal exacta del vértice.',
          '\\textbf{3. Identificar $a$ y $b$}. En nuestra función $f(x) = -2x^2 + 8x - 6$, los coeficientes son: $\\mathbf{a = -2}$ y $\\mathbf{b = 8}$.',
          '\\textbf{4. Calcular $x_v$}. Reemplazamos los valores en la fórmula: $x_v = \\frac{-(8)}{2(-2)} = \\frac{-8}{-4}$. Menos entre menos da más, así que $\\mathbf{x_v = 2}$. Ya tenemos la primera mitad de la respuesta.',
          '\\textbf{5. Encontrar la coordenada $y_v$}. ¿Cómo encontramos la altura del vértice? Fácil: tomamos el valor de $x_v$ que acabamos de encontrar y lo sustituimos en la función original. Es decir, calculamos $\\mathbf{f(2)}$.',
          '\\textbf{6. Calcular $f(2)$ paso a paso}. Reemplazamos cada $x$ por un 2: $y_v = f(2) = -2(\\mathbf{2})^2 + 8(\\mathbf{2}) - 6$. Siguiendo el orden de operaciones (primero potencias): $y_v = -2(4) + 16 - 6$. Ahora multiplicaciones: $y_v = -8 + 16 - 6$. Finalmente, sumas y restas: $y_v = 8 - 6 = \\mathbf{2}$.',
          '\\textbf{7. Conclusión}. El vértice de la parábola es el punto $\\mathbf{(2, 2)}$. Como el coeficiente $\\mathbf{a = -2}$ es negativo, la parábola abre hacia abajo (como una montaña), lo que significa que este vértice es el punto más alto, un \\textbf{máximo}.'
        ],
        correctAnswers: { 'xv': 2, 'yv': 2 }
      },
      inputs: [ { id: 'xv', label: '$x_v = $', type: 'number' }, { id: 'yv', label: '$y_v = $', type: 'number' } ],
      plot: { type: 'parabola', params: ['a', 'b', 'c'], domain: [-1, 5], interactiveControls: [ { param: 'a', min: -5, max: 5, step: 0.1 }, { param: 'b', min: -10, max: 10, step: 0.5 }, { param: 'c', min: -10, max: 10, step: 0.5 } ] }
    },
    {
      id: 3,
      enunciado: 'Para $f(x) = 3x^2 - 6x + 5$, determina su punto de corte con el eje Y y si la parábola es cóncava hacia arriba o hacia abajo.',
      funcParams: { a: 3, b: -6, c: 5 },
      solution: {
        type: 'encontrar_propiedades',
        pasos: [
          '\\textbf{Parte 1: La Concavidad (¿Hacia dónde abre?)}',
          '\\textbf{1. La regla de la concavidad}. Esto es muy sencillo. "Concavidad" es solo una palabra elegante para decir si la parábola abre hacia arriba (como una taza 🙂) o hacia abajo (como un ceño fruncido 🙁). Todo depende del signo de $\\mathbf{a}$.',
          '\\textbf{2. Revisar el signo de $a$}. En la función $f(x) = 3x^2 - 6x + 5$, el coeficiente $\\mathbf{a}$ es el número que acompaña a $x^2$. Aquí, $\\mathbf{a=3}$.',
          '\\textbf{3. Concluir la dirección}. Como $\\mathbf{a=3}$ es un número \\textbf{positivo}, la regla dice que la parábola es cóncava \\textbf{hacia arriba}. Tendrá un punto mínimo.',
          '\\textbf{Parte 2: El Corte con el Eje Y}',
          '\\textbf{4. ¿Qué es el corte con el eje Y?} Es el punto donde la gráfica cruza el eje vertical (el eje Y). Piensa en cualquier punto sobre esa línea vertical: su coordenada $x$ siempre es 0.',
          '\\textbf{5. El atajo más fácil}. Para encontrar este punto, solo tenemos que hacer $\\mathbf{x=0}$ en nuestra función. $f(0) = 3(0)^2 - 6(0) + 5$.',
          '\\textbf{6. Calcular $f(0)$}. Esto es rápido: $3 \\times 0 = 0$ y $-6 \\times 0 = 0$. Así que nos queda $f(0) = 0 - 0 + 5 = \\mathbf{5}$.',
          '\\textbf{7. Conclusión}. El punto de corte con el eje Y es $\\mathbf{(0, 5)}$. De hecho, para CUALQUIER función cuadrática $f(x)=ax^2+bx+c$, el corte con el eje Y es siempre el valor de $\\mathbf{c}$. ¡Es un truco muy útil!'
        ],
        correctAnswers: { 'c': 5, 'concavidad': 1 } // Usaremos 1 para 'arriba'
      },
      inputs: [
        { id: 'c', label: 'Punto de corte Y (coordenada y):', type: 'number' },
        { id: 'concavidad', label: 'Concavidad (1 para arriba, -1 para abajo):', type: 'number' }
      ],
      plot: { type: 'parabola', params: ['a', 'b', 'c'], domain: [-2, 4], interactiveControls: [ { param: 'a', min: -5, max: 5, step: 0.1 }, { param: 'b', min: -10, max: 10, step: 0.5 }, { param: 'c', min: -10, max: 10, step: 0.5 } ] }
    },
    {
      id: 4,
      enunciado: 'Determina las raíces de la función $f(x)=x^2 - 2x - 8$.',
      funcParams: { a: 1, b: -2, c: -8 },
      solution: {
        type: 'encontrar_raices',
        pasos: [
          'Podemos factorizar el trinomio como $(x-4)(x+2)=0$ para obtener los valores que anulan la función.',
          'De cada factor se deduce una solución: $x=4$ o $x=-2$.'
        ],
        correctAnswers: [-2, 4]
      },
      inputs: [ { id: 'r1', label: 'Raíz 1:', type: 'number' }, { id: 'r2', label: 'Raíz 2:', type: 'number' } ],
      plot: { type: 'parabola', params: ['a', 'b', 'c'], domain: [-5, 6], interactiveControls: [ { param: 'a', min: -3, max: 3, step: 0.1 }, { param: 'b', min: -5, max: 5, step: 0.5 }, { param: 'c', min: -10, max: 10, step: 0.5 } ] }
    }
  ],
  exponencial: [
    {
      id: 1,
      enunciado: 'Si tenemos la función de crecimiento exponencial $f(x) = 2 \\cdot 3^x$, ¿cuál es el valor de $f(2)$?',
      funcParams: { a: 2, b: 3 },
      solution: {
        type: 'evaluar_funcion',
        pasos: [
          '\\textbf{1. ¿Qué significa $f(2)$?} Esta notación es una instrucción. Nos dice: "Toma la función $f(x)$ y reemplaza cada $x$ que veas por el número 2".',
          '\\textbf{2. Haciendo el reemplazo}. Nuestra función es $f(x) = 2 \\cdot 3^x$. Si reemplazamos la $x$ por un 2, obtenemos: $f(2) = 2 \\cdot 3^2$.',
          '\\textbf{3. ¡Cuidado con el orden!} Una regla clave en matemáticas es el orden de las operaciones. Siempre debes resolver las potencias \\textit{antes} que las multiplicaciones. Un error común sería hacer $2 \\times 3$ primero.',
          '\\textbf{4. Calcular la potencia}. Primero, resolvemos $3^2$. Esto significa $3 \\times 3$, que es $\\mathbf{9}$.',
          '\\textbf{5. Hacer la multiplicación}. Ahora que resolvimos la potencia, nuestra expresión es mucho más simple: $f(2) = 2 \\cdot 9$.',
          '\\textbf{6. Conclusión}. $2 \\times 9 = \\mathbf{18}$. El valor de la función cuando $x$ es 2, es 18. Esto significa que el punto $(2, 18)$ está en la gráfica de esta función.'
        ],
        correctAnswers: { 'valor_y': 18 }
      },
      inputs: [{ id: 'valor_y', label: '$f(2) = $', type: 'number' }],
      plot: { type: 'exponential', params: ['a', 'b'], domain: [-2, 4], interactiveControls: [ { param: 'a', min: -5, max: 5, step: 0.1 }, { param: 'b', min: 0.1, max: 5, step: 0.1 } ] }
    },
    {
      id: 2,
      enunciado: 'Resuelve la ecuación exponencial $3^{x+1} = 81$ para encontrar el valor de $x$.',
      funcParams: { a: 1, b: 3 },
      solution: {
        type: 'resolver_exponencial_x',
        pasos: [
          '\\textbf{1. El objetivo principal}. Tenemos la incógnita $x$ "atrapada" en un exponente. La estrategia clave para liberarla es lograr que ambos lados del signo "=" tengan la \\textbf{misma base}. En el lado izquierdo, la base es 3.',
          '\\textbf{2. La gran pregunta}. ¿Podemos escribir el número 81 como una potencia de 3? Vamos a probar: $3^1=3$, $3^2=9$, $3^3=27$, $\\mathbf{3^4=81}$. ¡Sí, podemos! 81 es lo mismo que $3^4$.',
          '\\textbf{3. Reescribir la ecuación}. Ahora reemplazamos el 81 con lo que encontramos. La ecuación se transforma en: $\\mathbf{3^{x+1} = 3^4}$.',
          '\\textbf{4. La regla de oro}. Ahora viene la magia. Si tenemos una igualdad donde las bases son idénticas (en este caso, ambas son 3), ¡entonces los exponentes también deben ser iguales! Esto nos permite olvidarnos de las bases y crear una nueva ecuación solo con los exponentes.',
          '\\textbf{5. Crear y resolver la nueva ecuación}. Igualamos los exponentes: $\\mathbf{x+1 = 4}$. Esta es una ecuación muy fácil. Para despejar $x$, restamos 1 en ambos lados.',
          '\\textbf{6. Conclusión}. $x = 4 - 1 = \\mathbf{3}$. El valor de $x$ es 3. Podemos comprobarlo: si ponemos $x=3$ en la ecuación original, tenemos $3^{3+1} = 3^4$, que es 81. ¡Funciona!'
        ],
        correctAnswers: { 'valor_x': 3 }
      },
      inputs: [{ id: 'valor_x', label: '$x = $', type: 'number' }],
      plot: { type: 'exponential', params: ['a', 'b'], domain: [-1, 5], interactiveControls: [ { param: 'a', min: 1, max: 1, step: 1 }, { param: 'b', min: 2, max: 5, step: 1 } ] }
    },
    {
      id: 3,
      enunciado: 'Se sabe que una función exponencial de la forma $f(x) = a \\cdot 2^x$ pasa por el punto $(3, 24)$. Encuentra el valor del coeficiente $a$.',
      funcParams: { a: 3, b: 2 },
      solution: {
        type: 'encontrar_coeficiente_a',
        pasos: [
          '\\textbf{1. ¿Qué significa "pasa por el punto (3, 24)"?} Esto es una pista crucial. Significa que si en la función reemplazamos $\\mathbf{x}$ por $\\mathbf{3}$, el resultado $\\mathbf{f(x)}$ (o $y$) debe ser $\\mathbf{24}$.',
          '\\textbf{2. Sustituir la pista en la fórmula}. Tomamos la fórmula $f(x) = a \\cdot 2^x$ y le ponemos los valores que conocemos. Reemplazamos $f(x)$ por 24 y $x$ por 3: $\\mathbf{24 = a \\cdot 2^3}$.',
          '\\textbf{3. Simplificar lo que podamos}. Nuestro objetivo es dejar la $\\mathbf{a}$ sola. Antes de eso, podemos calcular la parte numérica. $2^3$ significa $2 \\times 2 \\times 2$, que es $\\mathbf{8}$.',
          '\\textbf{4. Reescribir la ecuación}. La ecuación ahora es mucho más simple: $\\mathbf{24 = a \\cdot 8}$.',
          '\\textbf{5. Despejar la $a$}. La ecuación nos dice que "24 es igual a $a$ multiplicado por 8". Para encontrar $a$, hacemos la operación inversa: dividir entre 8. Así que, $a = \\frac{24}{8}$.',
          '\\textbf{6. Conclusión}. $24 \\div 8 = \\mathbf{3}$. Hemos descubierto que el coeficiente $\\mathbf{a}$ es 3. La función completa es $f(x) = 3 \\cdot 2^x$.'
        ],
        correctAnswers: { 'valor_a': 3 }
      },
      inputs: [{ id: 'valor_a', label: '$a = $', type: 'number' }],
      plot: { type: 'exponential', params: ['a', 'b'], domain: [-2, 5], interactiveControls: [ { param: 'a', min: 1, max: 10, step: 0.5 }, { param: 'b', min: 2, max: 2, step: 1 } ] }
    },
    {
      id: 4,
      enunciado: '¿Para qué valor de $t$ se cumple $250 \\cdot 2^t = 1000$?',
      funcParams: { a: 250, b: 2 },
      solution: {
        type: 'resolver_exponencial_x',
        pasos: [
          'Dividimos ambos lados entre 250 y obtenemos $2^t=4$.',
          'Como $4=2^2$, se concluye que $t=2$.'
        ],
        correctAnswers: { 'valor_t': 2 }
      },
      inputs: [{ id: 'valor_t', label: '$t = $', type: 'number' }],
      plot: { type: 'exponential', params: ['a', 'b'], domain: [0, 3], interactiveControls: [ { param: 'a', min: 100, max: 300, step: 10 }, { param: 'b', min: 1.5, max: 3, step: 0.1 } ] }
    }
  ],
  logaritmica: [
    {
      id: 1,
      enunciado: 'Encuentra el valor de $x$ en la ecuación logarítmica $\\log_2(x) = 4$.',
      funcParams: { b: 2 },
      solution: {
        type: 'resolver_log',
        pasos: [
          '\\textbf{1. Traducir el logaritmo}. Un logaritmo es un acertijo. La expresión $\\log_2(x) = 4$ está preguntando: "\\textit{¿A qué número ($x$) llego si elevo la base 2 a la potencia 4?}".',
          '\\textbf{2. Convertir a forma exponencial}. La manera más fácil de resolver esto es "desenrollar" el logaritmo a su forma exponencial, que es más familiar. La regla es: $\\mathbf{\\log_b(A) = C}$ es lo mismo que $\\mathbf{b^C = A}$.',
          '\\textbf{3. Aplicar la regla a nuestro problema}. En $\\log_2(x) = 4$:\\n- La base $\\mathbf{b}$ es 2.\\n- El resultado $\\mathbf{C}$ es 4.\\n- El argumento $\\mathbf{A}$ es $x$.\\n- Siguiendo el molde $\\mathbf{b^C = A}$, obtenemos: $\\mathbf{2^4 = x}$.',
          '\\textbf{4. Resolver la ecuación}. ¡Ahora es fácil! Solo necesitamos calcular cuánto es $2^4$.',
          '\\textbf{5. Calcular la potencia}. $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$.',
          '\\textbf{6. Conclusión}. Hemos encontrado que $\\mathbf{x=16}$. Esto tiene sentido, porque si elevamos la base 2 a la potencia 4, obtenemos 16.'
        ],
        correctAnswers: { 'valor_x': 16 }
      },
      inputs: [{ id: 'valor_x', label: '$x = $', type: 'number' }],
      plot: { type: 'logarithmic', params: ['b'], domain: [0.1, 20], interactiveControls: [ { param: 'b', min: 1.1, max: 10, step: 0.1 } ] }
    },
    {
      id: 2,
      enunciado: 'Calcula el valor de la expresión $\\log_4(64)$ sin usar calculadora.',
      funcParams: { b: 4 },
      solution: {
        type: 'evaluar_log',
        pasos: [
          '\\textbf{1. Formular la pregunta clave}. La expresión $\\log_4(64)$ nos está haciendo una pregunta directa: \\textit{"¿A qué potencia necesito elevar la base 4 para que el resultado sea 64?"}',
          '\\textbf{2. Plantear una ecuación}. Vamos a llamar a esa potencia desconocida $\\mathbf{y}$. Entonces, la pregunta se convierte en una ecuación: $\\mathbf{\\log_4(64) = y}$.',
          '\\textbf{3. Convertir a forma exponencial}. Como en el problema anterior, "desenrollamos" el logaritmo. Usando la regla de que $\\log_b(A) = C$ es igual a $b^C = A$, nuestra ecuación se transforma en: $\\mathbf{4^y = 64}$.',
          '\\textbf{4. Buscar la potencia}. Ahora el problema es encontrar qué número $\\mathbf{y}$ hace que $4^y$ sea 64. Probemos con algunos números:\\n- $4^1 = 4$ (demasiado bajo).\\n- $4^2 = 4 \\times 4 = 16$ (aún bajo).\\n- $4^3 = 4 \\times 4 \\times 4 = 16 \\times 4 = 64$ (¡Bingo!).',
          '\\textbf{5. Conclusión}. El exponente que buscábamos es 3. Por lo tanto, el valor de $\\log_4(64)$ es $\\mathbf{3}$.'
        ],
        correctAnswers: { 'valor_y': 3 }
      },
      inputs: [{ id: 'valor_y', label: '$\\log_4(64) = $', type: 'number' }],
      plot: { type: 'logarithmic', params: ['b'], domain: [0.1, 70], interactiveControls: [ { param: 'b', min: 2, max: 10, step: 1 } ] }
    },
    {
      id: 3,
      enunciado: 'Resuelve la ecuación $\\log_b(9) = 2$ para encontrar el valor de la base $b$.',
      funcParams: { b: 3 },
      solution: {
        type: 'resolver_log_base',
        pasos: [
          '\\textbf{1. Identificar la incógnita}. Esta vez, lo que no conocemos es la base del logaritmo, $\\mathbf{b}$. La ecuación nos dice que si elevamos esta base desconocida a la potencia 2, el resultado es 9.',
          '\\textbf{2. Convertir a forma exponencial}. Una vez más, usamos la transformación mágica. La ecuación $\\log_b(9) = 2$ se convierte en $\\mathbf{b^2 = 9}$.',
          '\\textbf{3. Resolver la nueva ecuación}. La ecuación $b^2=9$ pregunta: \\textit{"¿Qué número, multiplicado por sí mismo, da 9?"}. La respuesta es $\\mathbf{3}$.',
          '\\textbf{4. Verificar las reglas de los logaritmos}. Matemáticamente, $(-3)^2$ también es 9. Pero hay una regla muy importante para los logaritmos: la base $\\mathbf{b}$ \\textbf{siempre debe ser un número positivo} y diferente de 1. Por lo tanto, la solución $b=-3$ no es válida.',
          '\\textbf{5. Conclusión}. La única respuesta que cumple con las reglas de los logaritmos es $\\mathbf{b=3}$.'
        ],
        correctAnswers: { 'valor_b': 3 }
      },
      inputs: [{ id: 'valor_b', label: '$b = $', type: 'number' }],
      plot: { type: 'logarithmic', params: ['b'], domain: [0.1, 10], interactiveControls: [ { param: 'b', min: 1.1, max: 10, step: 0.1 } ] }
    },
    {
      id: 4,
      enunciado: 'Si $\\log_x(125)=3$, determina el valor de la base $x$.',
      funcParams: { b: 5 },
      solution: {
        type: 'resolver_log_base',
        pasos: [
          'Convertimos la ecuación a forma exponencial: $x^3 = 125$.',
          'Como $125 = 5^3$, se concluye que $x = 5$.'
        ],
        correctAnswers: { 'valor_x': 5 }
      },
      inputs: [{ id: 'valor_x', label: '$x = $', type: 'number' }],
      plot: { type: 'logarithmic', params: ['b'], domain: [1, 8], interactiveControls: [ { param: 'b', min: 2, max: 8, step: 0.5 } ] }
    }
  ]
};

export const ICONS: Record<string, React.ReactNode> = {
  check: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  next: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
  solution: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
  reset: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M21 21v-5h-5"></path></svg>,
  menu: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
  close: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  send: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
  upload: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
};
