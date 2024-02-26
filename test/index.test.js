const assert = require('assert');
const { formatNumberLanguange } = require('../src/index');

describe('Number Formatting', function() {
  describe('#formatNumberLanguange()', function() {
    it('should return number in English format', function() {
      assert.strictEqual(formatNumberLanguange(1000, 'en', 'Dollar'), 'One Thousand Dollar');
    });
    it('should return number in Indonesian format', function() {
      assert.strictEqual(formatNumberLanguange(1000, 'id'), 'Seribu Rupiah');
    });
  });
});
