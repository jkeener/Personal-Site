$(document).ready(function () {
    /// init fullpage ///
            $('#fullpage').fullpage({
                anchors: ['home', 'skills', 'contact'],
                onLeave: function (index, nextIndex, direction) {
                    var leavingSection = $(this);

                    /// this is controlling the animations for the top nav on page switch ///
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
    
            /// animations for the page names ///
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
            
            /// set the css of the dasharray and dashoffest of lines on the skills page (since both images have diffrent line lengths) ///
            $(".squiggle").each(function () {
                        var length = this.getTotalLength();
                        $(this).css({
                            "stroke-dasharray": length,
                            "stroke-dashoffset": length
                        });
                    });
    
            /// line animation function ///
            function skillsAnimate() {
                $(function () {
                    $(".squiggle").velocity({
                        'stroke-dashoffset': 0
                    }, {
                        duration: 3000,
                        delay: 300,
                        easing: "easeOutSine",
                        complete: function () {
                            /// fade the triangles in after the line animation is done ///
                            console.log("done");
                            $(".squiggle-triangles").velocity({
                                'opacity': '1'
                            }, {
                                duration: 500
                            });
                        }
                    });
                });
            }
            });