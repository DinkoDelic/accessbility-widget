import {faAdjust,faSearchPlus,faArrowsAltH,faTextHeight, faAlignCenter,faFont,faSun, faHighlighter} from '@fortawesome/free-solid-svg-icons'

export let options = {
  'zoom-option': {
    options: [null, 'zoom-120', 'zoom-130', 'zoom-150'],
    optionsDescription:[null,'1.2X','1.3X','1.5X'],
    id: 'Zoom',
    targetElement: 'sections',
    text: 'Increase font',
    icon:faSearchPlus
  },
  'line-height-option': {
    options: [null, 'line-height-2', 'line-height-250', 'line-height-3'],
    optionsDescription:[null,'small','medium','large'],
    id: 'Line height',
    targetElement: 'text',
    text: 'Increase line height',
    icon:faTextHeight
  },
  'word-spacing-option': {
    options: [null, 'word-spacing-2px', 'word-spacing-4px', 'word-spacing-8px'],
    optionsDescription:[null,'small','medium','large'],
    id: 'Word spacing',
    targetElement: 'text',
    text: 'Increase word spacing',
    icon:faArrowsAltH
  },
  'text-align-option': {
    options: [
       null,
      'text-align-center',
      'text-align-left',
      'text-align-right',
      'text-align-justify',
    ],
    optionsDescription:[null,'center','left','right','justify'],
    id: 'Text align',
    targetElement: 'text',
    text: 'Change text align',
    icon:faAlignCenter
  },
  'dyslexia-font-option': {
    options: [null, 'dyslexia-font'],
    optionsDescription:[null,null],
    id: 'Dyslexia font',
    targetElement: 'text+header',
    text: 'Dyslexia friendly font',
    icon:faFont
  },
  'contrast-option': {
    options: [null, 'dark-contrast', 'light-contrast'],
    optionsDescription:[null,'dark contrast','light contrast'],
    id: 'Contrast',
    targetElement: 'body+sections+text+header',
    text: 'Change contrast',
    icon:faAdjust
  },
  'desaturate-option': {
    options: [null,'desaturate'],
    optionsDescription:[null,null],
    id: 'Desaturate',
    targetElement: 'sections',
    text: 'Change saturation',
    icon:faSun
  },
  'link-highlight-option': {
    options: [null, 'link-highlight'],
    optionsDescription:[null,null],
    id: 'Link highlight',
    targetElement: 'links',
    text: 'Highlight links',
    icon:faHighlighter
  },
};
