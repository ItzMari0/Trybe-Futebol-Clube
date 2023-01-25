import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User.model';

// import { Response } from 'superagent';
import { missingPassword, user, userLogin, wrongEmail, wrongPassword } from './mocks/login.mock';
import jwt from '../authorization/jwt';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login endpoint Tests', () => {
  describe('Incorrect Email/Password input', () => {
    beforeEach(async () => { sinon.stub(User, 'findOne')
      .resolves(null)
    });
    afterEach(() => {
      (User.findOne as sinon.SinonStub).restore();
    });

    it('wrong email', async () => {
      const { body, status } = await chai
        .request(app).post('/login').send(wrongEmail);
      expect(status).to.be.equal(401);
      expect(body.message).to.be.equal('Incorrect email or password');
    });

    it('wrong password', async () => {
      const { body, status } = await chai
        .request(app).post('/login').send(wrongPassword);
      expect(status).to.be.equal(401);
      expect(body.message).to.be.equal('Incorrect email or password');
    });

    it('missing password', async () => {
      const { body, status } = await chai
        .request(app).post('/login').send(missingPassword);
      expect(status).to.be.equal(400);
      expect(body.message).to.be.equal('All fields must be filled');
    });
  });

  describe('Valid Login', () => {
    beforeEach(async () => { sinon.stub(User, 'findOne')
    .resolves(user as User);
  });
  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore();
  });

    it('successfull login', async () => {
      const { body, status } = await chai
        .request(app).post('/login').send(userLogin);
      expect(status).to.be.equal(200);
      expect(body).to.have.property('token');
    });
  });

  describe('Token validation', () => {
    beforeEach(async () => { sinon.stub(User, 'findOne')
    .resolves(user as User);
  });
  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore();
  });

    it('invalid token', async () => {
      const { body, status } = await chai
        .request(app).get('/login/validate').send('Authorization');
      expect(status).to.be.equal(401);
      expect(body.message).to.be.equal('Expired or invalid token');
  });

  
    it('shows role after validation', async () => {
      const { header } = await chai
      .request(app).post('/login').send(userLogin);
      jwt.tokenVerify(header);
      const { body, status } = await chai
        .request(app).get('/login/validate').set('Authorization', header);
      expect(status).to.be.equal(200);
      expect(body.role).to.be.equal('user');
    });
  });
});
