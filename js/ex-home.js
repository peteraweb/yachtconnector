/************************************************************************************************************************************************************************************
 *  HOME PAGE
 ************************************************************************************************************************************************************************************/

// Buyers List View Page: /yachtbroker#home/
$(document).on('knack-view-render.view_125', function (event, page) {

    console.log('view_12 loaded');

    var
        itemClientName = $('#kn-report-view_125-1 .kn-pivot-group').text()
        itemBuyersCount = $('#kn-report-view_125-1 .kn-pivot-calc').text(),
        itemListingsCount = $('#kn-report-view_125-2 .kn-pivot-calc').text();

    $('.yc-home-my-buyers-count').append('<div class="kn-link kn-link-1 yc-view-buyers yc-my-buyers-count">' +
        '<div class="number-counter">' + itemBuyersCount + 
        '</div>'+
        '</div>');
    $('.yc-home-my-listings-count').append('<div class="kn-link kn-link-2 yc-view-listings yc-my-listings-count">' +
        '<div class="number-counter">' + itemListingsCount + 
        '</div>'+
        '</div>');
    $('.yc-home-client-title').append('<h1>' + itemClientName + '</h1>')
;
    
});

$(document).on('knack-view-render.view_127', function (event, page) {

    console.log('view_12 loaded');

    var
        itemMatchMyCount = $('#view_127 .field_69 .col-1').text().trim(),
        itemMatchCoOpListingsCount = $('#view_127 .field_70 .col-2').text().trim(),
        itemMatchCoOpBuyerCount = $('#view_127 .field_71 .col-3').text().trim();

        console.log('itemMatchCoOpBuyerCount ' + itemMatchCoOpBuyerCount);

        $('.yc-home-view-links').after('<div class="yc-home-view-links yc-my-matches"></div><div class="yc-home-view-links yc-my-co-op"></div>');
    $('.yc-home-my-buyers-co-op-match').append('<div class="kn-link kn-link-1 yc-view-buyers yc-buyers-co-op-connection-count">'+
        '<div class="number-counter">'+
        itemMatchCoOpBuyerCount +
        '</div>'+
        '</div>');
    $('.yc-home-my-listings-co-op-match').append('<div class="kn-link kn-link-2 yc-view-listings yc-listings-co-op-connection-count">'+
        '<div class="number-counter">'+
        itemMatchCoOpListingsCount +
        '</div>'+
        '</div>');
    $('.yc-home-my-buyers-match').append('<div class="kn-link kn-link-1 yc-view-buyers yc-buyers-my-connection-count">'+
        '<div class="number-counter">'+
        itemMatchMyCount +
        '</div>'+
        '</div>');
    $('.yc-home-my-listings-match').append('<div class="kn-link kn-link-2 yc-view-listings yc-listings-my-connection-count">'+
        '<div class="number-counter">'+
        itemMatchMyCount +
        '</div>'+
        '</div>');

    
});