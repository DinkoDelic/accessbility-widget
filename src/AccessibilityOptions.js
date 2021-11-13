class AccessibilityOptions {
  static changeStyling = (previousValue, value, elements) => {
    this.targetElements(elements).map((e) => {
      e.classList.remove(previousValue);
      // Appends class unless value is null
      return !value || e.classList.add(value);
    });
  };

  static targetElements = (elements) => {
    switch (elements) {
      case 'sections':
        return [...document.querySelectorAll('body>section')];
      case 'text':
        return [...document.querySelectorAll('p, span')];
      case 'text+header':
        return [
          ...document.querySelectorAll(
            'p, span, h1, h2, h3, h4, h5, h6',
            'li',
            'div',
            'ul'
          ),
        ];
      case 'body':
        return [...document.getElementsByTagName('body')];
      case 'body+sections':
        return [...document.querySelectorAll('body, section, footer')];
      case 'body+sections+text+header':
        return [
          ...document.querySelectorAll(
            'body, main, section, footer, p, span, h1, h2, h3, h4, h5, h6',
            'li',
            'div',
            'ul'
          ),
        ];
      case 'links':
        return [...document.querySelectorAll('a')];
      default:
        return;
    }
  };
}

export default AccessibilityOptions;
