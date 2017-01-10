
$(function() {
  var accordionActive = false;

  $(window).on('resize', function() {
    var windowWidth = $(window).width();
    var $topMenu = $('#top-menu');
    var $sideMenu = $('#side-menu');

    if (windowWidth < 768) {
      if ($topMenu.hasClass("active")) {
        $topMenu.removeClass("active");
        $sideMenu.addClass("active");

        var $ddl = $('#top-menu .movable.dropdown');
        $ddl.detach();
        $ddl.removeClass('dropdown');
        $ddl.addClass('nav-header');

        $ddl.find('.dropdown-toggle').removeClass('dropdown-toggle').addClass('link');
        $ddl.find('.dropdown-menu').removeClass('dropdown-menu').addClass('submenu');

        $ddl.prependTo($sideMenu.find('.accordion'));
        $('#top-menu #qform').detach().removeClass('navbar-form').prependTo($sideMenu);

        if (!accordionActive) {
          var Accordion2 = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.movable .link');
            // Evento
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
          }

          Accordion2.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
              $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
              $el.find('.movable .submenu').not($next).slideUp().parent().removeClass('open');
            };
          }

          var accordion = new Accordion2($('ul.accordion'), false);
          accordionActive = true;
        }
      }
    }
    else {
      if ($sideMenu.hasClass("active")) {
        $sideMenu.removeClass('active');
        $topMenu.addClass('active');

        var $ddl = $('#side-menu .movable.nav-header');
        $ddl.detach();
        $ddl.removeClass('nav-header');
        $ddl.addClass('dropdown');

        $ddl.find('.link').removeClass('link').addClass('dropdown-toggle');
        $ddl.find('.submenu').removeClass('submenu').addClass('dropdown-menu');

        $('#side-menu #qform').detach().addClass('navbar-form').appendTo($topMenu.find('.nav'));
        $ddl.appendTo($topMenu.find('.nav'));
      }
    }
  });

  /**/
  var $menulink = $('.side-menu-link'),
    $wrap = $('.wrap-side');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $wrap.toggleClass('active');
    return false;
  });

  /*Accordion*/
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('ul.accordion'), false);

});
