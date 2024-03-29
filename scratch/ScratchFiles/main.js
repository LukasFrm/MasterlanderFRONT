console.log("Main.js accessed")
function App(t) {
  var e = {
    isQuestion: !0,
    isLoading: !1,
    step: 1,
    attrStep: "data-step",
    animationTime: 200,
    selectGift: !1,
    curentGift: null,
    attemptCont: 3,
    clonedShape: $(".gift").clone(),
    isWin: !1
  };
  function n() {
    !(function(t, e) {
      var n;
      (t = t || 40), (e = e || function() {});
      var i = 0;
      n = setInterval(function() {
        e((i += 1)), i >= 100 && clearInterval(n);
      }, t);
    })(30, function(t) {
      var n;
      (n = t),
        $(".loading__bar-line").css("width", n + "%"),
        $(".loading__perc").text(n + "%"),
        (function(t) {
          var e = $(".loading__action"),
            n = function(t) {
              e.hide(), e.eq(t).show();
            },
            i = function(t) {
              $(".loading__check")
                .eq(t)
                .attr("data-status", "ok");
            };
          switch (t) {
            case 18:
              return i(0), n(1);
            case 46:
              return i(1), n(2);
            case 100:
              return i(2), n(3);
            default:
          }
        })(t),
        t >= 100 && ((e.step = 3), o(e.step));
    });
  }
  function i() {
    var t = e.attemptCont,
      n = e.clonedShape.clone();
    1 === t &&
      Math.random() < 0.55 &&
      (n.find(".gift__before").addClass("phone"), (e.isWin = !0)),
      2 === t && (n.find(".gift__before").addClass("phone"), (e.isWin = !0)),
      $(".gift").replaceWith(n),
      $(".attempt__num").text(e.attemptCont);
    var i = $(".gift");
    a(), i.fadeIn(1e3);
  }
  function a() {
    var t = $(".gift__shape"),
      n = e.isWin ? 24 : 10;
    t.eraser({
      size: 10,
      progressFunction: function(t) {
        var a;
        Math.round(100 * t) > n &&
          ((a = $(".gift__shape")).eraser("disable"),
          (e.attemptCont -= 1),
          a.animate({ opacity: 0 }, 600, function() {
            setTimeout(function() {
              e.isWin
                ? ($(".attempt").hide(),
                  $(".gifts__title").hide(),
                  $(".gifts__title-result")
                    .removeClass("hide")
                    .show(),
                  $(".gifts__result").removeClass("hide"))
                : $(".gift").fadeOut(1e3, i);
            }, 1e3);
          }));
      }
    });
  }
  function o(t) {
    var i = $("[" + e.attrStep + "]");
    i.hide(),
      i.eq(t - 1).show(),
      2 === e.step && (n(), $(".contestwrap").hide()),
      3 === e.step && a();
  }
  function s() {
    $(".answer").on("click", function() {
      var t, n, i;
      (t = $(this)),
        (n = t.closest(".question")),
        (i = n.next()).length || (e.isQuestion = !1),
        e.isQuestion
          ? n.fadeOut(e.animationTime, function() {
              i.fadeIn(e.animationTime);
            })
          : ((e.isLoading = !0), (e.step = 2), o(e.step));
    });
  }
  s(),
    $(".question").each(function(t) {
      $(this)
        .find(".question__num")
        .text(t + 1);
    }),
    $("body").one("mousedown touchstart", ".gift__images", function() {
      $(".attempt__num").text(e.attemptCont), $(this).find(".gift__before");
    }),
    $(".close").on("click", function() {
      $(".modal").removeClass("active");
    });
}
$(function() {
  new App();
});


console.log("Browser has ran through Main.js ")


