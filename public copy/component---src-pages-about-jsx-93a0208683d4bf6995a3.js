;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    147: function(t, e, a) {
      "use strict"
      a.r(e),
        a.d(e, "query", function() {
          return i
        })
      var n = a(9),
        o = (a(0), a(154))
      e.default = function(t) {
        var e = t.data
        return Object(n.c)(
          o.a,
          null,
          Object(n.c)("h1", null, "About ", e.site.siteMetadata.title),
          Object(n.c)(
            "p",
            null,
            "We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food."
          )
        )
      }
      var i = "1097489062"
    },
    151: function(t, e, a) {
      var n
      t.exports = ((n = a(156)) && n.default) || n
    },
    152: function(t, e, a) {
      "use strict"
      a(9)
      var n = a(0),
        o = a.n(n),
        i = a(4),
        c = a.n(i),
        s = a(36),
        r = a.n(s)
      a.d(e, "a", function() {
        return r.a
      })
      a(151), o.a.createContext({})
      c.a.object, c.a.string.isRequired, c.a.func, c.a.func
    },
    153: function(t, e, a) {
      "use strict"
      a.d(e, "a", function() {
        return r
      })
      var n = a(157),
        o = a.n(n),
        i = a(158),
        c = a.n(i),
        s = new o.a(c.a),
        r = s.rhythm
    },
    154: function(t, e, a) {
      "use strict"
      var n = a(9),
        o = a(155),
        i = (a(0), a(152)),
        c = a(153),
        s = { name: "146q31f", styles: "float:right;" }
      e.a = function(t) {
        var e = t.children,
          a = o.data
        return Object(n.c)(
          "div",
          {
            css: Object(n.b)(
              "margin:0 auto;max-width:700px;padding:",
              Object(c.a)(2),
              ";padding-top:",
              Object(c.a)(1.5),
              ";"
            ),
          },
          Object(n.c)(
            i.a,
            { to: "/" },
            Object(n.c)(
              "h3",
              {
                css: Object(n.b)(
                  "margin-bottom:",
                  Object(c.a)(2),
                  ";display:inline-block;font-style:normal;"
                ),
              },
              a.site.siteMetadata.title
            )
          ),
          Object(n.c)(i.a, { to: "/about/", css: s }, "About"),
          e
        )
      }
    },
    155: function(t) {
      t.exports = {
        data: { site: { siteMetadata: { title: "Pandas Eating Lots" } } },
      }
    },
    156: function(t, e, a) {
      "use strict"
      a.r(e)
      a(58)
      var n = a(0),
        o = a.n(n),
        i = a(4),
        c = a.n(i),
        s = a(59),
        r = a(2),
        u = function(t) {
          var e = t.location,
            a = r.default.getResourcesForPathnameSync(e.pathname)
          return a
            ? o.a.createElement(
                s.a,
                Object.assign({ location: e, pageResources: a }, a.json)
              )
            : null
        }
      ;(u.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (e.default = u)
    },
  },
])
//# sourceMappingURL=component---src-pages-about-jsx-93a0208683d4bf6995a3.js.map
