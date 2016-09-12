import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
// Log in
const agent = chai.request.agent('http://localhost:3000');

agent
  .post('/user/login')
  .send({ username: 'tyler', password: 'password' })
  .then(() => {
    return agent.get('/user/getUser')
      .then((res) => {
        expect(res).to.have.status(200);
      });
  });
