class CustomCount extends HTMLElement {
    constructor() {
      super();
  
      // Attach shadow DOM
      this.attachShadow({ mode: 'open' });
      this.count = 0;
  
      // Create elements
      this.button = document.createElement('button');
      this.button.textContent = 'Increment';
      this.span = document.createElement('span');
      this.span.textContent = `Count: ${this.count}`;
  
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
          width: 200px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
          text-align: center;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        span {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          color: #333;
        }
      `;
  
      // Add button click handler
      this.button.addEventListener('click', () => {
        this.count++;
        this.span.textContent = `Count: ${this.count}`;
        this.dispatchEvent(
          new CustomEvent('changing', {
            detail: { count: this.count },
            bubbles: true,
            cancelable: true,
          })
        );
      });
  
      // Append elements to shadow DOM
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(this.button);
      this.shadowRoot.appendChild(this.span);
    }
  }
  
  customElements.define('counter-element', CustomCount);
  