# Maquetado

Dos de mis primeros trabajos de maquetado estático (HTML/CSS), hechos como ejercicios de procesos de selección, reunidos acá en un solo repo con una landing en común.

## Estructura

- `index.html` — landing que enlaza a los dos proyectos.
- `MediaMonks/` — landing animada, con HTML/SCSS/TS.
- `Lenovo/` — página de catálogo de laptops, con HTML/CSS plano.
- `preview/` — capturas usadas como miniaturas en la landing.
- `.gitignore` — ignora `.DS_Store`.

Ninguno de los dos proyectos tiene build: son HTML/CSS (y JS compilado a mano en el caso de MediaMonks) servidos tal cual.

## Cómo verlo en local

Hay que levantar un servidor estático parado en la raíz del repo — no abrir `index.html` con doble click, porque los links que empiezan con `/` no resuelven con `file://`:

```
npx serve
```

y entrar a la URL que indique la terminal.

## Deploy

Pensado para deployarse como un único proyecto (por ejemplo en Vercel), sirviendo la raíz del repo sin ningún build step.

## Notas

- `Lenovo/` está maquetado solo para desktop (≥1200px), sin diseño responsive — así fue el pedido original. Más detalle en [`Lenovo/README.txt`](Lenovo/README.txt).
- La landing (`index.html`) sí es responsive y tiene selector de idioma (EN/FR/ES).
