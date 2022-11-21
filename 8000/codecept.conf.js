
exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000',
  
    defaultHeaders: {
      
      'Authorization': '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',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: '8000'
}
//k
