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