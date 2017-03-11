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