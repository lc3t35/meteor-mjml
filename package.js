Npm.depends({
  mjml: '4.6.3',
  handlebars: '4.7.6',
});

Package.describe({
  name: 'simonhochrein:mjml',
  version: '0.1.5',
  summary: 'MJML Email Template Engine For Meteor',
  git: 'https://github.com/simonhochrein/meteor-mjml',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.4.1');
  api.use('ecmascript');
  api.use(['email'], 'server');
  api.addFiles(['mjml.js'], 'server');
  api.export('MJML', 'server');
});
