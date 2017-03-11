/************************************************************************************************************************************************************************************
 *  JAVASCRIPT LIBRARIES
 ************************************************************************************************************************************************************************************/
/*
LazyLoad.js(['https://code.jquery.com/jquery-1.12.4.min.js'], function () {
    console.log('Loaded external files!');
});
LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery-footable/3.1.4/footable.js'], function () {
    console.log('Loaded external files!');
});
*/

// load CSS files from CDN
/*
var css_files = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'];
LazyLoad.css(css_files, function () {
    console.log('External CSS-es have been loaded');
});
*/
var css_files = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'];
LazyLoad.css(css_files, function () {
    console.log('External CSS-es have been loaded');
});

// load JS files from CDN
/*
LazyLoad.js(['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'], function () {
    console.log('Loaded external files!');
});
*/
/************************************************************************************************************************************************************************************
 *  FUNCTIONS
 ************************************************************************************************************************************************************************************/

$.urlParam = function (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};

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
/************************************************************************************************************************************************************************************
 *  BUYERS PAGES
 ************************************************************************************************************************************************************************************/

// Buyers List View Page: /yachtbroker#buyers/
$(document).on('knack-view-render.view_12', function (event, page) {

    console.log('view_12 loaded');
    /*
        changeBuyersDetailLinkTable({
            itemView: 'view_12',
            itemViewAdd: 'view_66' 
        });
    */

    changeTableLayout({
        itemView: 'view_12'
    });

    $('.small.kn-button.gray')
        .removeClass()
        .addClass('btn btn-primary btn-lg active inverse-button');
    $('.table-keyword-search').addClass('form-inline');
    $('.table-keyword-search input')
        .addClass('form-control')
        .removeAttr('style')
        .attr('style','width: 200px;');

    addTitleToIcons({
        itemTextEdit: 'Edit Buyer',
        itemTextDelete: 'Delete Buyer'
    });

});

$(document).on('knack-view-render.view_83', function (event, page) {

    console.log('view_83 loaded');
    /*
        changeBuyersDetailLinkTable({
            itemView: 'view_12',
            itemViewAdd: 'view_66' 
        });
    */

    changeTableLayout({
        itemView: 'view_83'
    });

    $('.small.kn-button.gray')
        .removeClass()
        .addClass('btn btn-primary btn-lg active inverse-button');
    $('.table-keyword-search').addClass('form-inline');
    $('.table-keyword-search input')
        .addClass('form-control')
        .removeAttr('style')
        .attr('style','width: 200px;');

    addTitleToIcons({
        itemTextEdit: 'Edit Buyer',
        itemTextDelete: 'Delete Buyer'
    });

});

// Buyers Add Buyer Page: /yachtbroker#buyers/add-buyer/
$(document).on('knack-page-render.scene_37', function (event, page) {

    console.log('scene 37 loaded');
    formFocusFieldLoad({
        itemField: 'field_8'
    });
});

// Buyers Add Buyer Page: /yachtbroker#add-buyer2/
$(document).on('knack-page-render.scene_44', function (event, page) {

    console.log('scene 44 loaded');
    formFocusFieldLoad({
        itemField: 'field_8'
    });
});

// Buyers Details with related Listings View Page: yachtbroker#buyers/buyer-details/
$(document).on('knack-view-render.view_14', function (event, page) {

    console.log('scene 8 loaded');

    var url = window.location.href;

    if (url.indexOf('?view') > -1) {
        console.log('good to go');
    } else {
        console.log('need to reload');
        reloadListingDetailLinkList({
            itemView: 'view_14',
            itemViewAdd: 'view_66',
            itemTypeView: 'list3s',
            itemFields: ['Budget', 'Minimum boat length', 'Maximum boat length', 'Oldest model year', 'Boat style', 'Fuel type', 'Minimum staterooms', 'Minimum cruising speed']
        });
    }

    fixCardTDTitleLayout({
        itemView: 'view_14',
        itemTRLevel: '1'
    });

    buyerDetailsView();

});

$(document).on('knack-view-render.view_66', function (event, page) {

    var url = window.location.href;

    addResultFilters({
        itemView: 'view_14',
        itemViewAdd: 'view_66',
        itemViewShow: 'view_66 .view-header',
        itemTypeView: 'list3s',
        itemTypeRecord: 'listing',
        itemFields: ['Budget', 'Minimum boat length', 'Maximum boat length', 'Oldest model year', 'Boat style', 'Fuel type', 'Minimum staterooms', 'Minimum cruising speed']
    });

    addCardClass({
        itemView: 'view_66',
        itemClassAddEven: 'yc-card-even',
        itemClassAddOdd: 'yc-card-odd'
    });

    addCardHeaderListing({
        itemView: 'view_66'
    });

    fixCardTDTitleLayout({
        itemView: 'view_66',
        itemTRLevel: '0'
    });

    if (url.indexOf('?view') > -1) {
        filterBuyerBoatStyleChoices();
    }

});

$(document).on('knack-view-render.view_55', function (event, page) {
    choiceFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: 3
    });

    addCommasToNumber({
        itemField: 'field_41'
    });

    addBuyerFormPage({
        itemView: '.view_55',
        itemTitle: 'Buyer Specifications'
    });

});
$(document).on('knack-view-render.view_78', function (event, page) {
    choiceFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: 3
    });

    addCommasToNumber({
        itemField: 'field_41'
    });

});
$(document).on('knack-view-render.view_30', function (event, page) {
    choiceFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: 3
    });

    addCommasToNumber({
        itemField: 'field_41'
    });

    addBuyerFormPage({
        itemView: '.view_30',
        itemTitle: 'Buyer Specifications'
    });

});
$(document).on('knack-view-render.view_86', function (event, page) {
    choiceFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: 3
    });

    addCommasToNumber({
        itemField: 'field_41'
    });

});

$(document).on('knack-view-render.view_88', function (event, page) {
    choiceFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: 3
    });

    addCommasToNumber({
        itemField: 'field_41'
    });

    addBuyerFormPage({
        itemView: '.view_88',
        itemTitle: 'Buyer Specifications'
    });

});

$(document).on('knack-view-render.view_81', function (event, page) {
    choiceFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: 3
    });

    addCommasToNumber({
        itemField: 'field_41'
    });

    addBuyerFormPage({
        itemView: '.view_81',
        itemTitle: 'Buyer Specifications'
    });

});
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
/************************************************************************************************************************************************************************************
 *  listing PAGES
 ************************************************************************************************************************************************************************************/

// Listings List View Page: /yachtbroker#listings/
$(document).on('knack-view-render.view_33', function (event, page) {

    console.log('scene 19 loaded');
    /*
        changeListingDetailLinkTable({
            itemView: 'view_33',
            itemViewAdd: 'view_61' 
        });
    */

    changeTableLayout({
        itemView: 'view_33'
    });

    $('.small.kn-button.gray')
        .removeClass()
        .addClass('btn btn-primary btn-lg active inverse-button');
    $('.table-keyword-search').addClass('form-inline');
    $('.table-keyword-search input')
        .addClass('form-control')
        .removeAttr('style')
        .attr('style','width: 200px;');

    addTitleToIcons({
        itemTextEdit: 'Edit Listing',
        itemTextDelete: 'Delete Listing'
    });
});

// Listings Add Listing Page: /yachtbroker#listings/add-listing/
$(document).on('knack-page-render.scene_38', function (event, page) {

    console.log('scene 20 loaded');
    formFocusFieldLoad({
        itemField: 'field_57'
    });

    $("ul.chzn-results li:contains('No preference')").remove();

});

// Listings Add Listing Page: /yachtbroker#add-listing2/
$(document).on('knack-page-render.scene_45', function (event, page) {

    console.log('scene 45 loaded');
    formFocusFieldLoad({
        itemField: 'field_57'
    });

    $("ul.chzn-results li:contains('No preference')").remove();

});

// Listing Details with related Buyers View Page: /yachtbroker#listings/listing-details/
$(document).on('knack-view-render.view_35', function (event, page) {

    console.log('scene 21 loaded');

    var url = window.location.href;

    if (url.indexOf('?view') > -1) {
        console.log('good to go');
    } else {
        console.log('need to reload');
        reloadListingDetailLinkList({
            itemView: 'view_35',
            itemViewAdd: 'view_61',
            itemTypeView: 'list3s',
            itemTypeRecord: 'buyer',
            itemFields: ['Price', 'Length', 'Year', 'Boat style', 'Fuel type', 'Number of staterooms', 'Estimated cruising speed']
        });
    }

    fixCardTDTitleLayout({
        itemView: 'view_35',
        itemTRLevel: '1'
    });

    listingDetailsView();

    addTitleToIcons({
        itemTextEdit: 'Edit Listing',
        itemTextDelete: 'Delete Listing'
    });

});

$(document).on('knack-view-render.view_61', function (event, page) {

    var url = window.location.href;

    addResultFilters({
        itemView: 'view_35',
        itemViewAdd: 'view_61',
        itemViewShow: 'view_61 .view-header',
        itemTypeView: 'list3s',
        itemTypeRecord: 'buyer',
        itemFields: ['Price', 'Length', 'Year', 'Boat style', 'Fuel type', 'Minimum cruising speed', 'Estimated cruising speed']
    });

    addCardClass({
        itemView: 'view_61',
        itemClassAddEven: 'yc-card-even',
        itemClassAddOdd: 'yc-card-odd'
    });

    addCardHeaderBuyer({
        itemView: 'view_61'
    });

    fixCardTDTitleLayout({
        itemView: 'view_61',
        itemTRLevel: '0'
    });

    if (url.indexOf('?view') > -1) {
        filterListingsBoatStyleChoices();
    }

    addTitleToIcons({
        itemTextEdit: 'Edit Buyer',
        itemTextDelete: 'Delete Buyer'
    });
    
});

$(document).on('knack-view-render.view_46', function (event, page) {

    addCommasToNumber({
        itemField: 'field_22'
    });

    changeSubmitButtonOnStatusChange();

    addListingFormPage({
        itemView: '.view_46',
        itemTitle: 'Listing Specifications'
    });

});
$(document).on('knack-view-render.view_48', function (event, page) {

    addCommasToNumber({
        itemField: 'field_22'
    });

    addListingFormPage({
        itemView: '.view_48',
        itemTitle: 'Listing Specifications'
    });

});
$(document).on('knack-view-render.view_82', function (event, page) {

    addCommasToNumber({
        itemField: 'field_22'
    });

    addListingFormPage({
        itemView: '.view_82',
        itemTitle: 'Listing Specifications'
    });

});
$(document).on('knack-view-render.view_80', function (event, page) {

    addCommasToNumber({
        itemField: 'field_22'
    });

});
$(document).on('knack-view-render.view_89', function (event, page) {

    addCommasToNumber({
        itemField: 'field_22'
    });

    addListingFormPage({
        itemView: '.view_89',
        itemTitle: 'Listing Specifications'
    });

});
function addListingFormPage(options) {

    var
        $item = $.extend({
            itemView: '.view_89',
            itemTitle: 'Listing Specifications'
        }, options),
        item,
        itemHTML = '<div class="container-flex">'+
        '    <div class="row yc-listing-add-title-section">'+
        '        <div class="col-xs-12">'+
        '            <h3 class="text-uppercase yc-listing-add-page-title">'+
                        $item.itemTitle +
        '            </h3>'+
        '        </div>'+
        '    </div>'+
        '</div>';
	
        $($item.itemView).prepend(itemHTML);
        $($item.itemView + ' form').addClass('row yc-add-listing-form');
        $($item.itemView + ' .kn-submit [type="submit"]').addClass('btn btn-primary btn-md active');
}

