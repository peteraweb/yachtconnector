function addTitleToIcons(options) {

    var
        $item = $.extend({
            itemTextEdit: 'Edit Listing',
            itemTextDelete: 'Delete Listing'
        }, options),
        item;

    $('.fa-pencil').each(function () {
        $(this).attr('title', $item.itemTextEdit);
    });
    $('.fa-times').each(function () {
        $(this).attr('title', $item.itemTextDelete);
    });
}

function addFeedBackButton() {

    if ($('#feedBack').length === 0) {

        var
            itemHTML = '<div id="feedBack" style="display: block;">' +
                '    <a href="#">' +
                '        <img src="http://ca.gov/images/template2014/clear.gif" title="Provide Feedback" alt="Provide Feedback">' +
                '    </a>' +
                '</div>' +
                '<div id="feedBackModal" class="modal">' +
                '    <!-- Modal content -->' +
                '    <div class="modal-content">' +
                '        <div class="modal-header" style="height: 40px;">' +
                '            <span class="modal-close">' +
                '                <div >×</div>' +
                '            </span>' +
                '            <p class="modal-header-text"> </p>' +
                '        </div>' +
                '        <div class="modal-body" style="overflow: hidden;">' +
                '            <iframe src="" id="feedBackForm" scrolling="no" width="100%" height="675" frameborder="0"></iframe>' +
                '        </div>' +
                '        <div>' +
                '            <br style="clear: both;">' +
                '        </div>' +
                '    </div>' +
                '</div>';

        $('#kn-app-menu').after(itemHTML);

        var feedBackButton = document.getElementById("feedBack");
        feedBackButton.style.display = "block";

        // Get the &lt;span&gt; element that closes the modal
        var closeButton = document.getElementsByClassName("modal-close")[0];

        $('#feedBack a').on('click', function (e) {

            e.preventDefault();

            var surveyToOpen = "https://www.surveymonkey.com/r/CDBXFNH";

            var viewportWidth = $(window).width();

            if (viewportWidth >= 992) {

                var modal = document.getElementById('feedBackModal');
                var feedBackIframe = document.getElementById('feedBackForm');
                feedBackIframe.src = surveyToOpen;
                modal.style.display = "block";
            }
            else {
                window.open(surveyToOpen);
            }
        });

        $('.modal-close').on('click', function () {
            var modal = document.getElementById('feedBackModal');
            modal.style.display = "none";
            document.getElementById('feedBackForm').src = "";
        });

    }
}

