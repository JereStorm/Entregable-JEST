# TP ENTREGABLE JEST

## Consigna

1. **Realizar los test unitarios del controlador, test de integración y e2e.**
2. **Realizar el test de cobertura:** debe ser del **100%** del controlador.
3. **[Extra]** Hacer test unitarios del service.

> **Aclaración:**  
> La entrega es mediante un documento donde se aprecien los archivos `.spec` realizados.  
> Además, se deberá subir a GitHub y colocar el link al mismo en el documento.

**Fecha de entrega:** 5/9

---

## Guía para cumplir la consigna

### 1. Clonar y preparar el proyecto

- Clona el repositorio base:  
  [https://github.com/xX-RONIN-Xx/JestOlavaEntregable](https://github.com/xX-RONIN-Xx/JestOlavaEntregable)
- Instala las dependencias con:
  ```bash
  npm install
  ```
- Crea en MySQL una base de datos vacía (sin tablas).
- Modifica el archivo `app.module.ts` (o el archivo de configuración correspondiente) con los datos de acceso a tu base de datos.

---

### 2. Realizar los tests

#### a. Tests unitarios del controlador

- Crea archivos `.spec.ts` para cada método público del controlador.
- Asegúrate de cubrir casos de éxito, error y entradas inválidas.

#### b. Tests de integración

- Verifica la interacción entre el controlador y el service.
- Mockea dependencias externas si es necesario.

#### c. Tests end-to-end (e2e)

- Usa el entorno de pruebas e2e del proyecto.
- Simula peticiones HTTP reales y verifica las respuestas.

#### d. [Extra] Tests unitarios del service

- Crea tests para los métodos del service.
- Mockea dependencias externas si corresponde.

---

### 3. Cobertura de código

- Ejecuta el comando de cobertura:
  ```bash
  npm run test:cov
  ```
- Asegúrate de que el **controlador tenga 100% de cobertura** en statements, branches, functions y lines.

---

### 4. Documentación y entrega

- Documenta los archivos `.spec.ts` realizados.
- Incluye capturas de pantalla o reportes de cobertura.
- Explica brevemente qué cubre cada test.
- Sube tu proyecto a un repositorio propio en GitHub.
- Incluye el link al repositorio en el documento de entrega.

---

## Recomendaciones

- Usa nombres descriptivos para los tests y organiza los archivos por carpetas.
- Utiliza mocks y spies donde corresponda.
- Consulta la documentación oficial de Jest o del framework si tienes dudas.
- Verifica que todos los tests pasen antes de entregar.
- Revisa el reporte de cobertura para asegurarte de que no quedan líneas sin testear.

**El trabajo es individual.**