function addBuyerFormPage(options) {

    var
        $item = $.extend({
            itemView: '.view_89',
            itemTitle: 'Listing Specifications'
        }, options),
        item,
        itemHTML = '<div class="container-flex">'+
        '    <div class="row yc-buyer-add-title-section">'+
        '        <div class="col-xs-12">'+
        '            <h3 class="text-uppercase yc-buyer-add-page-title">'+
        '                Buyer Specifications'+
        '            </h3>'+
        '        </div>'+
        '    </div>'+
        '</div>';
	
        $($item.itemView).prepend(itemHTML);
        $($item.itemView + ' form').addClass('row yc-add-buyer-form');
        $($item.itemView + ' .kn-submit [type="submit"]').addClass('btn btn-primary btn-md active');
}
function compareToListing(itemFieldsData, itemView, itemViewAdd, itemType, itemTypeView, itemFilterExclude, itemTypeRecord) {

    console.log('compareToListing');

    if (itemTypeView === 'list3s') {
        var
            itemEach = '';
    } else {
        var
            itemEach = ' tbody tr';
    }

    $('#' + itemView + itemEach).each(function () {

        var
            itemPrice = '',
            itemLengthMin = '',
            itemLengthMax = '',
            itemYear = '',
            itemYachtStyle = [],
            itemYachtStyleId = '',
            itemFuelType = '',
            itemFuelTypeId = '',
            itemStateroomsMin = '',
            itemCruisingSpeedMin = '',
            excludeData = '',
            sortCards = $.urlParam(itemViewAdd + '_sort');

        for (i = 0; i < itemFieldsData.length; i++) {

            console.log('show data');
            console.log(itemFieldsData[i]);
            console.log(itemFieldsData[i].name);

            var
                itemData = itemFieldsData[i],
                itemName = itemData.name,
                itemId = itemData.fieldId;
            if (itemTypeView === 'list3s') {
                var
                    itemValue = $(this).find('.' + itemId + ' .kn-value').text().trim();
            } else {
                var
                    itemValue = $(this).find('.' + itemId).text().trim();
            }

            console.log('item value');
            console.log(itemValue);

            switch (itemName) {
                case 'Budget':
                    itemPrice = Math.round(Number(itemValue.replace(/[^0-9\.]+/g, "")) * 1.2);
                    break;
                case 'Minimum boat length':
                    itemLengthMin = Number(itemValue) - 1;
                    break;
                case 'Maximum boat length':
                    itemLengthMax = Number(itemValue) + 1;
                    break;
                case 'Oldest model year':
                    itemYear = itemValue - 4;
                    break;
                case 'Boat style':
                    if (itemTypeView === 'list3s') {
                        itemYachtStyleId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemYachtStyleId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }

                    $('#view_14 .field_43 > td > span span').each(function () {

                        var
                            itemText = $(this).text();

                        console.log(itemText);

                        itemYachtStyle.push(itemText);

                    });

                    break;
                case 'Fuel type':
                    itemFuelType = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemFuelTypeId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemFuelTypeId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
                    break;
                case 'Minimum staterooms':
                    itemStateroomsMin = Number(itemValue) - 2;
                    break;
                case 'Minimum cruising speed':
                    itemCruisingSpeedMin = Number(itemValue) - 4;
                    break;

            }

        }

        for (i = 0; i < itemFilterExclude.length; i++) {

            console.log('exclude data');
            console.log(itemFilterExclude[i]);

            var
                itemExclude = itemFilterExclude[i];

            console.log(itemExclude);
            excludeData = excludeData + '||' + itemExclude

            switch (itemExclude) {
                case 'Price':
                case 'Budget':
                    itemPrice = '';
                    break;
                case 'Length':
                case 'Min Length':
                    itemLengthMin = '';
                    itemLengthMax = '';
                    break;
                case 'Year':
                case 'Oldest model year':
                    itemYear = '';
                    break;
                case 'Boat style':
                    itemYachtStyle = '';
                    itemYachtStyleId = '';
                    break;
                case 'Fuel type':
                    itemFuelType = '';
                    itemFuelTypeId = '';
                    break;
                case 'Number of staterooms':
                case 'Minimum staterooms':
                    itemStateroomsMin = '';
                    break;
                case 'Estimated cruising speed':
                case 'Minimum cruising speed':
                    itemCruisingSpeedMin = '';
                    break;
            }
        }
        /*
                var
                    itemFilter = '?' + itemViewAdd + '_filters=' +
                        '{"match":"and","rules":[' +
                        '{"field":"field_24","operator":"higher than","value":"' + itemLengthMin + '","field_name":"Length"},' +
                        '{"match":"and","field":"field_24","operator":"lower than","value":"' + itemLengthMax + '","field_name":"Length"},' +
                        '{"match":"and","field":"field_22","operator":"lower than","value":"' + itemPrice + '","field_name":"Price"},' +
                        '{"match":"and","field":"field_25","operator":"higher than","value":"' + itemYear + '","field_name":"Year"},' +
                        '{"match":"and","field":"field_27","operator":"is","value":"' + itemYachtStyleId + '","val_label":"' + itemYachtStyle + '","field_name":"Boat style"},' +
                        '{"match":"and","field":"field_28","operator":"is","value":"' + itemFuelTypeId + '","val_label":"' + itemFuelType + '","field_name":"Fuel type"},' +
                        '{"match":"and","field":"field_29","operator":"lower than","value":"' + itemStateroomsMin + '","field_name":"Number of staterooms"},' +
                        '{"match":"and","field":"field_31","operator":"higher than","value":"' + itemCruisingSpeedMin + '","field_name":"Estimated cruising speed"}' +
                        ']}&' + itemViewAdd + '_page=1' +
                        '&recordType=' + itemTypeRecord;
        */
        // Prepare filters
        var itemFilter = {
            'match': 'and',
            'rules': [
                {
                    //Length
                    'field': 'field_24',
                    'operator': 'higher than',
                    'value': itemLengthMin
                },
                {
                    //Length
                    'field': 'field_24',
                    'operator': 'lower than',
                    'value': itemLengthMax
                },
                {
                    //Price
                    'field': 'field_22',
                    'operator': 'lower than',
                    'value': itemPrice
                },
                {
                    //Year
                    'field': 'field_25',
                    'operator': 'higher than',
                    'value': itemYear
                },
                /*
                {
                    //Boat style
                    'field': 'field_27',
                    'operator': 'is',
                    'value': itemYachtStyleId
                },
                */
                {
                    //Fuel type
                    'field': 'field_28',
                    'operator': 'is',
                    'value': itemFuelTypeId
                },
                {
                    //Number of staterooms
                    'field': 'field_29',
                    'operator': 'higher than',
                    'value': itemStateroomsMin
                },
                {
                    //Estimated cruising speed
                    'field': 'field_31',
                    'operator': 'higher than',
                    'value': itemCruisingSpeedMin
                }
            ]
        };

        if (sortCards !== null) {
            sortCards = '&' + itemViewAdd + '_sort=' + sortCards;
        } else {
            sortCards = '';
        }

        if (itemType === 'reload') {

            var
                itemHREF = window.location.href.split('?')[0];
            //window.location.href = itemHREF + itemFilter + '&excludeData=' + excludeData + sortCards;

            window.location.href = itemHREF +
                '?' + itemViewAdd + '_filters=' + encodeURIComponent(JSON.stringify(itemFilter)) +
                '&excludeData=' + excludeData + sortCards +
                '&recordType=' + itemTypeRecord +
                '&boatStyle=' + itemYachtStyle;

        } else {

            var
                itemHREF = $(this).find('td:eq(1) a').attr('href').split('?')[0];

            $(this).find('td:eq(1) a').attr('href', itemHREF + itemFilter);

        }
    });

}

function compareToBuyer(itemFieldsData, itemView, itemViewAdd, itemType, itemTypeView, itemFilterExclude, itemTypeRecord) {

    console.log('compareToBuyer');

    if (itemTypeView === 'list3s') {
        var
            itemEach = '';
    } else {
        var
            itemEach = ' tbody tr';
    }

    $('#' + itemView + itemEach).each(function () {

        var
            itemBudget = '',
            itemLengthLower = '',
            itemLengthHigher = '',
            itemYear = '',
            itemYachtStyle = '',
            itemYachtStyleId = '',
            itemFuelType = '',
            itemFuelTypeId = '',
            itemStaterooms = '',
            itemCruisingSpeed = '',
            excludeData = '',
            sortCards = $.urlParam(itemViewAdd + '_sort');

        for (i = 0; i < itemFieldsData.length; i++) {

            console.log('show data');
            console.log(itemFieldsData[i]);
            console.log(itemFieldsData[i].name);

            var
                itemData = itemFieldsData[i],
                itemName = itemData.name,
                itemId = itemData.fieldId;
            if (itemTypeView === 'list3s') {
                var
                    itemValue = $(this).find('.' + itemId + ' .kn-value').text().trim();
            } else {
                var
                    itemValue = $(this).find('.' + itemId).text().trim();
            }

            console.log('item value');
            console.log(itemValue);

            switch (itemName) {
                case 'Price':
                    itemBudget = Math.round(Number(itemValue.replace(/[^0-9\.]+/g, "")) * 0.8);
                    break;
                case 'Length':
                    itemLengthLower = Number(itemValue) + 1;
                    itemLengthHigher = Number(itemValue) - 1;
                    break;
                case 'Year':
                    itemYear = Number(itemValue) + 4;
                    break;
                case 'Boat style':
                    itemYachtStyle = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemYachtStyleId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemYachtStyleId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }

                    itemYachtStyle = $('#view_35 .field_27 > td > span span').text();
                    break;
                case 'Fuel type':
                    itemFuelType = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemFuelTypeId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemFuelTypeId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
                    break;
                case 'Number of staterooms':
                    itemStaterooms = Number(itemValue) + 2;
                    break;
                case 'Estimated cruising speed':
                    itemCruisingSpeed = Number(itemValue) + 4;
                    break;

            }

        }

        for (i = 0; i < itemFilterExclude.length; i++) {

            console.log('exclude data');
            console.log(itemFilterExclude[i]);

            var
                itemExclude = itemFilterExclude[i];

            console.log(itemExclude);
            excludeData = excludeData + '||' + itemExclude

            switch (itemExclude) {
                case 'Price':
                case 'Min Price':
                    itemBudget = '';
                    break;
                case 'Length':
                case 'Min Length':
                    itemLengthLower = '';
                    itemLengthHigher = '';
                    break;
                case 'Year':
                case 'Oldest model year':
                    itemYear = '';
                    break;
                case 'Boat style':
                    itemYachtStyle = '';
                    itemYachtStyleId = '';
                    break;
                case 'Fuel type':
                    itemFuelType = '';
                    itemFuelTypeId = '';
                    break;
                case 'Minimum cruising speed':
                case 'Minimum staterooms':
                    itemStaterooms = '';
                    break;
                case 'Estimated cruising speed':
                case 'Minimum cruising speed':
                    itemCruisingSpeed = '';
                    break;
            }
        }
        /*
                var
                    itemFilter = '?' + itemViewAdd + '_filters=' +
                        '{"match":"and","rules":[' +
                        '{"field":"field_10","operator":"lower than","value":"' + itemLengthLower + '","field_name":"Minimum boat length"},' +
                        '{"match":"and","field":"field_11","operator":"higher than","value":"' + itemLengthHigher + '","field_name":"Maximum boat length"},' +
                        '{"match":"and","field":"field_41","operator":"higher than","value":"' + itemBudget + '","field_name":"Budget"},' +
                        '{"match":"and","field":"field_42","operator":"lower than","value":"' + itemYear + '","field_name":"Oldest model year"},' +
                        '{"match":"and","field":"field_43","operator":"is","value":"' + itemYachtStyleId + '","val_label":"' + itemYachtStyle + '","field_name":"Boat style"},' +
                        '{"match":"and","field":"field_17","operator":"is","value":"' + itemFuelTypeId + '","val_label":"' + itemFuelType + '","field_name":"Fuel type"},' +
                        '{"match":"and","field":"field_44","operator":"lower than","value":"' + itemStaterooms + '","field_name":"Minimum state rooms"},' +
                        '{"match":"and","field":"field_46","operator":"lower than","value":"' + itemCruisingSpeed + '","field_name":"Minimum cruising speed"}' +
                        ']}&' + itemViewAdd + '_page=1' +
                        '&recordType=' + itemTypeRecord;
        */
        // Prepare filters
        var itemFilter = {
            'match': 'and',
            'rules': [
                {
                    //Minimum boat length
                    'field': 'field_10',
                    'operator': 'lower than',
                    'value': itemLengthLower
                },
                {
                    //Maximum boat length
                    'field': 'field_11',
                    'operator': 'higher than',
                    'value': itemLengthHigher
                },
                {
                    //Budget
                    'field': 'field_41',
                    'operator': 'higher than',
                    'value': itemBudget
                },
                {
                    //Oldest model year
                    'field': 'field_42',
                    'operator': 'lower than',
                    'value': itemYear
                },
                /*
                {
                    //Boat style
                    'field': 'field_43',
                    'operator': 'is',
                    'value': itemYachtStyleId
                },
                */
                {
                    //Fuel type
                    'field': 'field_17',
                    'operator': 'is',
                    'value': itemFuelTypeId
                },
                {
                    //Minimum state rooms
                    'field': 'field_44',
                    'operator': 'lower than',
                    'value': itemStaterooms
                },
                {
                    //Minimum Minimum cruising speed
                    'field': 'field_46',
                    'operator': 'lower than',
                    'value': itemCruisingSpeed
                }
            ]
        };

        if (sortCards !== null) {
            sortCards = '&' + itemViewAdd + '_sort=' + sortCards;
        } else {
            sortCards = '';
        }

        if (itemType === 'reload') {

            var
                itemHREF = window.location.href.split('?')[0];
            //window.location.href = itemHREF + itemFilter + '&excludeData=' + excludeData + sortCards;

            window.location.href = itemHREF + 
            '?' + itemViewAdd + '_filters=' + encodeURIComponent(JSON.stringify(itemFilter)) + 
            '&excludeData=' + excludeData + sortCards + 
            '&recordType=' + itemTypeRecord +
            '&boatStyle=' + itemYachtStyle;

        } else {

            var
                itemHREF = $(this).find('td:eq(1) a').attr('href').split('?')[0];

            $(this).find('td:eq(1) a').attr('href', itemHREF + itemFilter);

        }

    });
}
function changeSubmitButtonOnStatusChange(options){

    var
        $item = $.extend({
            itemView: 'view_46',
            itemField: 'field_53',
            itemTextChange: 'Submit',
            ItemChangeOn: 'Inactive'
        }, options),
        itemButtonValOrg = $('#' + $item.itemView).find('.kn-submit input[type="submit"]').val();

    $('#kn-input-' + $item.itemField).on('click', function(){
        var
            itemVal = $(this).find('input[name="' + $item.itemView + '-' + $item.itemField + '"]:checked').val(),
            itemButtonVal = $('#' + $item.itemView).find('.kn-submit input[type="submit"]').val();

        console.log(itemVal);

        if ( itemVal === $item.ItemChangeOn) {
            $('#' + $item.itemView).find('.kn-submit input[type="submit"]').val($item.itemTextChange);
        } else {
            $('#' + $item.itemView).find('.kn-submit input[type="submit"]').val(itemButtonValOrg);
        }
    });
}
function addTitleToIcons(options) {

    var
        $item = $.extend({
            itemTextEdit: 'Edit Listing',
            itemTextDelete: 'Delete Listing'
        }, options),
        item;

    $('.fa-pencil').each(function () {
        $(this).attr('title', $item.itemTextEdit);
    });
    $('.fa-times').each(function () {
        $(this).attr('title', $item.itemTextDelete);
    });
}

