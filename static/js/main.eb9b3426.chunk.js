(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(10);var i=a(6),n=a.n(i),c=a(8),s=a(2),l=(a(15),a(1)),o=(a(16),new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/)),r=(a(17),a(0)),m=Object(l.memo)((function(e){var t=e.value,a=e.name,i=e.isValid,n=e.onChange,c=e.onBlur,s=Object(l.useMemo)((function(){return a.charAt(0).toUpperCase()+a.slice(1)}),[]);return Object(r.jsxs)("label",{htmlFor:a,className:"FormInput__label",children:[s,Object(r.jsx)("input",{className:"FormInput__input",type:"text",name:a,value:t,placeholder:"Enter your ".concat(a,"..."),autoComplete:"off",onChange:n,onBlur:c,style:{borderColor:i?"red":"initial"}}),i&&Object(r.jsx)("p",{className:"FormInput__error",children:"".concat(s," is not valid!")})]})})),d=Object(l.memo)((function(e){var t=e.onAdd,a=Object(l.useState)(""),i=Object(s.a)(a,2),n=i[0],c=i[1],d=Object(l.useState)(""),b=Object(s.a)(d,2),j=b[0],u=b[1],h=Object(l.useState)(""),O=Object(s.a)(h,2),p=O[0],g=O[1],v=Object(l.useState)(""),f=Object(s.a)(v,2),w=f[0],M=f[1],x=Object(l.useState)(""),N=Object(s.a)(x,2),_=N[0],B=N[1],k=Object(l.useState)(!1),C=Object(s.a)(k,2),I=C[0],y=C[1],U=Object(l.useState)(!1),T=Object(s.a)(U,2),S=T[0],F=T[1],z=Object(l.useState)(!1),V=Object(s.a)(z,2),A=V[0],D=V[1],Y=Object(l.useState)(!1),Z=Object(s.a)(Y,2),X=Z[0],E=Z[1],L=function(e){return o.test(e)},J=Boolean(n)&&Boolean(_)&&L(p)&&L(w),R=Object(l.useCallback)((function(e){var t=e.target;y(!1),c(t.value)}),[]),G=Object(l.useCallback)((function(e){e.target.value||y(!0)}),[]),Q=Object(l.useCallback)((function(e){var t=e.target;F(!1),g(t.value)}),[]),W=Object(l.useCallback)((function(e){var t=e.target;L(t.value)||F(!0)}),[]),$=Object(l.useCallback)((function(e){var t=e.target;D(!1),M(t.value)}),[]),H=Object(l.useCallback)((function(e){var t=e.target;L(t.value)||D(!0)}),[]),q=Object(l.useCallback)((function(e){var t=e.target;E(!1),B(t.value)}),[]),K=Object(l.useCallback)((function(e){e.target.value||E(!0)}),[]);return Object(r.jsxs)("form",{className:"MovieForm__form",action:"#",method:"post",onSubmit:function(e){e.preventDefault(),J&&(t({title:n,description:j,imgUrl:p,imdbUrl:w,imdbId:_}),c(""),u(""),g(""),M(""),B(""))},children:[Object(r.jsx)(m,{value:n,name:"title",isValid:I,onChange:R,onBlur:G}),Object(r.jsxs)("label",{htmlFor:"description",className:"MovieForm__description-label",children:["Description",Object(r.jsx)("textarea",{className:"MovieForm__description-input",name:"description",placeholder:"Enter your description...",value:j,onChange:function(e){var t=e.target;u(t.value)}})]}),Object(r.jsx)(m,{value:p,name:"imgUrl",isValid:S,onChange:Q,onBlur:W}),Object(r.jsx)(m,{value:w,name:"ImdbUrl",isValid:A,onChange:$,onBlur:H}),Object(r.jsx)(m,{value:_,name:"ImdbId",isValid:X,onChange:q,onBlur:K}),Object(r.jsx)("button",{className:"MovieForm__button",type:"submit",disabled:!J,children:"Submit"})]})})),b=a(9),j=(a(19),a(20),function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:i,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t})})]}),Object(r.jsxs)("div",{className:"content",children:[a,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:n,children:"IMDB"})]})]})]})}),u=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},h=a(7),O=Object(l.memo)((function(){var e=Object(l.useState)(h),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(l.useCallback)((function(e){i((function(t){return[].concat(Object(c.a)(t),[e])}))}),[]);return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(u,{movies:a})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(d,{onAdd:n})})]})}));n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.eb9b3426.chunk.js.map