import { useEffect, useRef } from 'react';
import './CustomElement'

function ParentCustomElement() {
  const customElementRef = useRef(null);

  useEffect(() => 
    {
    const customElement = customElementRef.current;

    // Event handler for custom event
    const handleChange = (event) => {
      console.log('Count updated:', event.detail.count);
    };

    customElement.addEventListener('changing', handleChange);

    return () => {
      customElement.removeEventListener('changing', handleChange);
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <counter-element ref={customElementRef}></counter-element>
    </div>
  );
}

export default ParentCustomElement;
