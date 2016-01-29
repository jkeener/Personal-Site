$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'skills', 'contact'],
        onLeave: function (index, nextIndex, direction) {
            var leavingSection = $(this);

            //after leaving section 2
            if (index === 1 && nextIndex === 2) {
                skillsAnimate();
                $(".main-nav-heading").velocity("transition.flipYIn").text("sKILLS");
            } else if (index === 1 && nextIndex === 3) {
                $(".main-nav-heading").velocity("transition.flipYIn").text("cONTACT");
            } else if (index === 2 && nextIndex === 1) {
                $(".main-nav-heading").velocity("transition.flipYIn").text("jKEENER");
            } else if (index === 2 && nextIndex === 3) {
                $(".main-nav-heading").velocity("transition.flipYIn").text("cONTACT");
            } else if (index === 3 && nextIndex === 1) {
                $(".main-nav-heading").velocity("transition.flipYIn").text("jKEENER");
            } else if (index === 3 && nextIndex === 2) {
                skillsAnimate();
                $(".main-nav-heading").velocity("transition.flipYIn").text("sKILLS");
            }
        }
    });
    $(".small-nav-heading").click(function () {
        $(".small-nav-heading").velocity("transition.flipYOut", {
            duration: 300
        });
        $(".small-nav-options").velocity("transition.flipYIn", {
            duration: 200,
            delay: 300
        });
    });
    $(".small-nav-options").click(function () {
        $(".small-nav-options").velocity("transition.flipYOut", {
            duration: 300
        });
        $(".small-nav-heading").velocity("transition.flipYIn", {
            duration: 200,
            delay: 500
        });
    });

    function skillsAnimate() {


        $('.squiggle').velocity({
            'stroke-dashoffset': 0
        }, {
            duration: 4000,
            delay: 0
        });
        $(".squiggle-triangles").velocity({
            opacity: 1
        }, {
            delay: 4000
        });
    }
});
