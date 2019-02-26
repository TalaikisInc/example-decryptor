const request = require('supertest')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.should()
chai.use(chaiHttp)
const server = require('../build')

describe('api', () => {
  it('should decrypt messages #1', (done) => {
    request(server).post('/api').set('Content-Type', 'application/json').send({ message: '13 27 26 5' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        res.body.message.should.eql('MAZE')
        done()
      })
  })

  it('should decrypt messages #2', (done) => {
    request(server).post('/api').set('Content-Type', 'application/json').send({ message: '432 21 19 5832 5 135 14 6561 59049 15 486 275562' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        res.body.message.should.eql('PUSHEENICORN')
        done()
      })
  })

  it('should decrypt messages #3', (done) => {
    request(server).post('/api').set('Content-Type', 'application/json').send({ message: '20 486 21 513 19 324 5 21924 540 135 3 8' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        res.body.message.should.eql('TRUSSLE TECH')
        done()
      })
  })

  it('should decrypt messages #4', (done) => {
    request(server).post('/api').set('Content-Type', 'application/json').send({ message: '8 5 324 8748 295245 730 23 405 13122 12 108' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        res.body.message.should.eql('HELLO WORLD')
        done()
      })
  })

  it('should work for empty messages', (done) => {
    request(server).post('/api').set('Content-Type', 'application/json').send({ message: '' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })

  it('should not fail for empty body', (done) => {
    request(server).post('/api').set('Content-Type', 'application/json').send({ })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })

  it('should return errors', (done) => {
    request(server).post('/api').set('Content-Type', 'application/json').send({ message: '' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        res.body.error.should.eql('No message received.')
        done()
      })
  })
})
