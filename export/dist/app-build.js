"bundle";!function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.7.js",[],function(){return'<template> <require from="nav-bar.html"></require> <nav-bar router.bind="router"></nav-bar> <div class="page-host"> <router-view></router-view> </div> </template>'})}(),System.register("app.js",[],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("App",d=function(){function a(){c(this,a)}return a.prototype.configureRouter=function(a,b){a.title="Aurelia",a.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=b},a}()),a("App",d)}}}),System.register("blur-image.js",["aurelia-framework"],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b,c,d,f,g){if(!(isNaN(g)||1>g)){g|=0;var h,i=a.getContext("2d");try{h=i.getImageData(b,c,d,f)}catch(j){throw new Error("unable to access image data: "+j)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=h.data,L=g+g+1,M=d-1,N=f-1,O=g+1,P=O*(O+1)/2,Q=new e,R=Q;for(o=1;L>o;o++)if(R=R.next=new e,o==O)var S=R;R.next=Q;var T=null,U=null;s=r=0;var V=k[g],W=l[g];for(n=0;f>n;n++){for(B=C=D=E=t=u=v=w=0,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;O>o;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(o=1;O>o;o++)p=r+((o>M?M:o)<<2),t+=(R.r=F=K[p])*(J=O-o),u+=(R.g=G=K[p+1])*J,v+=(R.b=H=K[p+2])*J,w+=(R.a=I=K[p+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next;for(T=Q,U=S,m=0;d>m;m++)K[r+3]=I=w*V>>W,0!=I?(I=255/I,K[r]=(t*V>>W)*I,K[r+1]=(u*V>>W)*I,K[r+2]=(v*V>>W)*I):K[r]=K[r+1]=K[r+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=s+((p=m+g+1)<M?p:M)<<2,B+=T.r=K[p],C+=T.g=K[p+1],D+=T.b=K[p+2],E+=T.a=K[p+3],t+=B,u+=C,v+=D,w+=E,T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=4;s+=d}for(m=0;d>m;m++){for(C=D=E=B=u=v=w=t=0,r=m<<2,x=O*(F=K[r]),y=O*(G=K[r+1]),z=O*(H=K[r+2]),A=O*(I=K[r+3]),t+=P*F,u+=P*G,v+=P*H,w+=P*I,R=Q,o=0;O>o;o++)R.r=F,R.g=G,R.b=H,R.a=I,R=R.next;for(q=d,o=1;g>=o;o++)r=q+m<<2,t+=(R.r=F=K[r])*(J=O-o),u+=(R.g=G=K[r+1])*J,v+=(R.b=H=K[r+2])*J,w+=(R.a=I=K[r+3])*J,B+=F,C+=G,D+=H,E+=I,R=R.next,N>o&&(q+=d);for(r=m,T=Q,U=S,n=0;f>n;n++)p=r<<2,K[p+3]=I=w*V>>W,I>0?(I=255/I,K[p]=(t*V>>W)*I,K[p+1]=(u*V>>W)*I,K[p+2]=(v*V>>W)*I):K[p]=K[p+1]=K[p+2]=0,t-=x,u-=y,v-=z,w-=A,x-=T.r,y-=T.g,z-=T.b,A-=T.a,p=m+((p=n+O)<N?p:N)*d<<2,t+=B+=T.r=K[p],u+=C+=T.g=K[p+1],v+=D+=T.b=K[p+2],w+=E+=T.a=K[p+3],T=T.next,x+=F=U.r,y+=G=U.g,z+=H=U.b,A+=I=U.a,B-=F,C-=G,D-=H,E-=I,U=U.next,r+=d}i.putImageData(h,b,c)}}function e(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function f(a,b){var c=a.width,e=a.height,f=a.getContext("2d");f.drawImage(b,0,0,c,e),d(a,0,0,c,e,m)}var g,h,i,j,k,l,m;return{setters:[function(a){g=a.inject}],execute:function(){a("BlurImageCustomAttribute",(h=g(Element),j=h(i=function(){function a(b){c(this,a),this.element=b}return a.prototype.valueChanged=function(a){var b=this;a.complete?f(this.element,a):a.onload=function(){return f(b.element,a)}},a}())||i)),a("BlurImageCustomAttribute",j),k=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],l=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24],m=40}}}),function(){var a=System.amdDefine;a("child-router.html!github:systemjs/plugin-text@0.0.7.js",[],function(){return'<template> <section class="au-animate"> <h2>${heading}</h2> <div> <div class="col-md-2"> <ul class="well nav nav-pills nav-stacked"> <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"> <a href.bind="row.href">${row.title}</a> </li> </ul> </div> <div class="col-md-10" style="padding:0"> <router-view></router-view> </div> </div> </section> </template>'})}(),System.register("child-router.js",[],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("ChildRouter",d=function(){function a(){c(this,a),this.heading="Child Router"}return a.prototype.configureRouter=function(a,b){a.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"users",name:"users",moduleId:"users",nav:!0,title:"Github Users"},{route:"child-router",name:"child-router",moduleId:"child-router",nav:!0,title:"Child Router"}]),this.router=b},a}()),a("ChildRouter",d)}}}),System.register("main.js",[],function(a,b){return{setters:[],execute:function(){function b(a){a.use.standardConfiguration().developmentLogging().plugin("aurelia-materialize-bridge",function(a){return a.useAll()}),a.start().then(function(){return a.setRoot()})}a("configure",b)}}}),function(){var a=System.amdDefine;a("nav-bar.html!github:systemjs/plugin-text@0.0.7.js",[],function(){return'<template bindable="router"> <nav class="navbar navbar-default navbar-fixed-top" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse"> <span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#"> <i class="fa fa-home"></i> <span>${router.title}</span> </a> </div> <div class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"> <ul class="nav navbar-nav"> <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"> <a data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse.in" href.bind="row.href">${row.title}</a> </li> </ul> <ul class="nav navbar-nav navbar-right"> <li class="loader" if.bind="router.isNavigating"> <i class="fa fa-spinner fa-spin fa-2x"></i> </li> </ul> </div> </nav> </template>'})}(),function(){var a=System.amdDefine;a("users.html!github:systemjs/plugin-text@0.0.7.js",[],function(){return'<template> <require from="blur-image"></require> <section class="au-animate"> <h2>${heading}</h2> <div class="row au-stagger"> <div class="col-sm-6 col-md-3 card-container au-animate" repeat.for="user of users"> <div class="card"> <canvas class="header-bg" width="250" height="70" blur-image.bind="image"></canvas> <div class="avatar"> <img src.bind="user.avatar_url" crossorigin ref="image"> </div> <div class="content"> <p class="name">${user.login}</p> <p><a target="_blank" class="btn btn-default" href.bind="user.html_url">Contact</a></p> </div> </div> </div> </div> </section> </template>'})}(),System.register("users.js",["aurelia-framework","aurelia-fetch-client","fetch"],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h;return{setters:[function(a){d=a.inject},function(a){e=a.HttpClient},function(a){}],execute:function(){a("Users",(f=d(e),h=f(g=function(){function a(b){c(this,a),this.heading="Github Users",this.users=[],b.configure(function(a){a.useStandardConfiguration().withBaseUrl("https://api.github.com/")}),this.http=b}return a.prototype.activate=function(){var a=this;return this.http.fetch("users").then(function(a){return a.json()}).then(function(b){return a.users=b})},a}())||g)),a("Users",h)}}}),function(){var a=System.amdDefine;a("welcome.html!github:systemjs/plugin-text@0.0.7.js",[],function(){return'<template> <section class="au-animate"> <h2>${heading}</h2> <form role="form" submit.delegate="submit()"> <div class="form-group"> <label for="fn">First Name</label> <input value.bind="firstName" class="form-control" id="fn" placeholder="first name"> </div> <div class="form-group"> <label for="ln">Last Name</label> <input value.bind="lastName" class="form-control" id="ln" placeholder="last name"> </div> <div class="form-group"> <label>Full Name</label> <p class="help-block">${fullName | upper}</p> </div> <button type="submit" class="btn btn-default">Submit</button> </form> </section> </template>'})}(),System.register("welcome.js",[],function(a,b){function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f;return{setters:[],execute:function(){d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),a("Welcome",e=function(){function a(){c(this,a),this.heading="Welcome to the Aurelia Navigation App!",this.firstName="John",this.lastName="Doe",this.previousValue=this.fullName}return a.prototype.submit=function(){this.previousValue=this.fullName,alert("Welcome, "+this.fullName+"!")},a.prototype.canDeactivate=function(){return this.fullName!==this.previousValue?confirm("Are you sure you want to leave?"):void 0},d(a,[{key:"fullName",get:function(){return this.firstName+" "+this.lastName}}]),a}()),a("Welcome",e),a("UpperValueConverter",f=function(){function a(){c(this,a)}return a.prototype.toView=function(a){return a&&a.toUpperCase()},a}()),a("UpperValueConverter",f)}}});