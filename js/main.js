const header = $("#header");
const gnbLI = $("#gnb .list > li");
const circle = $("#gnb .circle");
const before = $("mainVisual .txtBox strong:after");
console.log("before", before);
gnbLI.on("mouseenter", function () {
    // console.log($(this).offset().left, "====", $(this).offset().top);
    const tx = $(this).offset().left + $(this).width() / 2;
    header.addClass("on");
    gsap.to(circle, { left: tx, ease: "power4" });
});
header.on("mouseleave", function () {
    header.removeClass("on");
});

////////////////////////////////////////////fullpage//////////////////////////////////////////////
Splitting();
$("#main").fullpage({
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["WHO AM I", "BUSINESS", "PORTFOLIO", "COMMUNITY", "ADDRESS"],
    showActiveTooltip: true,
    onLeave: function (origin, destination, direction) {
        const leavingSection = this;
        const target = destination.index;
        switch (target) {
            case 0:
                mainVisualTL.play();
                // mainVisualTL.restart();
                break;
            case 1:
                businessTL.play();
                // businessTL.restart();
                break;
            case 2:
                portfolioTL.play();
                // businessTL.restart();
                break;
            case 3:
                $("#fp-nav").removeClass("last");
                break;
            case 4:
                $("#fp-nav").addClass("last");
                break;
        }
    },
});
gsap.defaults({ ease: "power4", duration: 1 });
//css에 썼던 #mainVisual .txtBox strong:after 그대로 작성해야함
const mainVisualLine = CSSRulePlugin.getRule("#mainVisual .txtBox strong:after");
let mainVisualTL = gsap.timeline();
mainVisualTL
    .from("#mainVisual .txtBox h2 .char", { opacity: 0, x: "=+100", stagger: 0.05 })
    .from("#mainVisual .txtBox p .char", { opacity: 0, x: "=+100", stagger: 0.05 })
    .from(mainVisualLine, { cssRule: { scaleX: 0 } });

const businessLine = CSSRulePlugin.getRule("#business .txtBox strong:after");
const businessTL = gsap.timeline({ paused: true });
businessTL
    .from("#business .txtBox h2 .char", { opacity: 0, x: "=+100", stagger: 0.05 })
    .from("#business .txtBox p .char", { opacity: 0, x: "=+100", stagger: 0.05 })
    .from(businessLine, { cssRule: { scaleX: 0 } })
    .from("#business .iconBox li", { opacity: 0, x: "=+100", stagger: 0.1 });

const portfolioLine = CSSRulePlugin.getRule("#portfolio .txtBox strong:after");
const portfolioTL = gsap.timeline({ paused: true });
portfolioTL
    .from("#portfolio .txtBox h2 .char", { opacity: 0, x: "=+100", stagger: 0.05 })
    .from("#portfolio .txtBox p .char", { opacity: 0, x: "=+100", stagger: 0.05 })
    .from(portfolioLine, { cssRule: { scaleX: 0 } })
    .from("#portfolio .txtBox a", { scaleX: 0 })
    .from("#portfolio .iconBox li", { opacity: 0, x: "=+100", stagger: 0.1 });
