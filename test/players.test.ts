import chai = require('chai');
import chaiHttp from 'chai-http';
import server from '../src/app';

chai.should();
chai.use(chaiHttp);

/**
 * Test the /GET all players route
 */

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

/**
 * Test the player id /GET route
 */

describe('/GET players/:id', () => {
  it('it should GET a player with this particular id', (done) => {
    chai.request(server)
      .get('/players/19')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should GET a player with this particular id', (done) => {
    chai.request(server)
      .get('/players/52')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