function addFeedBackButton() {

    if ($('#feedBack').length === 0) {

        var
            itemHTML = '<div id="feedBack" style="display: block;">' +
                '    <a href="#">' +
                '        <img src="http://ca.gov/images/template2014/clear.gif" title="Provide Feedback" alt="Provide Feedback">' +
                '    </a>' +
                '</div>' +
                '<div id="feedBackModal" class="modal">' +
                '    <!-- Modal content -->' +
                '    <div class="modal-content">' +
                '        <div class="modal-header" style="height: 40px;">' +
                '            <span class="modal-close">' +
                '                <div >×</div>' +
                '            </span>' +
                '            <p class="modal-header-text"> </p>' +
                '        </div>' +
                '        <div class="modal-body" style="overflow: hidden;">' +
                '            <iframe src="" id="feedBackForm" scrolling="no" width="100%" height="675" frameborder="0"></iframe>' +
                '        </div>' +
                '        <div>' +
                '            <br style="clear: both;">' +
                '        </div>' +
                '    </div>' +
                '</div>';

        $('#kn-app-menu').after(itemHTML);

        var feedBackButton = document.getElementById("feedBack");
        feedBackButton.style.display = "block";

        // Get the &lt;span&gt; element that closes the modal
        var closeButton = document.getElementsByClassName("modal-close")[0];

        $('#feedBack a').on('click', function (e) {

            e.preventDefault();

            var surveyToOpen = "https://www.surveymonkey.com/r/CDBXFNH";

            var viewportWidth = $(window).width();

            if (viewportWidth >= 992) {

                var modal = document.getElementById('feedBackModal');
                var feedBackIframe = document.getElementById('feedBackForm');
                feedBackIframe.src = surveyToOpen;
                modal.style.display = "block";
            }
            else {
                window.open(surveyToOpen);
            }
        });

        $('.modal-close').on('click', function () {
            var modal = document.getElementById('feedBackModal');
            modal.style.display = "none";
            document.getElementById('feedBackForm').src = "";
        });

    }
}


/*
    countUp.js
    by @inorganik
*/

// target = id of html element or var of previously selected html element where counting occurs
// startVal = the value you want to begin at
// endVal = the value you want to arrive at
// decimals = number of decimal places, default 0
// duration = duration of animation in seconds, default 2
// options = optional object of options (see below)

var CountUp = function(target, startVal, endVal, decimals, duration, options) {

    // make sure requestAnimationFrame and cancelAnimationFrame are defined
    // polyfill for browsers without native support
    // by Opera engineer Erik Möller
    var lastTime = 0;
    var vendors = ['webkit', 'moz', 'ms', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    var self = this;

     // default options
    self.options = {
        useEasing : true, // toggle easing
        useGrouping : true, // 1,000,000 vs 1000000
        separator : ',', // character to use as a separator
        decimal : '.', // character to use as a decimal
        easingFn: null, // optional custom easing closure function, default is Robert Penner's easeOutExpo
        formattingFn: null // optional custom formatting function, default is self.formatNumber below
    };
    // extend default options with passed options object
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            self.options[key] = options[key];
        }
    }
    if (self.options.separator === '') { self.options.useGrouping = false; }
    if (!self.options.prefix) self.options.prefix = '';
    if (!self.options.suffix) self.options.suffix = '';

    self.d = (typeof target === 'string') ? document.getElementById(target) : target;
    self.startVal = Number(startVal);
    self.endVal = Number(endVal);
    self.countDown = (self.startVal > self.endVal);
    self.frameVal = self.startVal;
    self.decimals = Math.max(0, decimals || 0);
    self.dec = Math.pow(10, self.decimals);
    self.duration = Number(duration) * 1000 || 2000;

    self.formatNumber = function(nStr) {
        nStr = nStr.toFixed(self.decimals);
        nStr += '';
        var x, x1, x2, rgx;
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? self.options.decimal + x[1] : '';
        rgx = /(\d+)(\d{3})/;
        if (self.options.useGrouping) {
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
            }
        }
        return self.options.prefix + x1 + x2 + self.options.suffix;
    };
    // Robert Penner's easeOutExpo
    self.easeOutExpo = function(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    };

    self.easingFn = self.options.easingFn ? self.options.easingFn : self.easeOutExpo;
    self.formattingFn = self.options.formattingFn ? self.options.formattingFn : self.formatNumber;

    self.version = function () { return '1.8.1'; };

    // Print value to target
    self.printValue = function(value) {
        var result = self.formattingFn(value);

        if (self.d.tagName === 'INPUT') {
            this.d.value = result;
        }
        else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
            this.d.textContent = result;
        }
        else {
            this.d.innerHTML = result;
        }
    };

    self.count = function(timestamp) {

        if (!self.startTime) { self.startTime = timestamp; }

        self.timestamp = timestamp;
        var progress = timestamp - self.startTime;
        self.remaining = self.duration - progress;

        // to ease or not to ease
        if (self.options.useEasing) {
            if (self.countDown) {
                self.frameVal = self.startVal - self.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
            } else {
                self.frameVal = self.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
            }
        } else {
            if (self.countDown) {
                self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
            } else {
                self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
            }
        }

        // don't go past endVal since progress can exceed duration in the last frame
        if (self.countDown) {
            self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
        } else {
            self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
        }

        // decimal
        self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

        // format and print value
        self.printValue(self.frameVal);

        // whether to continue
        if (progress < self.duration) {
            self.rAF = requestAnimationFrame(self.count);
        } else {
            if (self.callback) { self.callback(); }
        }
    };
    // start your animation
    self.start = function(callback) {
        self.callback = callback;
        self.rAF = requestAnimationFrame(self.count);
        return false;
    };
    // toggles pause/resume animation
    self.pauseResume = function() {
        if (!self.paused) {
            self.paused = true;
            cancelAnimationFrame(self.rAF);
        } else {
            self.paused = false;
            delete self.startTime;
            self.duration = self.remaining;
            self.startVal = self.frameVal;
            requestAnimationFrame(self.count);
        }
    };
    // reset to startVal so animation can be run again
    self.reset = function() {
        self.paused = false;
        delete self.startTime;
        self.startVal = startVal;
        cancelAnimationFrame(self.rAF);
        self.printValue(self.startVal);
    };
    // pass a new endVal and start animation
    self.update = function (newEndVal) {
        cancelAnimationFrame(self.rAF);
        self.paused = false;
        delete self.startTime;
        self.startVal = self.frameVal;
        self.endVal = Number(newEndVal);
        self.countDown = (self.startVal > self.endVal);
        self.rAF = requestAnimationFrame(self.count);
    };

    // format startVal on initialization
    self.printValue(self.startVal);
};

function numberCountUp() {
    // our main component
    var counter = $(this);

    // get our values the user has configured
    var endCount = counter.text().trim();

    // prepare the dom
    counter.text('0');
    counter.css({'visibility': 'visible'});



    // countUp lib options
    var options = {
        "useEasing": true,
        "useGrouping": false,
        "separator": "",
        "decimal": ".",
        "prefix": ""
    };


    // handle if user has set decimal precision
    var decimals = 0;
    if (endCount.indexOf('.') !== -1) {
        decimals = endCount.split('.')[1].length;
    }

    // handle if user has set a comma
    if (endCount.indexOf(',') !== -1) {
        options.useGrouping = true;
        options.separator = ',';
        endCount = parseFloat(endCount.replace(/,/g, ''));
    }

    // target, startVal, endVal, decimals, duration, options
    var demo = new CountUp(counter.get(0), 0, endCount, decimals, 3.5, options);

     demo.start();

}



function pageGuideTutorial() {

    var
        pageURL = window.location.href,
        showGuide = 0,
        homePagePage = '/yachtbroker#home/',
        homePage = '<ul id="tlyPageGuide">' +
            '  <li class="tlypageguide_right" data-tourtarget=".yc-home-client-title h1">' +
            '    <div>' +
            '      Welcome to your home screen dashboard. It is divided into two main sections - Buyers and Listings.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-buyers-help-active">' +
            '    <div>' +
            '      This box shows you how many active Buyers you have entered into the system and gives you the opportunity to add another Buyer.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-buyers-help-connections">' +
            '    <div>' +
            '      In Yacht Connector, we call call any matches between your Buyers and your Listings, or other Buyers and your Listings, or multiple combinations thereof, "Connections". This box shows you how many Connections you have between your Buyers and your Listings and how many Connections you have between your Buyers and other Broker\'s Listings or Co-Op Connections. You can also view your list of existing buyers.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-listings-help-active">' +
            '    <div>' +
            '      This box shows you how many active Listings you have entered into the system and gives you the opportunity to add another Listing.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-listings-help-connections">' +
            '    <div>' +
            '      We call the matches between your Listings and your Buyers or another Broker\'s Buyers "Connections". This box shows you how many Connections you have between your Listings and your Buyers and between your Listings and other Broker\'s Buyers or Co-Op Connections. You can also view your list of existing Listings.' +
            '    </div>' +
            '  </li>' +
            '</ul>';
        listingDetailsPage = '/yachtbroker#listings/listing-details/',
        listingDetails = '<ul id="tlyPageGuide">' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycListingDetails">' +
            '    <div>' +
            '      Here is the first item description. The number will appear to the left of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycExpandFilters">' +
            '    <div>' +
            '      Here is the second item description. The number will appear to the right of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_left" data-tourtarget=".kn-list-item">' +
            '    <div>' +
            '      Here is the third item description. The number will appear above the element.' +
            '    </div>' +
            '  </li>' +
            '</ul>',
        buyerDetailsPage = '/yachtbroker#buyers/buyer-details/',
        buyerDetails = '<ul id="tlyPageGuide">' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycListingDetails">' +
            '    <div>' +
            '      Here is the first item description. The number will appear to the left of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycExpandFilters">' +
            '    <div>' +
            '      Here is the second item description. The number will appear to the right of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_left" data-tourtarget=".kn-list-item">' +
            '    <div>' +
            '      Here is the third item description. The number will appear above the element.' +
            '    </div>' +
            '  </li>' +
            '</ul>';

        $('#tlyPageGuideWrapper').remove();

        // Home Page
        if ( pageURL.indexOf(homePagePage) > -1 ) {
            $('body').append(homePage);
            showGuide = 1;
            console.log('showGuide');
        }

        // Listings Details
        if ( pageURL.indexOf(listingDetailsPage) > -1 ) {
            $('body').append(listingDetails);
            showGuide = 1;
            console.log('showGuide');
        }

        // Buyers Details
        if ( pageURL.indexOf(buyerDetailsPage) > -1 ) {
            $('body').append(buyerDetails);
            showGuide = 1;
            console.log('showGuide');
        }

        if ( showGuide === 1 ) {
            tl.pg.init({ 
                pg_caption: 'Page Help',
                auto_refresh: true
            });
        }

}

/*
 * Tracelytics PageGuide
 *
 * Copyright 2013 Tracelytics
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Contributing Author: Tracelytics Team
 */

