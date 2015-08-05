/*
 * SystemJS v0.18.6
 */
!function(e){function t(e,t){var n;if(e instanceof Error){var n=new Error(e.message,e.fileName,e.lineNumber);p?(n.message=e.message+"\n	"+t,n.stack=e.stack):(n.message=e.message,n.stack=e.stack+"\n	"+t)}else n=e+"\n	"+t;return n}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},v(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function d(e,t){var n,r="",a=0;for(var o in e){var d=o.split("*");if(d.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==d.length){if(t==o){r=o;break}}else{var s=o.split("/").length;s>=a&&t.substr(0,d[0].length)==d[0]&&t.substr(t.length-d[1].length)==d[1]&&(a=s,r=o,n=t.substr(d[0].length,t.length-d[1].length-d[0].length))}}var i=e[r]||t;return n&&(i=i.replace("*",n)),i}function s(){}function i(){o.call(this),E.call(this)}function l(){}function u(e,t){i.prototype[e]=t(i.prototype[e])}function c(e){E=e(E||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=g.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}var m="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,p="undefined"!=typeof window&&"undefined"!=typeof document,h="undefined"!=typeof process&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var v,g=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(v=Object.defineProperty)}catch(e){v=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var y;if("undefined"!=typeof document&&document.getElementsByTagName){if(y=document.baseURI,!y){var w=document.getElementsByTagName("base");y=w[0]&&w[0].href||window.location.href}y=y.split("#")[0].split("?")[0],y=y.substr(0,y.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)y="file://"+(h?"/":"")+process.cwd()+"/",h&&(y=y.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");y=e.location.href}var x=e.URLPolyfill||e.URL;v(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function d(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function s(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),i(e,n),n})}function i(e,t){l(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function l(e,t,n){u(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function u(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++k+">",r.isDeclarative=!0,j.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(s(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,d=n.length;d>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)y(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,d=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var s,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a)return s=r.loads[c],"translate"!=d||s.source||(s.address=e.moduleAddress,u(r,s,Promise.resolve(e.moduleSource))),s.linkSets[0].done.then(function(){t(s)});var p=o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==d?i(r,p):"fetch"==d?l(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,u(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var d=0,s=a.loads.length;s>d;d++)if(a.loads[d].name==o){m(e,a.loads[d]);break}}}}function p(e){var t=!1;try{S(e,function(n,r){y(e,n,r),t=!0})}catch(n){y(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:O({}),evaluated:!0}:{module:O({})},t.status="linked",w(e.loader,t)}return e.resolve(n)}var d=p(e);d||e.resolve(n)}}function y(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var d=e.loads[o],s=0;s<d.dependencies.length;s++){var i=d.dependencies[s];if(i.value==n.name){r=t(r,"Error loading "+n.name+' as "'+i.key+'" from '+d.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var l=e.loads.concat([]),o=0,u=l.length;u>o;o++){var n=l[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==g.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=g.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=g.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function w(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=g.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=g.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function x(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function b(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function S(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],d=x(e,o,t);if(!d)return;o.module={name:o.name,module:d},o.status="linked",w(n,o)}}function E(e,t){return t.module.module}function P(){}function j(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var k=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return b(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(P(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(P(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||b(r,e,d(t,e,{}).then(function(n){return delete t.importPromises[e],E(t,n)}))})},load:function(e,t){var n=this._loader;return n.modules[e]?(P(n.modules[e],[],n),Promise.resolve(n.modules[e].module)):n.importPromises[e]||b(this,e,d(n,e,{}).then(function(t){return delete n.importPromises[e],E(n,t)}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),d=this._loader,s=r.done.then(function(){return E(d,n)});return u(d,n,a),s},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t,n=new r;if(Object.getOwnPropertyNames&&null!=e)t=Object.getOwnPropertyNames(e);else{t=[];for(var a in e)t.push(a)}for(var o=0;o<t.length;o++)(function(t){v(n,t,{configurable:!1,enumerable:!0,get:function(){return e[t]}})})(t[o]);return Object.preventExtensions&&Object.preventExtensions(n),n},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var O=a.prototype.newModule}();var b;s.prototype=a.prototype,o.prototype=new s;var S=/^([^\/]+:\/\/|\/)/;o.prototype.normalize=function(e,t,n){return e=e.match(S)||"."==e[0]?new x(e,t||y).href:new x(d(this.paths,e),y).href},o.prototype.locate=function(e){return e.name},o.prototype.instantiate=function(t){var r=this;return Promise.resolve(r.normalize(r.transpiler)).then(function(a){return t.address===a?{deps:[],execute:function(){var a=e.System,o=e.Reflect.Loader;return n("(function(require,exports,module){"+t.source+"})();",t.address,e),e.System=a,e.Reflect.Loader=o,r.newModule({"default":e[r.transpiler],__useDefault:!0})}}:void 0})},l.prototype=o.prototype,i.prototype=new l;var E;!function(){function t(e,t){return new Promise(function(n,r){try{importScripts(t.address)}catch(a){r(a)}e.onScriptLoad(t),t.metadata.registered||r(t.address+" did not call System.register or AMD define"),n("")})}if("undefined"!=typeof document)var n=document.getElementsByTagName("head")[0];var r;i.prototype.onScriptLoad=function(){e.System=r},u("fetch",function(a){return function(o){var d=this;return o.metadata.scriptLoad&&(p||m)?m?t(d,o):new Promise(function(t,a){function s(e){u.readyState&&"loaded"!=u.readyState&&"complete"!=u.readyState||(l(),d.onScriptLoad(o),o.metadata.registered||a(o.address+" did not call System.register or AMD define"),t(""))}function i(e){l(),a(new Error("Unable to load script "+o.address))}function l(){u.detachEvent?u.detachEvent("onreadystatechange",s):(u.removeEventListener("load",s,!1),u.removeEventListener("error",i,!1)),n.removeChild(u)}var u=document.createElement("script");u.async=!0,u.attachEvent?u.attachEvent("onreadystatechange",s):(u.addEventListener("load",s,!1),u.addEventListener("error",i,!1)),r=e.System,e.System=d,u.src=o.address,n.appendChild(u)}):a.call(this,o)}})}(),u("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,this.has("@@amd-helpers")&&this.get("@@amd-helpers").createDefine(this),e.call(this,t)}}),u("onScriptLoad",function(e){return function(t){if(e.call(this,t),this.has("@@amd-helpers")){var n=this.get("@@amd-helpers").lastModule;(n.anonDefine||n.isBundle)&&(t.metadata.format="defined",t.metadata.registered=!0,n.isBundle=!1),n.anonDefine&&(t.metadata.deps=t.metadata.deps?t.metadata.deps.concat(n.anonDefine.deps):n.anonDefine.deps,t.metadata.execute=n.anonDefine.execute,n.anonDefine=null)}}}),function(){function t(e,t,n){if(w=!0,t)t=(e.normalizeSync||e.normalize).call(e,t),n.name=t,t in e.defined||(e.defined[t]=n);else{if(y)throw new TypeError("Invalid anonymous System.register module load. If loading a single module, ensure anonymous System.register is loaded via System.import. If loading a bundle, ensure all the System.register calls are named.");y=n}}function n(e,t,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var d=e.normalizedDeps[a],s=t.defined[d];if(s&&!s.evaluated){var i=e.groupIndex+(s.declarative!=e.declarative);if(void 0===s.groupIndex||s.groupIndex<i){if(void 0!==s.groupIndex&&(r[s.groupIndex].splice(g.call(r[s.groupIndex],s),1),0==r[s.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");s.groupIndex=i}n(s,t,r)}}}}function r(e,t){var r=t.defined[e];if(!r.module){r.groupIndex=0;var a=[];n(r,t,a);for(var o=!!r.declarative==a.length%2,s=a.length-1;s>=0;s--){for(var i=a[s],u=0;u<i.length;u++){var c=i[u];o?d(c,t):l(c,t)}o=!o}}}function a(){}function o(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new a,importers:[]})}function d(t,n){if(!t.module){var r=n._loader.moduleRecords,a=t.module=o(t.name,r),s=t.module.exports,i=t.declare.call(e,function(e,t){if(a.locked=!0,"object"==typeof e)for(var n in e)s[n]=e[n];else s[e]=t;for(var r=0,o=a.importers.length;o>r;r++){var d=a.importers[r];if(!d.locked){var i=g.call(d.dependencies,a);d.setters[i](s)}}return a.locked=!1,t});if(a.setters=i.setters,a.execute=i.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var l=0,u=t.normalizedDeps.length;u>l;l++){var c,f=t.normalizedDeps[l],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(d(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(a),a.dependencies.push(p)):a.dependencies.push(null);for(var h=t.originalIndices[l],v=0,y=h.length;y>v;++v){var w=h[v];a.setters[w]&&a.setters[w](c)}}}}function s(e,t){var n,r=t.defined[e];if(r)r.declarative?m(e,[],t):r.evaluated||l(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function l(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,d=t.normalizedDeps.length;d>o;o++){var i=t.normalizedDeps[o],u=n.defined[i];u&&l(u,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return s(t.normalizedDeps[r],n);throw new TypeError("Module "+e+" not declared as a dependency.")},r,a);if(c&&(a.exports=c),r=a.exports,r&&r.__esModule)t.esModule=r;else{if(t.esModule={},"object"==typeof r||"function"==typeof r)if(p){var f;for(var m in r)(f=Object.getOwnPropertyDescriptor(r,m))&&v(t.esModule,m,f)}else{var h=r&&r.hasOwnProperty;for(var m in r)(!h||r.hasOwnProperty(m))&&(t.esModule[m]=r[m])}t.esModule["default"]=r,v(t.esModule,"__useDefault",{value:!0})}}}function m(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,d=a.normalizedDeps.length;d>o;o++){var s=a.normalizedDeps[o];-1==g.call(n,s)&&(r.defined[s]?m(s,n,r):r.get(s))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}var p=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){p=!1}var y,w=!1;i.prototype.register=function(e,n,r){return"string"!=typeof e&&(r=n,n=e,e=null),"boolean"==typeof r?this.registerDynamic.apply(this,arguments):void t(this,e,{declarative:!0,deps:n,declare:r})},i.prototype.registerDynamic=function(e,n,r,a){"string"!=typeof e&&(a=r,r=n,n=e,e=null),t(this,e,{declarative:!1,deps:n,execute:a,executingRequire:r})},c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),u("onScriptLoad",function(e){return function(t){e.call(this,t),w&&(y&&(t.metadata.entry=y),t.metadata.format=t.metadata.format||"defined",t.metadata.registered=!0,w=!1,y=null)}}),v(a,"toString",{value:function(){return"Module"}}),u("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}});var x=/^\s*(\/\*[\s\S]*?\*\/\s*|\/\/[^\n]*\s*)*System\.register(Dynamic)?\s*\(/;u("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(y=null,w=!1,"register"==t.metadata.format&&(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),u("translate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return"string"==typeof t.metadata.deps&&(t.metadata.deps=t.metadata.deps.split(",")),t.metadata.deps=t.metadata.deps||[],("register"==t.metadata.format||!t.metadata.format&&t.source.match(x))&&(t.metadata.format="register"),e})}}),u("instantiate",function(e){return function(e){var t,n=this;if(n.defined[e.name])t=n.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format||"esm"==e.metadata.format||"es6"==e.metadata.format){if(y=null,w=!1,__exec.call(n,e),!w&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.");y?t=y:e.metadata.bundle=!0,!t&&n.defined[e.name]&&(t=n.defined[e.name]),y=null,w=!1}t||(t={declarative:!1,deps:e.metadata.deps,execute:function(){return n.newModule({})}}),n.defined[e.name]=t;var a=f(t.deps);t.deps=a.names,t.originalIndices=a.indices,t.name=e.name;for(var o=[],d=0,s=t.deps.length;s>d;d++)o.push(Promise.resolve(n.normalize(t.deps[d],e.name)));return Promise.all(o).then(function(a){return t.normalizedDeps=a,{deps:t.deps,execute:function(){return r(e.name,n),m(e.name,[],n),n.defined[e.name]=void 0,n.newModule(t.declarative?t.module.exports:t.esModule)}}})}})}(),b=new i,b.constructor=i,"object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,b||(b=new o,b.constructor=o),"object"==typeof exports&&(module.exports=b),e.System=b}("undefined"!=typeof self?self:global);
//# sourceMappingURL=system-register-only.js.map
