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