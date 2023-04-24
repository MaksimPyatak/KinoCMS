import{_ as oi}from"./_plugin-vue_export-helper-c27b6911.js";import{o as K,c as ht,r as ai,a as c,b as D,d as ci,w as hi,e as Xs,u as Ys,f as Ot,g as Js,h as Sn,t as Nt,F as Cn,p as Qs,i as Zs}from"./index-22e63f22.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tr=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],h=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ui={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,h=s+2<t.length,l=h?t[s+2]:0,d=r>>2,y=(r&3)<<4|a>>4;let C=(a&15)<<2|l>>6,w=l&63;h||(w=64,o||(C=64)),i.push(n[d],n[y],n[C],n[w])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(li(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||y==null)throw new er;const C=r<<2|a>>4;if(i.push(C),l!==64){const w=a<<4&240|l>>2;if(i.push(w),y!==64){const et=l<<6&192|y;i.push(et)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class er extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nr=function(t){const e=li(t);return ui.encodeByteArray(e,!0)},Mt=function(t){return nr(t).replace(/\./g,"")},ir=function(t){try{return ui.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=()=>sr().__FIREBASE_DEFAULTS__,or=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ar=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ir(t[1]);return e&&JSON.parse(e)},fi=()=>{try{return rr()||or()||ar()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cr=t=>{var e,n;return(n=(e=fi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hr=t=>{const e=cr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},lr=()=>{var t;return(t=fi())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Mt(JSON.stringify(n)),Mt(JSON.stringify(o)),a].join(".")}function dr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function di(){try{return typeof indexedDB=="object"}catch{return!1}}function pi(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function pr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="FirebaseError";class V extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=gr,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?mr(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new V(s,a,i)}}function mr(t,e){return t.replace(yr,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const yr=/\{\$([^}]+)}/g;function $t(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Dn(r)&&Dn(o)){if(!$t(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Dn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=1e3,wr=2,Ir=4*60*60*1e3,Er=.5;function kn(t,e=vr,n=wr){const i=e*Math.pow(n,t),s=Math.round(Er*i*(Math.random()-.5)*2);return Math.min(Ir,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){return t&&t._delegate?t._delegate:t}class B{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ur;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ar(e))try{this.getOrInitializeService({instanceIdentifier:q})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=q){return this.instances.has(e)}getOptions(e=q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Tr(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=q){return this.component?this.component.multipleInstances?e:q:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tr(t){return t===q?void 0:t}function Ar(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new br(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(g||(g={}));const Sr={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},Cr=g.INFO,Dr={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},kr=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Dr[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ge{constructor(e){this.name=e,this._logLevel=Cr,this._logHandler=kr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const Rr=(t,e)=>e.some(n=>t instanceof n);let Rn,On;function Or(){return Rn||(Rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nr(){return On||(On=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mi=new WeakMap,Ce=new WeakMap,yi=new WeakMap,fe=new WeakMap,qe=new WeakMap;function Lr(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(j(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mi.set(n,t)}).catch(()=>{}),qe.set(e,t),e}function Pr(t){if(Ce.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ce.set(t,e)}let De={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ce.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xr(t){De=t(De)}function Mr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(de(this),e,...n);return yi.set(i,e.sort?e.sort():[e]),j(i)}:Nr().includes(t)?function(...e){return t.apply(de(this),e),j(mi.get(this))}:function(...e){return j(t.apply(de(this),e))}}function $r(t){return typeof t=="function"?Mr(t):(t instanceof IDBTransaction&&Pr(t),Rr(t,Or())?new Proxy(t,De):t)}function j(t){if(t instanceof IDBRequest)return Lr(t);if(fe.has(t))return fe.get(t);const e=$r(t);return e!==t&&(fe.set(t,e),qe.set(e,t)),e}const de=t=>qe.get(t);function vi(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=j(o);return i&&o.addEventListener("upgradeneeded",h=>{i(j(o.result),h.oldVersion,h.newVersion,j(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(h=>{r&&h.addEventListener("close",()=>r()),s&&h.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Br=["get","getKey","getAll","getAllKeys","count"],Fr=["put","add","delete","clear"],pe=new Map;function Nn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pe.get(e))return pe.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Fr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Br.includes(n)))return;const r=async function(o,...a){const h=this.transaction(o,s?"readwrite":"readonly");let l=h.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&h.done]))[0]};return pe.set(e,r),r}xr(t=>({...t,get:(e,n,i)=>Nn(e,n)||t.get(e,n,i),has:(e,n)=>!!Nn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ur(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ur(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ke="@firebase/app",Ln="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=new Ge("@firebase/app"),Hr="@firebase/app-compat",Vr="@firebase/analytics-compat",zr="@firebase/analytics",Gr="@firebase/app-check-compat",qr="@firebase/app-check",Kr="@firebase/auth",Wr="@firebase/auth-compat",Xr="@firebase/database",Yr="@firebase/database-compat",Jr="@firebase/functions",Qr="@firebase/functions-compat",Zr="@firebase/installations",to="@firebase/installations-compat",eo="@firebase/messaging",no="@firebase/messaging-compat",io="@firebase/performance",so="@firebase/performance-compat",ro="@firebase/remote-config",oo="@firebase/remote-config-compat",ao="@firebase/storage",co="@firebase/storage-compat",ho="@firebase/firestore",lo="@firebase/firestore-compat",uo="firebase",fo="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="[DEFAULT]",po={[ke]:"fire-core",[Hr]:"fire-core-compat",[zr]:"fire-analytics",[Vr]:"fire-analytics-compat",[qr]:"fire-app-check",[Gr]:"fire-app-check-compat",[Kr]:"fire-auth",[Wr]:"fire-auth-compat",[Xr]:"fire-rtdb",[Yr]:"fire-rtdb-compat",[Jr]:"fire-fn",[Qr]:"fire-fn-compat",[Zr]:"fire-iid",[to]:"fire-iid-compat",[eo]:"fire-fcm",[no]:"fire-fcm-compat",[io]:"fire-perf",[so]:"fire-perf-compat",[ro]:"fire-rc",[oo]:"fire-rc-compat",[ao]:"fire-gcs",[co]:"fire-gcs-compat",[ho]:"fire-fst",[lo]:"fire-fst-compat","fire-js":"fire-js",[uo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Map,Oe=new Map;function go(t,e){try{t.container.addComponent(e)}catch(n){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function H(t){const e=t.name;if(Oe.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;Oe.set(e,t);for(const n of Bt.values())go(n,t);return!0}function Et(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},U=new Wt("app","Firebase",mo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new B("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=fo;function wi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Re,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw U.create("bad-app-name",{appName:String(s)});if(n||(n=lr()),!n)throw U.create("no-options");const r=Bt.get(s);if(r){if($t(n,r.options)&&$t(i,r.config))return r;throw U.create("duplicate-app",{appName:s})}const o=new _r(s);for(const h of Oe.values())o.addComponent(h);const a=new yo(n,i,o);return Bt.set(s,a),a}function Ii(t=Re){const e=Bt.get(t);if(!e&&t===Re)return wi();if(!e)throw U.create("no-app",{appName:t});return e}function M(t,e,n){var i;let s=(i=po[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Q.warn(a.join(" "));return}H(new B(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="firebase-heartbeat-database",Io=1,pt="firebase-heartbeat-store";let ge=null;function Ei(){return ge||(ge=vi(wo,Io,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pt)}}}).catch(t=>{throw U.create("idb-open",{originalErrorMessage:t.message})})),ge}async function Eo(t){try{return(await Ei()).transaction(pt).objectStore(pt).get(bi(t))}catch(e){if(e instanceof V)Q.warn(e.message);else{const n=U.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Q.warn(n.message)}}}async function Pn(t,e){try{const i=(await Ei()).transaction(pt,"readwrite");return await i.objectStore(pt).put(e,bi(t)),i.done}catch(n){if(n instanceof V)Q.warn(n.message);else{const i=U.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Q.warn(i.message)}}}function bi(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=1024,To=30*24*60*60*1e3;class Ao{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new So(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=To}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xn(),{heartbeatsToSend:n,unsentEntries:i}=_o(this._heartbeatsCache.heartbeats),s=Mt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xn(){return new Date().toISOString().substring(0,10)}function _o(t,e=bo){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Mn(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class So{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return di()?pi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Eo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mn(t){return Mt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){H(new B("platform-logger",e=>new jr(e),"PRIVATE")),H(new B("heartbeat",e=>new Ao(e),"PRIVATE")),M(ke,Ln,t),M(ke,Ln,"esm2017"),M("fire-js","")}Co("");var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},u,Ke=Ke||{},f=Do||self;function Ft(){}function Xt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ko(t){return Object.prototype.hasOwnProperty.call(t,me)&&t[me]||(t[me]=++Ro)}var me="closure_uid_"+(1e9*Math.random()>>>0),Ro=0;function Oo(t,e,n){return t.call.apply(t.bind,arguments)}function No(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function A(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A=Oo:A=No,A.apply(null,arguments)}function Lt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function b(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function z(){this.s=this.s,this.o=this.o}var Lo=0;z.prototype.s=!1;z.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Lo!=0)&&ko(this)};z.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ti=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function We(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function $n(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Xt(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function _(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var Po=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",Ft,e),f.removeEventListener("test",Ft,e)}catch{}return t}();function jt(t){return/^[\s\xa0]*$/.test(t)}var Bn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ye(t,e){return t<e?-1:t>e?1:0}function Yt(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return Yt().indexOf(t)!=-1}function Xe(t){return Xe[" "](t),t}Xe[" "]=Ft;function xo(t){var e=Bo;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Mo=x("Opera"),gt=x("Trident")||x("MSIE"),Ai=x("Edge"),Ne=Ai||gt,_i=x("Gecko")&&!(Yt().toLowerCase().indexOf("webkit")!=-1&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),$o=Yt().toLowerCase().indexOf("webkit")!=-1&&!x("Edge");function Si(){var t=f.document;return t?t.documentMode:void 0}var Le;t:{var ve="",we=function(){var t=Yt();if(_i)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ai)return/Edge\/([\d\.]+)/.exec(t);if(gt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($o)return/WebKit\/(\S+)/.exec(t);if(Mo)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(we&&(ve=we?we[1]:""),gt){var Ie=Si();if(Ie!=null&&Ie>parseFloat(ve)){Le=String(Ie);break t}}Le=ve}var Bo={};function Fo(){return xo(function(){let t=0;const e=Bn(String(Le)).split("."),n=Bn("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=ye(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||ye(s[2].length==0,r[2].length==0)||ye(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}f.document&&gt&&Si();function mt(t,e){if(_.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_i){t:{try{Xe(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mt.X.h.call(this)}}b(mt,_);var jo={2:"touch",3:"pen",4:"mouse"};mt.prototype.h=function(){mt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Tt="closure_listenable_"+(1e6*Math.random()|0),Uo=0;function Ho(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++Uo,this.ba=this.ea=!1}function Jt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ye(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Ci(t){const e={};for(const n in t)e[n]=t[n];return e}const Fn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Di(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Fn.length;r++)n=Fn[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qt(t){this.src=t,this.g={},this.h=0}Qt.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=xe(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Ho(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function Pe(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Ti(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Jt(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xe(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Je="closure_lm_"+(1e6*Math.random()|0),Ee={};function ki(t,e,n,i,s){if(i&&i.once)return Oi(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ki(t,e[r],n,i,s);return null}return n=tn(n),t&&t[Tt]?t.N(e,n,bt(i)?!!i.capture:!!i,s):Ri(t,e,n,!1,i,s)}function Ri(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=bt(s)?!!s.capture:!!s,a=Ze(t);if(a||(t[Je]=a=new Qt(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Vo(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Po||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Li(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Vo(){function t(n){return e.call(t.src,t.listener,n)}const e=zo;return t}function Oi(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Oi(t,e[r],n,i,s);return null}return n=tn(n),t&&t[Tt]?t.O(e,n,bt(i)?!!i.capture:!!i,s):Ri(t,e,n,!0,i,s)}function Ni(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ni(t,e[r],n,i,s);else i=bt(i)?!!i.capture:!!i,n=tn(n),t&&t[Tt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=xe(r,n,i,s),-1<n&&(Jt(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ze(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xe(e,n,i,s)),(n=-1<t?e[t]:null)&&Qe(n))}function Qe(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Tt])Pe(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Li(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ze(e))?(Pe(n,t),n.h==0&&(n.src=null,e[Je]=null)):Jt(t)}}}function Li(t){return t in Ee?Ee[t]:Ee[t]="on"+t}function zo(t,e){if(t.ba)t=!0;else{e=new mt(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Qe(t),t=n.call(i,e)}return t}function Ze(t){return t=t[Je],t instanceof Qt?t:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function tn(t){return typeof t=="function"?t:(t[be]||(t[be]=function(e){return t.handleEvent(e)}),t[be])}function I(){z.call(this),this.i=new Qt(this),this.P=this,this.I=null}b(I,z);I.prototype[Tt]=!0;I.prototype.removeEventListener=function(t,e,n,i){Ni(this,t,e,n,i)};function E(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new _(e,t);else if(e instanceof _)e.target=e.target||t;else{var s=e;e=new _(i,t),Di(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Pt(o,i,!0,e)&&s}if(o=e.g=t,s=Pt(o,i,!0,e)&&s,s=Pt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Pt(o,i,!1,e)&&s}I.prototype.M=function(){if(I.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Jt(n[i]);delete t.g[e],t.h--}}this.I=null};I.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};I.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Pt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,h=o.ha||o.src;o.ea&&Pe(t.i,o),s=a.call(h,i)!==!1&&s}}return s&&!i.defaultPrevented}var en=f.JSON.stringify;function Go(){var t=Mi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qo{constructor(){this.h=this.g=null}add(e,n){const i=Pi.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Pi=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ko,t=>t.reset());class Ko{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wo(t){f.setTimeout(()=>{throw t},0)}function xi(t,e){Me||Xo(),$e||(Me(),$e=!0),Mi.add(t,e)}var Me;function Xo(){var t=f.Promise.resolve(void 0);Me=function(){t.then(Yo)}}var $e=!1,Mi=new qo;function Yo(){for(var t;t=Go();){try{t.h.call(t.g)}catch(n){Wo(n)}var e=Pi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$e=!1}function Zt(t,e){I.call(this),this.h=t||1,this.g=e||f,this.j=A(this.lb,this),this.l=Date.now()}b(Zt,I);u=Zt.prototype;u.ca=!1;u.R=null;u.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),E(this,"tick"),this.ca&&(nn(this),this.start()))}};u.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}u.M=function(){Zt.X.M.call(this),nn(this),delete this.g};function sn(t,e,n){if(typeof t=="function")n&&(t=A(t,n));else if(t&&typeof t.handleEvent=="function")t=A(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function $i(t){t.g=sn(()=>{t.g=null,t.i&&(t.i=!1,$i(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Jo extends z{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$i(this)}M(){super.M(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(t){z.call(this),this.h=t,this.g={}}b(yt,z);var jn=[];function Bi(t,e,n,i){Array.isArray(n)||(n&&(jn[0]=n.toString()),n=jn);for(var s=0;s<n.length;s++){var r=ki(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Fi(t){Ye(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qe(e)},t),t.g={}}yt.prototype.M=function(){yt.X.M.call(this),Fi(this)};yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function te(){this.g=!0}te.prototype.Aa=function(){this.g=!1};function Qo(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var d=l[0];l=l[1];var y=d.split("_");o=2<=y.length&&y[1]=="type"?o+(d+"="+l+"&"):o+(d+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Zo(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function nt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ea(t,n)+(i?" "+i:"")})}function ta(t,e){t.info(function(){return"TIMEOUT: "+e})}te.prototype.info=function(){};function ea(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return en(n)}catch{return e}}var rt={},Un=null;function rn(){return Un=Un||new I}rt.Pa="serverreachability";function ji(t){_.call(this,rt.Pa,t)}b(ji,_);function vt(t){const e=rn();E(e,new ji(e))}rt.STAT_EVENT="statevent";function Ui(t,e){_.call(this,rt.STAT_EVENT,t),this.stat=e}b(Ui,_);function S(t){const e=rn();E(e,new Ui(e,t))}rt.Qa="timingevent";function Hi(t,e){_.call(this,rt.Qa,t),this.size=e}b(Hi,_);function At(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var on={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},na={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function an(){}an.prototype.h=null;function Hn(t){return t.h||(t.h=t.i())}function ia(){}var _t={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function cn(){_.call(this,"d")}b(cn,_);function hn(){_.call(this,"c")}b(hn,_);var Be;function ee(){}b(ee,an);ee.prototype.g=function(){return new XMLHttpRequest};ee.prototype.i=function(){return{}};Be=new ee;function St(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new yt(this),this.O=sa,t=Ne?125:void 0,this.T=new Zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vi}function Vi(){this.i=null,this.g="",this.h=!1}var sa=45e3,Fe={},Ut={};u=St.prototype;u.setTimeout=function(t){this.O=t};function je(t,e,n){t.K=1,t.v=ie(F(e)),t.s=n,t.P=!0,zi(t,null)}function zi(t,e){t.F=Date.now(),Ct(t),t.A=F(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Qi(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Vi,t.g=ws(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Jo(A(t.La,t,t.g),t.N)),Bi(t.S,t.g,"readystatechange",t.ib),e=t.H?Ci(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vt(),Qo(t.j,t.u,t.A,t.m,t.U,t.s)}u.ib=function(t){t=t.target;const e=this.L;e&&$(t)==3?e.l():this.La(t)};u.La=function(t){try{if(t==this.g)t:{const d=$(this.g);var e=this.g.Ea();const y=this.g.aa();if(!(3>d)&&(d!=3||Ne||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||d!=4||e==7||(e==8||0>=y?vt(3):vt(2)),ne(this);var n=this.g.aa();this.Y=n;e:if(Gi(this)){var i=qn(this.g);t="";var s=i.length,r=$(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){W(this),ft(this);var o="";break e}this.h.i=new f.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Zo(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jt(a)){var l=a;break e}}l=null}if(n=l)nt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ue(this,n);else{this.i=!1,this.o=3,S(12),W(this),ft(this);break t}}this.P?(qi(this,d,o),Ne&&this.i&&d==3&&(Bi(this.S,this.T,"tick",this.hb),this.T.start())):(nt(this.j,this.m,o,null),Ue(this,o)),d==4&&W(this),this.i&&!this.I&&(d==4?gs(this.l,this):(this.i=!1,Ct(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,S(12)):(this.o=0,S(13)),W(this),ft(this)}}}catch{}finally{}};function Gi(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function qi(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=ra(t,n),s==Ut){e==4&&(t.o=4,S(14),i=!1),nt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Fe){t.o=4,S(15),nt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else nt(t.j,t.m,s,null),Ue(t,s);Gi(t)&&s!=Ut&&s!=Fe&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,S(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),mn(e),e.K=!0,S(11))):(nt(t.j,t.m,n,"[Invalid Chunked Response]"),W(t),ft(t))}u.hb=function(){if(this.g){var t=$(this.g),e=this.g.fa();this.C<e.length&&(ne(this),qi(this,t,e),this.i&&t!=4&&Ct(this))}};function ra(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ut:(n=Number(e.substring(n,i)),isNaN(n)?Fe:(i+=1,i+n>e.length?Ut:(e=e.substr(i,n),t.C=i+n,e)))}u.cancel=function(){this.I=!0,W(this)};function Ct(t){t.V=Date.now()+t.O,Ki(t,t.O)}function Ki(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=At(A(t.gb,t),e)}function ne(t){t.B&&(f.clearTimeout(t.B),t.B=null)}u.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(ta(this.j,this.A),this.K!=2&&(vt(),S(17)),W(this),this.o=2,ft(this)):Ki(this,this.V-t)};function ft(t){t.l.G==0||t.I||gs(t.l,t)}function W(t){ne(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,nn(t.T),Fi(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ue(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||He(n.h,t))){if(!t.J&&He(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)zt(n),ae(n);else break t;gn(n),S(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=At(A(n.cb,n),6e3));if(1>=es(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else X(n,11)}else if((t.J||n.g==t)&&zt(n),!jt(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const d=l[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const y=l[4];y!=null&&(n.Ca=y,n.j.info("SVER="+n.Ca));const C=l[5];C!=null&&typeof C=="number"&&0<C&&(i=1.5*C,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const w=t.g;if(w){const et=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(et){var r=i.h;r.g||et.indexOf("spdy")==-1&&et.indexOf("quic")==-1&&et.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ln(r,r.h),r.h=null))}if(i.D){const ue=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;ue&&(i.za=ue,m(i.F,i.D,ue))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=vs(i,i.H?i.ka:null,i.V),o.J){ns(i.h,o);var a=o,h=i.J;h&&a.setTimeout(h),a.B&&(ne(a),Ct(a)),i.g=o}else ds(i);0<n.i.length&&ce(n)}else l[0]!="stop"&&l[0]!="close"||X(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?X(n,7):pn(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}vt(4)}catch{}}function oa(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function aa(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Wi(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=aa(t),i=oa(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ca(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function J(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof J){this.h=e!==void 0?e:t.h,Ht(this,t.j),this.s=t.s,this.g=t.g,Vt(this,t.m),this.l=t.l,e=t.i;var n=new wt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vn(this,n),this.o=t.o}else t&&(n=String(t).match(Xi))?(this.h=!!e,Ht(this,n[1]||"",!0),this.s=lt(n[2]||""),this.g=lt(n[3]||"",!0),Vt(this,n[4]),this.l=lt(n[5]||"",!0),Vn(this,n[6]||"",!0),this.o=lt(n[7]||"")):(this.h=!!e,this.i=new wt(null,this.h))}J.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ut(e,zn,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ut(e,zn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ut(n,n.charAt(0)=="/"?ua:la,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ut(n,da)),t.join("")};function F(t){return new J(t)}function Ht(t,e,n){t.j=n?lt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vn(t,e,n){e instanceof wt?(t.i=e,pa(t.i,t.h)):(n||(e=ut(e,fa)),t.i=new wt(e,t.h))}function m(t,e,n){t.i.set(e,n)}function ie(t){return m(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ut(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ha),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ha(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zn=/[#\/\?@]/g,la=/[#\?:]/g,ua=/[#\?]/g,fa=/[#\?@]/g,da=/#/g;function wt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function G(t){t.g||(t.g=new Map,t.h=0,t.i&&ca(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}u=wt.prototype;u.add=function(t,e){G(this),this.i=null,t=ot(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yi(t,e){G(t),e=ot(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ji(t,e){return G(t),e=ot(t,e),t.g.has(e)}u.forEach=function(t,e){G(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};u.oa=function(){G(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};u.W=function(t){G(this);let e=[];if(typeof t=="string")Ji(this,t)&&(e=e.concat(this.g.get(ot(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};u.set=function(t,e){return G(this),this.i=null,t=ot(this,t),Ji(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};u.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Qi(t,e,n){Yi(t,e),0<n.length&&(t.i=null,t.g.set(ot(t,e),We(n)),t.h+=n.length)}u.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ot(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pa(t,e){e&&!t.j&&(G(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Yi(this,i),Qi(this,s,n))},t)),t.j=e}var ga=class{constructor(t,e){this.h=t,this.g=e}};function Zi(t){this.l=t||ma,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ga&&f.g.Ga()&&f.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ma=10;function ts(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function es(t){return t.h?1:t.g?t.g.size:0}function He(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ln(t,e){t.g?t.g.add(e):t.h=e}function ns(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Zi.prototype.cancel=function(){if(this.i=is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function is(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return We(t.i)}function un(){}un.prototype.stringify=function(t){return f.JSON.stringify(t,void 0)};un.prototype.parse=function(t){return f.JSON.parse(t,void 0)};function ya(){this.g=new un}function va(t,e,n){const i=n||"";try{Wi(t,function(s,r){let o=s;bt(s)&&(o=en(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function wa(t,e){const n=new te;if(f.Image){const i=new Image;i.onload=Lt(xt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Lt(xt,n,i,"TestLoadImage: error",!1,e),i.onabort=Lt(xt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Lt(xt,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function xt(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function se(t){this.l=t.ac||null,this.j=t.jb||!1}b(se,an);se.prototype.g=function(){return new re(this.l,this.j)};se.prototype.i=function(t){return function(){return t}}({});function re(t,e){I.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(re,I);var fn=0;u=re.prototype;u.open=function(t,e){if(this.readyState!=fn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,It(this)};u.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||f).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dt(this)),this.readyState=fn};u.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,It(this)),this.g&&(this.readyState=3,It(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ss(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ss(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}u.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dt(this):It(this),this.readyState==3&&ss(this)}};u.Va=function(t){this.g&&(this.response=this.responseText=t,Dt(this))};u.Ua=function(t){this.g&&(this.response=t,Dt(this))};u.ga=function(){this.g&&Dt(this)};function Dt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,It(t)}u.setRequestHeader=function(t,e){this.v.append(t,e)};u.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};u.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function It(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(re.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ia=f.JSON.parse;function v(t){I.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rs,this.K=this.L=!1}b(v,I);var rs="",Ea=/^https?$/i,ba=["POST","PUT"];u=v.prototype;u.Ka=function(t){this.L=t};u.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Be.g(),this.C=this.u?Hn(this.u):Hn(Be),this.g.onreadystatechange=A(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Gn(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=f.FormData&&t instanceof f.FormData,!(0<=Ti(ba,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cs(this),0<this.B&&((this.K=Ta(this.g))?(this.g.timeout=this.B,this.g.ontimeout=A(this.qa,this)):this.A=sn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gn(this,r)}};function Ta(t){return gt&&Fo()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}u.qa=function(){typeof Ke<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,E(this,"timeout"),this.abort(8))};function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,os(t),oe(t)}function os(t){t.D||(t.D=!0,E(t,"complete"),E(t,"error"))}u.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,E(this,"complete"),E(this,"abort"),oe(this))};u.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oe(this,!0)),v.X.M.call(this)};u.Ha=function(){this.s||(this.F||this.v||this.l?as(this):this.fb())};u.fb=function(){as(this)};function as(t){if(t.h&&typeof Ke<"u"&&(!t.C[1]||$(t)!=4||t.aa()!=2)){if(t.v&&$(t)==4)sn(t.Ha,0,t);else if(E(t,"readystatechange"),$(t)==4){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Xi)[1]||null;if(!s&&f.self&&f.self.location){var r=f.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ea.test(s?s.toLowerCase():"")}n=i}if(n)E(t,"complete"),E(t,"success");else{t.m=6;try{var o=2<$(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",os(t)}}finally{oe(t)}}}}function oe(t,e){if(t.g){cs(t);const n=t.g,i=t.C[0]?Ft:null;t.g=null,t.C=null,e||E(t,"ready");try{n.onreadystatechange=i}catch{}}}function cs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}function $(t){return t.g?t.g.readyState:0}u.aa=function(){try{return 2<$(this)?this.g.status:-1}catch{return-1}};u.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};u.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ia(e)}};function qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}u.Ea=function(){return this.m};u.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function hs(t){let e="";return Ye(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function dn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=hs(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):m(t,e,n))}function ct(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ls(t){this.Ca=0,this.i=[],this.j=new te,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ct("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ct("baseRetryDelayMs",5e3,t),this.bb=ct("retryDelaySeedMs",1e4,t),this.$a=ct("forwardChannelMaxRetries",2,t),this.ta=ct("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Zi(t&&t.concurrentRequestLimit),this.Fa=new ya,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}u=ls.prototype;u.ma=8;u.G=1;function pn(t){if(us(t),t.G==3){var e=t.U++,n=F(t.F);m(n,"SID",t.I),m(n,"RID",e),m(n,"TYPE","terminate"),kt(t,n),e=new St(t,t.j,e,void 0),e.K=2,e.v=ie(F(n)),n=!1,f.navigator&&f.navigator.sendBeacon&&(n=f.navigator.sendBeacon(e.v.toString(),"")),!n&&f.Image&&(new Image().src=e.v,n=!0),n||(e.g=ws(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ct(e)}ys(t)}function ae(t){t.g&&(mn(t),t.g.cancel(),t.g=null)}function us(t){ae(t),t.u&&(f.clearTimeout(t.u),t.u=null),zt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function ce(t){ts(t.h)||t.m||(t.m=!0,xi(t.Ja,t),t.C=0)}function Aa(t,e){return es(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=At(A(t.Ja,t,e),ms(t,t.C)),t.C++,!0)}u.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new St(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Ci(r),Di(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fs(this,s,e),n=F(this.F),m(n,"RID",t),m(n,"CVER",22),this.D&&m(n,"X-HTTP-Session-Id",this.D),kt(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(hs(r)))+"&"+e:this.o&&dn(n,this.o,r)),ln(this.h,s),this.Ya&&m(n,"TYPE","init"),this.O?(m(n,"$req",e),m(n,"SID","null"),s.Z=!0,je(s,n,null)):je(s,n,e),this.G=2}}else this.G==3&&(t?Kn(this,t):this.i.length==0||ts(this.h)||Kn(this))};function Kn(t,e){var n;e?n=e.m:n=t.U++;const i=F(t.F);m(i,"SID",t.I),m(i,"RID",n),m(i,"AID",t.T),kt(t,i),t.o&&t.s&&dn(i,t.o,t.s),n=new St(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=fs(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ln(t.h,n),je(n,i,e)}function kt(t,e){t.ia&&Ye(t.ia,function(n,i){m(e,i,n)}),t.l&&Wi({},function(n,i){m(e,i,n)})}function fs(t,e,n){n=Math.min(t.i.length,n);var i=t.l?A(t.l.Ra,t.l,t):null;t:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let l=s[h].h;const d=s[h].g;if(l-=r,0>l)r=Math.max(0,s[h].h-100),a=!1;else try{va(d,o,"req"+l+"_")}catch{i&&i(d)}}if(a){i=o.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ds(t){t.g||t.u||(t.Z=1,xi(t.Ia,t),t.A=0)}function gn(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=At(A(t.Ia,t),ms(t,t.A)),t.A++,!0)}u.Ia=function(){if(this.u=null,ps(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=At(A(this.eb,this),t)}};u.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,S(10),ae(this),ps(this))};function mn(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function ps(t){t.g=new St(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=F(t.sa);m(e,"RID","rpc"),m(e,"SID",t.I),m(e,"CI",t.L?"0":"1"),m(e,"AID",t.T),m(e,"TYPE","xmlhttp"),kt(t,e),t.o&&t.s&&dn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ie(F(e)),n.s=null,n.P=!0,zi(n,t)}u.cb=function(){this.v!=null&&(this.v=null,ae(this),gn(this),S(19))};function zt(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function gs(t,e){var n=null;if(t.g==e){zt(t),mn(t),t.g=null;var i=2}else if(He(t.h,e))n=e.D,ns(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=rn(),E(i,new Hi(i,n)),ce(t)}else ds(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&Aa(t,e)||i==2&&gn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:X(t,5);break;case 4:X(t,10);break;case 3:X(t,6);break;default:X(t,2)}}}function ms(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function X(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=A(t.kb,t);n||(n=new J("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ht(n,"https"),ie(n)),wa(n.toString(),i)}else S(2);t.G=0,t.l&&t.l.va(e),ys(t),us(t)}u.kb=function(t){t?(this.j.info("Successfully pinged google.com"),S(2)):(this.j.info("Failed to ping google.com"),S(1))};function ys(t){if(t.G=0,t.la=[],t.l){const e=is(t.h);(e.length!=0||t.i.length!=0)&&($n(t.la,e),$n(t.la,t.i),t.h.i.length=0,We(t.i),t.i.length=0),t.l.ua()}}function vs(t,e,n){var i=n instanceof J?F(n):new J(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Vt(i,i.m);else{var s=f.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new J(null,void 0);i&&Ht(r,i),e&&(r.g=e),s&&Vt(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&m(i,n,e),m(i,"VER",t.ma),kt(t,i),i}function ws(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new v(new se({jb:!0})):new v(t.ra),e.Ka(t.H),e}function Is(){}u=Is.prototype;u.xa=function(){};u.wa=function(){};u.va=function(){};u.ua=function(){};u.Ra=function(){};function P(t,e){I.call(this),this.g=new ls(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!jt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jt(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new at(this)}b(P,I);P.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;S(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=vs(t,null,t.V),ce(t)};P.prototype.close=function(){pn(this.g)};P.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=en(t),t=n);e.i.push(new ga(e.ab++,t)),e.G==3&&ce(e)};P.prototype.M=function(){this.g.l=null,delete this.j,pn(this.g),delete this.g,P.X.M.call(this)};function Es(t){cn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}b(Es,cn);function bs(){hn.call(this),this.status=1}b(bs,hn);function at(t){this.g=t}b(at,Is);at.prototype.xa=function(){E(this.g,"a")};at.prototype.wa=function(t){E(this.g,new Es(t))};at.prototype.va=function(t){E(this.g,new bs)};at.prototype.ua=function(){E(this.g,"b")};P.prototype.send=P.prototype.u;P.prototype.open=P.prototype.m;P.prototype.close=P.prototype.close;on.NO_ERROR=0;on.TIMEOUT=8;on.HTTP_ERROR=6;na.COMPLETE="complete";ia.EventType=_t;_t.OPEN="a";_t.CLOSE="b";_t.ERROR="c";_t.MESSAGE="d";I.prototype.listen=I.prototype.N;v.prototype.listenOnce=v.prototype.O;v.prototype.getLastError=v.prototype.Oa;v.prototype.getLastErrorCode=v.prototype.Ea;v.prototype.getStatus=v.prototype.aa;v.prototype.getResponseJson=v.prototype.Sa;v.prototype.getResponseText=v.prototype.fa;v.prototype.send=v.prototype.da;v.prototype.setWithCredentials=v.prototype.Ka;const Wn="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Ge("@firebase/firestore");function R(t,...e){if(st.logLevel<=g.DEBUG){const n=e.map(vn);st.debug(`Firestore (${Rt}): ${t}`,...n)}}function yn(t,...e){if(st.logLevel<=g.ERROR){const n=e.map(vn);st.error(`Firestore (${Rt}): ${t}`,...n)}}function _a(t,...e){if(st.logLevel<=g.WARN){const n=e.map(vn);st.warn(`Firestore (${Rt}): ${t}`,...n)}}function vn(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function Ve(t,e){t||wn()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends V{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(T.UNAUTHENTICATED))}shutdown(){}}class Ca{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Da{constructor(e){this.t=e,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let r=new it;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new it,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=r;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},a=h=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new it)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ve(typeof i.accessToken=="string"),new Ts(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new T(e)}}class ka{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=T.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ra{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new ka(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(T.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Na{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.T=n.token,new Oa(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=La(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function As(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,i,s,r,o,a,h){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class Gt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn,p;(p=Xn||(Xn={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";function Te(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new In(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(t,e){if(yn("AsyncQueue",`${e}: ${t}`),As(t))return new N(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=T.UNAUTHENTICATED,this.clientId=Pa.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{R("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(R("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=$a(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map;function Fa(t,e,n,i){if(e===!0&&i===!0)throw new N(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ja(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":wn()}function Ua(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ja(t);throw new N(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Fa("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jn(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sa;switch(n.type){case"firstParty":return new Ra(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Yn.get(e);n&&(R("ComponentProvider","Removing Datastore"),Yn.delete(e),n.terminate())}(this),Promise.resolve()}}function Ha(t,e,n,i={}){var s;const r=(t=Ua(t,_s))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&_a("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=T.MOCK_USER;else{o=fr(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new N(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new T(h)}t._authCredentials=new Ca(new Ts(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Ma(this,"async_queue_retry"),this.qc=()=>{const n=Te();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Te();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Te();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new it;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!As(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw yn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Fc=!1,i))));return this.Nc=n,n}enqueueAfterDelay(e,n,i){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const s=In.createAndSchedule(this,e,n,i,r=>this.Qc(r));return this.$c.push(s),s}Uc(){this.Mc&&wn()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class za extends _s{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Va,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qa(this),this._firestoreClient.terminate()}}function Ga(t,e){const n=typeof t=="object"?t:Ii(),i=typeof t=="string"?t:e||"(default)",s=Et(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=hr("firestore");r&&Ha(s,...r)}return s}function qa(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,h,l){return new xa(o,a,h,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Ba(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Rt=n})(vo),H(new B("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new za(new Da(n.getProvider("auth-internal")),new Na(n.getProvider("app-check-internal")),function(a,h){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gt(a.options.projectId,h)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),M(Wn,"3.10.1",t),M(Wn,"3.10.1","esm2017")})();var Ka="firebase",Wa="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */M(Ka,Wa,"app");const Ss="@firebase/installations",En="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e4,Ds=`w:${En}`,ks="FIS_v2",Xa="https://firebaseinstallations.googleapis.com/v1",Ya=60*60*1e3,Ja="installations",Qa="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Z=new Wt(Ja,Qa,Za);function Rs(t){return t instanceof V&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os({projectId:t}){return`${Xa}/projects/${t}/installations`}function Ns(t){return{token:t.token,requestStatus:2,expiresIn:ec(t.expiresIn),creationTime:Date.now()}}async function Ls(t,e){const i=(await e.json()).error;return Z.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ps({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tc(t,{refreshToken:e}){const n=Ps(t);return n.append("Authorization",nc(e)),n}async function xs(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ec(t){return Number(t.replace("s","000"))}function nc(t){return`${ks} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Os(t),s=Ps(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:ks,appId:t.appId,sdkVersion:Ds},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await xs(()=>fetch(i,a));if(h.ok){const l=await h.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ns(l.authToken)}}else throw await Ls("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=/^[cdef][\w-]{21}$/,ze="";function oc(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ac(t);return rc.test(n)?n:ze}catch{return ze}}function ac(t){return sc(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Map;function Bs(t,e){const n=he(t);Fs(n,e),cc(n,e)}function Fs(t,e){const n=$s.get(t);if(n)for(const i of n)i(e)}function cc(t,e){const n=hc();n&&n.postMessage({key:t,fid:e}),lc()}let Y=null;function hc(){return!Y&&"BroadcastChannel"in self&&(Y=new BroadcastChannel("[Firebase] FID Change"),Y.onmessage=t=>{Fs(t.data.key,t.data.fid)}),Y}function lc(){$s.size===0&&Y&&(Y.close(),Y=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="firebase-installations-database",fc=1,tt="firebase-installations-store";let Ae=null;function bn(){return Ae||(Ae=vi(uc,fc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tt)}}})),Ae}async function qt(t,e){const n=he(t),s=(await bn()).transaction(tt,"readwrite"),r=s.objectStore(tt),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Bs(t,e.fid),e}async function js(t){const e=he(t),i=(await bn()).transaction(tt,"readwrite");await i.objectStore(tt).delete(e),await i.done}async function le(t,e){const n=he(t),s=(await bn()).transaction(tt,"readwrite"),r=s.objectStore(tt),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Bs(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(t){let e;const n=await le(t.appConfig,i=>{const s=dc(i),r=pc(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===ze?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dc(t){const e=t||{fid:oc(),registrationStatus:0};return Us(e)}function pc(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Z.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=gc(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mc(t)}:{installationEntry:e}}async function gc(t,e){try{const n=await ic(t,e);return qt(t.appConfig,n)}catch(n){throw Rs(n)&&n.customData.serverCode===409?await js(t.appConfig):await qt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mc(t){let e=await Qn(t.appConfig);for(;e.registrationStatus===1;)await Ms(100),e=await Qn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Tn(t);return i||n}return e}function Qn(t){return le(t,e=>{if(!e)throw Z.create("installation-not-found");return Us(e)})}function Us(t){return yc(t)?{fid:t.fid,registrationStatus:0}:t}function yc(t){return t.registrationStatus===1&&t.registrationTime+Cs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc({appConfig:t,heartbeatServiceProvider:e},n){const i=wc(t,n),s=tc(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ds,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await xs(()=>fetch(i,a));if(h.ok){const l=await h.json();return Ns(l)}else throw await Ls("Generate Auth Token",h)}function wc(t,{fid:e}){return`${Os(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e=!1){let n;const i=await le(t.appConfig,r=>{if(!Hs(r))throw Z.create("not-registered");const o=r.authToken;if(!e&&bc(o))return r;if(o.requestStatus===1)return n=Ic(t,e),r;{if(!navigator.onLine)throw Z.create("app-offline");const a=Ac(r);return n=Ec(t,a),a}});return n?await n:i.authToken}async function Ic(t,e){let n=await Zn(t.appConfig);for(;n.authToken.requestStatus===1;)await Ms(100),n=await Zn(t.appConfig);const i=n.authToken;return i.requestStatus===0?An(t,e):i}function Zn(t){return le(t,e=>{if(!Hs(e))throw Z.create("not-registered");const n=e.authToken;return _c(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ec(t,e){try{const n=await vc(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await qt(t.appConfig,i),n}catch(n){if(Rs(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await js(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qt(t.appConfig,i)}throw n}}function Hs(t){return t!==void 0&&t.registrationStatus===2}function bc(t){return t.requestStatus===2&&!Tc(t)}function Tc(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ya}function Ac(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _c(t){return t.requestStatus===1&&t.requestTime+Cs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(t){const e=t,{installationEntry:n,registrationPromise:i}=await Tn(e);return i?i.catch(console.error):An(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(t,e=!1){const n=t;return await Dc(n),(await An(n,e)).token}async function Dc(t){const{registrationPromise:e}=await Tn(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){if(!t||!t.options)throw _e("App Configuration");if(!t.name)throw _e("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _e(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _e(t){return Z.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="installations",Rc="installations-internal",Oc=t=>{const e=t.getProvider("app").getImmediate(),n=kc(e),i=Et(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Nc=t=>{const e=t.getProvider("app").getImmediate(),n=Et(e,Vs).getImmediate();return{getId:()=>Sc(n),getToken:s=>Cc(n,s)}};function Lc(){H(new B(Vs,Oc,"PUBLIC")),H(new B(Rc,Nc,"PRIVATE"))}Lc();M(Ss,En);M(Ss,En,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="analytics",Pc="firebase_id",xc="origin",Mc=60*1e3,$c="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_n="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Ge("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},L=new Wt("analytics","Analytics",Bc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){if(!t.startsWith(_n)){const e=L.create("invalid-gtag-resource",{gtagURL:t});return k.warn(e.message),""}return t}function zs(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jc(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Uc(t,e){const n=jc("firebase-js-sdk-policy",{createScriptURL:Fc}),i=document.createElement("script"),s=`${_n}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Hc(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Vc(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const h=(await zs(n)).find(l=>l.measurementId===s);h&&await e[h.appId]}}catch(a){k.error(a)}t("config",s,r)}async function zc(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await zs(n);for(const h of o){const l=a.find(y=>y.measurementId===h),d=l&&e[l.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){k.error(r)}}function Gc(t,e,n,i){async function s(r,o,a){try{r==="event"?await zc(t,e,n,o,a):r==="config"?await Vc(t,e,n,i,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(h){k.error(h)}}return s}function qc(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Gc(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Kc(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(_n)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=30,Xc=1e3;class Yc{constructor(e={},n=Xc){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gs=new Yc;function Jc(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Qc(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Jc(i)},r=$c.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const h=await o.json();!((e=h.error)===null||e===void 0)&&e.message&&(a=h.error.message)}catch{}throw L.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Zc(t,e=Gs,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw L.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw L.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new nh;return setTimeout(async()=>{a.abort()},n!==void 0?n:Mc),qs({appId:i,apiKey:s,measurementId:r},o,a,e)}async function qs(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Gs){var r;const{appId:o,measurementId:a}=t;try{await th(i,e)}catch(h){if(a)return k.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await Qc(t);return s.deleteThrottleMetadata(o),h}catch(h){const l=h;if(!eh(l)){if(s.deleteThrottleMetadata(o),a)return k.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw h}const d=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?kn(n,s.intervalMillis,Wc):kn(n,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,y),k.debug(`Calling attemptFetch again in ${d} millis`),qs(t,y,i,s)}}function th(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(L.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eh(t){if(!(t instanceof V)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ih(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(){if(di())try{await pi()}catch(t){return k.warn(L.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return k.warn(L.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rh(t,e,n,i,s,r,o){var a;const h=Zc(t);h.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&k.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>k.error(w)),e.push(h);const l=sh().then(w=>{if(w)return i.getId()}),[d,y]=await Promise.all([h,l]);Kc(r)||Uc(r,d.measurementId),s("js",new Date);const C=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return C[xc]="firebase",C.update=!0,y!=null&&(C[Pc]=y),s("config",d.measurementId,C),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.app=e}_delete(){return delete dt[this.app.options.appId],Promise.resolve()}}let dt={},ti=[];const ei={};let Se="dataLayer",ah="gtag",ni,Ks,ii=!1;function ch(){const t=[];if(dr()&&t.push("This is a browser extension environment."),pr()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=L.create("invalid-analytics-context",{errorInfo:e});k.warn(n.message)}}function hh(t,e,n){ch();const i=t.options.appId;if(!i)throw L.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)k.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw L.create("no-api-key");if(dt[i]!=null)throw L.create("already-exists",{id:i});if(!ii){Hc(Se);const{wrappedGtag:r,gtagCore:o}=qc(dt,ti,ei,Se,ah);Ks=r,ni=o,ii=!0}return dt[i]=rh(t,ti,ei,e,ni,Se,n),new oh(t)}function lh(t=Ii()){t=gi(t);const e=Et(t,Kt);return e.isInitialized()?e.getImmediate():uh(t)}function uh(t,e={}){const n=Et(t,Kt);if(n.isInitialized()){const s=n.getImmediate();if($t(e,n.getOptions()))return s;throw L.create("already-initialized")}return n.initialize({options:e})}function fh(t,e,n,i){t=gi(t),ih(Ks,dt[t.app.options.appId],e,n,i).catch(s=>k.error(s))}const si="@firebase/analytics",ri="0.9.5";function dh(){H(new B(Kt,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return hh(i,s,n)},"PUBLIC")),H(new B("analytics-internal",t,"PRIVATE")),M(si,ri),M(si,ri,"esm2017");function t(e){try{const n=e.getProvider(Kt).getImmediate();return{logEvent:(i,s,r)=>fh(n,i,s,r)}}catch(n){throw L.create("interop-component-reg-failed",{reason:n})}}}dh();const ph={apiKey:"AIzaSyA05P1xTD86r4FSacfzaRiDv7hwqYFaNMo",authDomain:"my-kino-cms.firebaseapp.com",projectId:"my-kino-cms",storageBucket:"my-kino-cms.appspot.com",messagingSenderId:"18464466854",appId:"1:18464466854:web:6bcd7d760dcc68f2be9167",measurementId:"G-R936Q3ST84"},gh=wi(ph);lh(gh);Ga();const mh={},yh={class:"wrapper"},vh=c("nav",{class:"main-header navbar navbar-expand navbar-white navbar-light"},[c("ul",{class:"navbar-nav"},[c("li",{class:"nav-item"},[c("a",{class:"nav-link","data-widget":"pushmenu",href:"#",role:"button"},[c("i",{class:"fas fa-bars"})])]),c("li",{class:"nav-item d-none d-sm-inline-block"},[c("a",{href:"index3.html",class:"nav-link"},"Home")]),c("li",{class:"nav-item d-none d-sm-inline-block"},[c("a",{href:"#",class:"nav-link"},"Contact")]),c("li",{class:"nav-item dropdown"},[c("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown2",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Help "),c("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown2"},[c("a",{class:"dropdown-item",href:"#"},"FAQ"),c("a",{class:"dropdown-item",href:"#"},"Support"),c("div",{class:"dropdown-divider"}),c("a",{class:"dropdown-item",href:"#"},"Contact")])])]),c("form",{class:"form-inline ml-3"},[c("div",{class:"input-group input-group-sm"},[c("input",{class:"form-control form-control-navbar",type:"search",placeholder:"Search","aria-label":"Search"}),c("div",{class:"input-group-append"},[c("button",{class:"btn btn-navbar",type:"submit"},[c("i",{class:"fas fa-search"})])])])]),c("ul",{class:"navbar-nav ml-auto"},[c("li",{class:"nav-item dropdown"},[c("a",{class:"nav-link","data-toggle":"dropdown",href:"#"},[c("i",{class:"far fa-comments"}),c("span",{class:"badge badge-danger navbar-badge"},"3")]),c("div",{class:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[c("a",{href:"#",class:"dropdown-item"},[c("div",{class:"media"},[c("div",{class:"media-body"},[c("h3",{class:"dropdown-item-title"},[D(" Brad Diesel "),c("span",{class:"float-right text-sm text-danger"},[c("i",{class:"fas fa-star"})])]),c("p",{class:"text-sm"},"Call me whenever you can..."),c("p",{class:"text-sm text-muted"},[c("i",{class:"far fa-clock mr-1"}),D(" 4 Hours Ago")])])])]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("div",{class:"media"},[c("div",{class:"media-body"},[c("h3",{class:"dropdown-item-title"},[D(" John Pierce "),c("span",{class:"float-right text-sm text-muted"},[c("i",{class:"fas fa-star"})])]),c("p",{class:"text-sm"},"I got your message bro"),c("p",{class:"text-sm text-muted"},[c("i",{class:"far fa-clock mr-1"}),D(" 4 Hours Ago")])])])]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("div",{class:"media"},[c("div",{class:"media-body"},[c("h3",{class:"dropdown-item-title"},[D(" Nora Silvester "),c("span",{class:"float-right text-sm text-warning"},[c("i",{class:"fas fa-star"})])]),c("p",{class:"text-sm"},"The subject goes here"),c("p",{class:"text-sm text-muted"},[c("i",{class:"far fa-clock mr-1"}),D(" 4 Hours Ago")])])])]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item dropdown-footer"},"See All Messages")])]),c("li",{class:"nav-item dropdown"},[c("a",{class:"nav-link","data-toggle":"dropdown",href:"#"},[c("i",{class:"far fa-bell"}),c("span",{class:"badge badge-warning navbar-badge"},"15")]),c("div",{class:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[c("span",{class:"dropdown-header"},"15 Notifications"),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("i",{class:"fas fa-envelope mr-2"}),D(" 4 new messages "),c("span",{class:"float-right text-muted text-sm"},"3 mins")]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("i",{class:"fas fa-users mr-2"}),D(" 8 friend requests "),c("span",{class:"float-right text-muted text-sm"},"12 hours")]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item"},[c("i",{class:"fas fa-file mr-2"}),D(" 3 new reports "),c("span",{class:"float-right text-muted text-sm"},"2 days")]),c("div",{class:"dropdown-divider"}),c("a",{href:"#",class:"dropdown-item dropdown-footer"},"See All Notifications")])]),c("li",{class:"nav-item"},[c("a",{class:"nav-link","data-widget":"control-sidebar","data-slide":"true",href:"#",role:"button"},[c("i",{class:"fas fa-th-large"})])])])],-1),wh=c("aside",{class:"main-sidebar sidebar-dark-primary elevation-4"},[c("a",{href:"index3.html",class:"brand-link"},[D(' style="opacity: .8"> '),c("span",{class:"brand-text font-weight-light"},"AdminLTE 3")]),c("div",{class:"sidebar"},[c("div",{class:"user-panel mt-3 pb-3 mb-3 d-flex"},[c("div",{class:"image"}),c("div",{class:"info"},[c("a",{href:"#",class:"d-block"},"Alexander Pierce")])]),c("nav",{class:"mt-2"},[c("ul",{class:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu"},[c("li",{class:"nav-item menu-open"},[c("a",{href:"#",class:"nav-link active"},[c("i",{class:"nav-icon fas fa-tachometer-alt"}),c("p",null,[D(" Starter Pages "),c("i",{class:"right fas fa-angle-left"})])]),c("ul",{class:"nav nav-treeview"},[c("li",{class:"nav-item"},[c("a",{href:"#",class:"nav-link active"},[c("i",{class:"far fa-circle nav-icon"}),c("p",null,"Active Page")])]),c("li",{class:"nav-item"},[c("a",{href:"#",class:"nav-link"},[c("i",{class:"far fa-circle nav-icon"}),c("p",null,"Inactive Page")])])])]),c("li",{class:"nav-item"},[c("a",{href:"#",class:"nav-link"},[c("i",{class:"nav-icon fas fa-th"}),c("p",null,[D(" Simple Link "),c("span",{class:"right badge badge-danger"},"New")])])])])])])],-1);function Ih(t,e){return K(),ht("div",yh,[vh,wh,ai(t.$slots,"default")])}const Eh=oi(mh,[["render",Ih]]),bh={__name:"LayoutFrame",setup(t){const e=Eh;return(n,i)=>(K(),ci(Xs(Ys(e)),null,{default:hi(()=>[ai(n.$slots,"default")]),_:3}))}};const Ws=t=>(Qs("data-v-2eb36012"),t=t(),Zs(),t),Th={class:"home-page"},Ah=Ws(()=>c("h1",null," Home page ",-1)),_h=Ws(()=>c("br",null,null,-1)),Sh={__name:"HomePage",setup(t){Ot(""),Ot("");const e=Ot([]),n=Ot([]);return Js(()=>{}),(i,s)=>(K(),ci(bh,null,{default:hi(()=>[c("div",Th,[Ah,(K(!0),ht(Cn,null,Sn(e.value,r=>(K(),ht("p",{key:r.name},[D(" Country: "+Nt(r.name),1),_h,D(" Capital: "+Nt(r.capital),1)]))),128)),(K(!0),ht(Cn,null,Sn(n.value,r=>(K(),ht("p",{key:r.firstName},Nt(r.firstName)+" "+Nt(r.lastName),1))),128))])]),_:1}))}},kh=oi(Sh,[["__scopeId","data-v-2eb36012"]]);export{kh as default};
