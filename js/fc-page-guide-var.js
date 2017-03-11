
function pageGuideTutorial() {

    var
        pageURL = window.location.href,
        showGuide = 0,
        homePagePage = '/yachtbroker#home/',
        homePage = '<ul id="tlyPageGuide">' +
            '  <li class="tlypageguide_right" data-tourtarget=".yc-home-client-title h1">' +
            '    <div>' +
            '      Welcome to your home screen dashboard. It is divided into two main sections - Buyers and Listings.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-buyers-help-active">' +
            '    <div>' +
            '      This box shows you how many active Buyers you have entered into the system and gives you the opportunity to add another Buyer.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-buyers-help-connections">' +
            '    <div>' +
            '      In Yacht Connector, we call call any matches between your Buyers and your Listings, or other Buyers and your Listings, or multiple combinations thereof, "Connections". This box shows you how many Connections you have between your Buyers and your Listings and how many Connections you have between your Buyers and other Broker\'s Listings or Co-Op Connections. You can also view your list of existing buyers.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-listings-help-active">' +
            '    <div>' +
            '      This box shows you how many active Listings you have entered into the system and gives you the opportunity to add another Listing.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_bottom" data-tourtarget=".yc-home-listings-help-connections">' +
            '    <div>' +
            '      We call the matches between your Listings and your Buyers or another Broker\'s Buyers "Connections". This box shows you how many Connections you have between your Listings and your Buyers and between your Listings and other Broker\'s Buyers or Co-Op Connections. You can also view your list of existing Listings.' +
            '    </div>' +
            '  </li>' +
            '</ul>';
        listingDetailsPage = '/yachtbroker#listings/listing-details/',
        listingDetails = '<ul id="tlyPageGuide">' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycListingDetails">' +
            '    <div>' +
            '      Here is the first item description. The number will appear to the left of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycExpandFilters">' +
            '    <div>' +
            '      Here is the second item description. The number will appear to the right of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_left" data-tourtarget=".kn-list-item">' +
            '    <div>' +
            '      Here is the third item description. The number will appear above the element.' +
            '    </div>' +
            '  </li>' +
            '</ul>',
        buyerDetailsPage = '/yachtbroker#buyers/buyer-details/',
        buyerDetails = '<ul id="tlyPageGuide">' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycListingDetails">' +
            '    <div>' +
            '      Here is the first item description. The number will appear to the left of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_right" data-tourtarget="#ycExpandFilters">' +
            '    <div>' +
            '      Here is the second item description. The number will appear to the right of the element.' +
            '    </div>' +
            '  </li>' +
            '  <li class="tlypageguide_left" data-tourtarget=".kn-list-item">' +
            '    <div>' +
            '      Here is the third item description. The number will appear above the element.' +
            '    </div>' +
            '  </li>' +
            '</ul>';

        $('#tlyPageGuideWrapper').remove();

        // Home Page
        if ( pageURL.indexOf(homePagePage) > -1 ) {
            $('body').append(homePage);
            showGuide = 1;
            console.log('showGuide');
        }

        // Listings Details
        if ( pageURL.indexOf(listingDetailsPage) > -1 ) {
            $('body').append(listingDetails);
            showGuide = 1;
            console.log('showGuide');
        }

        // Buyers Details
        if ( pageURL.indexOf(buyerDetailsPage) > -1 ) {
            $('body').append(buyerDetails);
            showGuide = 1;
            console.log('showGuide');
        }

        if ( showGuide === 1 ) {
            tl.pg.init({ 
                pg_caption: 'Page Help',
                auto_refresh: true
            });
        }

}
