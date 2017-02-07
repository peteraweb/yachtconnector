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
*

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

    if ( $(".kn-current_user").length === 1 ) {

        $(".kn-current_user").insertAfter("#knack-logo");

        $(".kn-current_user").html($(".kn-current_user").html().replace(/-/g, "").replace('Logged in as', ""));

    }

    if ( $('#kn-scene_23').length ) {
        $('#kn-app-menu').hide();
    }

    console.log('new test');

});

/************************************************************************************************************************************************************************************
 *  BUYERS PAGES
 ************************************************************************************************************************************************************************************/

// Buyers List View Page: /yachtbroker#buyers/
$(document).on('knack-view-render.view_12', function (event, page) {

    console.log('scene 7 loaded');
    /*
        changeBuyersDetailLinkTable({
            itemView: 'view_12',
            itemViewAdd: 'view_66' 
        });
    */

    changeTableLayout({
        itemView: 'view_12'
    });

});

// Buyers Add Buyer Page: /yachtbroker#buyers/add-buyer/
$(document).on('knack-page-render.scene_37', function (event, page) {

    console.log('scene 26 loaded');
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

});

$(document).on('knack-view-render.view_55', function (event, page) {
    checkboxFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: '3'
    });

});
$(document).on('knack-view-render.view_78', function (event, page) {
    checkboxFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: '3'
    });

});
$(document).on('knack-view-render.view_30', function (event, page) {
    checkboxFieldSelectionLimit({
        itemField: 'field_43',
        itemLimit: '3'
    });

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
});

// Listings Add Listing Page: /yachtbroker#listings/add-listing/
$(document).on('knack-page-render.scene_38', function (event, page) {

    console.log('scene 20 loaded');
    formFocusFieldLoad({
        itemField: 'field_57'
    });

    $( "ul.chzn-search li:contains('No preference')" ).remove();

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

});

$(document).on('knack-view-render.view_61', function (event, page) {
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

});


/************************************************************************************************************************************************************************************
 *  FUNCTIONS
 ************************************************************************************************************************************************************************************/

// Form Focus
function formFocusFieldLoad(options){

    var
        $item = $.extend({
            itemField: ''
        }, options),
        item;

        $('input#' +$item.itemField).focus();

}

