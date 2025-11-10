import {useEffect} from "react";

export default function KoFiWidget() {
  useEffect(() => {
    //if there's no ko-fi button added
    if (typeof window !== "undefined" && !window.kofiWidgetOverlay) {
      createWidget();
    }
  }, []);

  /**
   * createWidget
   * called from the scroll listener - adds all the ko-fi scripts
   * also removes the scroll listener, so it only happens once
   */
  function createWidget() {
    let kofiLoaderScript = document.createElement("script");
    kofiLoaderScript.setAttribute(
      "src",
      "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
    );
    kofiLoaderScript.setAttribute("type", "text/javascript");
    document.head.appendChild(kofiLoaderScript);

    kofiLoaderScript.onload = () => {
      let kofiButtonScript = document.createElement("script");
      kofiButtonScript.setAttribute("type", "text/javascript");
      kofiButtonScript.innerHTML = `
                window.kofiWidgetOverlay = kofiWidgetOverlay
            kofiWidgetOverlay.draw('matteoconvertino', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#00b9fe',
        'floating-chat.donateButton.text-color': '#fff',
      });
            `;
      document.head.appendChild(kofiButtonScript);

      // stile custom per spostarlo a destra
      const style = document.createElement("style");
      style.textContent = `
          /* contenitore del bubble */
          .floatingchat-container-wrap {
            left: unset !important;
            right: 16px !important;
          }

          /* iframe del popup */
          .floating-chat-kofi-popup-iframe {
            left: unset !important;
            right: 16px !important;
          }
          
          .floatingchat-container-wrap-mobi {
             left: unset !important;
            right: 10px !important;
            width: 50%;
          }
          
          .floating-chat-kofi-popup-iframe-mobi {
            left: unset !important;
            right: 16px !important;
          }
        `;
      document.head.appendChild(style);
    };
  }

  /**
   * closeKofi
   * Removes the Ko-fi widget scripts from the document
   */
  // function closeKofi() {
  //   // Remove the overlay widget script
  //   const overlayScript = document.querySelector(
  //     'script[src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"]'
  //   );
  //   if (overlayScript) {
  //     overlayScript.remove();
  //   }
  //
  //   // Remove the button script
  //   const buttonScript = document.querySelector("script:not([src])");
  //   if (
  //     buttonScript &&
  //     buttonScript.innerHTML.includes("kofiWidgetOverlay.draw")
  //   ) {
  //     buttonScript.remove();
  //   }
  //
  //   // Remove any Ko-fi elements from the DOM
  //   const kofiElements = document.querySelectorAll(
  //     '[class^="floatingchat-container-"]'
  //   );
  //   kofiElements.forEach(element => element.remove());
  //
  //   // Clean up any global variables or event listeners if necessary
  //   if (window.kofiWidgetOverlay) {
  //     delete window.kofiWidgetOverlay;
  //   }
  // }

  return null;
}
