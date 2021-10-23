class AccessibilityOptions {
  static sections = Array.from(document.querySelectorAll('body>section'));

  static changeStyling = (previousValue,value) => {
    this.sections.map((s) => {
      s.classList.remove(previousValue);
      // Appends class unless value is null
      return !value || s.classList.add(value)
    });
  };

  static textElements = [...document.querySelectorAll('p, span, h2, h3, h4, h5, h6')];

  
  static changeContrast = (value) => {
    const backgroundElements = [
      ...this.sections,
      document.getElementsByTagName('body')[0],
    ];
    const divs = [...document.getElementsByTagName('div')];
    console.log(backgroundElements);
    backgroundElements.map((e) => {
      switch (value) {
        case 'undefined':
          e.style.filter = '';
          e.style.backgroundColor = '';
          e.style.color = '';
          break;
        case 'dark':
          e.style.filter = '';
          e.style.backgroundColor = 'rgb(0,0,0)';
          e.style.color = 'rgb(255,255,255)';
          break;
        case 'light':
          e.style.filter = '';
          e.style.backgroundColor = 'rgb(255,255,255)';
          e.style.color = 'rgb(0,0,0)';
          break;
        case 'desaturate':
          // applies desaturation to only body element
          backgroundElements.at(-1).style.filter= 'saturate(0)';
      }
    });
  };
}

export default AccessibilityOptions;
