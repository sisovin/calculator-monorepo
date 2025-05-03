import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('CalculatorsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/calculators (POST) add', () => {
    return request(app.getHttpServer())
      .post('/calculators')
      .send({ operation: 'add', operands: [1, 2, 3] })
      .expect(201)
      .expect({ result: 6 });
  });

  it('/calculators (POST) subtract', () => {
    return request(app.getHttpServer())
      .post('/calculators')
      .send({ operation: 'subtract', operands: [10, 5, 1] })
      .expect(201)
      .expect({ result: 4 });
  });

  it('/calculators (POST) multiply', () => {
    return request(app.getHttpServer())
      .post('/calculators')
      .send({ operation: 'multiply', operands: [2, 3, 4] })
      .expect(201)
      .expect({ result: 24 });
  });

  it('/calculators (POST) divide', () => {
    return request(app.getHttpServer())
      .post('/calculators')
      .send({ operation: 'divide', operands: [20, 2, 2] })
      .expect(201)
      .expect({ result: 5 });
  });
});
