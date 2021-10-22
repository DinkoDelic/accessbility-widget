class AccessibilityOptions {
  static increaseZoom = (value) => {
    const sections = Array.from(document.querySelectorAll('body>section'));
    sections.map((s) => {
      return value !== 'undefined'
        ? (s.style.zoom = `${value}`)
        : (s.style.zoom = '');
    });
  };

  static textElements = Array.from(
    document.querySelectorAll('p, span, h2, h3, h4, h5, h6')
  );

  static increaseLineHeight = (value) => {
    this.textElements.map((e) => {
      return value !== 'undefined'
        ? (e.style.lineHeight = `${value}`)
        : (e.style.lineHeight = '');
      //e.setAttribute('style',`line-height:2 !important;`)
    });
  };

  static increaseWordSpacing = (value) => {
    this.textElements.map((e) => {
      return value !== 'undefined'
        ? (e.style.wordSpacing = `${value}`)
        : (e.style.wordSpacing = '');
      //e.setAttribute('style',`word-spacing:3px !important;`)
    });
  };
  static changeTextAlign = (value) => {
    this.textElements.map((e) => {
      return value !== 'undefined'
        ? (e.style.textAlign = `${value}`)
        : (e.style.textAlign = '');
    });
  };


  static changeToDyslexiaFriendlyFont = (value) => {
    const body = document.getElementsByTagName('body')[0];
    return value !== 'undefined'
    ? (body.style.fontFamily = `${value}`)
    : (body.style.fontFamily = '')
  }
}

export default AccessibilityOptions;
