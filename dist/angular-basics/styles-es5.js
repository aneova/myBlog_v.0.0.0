(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n  background-color: #fff;\n  color: #333;\n}\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 1rem;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  color: #666;\n}\nul {\n  list-style: none;\n}\nimg {\n  width: 100%;\n}\n.btn {\n  display: inline-block;\n  background: #333333;\n  color: #fff;\n  padding: 0.4rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  -webkit-transition: opacity 0.2s ease-in;\n  transition: opacity 0.2s ease-in;\n  outline: none;\n}\n.btn:disabled {\n  background: #ccc;\n  color: #000;\n  cursor: not-allowed;\n}\n.btn:hover {\n  opacity: 0.8;\n}\n.btn.btn-danger {\n  background: #dc3545;\n  color: #fff;\n}\n.form-control {\n  display: block;\n  margin-top: 0.3rem;\n  margin-bottom: 0.5rem;\n}\n.form-control label {\n  display: block;\n  font-weight: bold;\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n.form-control input {\n  margin-bottom: 0;\n}\n.form-control .validation {\n  color: red;\n}\n.card {\n  padding: 1rem;\n  border: #ccc 1px dotted;\n  margin: 0.7rem 0;\n}\n.card p {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.card p span.completed {\n  text-decoration: line-through;\n}\na {\n  text-decoration: none;\n  color: #333;\n}\ninput,\nselect,\ntextarea {\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n  margin-bottom: 1rem;\n}\nhr {\n  margin: 0.5rem 0;\n}\n.navbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1rem;\n  background: #5aad8b;\n  color: #fff;\n}\n.navbar ul {\n  display: -webkit-box;\n  display: flex;\n}\n.navbar ul li.active a {\n  font-weight: bold;\n  color: #333333;\n  cursor: default;\n}\n.navbar a {\n  color: #fff;\n  padding: 0.45rem;\n  margin: 0 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXEFubmVnYVxcV2Vic3Rvcm1Qcm9qZWN0c1xcbXlCbG9nL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkRBQUE7QUFFUjtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBRjtBREdBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0E7RUFDRSxxQkFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7QUNBRjtBREdBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLGFBQUE7QUNBRjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FES0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNGRjtBRElFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDRko7QURLRTtFQUNFLGdCQUFBO0FDSEo7QURNRTtFQUNFLFVBQUE7QUNKSjtBRFFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRE9FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0xKO0FET0k7RUFDRSw2QkFBQTtBQ0xOO0FEVUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBOzs7RUFHRyxlQUFBO0VBQ0QsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUEY7QURVQTtFQUNFLGdCQUFBO0FDUEY7QURVQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1BGO0FEU0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNQSjtBRFNJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEV0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJyk7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLmJ0bi1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC52YWxpZGF0aW9uIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6ICNjY2MgMXB4IGRvdHRlZDtcclxuICBtYXJnaW46IDAuN3JlbSAwO1xyXG5cclxuICBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgc3Bhbi5jb21wbGV0ZWQge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luOiAuNXJlbSAwO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAycmVtO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZDogIzVhYWQ4YjtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBsaS5hY3RpdmUgYSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDAuNDVyZW07XHJcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjRyZW0gMS4zcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uYnRuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5mb3JtLWNvbnRyb2wgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZm9ybS1jb250cm9sIC52YWxpZGF0aW9uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6ICNjY2MgMXB4IGRvdHRlZDtcbiAgbWFyZ2luOiAwLjdyZW0gMDtcbn1cbi5jYXJkIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZCBwIHNwYW4uY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaHIge1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4ubmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjdyZW0gMnJlbTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuOTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZDogIzVhYWQ4YjtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5uYXZiYXIgdWwgbGkuYWN0aXZlIGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5uYXZiYXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjQ1cmVtO1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Annega\WebstormProjects\myBlog\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map