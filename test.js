var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
  use_unauthenticated: true,
  version_date: '2016-05-19'
});

tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!' },
  function(err, tone) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(tone, null, 2));
});

