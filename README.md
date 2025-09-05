# TP Entregable Jest

## Descripción

Este proyecto corresponde al trabajo práctico entregable de Jest para la materia Programación II (2° año, 2° cuatrimestre). El objetivo principal fue implementar y documentar pruebas unitarias, de integración y end-to-end (e2e) para un controlador de una API desarrollada con NestJS, asegurando una cobertura del 100% en el controlador. Además, se realizaron pruebas unitarias adicionales sobre el service como extra.

---

## Implementación

### 1. **Preparación del Proyecto**

- Se clonó el repositorio base proporcionado.
- Se instalaron las dependencias necesarias con `npm install`.
- Se configuró la conexión a una base de datos MySQL local en el archivo `app.module.ts`.
- Se verificó el correcto funcionamiento de la aplicación antes de comenzar con los tests.

### 2. **Pruebas Implementadas**

#### a. **Tests Unitarios del Controlador**

- Se crearon los test en el `app.controller.spec.ts` para cada método público del controlador.
- Se cubrieron casos de éxito, error.
- Se utilizaron mocks para simular el comportamiento del service y aislar la lógica del controlador.

#### b. **Tests End-to-End e integracion (e2e)**

- Se implementaron pruebas e2e utilizando el entorno de pruebas de NestJS.
- Se simularon peticiones HTTP reales a los endpoints de la API.
- Se verificaron las respuestas y el comportamiento completo de la aplicación.

---

## Ejecución de Pruebas

Para ejecutar las pruebas y verificar la cobertura:

```bash
# Ejecutar todos los tests
npm run test

# Ejecutar pruebas e2e
npm run test:e2e

# Ver reporte de cobertura
npm run test:cov
```

---

## Recursos

- [NestJS Documentation](https://docs.nestjs.com)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

---

## Notas Finales

- Todos los tests pasan correctamente y la cobertura del controlador es del 100%.
- El proyecto está listo para ser revisado y cumple con todos los requisitos de la consigna.