function addListingFormPage(){
    var itemHTML = '<div class="container-flex">'+
        '    <div class="row yc-listing-add-title-section">'+
        '        <div class="col-xs-12">'+
        '            <h3 class="text-uppercase yc-listing-add-page-title">'+
        '                Listing Specifications'+
        '            </h3>'+
        '        </div>'+
        '    </div>'+
        '</div>';
	
        $('.view_89').prepend(itemHTML);
        $('.view_89 form').addClass('row yc-add-listing-form');
        $('.view_89 .kn-submit [type="submit"]').addClass('btn btn-primary btn-md active');
}