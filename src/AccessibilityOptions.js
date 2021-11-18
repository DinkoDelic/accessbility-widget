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
        return [
          ...document.querySelectorAll('p:not(#reactexample p), span:not(#reactexample span)'),
        ];
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
        return [...document.getElementsByTagName('body:not(#reactexample)')];
      case 'body+sections':
        return [
          ...document.querySelectorAll(
            'body, section, footer'
          ),
        ];
      case 'body+sections+text+header':
        return [
          ...document.querySelectorAll(
            'body:not(#reactexample div button), main, section, footer, p:not(#reactexample div button p), span, h1, h2, h3, h4, h5, h6,li,div:not(#reactexample div),ul'
          ),
        ];
      case 'links':
        return [...document.querySelectorAll('a:not(#reactexample)')];
      default:
        return;
    }
  };
}

export default AccessibilityOptions;
