require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Picker":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Picker = (function(superClass) {
  extend(Picker, superClass);

  function Picker(options) {
    var base, base1, base2, base3, base4, d, drum, i, j, k, l, len, m, ref, ref1, ref2, row, tintColor;
    this.options = options != null ? options : {};
    if ((base = this.options).width == null) {
      base.width = Screen.width;
    }
    if ((base1 = this.options).backgroundColor == null) {
      base1.backgroundColor = "#FFF";
    }
    if ((base2 = this.options).startOnRow == null) {
      base2.startOnRow = 0;
    }
    if ((base3 = this.options).tintColor == null) {
      base3.tintColor = "#0076FF";
    }
    if ((base4 = this.options).data == null) {
      base4.data = [["Option 1A", "Option 1B", "Option 1C", "Option 1D", "Option 1E"], ["Option 2A", "Option 2B", "Option 2C", "Option 2D", "Option 2E"]];
    }
    Picker.__super__.constructor.call(this, _.defaults(this.options, {
      width: this.options.width,
      height: 144,
      name: "picker"
    }));
    tintColor = this.options.tintColor;
    this.drum = [];
    for (i = k = 0, ref = this.options.data.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
      this.container = new Layer({
        name: "drumContainer",
        parent: this,
        height: this.height,
        width: this.width / this.options.data.length,
        x: i * this.width / this.options.data.length,
        backgroundColor: null,
        clip: true
      });
      this.pickerDrum = new PageComponent({
        parent: this.container,
        name: "drum",
        height: 48,
        width: this.container.width - 16,
        point: Align.center,
        scrollHorizontal: false,
        clip: false
      });
      this.pickerDrum.style = {
        borderTop: "1px solid " + tintColor,
        borderBottom: "1px solid " + tintColor
      };
      this.drum.push(this.pickerDrum);
      for (j = l = 0, ref1 = this.options.data[i].length; 0 <= ref1 ? l < ref1 : l > ref1; j = 0 <= ref1 ? ++l : --l) {
        row = new Layer({
          parent: this.pickerDrum.content,
          height: 48,
          name: "pickerRow" + j,
          backgroundColor: null,
          width: this.pickerDrum.width,
          y: j * 48,
          html: this.options.data[i][j]
        });
        row.style = {
          fontSize: "16px",
          textAlign: "center",
          paddingTop: "10px",
          fontFamily: "Roboto",
          fontWeight: 400,
          color: "#333"
        };
      }
      ref2 = this.drum;
      for (d = m = 0, len = ref2.length; m < len; d = ++m) {
        drum = ref2[d];
        if (this.options.startOnRow !== 0) {
          drum.snapToPage(drum.content.children[this.options.startOnRow], false);
        }
      }
    }
    this.scrimTop = new Layer({
      name: "topScrim",
      parent: this,
      height: this.height / 2 - 24,
      width: this.width,
      backgroundColor: "rgba(255, 255, 255, .70)"
    });
    this.scrimBottom = new Layer({
      name: "bottomScrim",
      parent: this,
      height: this.height / 2 - 24,
      y: Align.bottom,
      width: this.width,
      backgroundColor: "rgba(255, 255, 255, .70)"
    });
  }

  Picker.define('tintColor', {
    get: function() {
      return this.options.tintColor;
    },
    set: function(value) {
      return this.options.tintColor = value;
    }
  });

  return Picker;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vbW9kdWxlcy9QaWNrZXIuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiY2xhc3MgZXhwb3J0cy5QaWNrZXIgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0QG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiI0ZGRlwiXG5cdFx0QG9wdGlvbnMuc3RhcnRPblJvdyA/PSAwXG5cdFx0QG9wdGlvbnMudGludENvbG9yID89IFwiIzAwNzZGRlwiXG5cdFx0QG9wdGlvbnMuZGF0YSA/PSBbW1wiT3B0aW9uIDFBXCIsIFwiT3B0aW9uIDFCXCIsIFwiT3B0aW9uIDFDXCIsIFwiT3B0aW9uIDFEXCIsIFwiT3B0aW9uIDFFXCJdLCBbXCJPcHRpb24gMkFcIiwgXCJPcHRpb24gMkJcIiwgXCJPcHRpb24gMkNcIiwgXCJPcHRpb24gMkRcIiwgXCJPcHRpb24gMkVcIl1dXG5cblx0XHRzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuXG5cdFx0d2lkdGg6IEBvcHRpb25zLndpZHRoXG5cdFx0aGVpZ2h0OiAxNDRcblx0XHRuYW1lOiBcInBpY2tlclwiXG5cblx0XHQjIFZhcmlhYmxlc1xuXHRcdHRpbnRDb2xvciA9IEBvcHRpb25zLnRpbnRDb2xvclxuXHRcdEBkcnVtID0gW11cblxuXHRcdCMgQ29udGFpbmVyc1xuXHRcdGZvciBpIGluIFswLi4uQG9wdGlvbnMuZGF0YS5sZW5ndGhdXG5cdFx0XHRAY29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHRcdG5hbWU6IFwiZHJ1bUNvbnRhaW5lclwiXG5cdFx0XHRcdHBhcmVudDogQFxuXHRcdFx0XHRoZWlnaHQ6IEBoZWlnaHRcblx0XHRcdFx0d2lkdGg6IEB3aWR0aCAvIEBvcHRpb25zLmRhdGEubGVuZ3RoXG5cdFx0XHRcdHg6IGkgKiBAd2lkdGggLyBAb3B0aW9ucy5kYXRhLmxlbmd0aFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdFx0Y2xpcDogdHJ1ZVxuXG5cdFx0XHQjIERydW1zXG5cdFx0XHRAcGlja2VyRHJ1bSA9IG5ldyBQYWdlQ29tcG9uZW50XG5cdFx0XHRcdHBhcmVudDogQGNvbnRhaW5lclxuXHRcdFx0XHRuYW1lOiBcImRydW1cIlxuXHRcdFx0XHRoZWlnaHQ6IDQ4XG5cdFx0XHRcdHdpZHRoOiBAY29udGFpbmVyLndpZHRoIC0gMTZcblx0XHRcdFx0cG9pbnQ6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRzY3JvbGxIb3Jpem9udGFsOiBmYWxzZVxuXHRcdFx0XHRjbGlwOiBmYWxzZVxuXHRcdFx0QHBpY2tlckRydW0uc3R5bGUgPSB7Ym9yZGVyVG9wOiBcIjFweCBzb2xpZCAje3RpbnRDb2xvcn1cIiwgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAje3RpbnRDb2xvcn1cIn1cblxuXHRcdFx0QGRydW0ucHVzaChAcGlja2VyRHJ1bSlcblxuXHRcdFx0IyBSb3dzXG5cdFx0XHRmb3IgaiBpbiBbMC4uLkBvcHRpb25zLmRhdGFbaV0ubGVuZ3RoXVxuXHRcdFx0XHRyb3cgPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRwYXJlbnQ6IEBwaWNrZXJEcnVtLmNvbnRlbnRcblx0XHRcdFx0XHRoZWlnaHQ6IDQ4XG5cdFx0XHRcdFx0bmFtZTogXCJwaWNrZXJSb3cje2p9XCJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdFx0XHR3aWR0aDogQHBpY2tlckRydW0ud2lkdGhcblx0XHRcdFx0XHR5OiBqICogNDhcblx0XHRcdFx0XHRodG1sOiBAb3B0aW9ucy5kYXRhW2ldW2pdXG5cdFx0XHRcdHJvdy5zdHlsZSA9IHtmb250U2l6ZTogXCIxNnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCIxMHB4XCIsIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsIGZvbnRXZWlnaHQ6IDQwMCwgY29sb3I6IFwiIzMzM1wiIH1cblxuXHRcdFx0Zm9yIGRydW0sIGQgaW4gQGRydW1cblx0XHRcdFx0aWYgQG9wdGlvbnMuc3RhcnRPblJvdyAhPSAwXG5cdFx0XHRcdFx0ZHJ1bS5zbmFwVG9QYWdlKGRydW0uY29udGVudC5jaGlsZHJlbltAb3B0aW9ucy5zdGFydE9uUm93XSwgZmFsc2UpXG5cblxuXHRcdCMgU2NyaW1cblx0XHRAc2NyaW1Ub3AgPSBuZXcgTGF5ZXJcblx0XHRcdG5hbWU6IFwidG9wU2NyaW1cIlxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHRoZWlnaHQ6IEBoZWlnaHQgLyAyIC0gMjRcblx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC43MClcIlxuXHRcdEBzY3JpbUJvdHRvbSA9IG5ldyBMYXllclxuXHRcdFx0bmFtZTogXCJib3R0b21TY3JpbVwiXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdGhlaWdodDogQGhlaWdodCAvIDIgLSAyNFxuXHRcdFx0eTogQWxpZ24uYm90dG9tXG5cdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuNzApXCJcblxuXG5cdEBkZWZpbmUgJ3RpbnRDb2xvcicsXG5cdFx0Z2V0OiAtPlxuXHRcdCAgIEBvcHRpb25zLnRpbnRDb2xvclxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdCAgIEBvcHRpb25zLnRpbnRDb2xvciA9IHZhbHVlXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBREFBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBQ0EsZ0JBQUMsT0FBRDtBQUVaLFFBQUE7SUFGYSxJQUFDLENBQUEsNEJBQUQsVUFBUzs7VUFFZCxDQUFDLFFBQVMsTUFBTSxDQUFDOzs7V0FDakIsQ0FBQyxrQkFBbUI7OztXQUNwQixDQUFDLGFBQWM7OztXQUNmLENBQUMsWUFBYTs7O1dBQ2QsQ0FBQyxPQUFRLENBQUMsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixXQUEzQixFQUF3QyxXQUF4QyxFQUFxRCxXQUFyRCxDQUFELEVBQW9F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
