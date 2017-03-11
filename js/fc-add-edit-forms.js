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