const utils = require('./../../lib/utils')

describe('config.json', function() {
  it('should be parseable', function() {
    var source = require('fs').readFileSync(__dirname + '/../../conf/default.json', 'utf8')
    utils.JSON.parse(source)
  })
})
