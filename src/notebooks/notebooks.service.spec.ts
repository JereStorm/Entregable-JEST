import { Test, TestingModule } from '@nestjs/testing';
import { NotebooksService } from './notebooks.service';

// Mock para NotebookRepository
const mockNotebookRepository = {};

describe('NotebooksService', () => {
  let service: NotebooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotebooksService,
        { provide: 'NotebookRepository', useValue: mockNotebookRepository },
      ],
    }).compile();

    service = module.get<NotebooksService>(NotebooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});