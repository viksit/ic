module.exports = (env = {}) => require(`./config/webconfig.${env.production === true ? 'prod' : 'dev'}.js`);
