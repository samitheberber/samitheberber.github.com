var home_content = $('<div />').append(
  $('<p />').text('Welcome!')
);

var test_content = $('<div />').append(
  $('<p />').text('This is test!')
);

(function($) {

  var app = $.sammy('#main', function() {

    this.get('#/', function(context) {
      this.swap(home_content);
    });

    this.get('#/test', function(context) {
      this.swap(test_content);
    });

  });

  $(function() {
    app.run('#/');
  });

})(jQuery);

