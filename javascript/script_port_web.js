

//  ปล.ใช้ extension auto comment เอา ##############################################################
class AntiCopyPaste {
  constructor() {
    this.disableSelection();
  }
  // set event 
  disableSelection() {
    window.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('selectstart', this.disableEvent);
      document.addEventListener('contextmenu', this.disableEvent);
    });
  }
  // anti-copy-paste
  disableEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}

// สร้างอ็อบเจกต์ของคลาส AntiCopyPaste เพื่อเริ่มต้นการป้องกันคัดลอกข้อความ
const antiCopyPaste = new AntiCopyPaste();


class StickyNavigation {
	
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70; // ความสูงของ Tab
      let self = this;
      $('.et-hero-tab').click(function() {  // กดปุ่ม
        self.onTabClick(event, $(this)); 
      });
      $(window).scroll(() => { this.onScroll(); }); // ตรวจตำแหน่งScroll
      $(window).resize(() => { this.onResize(); }); // ตรวจตำแหน่งResize
    }
    
  /**
   * ปรับเลื่อนตามเมาส์
   */
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
      $('html, body').animate({ scrollTop: scrollTop }, 600, () => {
        this.checkTabContainerPosition();
      });
    }
    
  /**
   * ตรวจตำแหน่งScroll
   */
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }
    
  /**
   * The function `onResize` checks if a current ID exists and then sets the CSS for a slider.
   */
    onResize() {
      if(this.currentId) {
        this.setSliderCss();
      }
    }
    
  /**
   * The function checks the position of a tab container and adds or removes a CSS class based on the
   * scroll position.
   */
    checkTabContainerPosition() {
      let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
      if($(window).scrollTop() > offset) {
        $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
      } 
      else {
        $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
      }
    }
    
  /**
   * The function finds the current tab selector based on the scroll position of the window.
   * element - The `element` parameter is not used in the code snippet provided. It is not
   * necessary for the `findCurrentTabSelector` function.
   */
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $('.et-hero-tab').each(function() {
        let id = $(this).attr('href'); // get the ID of the tab
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) { // check if the tab is in the viewport
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if(this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
    
  /**
   * The function sets the width and left position of a slider element based on the width and offset of a
   * current tab element.
   */
    setSliderCss() {
      let width = 0;
      let left = 0;
      if(this.currentTab) { // if there is a current tab
        width = this.currentTab.css('width');
        left = this.currentTab.offset().left;
      }
      $('.et-hero-tab-slider').css('width', width);
      $('.et-hero-tab-slider').css('left', left);
    }
    
  }
  
new StickyNavigation();
  



// เปิดเพจเดียว
// Anti Ope Another Page
class onetapToOpenImage {

  showImageClick = document.getElementById("clickMeImage");
  myImage = document.getElementById("imageURL");

  /**
 * Initialize the constructor.
//  * @param {type} paramName - description of parameter
//  * @return {type} description of return value
 */
  constructor() {
      this.showImageClick.addEventListener("click", () => {
          this.myImage.style.display = "block";
      });
  }
}
// Instantiate the class
new onetapToOpenImage();


// class ScrollToTopBtn {
//   constructor() {
//     this.init();
//   }

//   init() {
//     var scrollToTopBtn = document.getElementById("scrollToTopBtn");

//     window.addEventListener("scroll", function () {
//       // Show button when scrolls down 8200px from the top
//       if (document.body.scrollTop > 9900 || document.documentElement.scrollTop > 9900) {
//         scrollToTopBtn.style.display = "block";
//       } else {
//         scrollToTopBtn.style.display = "none";
//       }

//       // Check if has scrolled to the bottom of the page
//       // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//       //   scrollToTopBtn.style.backgroundColor = "#FFD300"; // Change color as needed
//       // } else {
//       //   scrollToTopBtn.style.backgroundColor = "#FFD300"; // Default color when not at the bottom
//       // }
//     });

//     scrollToTopBtn.addEventListener("click", function () {
//       // Smooth scroll to the top of the page
//       scrollToTop(500); // Adjust the duration (in milliseconds)
//     });

//     function scrollToTop(duration) {
//       const start = document.documentElement.scrollTop || document.body.scrollTop;
//       const startTime = performance.now();

//       function scrollAnimation(currentTime) {
//         const elapsedTime = currentTime - startTime;
//         const progress = Math.min(elapsedTime / duration, 1);
//         document.documentElement.scrollTop = document.body.scrollTop = start * (1 - progress);

//         if (progress < 1) {
//           requestAnimationFrame(scrollAnimation);
//         }
//       }
//       requestAnimationFrame(scrollAnimation);
//     }
//   }
// }

// new ScrollToTopBtn();



