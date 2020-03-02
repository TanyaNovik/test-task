exports.config = {
  params: {
    defaultTimeOut: 15000
  },
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'jasmine',
  specs: ['tests/*.js'],
  capabilities:
    {
      name: 'desktop',
      browserName: 'chrome',
      chromeOptions: {
        args: ['--window-size=1800,1200', '--disable-infobars']
      }
    }

}