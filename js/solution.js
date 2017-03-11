
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
        itemDelete = $item.find('.kn-link-delete').parent().html();

    $item.find('.view-header').append('<div class="yc-card-buyer-highlight-container">' +
        /*
            '<div class="yc-card-buyer-highlight-item">'+
            '<div class="yc-card-buyer-highlight-label">' +
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
            */
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Minimum boat length' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemMinLength +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Maximum boat length' +
        '</div>' +
        '<span class="yc-card-buyer-highlight-value">' +
        itemMaxLength +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Oldest model year' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemOldestYear +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Budget' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemBudget +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Boat style' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemBoatStyle +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Fuel type' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemFuelType +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Minimum staterooms' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemMinStaterooms +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Minimum cruising speed' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemMinCruisingSpeed +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="clear"></div>' +
        '<div class="yc-card-buyer-highlight-container yc-card-contact-info">' +
        '<div class="yc-card-buyer-highlight-item yc-card-first-col">' +
        '<div class="yc-card-buyer-highlight-label">' +
        '<div class="yc-edit-item">' +
        itemEdit +
        '</div>' +
        '<div class="yc-delete-item">' +
        itemDelete +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Name' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemName +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Phone' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemPhone +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Email' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemEmail +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Email' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemAddress +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item yc-card-note-col">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Notes' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemNotes +
        '</div>' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-item">' +
        '<div class="yc-card-buyer-highlight-label">' +
        'Date Added' +
        '</div>' +
        '<div class="yc-card-buyer-highlight-value">' +
        itemDateAdded +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="clear"></div>');

    $item.find('.kn-details-column, .yc-card-contact-info').hide();

    $item.find('.view-header h2').after('<button id="ycListingDetails">Show Buyer\'s Contact Info</button>');

    $item.find('.view-header h2').prepend('<i class="fa fa-handshake-o"></i>');

    $(document).on('click', '#ycListingDetails', function (e) {
        e.preventDefault();

        $item.find('.yc-card-contact-info').toggle();

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
            '                    <a class="kn-link-page" href="">'+
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
        /*
    '<div class="yc-card-listing-highlight-item yc-card-first-col">'+
    '<div class="yc-card-listing-highlight-label">' +
    '<h2>Listing Details</h2>' +
    '<ul class="kn-button-menu kn-grid-1">' +    
    '<li class="kn-link kn-link-1 kn-link-page">' +
    '<a href="#" id="ycListingDetails">' +
    '<span>' +
    '<i class="fa null"></i>' +
    'View Contact Info' +
    '</span>' +
    '</a>' +
    '</li>' +
    '</ul>' +

    '</div>' +
    '</div>' +
    */
/*
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Boat name' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemBoatName +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Make' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemMake +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Model' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemModel +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Length' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemLength +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Year' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemYear +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Price' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemPrice +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Boat Style' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemBoatStyle +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Fuel type' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemFuelType +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Number of staterooms' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemStaterooms +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Estimated cruising speed' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemCruisingSpeed +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="clear"></div>' +
        '<div class="yc-card-listing-highlight-container yc-card-contact-info">' +
        '<div class="yc-card-listing-highlight-item yc-card-first-col">' +
        '<div class="yc-card-listing-highlight-label">' +
        '<div class="yc-edit-item">' +
        itemEdit +
        '</div>' +
        '<div class="yc-delete-item">' +
        itemDelete +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Name' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemName +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Phone' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemPhone +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Email' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemEmail +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item yc-card-note-col">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Notes' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemNotes +
        '</div>' +
        '</div>' +
        '<div class="yc-card-listing-highlight-item">' +
        '<div class="yc-card-listing-highlight-label">' +
        'Date Added' +
        '</div>' +
        '<div class="yc-card-listing-highlight-value">' +
        itemDateAdded +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="clear"></div>');
*/
    //$item.find('.kn-details-column, .yc-listing-detail-info-hidden').hide();
    $itemCard.find('.yc-listing-detail-info-hidden').hide();

    //$item.find('.view-header h2').after('<button id="ycListingDetails">Show Seller\'s Contact Info</button>');

    //$item.find('.view-header h2').prepend('<i class="fa fa-anchor"></i>');

    $(document).on('click', '#ycListingDetails', function (e) {
        e.preventDefault();

        $itemCard.find('.yc-listing-detail-info-hidden').toggle();

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
                itemBoatName = $(this).find('.field_60 .kn-value').text();

            $(this).find('.kn-details-group').prepend('<div class="yc-card-title yc-listing">' +
                '<i class="fa fa-anchor"></i>' +
                //itemYear + ' - ' + itemMake + ' - ' + itemModel + ' - ' + itemPrice + 
                itemBoatName +
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
            '                <label for="year" class="checkbox-inline"><input type="checkbox" id="year" value="Year" checked /> <span>Year</span></label>'+
            '                <label for="price" class="checkbox-inline"><input type="checkbox" id="price" value="Price" checked /> <span>Price</span></label>'+
            '                <label for="yachtstyle" class="checkbox-inline"><input type="checkbox" id="yachtstyle" value="Boat style" checked /> <span>Boat style</span></label>'+
            '                <label for="fueltype" class="checkbox-inline"><input type="checkbox" id="fueltype" value="Fuel type" checked /> <span>Fuel type</span></label>'+
            '                <label for="staterooms" class="checkbox-inline"><input type="checkbox" id="staterooms" value="Number of staterooms" checked /> <span>Number of staterooms</span></label>'+
            '                <label for="cruisingspeed" class="checkbox-inline"><input type="checkbox" id="cruisingspeed" value="Estimated cruising speed" checked /> <span>Estimated cruising speed</span></label>'+
            '            </div>'+
            '        </div>'+
            '        <div class="col-xs-12 col-md-3 col-lg-2">'+
            '            <div class="form-group">'+
            '                <label for="filterResults"><button type="button" id="filterResults" class="btn btn-primary btn-md active">Apply Changes</button></label>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '</div>',
        itemHTMLListings = '<div class="cm-header-section">' +
            '<label><h2><i class="fa fa-anchor"></i>Potential Listings</h2></label>' +
            '<button id="ycExpandFilters">Show Filters</button>' +
            '<label for="sortCards" class="yc-sort-cards"><span>Sort: </span><select id="sortCards">' +
            '<option value="field_19|asc">Date Added (low to high)</option>' +
            '<option value="field_19|desc">Date Added (high to low)</option>' +
            '<option value="field_25|asc">Year (low to high)</option>' +
            '<option value="field_25|desc">Year (high to low)</option>' +
            '<option value="field_24|asc">Length (low to high)</option>' +
            '<option value="field_24|desc">Length (high to low)</option>' +
            '<option value="field_22|asc">Price (low to high)</option>' +
            '<option value="field_22|desc">Price (high to low)</option>' +
            '</select></label>' +
            '</div>' +
            '<div class="cm-filter-section">' +
            '<div class="cm-check-boxes">' +
            '<label class="cm-filter-title title">Change Filter Criteria: </label>' +
            '<label for="length" title="Uncheck to remove from filtering."><input type="checkbox" id="length" value="Min Length" checked /> <span>Min Length</span></label>' +
            '<label for="year"><input type="checkbox" id="year" value="Oldest model year" checked /> <span>Oldest model year</span></label>' +
            '<label for="price"><input type="checkbox" id="price" value="Budget" checked /> <span>Budget</span></label>' +
            '<label for="yachtstyle"><input type="checkbox" id="yachtstyle" value="Boat style" checked /> <span>Boat style</span></label>' +
            '<label for="fueltype"><input type="checkbox" id="fueltype" value="Fuel type" checked /> <span>Fuel type</span></label>' +
            '<label for="staterooms"><input type="checkbox" id="staterooms" value="Minimum staterooms" checked /> <span>Minimum staterooms</span></label>' +
            '<label for="cruisingspeed"><input type="checkbox" id="cruisingspeed" value="Minimum cruising speed" checked /> <span>Minimum cruising speed</span></label>' +
            '<label for="filterResults"><button type="button" id="filterResults">Apply Changes</button></label>' +
            '</div>' +
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

