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

});
$(document).on('knack-view-render.view_48', function (event, page) {

    addCommasToNumber({
        itemField: 'field_22'
    });

});
$(document).on('knack-view-render.view_82', function (event, page) {

    addCommasToNumber({
        itemField: 'field_22'
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

    addListingFormPage();

});