/*
 * PageGuide usage:
 *
 *  Preferences:
 *  auto_show_first:    Whether or not to focus on the first visible item
 *                      immediately on PG open (default true)
 *  loading_selector:   The CSS selector for the loading element. pageguide
 *                      will wait until this element is no longer visible
 *                      starting up.
 *  track_events_cb:    Optional callback for tracking user interactions
 *                      with pageguide.  Should be a method taking a single
 *                      parameter indicating the name of the interaction.
 *                      (default none)
 *  handle_doc_switch:  Optional callback to enlight or adapt interface
 *                      depending on current documented element. Should be a
 *                      function taking 2 parameters, current and previous
 *                      data-tourtarget selectors. (default null)
 *  custom_open_button: Optional id for toggling pageguide. Default null.
 *                      If not specified then the default button is used.
 *  pg_caption:         Optional - Sets the visible caption
 *  dismiss_welcome:    Optional function to permanently dismiss the welcome
 *                      message, corresponding to check_welcome_dismissed.
 *                      Default: sets a localStorage or cookie value for the
 *                      (hashed) current URL to indicate the welcome message
 *                      has been dismissed, corresponds to default
 *                      check_welcome_dismissed function.
 *  check_welcome_dismissed: Optional function to check whether or not the
 *                      welcome message has been dismissed. Must return true
 *                      or false. This function should check against whatever
 *                      state change is made in dismiss_welcome. Default:
 *                      checks whether a localStorage or cookie value has been
 *                      set for the (hashed) current URL, corresponds to default
 *                      dismiss_welcome function.
 *  ready_callback:     A function to run once the pageguide ready event fires.
 *  pointer_fallback:   Specify whether or not to provide a fallback for css
 *                      pointer-events in browsers that do not support it
 *                      (default true).
 *  default_zindex:     The css z-index to apply to the tlypageguide_shadow
 *                      overlay elements (default 100);
 *  steps_element:      Selector for the ul element whose steps you wish to use
 *                      in this particular pageguide object (default '#tlyPageGuide');
 *  auto_refresh:       If set to true, pageguide will run a timer to constantly
 *                      monitor the DOM for changes in the target elements and
 *                      adjust the pageguide display (bubbles, overlays, etc)
 *                      accordingly. The timer will only run while pageguide is open.
 *                      Useful for single-page or heavily dynamic apps where
 *                      pageguide steps or visible DOM elements can change often.
 *                      (default false)
 *  welcome_refresh:    Similar to auto_refresh, welcome_refresh enables a timer to
 *                      monitor the DOM for new .tlyPageGuideWelcome elements. This is
 *                      useful if your welcome element isn't loaded immediately, or if
 *                      you want to show different welcome elements on different pages.
 *                      The timer will run constantly, whether or not the pageguide is
 *                      open, so enable at your discretion. (default false)
 *  refresh_interval:   If auto_refresh or welcome_refresh is enabled, refresh_interval
 *                      indicates in ms how often to poll the DOM for changes. (default 500)
 *
 */
tl = window.tl || {};
tl.pg = tl.pg || {};
tl.pg.pageGuideList = tl.pg.pageGuideList || [];
tl.pg.interval = {};

