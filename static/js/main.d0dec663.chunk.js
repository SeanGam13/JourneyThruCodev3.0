(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){e.exports=t(24)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(8),c=t.n(r);t(17);var s=()=>(console.log("Header component rendered"),n.a.createElement("div",{id:"header",className:"fixed-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header-text"},n.a.createElement("p",{style:{color:"rgb(0, 183, 255)",fontWeight:"bold",textTransform:"uppercase",display:"inline",textShadow:"-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff"}},"Journey Through Code: "),n.a.createElement("p",{style:{color:"orange",fontStyle:"italic",display:"inline",textShadow:"-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"}},"My Personal Portfolio"),n.a.createElement("h4",{className:"white-text"},"Welcome to the arena of greatness, where every challenge is met with unwavering determination.",n.a.createElement("br",null)," Here, we don't just strive for success, we embody it. Join us in our journey to conquer new heights and redefine what's possible.",n.a.createElement("br",null)," This is where dreams become reality, and we're ready to lead the charge. Are you ready to step into the spotlight?",n.a.createElement("br",null)," Let's make history together."),n.a.createElement("h1",null,"My Name is ",n.a.createElement("span",{className:"blue-text"},"Sean")," ",n.a.createElement("span",{className:"orange-text"},"Gambanou")),n.a.createElement("span",{className:"white-text"},"Make Yourselves at home"))))),o=t(3);t(6),t(7);var i=()=>{const[e,a]=Object(l.useState)(!1),t=()=>window.innerWidth<=600,r=()=>{a(!e),t()&&(e?(document.querySelector(".fa-chess-king").style.display="none",document.querySelector(".fa-chess-board").style.display="block",document.body.classList.remove("noscroll")):(document.querySelector(".fa-chess-king").style.display="block",document.querySelector(".fa-chess-board").style.display="none",document.body.classList.add("noscroll")))},c=()=>{a(!1),t()&&(document.querySelector(".fa-chess-king").style.display="none",document.querySelector(".fa-chess-board").style.display="block",document.body.classList.remove("noscroll"))};return Object(l.useEffect)(()=>{const e=()=>{t()?document.querySelector(".fa-chess-board").style.display="block":(a(!1),document.querySelector(".fa-chess-king").style.display="none",document.querySelector(".fa-chess-board").style.display="none",document.body.classList.remove("noscroll"))};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),n.a.createElement("nav",null,n.a.createElement("img",{src:"images/logo.png",className:"logo",alt:"Logo"}),n.a.createElement("ul",{className:e?"open":""},n.a.createElement("li",null,n.a.createElement(o.b,{to:"/",activeClassName:"active",onClick:c},"Home")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/about",activeClassName:"active",onClick:c},"About")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/endeavors",activeClassName:"active",onClick:c},"Endeavors")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/catalogue",activeClassName:"active",onClick:c},"Catalogue")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/contact",activeClassName:"active",onClick:c},"Contact")),n.a.createElement("i",{className:"fa-solid fa-chess-king",onClick:r})),n.a.createElement("i",{className:"fa-solid fa-chess-board",onClick:r}))};t(18);var m=()=>{const[e,a]=Object(l.useState)(null),t=e=>{a(a=>a===e?null:e)};return n.a.createElement("div",{id:"about"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"about-col-1"},n.a.createElement("img",{src:"images/user.jpg",alt:"User"})),n.a.createElement("div",{className:"about-col-2"},n.a.createElement("h1",{className:"sub-title"},"About Me"),n.a.createElement("p",null,"Sean Gambanou is a 22 year old young man of many talents, some would say embodiment of an A Student. He's the type of individual who if he doesn't understand nor have the answers, he will hunt for them. We can spend a whole year running through the autobiography but why don't we rather check the E.E.S."),n.a.createElement("div",{className:"tab-container"},n.a.createElement("div",{className:"tab-titles"},n.a.createElement("p",{className:"tab-links ".concat("education"===e?"active-link":""),onClick:()=>t("education"),"data-tab":"education"},"Education"),n.a.createElement("p",{className:"tab-links ".concat("experience"===e?"active-link":""),onClick:()=>t("experience"),"data-tab":"experience"},"Experience"),n.a.createElement("p",{className:"tab-links ".concat("strengths"===e?"active-link":""),onClick:()=>t("strengths"),"data-tab":"strengths"},"Strengths")),n.a.createElement("div",{className:"tab-contents ".concat("education"===e?"active-tab":""),id:"education"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",null,"Primany"),n.a.createElement("br",null),"Sacred Heart Primary (2008-2010), Laerskool WH Coetzer Primary (2010-2014)"),n.a.createElement("li",null,n.a.createElement("span",null,"Secondary"),n.a.createElement("br",null),"The Hill High School (2015-2019)"),n.a.createElement("li",null,n.a.createElement("span",null,"Tertiary"),n.a.createElement("br",null),"Rosebank College (2020)"),n.a.createElement("li",null,n.a.createElement("span",null,"Current"),n.a.createElement("br",null),"ALX Africa (2023-Present) "))),n.a.createElement("div",{className:"tab-contents ".concat("experience"===e?"active-tab":""),id:"experience"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",null,"Sales"),n.a.createElement("br",null),"Manager (2022-Present)"),n.a.createElement("li",null,n.a.createElement("span",null,"Security"),n.a.createElement("br",null),"Technician (2022-Present)"),n.a.createElement("li",null,n.a.createElement("span",null,"Software Development"),n.a.createElement("br",null)," (2020-Present)"),n.a.createElement("li",null,n.a.createElement("span",null,"Music"),n.a.createElement("br",null),"Recording Engineer, Mixing Engineer, Mastering Engineer, Songwriter (2018-Present)"),n.a.createElement("li",null,n.a.createElement("span",null,"Marketing"),n.a.createElement("br",null),"Social Media Analyst, Copywriter (2023-Present)"))),n.a.createElement("div",{className:"tab-contents ".concat("strengths"===e?"active-tab":""),id:"strengths"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("span",null,"Tech-savvy"),n.a.createElement("br",null),"Proficient with modern technology and software."),n.a.createElement("li",null,n.a.createElement("span",null,"Teamplayer"),n.a.createElement("br",null),"Works effectively within a team setting."),n.a.createElement("li",null,n.a.createElement("span",null,"Multitasking"),n.a.createElement("br",null),"Handles multiple tasks simultaneously."),n.a.createElement("li",null,n.a.createElement("span",null,"Initiative"),n.a.createElement("br",null),"Takes proactive steps to achieve goals."),n.a.createElement("li",null,n.a.createElement("span",null,"Attention to Detail"),n.a.createElement("br",null),"Ensures accuracy and precision in work."),n.a.createElement("li",null,n.a.createElement("span",null,"Networking"),n.a.createElement("br",null),"Builds and maintains professional connections."),n.a.createElement("li",null,n.a.createElement("span",null,"Project Management"),n.a.createElement("br",null),"Coordinates and oversees projects from start to finish."),n.a.createElement("li",null,n.a.createElement("span",null,"Cultural Awareness"),n.a.createElement("br",null),"Appreciates and respects diverse perspectives."))))))))};t(19);var u=()=>n.a.createElement("div",{id:"endeavors"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"sub-title"},"Endeavors"),n.a.createElement("div",{className:"endeavors-list"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa-solid fa-laptop-code"}),n.a.createElement("h2",null,"Software Development"),n.a.createElement("p",null,"Despite acquiring the knowledge through my 9-5s, I'm on course to completing my journey as a Front end Developer through ALX."),n.a.createElement("a",{href:"https://github.com/SeanGam13"},"learn more")),n.a.createElement("div",null,n.a.createElement("i",{className:"fa-solid fa-music"}),n.a.createElement("h2",null,"MUSIC"),n.a.createElement("p",null,"Earlier this year, I ended my career in music. Not due to factors like fame and money but rather due to my newly found goals and ambitions. This isn't a train-smash as my previous work is still on all streaming platforms."),n.a.createElement("a",{href:"https://www.google.com/search?sa=X&sca_esv=668e1abf6fdfcd6c&sca_upv=1&rlz=1C1VDKB_enZA982ZA991&nfpr=1&sxsrf=ADLYWII_VLgqeXrzssaWKguiwuzilam9dg:1716833915641&q=Dituaes&si=ACC90nwWMtY7Jnlv_AccmXGjSqOGAy-2XDPRTVk5XuZZ_zXrZJbevZQJBuM9qvK7VC5MrMk7kz_oOYrJpdKUrjOnBdhzRynyBHewAOEcL9jdcphBk5A2tWH2R-pIFNJ90Jo-PF4azoexsM84oIpIx_5Nq-ZFoHpG3vDgYCT4C3wz7XQTimpFF4nSt07c5dvxMiNgLkcEG2lT0wmG_hKfiacf2S-rzWJaFeJ4EWWzZiBi7IinCvs9Z3ZhsxR0Fffx8oewX6eCMqvpD-rU5hN7QmdAgkODiwTZmbpRt_cMAjEBl_fE86PUH62Ky8yuW-5uYg89TXn5SmJb&ved=2ahUKEwiE"},"learn more")),n.a.createElement("div",null,n.a.createElement("i",{className:"fa-solid fa-user-secret"}),n.a.createElement("h2",null,"Security & Surveillence"),n.a.createElement("p",null,"I currently manage a security company which specializes in hidden devices such as cameras, audio recorders, trackers etc."),n.a.createElement("a",{href:"https://spyshop.co.za/"},"learn more")))));t(20);var d=()=>n.a.createElement("div",{id:"catalogue"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"sub-title"},"My catalogue"),n.a.createElement("div",{className:"catalogue-list"},n.a.createElement("div",null,n.a.createElement("h2",null,"Spotify"),n.a.createElement("iframe",{src:"https://open.spotify.com/embed/album/3f7TU6cP0jsbbSxoZQu1pu?utm_source=generator",width:"300",height:"380",frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})),n.a.createElement("div",null,n.a.createElement("h2",null,"Apple Music"),n.a.createElement("iframe",{allow:"autoplay *; encrypted-media *; fullscreen *; clipboard-write",frameBorder:"0",height:"380",style:{width:"80%",margin:"0 auto",borderRadius:"12px"},sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",src:"https://embed.music.apple.com/us/album/panado-feat-maazi-beats-single/1728963811"})),n.a.createElement("div",null,n.a.createElement("h2",null,"Audiomack"),n.a.createElement("iframe",{src:"https://audiomack.com/embed/dituaes/album/take-no-ls-ep",scrolling:"no",width:"80%",height:"400",frameBorder:"0",title:"Take no L's EP"}))),n.a.createElement("div",null,n.a.createElement("h2",null,"Youtube"),n.a.createElement("iframe",{width:"80%",height:"380",src:"https://www.youtube.com/embed/jCk167DrcM4?si=pMdr6wjb26lWkYmE",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,style:{borderRadius:"12px",margin:"0 auto"}}))));t(21);var E=()=>{const[e,a]=Object(l.useState)("");return n.a.createElement("div",{id:"contact"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"contact-left"},n.a.createElement("h2",{className:"sub-title"},"Enquiries"),n.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const t=e.target,l=new FormData(t);try{(await fetch("https://script.google.com/macros/s/AKfycbxl7kX1J11M3n6bFHv-T3HYFvZEXCVp298gjZL5fLgim_wpEI1CkjtcmAciZiDxucGYYA/exec",{method:"POST",body:l})).ok?(a("Thank you for your message! I will get back to you shortly."),t.reset()):a("There was an error submitting your message. Please try again later.")}catch(n){console.error("Error submitting form:",n),a("There was an error submitting your message. Please try again later.")}},name:"submit-to-google-sheet"},n.a.createElement("input",{type:"text",name:"Name",placeholder:"Your Name",required:!0}),n.a.createElement("input",{type:"email",name:"Email",placeholder:"Your Email",required:!0}),n.a.createElement("textarea",{name:"Message",rows:"6",placeholder:"Your Message",required:!0}),n.a.createElement("button",{type:"submit",className:"btn"},"Submit")),n.a.createElement("p",null,e)),n.a.createElement("div",{className:"contact-right"},n.a.createElement("h2",{className:"sub-title"},"Contact Details"),n.a.createElement("p",null,n.a.createElement("i",{className:"fa-solid fa-at"}),"seangamabanou9@gmail.com"),n.a.createElement("p",null,n.a.createElement("i",{className:"fa-solid fa-mobile-screen-button"}),"+27 74 714 4572"),n.a.createElement("div",{className:"social-icons"},n.a.createElement("a",{href:"https://www.linkedin.com/in/seang-a65aa4270"},n.a.createElement("i",{className:"fa-brands fa-linkedin"})),n.a.createElement("a",{href:"https://x.com/LeVraiSean"},n.a.createElement("i",{className:"fa-brands fa-square-x-twitter"})),n.a.createElement("a",{href:"https://www.tiktok.com/@dituaes"},n.a.createElement("i",{className:"fa-brands fa-tiktok"})),n.a.createElement("a",{href:"https://wa.me/27747144572"},n.a.createElement("i",{className:"fa-brands fa-square-whatsapp"})),n.a.createElement("a",{href:"https://www.youtube.com/channel/UCuoFjuGWOcWVCUwBiatIrrg"},n.a.createElement("i",{className:"fa-brands fa-square-youtube"})))),n.a.createElement("a",{href:"images/my-cv.pdf",download:!0,className:"btn btn2"},"Download CV"))))};t(22);var p=()=>n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"JourneyThruCode: My Personal Portfolio is a project made, designed, and published entirely by Sean and as such, it cannot be reproduced, duplicated, or republished in any shape or form.")),h=t(2);var b=()=>{const e=Object(h.m)(),a=Object(h.o)(),[t,n]=Object(l.useState)(!0);return Object(l.useEffect)(()=>{console.log("Location:",e.pathname),console.log("Initial Load:",t),t&&"/"!==e.pathname&&(console.log("Redirecting to home"),a("/"),n(!1))},[t,e.pathname,a]),null};t(23);var f=function(){return n.a.createElement(o.a,null,n.a.createElement(i,null),n.a.createElement(b,null)," ",n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/",element:n.a.createElement(s,null)}),n.a.createElement(h.a,{path:"/about",element:n.a.createElement(m,null)}),n.a.createElement(h.a,{path:"/endeavors",element:n.a.createElement(u,null)}),n.a.createElement(h.a,{path:"/catalogue",element:n.a.createElement(d,null)}),n.a.createElement(h.a,{path:"/contact",element:n.a.createElement(E,null)})),n.a.createElement(p,null))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(f,null))}],[[9,1,2]]]);
//# sourceMappingURL=main.d0dec663.chunk.js.map