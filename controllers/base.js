module.exports = {
  index: {
    handler: function(request, reply){
      reply('Hello, world!');
    },
    app: {
      name: 'index'
    }
  },
}
