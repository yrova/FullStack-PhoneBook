(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),u=n.n(o),l=n(2),c=function(e){var t=e.setNewFilter;return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("div",null,"filter shown with",a.a.createElement("input",{onChange:function(e){t(e.target.value.toLowerCase())}}))))},i=n(14),s=n(3),m=n.n(s),f="/api/people",d=function(){return m.a.get(f)},p=function(e){return m.a.post(f,e).then((function(e){return e.data}))},b=function(e,t){return m.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat(f,"/").concat(e)).then((function(t){console.log("Delete Success for number with id: ".concat(e))}))},g=function(e){var t=e.persons,n=e.setPersons,o=e.setMessage,u=Object(r.useState)(""),c=Object(l.a)(u,2),s=c[0],m=c[1],f=Object(r.useState)(""),d=Object(l.a)(f,2),h=d[0],g=d[1];return a.a.createElement("div",null,a.a.createElement("h2",null,"Numbers"),a.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),t.every((function(e){return e.name.toLowerCase().trim()!==s.toLowerCase().trim()})))?p({name:s,number:h}).then((function(e){o({message:"Added ".concat(e.name),type:!0}),setTimeout((function(){o(null)}),5e3),n(t.concat(e)),m(""),g("")})):function(){var e=s.trim(),r="".concat(e," is already added to the phonebook, replace the old number with a new one?");if(window.confirm(r)){var a=t.find((function(e){return e.name===s})),u=Object(i.a)({},a,{number:h});b(u.id,u).then((function(r){o({message:"Changed Number for ".concat(e),type:!0}),setTimeout((function(){o(null)}),5e3),n(t.map((function(e){return e.id!==u.id?e:r})))})).catch((function(r){o({message:"Information of ".concat(e," has already been removed from the server "),type:!1}),setTimeout((function(){o(null)}),5e3),n(t.filter((function(e){return e.id!==a.id})))}))}}()}},a.a.createElement("div",null,"name:",a.a.createElement("input",{type:"text",pattern:"^[\\w'\\-,.][^0-9_!\xa1?\xf7?\xbf/\\\\+=@#$%\u02c6&*(){}|~<>;:[\\]]{3,25}$",value:s,onChange:function(e){m(e.target.value)}})),a.a.createElement("div",null,"number:",a.a.createElement("input",{type:"text",pattern:"[0-9]{10,11}",value:h,onChange:function(e){g(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},E=function(e){var t=e.person,n=e.setPersons,r=e.persons,o=t.name,u=t.number,l=t.id;return a.a.createElement("tr",null,a.a.createElement("td",null,o," ",u," ",a.a.createElement("button",{onClick:function(){window.confirm("Do you really want to delete ".concat(o,"'s number?"))&&h(l).then((function(e){n(r.filter((function(e){return e.name!==o})))}))}},"delete")))},v=function(e){var t=e.persons,n=e.filterBy,r=e.setPersons,o=n?t.filter((function(e){return e.name.toLowerCase().startsWith(n)})):t;return a.a.createElement("div",null,a.a.createElement("h2",null,"Numbers"),a.a.createElement("table",null,a.a.createElement("tbody",null,o.map((function(e){return a.a.createElement(E,{key:e.id,person:e,setPersons:r,persons:t})})))))},y={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},w={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},j=function(e){var t=e.message;if(null===t||null===t.message||null===t.type)return null;var n=t.type?y:w;return a.a.createElement("div",{className:"error",style:n},t.message)},O=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],u=Object(r.useState)(""),i=Object(l.a)(u,2),s=i[0],m=i[1],f=Object(r.useState)({message:null,type:null}),p=Object(l.a)(f,2),b=p[0],h=p[1];return Object(r.useEffect)((function(){d().then((function(e){o(e.data)}))}),[]),a.a.createElement("div",null,a.a.createElement("h2",null,"PhoneBook"),a.a.createElement(j,{message:b}),a.a.createElement(c,{setNewFilter:m}),a.a.createElement(g,{persons:n,setPersons:o,setMessage:h}),a.a.createElement(v,{persons:n,filterBy:s,setPersons:o}))};u.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.33ddeac6.chunk.js.map