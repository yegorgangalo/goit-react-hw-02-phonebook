(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{1:function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__OrlO3",labelBlock:"ContactForm_labelBlock__f81Qb",radioBlock:"ContactForm_radioBlock__d6RVU",title:"ContactForm_title__3MqSl",inputBox:"ContactForm_inputBox__1nc3p",button:"ContactForm_button__1MLZK"}},10:function(e,t,n){e.exports={contactList:"ContactList_contactList__3MzlG",item:"ContactList_item__3YsZK"}},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),i=n(12),o=n.n(i),s=(n(18),n(11)),l=n(7),u=n(3),b=n(4),m=n(6),d=n(5),j=n(21),h=n(1),p=n.n(h),x=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:"",experience:"",licence:!1},e.nameInputID=Object(j.a)(),e.numberInputID=Object(j.a)(),e.handleInputChange=function(t){var n=t.target,c=t.code,a=n.name,r=n.value,i=n.type,o=n.checked;"Enter"!==c?e.setState(Object(l.a)({},a,"checkbox"===i?o:r)):e.setState(Object(l.a)({},a,"checkbox"===i?!o:r))},e.addContact=function(t){t.preventDefault();var n=e.state,c=n.name,a=n.number,r=n.experience;e.props.contacts.some((function(e){return e.name===c||e.number===a}))?alert("Contact with such ".concat(c," or ").concat(a," is already in Phonebook")):(e.props.onSubmit({id:Object(j.a)(),name:c,number:a,experience:r}),e.reset())},e.reset=function(){e.setState({name:"",number:"",experience:"",licence:!1})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleInputChange);var e=document.querySelector("form");e.addEventListener("keydown",(function(t){var n=e.querySelector('button[type="submit"]');"Enter"===t.code&&t.target!==n&&t.preventDefault()}))}},{key:"render",value:function(){var e=this.handleInputChange,t=this.addContact,n=this.nameInputID,a=this.numberInputID,r=this.state,i=r.name,o=r.number,s=r.experience,l=r.licence;return Object(c.jsxs)("form",{onSubmit:t,className:p.a.contactForm,children:[Object(c.jsxs)("label",{className:p.a.labelBlock,htmlFor:n,children:[Object(c.jsx)("h3",{className:p.a.title,children:"Name"}),Object(c.jsx)("input",{id:n,type:"text",name:"name",value:i,onChange:e})]}),Object(c.jsxs)("label",{className:p.a.labelBlock,htmlFor:a,children:[Object(c.jsx)("h3",{className:p.a.title,children:"Number"}),Object(c.jsx)("input",{id:a,type:"text",name:"number",value:o,onChange:e})]}),Object(c.jsxs)("div",{className:"".concat(p.a.labelBlock," ").concat(p.a.radioBlock),children:[Object(c.jsx)("h3",{className:p.a.title,children:"Your Level"}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",className:p.a.inputBox,name:"experience",value:"junior",onChange:e,checked:"junior"===s}),"junior"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",className:p.a.inputBox,name:"experience",value:"middle",onChange:e,checked:"middle"===s}),"middle"]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",className:p.a.inputBox,name:"experience",value:"senior",onChange:e,checked:"senior"===s}),"senior"]})]}),Object(c.jsxs)("label",{className:p.a.labelBlock,children:[Object(c.jsx)("input",{type:"checkbox",className:p.a.inputBox,name:"licence",onChange:e,checked:l}),"Agree with Licence"]}),Object(c.jsx)("button",{type:"submit",className:p.a.button,disabled:!l||""===i||""===o||""===s,children:"Add Contact"})]})}}]),n}(a.Component),O=n(9),f=n.n(O);var v=function(e){var t=e.value,n=e.onChange;return Object(c.jsxs)("div",{className:f.a.labelBlock,children:[Object(c.jsx)("h4",{className:f.a.title,children:"Find contacts by name, number or level"}),Object(c.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})},C=n(10),k=n.n(C),_=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).filterContacts=function(){var t=e.props,n=t.contacts,c=t.filter;return n.filter((function(e){return Object.values(e).some((function(e){return e.toLowerCase().includes(c)}))}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.filterContacts();return Object(c.jsx)("ul",{className:k.a.contactList,children:t.map((function(t){var n=t.id,a=t.name,r=t.number,i=t.experience;return Object(c.jsxs)("li",{className:k.a.item,children:[Object(c.jsxs)("span",{children:[a,":"]}),Object(c.jsxs)("span",{children:[r,","]}),Object(c.jsx)("span",{children:i}),Object(c.jsx)("button",{type:"button",onClick:function(){return e.props.deleteContact(n)},children:"Delete"})]},n)}))})}}]),n}(a.Component),y=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={contacts:e.props.contacts,filter:""},e.changeFilter=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(l.a)({},c,a.toLowerCase()))},e.formSubmitHandler=function(t){e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[t])}}))},e.deleteContact=function(t){e.setState((function(e){var n=e.contacts.filter((function(e){return e.id!==t}));return{contacts:Object(s.a)(n)}}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"title",children:"Phonebook"}),Object(c.jsx)(x,{onSubmit:this.formSubmitHandler,contacts:t}),Object(c.jsx)("h2",{className:"title",children:"Contacts"}),Object(c.jsx)(v,{value:n,onChange:this.changeFilter}),Object(c.jsx)(_,{contacts:t,filter:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component);y.defaultProps={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56",experience:"junior"},{id:"id-2",name:"Hermione Kline",number:"443-89-12",experience:"middle"},{id:"id-3",name:"Eden Clements",number:"645-17-79",experience:"junior"},{id:"id-4",name:"Annie Copeland",number:"227-91-26",experience:"senior"},{id:"id-5",name:"Ann Hits",number:"227-91-46",experience:"junior"},{id:"id-6",name:"Ed Clirence",number:"217-01-46",experience:"middle"}]};var g=y,N=document.querySelector("#root");o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),N)},9:function(e,t,n){e.exports={labelBlock:"Filter_labelBlock__17eMJ",title:"Filter_title__mtLuE"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c8e984b1.chunk.js.map