(function () {
    /**
     * default preferences. can be overridden by user settings passed into
     * tl.pg.init().
     **/
    tl.pg.default_prefs = {
        'auto_show_first': true,
        'loading_selector' : '#loading',
        'track_events_cb': function() { return; },
        'handle_doc_switch': null,
        'custom_open_button': null,
        'pg_caption' : 'page guide',
        'tourtitle': 'Open Page Guide for help',
        'check_welcome_dismissed': function () {
            var key = 'tlypageguide_welcome_shown_' + tl.pg.hashUrl();
            // first, try to use localStorage
            try {
                if (localStorage.getItem(key)) {
                    return true;
                }
            // cookie fallback for older browsers
            } catch(e) {
                if (document.cookie.indexOf(key) > -1) {
                    return true;
                }
            }
            return false;
        },
        'dismiss_welcome': function () {
            var key = 'tlypageguide_welcome_shown_' + tl.pg.hashUrl();
            try {
                localStorage.setItem(key, true);
            } catch(e) {
                var exp = new Date();
                exp.setDate(exp.getDate() + 365);
                document.cookie = (key + '=true; expires=' + exp.toUTCString());
            }
        },
        'ready_callback': null,
        'pointer_fallback': true,
        'default_zindex': 100,
        'steps_element': '#tlyPageGuide',
        'auto_refresh': false,
        'refresh_welcome': false,
        'refresh_interval': 500
    };

    // boilerplate markup for the message display element and shadow/index bubble container.
    tl.pg.wrapper_markup =
        '<div id="tlyPageGuideWrapper">' +
            '<div id="tlyPageGuideOverlay"></div>' +
            '<div id="tlyPageGuideMessages">' +
                '<a href="#" class="tlypageguide_close" title="Close Guide">close</a>' +
                '<span class="tlypageguide_index"></span>' +
                '<div class="tlypageguide_text"></div>' +
                '<a href="#" class="tlypageguide_back" title="Previous">Previous</a>' +
                '<a href="#" class="tlypageguide_fwd" title="Next">Next</a>' +
            '</div>' +
            '<div id="tlyPageGuideContent"></div>' +
            '<div id="tlyPageGuideToggles"></div>' +
        '</div>';

    // boilerplate markup for the toggle element.
    tl.pg.toggle_markup =
        '<div class="tlypageguide_toggle" title="Launch Page Guide">' +
            '<div><span class="tlypageguide_toggletitle"></span></div>' +
            '<a href="#" class="tlypageguide_close" title="close guide">close guide &raquo;</a>' +
        '</div>';

    /**
     * initiates the pageguide using the given preferences. must be idempotent, that is,
     * able to run multiple times without changing state.
     * preferences (object): any preferences the user wishes to override.
     **/
    tl.pg.init = function(preferences) {
        preferences = $.extend({}, tl.pg.default_prefs, preferences);
        var $guide = $(preferences.steps_element);
        var uuid = tl.pg.hashCode(preferences.steps_element);
        clearInterval(tl.pg.interval[uuid]);

        /* page guide object, for pages that have one */
        if ($guide.length === 0) {
            return;
        }

        // only worry about pointer_fallback if pointers are not supported in
        // the user's browser
        if (preferences.pointer_fallback && tl.pg.pointerEventSupport()) {
            preferences.pointer_fallback = false;
        }

        var $wrapper = $('#tlyPageGuideWrapper');
        var wrapperExists = true;
        if (!$wrapper.length) {
            wrapperExists = false;
            $wrapper = $(tl.pg.wrapper_markup);
        }

        if (preferences.custom_open_button == null &&
            $('#tlyPageGuideToggle' + uuid).length < 1) {
            var tourtitle = $guide.data('tourtitle') || preferences.tourtitle;
            var $toggle = $(tl.pg.toggle_markup)
                .attr('id', ('tlyPageGuideToggle' + uuid))
                .prepend(preferences.pg_caption);

            $toggle.find('.tlypageguide_toggletitle').text(tourtitle);
            $wrapper.find('#tlyPageGuideToggles').append($toggle);
        }

        if (!wrapperExists) {
            $('body').prepend($wrapper);
        }

        var pg = new tl.pg.PageGuide($('#tlyPageGuideWrapper'), preferences);

        pg.ready(function() {
            pg.setup_welcome();
            // start (neverending) welcome watch timer if preference is enabled
            if (pg.preferences.welcome_refresh) {
                pg.updateTimer(function () {
                    pg.setup_welcome();
                }, 'welcome');
            }
            pg.setup_handlers();
            pg.$base.find(".tlypageguide_toggle").animate({ "right": "-120px" }, 250);
            if (typeof(preferences.ready_callback) === 'function') {
                preferences.ready_callback();
            }
        });
        tl.pg.pageGuideList.push(pg);
        return pg;
    };

    /**
     * constructor for the base PageGuide object. contains: relevant elements,
     * user-defined preferences, and state information. all of this data is public.
     * pg_elem (jQuery element): the base wrapper element which contains all the pg
     *     elements
     * preferences (object): combined user-defined and default preferences.
     **/
    tl.pg.PageGuide = function (pg_elem, preferences) {
        this.preferences = preferences;
        this.$base = pg_elem;
        this.$message = this.$base.find('#tlyPageGuideMessages');
        this.$fwd = this.$base.find('a.tlypageguide_fwd');
        this.$back = this.$base.find('a.tlypageguide_back');
        this.$content = this.$base.find('#tlyPageGuideContent');
        this.$steps = $(preferences.steps_element);
        this.uuid = tl.pg.hashCode(preferences.steps_element);
        this.$toggle = this.$base.find('#tlyPageGuideToggle' + this.uuid);
        this.cur_idx = 0;
        this.cur_selector = null;
        this.track_event = this.preferences.track_events_cb;
        this.handle_doc_switch = this.preferences.handle_doc_switch;
        this.custom_open_button = this.preferences.custom_open_button;
        this.is_open = false;
        this.targetData = {};
        this.hashTable = {};
        this.changeQueue = [];
        this.visibleTargets = [];
        this.timer = {
            overlay: null,
            welcome: null
        };
    };

    /**
     * hash the current page's url. used in the default check_welcome_dismissed
     * and dismiss_welcome functions
     **/
    tl.pg.hashUrl = function () {
        return tl.pg.hashCode(window.location.href);
    };

    /**
     * generate a random numeric hash for a given string. originally from:
     * http://stackoverflow.com/a/7616484/1135244
     * str (string): the string to be hashed
     **/
    tl.pg.hashCode = function (str) {
        var hash = 0, i, c;
        if (str == null || str.length === 0) {
            return hash;
        }
        for (i = 0; i < str.length; i++) {
            c = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+c;
            hash = hash & hash;
        }
        return hash.toString();
    };

    /**
     * check whether the element targeted by the given selector is within the
     * currently scrolled viewport.
     * elem (string): selector for the element in question
     **/
    tl.pg.isScrolledIntoView = function(elem, height) {
        var dvtop = $(window).scrollTop(),
            dvbtm = dvtop + $(window).height(),
            eltop = $(elem).offset().top,
            elbtm = eltop + $(elem).height();

        return (eltop >= dvtop) && (elbtm <= dvbtm - height);
    };

    /**
     * remove all traces of pageguide from the DOM.
     **/
    tl.pg.destroy = function () {
        $('#tlyPageGuideWrapper').remove();
        $('body').removeClass('tlypageguide-open');
        $('body').removeClass('tlyPageGuideWelcomeOpen');
        for (var k in tl.pg.interval) {
            if (tl.pg.interval.hasOwnProperty(k)) {
                clearInterval(tl.pg.interval[k]);
            }
        }
    };

    /**
     * check whether pointer events are supported in the user's browser.
     * from http://stackoverflow.com/a/8898475/1135244
     **/
    tl.pg.pointerEventSupport = function () {
        var element = document.createElement('x');
        var documentElement = document.documentElement;
        var getComputedStyle = window.getComputedStyle;
        var supports = null;
        if(!('pointerEvents' in element.style)){
            return false;
        }
        element.style.pointerEvents = 'auto';
        element.style.pointerEvents = 'x';
        documentElement.appendChild(element);
        supports = getComputedStyle && getComputedStyle(element, '').pointerEvents === 'auto';
        documentElement.removeChild(element);
        return !!supports;
    };

    /**
     * close any other open pageguides
     * uuid (string): the uuid of the pageguide that should remain open
     **/
    tl.pg.closeOpenGuides = function (uuid) {
        for (var i=0; i<tl.pg.pageGuideList.length; i++) {
            if (tl.pg.pageGuideList[i].uuid !== uuid) {
                tl.pg.pageGuideList[i].close();
            }
        }
    }

    /**
     * check for a welcome message. if it exists, determine whether or not to show it,
     * using self.preferences.check_welcome_dismissed. then, bind relevant handlers to
     * the buttons included in the welcome message element.
     **/
    tl.pg.PageGuide.prototype.setup_welcome = function () {
        var $welcome = $('.tlyPageGuideWelcome, #tlyPageGuideWelcome')
            .not('#tlyPageGuideWrapper > .tlyPageGuideWelcome, #tlyPageGuideWrapper > #tlyPageGuideWelcome')
            .eq(0);
        var self = this;
        if ($welcome.length > 0) {
            self.preferences.show_welcome = !self.preferences.check_welcome_dismissed();
            if (self.preferences.show_welcome) {
                $welcome.appendTo(self.$base);
            }

            if ($welcome.find('.tlypageguide_ignore').length) {
                $welcome.on('click', '.tlypageguide_ignore', function () {
                    self.close_welcome();
                    self.track_event('PG.ignoreWelcome');
                });
            }
            if ($welcome.find('.tlypageguide_dismiss').length) {
                $welcome.on('click', '.tlypageguide_dismiss', function () {
                    self.close_welcome();
                    self.preferences.dismiss_welcome();
                    self.track_event('PG.dismissWelcome');
                });
            }
            $welcome.on('click', '.tlypageguide_start', function () {
                self.open();
                self.track_event('PG.startFromWelcome');
            });

            if (self.preferences.show_welcome) {
                self.pop_welcome();
            }
        }
    };

    /**
     * timer function. will poll the DOM at 250ms intervals until the user-defined
     * self.preferences.loading_selector becomes visible, at which point it will
     * execute the given callback. useful in cases where the DOM elements pageguide
     * depends on are loaded asynchronously.
     * callback (function): executes when loading selector is visible
     **/
    tl.pg.PageGuide.prototype.ready = function(callback) {
        var self = this;
        tl.pg.interval[self.uuid] = window.setInterval(function() {
                if (!$(self.preferences.loading_selector).is(':visible')) {
                    callback();
                    clearInterval(tl.pg.interval[self.uuid]);
                }
            }, 250);
        return this;
    };

    /**
     * grab any pageguide steps on the page that have not yet been added
     * to the pg object. for each one, append a shadow element and corresponding
     * index bubble to #tlyPageGuideContent.
     **/
    tl.pg.PageGuide.prototype.addSteps = function () {
        var self = this;
        self.$steps.find('li').each(function (i, el) {
            var $el = $(el);
            var tourTarget = $el.data('tourtarget');
            var positionClass = $el.attr('class');
            if (self.targetData[tourTarget] == null) {
                self.targetData[tourTarget] = {
                    targetStyle: {},
                    content: $el.html()
                };
                var hashCode = tl.pg.hashCode(tourTarget) + '';
                self.hashTable[hashCode] = tourTarget;
                self.$content.append(
                    '<div class="tlypageguide_shadow tlypageguide_shadow' + hashCode +
                    '" data-selectorhash="' + hashCode + '">' +
                        '<span class="tlyPageGuideStepIndex ' + positionClass +'"></span>' +
                    '</div>'
                );
            }
        });
    };

    /**
     * go through all the current targets and check whether the elements are
     * on the page and visible. if so, record all appropriate css data in self.targetData.
     * any changes in each self.targetData element get pushed to self.changeQueue.
     **/
    tl.pg.PageGuide.prototype.checkTargets = function () {
        var self = this;
        var visibleIndex = 0;
        var newVisibleTargets = [];
        for (var target in self.targetData) {
            var $elements = $(target);
            var $el;
            // assume all invisible
            var newTargetData = {
                targetStyle: {
                    display: 'none'
                }
            };
            // find first visible instance of target selector per issue #4798
            for(var i = 0; i < $elements.length; i++){
                if($($elements[i]).is(':visible') ){
                    $el = $($elements[i]); // is it weird to '$($x)'?
                    newTargetData.targetStyle.display = 'block';
                    var offset = $el.offset();
                    $.extend(newTargetData.targetStyle, {
                        top: offset.top,
                        left: offset.left,
                        width: $el.outerWidth(),
                        height: $el.outerHeight(),
                        'z-index': $el.css('z-index')
                    });
                    visibleIndex++;
                    newTargetData.index = visibleIndex;
                    newVisibleTargets.push(target);
                    break;
                }
            }
            var diff = {
                target: target
            };
            // compare new styles with existing ones
            for (var prop in newTargetData.targetStyle) {
                if (newTargetData.targetStyle[prop] !== self.targetData[target][prop]) {
                    if (diff.targetStyle == null) {
                        diff.targetStyle = {};
                    }
                    diff.targetStyle[prop] = newTargetData.targetStyle[prop];
                }
            }
            // compare index with existing index
            if (newTargetData.index !== self.targetData[target].index) {
                diff.index = newTargetData.index;
            }
            // push diff onto changequeue if changes have been made
            if (diff.targetStyle != null || diff.index != null) {
                self.changeQueue.push(diff);
            }
            $.extend(self.targetData[target], newTargetData);
        }
        self.visibleTargets = newVisibleTargets;
    };

    /**
     * position the shadow elements (and their attached index bubbles) in their
     * appropriate places over the visible targets. executes by iterating through
     * all the changes that have been pushed to changeQueue
     **/
    tl.pg.PageGuide.prototype.positionOverlays = function () {
        for (var i=0; i<this.changeQueue.length; i++) {
            var changes = this.changeQueue[i];
            var selector = '.tlypageguide_shadow' + tl.pg.hashCode(changes.target);
            var $el = this.$content.find(selector);
            if (changes.targetStyle != null) {
                var style = $.extend({}, changes.targetStyle);
                for (var prop in style) {
                    // fix this
                    if (prop === 'z-index') {
                        style[prop] = (typeof style[prop] === 'number') ?
                            style[prop] + 1 : this.preferences.default_zindex;
                    }
                }
                $el.css(style);
            }
            if (changes.index != null) {
                $el.find('.tlyPageGuideStepIndex').text(changes.index);
            }
        }
        this.changeQueue = [];
    };

    /**
     * find all pageguide steps and appropriately position their corresponding pageguide
     * elements. ideal to run on its own whenever pageguide is opened, or when a DOM
     * change takes place that will not affect the visibility of the target elements
     * (e.g. resize)
     **/
    tl.pg.PageGuide.prototype.refreshVisibleSteps = function () {
        this.addSteps();
        this.checkTargets();
        this.positionOverlays();
    };

    /**
     * update visible steps on page, and also navigate to the next available step if
     * necessary. this is especially useful when DOM changes take place while the
     * pageguide is open, meaning its target elements may be affected.
     **/
    tl.pg.PageGuide.prototype.updateVisible = function () {
        this.refreshVisibleSteps();
        if (this.cur_selector != null && this.cur_selector !== this.visibleTargets[this.cur_idx]) {
            // mod by target length in case user was viewing last target and it got removed
            var newIndex = this.cur_idx % this.visibleTargets.length;
            this.show_message(newIndex);
        }
    };

    /**
     * show the step specified by either a numeric index or a selector.
     * index (number): index of the currently visible step to show.
     **/
    tl.pg.PageGuide.prototype.show_message = function (index) {
        var targetKey = this.visibleTargets[index];
        var target = this.targetData[targetKey];
        if (target != null) {
            var selector = '.tlypageguide_shadow' + tl.pg.hashCode(targetKey);

            if (this.handle_doc_switch) {
                var len = this.visibleTargets.length;
                var prevTargetKey = this.visibleTargets[(index - 1 + len) % len];
                this.handle_doc_switch(targetKey, prevTargetKey);
            }

            this.$content.find('.tlypageguide-active').removeClass('tlypageguide-active');
            this.$content.find(selector).addClass('tlypageguide-active');

            this.$message.find('.tlypageguide_text').html(target.content);
            this.cur_idx = index;
            this.cur_selector = targetKey;

            // DOM stuff
            var defaultHeight = 100;
            var oldHeight = parseFloat(this.$message.css("height"));
            this.$message.css("height", "auto");
            var height = parseFloat(this.$message.outerHeight());
            this.$message.css("height", oldHeight);
            if (height < defaultHeight) {
                height = defaultHeight;
            }
            if (height > $(window).height()/2) {
                height = $(window).height()/2;
            }

            this.$message.show().animate({'height': height}, 500);
            if (!tl.pg.isScrolledIntoView($(targetKey), this.$message.outerHeight())) {
                $('html,body').animate({scrollTop: target.targetStyle.top - 50}, 500);
            }
            this.roll_number(this.$message.find('span'), target.index);
        }
    };

    /**
     * navigate to the previous step. if at the first step, loop around to the last.
     **/
    tl.pg.PageGuide.prototype.navigateBack = function () {
        /*
         * If -n < x < 0, then the result of x % n will be x, which is
         * negative. To get a positive remainder, compute (x + n) % n.
         */
        var new_index = (this.cur_idx + this.visibleTargets.length - 1) % this.visibleTargets.length;

        this.track_event('PG.back');
        this.show_message(new_index, true);
        return false;
    };

    /**
     * navigate to the next step. if at last step, loop back to the first.
     **/
    tl.pg.PageGuide.prototype.navigateForward = function () {
        var new_index = (this.cur_idx + 1) % this.visibleTargets.length;

        this.track_event('PG.fwd');
        this.show_message(new_index, true);
        return false;
    };

    /**
     * open the pageguide! can be fired at any time, though it's usually done via
     * the toggle element (either boilerplate or user-specified) or the welcome
     * modal.
     **/
    tl.pg.PageGuide.prototype.open = function() {
        if (this.is_open) {
            return;
        } else {
            tl.pg.closeOpenGuides(this.uuid);
            this._open();
        }
    };

    tl.pg.PageGuide.prototype._open = function () {
        if (this.preferences.show_welcome) {
            this.preferences.dismiss_welcome();
            this.close_welcome();
        }
        this.is_open = true;
        this.track_event('PG.open');

        this.refreshVisibleSteps();

        if (this.preferences.auto_show_first && this.visibleTargets.length) {
            this.show_message(0);
        }
        $('body').addClass('tlypageguide-open');
        this.$toggle.addClass('tlyPageGuideToggleActive');

        var self = this;
        if (self.preferences.auto_refresh) {
            self.updateTimer(function () {
                self.updateVisible();
            }, 'overlay');
        }
    };

    tl.pg.PageGuide.prototype.updateTimer = function (cb, prop) {
        var self = this;
        cb();
        self.timer[prop] = setTimeout(function () {
            self.updateTimer(cb, prop);
        }, self.preferences.refresh_interval);
    };

    /**
     * close the pageguide. can also be fired at any time, though usually done via
     * the toggle or the close button.
     **/
    tl.pg.PageGuide.prototype.close = function() {
        if (!this.is_open) {
            return;
        } else {
            this._close();
        }
    };

    tl.pg.PageGuide.prototype._close = function () {
        this.is_open = false;
        this.track_event('PG.close');
        if (this.preferences.auto_refresh) {
            clearTimeout(this.timer.overlay);
        }

        this.$content.find('.tlypageguide_shadow').css('display', 'none');
        this.$content.find('.tlypageguide-active').removeClass('tlypageguide-active');
        this.$message.animate({ height: "0" }, 500, function() {
            $(this).hide();
        });

        $('body').removeClass('tlypageguide-open');
        this.$toggle.removeClass('tlyPageGuideToggleActive');
    };

    /**
     * bind all relevant event handlers within the document.
     **/
    tl.pg.PageGuide.prototype.setup_handlers = function () {
        var self = this;

        /* interaction: open/close PG interface */
        var interactor = (self.custom_open_button == null) ?
                        self.$base.find('#tlyPageGuideToggle' + self.uuid) :
                        $(self.custom_open_button);
        interactor.off();
        interactor.on('click', function() {
            if (self.is_open) {
                self.close();
            } else if (self.preferences.show_welcome &&
                      !self.preferences.check_welcome_dismissed() &&
                      !$('body').hasClass('tlyPageGuideWelcomeOpen')) {
                self.pop_welcome();
            } else {
                self.open();
            }
        });

        /* close guide */
        $('.tlypageguide_close', self.$message.add($('.tlypageguide_toggle')))
            .on('click', function() {
                self.close();
                return false;
        });

        /* interaction: item click */
        self.$base.on('click', '.tlyPageGuideStepIndex', function () {
            var selector = self.hashTable[$(this).parent().data('selectorhash')];
            var target = self.targetData[selector];
            var index = (target) ? target.index : 1;
            self.track_event('PG.specific_elt');
            self.show_message(index - 1);
        });

        /* interaction: fwd/back click */
        self.$fwd.on('click', function() {
            if (self.is_open) {
                self.navigateForward();
            }
            return false;
        });

        self.$back.on('click', function() {
            if (self.is_open) {
                self.navigateBack();
            }
            return false;
        });

        // pass through click events on overlays if necessary
        if (self.preferences.pointer_fallback) {
            self.$base.on('click', '.tlypageguide_shadow', function (e) {
                $(this).hide();
                var $bottomElement = $(document.elementFromPoint(e.clientX, e.clientY));
                if ($bottomElement.is('a')) {
                    $bottomElement.get(0).click(); // required for anchor click
                } else {
                    $bottomElement.trigger(e.type);
                }
                $(this).show();
            });
        }

        /* register resize callback */
        $(window).resize(function() {
            if (self.is_open) {
                self.refreshVisibleSteps();
            }
        });
    };

    /**
     * animate a given number to roll to the side.
     * num_wrapper (jQuery element): the element whose number to roll
     * new_text (string): the new text to roll across the element
     * left (boolean): whether or not to roll to the left-hand side
     **/
    tl.pg.PageGuide.prototype.roll_number = function (num_wrapper, new_text, left) {
        num_wrapper.animate({ 'text-indent': (left ? '' : '-') + '50px' }, 'fast', function() {
            num_wrapper.html(new_text);
            num_wrapper.css({ 'text-indent': (left ? '-' : '') + '50px' }, 'fast').animate({ 'text-indent': "0" }, 'fast');
        });
    };

    /**
     * pop up the welcome modal.
     **/
    tl.pg.PageGuide.prototype.pop_welcome = function () {
        $('body').addClass('tlyPageGuideWelcomeOpen');
        this.track_event('PG.welcomeShown');
    };

    /**
     * close the welcome modal.
     **/
    tl.pg.PageGuide.prototype.close_welcome = function () {
        $('body').removeClass('tlyPageGuideWelcomeOpen');
    };
}(jQuery));

