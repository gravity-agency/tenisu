import chai = require('chai');
import chaiHttp from 'chai-http';
import server from '../src/app';

chai.use(chaiHttp);

/**
 *
 * Test the /GET route
 * */

describe('/GET players', () => {
  it('it should GET all the players', (done) => {
    chai.request(server)
      .get('/players')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.contains.keys('players');
        done();
      });
  });
});

describe('/GET players/:id', () => {
  it('it should GET all the players', (done) => {
    chai.request(server)
      .get('/players/17')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
