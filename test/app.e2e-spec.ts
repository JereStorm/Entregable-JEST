/**
 * @file app.e2e-spec.ts
 * @description
 * Pruebas end-to-end (e2e) para la aplicación principal usando AppModule.
 * Simulan peticiones HTTP reales para verificar el funcionamiento de los endpoints expuestos,
 * incluyendo el flujo completo de los controladores y servicios.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  /**
   * Antes de cada test, se crea una instancia de la aplicación NestJS
   * usando el AppModule completo, simulando el entorno real de ejecución.
   */
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  /**
   * Intención: Verificar que el endpoint GET /notebooks responde correctamente.
   * Flujo:
   * 1. Se realiza una petición GET a /notebooks.
   * 2. Se espera un status HTTP 200.
   * 3. Se pueden agregar más asserts según la respuesta esperada.
   */
  it('/notebooks (GET) debe devolver 200', async () => {
    const res = await request(app.getHttpServer()).get('/notebooks');
    expect(res.status).toBe(200);
    // Aquí se podrian agregar mas asserts para verificar el contenido de la respuesta
  });

  /**
   * Intención: Verificar que el endpoint POST /notebooks crea un notebook correctamente.
   * Flujo:
   * 1. Se envía un DTO válido por POST a /notebooks.
   * 2. Se espera un status HTTP 201 y que el body contenga los datos enviados.
   */
  it('/notebooks (POST) debe crear un notebook', async () => {
    const dto = { title: 'Nuevo', content: 'desc' };
    const res = await request(app.getHttpServer())
      .post('/notebooks')
      .send(dto);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(dto);
  });
});
