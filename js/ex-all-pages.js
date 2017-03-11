
/************************************************************************************************************************************************************************************
 *  ALL PAGES
 ************************************************************************************************************************************************************************************/

$(document).on('knack-scene-render.any', function (event, page) {
    //$(".kn-current_user").html($(".kn-current_user").html().replace(/-/g, "").replace('Logged in as', ""));
    /*
      if ($(".kn-current_user").length === 1) {
  
          $(".kn-current_user").insertAfter("#knack-logo");
  
          $(".kn-current_user").html($(".kn-current_user").html().replace(/-/g, "").replace('Logged in as', ""));
  
          $('.knaccount_settings').attr('href','https://yachtconnector.knack.com/yachtbroker#home/knack-account/');
  
      }
    */

    if ($('#kn-scene_23').length) {
        //$('.kn-grid-list.kn-grid-6 li').hide();
    }

    $('.kn-current_user').contents().filter(function () {
        return this.nodeType == 3
    }).remove();

    /*
        $('.knaccount_settings').on('click', function(){
            $('.knaccount_settings:eq(1)').click();
        });
    */

     pageGuideTutorial();

    $('.number-counter').each(numberCountUp);

    addFeedBackButton();

});