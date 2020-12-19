(this.webpackJsonpmoviesdb=this.webpackJsonpmoviesdb||[]).push([[0],{27:function(A,e){A.exports={apiKey:"ccaef03a"}},45:function(A,e,t){},46:function(A,e,t){},69:function(A,e,t){"use strict";t.r(e);var c=t(1),i=t(0),a=t.n(i),n=t(19),s=t.n(n),r=(t(45),t(46),t(15)),o=t(37),l=t(38),g=t(14),h="SEARCH_MOVIE",j="FETCH_MOVIES",I="FETCH_MOVIE",B="LOADING",d={text:"",movies:[],loading:!1,movie:[]},Q=Object(r.combineReducers)({movies:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(g.a)(Object(g.a)({},A),{},{text:e.payload,loading:!1});case j:return Object(g.a)(Object(g.a)({},A),{},{movies:e.payload,loading:!1});case I:return Object(g.a)(Object(g.a)({},A),{},{movie:e.payload,loading:!1});case B:return Object(g.a)(Object(g.a)({},A),{},{loading:!0});default:return A}}}),C=[o.a],b=Object(r.createStore)(Q,{},Object(l.composeWithDevTools)(r.applyMiddleware.apply(void 0,C))),m=t(8),x=t(16),u=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("nav",{className:"navbar navbar-light bg-dark mb-5",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"navbar-header",children:Object(c.jsx)(x.b,{className:"navbar-brand text-white text-lg brand-text",to:"/",children:"MoviesDB"})}),Object(c.jsx)("ul",{className:"navbar-nav ml-auto text-light d-inline-block",children:Object(c.jsx)("li",{className:"nav-item d-inline-block mr-4",children:Object(c.jsx)("i",{className:"fab fa-imdb fa-3x",id:"imdb-logo"})})})]})})})};var p=function(){return Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsxs)("div",{className:"footer p-3 mt-4 text-center bg-dark text-light",children:["Developed By :-",Object(c.jsx)("span",{className:"text-warning font-weight-normal",children:"Sushant Verma"}),", Using ",Object(c.jsx)("i",{className:"fab fa-react"})," React JS & Redux JS integrated with external movies data API",Object(c.jsx)("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer",children:"-OMDB."})]})})})},E=t(10),w=t(11),k=t(13),O=t(12),v=t(26),J=t.n(v),M=t(27),F=function(){return function(A){A({type:B})}},G=function(A){Object(k.a)(t,A);var e=Object(O.a)(t);function t(){var A;Object(E.a)(this,t);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(A=e.call.apply(e,[this].concat(i))).onChange=function(e){A.props.searchMovie(e.target.value)},A.onSubmit=function(e){e.preventDefault(),A.props.fetchMovies(A.props.text),A.props.setLoading()},A}return Object(w.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"search jumbotron jumbotron-fluid mt-5 text-center",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("h1",{className:"display-4 mb-3",children:[Object(c.jsx)("i",{className:"fa fa-search"})," Search for a movie ,TV series .."]}),Object(c.jsxs)("form",{id:"searchForm",onSubmit:this.onSubmit,children:[Object(c.jsx)("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:this.onChange}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary btn-bg mt-3",children:"Search"})]})]})})}}]),t}(i.Component),y=Object(m.b)((function(A){return{text:A.movies.text}}),{searchMovie:function(A){return function(e){e({type:h,payload:A})}},fetchMovies:function(A){return function(e){J.a.get("https://www.omdbapi.com/?s=".concat(A,"&apikey=").concat(M.apiKey)).then((function(A){return e({type:j,payload:A.data.Search})})).catch((function(A){return console.log(A)}))}},setLoading:F})(G),K=function(A){Object(k.a)(t,A);var e=Object(O.a)(t);function t(){return Object(E.a)(this,t),e.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){var A=this.props.movie;return Object(c.jsx)("div",{className:"col-md-3 mb-5",children:Object(c.jsxs)("div",{className:"card card-body bg-dark text-center h-100",children:[Object(c.jsx)("img",{className:"w-100 mb-2",src:A.Poster,alt:"Movie Cover"}),Object(c.jsxs)("h5",{className:"text-light card-title",children:[A.Title," - ",A.Year]}),Object(c.jsxs)(x.b,{className:"btn btn-primary",to:"/movie/"+A.imdbID,children:["Movie Details",Object(c.jsx)("i",{className:"fas fa-chevron-right"})]})]})})}}]),t}(i.Component),R=Object(m.b)((function(A){return{}}))(K),S=function(A){Object(k.a)(t,A);var e=Object(O.a)(t);function t(){return Object(E.a)(this,t),e.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){var A,e=this.props.movies;return void 0===e?Object(c.jsx)("div",{children:Object(c.jsx)("center",{children:Object(c.jsx)("h2",{children:"No Results found."})})}):(A=e.length>0?e.map((function(A,e){return Object(c.jsx)(R,{movie:A},e)})):null,Object(c.jsx)("div",{className:"row",children:A}))}}]),t}(i.Component),Y=Object(m.b)((function(A){return{movies:A.movies.movies}}))(S);var D=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},H=function(A){Object(k.a)(t,A);var e=Object(O.a)(t);function t(){return Object(E.a)(this,t),e.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){var A=this.props.loading;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(y,{}),A?Object(c.jsx)(D,{}):Object(c.jsx)(Y,{})]})}}]),t}(i.Component),q=Object(m.b)((function(A){return{loading:A.movies.loading}}))(H),f=function(A){Object(k.a)(t,A);var e=Object(O.a)(t);function t(){return Object(E.a)(this,t),e.apply(this,arguments)}return Object(w.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var A=this.props,e=A.loading,t=A.movie,i=Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-4 card card-body",children:Object(c.jsx)("img",{src:t.Poster,className:"thumbnail",alt:"Poster"})}),Object(c.jsxs)("div",{className:"col-md-8",children:[Object(c.jsx)("h2",{className:"mb-4",children:t.Title}),Object(c.jsxs)("ul",{className:"list-group",children:[Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("strong",{children:"Genre:"})," ",t.Genre]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("strong",{children:"Released:"})," ",t.Released]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("strong",{children:"Rated:"})," ",t.Rated]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("strong",{children:"IMDB Rating:"})," ",t.imdbRating]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("strong",{children:"Director:"})," ",t.Director]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("strong",{children:"Writer:"})," ",t.Writer]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("strong",{children:"Actors:"})," ",t.Actors]})]})]})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"card card-body bg-dark my-5 text-light",children:Object(c.jsxs)("div",{className:"col-md-12",children:[Object(c.jsx)("h3",{children:"About "}),t.Plot,Object(c.jsx)("hr",{}),Object(c.jsx)("a",{href:"https://www.imdb.com/title/"+t.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"View on IMDB"}),Object(c.jsx)(x.b,{to:"/",className:"btn btn-default text-light",children:"Go Back To Search"})]})})})]}),a=e?Object(c.jsx)(D,{}):i;return Object(c.jsx)("div",{children:a})}}]),t}(i.Component),N=Object(m.b)((function(A){return{loading:A.movies.loading,movie:A.movies.movie}}),{fetchMovie:function(A){return function(e){J.a.get("https://www.omdbapi.com/?i=".concat(A,"&apikey=").concat(M.apiKey)).then((function(A){return e({type:I,payload:A.data})})).catch((function(A){return console.log(A)}))}},setLoading:F})(f),U=t(3);var V=function(){return Object(c.jsx)(m.a,{store:b,children:Object(c.jsx)(x.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(U.a,{exact:!0,path:"/",component:q}),Object(c.jsx)(U.a,{exact:!0,path:"/movie/:id",component:N}),Object(c.jsx)(p,{})]})})})},L=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,n=e.getTTFB;t(A),c(A),i(A),a(A),n(A)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),L()}},[[69,1,2]]]);
//# sourceMappingURL=main.85761031.chunk.js.map