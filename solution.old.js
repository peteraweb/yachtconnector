// OLD

/*
$(document).on('knack-view-render.view_64', function (event, page) {

    console.log('view 64 loaded');



}); 
*/

/*
$(document).on('knack-view-render.view_60', function (event, page) {

    console.log('view 60 loaded');

    addCardClass({
        itemView: 'view_60',
        itemClassAddEven: 'yc-card-even',
        itemClassAddOdd: 'yc-card-odd'
    });

});

$(document).on('knack-view-render.view_61', function (event, page) {

    console.log('view 61 loaded');

    addCardClass({
        itemView: 'view_61',
        itemClassAddEven: 'yc-card-even',
        itemClassAddOdd: 'yc-card-odd'
    });

});
*/
/*
$(document).on('knack-view-render.view_64', function (event, page) {

    console.log('view 64 loaded');

    addCardClass({
        itemView: 'view_64',
        itemClassAddEven: 'yc-card-even',
        itemClassAddOdd: 'yc-card-odd'
    });

    changeListingDetailLinkList({
        itemView: 'view_64',
        itemViewAdd: 'view_61'  // view_61  view_56


});
*/


// Create a link to show related Buyers 
function changeListingDetailLinkList(options) {

    var
        $item = $.extend({
            itemView: '',
            itemViewAdd: ''
        }, options),
        itemFields = ['Price', 'Length', 'Year', 'Yacht Style', 'Fuel Type', 'Staterooms', 'Heads', 'Cruising Speed'],
        itemFieldsData = [];

    $('#' + $item.itemView + ' .kn-details-group-column:eq(1) table tbody tr').each(function () {

        var $item = $(this),
            itemText = $item.find('th').text().trim(),
            itemClass = $item.attr('class');


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

    $('#' + $item.itemView + ' .kn-details-group-column:odd').addClass('ym-listing-data');
    $('#' + $item.itemView + ' .kn-details-group.column-1:even').addClass('ym-buyers-link');

    $('#' + $item.itemView + ' .kn-list-item').each(function () {

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
            itemCruisingSpeed = '';

        for (i = 0; i < itemFieldsData.length; i++) {

            console.log('show data');
            console.log(itemFieldsData[i]);
            console.log(itemFieldsData[i].name);

            var
                itemData = itemFieldsData[i],
                itemName = itemData.name,
                itemId = itemData.fieldId,
                itemValue = $(this).find('.' + itemId + ' .kn-value').text().trim();

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
                    itemYear = itemValue;
                    break;
                case 'Yacht Style':
                    itemYachtStyle = itemValue;
                    itemYachtStyleId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    break;
                case 'Fuel Type':
                    itemFuelType = itemValue;
                    itemFuelTypeId = $(this).find('.' + itemId + ' .kn-value > span > span').attr('class');
                    break;
                case 'Staterooms':
                    itemStaterooms = Number(itemValue) + 1;
                    break;
                case 'Heads':
                    itemHeads = Number(itemValue) + 1;
                    break;
                case 'Cruising Speed':
                    itemCruisingSpeed = Number(itemValue) - 4;
                    break;

            }

        }

        var
            itemFilter = '?' + $item.itemViewAdd + '_filters=' +
                '{"match":"and","rules":[' +
                '{"field":"field_10","operator":"lower than","value":"' + itemLengthLower + '","field_name":"Boat Min Length"},' +
                '{"match":"and","field":"field_11","operator":"higher than","value":"' + itemLengthHigher + '","field_name":"Boat Max Length"},' +
                '{"match":"and","field":"field_41","operator":"higher than","value":"' + itemBudget + '","field_name":"Budget"},' +
                '{"match":"and","field":"field_42","operator":"lower than","value":"' + itemYear + '","field_name":"Min Year"},' +
                '{"match":"and","field":"field_43","operator":"is","value":"' + itemYachtStyleId + '","val_label":"' + itemYachtStyle + '","field_name":"Yacht Style"},' +
                '{"match":"and","field":"field_17","operator":"is","value":"' + itemFuelTypeId + '","val_label":"' + itemFuelType + '","field_name":"Fuel Type"},' +
                '{"match":"and","field":"field_44","operator":"lower than","value":"' + itemStaterooms + '","field_name":"Min Staterooms"},' +
                '{"match":"and","field":"field_45","operator":"lower than","value":"' + itemHeads + '","field_name":"Min Heads"},' +
                '{"match":"and","field":"field_46","operator":"higher than","value":"' + itemCruisingSpeed + '","field_name":"Min Cruising Speed"}' +
                ']}&' + $item.itemViewAdd + '_page=1',
            itemHREF = $(this).find('.ym-buyers-link tr:eq(1) a').attr('href').split('?')[0];

        $(this).find('.ym-buyers-link tr:eq(1) a').attr('href', itemHREF + itemFilter);


    });

}

