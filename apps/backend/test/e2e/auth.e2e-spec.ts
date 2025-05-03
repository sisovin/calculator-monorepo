import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';
import { AuthService } from '../../src/auth/auth.service';
import { AuthDto } from '../../src/auth/dto/auth.dto';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let authService = { login: () => 'test', register: () => 'test' };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AuthService)
      .useValue(authService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'test', password: 'test' } as AuthDto)
      .expect(201)
      .expect(authService.login());
  });

  it('/auth/register (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({ username: 'test', password: 'test' } as AuthDto)
      .expect(201)
      .expect(authService.register());
  });

  afterAll(async () => {
    await app.close();
  });
});
