/************************************************************************************************************************************************************************************
 *  JAVASCRIPT LIBRARIES
 ************************************************************************************************************************************************************************************/

LazyLoad.js(['https://code.jquery.com/jquery-1.12.4.min.js'], function () {
    console.log('Loaded external files!');
});
LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery-footable/3.1.4/footable.js'], function () {
    console.log('Loaded external files!');
});

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
 *  BUYERS
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
            itemFields: ['Budget', 'Boat Min Length', 'Boat Max Length', 'Min Year', 'Yacht Style', 'Fuel Type', 'Min Staterooms', 'Min Heads', 'Min Cruising Speed']
        });
    }

    fixCardTDTitleLayout({
        itemView: 'view_14',
        itemTRLevel: '1'
    });

});

$(document).on('knack-view-render.view_66', function (event, page) {

    addResultFilters({
        itemView: 'view_14',
        itemViewAdd: 'view_66',
        itemViewShow: 'view_66 .view-header',
        itemTypeView: 'list3s',
        itemTypeRecord: 'listing',
        itemFields: ['Budget', 'Boat Min Length', 'Boat Max Length', 'Min Year', 'Yacht Style', 'Fuel Type', 'Min Staterooms', 'Min Heads', 'Min Cruising Speed']
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

/************************************************************************************************************************************************************************************
 *  listing
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
            itemFields: ['Price', 'Length', 'Year', 'Yacht Style', 'Fuel Type', 'Staterooms', 'Heads', 'Cruising Speed']
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
        itemFields: ['Price', 'Length', 'Year', 'Yacht Style', 'Fuel Type', 'Staterooms', 'Heads', 'Cruising Speed']
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

    $('#view_35').find('.view-header').append('<div class="yc-card-listing-highlight-container">' + 
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
        'Staterooms' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemStaterooms +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">'+
        '<div class="yc-card-listing-highlight-label">' +
        'Cruising Speed' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemCruisingSpeed +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="clear"></div>');

        $('#view_35').find('.kn-details-column').hide();

        $(document).on('click','#ycListingDetails',function(e){
            e.preventDefault();

            $('#view_35').find('.kn-details-column').toggle();

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
                itemPrice = $(this).find('.field_22 .kn-value').text();

            $(this).find('.kn-details-group').prepend('<div class="yc-card-title yc-listing"><i class="fa fa-anchor"></i>' + itemYear + ' - ' + itemMake + ' - ' + itemModel + ' - ' + itemPrice + '</div>');

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
            '</div>' +
            '<div class="yc-card-note">' +
            itemNotes +
            '</div>');

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
            '<label for="yachtstyle"><input type="checkbox" id="yachtstyle" value="Yacht Style" checked /> <span>Yacht Style</span></label>' +
            '<label for="fueltype"><input type="checkbox" id="fueltype" value="Fuel Type" checked /> <span>Fuel Type</span></label>' +
            '<label for="heads"><input type="checkbox" id="heads" value="Heads" checked /> <span>Heads</span></label>' +
            '<label for="staterooms"><input type="checkbox" id="staterooms" value="Staterooms" checked /> <span>Staterooms</span></label>' +
            '<label for="cruisingspeed"><input type="checkbox" id="cruisingspeed" value="Cruising Speed" checked /> <span>Cruising Speed</span></label>' +
            '<label for="filterResults"><button type="button" id="filterResults">Apply Changes</button></label>' +
            '<label for="sortCards" class="yc-sort-cards"><span>Sort: </span><select id="sortCards">' +
            '<option value="field_54|asc">Date Added (low to high)</option>' +
            '<option value="field_54|desc">Date Added (high to low)</option>' +
            '<option value="field_42|asc">Min Year (low to high)</option>' +
            '<option value="field_42|desc">Min Year (high to low)</option>' +
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
        '<label for="year"><input type="checkbox" id="year" value="Min Year" checked /> <span>Min Year</span></label>' +
        '<label for="price"><input type="checkbox" id="price" value="Budget" checked /> <span>Budget</span></label>' +
        '<label for="yachtstyle"><input type="checkbox" id="yachtstyle" value="Yacht Style" checked /> <span>Yacht Style</span></label>' +
        '<label for="fueltype"><input type="checkbox" id="fueltype" value="Fuel Type" checked /> <span>Fuel Type</span></label>' +
        '<label for="heads"><input type="checkbox" id="heads" value="Min Heads" checked /> <span>Min Heads</span></label>' +
        '<label for="staterooms"><input type="checkbox" id="staterooms" value="Min Staterooms" checked /> <span>Min Staterooms</span></label>' +
        '<label for="cruisingspeed"><input type="checkbox" id="cruisingspeed" value="Min Cruising Speed" checked /> <span>Min Cruising Speed</span></label>' +
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
                itemFields = ['Price', 'Length', 'Year', 'Yacht Style', 'Fuel Type', 'Staterooms', 'Heads', 'Cruising Speed']
        } else {
            var
                itemFields = ['Budget', 'Boat Min Length', 'Boat Max Length', 'Min Year', 'Yacht Style', 'Fuel Type', 'Min Staterooms', 'Min Heads', 'Min Cruising Speed']
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
            itemFields: ['Price', 'Length', 'Year', 'Yacht Style', 'Fuel Type', 'Staterooms', 'Heads', 'Cruising Speed']
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
        itemFields = ['Price', 'Length', 'Year', 'Yacht Style', 'Fuel Type', 'Staterooms', 'Heads', 'Cruising Speed'],
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
        itemFields = ['Budget', 'Boat Min Length', 'Boat Max Length', 'Min Year', 'Yacht Style', 'Fuel Type', 'Min Staterooms', 'Min Heads', 'Min Cruising Speed'],
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
            itemHeadsMin = '',
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
                case 'Boat Min Length':
                    itemLengthMin = Number(itemValue) - 1;
                    break;
                case 'Boat Max Length':
                    itemLengthMax = Number(itemValue) + 1;
                    break;
                case 'Min Year':
                    itemYear = itemValue;
                    break;
                case 'Yacht Style':
                    itemYachtStyle = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemYachtStyleId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemYachtStyleId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
                    break;
                case 'Fuel Type':
                    itemFuelType = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemFuelTypeId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemFuelTypeId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
                    break;
                case 'Min Staterooms':
                    itemStateroomsMin = Number(itemValue) + 2;
                    break;
                case 'Min Heads':
                    itemHeadsMin = Number(itemValue) + 2;
                    break;
                case 'Min Cruising Speed':
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
                case 'Min Year':
                    itemYear = '';
                    break;
                case 'Yacht Style':
                    itemYachtStyle = '';
                    itemYachtStyleId = '';
                    break;
                case 'Fuel Type':
                    itemFuelType = '';
                    itemFuelTypeId = '';
                    break;
                case 'Staterooms':
                case 'Min Staterooms':
                    itemStateroomsMin = '';
                    break;
                case 'Heads':
                case 'Min Heads':
                    itemHeadsMin = '';
                    break;
                case 'Cruising Speed':
                case 'Min Cruising Speed':
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
                '{"match":"and","field":"field_27","operator":"is","value":"' + itemYachtStyleId + '","val_label":"' + itemYachtStyle + '","field_name":"Yacht Style"},' +
                '{"match":"and","field":"field_28","operator":"is","value":"' + itemFuelTypeId + '","val_label":"' + itemFuelType + '","field_name":"Fuel Type"},' +
                '{"match":"and","field":"field_29","operator":"lower than","value":"' + itemStateroomsMin + '","field_name":"Staterooms"},' +
                '{"match":"and","field":"field_30","operator":"lower than","value":"' + itemHeadsMin + '","field_name":"Heads"},' +
                '{"match":"and","field":"field_31","operator":"higher than","value":"' + itemCruisingSpeedMin + '","field_name":"Cruising Speed"}' +
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
            itemHeads = '',
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
                case 'Yacht Style':
                    itemYachtStyle = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemYachtStyleId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemYachtStyleId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
                    break;
                case 'Fuel Type':
                    itemFuelType = itemValue;
                    if (itemTypeView === 'list3s') {
                        itemFuelTypeId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    } else {
                        itemFuelTypeId = $(this).find('.' + itemId + ' > span > span').attr('class');
                    }
                    break;
                case 'Staterooms':
                    itemStaterooms = Number(itemValue) + 1;
                    break;
                case 'Heads':
                    itemHeads = Number(itemValue) + 1;
                    break;
                case 'Cruising Speed':
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
                case 'Min Year':
                    itemYear = '';
                    break;
                case 'Yacht Style':
                    itemYachtStyle = '';
                    itemYachtStyleId = '';
                    break;
                case 'Fuel Type':
                    itemFuelType = '';
                    itemFuelTypeId = '';
                    break;
                case 'Staterooms':
                case 'Min Staterooms':
                    itemStaterooms = '';
                    break;
                case 'Heads':
                case 'Min Heads':
                    itemHeads = '';
                    break;
                case 'Cruising Speed':
                case 'Min Cruising Speed':
                    itemCruisingSpeed = '';
                    break;
            }
        }

        var
            itemFilter = '?' + itemViewAdd + '_filters=' +
                '{"match":"and","rules":[' +
                '{"field":"field_10","operator":"lower than","value":"' + itemLengthLower + '","field_name":"Boat Min Length"},' +
                '{"match":"and","field":"field_11","operator":"higher than","value":"' + itemLengthHigher + '","field_name":"Boat Max Length"},' +
                '{"match":"and","field":"field_41","operator":"higher than","value":"' + itemBudget + '","field_name":"Budget"},' +
                '{"match":"and","field":"field_42","operator":"lower than","value":"' + itemYear + '","field_name":"Min Year"},' +
                '{"match":"and","field":"field_43","operator":"is","value":"' + itemYachtStyleId + '","val_label":"' + itemYachtStyle + '","field_name":"Yacht Style"},' +
                '{"match":"and","field":"field_17","operator":"is","value":"' + itemFuelTypeId + '","val_label":"' + itemFuelType + '","field_name":"Fuel Type"},' +
                '{"match":"and","field":"field_44","operator":"lower than","value":"' + itemStaterooms + '","field_name":"Min Staterooms"},' +
                '{"match":"and","field":"field_45","operator":"lower than","value":"' + itemHeads + '","field_name":"Min Heads"},' +
                '{"match":"and","field":"field_46","operator":"lower than","value":"' + itemCruisingSpeed + '","field_name":"Min Cruising Speed"}' +
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

