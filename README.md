# 📌 Configuración del Proyecto Angular

Este documento describe los pasos para clonar el repositorio runoclock-web en **Angular 19.2.1** e instalar sus dependencias correctamente con **npm**.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión recomendada: **18.x.x** o superior)
- **npm** (versión recomendada: **9.x.x** o superior)
- **Git** (para clonar el repositorio)

Puedes verificar las versiones instaladas con los siguientes comandos:

```sh
node -v
npm -v
git --version
```

## 📥 Paso 1: Clonar el Repositorio

Ejecuta el siguiente comando para clonar el repositorio desde GitHub:

```sh
git clone https://github.com/FalofoAndes/runoclock-web.git
```

Luego, accede a la carpeta del proyecto:

```sh
cd runoclock-web
```

## 📦 Paso 2: Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias del proyecto:

```sh
npm install
```

Esto descargará todas las bibliotecas y paquetes requeridos.

## 🌐 Paso 3: Verificar la Versión de Angular

Para asegurarte de que estás usando **Angular 19.2.1**, ejecuta:

```sh
npx ng version
```

Si Angular no está en la versión correcta, puedes instalar la versión específica con:

```sh
npm install -g @angular/cli@19.2.1
```

Luego, verifica nuevamente con `ng version`.

## ▶️ Paso 4: Ejecutar el Proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```sh
ng serve
```

Por defecto, la aplicación estará disponible en:

```
http://localhost:4200/
```
