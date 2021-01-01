import { readable } from 'svelte/store';

export const useMedia = function(mediaQueryString) {
  return readable(window.matchMedia(mediaQueryString).matches, set => {
    let resetId
    function update() {
      set(window.matchMedia(mediaQueryString).matches)
      resetId = window.requestIdleCallback(update)
    }
    resetId = window.requestIdleCallback(update)

    return () => {
      if(resetId) {
          window.cancelIdleCallback(resetId)
      }
    };
  });
}
