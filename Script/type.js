"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import jQuery
var $ = require("jquery");
var StickyNavigation = /** @class */ (function () {
  function StickyNavigation() {
    var _this = this;
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    var self = this;
    $(".et-hero-tab").click(function (event) {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(function () {
      _this.onScroll();
    });
    $(window).resize(function () {
      _this.onResize();
    });
  }
  StickyNavigation.prototype.onTabClick = function (event, element) {
    var _this = this;
    event.preventDefault();
    var scrollTop =
      $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({ scrollTop: scrollTop }, 600, function () {
      _this.checkTabContainerPosition();
    });
  };
  StickyNavigation.prototype.onScroll = function () {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  };
  StickyNavigation.prototype.onResize = function () {
    if (this.currentId) {
      this.setSliderCss();
    }
  };
  StickyNavigation.prototype.checkTabContainerPosition = function () {
    var offset =
      $(".et-hero-tabs").offset().top +
      $(".et-hero-tabs").height() -
      this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $(".et-hero-tabs-container").addClass("et-hero-tabs-container--top");
    } else {
      $(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top");
    }
  };
  StickyNavigation.prototype.findCurrentTabSelector = function (element) {
    var newCurrentId;
    var newCurrentTab;
    var self = this;
    $(".et-hero-tab").each(function () {
      var id = $(this).attr("href");
      var offsetTop = $(id).offset().top - self.tabContainerHeight;
      var offsetBottom =
        $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if (
        $(window).scrollTop() > offsetTop &&
        $(window).scrollTop() < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  };
  StickyNavigation.prototype.setSliderCss = function () {
    var width = 0;
    var left = 0;
    if (this.currentTab) {
      width = parseInt(this.currentTab.css("width"));
      left = this.currentTab.offset().left;
    }
    $(".et-hero-tab-slider").css("width", width);
    $(".et-hero-tab-slider").css("left", left);
  };
  return StickyNavigation;
})();
new StickyNavigation();

var OnetapToOpenImage = /** @class */ (function () {
  function OnetapToOpenImage() {
    var _this = this;
    this.showImageClick = document.getElementById("clickMeImage");
    this.myImage = document.getElementById("imageURL");
    this.showImageClick.addEventListener("click", function () {
      _this.myImage.style.display = "block";
    });
  }
  return OnetapToOpenImage;
})();
// Instantiate the class
new OnetapToOpenImage();

