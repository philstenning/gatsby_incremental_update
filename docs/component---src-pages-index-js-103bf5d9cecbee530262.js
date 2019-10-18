;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    150: function(e, t, n) {
      "use strict"
      n.r(t)
      var r = n(0),
        a = n(63),
        o = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = Object(a.a)(function(e) {
          return (
            o.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          )
        }),
        s = n(60),
        l = n.n(s),
        c = n(9),
        d = n(20),
        u = n(15),
        p = i,
        m = function(e) {
          return "theme" !== e && "innerRef" !== e
        },
        f = function(e) {
          return "string" == typeof e && e.charCodeAt(0) > 96 ? p : m
        },
        h = function e(t, n) {
          var a, o, i
          void 0 !== n &&
            ((a = n.label),
            (i = n.target),
            (o =
              t.__emotion_forwardProp && n.shouldForwardProp
                ? function(e) {
                    return t.__emotion_forwardProp(e) && n.shouldForwardProp(e)
                  }
                : n.shouldForwardProp))
          var s = t.__emotion_real === t,
            p = (s && t.__emotion_base) || t
          "function" != typeof o && s && (o = t.__emotion_forwardProp)
          var m = o || f(p),
            h = !m("as")
          return function() {
            var g = arguments,
              y =
                s && void 0 !== t.__emotion_styles
                  ? t.__emotion_styles.slice(0)
                  : []
            if (
              (void 0 !== a && y.push("label:" + a + ";"),
              null == g[0] || void 0 === g[0].raw)
            )
              y.push.apply(y, g)
            else {
              y.push(g[0][0])
              for (var b = g.length, v = 1; v < b; v++) y.push(g[v], g[0][v])
            }
            var k = Object(c.d)(function(e, t, n) {
              return Object(r.createElement)(c.a.Consumer, null, function(a) {
                var s = (h && e.as) || p,
                  l = "",
                  c = [],
                  g = e
                if (null == e.theme) {
                  for (var b in ((g = {}), e)) g[b] = e[b]
                  g.theme = a
                }
                "string" == typeof e.className &&
                  (l += Object(d.a)(t.registered, c, e.className))
                var v = Object(u.a)(y.concat(c), t.registered, g)
                Object(d.b)(t, v, "string" == typeof s),
                  (l += t.key + "-" + v.name),
                  void 0 !== i && (l += " " + i)
                var k = h && void 0 === o ? f(s) : m,
                  x = {}
                for (var O in e) (h && "as" === O) || (k(O) && (x[O] = e[O]))
                return (
                  (x.className = l),
                  (x.ref = n || e.innerRef),
                  Object(r.createElement)(s, x)
                )
              })
            })
            return (
              (k.displayName =
                void 0 !== a
                  ? a
                  : "Styled(" +
                    ("string" == typeof p
                      ? p
                      : p.displayName || p.name || "Component") +
                    ")"),
              (k.defaultProps = t.defaultProps),
              (k.__emotion_real = k),
              (k.__emotion_base = p),
              (k.__emotion_styles = y),
              (k.__emotion_forwardProp = o),
              Object.defineProperty(k, "toString", {
                value: function() {
                  return "." + i
                },
              }),
              (k.withComponent = function(t, r) {
                return e(t, void 0 !== r ? l()({}, n || {}, r) : n).apply(
                  void 0,
                  y
                )
              }),
              k
            )
          }
        },
        g = n(152),
        y = n(153),
        b = n(154)
      n.d(t, "query", function() {
        return w
      })
      var v = h("div", { target: "e2ikktz0" })(function(e) {
          return { color: "white", backgroundColor: "hotpink" }
        }),
        k = h("h1", { target: "e2ikktz1" })({
          name: "9w33so",
          styles: "display:inline-block;border-bottom:1px solid;",
        }),
        x = { name: "nn640c", styles: "text-decoration:none;color:inherit;" },
        O = { name: "qp4dny", styles: "color:#bbb;" },
        w = ((t.default = function(e) {
          var t = e.data
          return (
            console.log(t),
            Object(c.c)(
              b.a,
              null,
              Object(c.c)(
                "div",
                null,
                Object(c.c)(k, null, "Amazing Pandas Eating Things"),
                Object(c.c)(
                  "h4",
                  null,
                  t.allMarkdownRemark.totalCount,
                  " Posts"
                ),
                t.allMarkdownRemark.edges.map(function(e) {
                  var t = e.node
                  return Object(
                    c.c
                  )("div", { key: t.id }, Object(c.c)(g.a, { to: t.fields.slug, css: x }, Object(c.c)("h3", { css: Object(c.b)("margin-bottom:", Object(y.a)(0.25), ";") }, t.frontmatter.title, Object(c.c)("span", { css: O }, "- ", t.frontmatter.date)), Object(c.c)("p", null, t.excerpt)))
                })
              ),
              Object(c.c)(v, null, "Dynamic page edit")
            )
          )
        }),
        "413260344")
    },
    151: function(e, t, n) {
      var r
      e.exports = ((r = n(156)) && r.default) || r
    },
    152: function(e, t, n) {
      "use strict"
      n(9)
      var r = n(0),
        a = n.n(r),
        o = n(4),
        i = n.n(o),
        s = n(36),
        l = n.n(s)
      n.d(t, "a", function() {
        return l.a
      })
      n(151), a.a.createContext({})
      i.a.object, i.a.string.isRequired, i.a.func, i.a.func
    },
    153: function(e, t, n) {
      "use strict"
      n.d(t, "a", function() {
        return l
      })
      var r = n(157),
        a = n.n(r),
        o = n(158),
        i = n.n(o),
        s = new a.a(i.a),
        l = s.rhythm
    },
    154: function(e, t, n) {
      "use strict"
      var r = n(9),
        a = n(155),
        o = (n(0), n(152)),
        i = n(153),
        s = { name: "146q31f", styles: "float:right;" }
      t.a = function(e) {
        var t = e.children,
          n = a.data
        return Object(r.c)(
          "div",
          {
            css: Object(r.b)(
              "margin:0 auto;max-width:700px;padding:",
              Object(i.a)(2),
              ";padding-top:",
              Object(i.a)(1.5),
              ";"
            ),
          },
          Object(r.c)(
            o.a,
            { to: "/" },
            Object(r.c)(
              "h3",
              {
                css: Object(r.b)(
                  "margin-bottom:",
                  Object(i.a)(2),
                  ";display:inline-block;font-style:normal;"
                ),
              },
              n.site.siteMetadata.title
            )
          ),
          Object(r.c)(o.a, { to: "/about/", css: s }, "About"),
          t
        )
      }
    },
    155: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: "Pandas Eating Lots" } } },
      }
    },
    156: function(e, t, n) {
      "use strict"
      n.r(t)
      n(58)
      var r = n(0),
        a = n.n(r),
        o = n(4),
        i = n.n(o),
        s = n(59),
        l = n(2),
        c = function(e) {
          var t = e.location,
            n = l.default.getResourcesForPathnameSync(t.pathname)
          return n
            ? a.a.createElement(
                s.a,
                Object.assign({ location: t, pageResources: n }, n.json)
              )
            : null
        }
      ;(c.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = c)
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-103bf5d9cecbee530262.js.map
