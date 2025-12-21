# DVD Screensaver en Flask

Este proyecto es una página web hecha con **Flask** que replica el clásico **DVD screensaver**: un logo que rebota por la pantalla infinitamente.

Funciona en **localhost**, no usa base de datos, no requiere internet y es ideal para aprender cómo Flask sirve HTML, CSS y JavaScript juntos.

---

## ¿Qué hace esta página?

* Muestra una pantalla negra
* Un logo (DVD) se mueve por la pantalla
* Rebota al tocar los bordes
* El movimiento es continuo usando JavaScript

Flask **solo sirve la página**.
El movimiento lo hace **JavaScript en el navegador**.

---

## Requisitos

Necesitás tener instalado:

* Python **3.8 o superior**
* pip (incluido con Python)
* flask
Para verificar:

python3 --version
pip3 --version


---

## Instalación

1. Cloná o copiá el proyecto
2. Entrá a la carpeta del proyecto

cd dvd_flask

3. Instalá Flask

pip3 install flask

(No instala nada raro, es una librería)


### Qué es cada cosa

* **app.py** → servidor Flask
* **templates/** → HTML que renderiza Flask
* **static/** → archivos estáticos

  * css → estilos
  * js → animación
  * img → imagen del logo

---

## Cómo funciona internamente

### Flask (`app.py`)

* Levanta un servidor web local
* Escucha en `localhost:5000`
* Cuando entrás a `/`, devuelve `index.html`

Flask **no anima nada**, solo entrega archivos.

---

### HTML (`index.html`)

* Define la estructura de la página
* Carga el CSS
* Carga el JavaScript
* Muestra la imagen del DVD

---

### CSS (`style.css`)

* Fondo negro
* Pantalla completa
* El logo tiene posición absoluta para poder moverse

---

### JavaScript (`dvd.js`)

* Calcula la posición del logo
* Cambia las coordenadas en cada frame
* Detecta choques con los bordes
* Invierte la dirección cuando rebota

Usa `requestAnimationFrame` para movimiento fluido.

---

## Ejecutar el proyecto

Desde la carpeta del proyecto:

python3 app.py

Vas a ver algo como:

Running on http://127.0.0.1:5000


Abrí el navegador y entrá a:

http://localhost:5000

---

## Problemas comunes

### La imagen no aparece

* Verificá que `dvd.png` esté en:

static/img/dvd.png

* El nombre debe coincidir exactamente

---

## Personalización

Podés:

* Cambiar la velocidad en `dvd.js`
* Cambiar el tamaño del logo en `style.css`
* Usar otra imagen
* Agregar cambio de color al rebotar

---

## Resumen corto

1. Instalás Flask
2. Ejecutás `app.py`
3. Abrís `localhost:5000`
4. El DVD rebota

Nada más.