// Prevent more than x selection for Boat Style
function checkboxFieldSelectionLimit(options){

    var
        $item = $.extend({
            itemField: '',
            itemLimit: '3',
            itemFieldInstruction: 'Choose up to 3'
        }, options),
        item;

    $('#kn-input-' + $item.itemField + ' label:eq(0)').append('<p class="kn-instructions">' + $item.itemFieldInstruction + '</p>')

    $('#kn-input-' + $item.itemField + ' input[type="checkbox"]').click(function(event) {
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
function buyerDetailsView(){

    var
        $item = $('#view_14');
        itemMinLength = $item.find('.field_10 .kn-value').text(),
        itemMaxLength = $item.find('.field_11 .kn-value').text(),
        itemOldestYear = $item.find('.field_42 .kn-value').text(),
        itemBudget = $item.find('.field_42 .kn-value').text()
        itemBoatStyle = $item.find('.field_43 .kn-value').html(),
        itemFuelType = $item.find('.field_17 .kn-value').text(),
        itemMinStaterooms = $item.find('.field_44 .kn-value').text(),
        itemMinCruisingSpeed = $item.find('.field_46 .kn-value').text();

    $item.find('.view-header').append('<div class="yc-card-listing-highlight-container">' + 
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        '<ul class="kn-button-menu kn-grid-1">' +    
        '<li class="kn-link kn-link-1 kn-link-page">' +
        '<a href="#" id="ycListingDetails">' +
        '<span>' +
        '<i class="fa null"></i>' +
        'View Details' +
        '</span>' +
        '</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Minimum boat length' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemMinLength +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Maximum boat length' +
        '</div>' +
        '<span class="yc-card-listing-highlight-value">' +
        itemMaxLength +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Oldest model year' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemOldestYear +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Budget' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemBudget +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Boat Style' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemBoatStyle +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Fuel Style' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemFuelType +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Minimum staterooms' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemMinStaterooms +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Minimum cruising speed' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemMinCruisingSpeed +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="clear"></div>');

        $item.find('.kn-details-column').hide();

        $(document).on('click','#ycListingDetails',function(e){
            e.preventDefault();

            $item.find('.kn-details-column').toggle();

        });
}

// Listing Details view
function listingDetailsView(){
    console.log()
    var
        $item = $('#view_35');
        itemMake = $item.find('.field_57 .kn-value').text(),
        itemModel = $item.find('.field_23 .kn-value').text(),
        itemLength = $item.find('.field_24 .kn-value').text(),
        itemYear = $item.find('.field_25 .kn-value').text(),
        itemPrice = $item.find('.field_22 .kn-value').text()
        itemBoatStyle = $item.find('.field_27 .kn-value').text(),
        itemFuelType = $item.find('.field_28 .kn-value').text(),
        itemStaterooms = $item.find('.field_29 .kn-value').text(),
        itemCruisingSpeed = $item.find('.field_31 .kn-value').text();

    $item.find('.view-header').append('<div class="yc-card-listing-highlight-container">' + 
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        '<ul class="kn-button-menu kn-grid-1">' +    
        '<li class="kn-link kn-link-1 kn-link-page">' +
        '<a href="#" id="ycListingDetails">' +
        '<span>' +
        '<i class="fa null"></i>' +
        'View Details' +
        '</span>' +
        '</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Make' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemMake +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Model' +
        '</div>' +
        '<span class="yc-card-listing-highlight-value">' +
        itemModel +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Length' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemLength +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Year' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemYear +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Price' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemPrice +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Boat Style' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemBoatStyle +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Fuel Style' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemFuelType +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Number of staterooms' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemStaterooms +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Estimated cruising speed' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemCruisingSpeed +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="clear"></div>');

        $item.find('.kn-details-column').hide();

        $(document).on('click','#ycListingDetails',function(e){
            e.preventDefault();

            $item.find('.kn-details-column').toggle();

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
                itemYear = $(this).find('.field_25 .kn-value').text(),
                itemMake = $(this).find('.field_57 .kn-value').text(),
                itemModel = $(this).find('.field_23 .kn-value').text(),
                itemPrice = $(this).find('.field_22 .kn-value').text(),
                itemNotes = $(this).find('.field_50 .kn-value').text();

            $(this).find('.kn-details-group').prepend('<div class="yc-card-title yc-listing">' +
                '<i class="fa fa-anchor"></i>' + 
                itemYear + ' - ' + itemMake + ' - ' + itemModel + ' - ' + itemPrice + 
                '</div>')
                .append('<div class="yc-card-note">' +
                '<div class="kn-label"><span>Note</span></div>' +
                itemNotes +
                '</div>');

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
            itemName = $(this).find('.field_8 .kn-value').text() + ' ' + $(this).find('.field_9 .kn-value').text(),
            itemPhone = $(this).find('.field_40 .kn-value').text(),
            itemEmail = $(this).find('.field_38 .kn-value').text(),
            itemDateAdded = $(this).find('.field_54 .kn-value').text(),
            itemNotes = $(this).find('.field_51 .kn-value').text();

        $(this).find('.kn-details-group').prepend('<div class="yc-card-title yc-buyer">' + 
            '<i class="fa fa-child"></i>' + 
            itemName + ' - ' + itemPhone + ' - ' + itemEmail + ' - ' + itemDateAdded + 
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

            $(this).find('.field_51').hide();

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
        itemHTMLBuyers = '<div class="cm-filter-section">' +
            '<div class="cm-check-boxes">' +
            '<label><h2>Potential Buyers</h2></label>' +
            '<label class="cm-filter-title title">Change Search Criteria: </label>' +
            '<label for="length" title="Uncheck to remove from filtering."><input type="checkbox" id="length" value="Length" checked /> <span>Length</span></label>' +
            '<label for="year"><input type="checkbox" id="year" value="Year" checked /> <span>Year</span></label>' +
            '<label for="price"><input type="checkbox" id="price" value="Price" checked /> <span>Price</span></label>' +
            '<label for="yachtstyle"><input type="checkbox" id="yachtstyle" value="Boat style" checked /> <span>Boat style</span></label>' +
            '<label for="fueltype"><input type="checkbox" id="fueltype" value="Fuel type" checked /> <span>Fuel type</span></label>' +
            '<label for="staterooms"><input type="checkbox" id="staterooms" value="Number of staterooms" checked /> <span>Number of staterooms</span></label>' +
            '<label for="cruisingspeed"><input type="checkbox" id="cruisingspeed" value="Estimated cruising speed" checked /> <span>Estimated cruising speed</span></label>' +
            '<label for="filterResults"><button type="button" id="filterResults">Apply Changes</button></label>' +
            '<label for="sortCards" class="yc-sort-cards"><span>Sort: </span><select id="sortCards">' +
            '<option value="field_54|asc">Date Added (low to high)</option>' +
            '<option value="field_54|desc">Date Added (high to low)</option>' +
            '<option value="field_42|asc">Oldest model year (low to high)</option>' +
            '<option value="field_42|desc">Oldest model year (high to low)</option>' +
            '<option value="field_10|asc">Min Length (low to high)</option>' +
            '<option value="field_10|desc">Min Length (high to low)</option>' +
            '<option value="field_41|asc">Budget (low to high)</option>' +
            '<option value="field_41|desc">Budget (high to low)</option>' +
            '</select></label>'
    '</div>' +
        '</div>',
        itemHTMLListings = '<div class="cm-filter-section">' +
        '<div class="cm-check-boxes">' +
        '<label><h2>Potential Listings</h2></label>' +
        '<label class="cm-filter-title title">Change Search Criteria: </label>' +
        '<label for="length" title="Uncheck to remove from filtering."><input type="checkbox" id="length" value="Min Length" checked /> <span>Min Length</span></label>' +
        '<label for="year"><input type="checkbox" id="year" value="Oldest model year" checked /> <span>Oldest model year</span></label>' +
        '<label for="price"><input type="checkbox" id="price" value="Budget" checked /> <span>Budget</span></label>' +
        '<label for="yachtstyle"><input type="checkbox" id="yachtstyle" value="Boat style" checked /> <span>Boat style</span></label>' +
        '<label for="fueltype"><input type="checkbox" id="fueltype" value="Fuel type" checked /> <span>Fuel type</span></label>' +
        '<label for="staterooms"><input type="checkbox" id="staterooms" value="Minimum staterooms" checked /> <span>Minimum staterooms</span></label>' +
        '<label for="cruisingspeed"><input type="checkbox" id="cruisingspeed" value="Minimum cruising speed" checked /> <span>Minimum cruising speed</span></label>' +
        '<label for="filterResults"><button type="button" id="filterResults">Apply Changes</button></label>' +
        '<label for="sortCards" class="yc-sort-cards"><span>Sort: </span><select id="sortCards">' +
        '<option value="field_19|asc">Date Added (low to high)</option>' +
        '<option value="field_19|desc">Date Added (high to low)</option>' +
        '<option value="field_25|asc">Year (low to high)</option>' +
        '<option value="field_25|desc">Year (high to low)</option>' +
        '<option value="field_24|asc">Length (low to high)</option>' +
        '<option value="field_24|desc">Length (high to low)</option>' +
        '<option value="field_22|asc">Price (low to high)</option>' +
        '<option value="field_22|desc">Price (high to low)</option>' +
        '</select></label>'
    '</div>' +
        '</div>';

    if ($item.itemTypeRecord === 'buyer') {
        $('#' + $item.itemViewShow).replaceWith(itemHTMLBuyers);
    } else {
        $('#' + $item.itemViewShow).replaceWith(itemHTMLListings);
    }

    console.log('sort url val: ' + sortCards);

    sortCardsSelection(sortCards, $item.itemTypeRecord);


    $(document).on('click', '#filterResults', function () {

        var
            itemFilterExclude = $('.cm-filter-section input:checkbox:not(:checked)').map(function () {
                return this.value;
            }).get(),
            itemTypeRecord = $.urlParam('recordType');

        if ( itemTypeRecord === 'buyer') {
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
            itemYachtStyle = '',
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
                    itemYear = itemValue;
                    break;
                case 'Boat style':
                    itemYachtStyle = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemYachtStyleId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemYachtStyleId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
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
                    itemStateroomsMin = Number(itemValue) + 2;
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

        var
            itemFilter = '?' + itemViewAdd + '_filters=' +
                '{"match":"and","rules":[' +
                '{"field":"field_24","operator":"higher than","value":"' + itemLengthMin + '","field_name":"Length"},' +
                '{"match":"and","field":"field_24","operator":"lower than","value":"' + itemLengthMax + '","field_name":"Length"},' +
                '{"match":"and","field":"field_22","operator":"lower than","value":"' + itemPrice + '","field_name":"Price"},' +
                '{"match":"and","field":"field_25","operator":"higher than","value":"' + itemYear + '","field_name":"Year"},' +
                '{"match":"and","field":"field_27","operator":"is","value":"' + itemYachtStyleId + '","val_label":"' + itemYachtStyle + '","field_name":"Boat style"},' +
                '{"match":"and","field":"field_28","operator":"is","value":"' + itemFuelTypeId + '","val_label":"' + itemFuelType + '","field_name":"Fuel type"},' +
                '{"match":"and","field":"field_29","operator":"lower than","value":"' + itemStateroomsMin + '","field_name":"Minimum cruising speed"},' +
                '{"match":"and","field":"field_31","operator":"higher than","value":"' + itemCruisingSpeedMin + '","field_name":"Estimated cruising speed"}' +
                ']}&' + itemViewAdd + '_page=1' +
                '&recordType=' + itemTypeRecord;

        if (sortCards !== null) {
            sortCards = '&' + itemViewAdd + '_sort=' + sortCards;
        } else {
            sortCards = '';
        }

        if (itemType === 'reload') {

            var
                itemHREF = window.location.href.split('?')[0];
            window.location.href = itemHREF + itemFilter + '&excludeData=' + excludeData + sortCards;

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
                    break;
                case 'Fuel type':
                    itemFuelType = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemFuelTypeId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemFuelTypeId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
                    break;
                case 'Minimum cruising speed':
                    itemStaterooms = Number(itemValue) + 1;
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

        var
            itemFilter = '?' + itemViewAdd + '_filters=' +
                '{"match":"and","rules":[' +
                '{"field":"field_10","operator":"lower than","value":"' + itemLengthLower + '","field_name":"Minimum boat length"},' +
                '{"match":"and","field":"field_11","operator":"higher than","value":"' + itemLengthHigher + '","field_name":"Maximum boat length"},' +
                '{"match":"and","field":"field_41","operator":"higher than","value":"' + itemBudget + '","field_name":"Budget"},' +
                '{"match":"and","field":"field_42","operator":"lower than","value":"' + itemYear + '","field_name":"Oldest model year"},' +
                '{"match":"and","field":"field_43","operator":"is","value":"' + itemYachtStyleId + '","val_label":"' + itemYachtStyle + '","field_name":"Boat style"},' +
                '{"match":"and","field":"field_17","operator":"is","value":"' + itemFuelTypeId + '","val_label":"' + itemFuelType + '","field_name":"Fuel type"},' +
                '{"match":"and","field":"field_44","operator":"lower than","value":"' + itemStaterooms + '","field_name":"Minimum Minimum cruising speed"},' +
                '{"match":"and","field":"field_46","operator":"lower than","value":"' + itemCruisingSpeed + '","field_name":"Minimum cruising speed"}' +
                ']}&' + itemViewAdd + '_page=1' +
                '&recordType=' + itemTypeRecord;

        if (sortCards !== null) {
            sortCards = '&' + itemViewAdd + '_sort=' + sortCards;
        } else {
            sortCards = '';
        }

        if (itemType === 'reload') {

            var
                itemHREF = window.location.href.split('?')[0];
            window.location.href = itemHREF + itemFilter + '&excludeData=' + excludeData + sortCards;

        } else {

            var
                itemHREF = $(this).find('td:eq(1) a').attr('href').split('?')[0];

            $(this).find('td:eq(1) a').attr('href', itemHREF + itemFilter);

        }

    });
}

