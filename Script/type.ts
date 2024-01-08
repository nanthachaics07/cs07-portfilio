// Import jQuery
import * as $ from 'jquery';

class StickyNavigation {

  private currentId: string | null = null;
  private currentTab: JQuery<HTMLElement> | null = null;
  private tabContainerHeight: number = 70;

  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    let self = this;
    $('.et-hero-tab').click(function (event: JQuery.ClickEvent) {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => { this.onScroll(); });
    $(window).resize(() => { this.onResize(); });
  }

  onTabClick(event: JQuery.ClickEvent, element: JQuery<HTMLElement>) {
    event.preventDefault();
    let scrollTop = $(element.attr('href')!).offset()!.top - this.tabContainerHeight + 1;
    $('html, body').animate({ scrollTop: scrollTop }, 600, () => {
      this.checkTabContainerPosition();
    });
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let offset = $('.et-hero-tabs').offset()!.top + $('.et-hero-tabs').height()! - this.tabContainerHeight;
    if ($(window).scrollTop()! > offset) {
      $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
    }
    else {
      $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
    }
  }

  findCurrentTabSelector(element?: JQuery<HTMLElement>) {
    let newCurrentId: string | undefined;
    let newCurrentTab: JQuery<HTMLElement> | undefined;
    let self = this;
    $('.et-hero-tab').each(function () {
      let id = $(this).attr('href');
      let offsetTop = $(id!).offset()!.top - self.tabContainerHeight;
      let offsetBottom = $(id!).offset()!.top + $(id!).height()! - self.tabContainerHeight;
      if ($(window).scrollTop()! > offsetTop && $(window).scrollTop()! < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId as string;
      this.currentTab = newCurrentTab as JQuery<HTMLElement>; 
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = parseInt(this.currentTab.css('width')!);
      left = this.currentTab.offset()!.left!;
    }
    $('.et-hero-tab-slider').css('width', width);
    $('.et-hero-tab-slider').css('left', left);
  }
}

new StickyNavigation();

class OnetapToOpenImage {

  private showImageClick: HTMLElement;
  private myImage: HTMLElement;

  constructor() {
    this.showImageClick = document.getElementById("clickMeImage")!;
    this.myImage = document.getElementById("imageURL")!;
    this.showImageClick.addEventListener("click", () => {
      this.myImage.style.display = "block";
    });
  }
}

// Instantiate the class
new OnetapToOpenImage();