/************************************************************************************************************************************************************************************
 *  FUNCTIONS
 ************************************************************************************************************************************************************************************/

// Add Button items List
function addButtonToItemsList(options) {
    var
        $item = $.extend({
            itemAppendTo: 'table-keyword-search',
            itemName: 'View Inactive Buyers',
            itemURL: 'https://yachtconnector.knack.com/yachtbroker#buyers/buyers-inactive/'
        }, options),
        item;

    itemHTML = '<div class="yc-button-inactive-items">' +
        '<div class="yc-add-new-buyer-button">' +
        '<ul class="kn-button-menu kn-grid-1">' +
        '<li class="kn-link kn-link-1 kn-link-page">' +
        '<a href="' + $item.itemURL + '">' +
        '<span>' +
        '<i class="fa fa-handshake-o"></i>' +
        '&nbsp;&nbsp;' + $item.itemName +
        '</span>' +
        '</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    $('.' + $item.itemAppendTo)
        .append(itemHTML)
        .after('<div class="clear"></div>');

}

//Form Enter Dollars
function addCommasToNumber(options) {

    var
        $item = $.extend({
            itemField: ''
        }, options),
        item;

    $('#kn-input-' + $item.itemField + ' input').keyup(function (event) {

        // skip for arrow keys
        if (event.which >= 37 && event.which <= 40) return;

        // format number
        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
    });
}


// Form Focus
function formFocusFieldLoad(options) {

    var
        $item = $.extend({
            itemField: ''
        }, options),
        item;

    $('input#' + $item.itemField).focus();

}

function choiceFieldSelectionLimit(options) {
    var
        $item = $.extend({
            itemField: '',
            itemLimit: 3,
            itemFieldInstruction: 'Choose up to 3'
        }, options),
        itemCountInitial = $('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').length,
        itemTextInitial = $('#kn-input-' + $item.itemField + ' .chzn-choices').text().trim();

    if (itemCountInitial >= $item.itemLimit || itemTextInitial === 'No preference') {
        $('#kn-input-' + $item.itemField + ' .search-field').hide();
    }

    console.log($item.itemField);

    $('#kn-input-' + $item.itemField + ' label:eq(0)').append('<span class="yc-instructions">' + $item.itemFieldInstruction + '</span>');

    $('#kn-input-' + $item.itemField + ' .chzn-results .active-result, #kn-input-' + $item.itemField + ' .chzn-choices').on('click keypress keyup', function (e) {

        console.log('action');

        var
            itemCount = $('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').length,
            itemText = $('#kn-input-' + $item.itemField + ' .chzn-choices').text().trim();

        $('#kn-input-' + $item.itemField + ' .search-field input').attr('placeholder', 'Click or Type');

        console.log(itemCount);

        if (itemCount === $item.itemLimit) {
            //$('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').last().find('a').click();
            $('#kn-input-' + $item.itemField + ' .chzn-drop').css('left', '-9999px');
            $('#kn-input-' + $item.itemField + ' .search-field').hide();
            //alert('Please select no more than ' + $item.itemLimit + ' items.');
        } else if (itemCount > $item.itemLimit) {
            $('#kn-input-' + $item.itemField + ' .chzn-drop').css('left', '-9999px');
            $('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').last().find('a').click();
            $('#kn-input-' + $item.itemField + ' .search-field').hide();
            //alert('Please select no more than ' + $item.itemLimit + ' items.');
        }

    });

    $('.chzn-choices input, .chzn-choices, .chzn-results .active-result').on('focus click keypress keyup mouseover mouseout', function () {
        console.log('action - Choice');
        var
            itemCount = $('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').length,
            itemTextMouseover = $('#kn-input-' + $item.itemField + ' .chzn-choices').text().trim();

        console.log(itemCount);
        console.log($item.itemLimit);

        $('#kn-input-' + $item.itemField + ' .search-field input').attr('placeholder', 'Click or Type');

        if (itemCount === $item.itemLimit) {
            $('#kn-input-' + $item.itemField + ' .search-field').hide();
        } else if (itemCount < $item.itemLimit && itemTextMouseover !== "No preference") {
            $('#kn-input-' + $item.itemField + ' .search-field').show();
            console.log('Added input back');
        }
        if (itemTextMouseover.indexOf('No preference') > -1) {
            if (itemCount === 1) {
                $('#kn-input-' + $item.itemField + ' .search-field').hide();
                console.log('No Preference 1');
            } else if (itemCount === 2) {
                $('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').eq(0).find('a').click();
                $('#kn-input-' + $item.itemField + ' .search-field').hide();
                console.log('No Preference 2');
            } else {
                $('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').eq(0).find('a').click();
                $('#kn-input-' + $item.itemField + ' .chzn-choices .search-choice').eq(0).find('a').click();
                $('#kn-input-' + $item.itemField + ' .search-field').hide();
                console.log('No Preference 3');
            }

        }
    });

}

// Prevent more than x selection for Boat Style
function checkboxFieldSelectionLimit(options) {

    var
        $item = $.extend({
            itemField: '',
            itemLimit: 3,
            itemFieldInstruction: 'Choose up to 3'
        }, options),
        item;

    $('#kn-input-' + $item.itemField + ' label:eq(0)').append('<span class="yc-instructions">' + $item.itemFieldInstruction + '</span>')

    $('#kn-input-' + $item.itemField + ' input[type="checkbox"]').on('click', function (event) {
        if (this.checked && $('input:checked').length > $item.itemLimit) {
            event.preventDefault();
            alert('Please select no more than ' + $item.itemLimit + ' items.');
        }
    });
}


// Table layout 
function changeTableLayout(options) {

    var
        $item = $.extend({
            itemView: ''
        }, options),
        item;

    $('#' + $item.itemView + ' TABLE TBODY TR').each(function () {
        $(this)
            .addClass('yc-row-content')
            .before('<tr class="yc-row-spacer"></tr>');
    });
}

// Fix card td layout
function fixCardTDTitleLayout(options) {

    var
        $item = $.extend({
            itemView: '',
            itemTRLevel: ''
        }, options),
        item;

    $('#' + $item.itemView + ' .kn-label-right, #' + $item.itemView + ' .kn-label-left').each(function () {

        $(this)
            .find('tr:eq(' + $item.itemTRLevel + ')')
            .addClass('yc-list-header')
            .append('<td></td>');

    });
}


// Add Card class
function addCardClass(options) {

    var
        $item = $.extend({
            itemView: '',
            itemClassAddEven: 'yc-card-even',
            itemClassAddOdd: 'yc-card-odd'
        }, options),
        item;

    console.log($('#' + $item.itemView).length);
    console.log($('#' + $item.itemView + ' .kn-list-item-container').length);

    $('#' + $item.itemView + ' .kn-list-item-container:odd').addClass($item.itemClassAddOdd);
    $('#' + $item.itemView + ' .kn-list-item-container:even').addClass($item.itemClassAddEven);

}

