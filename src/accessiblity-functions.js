
const increaseZoom= () =>{
    const sections = Array.from(document.querySelectorAll('body>section'));
    console.log(sections)
    sections.map(s=>{
        return s.classList.add('zoom-in');
    });
  
}

const increaseLineHeight= ()=>{
    let textElements = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6'));
    textElements.map(e => {
        e.setAttribute('style','line-height:2.0 !important;')
    })


}

export {increaseZoom, increaseLineHeight};