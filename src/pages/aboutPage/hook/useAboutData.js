import { useCallback, useRef } from 'react';

function simulateClick(control) {
  document.elementFromPoint(200,200).click();
}

export const useAboutData = () => {
  // simulateClick()
  const ref = useRef();
  console.log('ref = ', ref.current.click());

  useCallback(() => {
  }, [])

  return {
    ref
  }
}