// Buyer Details view
function buyerDetailsView() {

    var
        $item = $('#view_14');
        itemMinLength = $item.find('.field_10 .kn-value').text(),
        itemMaxLength = $item.find('.field_11 .kn-value').text(),
        itemOldestYear = $item.find('.field_42 .kn-value').text(),
        itemBudget = $item.find('.field_41 .kn-value').text()
        itemBoatStyle = $item.find('.field_43 .kn-value').html(),
        itemFuelType = $item.find('.field_17 .kn-value').text(),
        itemMinStaterooms = $item.find('.field_44 .kn-value').text(),
        itemMinCruisingSpeed = $item.find('.field_46 .kn-value').text(),
        itemName = $item.find('.field_8 .kn-value').text(),
        itemPhone = $item.find('.field_40 .kn-value').text(),
        itemEmail = $item.find('.field_38 .kn-value').text(),
        itemAddress = $item.find('.field_37 .kn-value').text(),
        itemNotes = $item.find('.field_50 .kn-value').text(),
        itemDateAdded = $item.find('.field_54 .kn-value').text().replace('delete', ''),
        itemEdit = $item.find('.kn-link-page:eq(0)').parent().html(),
        itemEditURL = $item.find('.kn-link-page').attr('href'),
        itemDelete = $item.find('.kn-link-delete').parent().html();

    $item.prepend('<div class="container-flex">'+
        '    <div class="row">'+
        '        <div class="col-xs-12">'+
        '            <h1 class="text-uppercase yc-buyer-details-page-title">'+
        '                My Buyer\'s Connections'+
        '            </h1>'+
        '        </div>'+
        '    </div>'+
        '    <div class="row yc-buyer-detail-title-section">'+
        '        <div class="col-xs-12 col-md-7">'+
        '            <div class="yc-buyer-detail-title">'+
        '                <h3>'+
        '                   DETAILS - '  + itemName +
        '                </h3>'+
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-md-5">'+
        '            <div class="yc-buyer-title-area-right">'+
        '                <span>'+
        '                    <a class="kn-link-page" href="' + itemEditURL + '">'+
        '                        <span>'+
        '                            <i class="fa fa-pencil" style="margin-right: 0.4em"></i>'+
        '                            edit'+
        '                        </span>'+
        '                    </a>'+
        '                </span>'+
        '                <span class="yc-add-delete">'+
        '                </span>'+
        '            </div>'+
        '            <div class="yc-buyer-detail-title-buttons">'+
        '                <button id="ycbuyerDetails" class="btn btn-primary btn-md active">Show Buyers\'s Contact Info</button>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '    <div class="row yc-buyer-detail-info-section yc-buyer-detail-info-hidden">'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-value yc-data-edit"></div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-delete"></div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Name</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-name">' +
                        itemName +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Phone</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-phone">' +
                        itemPhone +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Email</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-email">' +
                        itemEmail +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Address</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-address">' +
                        itemAddress +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Added</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-date-added">' +
                        itemDateAdded +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-2">'+
        '            <div class="yc-card-buyer-highlight-label">Notes</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-notes">' +
                        itemNotes +
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '    <div class="row yc-buyer-detail-info-section">'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Min Length</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-min-length">' +
                        itemMinLength +
        '           </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Max Length</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-max-length">' +
                        itemMaxLength +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Oldest Year</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-oldest-year">' +
                        itemOldestYear +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Budget</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-budget">' +
                        itemBudget +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Style</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-style">' +
                        itemBoatStyle +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Fuel</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-fuel">' +
                        itemFuelType +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Staterooms</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-staterooms">' +
                        itemMinStaterooms +
        '            </div>'+
        '        </div>'+
        '        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-24">'+
        '            <div class="yc-card-buyer-highlight-label">Min Speed</div>'+
        '            <div class="yc-card-buyer-highlight-value yc-data-min-speed">' +
                        itemMinCruisingSpeed +
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</div>');

    $item.find('.delete.kn-link-delete').insertAfter($item.find(".yc-add-delete") );

    $item.find('.yc-buyer-detail-info-hidden').hide();

    //$item.find('.view-header h2').after('<button id="ycListingDetails">Show Buyer\'s Contact Info</button>');

    //$item.find('.view-header h2').prepend('<i class="fa fa-handshake-o"></i>');

    $(document).on('click', '#ycbuyerDetails', function (e) {
        e.preventDefault();

        $item.find('.yc-buyer-detail-info-hidden').toggle();

        $(this).text(function (i, text) {
            return text === "Show Buyer\'s Contact Info" ? "Hide Buyer\'s Contact Info" : "Show Buyer\'s Contact Info";
        });

    });

}

// Listing Details view
function listingDetailsView() {
    console.log()
    var
        $item = $('#view_35'),
        $itemCard = $('#view_96'),
        itemMake = $item.find('.field_57 .kn-value').text(),
        itemModel = $item.find('.field_23 .kn-value').text(),
        itemLength = $item.find('.field_24 .kn-value').text(),
        itemYear = $item.find('.field_25 .kn-value').text(),
        itemPrice = $item.find('.field_22 .kn-value').text()
        itemBoatStyle = $item.find('.field_27 .kn-value').text(),
        itemFuelType = $item.find('.field_28 .kn-value').text(),
        itemStaterooms = $item.find('.field_29 .kn-value').text(),
        itemCruisingSpeed = $item.find('.field_31 .kn-value').text(),
        itemBoatName = $item.find('.field_60 .kn-value').text(),
        itemName = $item.find('.field_20 .kn-value').text(),
        itemPhone = $item.find('.field_36 .kn-value').text(),
        itemEmail = $item.find('.field_33 .kn-value').text(),
        itemNotes = $item.find('.field_50 .kn-value').text(),
        itemDateAdded = $item.find('.field_19 .kn-value').text().replace('delete', ''),
        itemEdit = $item.find('.kn-link-page:eq(0)').parent().html(),
        itemEditURL = $item.find('.kn-link-page').attr('href'),
        itemDelete = $item.find('.kn-link-delete').parent().html(),
        itemHTML = '<div class="container-flex">'+
            '    <div class="row">'+
            '        <div class="col-xs-12">'+
            '            <h1 class="text-uppercase yc-listing-details-page-title">'+
            '                My Listing\'s Connections'+
            '            </h1>'+
            '        </div>'+
            '    </div>'+
            '    <div class="row yc-listing-detail-title-section">'+
            '        <div class="col-xs-12 col-md-7">'+
            '            <div class="yc-listing-detail-title">'+
            '                <h3>'+
            '                    '+
            '                </h3>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-5">'+
            '            <div class="yc-listing-title-area-right">'+
            '                <span>'+
            '                    <a class="kn-link-page" href="' + itemEditURL + '">'+
            '                        <span>'+
            '                            <i class="fa fa-pencil" style="margin-right: 0.4em"></i>'+
            '                            edit'+
            '                        </span>'+
            '                    </a>'+
            '                </span>'+
            '                <span class="yc-add-delete">'+
            '                </span>'+
            '            </div>'+
            '            <div class="yc-listing-detail-title-buttons">'+
            '                <button id="ycListingDetails" class="btn btn-primary btn-md active">Show Seller\'s Contact Info</button>'+
            '            </div>'+
            '            '+
            '        </div>'+
            '    </div>'+
            '    <div class="row yc-listing-detail-info-section yc-listing-detail-info-hidden">'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-value yc-data-edit"></div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-delete"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Name</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-name"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Phone</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-phone"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Email</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-email"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Added</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-date-added"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-5">'+
            '            <div class="yc-card-listing-highlight-label">Notes</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-notes"></div>'+
            '        </div>'+
            '    </div>'+
            '    <div class="row yc-listing-detail-info-section">'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Boat-name</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-boat-name"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Make</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-make"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Model</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-model"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Length</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-length"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Year</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-year"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Price</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-price"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Style</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-boat-style"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label">Fuel</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-fuel-type"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label  yc-number-of-staterooms">Staterooms</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-number-of-staterooms"></div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-sm-6 col-md-15 col-lg-30">'+
            '            <div class="yc-card-listing-highlight-label yc-estimated-cruising-speed">Speed</div>'+
            '            <div class="yc-card-listing-highlight-value yc-data-estimated-cruising-speed"></div>'+
            '        </div>'+
            '    </div>'+
            '</div>';

        $('.view_35').prepend(itemHTML);

        $item.find('.delete.kn-link-delete').insertAfter($item.find(".yc-add-delete") );

    $('.yc-listing-detail-title H3').append('DETAILS - ' + itemBoatName + ' - ' + itemName);
    $('.yc-data-boat-name').append(itemBoatName);
    $('.yc-data-make').append(itemMake);
    $('.yc-data-model').append(itemModel);
    $('.yc-data-length').append(itemLength);
    $('.yc-data-year').append(itemYear);
    $('.yc-data-price').append(itemPrice);
    $('.yc-data-boat-style').append(itemBoatStyle);
    $('.yc-data-fuel-type').append(itemFuelType);
    $('.yc-data-number-of-staterooms').append(itemStaterooms);
    $('.yc-data-estimated-cruising-speed').append(itemCruisingSpeed);
    $('.yc-data-edit').append(itemEdit);
    $('.yc-data-delete').append(itemDelete);
    $('.yc-data-name').append(itemName);
    $('.yc-data-phone').append(itemPhone);
    $('.yc-data-email').append(itemEmail);
    $('.yc-data-date-added').append(itemDateAdded);
    $('.yc-data-notes').append(itemNotes);
/*
    $item.find('.view-header').append('<div class="yc-card-listing-highlight-container">' +
*/
    //$item.find('.kn-details-column, .yc-listing-detail-info-hidden').hide();
    $item.find('.yc-listing-detail-info-hidden').hide();

    //$item.find('.view-header h2').after('<button id="ycListingDetails">Show Seller\'s Contact Info</button>');

    //$item.find('.view-header h2').prepend('<i class="fa fa-anchor"></i>');

    $(document).on('click', '#ycListingDetails', function (e) {
        e.preventDefault();

        $item.find('.yc-listing-detail-info-hidden').toggle();

        $(this).text(function (i, text) {
            return text === "Show Seller\'s Contact Info" ? "Hide Seller\'s Contact Info " : "Show Seller\'s Contact Info";
        });

    });
}

// Add Card Header Listing
function addCardHeaderListing(options) {

    var
        $item = $.extend({
            itemView: ''
        }, options),
        item;

    if ($('.yc-card-title.yc-listing').length === 0) {

        $('#' + $item.itemView + ' .kn-list-item-container').each(function () {

            var
                //itemYear = $(this).find('.field_25 .kn-value').text(),
                //itemMake = $(this).find('.field_57 .kn-value').text(),
                //itemModel = $(this).find('.field_23 .kn-value').text(),
                //itemPrice = $(this).find('.field_22 .kn-value').text(),
                itemNotes = $(this).find('.field_50 .kn-value').text(),
                itemEditURL = $(this).find('.kn-link-page').attr('href'),
                itemBoatName = $(this).find('.field_60 .kn-value').text();

            $(this).find('.kn-details-group').prepend('<div class="yc-card-title yc-listing">'+
                '    <div class="yc-card-title-area-left">'+
                '        <i class="fa fa-user"></i>' +
                         itemBoatName +
                '    </div>'+
                '    <div class="yc-card-title-area-right">'+
                '        <span>'+
                '            <a class="kn-link-page" href="' + itemEditURL + '">'+
                '                <span>'+
                '                    <i class="fa fa-pencil" style="margin-right: 0.4em"></i>'+
                '                    edit'+
                '                </span>'+
                '            </a>'+
                '        </span>'+
                '        <span class="yc-add-delete">'+
                '        </span>'+
                '    </div>'+
                '</div>')
                .append('<div class="yc-card-note">' +
                '<div class="kn-label"><span>Note</span></div>' +
                itemNotes +
                '</div>');

                $(this).find('.delete.kn-link-delete').insertAfter($(this).find(".yc-add-delete") );
                $(this).find('.kn-details-link').hide();
                $(this).find('.field_50').hide();

        });

    }
}

// Add Card Header Buyer
function addCardHeaderBuyer(options) {

    var
        $item = $.extend({
            itemView: ''
        }, options),
        item;

    $('#' + $item.itemView + ' .kn-list-item-container').each(function () {

        var
            //itemPhone = $(this).find('.field_40 .kn-value').text(),
            //itemEmail = $(this).find('.field_38 .kn-value').text(),
            //itemDateAdded = $(this).find('.field_54 .kn-value').text().replace('delete',''),
            itemNotes = $(this).find('.field_51 .kn-value').text(),
            itemName = $(this).find('.field_8 .kn-value').text(),
            itemEditURL = $(this).find('.kn-link-page').attr('href'),
            itemDeleteURL = $(this).find('.kn-link-delete').attr('href');

        if ($(this).find('.yc-buyer').length === 0) {

            $(this).find('.kn-details-group').prepend('<div class="yc-card-title yc-buyer">'+
                '    <div class="yc-card-title-area-left">'+
                '        <i class="fa fa-user"></i>' +
                         itemName +
                '    </div>'+
                '    <div class="yc-card-title-area-right">'+
                '        <span>'+
                '            <a class="kn-link-page" href="' + itemEditURL + '">'+
                '                <span>'+
                '                    <i class="fa fa-pencil" style="margin-right: 0.4em"></i>'+
                '                    edit'+
                '                </span>'+
                '            </a>'+
                '        </span>'+
                '        <span class="yc-add-delete">'+
                '        </span>'+
                '    </div>'+
                '</div>')
                .append('<div class="yc-card-note">' +
                '<div class="kn-label"><span>Note</span></div>' +
                itemNotes +
                '</div>');

            /* Add not to the top
            '<div class="yc-card-note">' +
            itemNotes +
            '</div>');
            */

            $(this).find('.delete.kn-link-delete').insertAfter($(this).find(".yc-add-delete") );

            $(this).find('.kn-details-link').hide();
            $(this).find('.field_51').hide();

        }

    });
}

// Add filters selectors
function addResultFilters(options) {

    var
        $item = $.extend({
            itemView: '',
            itemViewAdd: '',
            itemViewShow: '',
            itemTypeView: '',
            itemTypeRecord: ''
        }, options),
        excludeData = $.urlParam('excludeData') || '',
        excludeData = excludeData.split('||'),
        sortCards = $.urlParam($item.itemViewAdd + '_sort'),
        itemHTMLBuyers = '<div class="container-flex yc-buyers-container">'+
            '    <div class="row yc-buyers-detail-title-section">'+
            '        <div class="col-xs-12 col-md-5">'+
            '            <div class="yc-buyers-detail-title">'+
            '                <h3>'+
            '                    Buyers'+
            '                </h3>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-7">'+
            '            <div class="yc-buyers-detail-title-buttons form-inline">'+
            '                <button id="ycExpandFilters" class="btn btn-primary btn-md active">Show Filters</button>'+
            '                <select id="sortCards" class="form-control">'+
            '                    <option value="field_54|asc">Date Added (low to high)</option>'+
            '                    <option value="field_54|desc">Date Added (high to low)</option>'+
            '                    <option value="field_42|asc">Oldest model year (low to high)</option>'+
            '                    <option value="field_42|desc">Oldest model year (high to low)</option>'+
            '                    <option value="field_10|asc">Min Length (low to high)</option>'+
            '                    <option value="field_10|desc">Min Length (high to low)</option>'+
            '                    <option value="field_41|asc">Budget (low to high)</option>'+
            '                    <option value="field_41|desc">Budget (high to low)</option>'+
            '                </select>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '    <div class="row yc-row-tab">'+
            '        <div class="yc-buyers-detail-tab yc-tab-active">'+
            '            <h4>'+
            '                <i class="fa fa-user" aria-hidden="true"></i> My Connections'+
            '            </h4>'+
            '        </div>'+
            '        <div class="yc-buyers-detail-tab">'+
            '            <h4>'+
            '                <i class="fa fa-handshake-o"></i> Co-Op Connections'+
            '            </h4>'+
            '        </div>'+
            '    </div>'+
            '    <div class="row yc-filter-section">'+
            '        <div class="col-xs-12 col-md-2">'+
            '            <div class="form-group">'+
            '                <label class="cm-filter-title title">Change Filter Criteria: </label>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-7 col-lg-8">'+
            '            <div class="form-group yc-check-boxes">'+
            '                <label for="length" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="length" value="Length" checked /> <span>Length</span></label>'+
            '                <label for="year" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="year" value="Year" checked /> <span>Year</span></label>'+
            '                <label for="price" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="price" value="Price" checked /> <span>Price</span></label>'+
            '                <label for="yachtstyle" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="yachtstyle" value="Boat style" checked /> <span>Boat style</span></label>'+
            '                <label for="fueltype" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="fueltype" value="Fuel type" checked /> <span>Fuel type</span></label>'+
            '                <label for="staterooms" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="staterooms" value="Number of staterooms" checked /> <span>Number of staterooms</span></label>'+
            '                <label for="cruisingspeed" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="cruisingspeed" value="Estimated cruising speed" checked /> <span>Estimated cruising speed</span></label>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-3 col-lg-2">'+
            '            <div class="form-group">'+
            '                <label for="filterResults"><button type="button" id="filterResults" class="btn btn-primary btn-md active">Apply Changes</button></label>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '</div>',
        itemHTMLListings = '<div class="container-flex yc-listings-container">'+
            '    <div class="row yc-listings-detail-title-section">'+
            '        <div class="col-xs-12 col-md-5">'+
            '            <div class="yc-listings-detail-title">'+
            '                <h3>'+
            '                    Listings'+
            '                </h3>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-7">'+
            '            <div class="yc-listings-detail-title-buttons form-inline">'+
            '                <button id="ycExpandFilters" class="btn btn-primary btn-md active">Show Filters</button>'+
            '                <select id="sortCards" class="form-control">'+
            '                    <option value="field_54|asc">Date Added (low to high)</option>'+
            '                    <option value="field_54|desc">Date Added (high to low)</option>'+
            '                    <option value="field_42|asc">Oldest model year (low to high)</option>'+
            '                    <option value="field_42|desc">Oldest model year (high to low)</option>'+
            '                    <option value="field_10|asc">Min Length (low to high)</option>'+
            '                    <option value="field_10|desc">Min Length (high to low)</option>'+
            '                    <option value="field_41|asc">Budget (low to high)</option>'+
            '                    <option value="field_41|desc">Budget (high to low)</option>'+
            '                </select>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '    <div class="row yc-row-tab">'+
            '        <div class="yc-listings-detail-tab yc-tab-active">'+
            '            <h4>'+
            '                <i class="fa fa-user" aria-hidden="true"></i> My Connections'+
            '            </h4>'+
            '        </div>'+
            '        <div class="yc-listings-detail-tab">'+
            '            <h4>'+
            '                <i class="fa fa-handshake-o"></i> Co-Op Connections'+
            '            </h4>'+
            '        </div>'+
            '    </div>'+
            '    <div class="row yc-filter-section">'+
            '        <div class="col-xs-12 col-md-2">'+
            '            <div class="form-group">'+
            '                <label class="cm-filter-title title">Change Filter Criteria: </label>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-7 col-lg-8">'+
            '            <div class="form-group yc-check-boxes">'+
            '                <label for="length"  title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="length" value="Min Length" checked /> <span>Min Length</span></label>'+
            '                <label for="year" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="year" value="Oldest model year" checked /> <span>Oldest model year</span></label>'+
            '                <label for="price" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="price" value="Budget" checked /> <span>Budget</span></label>'+
            '                <label for="yachtstyle" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="yachtstyle" value="Boat style" checked /> <span>Boat style</span></label>'+
            '                <label for="fueltype" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="fueltype" value="Fuel type" checked /> <span>Fuel type</span></label>'+
            '                <label for="staterooms" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="staterooms" value="Minimum staterooms" checked /> <span>Minimum staterooms</span></label>'+
            '                <label for="cruisingspeed" title="Uncheck to remove from filtering." class="checkbox-inline"><input type="checkbox" id="cruisingspeed" value="Minimum cruising speed" checked /> <span>Minimum cruising speed</span></label>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-3 col-lg-2">'+
            '            <div class="form-group">'+
            '                <label for="filterResults"><button type="button" id="filterResults" class="btn btn-primary btn-lg active">Apply Changes</button></label>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '</div>';


    if ($item.itemTypeRecord === 'buyer') {
        $('#' + $item.itemViewShow).replaceWith(itemHTMLBuyers);
    } else {
        $('#' + $item.itemViewShow).replaceWith(itemHTMLListings);
    }

    $('#' + $item.itemViewAdd + ' .kn-records-nav').addClass('row yc-buyers-section');
    $('#' + $item.itemViewAdd + ' .kn-list-content').addClass('row yc-buyers-section-bottom');

    console.log('sort url val: ' + sortCards);

    sortCardsSelection(sortCards, $item.itemTypeRecord);

    $('.yc-filter-section').hide();

    $('#ycExpandFilters').on('click', function (e) {
        e.preventDefault();

        $('.yc-filter-section').toggle();

        $(this).text(function (i, text) {
            return text === "Show Filters" ? "Hide Filters" : "Show Filters";
        });

    });

    $('#filterResults').on('click', function () {

        var
            itemFilterExclude = $('.cm-filter-section input:checkbox:not(:checked)').map(function () {
                return this.value;
            }).get(),
            itemTypeRecord = $.urlParam('recordType');

        if (itemTypeRecord === 'buyer') {
            var
                itemFields = ['Price', 'Length', 'Year', 'Boat style', 'Fuel type', 'Number of staterooms', 'Estimated cruising speed']
        } else {
            var
                itemFields = ['Budget', 'Minimum boat length', 'Maximum boat length', 'Oldest model year', 'Boat style', 'Fuel type', 'Minimum staterooms', 'Minimum cruising speed']
        }

        reloadListingDetailLinkList({
            itemView: $item.itemView,
            itemViewAdd: $item.itemViewAdd,
            itemTypeView: $item.itemTypeView,
            itemFilterExclude: itemFilterExclude,
            itemTypeRecord: itemTypeRecord,
            itemFields: itemFields
        });

    });

    $(document).on('change', '#sortCards', function () {

        var
            itemValue = $(this).val(),
            siteURL = decodeURIComponent(window.location.href).split('&' + $item.itemViewAdd + '_sort=')[0],
            siteURLReload = siteURL + '&' + $item.itemViewAdd + '_sort=' + itemValue;

        console.log(itemValue);
        console.log(siteURL);

        console.log(siteURLReload);

        window.location.href = siteURLReload;

    });

    console.log(excludeData);

    for (i = 0; i < excludeData.length; i++) {

        var
            itemData = excludeData[i];

        $('.cm-filter-section input[value="' + decodeURIComponent(itemData) + '"]')
            .prop("checked", false)
            .parent()
            .addClass('cm-filter-highlight');

    }

}

function sortCardsSelection(sortCards, itemTypeRecord) {

    if (sortCards !== null) {
        $('#sortCards').val(sortCards);
    } else {
        if (itemTypeRecord === 'buyer') {
            $('#sortCards').val('field_54|desc');
        } else {
            $('#sortCards').val('field_19|desc');
        }
    }

}

// Create a link to show related Buyers for a listing
function reloadListingDetailLinkList(options) {

    var
        $item = $.extend({
            itemView: '',
            itemViewAdd: '',
            itemTypeView: '',
            itemFilterExclude: '',
            itemTypeRecord: '',
            itemFields: ['Price', 'Length', 'Year', 'Boat style', 'Fuel type', 'Number of staterooms', 'Estimated cruising speed']
        }, options),
        itemFieldsData = [];

    console.log($item.itemFields);

    //$('#' + $item.itemView + ' .kn-details-group-column:eq(2) table tbody tr, #' + $item.itemView + ' .kn-details-group.column:eq(3) table tbody tr').each(function () {
    $('#' + $item.itemView + ' table tbody tr').each(function () {

        var $items = $(this),
            itemText = $items.find('th').text().trim(),
            itemClass = $items.attr('class')
        itemFields = $item.itemFields;

        console.log(itemFields);


        for (i = 0; i < itemFields.length; i++) {

            var itemData = itemFields[i];

            if (itemData === itemText) {

                var fieldId = itemClass;

                console.log(itemText);
                console.log(fieldId);

                itemFieldsData.push({
                    "name": itemText,
                    "fieldId": fieldId
                });
            }

        }

    });

    console.log(itemFieldsData);

    //$('#' + $item.itemView + ' .kn-details-group-column:odd').addClass('ym-listing-data');
    //$('#' + $item.itemView + ' .kn-details-group.column-1:even').addClass('ym-buyers-link');

    if ($item.itemTypeRecord === 'buyer') {
        compareToBuyer(itemFieldsData, $item.itemView, $item.itemViewAdd, 'reload', $item.itemTypeView, $item.itemFilterExclude, $item.itemTypeRecord);
    } else {
        compareToListing(itemFieldsData, $item.itemView, $item.itemViewAdd, 'reload', $item.itemTypeView, $item.itemFilterExclude, $item.itemTypeRecord);
    }

}



// Create a link to show related Buyers for a listing
function changeListingDetailLinkTable(options) {

    var
        $item = $.extend({
            itemView: '',
            itemViewAdd: '',
            itemTypeView: '',
            itemFilterExclude: ''
        }, options),
        itemFields = ['Price', 'Length', 'Year', 'Boat style', 'Fuel type', 'Number of staterooms', 'Estimated cruising speed'],
        itemFieldsData = [];

    $('#' + $item.itemView + ' thead th').each(function () {

        var $item = $(this).find('.kn-sort'),
            itemText = $item.text().trim(),
            itemClass = $item.attr('href') || '#|';


        for (i = 0; i < itemFields.length; i++) {

            var itemData = itemFields[i];

            if (itemData === itemText) {

                var fieldId = itemClass.split('|')[0].split('-')[0].split('#')[1];

                console.log(itemText);
                console.log(fieldId);

                itemFieldsData.push({
                    "name": itemText,
                    "fieldId": fieldId
                });
            }

        }

    });

    console.log(itemFieldsData);

    compareToBuyer(itemFieldsData, $item.itemView, $item.itemViewAdd, '', $item.itemTypeView, $item.itemFilterExclude);

}

// Create a link to show related Listings for a Buyer 
function changeBuyersDetailLinkTable(options) {

    var
        $item = $.extend({
            itemView: '',
            itemViewAdd: ''
        }, options),
        itemFields = ['Budget', 'Minimum boat length', 'Maximum boat length', 'Oldest model year', 'Boat style', 'Fuel type', 'Minimum staterooms', 'Minimum cruising speed'],
        itemFieldsData = [];

    $('#' + $item.itemView + ' thead th').each(function () {

        var $item = $(this).find('.kn-sort'),
            itemText = $item.text().trim(),
            itemClass = $item.attr('href') || '#|';


        for (i = 0; i < itemFields.length; i++) {

            var itemData = itemFields[i];

            if (itemData === itemText) {

                var fieldId = itemClass.split('|')[0].split('-')[0].split('#')[1];

                console.log(itemText);
                console.log(fieldId);

                itemFieldsData.push({
                    "name": itemText,
                    "fieldId": fieldId
                });
            }

        }

    });

    console.log(itemFieldsData);

    compareToListing(itemFieldsData, $item.itemView, $item.itemViewAdd);

}


function filterBuyerBoatStyleChoices() {

    var
        itemChoicesData = decodeURIComponent($.urlParam('boatStyle')).split(','),
        itemTotal = 0,
        itemNoPreference = $.inArray('No preference', itemChoicesData),
        itemCardRow = 1,
        itemCardCount = 0;

    console.log('inArray');
    console.log(itemNoPreference);

    console.log(itemChoicesData);

    $('.kn-list-item').each(function (index) {

        var
            itemValue = $(this).find('.field_27 .kn-value').text().trim(),
            itemFound = 0;

        console.log('itemValue ' + itemValue);

        for (i = 0; i < itemChoicesData.length; i++) {

            console.log('itemChoicesData[i] ' + itemChoicesData[i])

            if (itemChoicesData[i] === '' || itemNoPreference !== -1) {
                ++itemTotal;
                itemFound = 1;
            } else if (itemValue === itemChoicesData[i]) {
                console.log(itemCardCount);
                console.log(itemCardCount % 2);
                if (itemCardCount % 2 === 0) {
                    $('.kn-list-content').append('<div class="kn-list-two-column kn-list-container clearfix addCard' + itemCardRow + '"></div>');
                }

                $(this).parent().appendTo('.addCard' + itemCardRow);
                itemFound = 1;
                ++itemTotal;

                if (itemCardCount % 2 !== 0) {
                    ++itemCardRow;
                }
                ++itemCardCount;
            }


        }

        if (itemFound === 0) {
            $(this).parent().remove();
        }

    });

    if (itemTotal === 0) {
        $('.kn-list-content > .kn-list-container').append('<div class="kn-list-nodata">' +
            'You currently do not have any potential listings for this buyer.' +
            '</div>');
    }
}

function filterListingsBoatStyleChoices() {

    var
        itemChoicesData = decodeURIComponent($.urlParam('boatStyle')),
        itemTotal = 0,
        itemCardRow = 1,
        itemCardCount = 0;

    console.log(itemChoicesData);

    $('.kn-list-item').each(function (index) {

        var 
            itemFound = 0,
            itemHTML = $(this).parent();

        $(this).find('.field_43 .kn-value').find('span > span').each(function (index) {

            var
                itemValue = $(this).text().trim();

            console.log('itemValue ' + itemValue);
            console.log('itemChoicesData ' + itemChoicesData);

            if (itemValue === itemChoicesData || itemValue === 'No preference') {
                console.log(itemCardCount);
                console.log(itemCardCount % 2);
                if (itemCardCount % 2 === 0) {
                    $('.kn-list-content').append('<div class="kn-list-two-column kn-list-container clearfix addCard' + itemCardRow + '"></div>');
                }

                itemHTML.appendTo('.addCard' + itemCardRow);
                itemFound = 1;
                ++itemTotal;

                if (itemCardCount % 2 !== 0) {
                    ++itemCardRow;
                }
                ++itemCardCount;
            }

        });

        console.log('itemFound ' + itemFound);
        console.log('itemTotal ' + itemTotal);
    
        if (itemFound === 0) {
            $(this).parent().remove();
        }

    });

    if (itemTotal === 0) {
        $('.kn-list-content > .kn-list-container').append('<div class="kn-list-nodata">' +
            'You currently do not have any potential listings for this buyer.' +
            '</div>');
    }
}

