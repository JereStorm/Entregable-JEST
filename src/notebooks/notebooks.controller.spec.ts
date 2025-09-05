/**
 * @file notebooks.controller.spec.ts
 * @description
 * Pruebas unitarias para NotebooksController.
 * Se testean los métodos públicos del controlador, cubriendo casos de éxito, error y entradas inválidas.
 * Se mockea NotebooksService para aislar el comportamiento del controlador.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { NotebooksController } from './notebooks.controller';
import { NotebooksService } from './notebooks.service';
import { HttpException } from '@nestjs/common';
import { CreateNotebookDto } from './dto/create-notebook.dto';
import { Notebook } from './entities/notebook.entity';

describe('NotebooksController', () => {
  let controller: NotebooksController;
  let service: NotebooksService;

  /**
   * Antes de cada test, se crea un módulo de pruebas con un mock de NotebooksService.
   * Esto permite controlar las respuestas del service y aislar el controlador.
   */
  beforeEach(async () => {
    const mockService = {
      findAll: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotebooksController],
      providers: [
        { provide: NotebooksService, useValue: mockService },
      ],
    }).compile();

    controller = module.get<NotebooksController>(NotebooksController);
    service = module.get<NotebooksService>(NotebooksService);
  });

  /**
   * Test para el método findAll()
   * Intención: Verificar que el controlador devuelva correctamente la lista de notebooks
   * tanto en el caso de éxito como cuando ocurre un error en el service.
   */
  describe('findAll', () => {
    it('debe devolver la lista de notebooks (caso de exito)', async () => {
      // Arrange: Se prepara un array simulado de notebooks y se configura el mock del service para devolverlo.
      const notebooks: Notebook[] = [
        { id: 1, title: 'Notebook 1', content: 'desc 1' },
        { id: 2, title: 'Notebook 2', content: 'desc 2' },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(notebooks);

      // Act: Se llama al método del controlador.
      const result = await controller.findAll();

      // Assert: Se verifica que el resultado sea el esperado y que el service haya sido llamado.
      expect(result).toEqual(notebooks);
      expect(service.findAll).toHaveBeenCalled();
    });

    it('debe lanzar HttpException si ocurre un error (caso de error)', async () => {
      // Arrange: Se configura el mock del service para lanzar un error.
      jest.spyOn(service, 'findAll').mockRejectedValue(new Error('DB error'));

      // Assert: Se espera que el controlador lance una HttpException con el mensaje adecuado.
      await expect(controller.findAll()).rejects.toThrow(HttpException);
      await expect(controller.findAll()).rejects.toThrow('Error retrieving notebooks');
    });
  });

  /**
   * Test para el método create()
   * Intención: Verificar que el controlador maneje correctamente la creación de notebooks,
   * tanto en el caso de éxito, como cuando ocurre un error o se recibe un DTO inválido.
   */
  describe('create', () => {
    it('debe crear un notebook y devolverlo (caso de éxito)', async () => {
      // Arrange: Se prepara un DTO válido y un notebook simulado, y se configura el mock del service.
      const dto: CreateNotebookDto = { title: 'Nuevo', content: 'desc' };
      const notebook: Notebook = { id: 1, ...dto } as Notebook;
      jest.spyOn(service, 'create').mockResolvedValue(notebook);

      // Act: Se llama al método del controlador con el DTO.
      const result = await controller.create(dto);

      // Assert: Se verifica que el resultado sea el notebook creado y que el service haya sido llamado con el DTO.
      expect(result).toEqual(notebook);
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('debe lanzar HttpException si ocurre un error al crear (caso de error)', async () => {
      // Arrange: Se prepara un DTO válido y se configura el mock del service para lanzar un error.
      const dto: CreateNotebookDto = { title: 'Nuevo', content: 'desc' };
      jest.spyOn(service, 'create').mockRejectedValue(new Error('DB error'));

      // Assert: Se espera que el controlador lance una HttpException con el mensaje adecuado.
      await expect(controller.create(dto)).rejects.toThrow(HttpException);
      await expect(controller.create(dto)).rejects.toThrow('Error creating notebook');
    });

    it('debe lanzar HttpException si el dto es invalido (caso de entrada invalida)', async () => {
      // Arrange: Se prepara un DTO invalido (faltan propiedades requeridas) y se configura el mock del service para lanzar un error.
      const dto: any = {}; // Falta title y content
      jest.spyOn(service, 'create').mockRejectedValue(new Error('Invalid data'));

      // Assert: Se espera que el controlador lance una HttpException con el mensaje adecuado.
      await expect(controller.create(dto)).rejects.toThrow(HttpException);
      await expect(controller.create(dto)).rejects.toThrow('Error creating notebook');
    });
  });
});