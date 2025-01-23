import { useEffect } from "react";

import { S as e, N as t } from "./sw2";
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const document = dom.window.document;
useEffect(() => {
  // DOM manipulation here


!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const r of e)
        if ("childList" === r.type)
          for (const e of r.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        "use-credentials" === e.crossorigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossorigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})(),
  "undefined" != typeof window &&
    window.SwiperElementRegisterParams &&
    window.SwiperElementRegisterParams(["slicerEffect"]);
new e(".swiper", {
  modules: [
    t,
    function ({ swiper: e, extendParams: t, on: r, emit: s }) {
      t({ slicerEffect: { split: 5 } });
      let i = !1;
      const n = () => {
          e.slides.forEach((t) => {
            if (t.querySelector(".swiper-slicer-image-clones")) return;
            const r = t.querySelector(".swiper-slicer-image");
            if (!r) return;
            const s = r.nextElementSibling,
              i = document.createElement("div");
            i.classList.add("swiper-slicer-image-clones");
            for (let n = 0; n < e.params.slicerEffect.split; n += 1) {
              const e = document.createElement("div");
              e.classList.add("swiper-slicer-image-clone"),
                e.appendChild(r.cloneNode()),
                i.appendChild(e);
            }
            s ? r.parentNode.insertBefore(i, s) : r.parentNode.appendChild(i);
          });
        },
        a = () => {
          e.slides.forEach((t) =>
            t.querySelectorAll(".swiper-slicer-image").forEach((t) => {
              (t.style.width = `${e.width}px`),
                (t.style.height = `${e.height}px`);
            })
          ),
            e.slides.forEach((t) => {
              t.querySelectorAll(".swiper-slicer-image-clone").forEach(
                (t, r) => {
                  const s = t.querySelector(".swiper-slicer-image");
                  "horizontal" === e.params.direction
                    ? ((t.style.height =
                        100 / e.params.slicerEffect.split + "%"),
                      (t.style.top =
                        (100 / e.params.slicerEffect.split) * r + "%"),
                      (s.style.top = `-${100 * r}%`))
                    : ((t.style.width =
                        100 / e.params.slicerEffect.split + "%"),
                      (t.style.left =
                        (100 / e.params.slicerEffect.split) * r + "%"),
                      (s.style.left = `-${100 * r}%`));
                }
              );
            });
        },
        l = (t) => {
          e.slides.forEach((r) => {
            const s = r.querySelectorAll(".swiper-slicer-image-clone"),
              n = r.querySelector(".swiper-slide-content");
            n && (n.style.transitionDuration = `${t}ms`),
              s.forEach((r, n) => {
                0 === t
                  ? ((r.style.transitionTimingFunction = "ease-out"),
                    (r.style.transitionDuration = i
                      ? "0ms"
                      : `${
                          e.params.speed +
                          (e.params.speed / (s.length - 1)) * (s.length - n - 1)
                        }ms`))
                  : ((r.style.transitionTimingFunction = ""),
                    (r.style.transitionDuration = `${
                      t + (t / (s.length - 1)) * (s.length - n - 1)
                    }ms`));
              });
          }),
            (function ({ duration: t }) {
              const { slides: r, activeIndex: s } = e,
                i = e.virtual && e.params.virtual.enabled;
              if (0 !== t) {
                let t = !1;
                const n = (
                  i
                    ? r.find(
                        (e) =>
                          parseInt(
                            e.getAttribute("data-swiper-slide-index"),
                            10
                          ) === s
                      )
                    : r[s]
                ).querySelector(".swiper-slicer-image-clone:nth-child(1)");
                if (!n) return;
                const a = (r) => {
                  if (r.target !== n) return;
                  if ((n.removeEventListener("transitionend", a), t)) return;
                  if (!e || e.destroyed) return;
                  (t = !0), (e.animating = !1);
                  const s = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                  });
                  e.wrapperEl.dispatchEvent(s);
                };
                n.addEventListener("transitionend", a);
              }
            })({ duration: t });
        };
      r("slideChange", () => {
        e.virtual &&
          e.params.virtual &&
          e.params.virtual.enabled &&
          requestAnimationFrame(() => {
            n(), a();
          });
      }),
        r("beforeLoopFix", () => {
          i = !0;
        }),
        r("loopFix", () => {
          i = !1;
        }),
        r("setTranslate", () => {
          "slicer" === e.params.effect &&
            (() => {
              const t = "vertical" === e.params.direction ? "Y" : "X",
                r = e.virtual && e.params.virtual.enabled;
              e.slides.forEach((s, i) => {
                r &&
                  (i = parseInt(s.getAttribute("data-swiper-slide-index"), 10)),
                  (s.style.transform = `translate${t}(-${100 * i}%)`);
                const n = s.progress,
                  a = s.querySelector(".swiper-slide-content");
                a &&
                  (a.style.transform = `translate${t}(${e.size * -n * 1.2}px)`),
                  s
                    .querySelectorAll(".swiper-slicer-image-clone")
                    .forEach((e) => {
                      const r = -n;
                      e.style.transform = `translate${t}(${100 * r}%)`;
                    });
              });
            })();
        }),
        r("setTransition", (t, r) => {
          "slicer" === e.params.effect && l(r);
        }),
        r("slidesLengthChange", () => {
          n(), a();
        }),
        r("beforeInit", () => {
          if ("slicer" !== e.params.effect) return;
          e.classNames.push("swiper-slicer");
          const t = {
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0,
          };
          Object.assign(e.params, t), Object.assign(e.originalParams, t);
        }),
        r("init", () => {
          "slicer" === e.params.effect &&
            (n(), s("setTranslate", e, e.translate));
        }),
        r("resize init", () => {
          "slicer" === e.params.effect && a();
        });
    },
  ],
  effect: "slicer",
  slicerEffect: { split: 5 },
  direction: "vertical",
  speed: 600,
  grabCursor: !0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

}, []);