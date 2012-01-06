(function($) {

  var app = $.sammy('#content', function() {

    this.use('Template', 'tpl');

    this.get('#/', function(context) {
      this.partial('templates/home.tpl');
    });

    this.get('#/about', function(context) {
      this.partial('templates/about.tpl');
    });

  });

  $(function() {
    app.run('#/');
  });

})(jQuery);
