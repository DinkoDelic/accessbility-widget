const darkContrast =
`
body section{
    background: #000 !important;
}
#header,#header.overflow{
    background: #000 !important;
    border-bottom: #FFF solid 1px !important;
    
}

.order-online-h2{
    background: #000 !important;
    color: #FFF !important;
    border: #FFF 1px solid !important;
}
#header .menu-item a{
    color: #FFF !important;
}

#header .menu-item.current a, #header .menu-item a:hover{
    color: yellow !important;
}

.section-title,.opening-hours,.restAddresses>p,#home-slider .my-link-color a, #footer .my-link-color a{
    color:#FFF !important
}

ul li,.detail,.price>i,.section-subtitle.hours,.text{
    color: #FFF !important;
}
.price,.section-subtitle.days{
    color: red !important;
}
#footer{
    background: #000 !important;
    border-top: #FFF solid 1px !important;
}
.button.menu.center{
    background: #000 !important;
    border: #FFF 1px solid !important;
    color: #FFF !important;
}
//contact page
#contact{
    background: #000 !important;
}
#contact .contact-details,.hours_and_time_styles,.contact-details,.reservation-phone,h1{
    color: #FFF !important;
}
#contact section.reservations h3.contact-details,.section-subtitle{
    color: #FFF !important;
}
`;

const lightContrast = `
body section{
    background: #FFF !important;
}
#header,#header.overflow{
    background: #FFF !important;
    border-bottom: #121212 solid 1px !important;
    
}

.order-online-h2{
    background: #FFF !important;
    color: #121212 !important;
    border: #121212 1px solid !important;
}
#header .menu-item a, p{
    color: #121212 !important;
}

#header .menu-item.current a, #header .menu-item a:hover{
    color: red !important;
}

.section-title,.opening-hours, #footer .my-link-color a{
    color:#121212 !important
}
.restAddresses>p,.my-link-color a{
    color: #FFF !important;
}

ul li,.detail,.price>i,.section-subtitle.hours,.text{
    color: #121212 !important;
}
.price,.section-subtitle.days{
    color: red !important;
}
#footer{
    background: #FFF !important;
    border-top: #121212 solid 1px !important;
}
.button.menu.center{
    background: #FFF !important;
    border: #121212 1px solid !important;
    color: #121212 !important;
}
//contact page
#contact{
    background: #FFF !important;
}
#contact .contact-details,.hours_and_time_styles,.contact-details,.reservation-phone,h1{
    color: #121212 !important;
}
#contact section.reservations h3.contact-details,.section-subtitle{
    color: #121212 !important;
}
`;


export  {darkContrast, lightContrast};