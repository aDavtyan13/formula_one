"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[296],{4624:(f,p,o)=>{o.d(p,{g:()=>n});var n=(()=>{return(c=n||(n={})).SEASON="season",c.ROUND="round",c.DRIVERS="drivers",n;var c})()},6997:(f,p,o)=>{o.d(p,{I:()=>t});var n=o(1223),c=o(520),r=o(5299);let t=(()=>{class i{constructor(a,l){this.http=a,this.generateParamsService=l}getRaceDrivers(a,l,g){return this.http.get(`https://ergast.com/api/f1/${a}/${l}/results`,this.generateParamsService.generateParams(g))}}return i.\u0275fac=function(a){return new(a||i)(n.LFG(c.eN),n.LFG(r.A))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac}),i})()},5299:(f,p,o)=>{o.d(p,{A:()=>c});var n=o(1223);let c=(()=>{class r{generateParams(i){return{params:Object.assign({},i)}}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},9327:(f,p,o)=>{o.d(p,{Q:()=>t});var n=o(1223),c=o(9808);function r(i,d){if(1&i){const a=n.EpF();n.TgZ(0,"button",2),n.NdJ("click",function(){const v=n.CHM(a).$implicit;return n.oxw().changePage(v)}),n.TgZ(1,"span"),n._uU(2),n.qZA()()}if(2&i){const a=d.$implicit;n.xp6(2),n.Oqu(a)}}let t=(()=>{class i{constructor(){this.updatedFilterOptionsEmit=new n.vpe,this.pagesIndexes=[]}ngOnInit(){this.initializePages()}initializePages(){const a=Math.ceil(this.pagesCount/this.filterOptions.limit);for(let l=0;l<a;l++)this.pagesIndexes.push(l+1)}changePage(a){this.filterOptions.offset=(a-1)*this.filterOptions.limit,this.updatedFilterOptionsEmit.emit()}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-pagination"]],inputs:{pagesCount:"pagesCount",filterOptions:"filterOptions"},outputs:{updatedFilterOptionsEmit:"updatedFilterOptionsEmit"},decls:2,vars:1,consts:[[1,"table-pagination"],["type","button","class","btn btn-success btn-icon",3,"click",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success","btn-icon",3,"click"]],template:function(a,l){1&a&&(n.TgZ(0,"div",0),n.YNc(1,r,3,1,"button",1),n.qZA()),2&a&&(n.xp6(1),n.Q6J("ngForOf",l.pagesIndexes))},directives:[c.sg],encapsulation:2}),i})()},8313:(f,p,o)=>{o.d(p,{w:()=>c});var n=o(1223);let c=(()=>{class r{constructor(){this.isOpen=!1}toggleOpen(i){i.target.classList.contains("js-clickable-btn")||(this.isOpen=!this.isOpen)}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275dir=n.lG2({type:r,selectors:[["","dropdown",""]],hostVars:2,hostBindings:function(i,d){1&i&&n.NdJ("click",function(l){return d.toggleOpen(l)}),2&i&&n.ekj("open",d.isOpen)}}),r})()},268:(f,p,o)=>{o.d(p,{OP:()=>v});var n=o(9808),r=(o(8313),o(6997)),i=(o(9327),o(1223));const l=[n.ez],g=[r.I];let v=(()=>{class _{}return _.\u0275fac=function(h){return new(h||_)},_.\u0275mod=i.oAB({type:_}),_.\u0275inj=i.cJS({providers:[...g],imports:[[...l],n.ez]}),_})()},8296:(f,p,o)=>{o.r(p),o.d(p,{MainModule:()=>b});var n=o(268),c=o(5767),r=o(4624),t=o(1223),i=o(520),d=o(5299);let a=(()=>{class e{constructor(s,m){this.http=s,this.generateParamsService=m}getSeasons(s){return this.http.get("https://ergast.com/api/f1/seasons",this.generateParamsService.generateParams(s))}}return e.\u0275fac=function(s){return new(s||e)(t.LFG(i.eN),t.LFG(d.A))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var l=o(8313),g=o(9808);function v(e,u){if(1&e){const s=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const S=t.CHM(s).$implicit;return t.oxw().selectYear(null==S?null:S.season)}),t._uU(1),t.qZA()}if(2&e){const s=u.$implicit;t.xp6(1),t.hij(" ",null==s?null:s.season," ")}}function _(e,u){1&e&&(t.TgZ(0,"div",12),t._UZ(1,"div",13),t.qZA())}function O(e,u){if(1&e){const s=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){return t.CHM(s),t.oxw().loadMoreYears()}),t.YNc(1,_,2,0,"div",11),t._uU(2," Load more"),t.qZA()}if(2&e){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",s.isLoading)}}let h=(()=>{class e{constructor(s,m){this.route=s,this.seasonsApiService=m,this.filterOptions={limit:10,offset:0},this.isLoading=!1,this.isLoadMoreAvailable=!0}ngOnInit(){this.getYears()}ngOnDestroy(){this.subscription.unsubscribe()}getYears(){this.isLoading=!0,this.subscription=this.seasonsApiService.getSeasons(this.filterOptions).subscribe(s=>{this.isLoading=!1,this.seasons?(this.seasons.push(...s.MRData.SeasonTable.Seasons),this.filterOptions.offset+this.filterOptions.limit>this.seasons.length&&(this.isLoadMoreAvailable=!1)):this.seasons=s.MRData.SeasonTable.Seasons})}selectYear(s){this.route.navigate(s?[`/${r.g.SEASON}`,s]:[`/${r.g.SEASON}`,(new Date).getFullYear()])}loadMoreYears(){this.filterOptions.offset+=10,this.getYears()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(c.F0),t.Y36(a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-select-date"]],decls:13,vars:2,consts:[[1,"main-block"],[1,"main-block--header"],[1,"main-block--actions"],["type","button",1,"btn","btn-success","me-4",3,"click"],["dropdown","",1,"dropdown"],["type","button",1,"btn","btn-outline-success","dropdown-toggle"],[1,"dropdown-menu"],["type","button","class","btn btn-success",3,"click",4,"ngFor","ngForOf"],["class","load-more js-clickable-btn",3,"click",4,"ngIf"],["type","button",1,"btn","btn-success",3,"click"],[1,"load-more","js-clickable-btn",3,"click"],["class","loader-block",4,"ngIf"],[1,"loader-block"],[1,"loader","loader--sm"]],template:function(s,m){1&s&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Formula 1"),t.qZA(),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return m.selectYear()}),t._uU(5," Current year "),t.qZA(),t.TgZ(6,"div",4)(7,"button",5),t._uU(8," Choose year "),t.qZA(),t.TgZ(9,"div",6)(10,"div"),t.YNc(11,v,2,1,"button",7),t.YNc(12,O,3,1,"div",8),t.qZA()()()()()),2&s&&(t.xp6(11),t.Q6J("ngForOf",m.seasons),t.xp6(1),t.Q6J("ngIf",m.isLoadMoreAvailable))},directives:[l.w,g.sg,g.O5],encapsulation:2}),e})();const D=[{path:"",component:h},{path:`${r.g.SEASON}/:year`,loadChildren:()=>o.e(507).then(o.bind(o,9507)).then(e=>e.SeasonModule)}];let E=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(D)],c.Bz]}),e})();const C=[{path:"",component:h}];let P=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(C)],c.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[a],imports:[[n.OP,P]]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[n.OP,A,E]]}),e})()}}]);