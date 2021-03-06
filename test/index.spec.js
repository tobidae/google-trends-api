'use strict';
import chai from 'chai';
import google from '../src';

const expect = chai.expect;

describe('index', () => {
  describe('should have the following methods:', () => {
    it('autoComplete', () => {
      expect(google.autoComplete).to.exist;
      expect(google.autoComplete).to.be.a('function');
    });

    it('interestByRegion', () => {
      expect(google.interestByRegion).to.exist;
      expect(google.interestByRegion).to.be.a('function');
    });

    it('interestOverTime', () => {
      expect(google.interestOverTime).to.exist;
      expect(google.interestOverTime).to.be.a('function');
    });

    it('relatedQueries', () => {
      expect(google.relatedQueries).to.exist;
      expect(google.relatedQueries).to.be.a('function');
    });

    it('relatedTopics', () => {
      expect(google.relatedTopics).to.exist;
      expect(google.relatedTopics).to.be.a('function');
    });

    it('realTimeTrends', () => {
      expect(google.realTimeTrends).to.exist;
      expect(google.realTimeTrends).to.be.a('function');
    });

    it('dailyTrends', () => {
      expect(google.dailyTrends).to.exist;
      expect(google.dailyTrends).to.be.a('function');
    });
  });
});
