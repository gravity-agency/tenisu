import chai = require('chai');
import chaiHttp from 'chai-http';
import server from '../src/app';

chai.should();
chai.use(chaiHttp);

/**
 * Test the /GET stats route
 */

describe('/GET stats', () => {
  it('it should GET the stats', (done) => {
    chai.request(server)
      .get('/stats')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
