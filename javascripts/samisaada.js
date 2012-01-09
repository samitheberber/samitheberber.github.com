// Modified from: http://stackoverflow.com/a/6271906
function parseFeed(url, callback) {
  var protocol = document.location.host == '' ? 'http:' : document.location.protocol; // Supports file-protocol
  $.ajax({
    url: protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      callback(data.responseData.feed);
    }
  });
}

(function($) {

  var app = $.sammy('#content', function() {

    this.use('Template', 'tpl');

    this.get('#/', function(context) {
      this.partial('templates/home.tpl');
      parseFeed('http://samitheberber.blogspot.com/feeds/posts/default', function(data) {
        $.each(data.entries, function(i, entry) {
          context.log(entry);
          context.render('templates/blog_entry.tpl', {entry: entry}).appendTo('#blog');
        });
      });
    });

    this.get('#/about', function(context) {
      this.partial('templates/about.tpl');
    });

  });

  $(function() {
    app.run('#/');
  });

})(jQuery);
