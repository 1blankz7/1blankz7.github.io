var cookiedeclarationserial = "61c3fae0-31ac-4641-b111-e9d1591810e8";
var cookiedeclarationjumpURL =
  "https://consent.cookiebot.com/61c3fae0-31ac-4641-b111-e9d1591810e8/cdreport.js";
var CookieDeclaration, CookiePolicy;
"undefined" == typeof CookieControl && (CookieControl = {}),
  (CookieControl.CookieDeclaration = function () {
    (this.iswhitelabel = !1),
      (this.scriptId = "CookieDeclaration"),
      (this.scriptElement = null),
      (this.isInternalAlias = !1),
      (this.geoRegions = []),
      (this.culture = "en"),
      (this.userCulture = "en-GB"),
      (this.lastUpdatedDate = null),
      (this.init = function () {
        var e,
          t,
          o = "",
          n = document.getElementById(this.scriptId);
        if (
          !(
            (n && "script" == n.tagName.toLowerCase()) ||
            ((this.iswhitelabel = !0),
            (this.scriptId = "CookiePolicy"),
            (n = document.getElementById(this.scriptId)) &&
              "script" == n.tagName.toLowerCase())
          )
        ) {
          var s = document.getElementsByTagName("script");
          for (i = 0; i < s.length; i++) {
            var l = s[i];
            if (
              this.hasAttr(l, "src") &&
              0 <
                l
                  .getAttribute("src")
                  .toLowerCase()
                  .indexOf(cookiedeclarationserial.toLowerCase() + "/cd.js")
            ) {
              n = l;
              break;
            }
          }
          n &&
            (this.hasAttr(n, "src") &&
            0 <
              n
                .getAttribute("src")
                .toLowerCase()
                .indexOf("consent.cookiebot.com")
              ? ((this.scriptId = "CookieDeclaration"),
                (n.id = "CookieDeclaration"),
                (this.iswhitelabel = !1))
              : (n.id = "CookiePolicy"));
        }
        this.iswhitelabel || (window.CookiebotCookieDeclaration = this),
          n
            ? ((this.scriptElement = n),
              (o =
                0 < cookiedeclarationjumpURL.indexOf("?domain=")
                  ? "&whitelabel=" +
                    this.iswhitelabel +
                    "&referer=" +
                    encodeURIComponent(window.location.href)
                  : "?whitelabel=" +
                    this.iswhitelabel +
                    "&referer=" +
                    encodeURIComponent(window.location.href)),
              (t = n.getAttribute("data-culture")),
              (e = this.getURLParam("culture")) && (t = e),
              t && ((o = o + "&culture=" + t), (this.culture = t)),
              (e = n.getAttribute("data-path")),
              (t = this.getURLParam("path")) && (e = t),
              e && (o = o + "&path=" + encodeURIComponent(e)),
              (t = n.getAttribute("data-georegions")),
              (e = this.getURLParam("georegions")) && (t = e),
              t &&
                (this.registerGeoRegions(t),
                0 < this.geoRegions.length &&
                  (o =
                    o +
                    "&georegions=" +
                    encodeURIComponent(JSON.stringify(this.geoRegions)))),
              (e = n.getAttribute("data-user-country")),
              (t = this.getURLParam("user_country'")) && (e = t),
              e && (o = o + "&user_country=" + e),
              this.getScript(cookiedeclarationjumpURL + o, !0))
            : setTimeout(function () {
                CookieDeclaration.init();
              }, 100);
      }),
      (this.getScript = function (e, t) {
        var o = document.getElementsByTagName("script")[0],
          n = document.createElement("script");
        (n.type = "text/javascript"),
          (n.charset = "UTF-8"),
          (n.async = void 0 === t || t),
          (n.src = e),
          o.parentNode.insertBefore(n, o);
      }),
      (this.setTableCellTitles = function () {
        var e;
        if (
          ("undefined" == typeof CookieConsent
            ? (e = document.getElementById(
                "CookieDeclarationUserStatusPanel"
              )) && (e.style.display = "none")
            : this.SetUserStatusLabel(),
          document.getElementsByClassName)
        )
          for (
            var t = document.getElementsByClassName("CookieDeclarationTable"),
              o = 0;
            o < t.length;
            o++
          )
            for (var n, i = t[o].tBodies[0], s = 0; (n = i.rows[s]); s++)
              for (var l, a = 0; (l = n.cells[a]); a++)
                1 != a && (l.title = l.innerHTML.replace(/<br>/g, ", "));
      }),
      (this.SetUserStatusLabel = function () {
        var e = !0;
        if (
          "undefined" == typeof CookieConsent ||
          "-1" == CookieConsent.consentID ||
          CookieConsent.isOutsideEU
        )
          e = !1;
        else {
          var t = !0;
          if (0 < CookieConsent.pathlist.length) {
            t = !1;
            for (var o = 0; o < CookieConsent.pathlist.length; o++)
              if (
                0 ===
                window.location.pathname
                  .toLowerCase()
                  .indexOf(CookieConsent.pathlist[o].toLowerCase())
              ) {
                t = !0;
                break;
              }
          }
          if (t) {
            var n = document.getElementById(
                "CookieDeclarationUserStatusLabelOn"
              ),
              i = document.getElementById(
                "CookieDeclarationUserStatusLabelOff"
              ),
              s = document.getElementById(
                "CookieDeclarationUserStatusLabelMulti"
              ),
              l = document.getElementById(
                "CookieDeclarationUserStatusLabelConsentId"
              ),
              a = document.getElementById(
                "CookieDeclarationUserStatusLabelConsentDate"
              ),
              r = document.getElementById("CookieDeclarationChangeConsent"),
              c = document.getElementById("CookieDeclarationDoNotSell"),
              d = document.getElementById(
                "CookieDeclarationUserStatusLabelOffDoNotSell"
              ),
              C = document.getElementById("CookieDeclarationConsentIdAndDate");
            if (null != n && null != i) {
              var u = document.getElementById(
                "CookieDeclarationUserStatusPanel"
              );
              if (
                (u &&
                  (this.hasAttr(u, "data-responseMode") &&
                    (CookieConsent.responseMode = u.getAttribute(
                      "data-responseMode"
                    )),
                  this.hasAttr(u, "data-dialogtemplate") &&
                    u.getAttribute("data-dialogtemplate")),
                0 != CookieConsent.consentID &&
                  null != C &&
                  (C.style.display = "block"),
                null != l && (l.innerHTML = CookieConsent.consentID),
                null != a && null != CookieConsent.consentUTC)
              ) {
                var y = {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZoneName: "short",
                };
                try {
                  a.innerHTML = CookieConsent.consentUTC.toLocaleString(
                    this.culture,
                    y
                  );
                } catch (e) {
                  a.innerHTML = CookieConsent.consentUTC.toLocaleString(
                    "EN",
                    y
                  );
                }
              }
              l = "optionaloptin" == CookieConsent.responseMode;
              "leveloptin" == CookieConsent.responseMode ||
              "inlineoptin" == CookieConsent.responseMode ||
              l
                ? 0 == CookieConsent.consent.preferences &&
                  0 == CookieConsent.consent.statistics &&
                  0 == CookieConsent.consent.marketing
                  ? ((n.style.display = "none"),
                    l
                      ? (this.SetPropertyVisible(d, "block"),
                        (i.style.display = "none"),
                        (s.style.display = "none"))
                      : ((i.style.display = "block"),
                        (s.style.display = "none"),
                        this.SetPropertyVisible(d, "none")),
                    l &&
                      0 != CookieConsent.consentID &&
                      ((i.style.display = "none"),
                      this.SetPropertyVisible(d, "block"),
                      this.SetPropertyVisible(r, "block"),
                      this.SetPropertyVisible(c, "none")))
                  : ((n.style.display = "none"),
                    (i.style.display = "none"),
                    !0 === CookieConsent.consent.preferences &&
                    !0 === CookieConsent.consent.statistics &&
                    !0 === CookieConsent.consent.marketing
                      ? ((s.style.display = "none"),
                        (n.style.display = "inline-block"))
                      : ((n.style.display = "none"),
                        (s.style.display = "inline-block")),
                    l &&
                      0 != CookieConsent.consentID &&
                      (this.SetPropertyVisible(d, "none"),
                      this.SetPropertyVisible(r, "none"),
                      this.SetPropertyVisible(c, "block")),
                    (c = document.getElementById(
                      "CookieDeclarationUserStatusLabelMultiSettingsPref"
                    )),
                    CookieConsent.consent.preferences
                      ? (c.style.display = "inline")
                      : (c.style.display = "none"),
                    (c = document.getElementById(
                      "CookieDeclarationUserStatusLabelMultiSettingsStat"
                    )),
                    CookieConsent.consent.statistics
                      ? (c.style.display = "inline")
                      : (c.style.display = "none"),
                    (c = document.getElementById(
                      "CookieDeclarationUserStatusLabelMultiSettingsMark"
                    )),
                    CookieConsent.consent.marketing
                      ? (c.style.display = "inline")
                      : (c.style.display = "none"))
                : ((s.style.display = "none"),
                  CookieConsent.consented
                    ? ((n.style.display = "inline-block"),
                      (i.style.display = "none"))
                    : ((n.style.display = "none"),
                      (i.style.display = "inline-block")));
            }
          } else e = !1;
        }
        !e ||
          ((e = document.getElementById("CookieDeclarationUserStatusPanel")) &&
            ((e.style.display = "block"),
            (e = document.getElementById(
              "CookieDeclarationUserStatusLabelWithdraw"
            )),
            (CookieConsent.consent.preferences ||
              CookieConsent.consent.statistics ||
              CookieConsent.consent.marketing) &&
            CookieConsent.consented
              ? (e.style.display = "inline-block")
              : (e.style.display = "none")));
      }),
      (this.SetPropertyVisible = function (e, t) {
        null != e && (e.style.display = t);
      }),
      (this.hasAttr = function (e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : !!e.getAttribute(t);
      }),
      (this.InjectCookieDeclaration = function (e) {
        var t = document.createElement("div");
        if (
          void 0 !== this.userCulture &&
          null != this.userCulture &&
          void 0 !== this.lastUpdatedDate &&
          null != this.lastUpdatedDate
        ) {
          var o = { timeZone: "UTC", dateStyle: "short" },
            n = "",
            i = new Date(this.lastUpdatedDate);
          try {
            n = i.toLocaleDateString(this.userCulture, o);
          } catch (e) {
            n = i.toLocaleDateString("en-GB", o);
          }
          e = e.replace(/\[#LOCALIZED_CRAWLDATE#\]/g, n);
        }
        t.innerHTML = e;
        (e = document.getElementById(this.scriptId)),
          (t = (e = e || this.scriptElement).parentNode.insertBefore(t, e));
        this.isInternalAlias &&
          (((e = document.createElement("div")).innerHTML = "TEST"),
          (e.style.position = "relative"),
          (e.style.fontSize = "200px"),
          (e.style.opacity = "0.25"),
          (e.style.fontWeight = "bold"),
          (e.style.overflow = "visible"),
          (e.style.pointerEvents = "none"),
          (e.style.height = "0"),
          (e.style.width = "0"),
          (e.style.right = "0"),
          t.insertBefore(e, t.firstChild)),
          this.setTableCellTitles(),
          "function" == typeof CookiebotCallback_OnDialogLoad &&
            CookiebotCallback_OnDialogLoad();
      }),
      (this.getURLParam = function (e) {
        var t =
          (t = document.getElementById(this.scriptId)) || this.scriptElement;
        if (
          t &&
          (e = new RegExp("[?&]" + encodeURIComponent(e) + "=([^&#]*)").exec(
            t.src
          ))
        )
          return decodeURIComponent(e[1].replace(/\+/g, " "));
      }),
      (this.registerGeoRegions = function (t) {
        if (
          this.geoRegions &&
          0 == this.geoRegions.length &&
          t &&
          0 < t.length
        ) {
          var e = '{"configs": [' + t.replace(/'/g, '"') + "]}";
          try {
            var o = JSON.parse(e);
            if (o.configs)
              for (var n = 0; n < o.configs.length; n++)
                o.configs[n].region &&
                  o.configs[n].cbid &&
                  this.geoRegions.push({
                    r: o.configs[n].region,
                    i: o.configs[n].cbid,
                  });
          } catch (e) {
            this.log(
              "ERROR IN GEO-REGIONS ATTRIBUTE VALUE ON COOKIE DECLARATION TAG - NOT A VALID JSON ARRAY: " +
                t
            );
          }
        }
      }),
      this.init();
  }),
  (CookiePolicy = CookieDeclaration = new CookieControl.CookieDeclaration());
