var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t,e){return function(){return t.apply(e,arguments)}}const{toString:n}=Object.prototype,{getPrototypeOf:i}=Object,r=(s=Object.create(null),t=>{const e=n.call(t);return s[e]||(s[e]=e.slice(8,-1).toLowerCase())});var s;const o=t=>(t=t.toLowerCase(),e=>r(e)===t),a=t=>e=>typeof e===t,{isArray:c}=Array,h=a("undefined");const l=o("ArrayBuffer");const u=a("string"),d=a("function"),f=a("number"),p=t=>null!==t&&"object"==typeof t,g=t=>{if("object"!==r(t))return!1;const e=i(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},m=o("Date"),y=o("File"),v=o("Blob"),b=o("FileList"),w=o("URLSearchParams");function E(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),c(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function T(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,_=t=>!h(t)&&t!==I;const A=(S="undefined"!=typeof Uint8Array&&i(Uint8Array),t=>S&&t instanceof S);var S;const R=o("HTMLFormElement"),k=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),C=o("RegExp"),O=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};E(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},N={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const P=o("AsyncFunction");var L={isArray:c,isArrayBuffer:l,isBuffer:function(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&d(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||d(t.append)&&("formdata"===(e=r(t))||"object"===e&&d(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&l(t.buffer),e},isString:u,isNumber:f,isBoolean:t=>!0===t||!1===t,isObject:p,isPlainObject:g,isUndefined:h,isDate:m,isFile:y,isBlob:v,isRegExp:C,isFunction:d,isStream:t=>p(t)&&d(t.pipe),isURLSearchParams:w,isTypedArray:A,isFileList:b,forEach:E,merge:function t(){const{caseless:e}=_(this)&&this||{},n={},i=(i,r)=>{const s=e&&T(n,r)||r;g(n[s])&&g(i)?n[s]=t(n[s],i):g(i)?n[s]=t({},i):c(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&E(arguments[t],i);return n},extend:(t,n,i,{allOwnKeys:r}={})=>(E(n,((n,r)=>{i&&d(n)?t[r]=e(n,i):t[r]=n}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let s,o,a;const c={};if(e=e||{},null==t)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)a=s[o],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&i(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:r,kindOfTest:o,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(c(t))return t;let e=t.length;if(!f(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:R,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:O,freezeMethods:t=>{O(t,((e,n)=>{if(d(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];d(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return c(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:T,global:I,isContextDefined:_,ALPHABET:N,generateString:(t=16,e=N.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&d(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(p(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=c(t)?[]:{};return E(t,((t,e)=>{const s=n(t,i+1);!h(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)},isAsyncFn:P,isThenable:t=>t&&(p(t)||d(t))&&d(t.then)&&d(t.catch)};function D(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}L.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const x=D.prototype,U={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{U[t]={value:t}})),Object.defineProperties(D,U),Object.defineProperty(x,"isAxiosError",{value:!0}),D.from=(t,e,n,i,r,s)=>{const o=Object.create(x);return L.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),D.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var M,j,B,F=D;j=function(t){var e,n,i=J(t),r=i[0],s=i[1],o=new W(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)e=z[t.charCodeAt(n)]<<18|z[t.charCodeAt(n+1)]<<12|z[t.charCodeAt(n+2)]<<6|z[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=z[t.charCodeAt(n)]<<2|z[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=z[t.charCodeAt(n)]<<10|z[t.charCodeAt(n+1)]<<4|z[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},B=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(X(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(V[e>>2]+V[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(V[e>>10]+V[e>>4&63]+V[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var H,$,V=[],z=[],W="undefined"!=typeof Uint8Array?Uint8Array:Array,q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K=0,G=q.length;K<G;++K)V[K]=q[K],z[q.charCodeAt(K)]=K;function J(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function X(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(V[(r=i)>>18&63]+V[r>>12&63]+V[r>>6&63]+V[63&r]);return s.join("")}z["-".charCodeAt(0)]=62,z["_".charCodeAt(0)]=63,H=function(t,e,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,h=c>>1,l=-7,u=n?r-1:0,d=n?-1:1,f=t[e+u];for(u+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+t[e+u],u+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=i;l>0;o=256*o+t[e+u],u+=d,l-=8);if(0===s)s=1-h;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=h}return(f?-1:1)*o*Math.pow(2,s-i)},$=function(t,e,n,i,r,s){var o,a,c,h=8*s-r-1,l=(1<<h)-1,u=l>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+u>=1?d/c:d*Math.pow(2,1-u))*c>=2&&(o++,c/=2),o+u>=l?(a=0,o=l):o+u>=1?(a=(e*c-1)*Math.pow(2,r),o+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;t[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,h+=r;h>0;t[n+f]=255&o,f+=p,o/=256,h-=8);t[n+f-p]|=128*g};const Y="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;M=Z;function Q(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Z.prototype),e}function Z(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return nt(t)}return tt(t,e,n)}function tt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ot(t,e);let i=Q(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Bt(t,Uint8Array)){const e=new Uint8Array(t);return rt(e.buffer,e.byteOffset,e.byteLength)}return it(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Bt(t,ArrayBuffer)||t&&Bt(t.buffer,ArrayBuffer))return rt(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Bt(t,SharedArrayBuffer)||t&&Bt(t.buffer,SharedArrayBuffer)))return rt(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return Z.from(i,e,n);const r=function(t){if(Z.isBuffer(t)){const e=0|st(t.length),n=Q(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Ft(t.length)?Q(0):it(t);if("Buffer"===t.type&&Array.isArray(t.data))return it(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Z.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function et(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function nt(t){return et(t),Q(t<0?0:0|st(t))}function it(t){const e=t.length<0?0:0|st(t.length),n=Q(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function rt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,Z.prototype),i}function st(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function ot(t,e){if(Z.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Bt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ut(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Mt(t).length;default:if(r)return i?-1:Ut(t).length;e=(""+e).toLowerCase(),r=!0}}function at(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return wt(this,e,n);case"utf8":case"utf-8":return yt(this,e,n);case"ascii":return vt(this,e,n);case"latin1":case"binary":return bt(this,e,n);case"base64":return mt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Et(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ct(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function ht(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ft(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=Z.from(e,i)),Z.isBuffer(e))return 0===e.length?-1:lt(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):lt(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function lt(t,e,n,i,r){let s,o=1,a=t.length,c=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function h(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(h(t,s)===h(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(h(t,s+i)!==h(e,i)){n=!1;break}if(n)return s}return-1}function ut(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(Ft(i))return o;t[n+o]=i}return o}function dt(t,e,n,i){return jt(Ut(e,t.length-n),t,n,i)}function ft(t,e,n,i){return jt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function pt(t,e,n,i){return jt(Mt(e),t,n,i)}function gt(t,e,n,i){return jt(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function mt(t,e,n){return 0===e&&n===t.length?B(t):B(t.slice(e,n))}function yt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(c=(15&e)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}Z.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Z.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Z.prototype,"parent",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.buffer}}),Object.defineProperty(Z.prototype,"offset",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.byteOffset}}),Z.poolSize=8192,Z.from=function(t,e,n){return tt(t,e,n)},Object.setPrototypeOf(Z.prototype,Uint8Array.prototype),Object.setPrototypeOf(Z,Uint8Array),Z.alloc=function(t,e,n){return function(t,e,n){return et(t),t<=0?Q(t):void 0!==e?"string"==typeof n?Q(t).fill(e,n):Q(t).fill(e):Q(t)}(t,e,n)},Z.allocUnsafe=function(t){return nt(t)},Z.allocUnsafeSlow=function(t){return nt(t)},Z.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Z.prototype},Z.compare=function(t,e){if(Bt(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),Bt(e,Uint8Array)&&(e=Z.from(e,e.offset,e.byteLength)),!Z.isBuffer(t)||!Z.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},Z.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Z.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Z.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=Z.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Bt(e,Uint8Array))r+e.length>i.length?(Z.isBuffer(e)||(e=Z.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!Z.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},Z.byteLength=ot,Z.prototype._isBuffer=!0,Z.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ct(this,e,e+1);return this},Z.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ct(this,e,e+3),ct(this,e+1,e+2);return this},Z.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ct(this,e,e+7),ct(this,e+1,e+6),ct(this,e+2,e+5),ct(this,e+3,e+4);return this},Z.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?yt(this,0,t):at.apply(this,arguments)},Z.prototype.toLocaleString=Z.prototype.toString,Z.prototype.equals=function(t){if(!Z.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Z.compare(this,t)},Z.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Y&&(Z.prototype[Y]=Z.prototype.inspect),Z.prototype.compare=function(t,e,n,i,r){if(Bt(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),!Z.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(i,r),h=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==h[t]){s=c[t],o=h[t];break}return s<o?-1:o<s?1:0},Z.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Z.prototype.indexOf=function(t,e,n){return ht(this,t,e,n,!0)},Z.prototype.lastIndexOf=function(t,e,n){return ht(this,t,e,n,!1)},Z.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return ut(this,t,e,n);case"utf8":case"utf-8":return dt(this,t,e,n);case"ascii":case"latin1":case"binary":return ft(this,t,e,n);case"base64":return pt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},Z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function vt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function bt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function wt(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=Ht[t[i]];return r}function Et(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function Tt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function It(t,e,n,i,r,s){if(!Z.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function _t(t,e,n,i,r){Pt(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function At(t,e,n,i,r){Pt(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function St(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Rt(t,e,n,i,r){return e=+e,n>>>=0,r||St(t,0,n,4),$(t,e,n,i,23,4),n+4}function kt(t,e,n,i,r){return e=+e,n>>>=0,r||St(t,0,n,8),$(t,e,n,i,52,8),n+8}Z.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,Z.prototype),i},Z.prototype.readUintLE=Z.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},Z.prototype.readUintBE=Z.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},Z.prototype.readUint8=Z.prototype.readUInt8=function(t,e){return t>>>=0,e||Tt(t,1,this.length),this[t]},Z.prototype.readUint16LE=Z.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Tt(t,2,this.length),this[t]|this[t+1]<<8},Z.prototype.readUint16BE=Z.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Tt(t,2,this.length),this[t]<<8|this[t+1]},Z.prototype.readUint32LE=Z.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Z.prototype.readUint32BE=Z.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Z.prototype.readBigUInt64LE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Z.prototype.readBigUInt64BE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Z.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},Z.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},Z.prototype.readInt8=function(t,e){return t>>>=0,e||Tt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Z.prototype.readInt16LE=function(t,e){t>>>=0,e||Tt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt16BE=function(t,e){t>>>=0,e||Tt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt32LE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Z.prototype.readInt32BE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Z.prototype.readBigInt64LE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Z.prototype.readBigInt64BE=$t((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Z.prototype.readFloatLE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),H(this,t,!0,23,4)},Z.prototype.readFloatBE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),H(this,t,!1,23,4)},Z.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Tt(t,8,this.length),H(this,t,!0,52,8)},Z.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Tt(t,8,this.length),H(this,t,!1,52,8)},Z.prototype.writeUintLE=Z.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){It(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},Z.prototype.writeUintBE=Z.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){It(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},Z.prototype.writeUint8=Z.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,1,255,0),this[e]=255&t,e+1},Z.prototype.writeUint16LE=Z.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeUint16BE=Z.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeUint32LE=Z.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Z.prototype.writeUint32BE=Z.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigUInt64LE=$t((function(t,e=0){return _t(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeBigUInt64BE=$t((function(t,e=0){return At(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);It(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Z.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);It(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Z.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Z.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Z.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigInt64LE=$t((function(t,e=0){return _t(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeBigInt64BE=$t((function(t,e=0){return At(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeFloatLE=function(t,e,n){return Rt(this,t,e,!0,n)},Z.prototype.writeFloatBE=function(t,e,n){return Rt(this,t,e,!1,n)},Z.prototype.writeDoubleLE=function(t,e,n){return kt(this,t,e,!0,n)},Z.prototype.writeDoubleBE=function(t,e,n){return kt(this,t,e,!1,n)},Z.prototype.copy=function(t,e,n,i){if(!Z.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},Z.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Z.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=Z.isBuffer(t)?t:Z.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const Ct={};function Ot(t,e,n){Ct[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Nt(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Pt(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new Ct.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Lt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Dt(e,t.length-(n+1))}(i,r,s)}function Lt(t,e){if("number"!=typeof t)throw new Ct.ERR_INVALID_ARG_TYPE(e,"number",t)}function Dt(t,e,n){if(Math.floor(t)!==t)throw Lt(t,n),new Ct.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Ct.ERR_BUFFER_OUT_OF_BOUNDS;throw new Ct.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Ot("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Ot("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Ot("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Nt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Nt(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const xt=/[^+/0-9A-Za-z-_]/g;function Ut(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Mt(t){return j(function(t){if((t=(t=t.split("=")[0]).trim().replace(xt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function jt(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Bt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Ft(t){return t!=t}const Ht=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function $t(t){return"undefined"==typeof BigInt?Vt:t}function Vt(){throw new Error("BigInt not supported")}var zt=M;function Wt(t){return L.isPlainObject(t)||L.isArray(t)}function qt(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Kt(t,e,n){return t?t.concat(e).map((function(t,e){return t=qt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Gt=L.toFlatObject(L,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Jt=function(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!L.isUndefined(e[t])}))).metaTokens,r=n.visitor||h,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(L.isDate(t))return t.toISOString();if(!a&&L.isBlob(t))throw new F("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(t)||L.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):zt.from(t):t}function h(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(L.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(L.isArray(t)&&function(t){return L.isArray(t)&&!t.some(Wt)}(t)||(L.isFileList(t)||L.endsWith(n,"[]"))&&(a=L.toArray(t)))return n=qt(n),a.forEach((function(t,i){!L.isUndefined(t)&&null!==t&&e.append(!0===o?Kt([n],i,s):null===o?n:n+"[]",c(t))})),!1;return!!Wt(t)||(e.append(Kt(r,n,s),c(t)),!1)}const l=[],u=Object.assign(Gt,{defaultVisitor:h,convertValue:c,isVisitable:Wt});if(!L.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!L.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+i.join("."));l.push(n),L.forEach(n,(function(n,s){!0===(!(L.isUndefined(n)||null===n)&&r.call(e,n,L.isString(s)?s.trim():s,i,u))&&t(n,i?i.concat(s):[s])})),l.pop()}}(t),e};function Xt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Yt(t,e){this._pairs=[],t&&Jt(t,this,e)}const Qt=Yt.prototype;Qt.append=function(t,e){this._pairs.push([t,e])},Qt.toString=function(t){const e=t?function(e){return t.call(this,e,Xt)}:Xt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Zt=Yt;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(t,e,n){if(!e)return t;const i=n&&n.encode||te,r=n&&n.serialize;let s;if(s=r?r(e,n):L.isURLSearchParams(e)?e.toString():new Zt(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var ne=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var re={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Zt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function se(t,e){return Jt(t,new re.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return re.isNode&&L.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var oe=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&L.isArray(i)?i.length:s,a)return L.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&L.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&L.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,((t,i)=>{e(function(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const ae={"Content-Type":void 0};const ce={transitional:ie,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=L.isObject(t);r&&L.isHTMLForm(t)&&(t=new FormData(t));if(L.isFormData(t))return i&&i?JSON.stringify(oe(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return se(t,this.formSerializer).toString();if((s=L.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Jt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||ce.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&L.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw F.from(t,F.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};L.forEach(["delete","get","head"],(function(t){ce.headers[t]={}})),L.forEach(["post","put","patch"],(function(t){ce.headers[t]=L.merge(ae)}));var he=ce;const le=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var ue=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&le[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const de=Symbol("internals");function fe(t){return t&&String(t).trim().toLowerCase()}function pe(t){return!1===t||null==t?t:L.isArray(t)?t.map(pe):String(t)}function ge(t,e,n,i,r){return L.isFunction(i)?i.call(this,e,n):(r&&(e=n),L.isString(e)?L.isString(i)?-1!==e.indexOf(i):L.isRegExp(i)?i.test(e):void 0:void 0)}let me=Symbol.iterator,ye=Symbol.toStringTag;class ve{set(t,e,n){const i=this;function r(t,e,n){const r=fe(e);if(!r)throw new Error("header name must be a non-empty string");const s=L.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=pe(t))}const s=(t,e)=>L.forEach(t,((t,n)=>r(t,n,e)));return L.isPlainObject(t)||t instanceof this.constructor?s(t,e):L.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(ue(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=fe(t)){const n=L.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(L.isFunction(e))return e.call(this,t,n);if(L.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=fe(t)){const n=L.findKey(this,t);return!(!n||void 0===this[n]||e&&!ge(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=fe(t)){const r=L.findKey(n,t);!r||e&&!ge(0,n[r],r,e)||(delete n[r],i=!0)}}return L.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!ge(0,this[r],r,t,!0)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return L.forEach(this,((i,r)=>{const s=L.findKey(n,r);if(s)return e[s]=pe(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=pe(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return L.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&L.isArray(n)?n.join(", "):n)})),e}[me](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[ye](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[de]=this[de]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=fe(t);e[i]||(!function(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return L.isArray(t)?t.forEach(i):i(t),this}constructor(t){t&&this.set(t)}}ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),L.freezeMethods(ve.prototype),L.freezeMethods(ve);var be=ve;function we(t,e){const n=this||he,i=e||n,r=be.from(i.headers);let s=i.data;return L.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function Ee(t){return!(!t||!t.__CANCEL__)}function Te(t,e,n){F.call(this,null==t?"canceled":t,F.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Te,F,{__CANCEL__:!0});var Ie=Te;function _e(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new F("Request failed with status code "+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Ae=re.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(i)&&o.push("path="+i),L.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Se(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Re(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Se(t,e):e}var ke=re.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=L.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Ce(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Oe=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),h=i[o];r||(r=c),n[s]=a,i[s]=c;let l=o,u=0;for(;l!==s;)u+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-r<e)return;const d=h&&c-h;return d?Math.round(1e3*u/d):void 0}};function Ne(t,e){let n=0;const i=Oe(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const h={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};h[e?"download":"upload"]=!0,t(h)}}const Pe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=be.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}L.isFormData(i)&&(re.isStandardBrowserEnv||re.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const h=Re(t.baseURL,t.url);function l(){if(!c)return;const i=be.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());_e((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),ee(h,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new F("Request aborted",F.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new F("Network Error",F.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||ie;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new F(e,i.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,t,c)),c=null},re.isStandardBrowserEnv){const e=(t.withCredentials||ke(h))&&t.xsrfCookieName&&Ae.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&L.forEach(r.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),L.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",Ne(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Ne(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new Ie(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const u=Ce(h);u&&-1===re.protocols.indexOf(u)?n(new F("Unsupported protocol "+u+":",F.ERR_BAD_REQUEST,t)):c.send(i||null)}))}};L.forEach(Pe,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Le={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=L.isString(n)?Pe[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new F(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(L.hasOwnProp(Pe,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!L.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Pe};function De(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ie(null,t)}function xe(t){De(t),t.headers=be.from(t.headers),t.data=we.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Le.getAdapter(t.adapter||he.adapter)(t).then((function(e){return De(t),e.data=we.call(t,t.transformResponse,e),e.headers=be.from(e.headers),e}),(function(e){return Ee(e)||(De(t),e&&e.response&&(e.response.data=we.call(t,t.transformResponse,e.response),e.response.headers=be.from(e.response.headers))),Promise.reject(e)}))}const Ue=t=>t instanceof be?t.toJSON():t;function Me(t,e){e=e||{};const n={};function i(t,e,n){return L.isPlainObject(t)&&L.isPlainObject(e)?L.merge.call({caseless:n},t,e):L.isPlainObject(e)?L.merge({},e):L.isArray(e)?e.slice():e}function r(t,e,n){return L.isUndefined(e)?L.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!L.isUndefined(e))return i(void 0,e)}function o(t,e){return L.isUndefined(e)?L.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(Ue(t),Ue(e),!0)};return L.forEach(Object.keys(Object.assign({},t,e)),(function(i){const s=c[i]||r,o=s(t[i],e[i],i);L.isUndefined(o)&&s!==a||(n[i]=o)})),n}const je={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{je[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Be={};je.transitional=function(t,e,n){function i(t,e){return"[Axios v1.4.0] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new F(i(r," has been removed"+(e?" in "+e:"")),F.ERR_DEPRECATED);return e&&!Be[r]&&(Be[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var Fe={assertOptions:function(t,e,n){if("object"!=typeof t)throw new F("options must be an object",F.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new F("option "+s+" must be "+n,F.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new F("Unknown option "+s,F.ERR_BAD_OPTION)}},validators:je};const He=Fe.validators;class $e{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Me(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Fe.assertOptions(n,{silentJSONParsing:He.transitional(He.boolean),forcedJSONParsing:He.transitional(He.boolean),clarifyTimeoutError:He.transitional(He.boolean)},!1),null!=i&&(L.isFunction(i)?e.paramsSerializer={serialize:i}:Fe.assertOptions(i,{encode:He.function,serialize:He.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&L.merge(r.common,r[e.method]),s&&L.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=be.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let h;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,u=0;if(!a){const t=[xe.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,h=Promise.resolve(e);u<l;)h=h.then(t[u++],t[u++]);return h}l=o.length;let d=e;for(u=0;u<l;){const t=o[u++],e=o[u++];try{d=t(d)}catch(t){e.call(this,t);break}}try{h=xe.call(this,d)}catch(t){return Promise.reject(t)}for(u=0,l=c.length;u<l;)h=h.then(c[u++],c[u++]);return h}getUri(t){return ee(Re((t=Me(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new ne,response:new ne}}}L.forEach(["delete","get","head","options"],(function(t){$e.prototype[t]=function(e,n){return this.request(Me(n||{},{method:t,url:e,data:(n||{}).data}))}})),L.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Me(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}$e.prototype[t]=e(),$e.prototype[t+"Form"]=e(!0)}));var Ve=$e;class ze{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new ze((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new Ie(t,i,r),e(n.reason))}))}}var We=ze;const qe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qe).forEach((([t,e])=>{qe[e]=t}));var Ke=qe;const Ge=function t(n){const i=new Ve(n),r=e(Ve.prototype.request,i);return L.extend(r,Ve.prototype,i,{allOwnKeys:!0}),L.extend(r,i,null,{allOwnKeys:!0}),r.create=function(e){return t(Me(n,e))},r}(he);Ge.Axios=Ve,Ge.CanceledError=Ie,Ge.CancelToken=We,Ge.isCancel=Ee,Ge.VERSION="1.4.0",Ge.toFormData=Jt,Ge.AxiosError=F,Ge.Cancel=Ge.CanceledError,Ge.all=function(t){return Promise.all(t)},Ge.spread=function(t){return function(e){return t.apply(null,e)}},Ge.isAxiosError=function(t){return L.isObject(t)&&!0===t.isAxiosError},Ge.mergeConfig=Me,Ge.AxiosHeaders=be,Ge.formToJSON=t=>oe(L.isHTMLForm(t)?new FormData(t):t),Ge.HttpStatusCode=Ke,Ge.default=Ge;var Je=Ge;const{Axios:Xe,AxiosError:Ye,CanceledError:Qe,isCancel:Ze,CancelToken:tn,VERSION:en,all:nn,Cancel:rn,isAxiosError:sn,spread:on,toFormData:an,AxiosHeaders:cn,HttpStatusCode:hn,formToJSON:ln,mergeConfig:un}=Je;var dn,fn,pn,gn=dn={};function mn(){throw new Error("setTimeout has not been defined")}function yn(){throw new Error("clearTimeout has not been defined")}function vn(t){if(fn===setTimeout)return setTimeout(t,0);if((fn===mn||!fn)&&setTimeout)return fn=setTimeout,setTimeout(t,0);try{return fn(t,0)}catch(e){try{return fn.call(null,t,0)}catch(e){return fn.call(this,t,0)}}}!function(){try{fn="function"==typeof setTimeout?setTimeout:mn}catch(t){fn=mn}try{pn="function"==typeof clearTimeout?clearTimeout:yn}catch(t){pn=yn}}();var bn,wn=[],En=!1,Tn=-1;function In(){En&&bn&&(En=!1,bn.length?wn=bn.concat(wn):Tn=-1,wn.length&&_n())}function _n(){if(!En){var t=vn(In);En=!0;for(var e=wn.length;e;){for(bn=wn,wn=[];++Tn<e;)bn&&bn[Tn].run();Tn=-1,e=wn.length}bn=null,En=!1,function(t){if(pn===clearTimeout)return clearTimeout(t);if((pn===yn||!pn)&&clearTimeout)return pn=clearTimeout,clearTimeout(t);try{pn(t)}catch(e){try{return pn.call(null,t)}catch(e){return pn.call(this,t)}}}(t)}}function An(t,e){this.fun=t,this.array=e}function Sn(){}gn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];wn.push(new An(t,e)),1!==wn.length||En||vn(_n)},An.prototype.run=function(){this.fun.apply(null,this.array)},gn.title="browser",gn.browser=!0,gn.env={},gn.argv=[],gn.version="",gn.versions={},gn.on=Sn,gn.addListener=Sn,gn.once=Sn,gn.off=Sn,gn.removeListener=Sn,gn.removeAllListeners=Sn,gn.emit=Sn,gn.prependListener=Sn,gn.prependOnceListener=Sn,gn.listeners=function(t){return[]},gn.binding=function(t){throw new Error("process.binding is not supported")},gn.cwd=function(){return"/"},gn.chdir=function(t){throw new Error("process.chdir is not supported")},gn.umask=function(){return 0};
/**
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
 */
const Rn=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},kn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,h=r>>2,l=(3&r)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),i.push(n[h],n[l],n[u],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new Cn;const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class Cn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const On=function(t){return function(t){const e=Rn(t);return kn.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Nn=function(t){try{return kn.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
const Pn=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ln=()=>{try{return Pn()||(()=>{if(void 0===dn||void 0===dn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Nn(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Dn=t=>{var e,n;return null===(n=null===(e=Ln())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},xn=t=>{const e=Dn(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Un=t=>{var e;return null===(e=Ln())||void 0===e?void 0:e[`_${t}`]};
/**
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
 */
class Mn{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */function jn(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[On(JSON.stringify({alg:"none",type:"JWT"})),On(JSON.stringify(s)),""].join(".")}
/**
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
 */function Bn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Fn(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function Hn(){const t=Bn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $n(){try{return"object"==typeof indexedDB}catch(t){return!1}}class Vn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(Wn,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Vn(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const Wn=/\{\$([^}]+)}/g;
/**
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
 */function qn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(Gn(n)&&Gn(s)){if(!Kn(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function Gn(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function Jn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function Yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */function Qn(t,e){const n=new Zn(t,e);return n.subscribe.bind(n)}class Zn{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=ti),void 0===i.error&&(i.error=ti),void 0===i.complete&&(i.complete=ti);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function ti(){}
/**
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
 */
/**
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
 */
function ei(t){return t&&t._delegate?t._delegate:t}class ni{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */
/**
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
 */
class ii{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Mn;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ri{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ii(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
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
 */const si=[];var oi,ai;(ai=oi||(oi={}))[ai.DEBUG=0]="DEBUG",ai[ai.VERBOSE=1]="VERBOSE",ai[ai.INFO=2]="INFO",ai[ai.WARN=3]="WARN",ai[ai.ERROR=4]="ERROR",ai[ai.SILENT=5]="SILENT";const ci={debug:oi.DEBUG,verbose:oi.VERBOSE,info:oi.INFO,warn:oi.WARN,error:oi.ERROR,silent:oi.SILENT},hi=oi.INFO,li={[oi.DEBUG]:"log",[oi.VERBOSE]:"log",[oi.INFO]:"info",[oi.WARN]:"warn",[oi.ERROR]:"error"},ui=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=li[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class di{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oi))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ci[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oi.DEBUG,...t),this._logHandler(this,oi.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oi.VERBOSE,...t),this._logHandler(this,oi.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oi.INFO,...t),this._logHandler(this,oi.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oi.WARN,...t),this._logHandler(this,oi.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oi.ERROR,...t),this._logHandler(this,oi.ERROR,...t)}constructor(t){this.name=t,this._logLevel=hi,this._logHandler=ui,this._userLogHandler=null,si.push(this)}}let fi,pi;const gi=new WeakMap,mi=new WeakMap,yi=new WeakMap,vi=new WeakMap,bi=new WeakMap;let wi={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return mi.get(t);if("objectStoreNames"===e)return t.objectStoreNames||yi.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ii(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Ei(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pi||(pi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(_i(this),e),Ii(gi.get(this))}:function(...e){return Ii(t.apply(_i(this),e))}:function(e,...n){const i=t.call(_i(this),e,...n);return yi.set(i,e.sort?e.sort():[e]),Ii(i)}}function Ti(t){return"function"==typeof t?Ei(t):(t instanceof IDBTransaction&&function(t){if(mi.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));mi.set(t,e)}(t),e=t,(fi||(fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,wi):t);var e}function Ii(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Ii(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&gi.set(e,t)})).catch((()=>{})),bi.set(e,t),e}(t);if(vi.has(t))return vi.get(t);const e=Ti(t);return e!==t&&(vi.set(t,e),bi.set(e,t)),e}const _i=t=>bi.get(t);function Ai(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ii(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(Ii(o.result),t.oldVersion,t.newVersion,Ii(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Si=["get","getKey","getAll","getAllKeys","count"],Ri=["put","add","delete","clear"],ki=new Map;function Ci(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(ki.get(e))return ki.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ri.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Si.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return ki.set(e,s),s}wi=(t=>({...t,get:(e,n,i)=>Ci(e,n)||t.get(e,n,i),has:(e,n)=>!!Ci(e,n)||t.has(e,n)}))(wi);
/**
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
 */
class Oi{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ni=new di("@firebase/app"),Pi={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Li=new Map,Di=new Map;function xi(t,e){try{t.container.addComponent(e)}catch(n){Ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ui(t){const e=t.name;if(Di.has(e))return Ni.debug(`There were multiple attempts to register component ${e}.`),!1;Di.set(e,t);for(const e of Li.values())xi(e,t);return!0}function Mi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const ji=new zn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Bi{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ji.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ni("app",(()=>this),"PUBLIC"))}}
/**
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
 */function Fi(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw ji.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=Ln())||void 0===s?void 0:s.config),!n)throw ji.create("no-options");const o=Li.get(r);if(o){if(Kn(n,o.options)&&Kn(i,o.config))return o;throw ji.create("duplicate-app",{appName:r})}const a=new ri(r);for(const t of Di.values())a.addComponent(t);const c=new Bi(n,i,a);return Li.set(r,c),c}function Hi(t="[DEFAULT]"){const e=Li.get(t);if(!e&&"[DEFAULT]"===t)return Fi();if(!e)throw ji.create("no-app",{appName:t});return e}function $i(t,e,n){var i;let r=null!==(i=Pi[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ni.warn(t.join(" "))}Ui(new ni(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let Vi=null;function zi(){return Vi||(Vi=Ai("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw ji.create("idb-open",{originalErrorMessage:t.message})}))),Vi}async function Wi(t,e){try{const n=(await zi()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,qi(t)),n.done}catch(t){if(t instanceof Vn)Ni.warn(t.message);else{const e=ji.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ni.warn(e.message)}}}function qi(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class Ki{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Gi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Gi(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Xi(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=On(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ji(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Gi(){return(new Date).toISOString().substring(0,10)}class Ji{async runIndexedDBEnvironmentCheck(){return!!$n()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await zi()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(qi(t))}catch(t){if(t instanceof Vn)Ni.warn(t.message);else{const e=ji.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ni.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wi(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wi(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Xi(t){return On(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var Yi;Yi="",Ui(new ni("platform-logger",(t=>new Oi(t)),"PRIVATE")),Ui(new ni("heartbeat",(t=>new Ki(t)),"PRIVATE")),$i("@firebase/app","0.9.9",Yi),$i("@firebase/app","0.9.9","esm2017"),$i("fire-js","");
/**
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
 */
$i("firebase","9.21.0","app");function Qi(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function Zi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tr=Zi,er=new zn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),nr=new di("@firebase/auth");function ir(t,...e){nr.logLevel<=oi.ERROR&&nr.error(`Auth (9.21.0): ${t}`,...e)}
/**
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
 */function rr(t,...e){throw ar(t,...e)}function sr(t,...e){return ar(t,...e)}function or(t,e,n){const i=Object.assign(Object.assign({},tr()),{[e]:n});return new zn("auth","Firebase",i).create(e,{appName:t.name})}function ar(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return er.create(t,...e)}function cr(t,e,...n){if(!t)throw ar(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ir(e),new Error(e)}function lr(t,e){t||hr(e)}
/**
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
 */function ur(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function dr(){return"http:"===fr()||"https:"===fr()}function fr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function pr(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(dr()||Fn()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class gr{get(){return pr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,lr(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bn())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
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
 */function mr(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class yr{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const vr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},br=new gr(3e4,6e4);
/**
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
 */function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,i,r={}){return Tr(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=Jn(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),yr.fetch()(_r(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Tr(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},vr),e);try{const e=new Ar(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Sr(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Sr(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Sr(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Sr(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw or(t,a,o);rr(t,a)}}catch(e){if(e instanceof Vn)throw e;rr(t,"network-request-failed",{message:String(e)})}}async function Ir(t,e,n,i,r={}){const s=await Er(t,e,n,i,r);return"mfaPendingCredential"in s&&rr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _r(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?mr(t.config,r):`${t.config.apiScheme}://${r}`}class Ar{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(sr(this.auth,"network-request-failed"))),br.get())}))}}function Sr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=sr(t,e,i);return r.customData._tokenResponse=n,r}
/**
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
 */
/**
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
 */
function Rr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
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
 */function kr(t){return 1e3*Number(t)}function Cr(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return ir("JWT malformed, contained fewer than 3 sections"),null;try{const t=Nn(n);return t?JSON.parse(t):(ir("Failed to decode base64 JWT payload"),null)}catch(t){return ir("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
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
 */
async function Or(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Vn&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Nr{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
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
 */class Pr{_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
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
 */async function Lr(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Or(t,async function(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));cr(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Qi(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,h=o,[...c.filter((t=>!h.some((e=>e.providerId===t.providerId)))),...h]);var c,h;const l=t.isAnonymous,u=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&u,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
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
 */
class Dr{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){cr(t.idToken,"internal-error"),cr(void 0!==t.idToken,"internal-error"),cr(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Cr(t);return cr(e,"internal-error"),cr(void 0!==e.exp,"internal-error"),cr(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return cr(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
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
 */
async function(t,e){const n=await Tr(t,{},(async()=>{const n=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=_r(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",yr.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new Dr;return n&&(cr("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(cr("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(cr("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return hr("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
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
 */function xr(t,e){cr("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ur{async getIdToken(t){const e=await Or(this,this.stsTokenManager.getToken(this.auth,t));return cr(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=ei(t),i=await n.getIdToken(e),r=Cr(i);cr(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Rr(kr(r.auth_time)),issuedAtTime:Rr(kr(r.iat)),expirationTime:Rr(kr(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=ei(t);await Lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(cr(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ur(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){cr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Lr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Or(this,async function(t,e){return Er(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,h;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,u=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(h=e.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=e;cr(v&&T,t,"internal-error");const I=Dr.fromJSON(this.name,T);cr("string"==typeof v,t,"internal-error"),xr(l,t.name),xr(u,t.name),cr("boolean"==typeof b,t,"internal-error"),cr("boolean"==typeof w,t,"internal-error"),xr(d,t.name),xr(f,t.name),xr(p,t.name),xr(g,t.name),xr(m,t.name),xr(y,t.name);const _=new Ur({uid:v,auth:t,email:u,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((t=>Object.assign({},t)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(t,e,n=!1){const i=new Dr;i.updateFromServerResponse(e);const r=new Ur({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Lr(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=Qi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Pr(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
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
 */const Mr=new Map;function jr(t){lr(t instanceof Function,"Expected a class definition");let e=Mr.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mr.set(t,e),e)}
/**
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
 */class Br{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Br.type="NONE";const Fr=Br;
/**
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
 */function Hr(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ur._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new $r(jr(Fr),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||jr(Fr);const s=Hr(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=Ur._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new $r(r,t,n)):new $r(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Hr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Hr("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
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
 */function Vr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jr(e))return"Blackberry";if(Xr(e))return"Webos";if(Wr(e))return"Safari";if((e.includes("chrome/")||qr(e))&&!e.includes("edge/"))return"Chrome";if(Gr(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function zr(t=Bn()){return/firefox\//i.test(t)}function Wr(t=Bn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qr(t=Bn()){return/crios\//i.test(t)}function Kr(t=Bn()){return/iemobile/i.test(t)}function Gr(t=Bn()){return/android/i.test(t)}function Jr(t=Bn()){return/blackberry/i.test(t)}function Xr(t=Bn()){return/webos/i.test(t)}function Yr(t=Bn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qr(){return Hn()&&10===document.documentMode}function Zr(t=Bn()){return Yr(t)||Gr(t)||Xr(t)||Jr(t)||/windows phone/i.test(t)||Kr(t)}
/**
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
 */
function ts(t,e=[]){let n;switch(t){case"Browser":n=Vr(Bn());break;case"Worker":n=`${Vr(Bn())}-${t}`;break;default:n=t}return`${n}/JsCore/9.21.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
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
 */async function es(t,e){return Er(t,"GET","/v2/recaptchaConfig",wr(t,e))}
/**
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
 */function ns(t){return void 0!==t&&void 0!==t.enterprise}class is{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
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
 */function rs(t){return new Promise(((e,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=sr("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ss(t){return`__${t}${Math.floor(1e6*Math.random())}`}class os{async verify(t="verify",e=!1){function n(e,n,i){const r=window.grecaptcha;ns(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{es(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new is(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((r=>{if(!e&&ns(window.grecaptcha))n(r,t,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));rs("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}constructor(t){this.type="recaptcha-enterprise",this.auth=ls(t)}}async function as(t,e,n,i=!1){const r=new os(t);let s;try{s=await r.verify(n)}catch(t){s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
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
 */class cs{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
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
 */class hs{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=jr(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await $r.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return cr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Lr(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?ei(t):null;return e&&cr(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&cr(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(jr(t))}))}async initializeRecaptchaConfig(){const t=await es(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new is(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new os(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zn("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&jr(t)||this._popupRedirectResolver;cr(e,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[jr(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return cr(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return cr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ts(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){nr.logLevel<=oi.WARN&&nr.warn(`Auth (9.21.0): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new us(this),this.idTokenSubscription=new us(this),this.beforeStateQueue=new cs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=er,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}}function ls(t){return ei(t)}class us{get next(){return cr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=Qn((t=>this.observer=t))}}
/**
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
 */function ds(t,e,n){const i=ls(t);cr(i._canInitEmulator,i,"emulator-config-failed"),cr(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=fs(e),{host:o,port:a}=function(t){const e=fs(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:ps(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:ps(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
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
 */()}function fs(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ps(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class gs{toJSON(){return hr("not implemented")}_getIdTokenResponse(t){return hr("not implemented")}_linkToIdToken(t,e){return hr("not implemented")}_getReauthenticationResolver(t){return hr("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
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
 */async function ms(t,e){return Er(t,"POST","/v1/accounts:update",e)}
/**
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
 */
async function ys(t,e){return Ir(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}
/**
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
 */
class vs extends gs{static _fromEmailAndPassword(t,e){return new vs(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new vs(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await as(t,n,"signInWithPassword");return ys(t,e)}return ys(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await as(t,n,"signInWithPassword");return ys(t,e)}return Promise.reject(e)}));case"emailLink":
/**
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
 */
return async function(t,e){return Ir(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}(t,{email:this._email,oobCode:this._password});default:rr(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return ms(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Ir(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:rr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
/**
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
 */async function bs(t,e){return Ir(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}
/**
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
 */class ws extends gs{static _fromParams(t){const e=new ws(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):rr("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=Qi(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new ws(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return bs(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,bs(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,bs(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Jn(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
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
 */const Es={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Ts extends gs{static _fromVerification(t,e){return new Ts({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ts({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",wr(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",wr(t,e));if(n.temporaryProof)throw Sr(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Ir(t,"POST","/v1/accounts:signInWithPhoneNumber",wr(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Es)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Ts({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
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
 */class Is{static parseLink(t){const e=function(t){const e=Xn(Yn(t)).link,n=e?Xn(Yn(e)).deep_link_id:null,i=Xn(Yn(t)).deep_link_id;return(i?Xn(Yn(i)).link:null)||i||n||e||t}(t);try{return new Is(e)}catch(t){return null}}constructor(t){var e,n,i,r,s,o;const a=Xn(Yn(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,h=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);cr(c&&h&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=h,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
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
 */
class _s{static credential(t,e){return vs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Is.parseLink(e);return cr(n,"argument-error"),vs._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=_s.PROVIDER_ID}}_s.PROVIDER_ID="password",_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class As{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
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
 */class Ss extends As{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
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
 */
class Rs extends Ss{static credential(t){return ws._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rs.credentialFromTaggedObject(t)}static credentialFromError(t){return Rs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Rs.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Rs.FACEBOOK_SIGN_IN_METHOD="facebook.com",Rs.PROVIDER_ID="facebook.com";
/**
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
 */
class ks extends Ss{static credential(t,e){return ws._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ks.credentialFromTaggedObject(t)}static credentialFromError(t){return ks.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ks.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}ks.GOOGLE_SIGN_IN_METHOD="google.com",ks.PROVIDER_ID="google.com";
/**
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
 */
class Cs extends Ss{static credential(t){return ws._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cs.credentialFromTaggedObject(t)}static credentialFromError(t){return Cs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Cs.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Cs.GITHUB_SIGN_IN_METHOD="github.com",Cs.PROVIDER_ID="github.com";
/**
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
 */
class Os extends Ss{static credential(t,e){return ws._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Os.credentialFromTaggedObject(t)}static credentialFromError(t){return Os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Os.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
/**
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
 */
async function Ns(t,e){return Ir(t,"POST","/v1/accounts:signUp",wr(t,e))}
/**
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
 */Os.TWITTER_SIGN_IN_METHOD="twitter.com",Os.PROVIDER_ID="twitter.com";class Ps{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await Ur._fromIdTokenResponse(t,n,i),s=Ls(n);return new Ps({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Ls(n);return new Ps({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Ls(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */
/**
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
 */
class Ds extends Vn{static _fromErrorAndOperation(t,e,n,i){return new Ds(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function xs(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ds._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
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
 */async function Us(t,e,n=!1){const i=await Or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ps._forOperation(t,"link",i)}
/**
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
 */
async function Ms(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Or(t,xs(i,r,e,t),n);cr(s.idToken,i,"internal-error");const o=Cr(s.idToken);cr(o,i,"internal-error");const{sub:a}=o;return cr(t.uid===a,i,"user-mismatch"),Ps._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&rr(i,"user-mismatch"),t}}
/**
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
 */async function js(t,e,n=!1){const i="signIn",r=await xs(t,i,e),s=await Ps._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Bs(t,e){return js(ls(t),e)}async function Fs(t,e,n){var i;const r=ls(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const t=await as(r,s,"signUpPassword");o=Ns(r,t)}else o=Ns(r,s).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await as(r,s,"signUpPassword");return Ns(r,t)}return Promise.reject(t)}));const a=await o.catch((t=>Promise.reject(t))),c=await Ps._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}new WeakMap;
/**
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
 */
class Hs{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
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
 */class $s extends Hs{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Qr()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Bn();return Wr(t)||Yr(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Zr(),this._shouldAllowMigration=!0}}$s.type="LOCAL";const Vs=$s;
/**
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
 */class zs extends Hs{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}zs.type="SESSION";const Ws=zs;
/**
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
 */
/**
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
 */
class qs{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new qs(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
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
 */
function Ks(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */qs.receivers=[];class Gs{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Ks("",20);i.port1.start();const h=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(h),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(h),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
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
 */function Js(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function Xs(){return void 0!==Js().WorkerGlobalScope&&"function"==typeof Js().importScripts}class Ys{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Qs(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Zs(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Ys(t).toPromise()}(),e(await Zs()))}))}))}async function to(t,e,n){const i=Qs(t,!0).put({fbase_key:e,value:n});return new Ys(i).toPromise()}function eo(t,e){const n=Qs(t,!0).delete(e);return new Ys(n).toPromise()}class no{async _openDb(){return this.db||(this.db=await Zs()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(Xs()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Gs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zs();return await to(t,"__sak","1"),await eo(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>to(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Qs(t,!1).get(e),i=await new Ys(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>eo(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Qs(t,!1).getAll();return new Ys(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}no.type="LOCAL";const io=no;
/**
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
 */
/**
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
 */
ss("rcb"),new gr(3e4,6e4);async function ro(t,e,n){var i;const r=await n.verify();try{let s;if(cr("string"==typeof r,t,"argument-error"),cr("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){cr("enroll"===e.type,t,"internal-error");const n=await
/**
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
 */
function(t,e){return Er(t,"POST","/v2/accounts/mfaEnrollment:start",wr(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{cr("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;cr(n,t,"missing-multi-factor-info");const o=await function(t,e){return Er(t,"POST","/v2/accounts/mfaSignIn:start",wr(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Er(t,"POST","/v1/accounts:sendVerificationCode",wr(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
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
 */
class so{verifyPhoneNumber(t,e){return ro(this.auth,t,ei(e))}static credential(t,e){return Ts._fromVerification(t,e)}static credentialFromResult(t){const e=t;return so.credentialFromTaggedObject(e)}static credentialFromError(t){return so.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ts._fromTokenResponse(e,n):null}constructor(t){this.providerId=so.PROVIDER_ID,this.auth=ls(t)}}
/**
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
 */
function oo(t,e){return e?jr(e):(cr(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */so.PROVIDER_ID="phone",so.PHONE_SIGN_IN_METHOD="phone";class ao extends gs{_getIdTokenResponse(t){return bs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return bs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return bs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function co(t){return js(t.auth,new ao(t),t.bypassAuthState)}function ho(t){const{auth:e,user:n}=t;return cr(n,e,"internal-error"),Ms(n,new ao(t),t.bypassAuthState)}async function lo(t){const{auth:e,user:n}=t;return cr(n,e,"internal-error"),Us(n,new ao(t),t.bypassAuthState)}
/**
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
 */class uo{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return co;case"linkViaPopup":case"linkViaRedirect":return lo;case"reauthViaPopup":case"reauthViaRedirect":return ho;default:rr(this.auth,"internal-error")}}resolve(t){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
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
 */const fo=new gr(2e3,1e4);class po extends uo{async executeNotNull(){const t=await this.execute();return cr(t,this.auth,"internal-error"),t}async onExecution(){lr(1===this.filter.length,"Popup operations only handle one event");const t=Ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,po.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,fo.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,po.currentPopupAction&&po.currentPopupAction.cancel(),po.currentPopupAction=this}}po.currentPopupAction=null;
/**
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
 */
const go=new Map;class mo extends uo{async execute(){let t=go.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=bo(e),i=vo(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}go.set(this.auth._key(),t)}return this.bypassAuthState||go.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function yo(t,e){go.set(t._key(),e)}function vo(t){return jr(t._redirectPersistence)}function bo(t){return Hr("pendingRedirect",t.config.apiKey,t.name)}
/**
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
 */async function wo(t,e,n=!1){const i=ls(t),r=oo(i,e),s=new mo(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Eo{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Io(t);default:return!1}}
/**
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Io(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(sr(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(t))}saveEventToCache(t){this.cachedEventUids.add(To(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function To(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Io({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
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
 */
const _o=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ao=/^https?/;async function So(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Er(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Ro(t))return}catch(t){}rr(t,"unauthorized-domain")}function Ro(t){const e=ur(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ao.test(n))return!1;if(_o.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ko=new gr(3e4,6e4);function Co(){const t=Js().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Oo=null;function No(t){return Oo=Oo||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Co(),n(sr(t,"network-request-failed"))},timeout:ko.get()})}if(null===(r=null===(i=Js().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Js().gapi)||void 0===s?void 0:s.load)){const e=ss("iframefcb");return Js()[e]=()=>{gapi.load?o():n(sr(t,"network-request-failed"))},rs(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Oo=null,t}))}(t),Oo}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Po=new gr(5e3,15e3),Lo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Do=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xo(t){const e=t.config;cr(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mr(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.21.0"},r=Do.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Jn(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
const Uo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Mo{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function jo(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Uo),{width:i.toString(),height:r.toString(),top:s,left:o}),h=Bn().toLowerCase();n&&(a=qr(h)?"_blank":n),zr(h)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Bn()){var e;return Yr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(h)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */(e||"",a),new Mo(null);const u=window.open(e||"",a,l);cr(u,t,"popup-blocked");try{u.focus()}catch(t){}return new Mo(u)}const Bo=encodeURIComponent("fac");async function Fo(t,e,n,i,r,s){cr(t.config.authDomain,t,"auth-domain-config-required"),cr(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.21.0",eventId:r};if(e instanceof As){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qn(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Ss){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),h=c?`#${Bo}=${encodeURIComponent(c)}`:"";return`${function({config:t}){return t.emulator?mr(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
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
 */(t)}?${Jn(a).slice(1)}${h}`}const Ho=class{async _openPopup(t,e,n,i){var r;lr(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return jo(t,await Fo(t,e,n,ur(),i),Ks())}async _openRedirect(t,e,n,i){await this._originValidation(t);return function(t){Js().location.href=t}(await Fo(t,e,n,ur(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(lr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await No(t),n=Js().gapi;return cr(n,t,"internal-error"),e.open({where:document.body,url:xo(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lo,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=sr(t,"network-request-failed"),s=Js().setTimeout((()=>{i(r)}),Po.get());function o(){Js().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Eo(t);return e.register("authEvent",(e=>{cr(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),rr(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=So(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Zr()||Wr()||Yr()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ws,this._completeRedirectFn=wo,this._overrideRedirectResult=yo}};
/**
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
 */
class $o{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){cr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
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
 */
/**
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
 */
const Vo=Un("authIdTokenMaxAge")||300;let zo=null;var Wo;Wo="Browser",Ui(new ni("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;cr(s&&!s.includes(":"),"invalid-api-key",{appName:n.name}),cr(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Wo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ts(Wo)},c=new hs(n,i,r,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(jr);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Ui(new ni("auth-internal",(t=>{const e=ls(t.getProvider("auth").getImmediate());return new $o(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),$i("@firebase/auth","0.23.1",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wo)),$i("@firebase/auth","0.23.1","esm2017");var qo,Ko="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Go={},Jo=Jo||{},Xo=Ko||self;function Yo(){}function Qo(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Zo(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ta="closure_uid_"+(1e9*Math.random()>>>0),ea=0;function na(t,e,n){return t.call.apply(t.bind,arguments)}function ia(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ra(t,e,n){return(ra=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:ia).apply(null,arguments)}function sa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function oa(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function aa(){this.s=this.s,this.o=this.o}aa.prototype.s=!1,aa.prototype.ra=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ta)&&t[ta]||(t[ta]=++ea))},aa.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ca=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ha(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function la(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Qo(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function ua(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ua.prototype.h=function(){this.defaultPrevented=!0};var da=function(){if(!Xo.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Xo.addEventListener("test",Yo,e),Xo.removeEventListener("test",Yo,e)}catch(t){}return t}();function fa(t){return/^[\s\xa0]*$/.test(t)}var pa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ga(t,e){return t<e?-1:t>e?1:0}function ma(){var t=Xo.navigator;return t&&(t=t.userAgent)?t:""}function ya(t){return-1!=ma().indexOf(t)}function va(t){return va[" "](t),t}function ba(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}va[" "]=Yo;var wa,Ea,Ta=ya("Opera"),Ia=ya("Trident")||ya("MSIE"),_a=ya("Edge"),Aa=_a||Ia,Sa=ya("Gecko")&&!(-1!=ma().toLowerCase().indexOf("webkit")&&!ya("Edge"))&&!(ya("Trident")||ya("MSIE"))&&!ya("Edge"),Ra=-1!=ma().toLowerCase().indexOf("webkit")&&!ya("Edge");function ka(){var t=Xo.document;return t?t.documentMode:void 0}t:{var Ca="",Oa=(Ea=ma(),Sa?/rv:([^\);]+)(\)|;)/.exec(Ea):_a?/Edge\/([\d\.]+)/.exec(Ea):Ia?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ea):Ra?/WebKit\/(\S+)/.exec(Ea):Ta?/(?:Version)[ \/]?(\S+)/.exec(Ea):void 0);if(Oa&&(Ca=Oa?Oa[1]:""),Ia){var Na=ka();if(null!=Na&&Na>parseFloat(Ca)){wa=String(Na);break t}}wa=Ca}var Pa,La={};if(Xo.document&&Ia){var Da=ka();Pa=Da||(parseInt(wa,10)||void 0)}else Pa=void 0;var xa=Pa;function Ua(t,e){if(ua.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sa){t:{try{va(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ma[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ua.$.h.call(this)}}oa(Ua,ua);var Ma={2:"touch",3:"pen",4:"mouse"};Ua.prototype.h=function(){Ua.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ja="closure_listenable_"+(1e6*Math.random()|0),Ba=0;function Fa(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Ba,this.fa=this.ia=!1}function Ha(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $a(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Va(t){const e={};for(const n in t)e[n]=t[n];return e}const za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<za.length;e++)n=za[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function qa(t){this.src=t,this.g={},this.h=0}function Ka(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=ca(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ha(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ga(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}qa.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Ga(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Fa(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var Ja="closure_lm_"+(1e6*Math.random()|0),Xa={};function Ya(t,e,n,i,r){if(i&&i.once)return Za(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ya(t,e[s],n,i,r);return null}return n=oc(n),t&&t[ja]?t.O(e,n,Zo(i)?!!i.capture:!!i,r):Qa(t,e,n,!1,i,r)}function Qa(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Zo(r)?!!r.capture:!!r,a=rc(t);if(a||(t[Ja]=a=new qa(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ic;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)da||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(nc(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Za(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Za(t,e[s],n,i,r);return null}return n=oc(n),t&&t[ja]?t.P(e,n,Zo(i)?!!i.capture:!!i,r):Qa(t,e,n,!0,i,r)}function tc(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)tc(t,e[s],n,i,r);else i=Zo(i)?!!i.capture:!!i,n=oc(n),t&&t[ja]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ga(s=t.g[e],n,i,r))&&(Ha(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=rc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ga(e,n,i,r)),(n=-1<t?e[t]:null)&&ec(n))}function ec(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ja])Ka(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(nc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=rc(e))?(Ka(n,t),0==n.h&&(n.src=null,e[Ja]=null)):Ha(t)}}}function nc(t){return t in Xa?Xa[t]:Xa[t]="on"+t}function ic(t,e){if(t.fa)t=!0;else{e=new Ua(e,this);var n=t.listener,i=t.la||t.src;t.ia&&ec(t),t=n.call(i,e)}return t}function rc(t){return(t=t[Ja])instanceof qa?t:null}var sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(t){return"function"==typeof t?t:(t[sc]||(t[sc]=function(e){return t.handleEvent(e)}),t[sc])}function ac(){aa.call(this),this.i=new qa(this),this.S=this,this.J=null}function cc(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new ua(e,t);else if(e instanceof ua)e.target=e.target||t;else{var r=e;Wa(e=new ua(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=hc(o,i,!0,e)&&r}if(r=hc(o=e.g=t,i,!0,e)&&r,r=hc(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=hc(o=e.g=n[s],i,!1,e)&&r}function hc(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ka(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}oa(ac,aa),ac.prototype[ja]=!0,ac.prototype.removeEventListener=function(t,e,n,i){tc(this,t,e,n,i)},ac.prototype.N=function(){if(ac.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Ha(n[i]);delete e.g[t],e.h--}}this.J=null},ac.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ac.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var lc=Xo.JSON.stringify;function uc(){var t=vc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var dc,fc=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new pc),(t=>t.reset()));class pc{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function gc(t){Xo.setTimeout((()=>{throw t}),0)}function mc(t,e){dc||function(){var t=Xo.Promise.resolve(void 0);dc=function(){t.then(bc)}}(),yc||(dc(),yc=!0),vc.add(t,e)}var yc=!1,vc=new class{add(t,e){const n=fc.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function bc(){for(var t;t=uc();){try{t.h.call(t.g)}catch(t){gc(t)}var e=fc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yc=!1}function wc(t,e){ac.call(this),this.h=t||1,this.g=e||Xo,this.j=ra(this.qb,this),this.l=Date.now()}function Ec(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Tc(t,e,n){if("function"==typeof t)n&&(t=ra(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ra(t.handleEvent,t)}return 2147483647<Number(e)?-1:Xo.setTimeout(t,e||0)}function Ic(t){t.g=Tc((()=>{t.g=null,t.i&&(t.i=!1,Ic(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}oa(wc,ac),(qo=wc.prototype).ga=!1,qo.T=null,qo.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),cc(this,"tick"),this.ga&&(Ec(this),this.start()))}},qo.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},qo.N=function(){wc.$.N.call(this),Ec(this),delete this.g};class _c extends aa{l(t){this.h=arguments,this.g?this.i=!0:Ic(this)}N(){super.N(),this.g&&(Xo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ac(t){aa.call(this),this.h=t,this.g={}}oa(Ac,aa);var Sc=[];function Rc(t,e,n,i){Array.isArray(n)||(n&&(Sc[0]=n.toString()),n=Sc);for(var r=0;r<n.length;r++){var s=Ya(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kc(t){$a(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ec(t)}),t),t.g={}}function Cc(){this.g=!0}function Oc(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return lc(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Ac.prototype.N=function(){Ac.$.N.call(this),kc(this)},Ac.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Cc.prototype.Ea=function(){this.g=!1},Cc.prototype.info=function(){};var Nc={},Pc=null;function Lc(){return Pc=Pc||new ac}function Dc(t){ua.call(this,Nc.Ta,t)}function xc(t){const e=Lc();cc(e,new Dc(e))}function Uc(t,e){ua.call(this,Nc.STAT_EVENT,t),this.stat=e}function Mc(t){const e=Lc();cc(e,new Uc(e,t))}function jc(t,e){ua.call(this,Nc.Ua,t),this.size=e}function Bc(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Xo.setTimeout((function(){t()}),e)}Nc.Ta="serverreachability",oa(Dc,ua),Nc.STAT_EVENT="statevent",oa(Uc,ua),Nc.Ua="timingevent",oa(jc,ua);var Fc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Hc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $c(){}function Vc(t){return t.h||(t.h=t.i())}function zc(){}$c.prototype.h=null;var Wc,qc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kc(){ua.call(this,"d")}function Gc(){ua.call(this,"c")}function Jc(){}function Xc(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ac(this),this.P=Qc,t=Aa?125:void 0,this.V=new wc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Yc}function Yc(){this.i=null,this.g="",this.h=!1}oa(Kc,ua),oa(Gc,ua),oa(Jc,$c),Jc.prototype.g=function(){return new XMLHttpRequest},Jc.prototype.i=function(){return{}},Wc=new Jc;var Qc=45e3,Zc={},th={};function eh(t,e,n){t.L=1,t.v=wh(gh(e)),t.s=n,t.S=!0,nh(t,null)}function nh(t,e){t.G=Date.now(),oh(t),t.A=gh(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Lh(n.i,"t",i),t.C=0,n=t.l.I,t.h=new Yc,t.g=Pl(t.l,n?e:null,!t.s),0<t.O&&(t.M=new _c(ra(t.Pa,t,t.g),t.O)),Rc(t.U,t.g,"readystatechange",t.nb),e=t.I?Va(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xc(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var l=h[0];h=h[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+h+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function ih(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function rh(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=sh(t,n),i==th){4==e&&(t.o=4,Mc(14),r=!1),Oc(t.j,t.m,null,"[Incomplete Response]");break}if(i==Zc){t.o=4,Mc(15),Oc(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Oc(t.j,t.m,i,null),uh(t,i)}ih(t)&&i!=th&&i!=Zc&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Mc(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,(e=t.l).g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_l(e),e.L=!0,Mc(11))):(Oc(t.j,t.m,n,"[Invalid Chunked Response]"),lh(t),hh(t))}function sh(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?th:(n=Number(e.substring(n,i)),isNaN(n)?Zc:(i+=1)+n>e.length?th:(e=e.substr(i,n),t.C=i+n,e))}function oh(t){t.Y=Date.now()+t.P,ah(t,t.P)}function ah(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Bc(ra(t.lb,t),e)}function ch(t){t.B&&(Xo.clearTimeout(t.B),t.B=null)}function hh(t){0==t.l.H||t.J||Rl(t.l,t)}function lh(t){ch(t);var e=t.M;e&&"function"==typeof e.ra&&e.ra(),t.M=null,Ec(t.V),kc(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function uh(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Bh(n.h,t)))if(!t.K&&Bh(n.h,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Sl(n),ml(n)}Il(n),Mc(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&0==n.A&&!n.v&&(n.v=Bc(ra(n.ib,n),6e3));if(1>=jh(n.h)&&n.na){try{n.na()}catch(t){}n.na=void 0}}else Cl(n,11)}else if((t.K||n.g==t)&&Sl(n),!fa(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.V=h[0],h=h[1],2==n.H)if("c"==h[0]){n.J=h[1],n.oa=h[2];const e=h[3];null!=e&&(n.qa=e,n.j.info("VER="+n.qa));const r=h[4];null!=r&&(n.Ga=r,n.j.info("SVER="+n.Ga));const l=h[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Fh(s,s.h),s.h=null))}if(i.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,bh(i.G,i.F,t))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Nl(i,i.I?i.oa:null,i.Y),o.K){Hh(i.h,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(ch(a),oh(a)),i.g=o}else Tl(i);0<n.i.length&&vl(n)}else"stop"!=h[0]&&"close"!=h[0]||Cl(n,7);else 3==n.H&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Cl(n,7):gl(n):"noop"!=h[0]&&n.l&&n.l.Aa(h),n.A=0)}xc()}catch(t){}}function dh(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Qo(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.sa&&"function"==typeof t.sa)return t.sa();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Qo(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Qo(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(qo=Xc.prototype).setTimeout=function(t){this.P=t},qo.nb=function(t){t=t.target;const e=this.M;e&&3==hl(t)?e.l():this.Pa(t)},qo.Pa=function(t){try{if(t==this.g)t:{const l=hl(this.g);var e=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||Aa||this.g&&(this.h.h||this.g.ja()||ll(this.g)))){this.J||4!=l||7==e||xc(),ch(this);var n=this.g.da();this.aa=n;e:if(ih(this)){var i=ll(this.g);t="";var r=i.length,s=4==hl(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){lh(this),hh(this);var o="";break e}this.h.i=new Xo.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fa(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Mc(12),lh(this),hh(this);break t}Oc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uh(this,n)}this.S?(rh(this,l,o),Aa&&this.i&&3==l&&(Rc(this.U,this.V,"tick",this.mb),this.V.start())):(Oc(this.j,this.m,o,null),uh(this,o)),4==l&&lh(this),this.i&&!this.J&&(4==l?Rl(this.l,this):(this.i=!1,oh(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Mc(12)):(this.o=0,Mc(13)),lh(this),hh(this)}}}catch(t){}},qo.mb=function(){if(this.g){var t=hl(this.g),e=this.g.ja();this.C<e.length&&(ch(this),rh(this,t,e),this.i&&4!=t&&oh(this))}},qo.cancel=function(){this.J=!0,lh(this)},qo.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(xc(),Mc(17)),lh(this),this.o=2,hh(this)):ah(this,this.Y-t)};var fh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ph(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ph){this.h=void 0!==e?e:t.h,mh(this,t.j),this.s=t.s,this.g=t.g,yh(this,t.m),this.l=t.l,e=t.i;var n=new Ch;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vh(this,n),this.o=t.o}else t&&(n=String(t).match(fh))?(this.h=!!e,mh(this,n[1]||"",!0),this.s=Eh(n[2]||""),this.g=Eh(n[3]||"",!0),yh(this,n[4]),this.l=Eh(n[5]||"",!0),vh(this,n[6]||"",!0),this.o=Eh(n[7]||"")):(this.h=!!e,this.i=new Ch(null,this.h))}function gh(t){return new ph(t)}function mh(t,e,n){t.j=n?Eh(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vh(t,e,n){e instanceof Ch?(t.i=e,function(t,e){e&&!t.j&&(Oh(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Nh(this,e),Lh(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Th(e,Rh)),t.i=new Ch(e,t.h))}function bh(t,e,n){t.i.set(e,n)}function wh(t){return bh(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Eh(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Th(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ih),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ih(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ph.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Th(e,_h,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Th(e,_h,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Th(n,"/"==n.charAt(0)?Sh:Ah,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Th(n,kh)),t.join("")};var _h=/[#\/\?@]/g,Ah=/[#\?:]/g,Sh=/[#\?]/g,Rh=/[#\?@]/g,kh=/#/g;function Ch(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Oh(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Nh(t,e){Oh(t),e=Dh(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ph(t,e){return Oh(t),e=Dh(t,e),t.g.has(e)}function Lh(t,e,n){Nh(t,e),0<n.length&&(t.i=null,t.g.set(Dh(t,e),ha(n)),t.h+=n.length)}function Dh(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(qo=Ch.prototype).add=function(t,e){Oh(this),this.i=null,t=Dh(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},qo.forEach=function(t,e){Oh(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},qo.sa=function(){Oh(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},qo.Z=function(t){Oh(this);let e=[];if("string"==typeof t)Ph(this,t)&&(e=e.concat(this.g.get(Dh(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},qo.set=function(t,e){return Oh(this),this.i=null,Ph(this,t=Dh(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},qo.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},qo.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function xh(t){this.l=t||Uh,Xo.PerformanceNavigationTiming?t=0<(t=Xo.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Xo.g&&Xo.g.Ka&&Xo.g.Ka()&&Xo.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Uh=10;function Mh(t){return!!t.h||!!t.g&&t.g.size>=t.j}function jh(t){return t.h?1:t.g?t.g.size:0}function Bh(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Fh(t,e){t.g?t.g.add(e):t.h=e}function Hh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function $h(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ha(t.i)}function Vh(){}function zh(){this.g=new Vh}function Wh(t,e,n){const i=n||"";try{dh(t,(function(t,n){let r=t;Zo(t)&&(r=lc(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function qh(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Kh(t){this.l=t.fc||null,this.j=t.ob||!1}function Gh(t,e){ac.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xh.prototype.cancel=function(){if(this.i=$h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Vh.prototype.stringify=function(t){return Xo.JSON.stringify(t,void 0)},Vh.prototype.parse=function(t){return Xo.JSON.parse(t,void 0)},oa(Kh,$c),Kh.prototype.g=function(){return new Gh(this.l,this.j)},Kh.prototype.i=function(t){return function(){return t}}({}),oa(Gh,ac);var Jh=0;function Xh(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Yh(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qh(t)}function Qh(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(qo=Gh.prototype).open=function(t,e){if(this.readyState!=Jh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qh(this)},qo.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Xo).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},qo.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Yh(this)),this.readyState=Jh},qo.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qh(this)),this.g&&(this.readyState=3,Qh(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Xo.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xh(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},qo.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yh(this):Qh(this),3==this.readyState&&Xh(this)}},qo.Za=function(t){this.g&&(this.response=this.responseText=t,Yh(this))},qo.Ya=function(t){this.g&&(this.response=t,Yh(this))},qo.ka=function(){this.g&&Yh(this)},qo.setRequestHeader=function(t,e){this.v.append(t,e)},qo.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},qo.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Gh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Zh=Xo.JSON.parse;function tl(t){ac.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=el,this.L=this.M=!1}oa(tl,ac);var el="",nl=/^https?$/i,il=["POST","PUT"];function rl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sl(t),al(t)}function sl(t){t.F||(t.F=!0,cc(t,"complete"),cc(t,"error"))}function ol(t){if(t.h&&void 0!==Jo&&(!t.C[1]||4!=hl(t)||2!=t.da()))if(t.v&&4==hl(t))Tc(t.La,0,t);else if(cc(t,"readystatechange"),4==hl(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.I).match(fh)[1]||null;if(!r&&Xo.self&&Xo.self.location){var s=Xo.self.location.protocol;r=s.substr(0,s.length-1)}i=!nl.test(r?r.toLowerCase():"")}n=i}if(n)cc(t,"complete"),cc(t,"success");else{t.m=6;try{var o=2<hl(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.da()+"]",sl(t)}}finally{al(t)}}}function al(t,e){if(t.g){cl(t);const n=t.g,i=t.C[0]?Yo:null;t.g=null,t.C=null,e||cc(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function cl(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Xo.clearTimeout(t.A),t.A=null)}function hl(t){return t.g?t.g.readyState:0}function ll(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case el:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ul(t){let e="";return $a(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function dl(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ul(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):bh(t,e,n))}function fl(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pl(t){this.Ga=0,this.i=[],this.j=new Cc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fl("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fl("baseRetryDelayMs",5e3,t),this.hb=fl("retryDelaySeedMs",1e4,t),this.eb=fl("forwardChannelMaxRetries",2,t),this.xa=fl("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new xh(t&&t.concurrentRequestLimit),this.Ja=new zh,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function gl(t){if(yl(t),3==t.H){var e=t.W++,n=gh(t.G);bh(n,"SID",t.J),bh(n,"RID",e),bh(n,"TYPE","terminate"),wl(t,n),(e=new Xc(t,t.j,e,void 0)).L=2,e.v=wh(gh(n)),n=!1,Xo.navigator&&Xo.navigator.sendBeacon&&(n=Xo.navigator.sendBeacon(e.v.toString(),"")),!n&&Xo.Image&&((new Image).src=e.v,n=!0),n||(e.g=Pl(e.l,null),e.g.ha(e.v)),e.G=Date.now(),oh(e)}Ol(t)}function ml(t){t.g&&(_l(t),t.g.cancel(),t.g=null)}function yl(t){ml(t),t.u&&(Xo.clearTimeout(t.u),t.u=null),Sl(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Xo.clearTimeout(t.m),t.m=null)}function vl(t){Mh(t.h)||t.m||(t.m=!0,mc(t.Na,t),t.C=0)}function bl(t,e){var n;n=e?e.m:t.W++;const i=gh(t.G);bh(i,"SID",t.J),bh(i,"RID",n),bh(i,"AID",t.V),wl(t,i),t.o&&t.s&&dl(i,t.o,t.s),n=new Xc(t,t.j,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=El(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fh(t.h,n),eh(n,i,e)}function wl(t,e){t.ma&&$a(t.ma,(function(t,n){bh(e,n,t)})),t.l&&dh({},(function(t,n){bh(e,n,t)}))}function El(t,e,n){n=Math.min(t.i.length,n);var i=t.l?ra(t.l.Va,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Wh(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.F=t,i}function Tl(t){t.g||t.u||(t.ba=1,mc(t.Ma,t),t.A=0)}function Il(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Bc(ra(t.Ma,t),kl(t,t.A)),t.A++,!0)}function _l(t){null!=t.B&&(Xo.clearTimeout(t.B),t.B=null)}function Al(t){t.g=new Xc(t,t.j,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=gh(t.wa);bh(e,"RID","rpc"),bh(e,"SID",t.J),bh(e,"CI",t.M?"0":"1"),bh(e,"AID",t.V),bh(e,"TYPE","xmlhttp"),wl(t,e),t.o&&t.s&&dl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=wh(gh(e)),n.s=null,n.S=!0,nh(n,t)}function Sl(t){null!=t.v&&(Xo.clearTimeout(t.v),t.v=null)}function Rl(t,e){var n=null;if(t.g==e){Sl(t),_l(t),t.g=null;var i=2}else{if(!Bh(t.h,e))return;n=e.F,Hh(t.h,e),i=1}if(0!=t.H)if(t.ta=e.aa,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;cc(i=Lc(),new jc(i,n)),vl(t)}else Tl(t);else if(3==(r=e.o)||0==r&&0<t.ta||!(1==i&&function(t,e){return!(jh(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.F.concat(t.i),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Bc(ra(t.Na,t,e),kl(t,t.C)),t.C++,0)))}(t,e)||2==i&&Il(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Cl(t,5);break;case 4:Cl(t,10);break;case 3:Cl(t,6);break;default:Cl(t,2)}}function kl(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Cl(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=ra(t.pb,t);n||(n=new ph("//www.google.com/images/cleardot.gif"),Xo.location&&"http"==Xo.location.protocol||mh(n,"https"),wh(n)),function(t,e){const n=new Cc;if(Xo.Image){const i=new Image;i.onload=sa(qh,n,i,"TestLoadImage: loaded",!0,e),i.onerror=sa(qh,n,i,"TestLoadImage: error",!1,e),i.onabort=sa(qh,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=sa(qh,n,i,"TestLoadImage: timeout",!1,e),Xo.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Mc(2);t.H=0,t.l&&t.l.za(e),Ol(t),yl(t)}function Ol(t){if(t.H=0,t.pa=[],t.l){const e=$h(t.h);0==e.length&&0==t.i.length||(la(t.pa,e),la(t.pa,t.i),t.h.i.length=0,ha(t.i),t.i.length=0),t.l.ya()}}function Nl(t,e,n){var i=n instanceof ph?gh(n):new ph(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),yh(i,i.m);else{var r=Xo.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new ph(null,void 0);i&&mh(s,i),e&&(s.g=e),r&&yh(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&bh(i,n,e),bh(i,"VER",t.qa),wl(t,i),i}function Pl(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new tl(new Kh({ob:!0})):new tl(t.va)).Oa(t.I),e}function Ll(){}function Dl(){if(Ia&&!(10<=Number(xa)))throw Error("Environmental error: no available transport.")}function xl(t,e){ac.call(this),this.g=new pl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fa(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new jl(this)}function Ul(t){Kc.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ml(){Gc.call(this),this.status=1}function jl(t){this.g=t}function Bl(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Fl(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function Hl(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(qo=tl.prototype).Oa=function(t){this.M=t},qo.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wc.g(),this.C=this.u?Vc(this.u):Vc(Wc),this.g.onreadystatechange=ra(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void rl(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Xo.FormData&&t instanceof Xo.FormData,!(0<=ca(il,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cl(this),0<this.B&&((this.L=function(t){return Ia&&ba(La,9,(function(){let t=0;const e=pa(String(wa)).split("."),n=pa("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=ga(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||ga(0==r[2].length,0==s[2].length)||ga(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ra(this.ua,this)):this.A=Tc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){rl(this,t)}},qo.ua=function(){void 0!==Jo&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,cc(this,"timeout"),this.abort(8))},qo.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,cc(this,"complete"),cc(this,"abort"),al(this))},qo.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),al(this,!0)),tl.$.N.call(this)},qo.La=function(){this.s||(this.G||this.v||this.l?ol(this):this.kb())},qo.kb=function(){ol(this)},qo.da=function(){try{return 2<hl(this)?this.g.status:-1}catch(t){return-1}},qo.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},qo.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Zh(e)}},qo.Ia=function(){return this.m},qo.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(qo=pl.prototype).qa=8,qo.H=1,qo.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Xc(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Va(s),Wa(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=El(this,r,e),bh(n=gh(this.G),"RID",t),bh(n,"CVER",22),this.F&&bh(n,"X-HTTP-Session-Id",this.F),wl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ul(s)))+"&"+e:this.o&&dl(n,this.o,s)),Fh(this.h,r),this.bb&&bh(n,"TYPE","init"),this.P?(bh(n,"$req",e),bh(n,"SID","null"),r.ba=!0,eh(r,n,null)):eh(r,n,e),this.H=2}}else 3==this.H&&(t?bl(this,t):0==this.i.length||Mh(this.h)||bl(this))},qo.Ma=function(){if(this.u=null,Al(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Bc(ra(this.jb,this),t)}},qo.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Mc(10),ml(this),Al(this))},qo.ib=function(){null!=this.v&&(this.v=null,ml(this),Il(this),Mc(19))},qo.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Mc(2)):(this.j.info("Failed to ping google.com"),Mc(1))},(qo=Ll.prototype).Ba=function(){},qo.Aa=function(){},qo.za=function(){},qo.ya=function(){},qo.Va=function(){},Dl.prototype.g=function(t,e){return new xl(t,e)},oa(xl,ac),xl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Mc(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Nl(t,null,t.Y),vl(t)},xl.prototype.close=function(){gl(this.g)},xl.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=lc(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.fb++,t)),3==e.H&&vl(e)},xl.prototype.N=function(){this.g.l=null,delete this.j,gl(this.g),delete this.g,xl.$.N.call(this)},oa(Ul,Kc),oa(Ml,Gc),oa(jl,Ll),jl.prototype.Ba=function(){cc(this.g,"a")},jl.prototype.Aa=function(t){cc(this.g,new Ul(t))},jl.prototype.za=function(t){cc(this.g,new Ml)},jl.prototype.ya=function(){cc(this.g,"b")},oa(Bl,(function(){this.blockSize=-1})),Bl.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Bl.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)Fl(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Fl(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Fl(this,i),r=0;break}}this.h=r,this.i+=e},Bl.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var $l={};function Vl(t){return-128<=t&&128>t?ba($l,t,(function(t){return new Hl([0|t],0>t?-1:0)})):new Hl([0|t],0>t?-1:0)}function zl(t){if(isNaN(t)||!isFinite(t))return ql;if(0>t)return Yl(zl(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Wl;return new Hl(e,0)}var Wl=4294967296,ql=Vl(0),Kl=Vl(1),Gl=Vl(16777216);function Jl(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Xl(t){return-1==t.h}function Yl(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Hl(n,~t.h).add(Kl)}function Ql(t,e){return t.add(Yl(e))}function Zl(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function tu(t,e){this.g=t,this.h=e}function eu(t,e){if(Jl(e))throw Error("division by zero");if(Jl(t))return new tu(ql,ql);if(Xl(t))return e=eu(Yl(t),e),new tu(Yl(e.g),Yl(e.h));if(Xl(e))return e=eu(t,Yl(e)),new tu(Yl(e.g),e.h);if(30<t.g.length){if(Xl(t)||Xl(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Kl,i=e;0>=i.X(t);)n=nu(n),i=nu(i);var r=iu(n,1),s=iu(i,1);for(i=iu(i,2),n=iu(n,2);!Jl(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=iu(i,1),n=iu(n,1)}return e=Ql(t,r.R(e)),new tu(r,e)}for(r=ql;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=zl(n)).R(e);Xl(o)||0<o.X(t);)o=(s=zl(n-=i)).R(e);Jl(s)&&(s=Kl),r=r.add(s),t=Ql(t,o)}return new tu(r,t)}function nu(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Hl(n,t.h)}function iu(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Hl(r,t.h)}(qo=Hl.prototype).ea=function(){if(Xl(this))return-Yl(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Wl+i)*e,e*=Wl}return t},qo.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Jl(this))return"0";if(Xl(this))return"-"+Yl(this).toString(t);for(var e=zl(Math.pow(t,6)),n=this,i="";;){var r=eu(n,e).g,s=((0<(n=Ql(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Jl(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},qo.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},qo.X=function(t){return Xl(t=Ql(this,t))?-1:Jl(t)?0:1},qo.abs=function(){return Xl(this)?Yl(this):this},qo.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Hl(n,-2147483648&n[n.length-1]?-1:0)},qo.R=function(t){if(Jl(this)||Jl(t))return ql;if(Xl(this))return Xl(t)?Yl(this).R(Yl(t)):Yl(Yl(this).R(t));if(Xl(t))return Yl(this.R(Yl(t)));if(0>this.X(Gl)&&0>t.X(Gl))return zl(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,c=65535&t.D(r);n[2*i+2*r]+=o*c,Zl(n,2*i+2*r),n[2*i+2*r+1]+=s*c,Zl(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Zl(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Zl(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Hl(n,0)},qo.gb=function(t){return eu(this,t).h},qo.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Hl(n,this.h&t.h)},qo.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Hl(n,this.h|t.h)},qo.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Hl(n,this.h^t.h)},Dl.prototype.createWebChannel=Dl.prototype.g,xl.prototype.send=xl.prototype.u,xl.prototype.open=xl.prototype.m,xl.prototype.close=xl.prototype.close,Fc.NO_ERROR=0,Fc.TIMEOUT=8,Fc.HTTP_ERROR=6,Hc.COMPLETE="complete",zc.EventType=qc,qc.OPEN="a",qc.CLOSE="b",qc.ERROR="c",qc.MESSAGE="d",ac.prototype.listen=ac.prototype.O,tl.prototype.listenOnce=tl.prototype.P,tl.prototype.getLastError=tl.prototype.Sa,tl.prototype.getLastErrorCode=tl.prototype.Ia,tl.prototype.getStatus=tl.prototype.da,tl.prototype.getResponseJson=tl.prototype.Wa,tl.prototype.getResponseText=tl.prototype.ja,tl.prototype.send=tl.prototype.ha,tl.prototype.setWithCredentials=tl.prototype.Oa,Bl.prototype.digest=Bl.prototype.l,Bl.prototype.reset=Bl.prototype.reset,Bl.prototype.update=Bl.prototype.j,Hl.prototype.add=Hl.prototype.add,Hl.prototype.multiply=Hl.prototype.R,Hl.prototype.modulo=Hl.prototype.gb,Hl.prototype.compare=Hl.prototype.X,Hl.prototype.toNumber=Hl.prototype.ea,Hl.prototype.toString=Hl.prototype.toString,Hl.prototype.getBits=Hl.prototype.D,Hl.fromNumber=zl,Hl.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Yl(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=zl(Math.pow(n,8)),r=ql,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=zl(Math.pow(n,o)),r=r.R(o).add(zl(a))):r=(r=r.R(i)).add(zl(a))}return r};Go.createWebChannelTransport=function(){return new Dl},Go.getStatEventTarget=function(){return Lc()},Go.ErrorCode=Fc,Go.EventType=Hc,Go.Event=Nc,Go.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Go.FetchXmlHttpFactory=Kh,Go.WebChannel=zc,Go.XhrIo=tl,Go.Md5=Bl;var ru=Go.Integer=Hl;
/**
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
 */
class su{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}su.UNAUTHENTICATED=new su(null),su.GOOGLE_CREDENTIALS=new su("google-credentials-uid"),su.FIRST_PARTY=new su("first-party-uid"),su.MOCK_USER=new su("mock-user");
/**
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
 */
let ou="9.21.0";
/**
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
 */const au=new di("@firebase/firestore");function cu(t,...e){if(au.logLevel<=oi.DEBUG){const n=e.map(uu);au.debug(`Firestore (${ou}): ${t}`,...n)}}function hu(t,...e){if(au.logLevel<=oi.ERROR){const n=e.map(uu);au.error(`Firestore (${ou}): ${t}`,...n)}}function lu(t,...e){if(au.logLevel<=oi.WARN){const n=e.map(uu);au.warn(`Firestore (${ou}): ${t}`,...n)}}function uu(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function du(t="Unexpected state"){const e=`FIRESTORE (${ou}) INTERNAL ASSERTION FAILED: `+t;throw hu(e),new Error(e)}function fu(t,e){t||du()}
/**
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
 */
const pu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class gu extends Vn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class mu{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class yu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(su.UNAUTHENTICATED)))}shutdown(){}}class bu{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class wu{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new mu;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mu,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{cu("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(cu("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mu)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(cu("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(fu("string"==typeof e.accessToken),new yu(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return fu(null===t||"string"==typeof t),new su(t)}constructor(t){this.t=t,this.currentUser=su.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Eu{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=su.FIRST_PARTY,this.g=new Map}}class Tu{getToken(){return Promise.resolve(new Eu(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(su.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class Iu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _u{start(t,e){const n=t=>{null!=t.error&&cu("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,cu("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{cu("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?i(t):cu("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(fu("string"==typeof t.token),this.T=t.token,new Iu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
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
 */
function Au(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
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
 */class Su{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Au(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Ru(t,e){return t<e?-1:t>e?1:0}
/**
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
 */
class ku{get length(){return this.len}isEqual(t){return 0===ku.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ku?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&du(),void 0===n?n=t.length-e:n>t.length-e&&du(),this.segments=t,this.offset=e,this.len=n}}class Cu extends ku{construct(t,e,n){return new Cu(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new gu(pu.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Cu(e)}static emptyPath(){return new Cu([])}}
/**
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
 */
class Ou{static fromPath(t){return new Ou(Cu.fromString(t))}static fromName(t){return new Ou(Cu.fromString(t).popFirst(5))}static empty(){return new Ou(Cu.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Cu.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Cu.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ou(new Cu(t.slice()))}constructor(t){this.path=t}}
/**
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
 */class Nu{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Nu.UNKNOWN_ID=-1;function Pu(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class Lu{ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}}function Du(t){return 0===t&&1/t==-1/0}Lu.ct=-1;const xu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Uu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Mu=Uu;
/**
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
 */
/**
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
 */
class ju{insert(t,e){return new ju(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Fu.BLACK,null,null))}remove(t){return new ju(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Fu.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bu(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bu(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Fu.EMPTY}}class Bu{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Fu{copy(t,e,n,i,r){return new Fu(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fu.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Fu.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Fu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Fu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw du();if(this.right.isRed())throw du();const t=this.left.check();if(t!==this.right.check())throw du();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Fu.RED,this.left=null!=i?i:Fu.EMPTY,this.right=null!=r?r:Fu.EMPTY,this.size=this.left.size+1+this.right.size}}Fu.EMPTY=null,Fu.RED=!0,Fu.BLACK=!1,Fu.EMPTY=new class{get key(){throw du()}get value(){throw du()}get color(){throw du()}get left(){throw du()}get right(){throw du()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Fu(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
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
 */
class Hu{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $u(this.data.getIterator())}getIteratorFrom(t){return new $u(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Hu))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Hu(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new ju(this.comparator)}}class $u{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
class Vu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */let zu=Symbol.iterator;
/**
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
 */class Wu{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Vu("Invalid base64 string: "+t):t}}(t);return new Wu(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Wu(e)}[zu](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ru(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Wu.EMPTY_BYTE_STRING=new Wu("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qu(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ku(t){return"string"==typeof t?Wu.fromBase64String(t):Wu.fromUint8Array(t)}
/**
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
 */
/**
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
 */
class Gu{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ju{static empty(){return new Ju("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ju&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
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
 */function Xu(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
new ju(Ou.comparator);new ju(Ou.comparator);new ju(Ou.comparator),new Hu(Ou.comparator);new Hu(Ru);
/**
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
 */
var Yu,Qu;(Qu=Yu||(Yu={}))[Qu.OK=0]="OK",Qu[Qu.CANCELLED=1]="CANCELLED",Qu[Qu.UNKNOWN=2]="UNKNOWN",Qu[Qu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qu[Qu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qu[Qu.NOT_FOUND=5]="NOT_FOUND",Qu[Qu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qu[Qu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qu[Qu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qu[Qu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qu[Qu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qu[Qu.ABORTED=10]="ABORTED",Qu[Qu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qu[Qu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qu[Qu.INTERNAL=13]="INTERNAL",Qu[Qu.UNAVAILABLE=14]="UNAVAILABLE",Qu[Qu.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new ru([4294967295,4294967295],0);Error;
/**
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
 */
/**
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
 */class Zu{_e(t,e){this.we(t,e),e.me()}we(t,e){if("nullValue"in t)this.ge(e,5);else if("booleanValue"in t)this.ge(e,10),e.ye(t.booleanValue?1:0);else if("integerValue"in t)this.ge(e,15),e.ye(qu(t.integerValue));else if("doubleValue"in t){const n=qu(t.doubleValue);isNaN(n)?this.ge(e,13):(this.ge(e,15),Du(n)?e.ye(0):e.ye(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ge(e,20),"string"==typeof n?e.pe(n):(e.pe(`${n.seconds||""}`),e.ye(n.nanos||0))}else if("stringValue"in t)this.Ie(t.stringValue,e),this.Te(e);else if("bytesValue"in t)this.ge(e,30),e.Ee(Ku(t.bytesValue)),this.Te(e);else if("referenceValue"in t)this.Ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ge(e,45),e.ye(n.latitude||0),e.ye(n.longitude||0)}else"mapValue"in t?Xu(t)?this.ge(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Te(e)):"arrayValue"in t?(this.ve(t.arrayValue,e),this.Te(e)):du()}Ie(t,e){this.ge(e,25),this.Pe(t,e)}Pe(t,e){e.pe(t)}Re(t,e){const n=t.fields||{};this.ge(e,55);for(const t of Object.keys(n))this.Ie(t,e),this.we(n[t],e)}ve(t,e){const n=t.values||[];this.ge(e,50);for(const t of n)this.we(t,e)}Ae(t,e){this.ge(e,37),Ou.fromName(t).path.forEach((t=>{this.ge(e,60),this.Pe(t,e)}))}ge(t,e){t.ye(e)}Te(t){t.ye(2)}constructor(){}}Zu.be=new Zu;
/**
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
 */
new Uint8Array(0);class td{static withCacheSize(t){return new td(t,td.DEFAULT_COLLECTION_PERCENTILE,td.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */
/**
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
 */td.DEFAULT_COLLECTION_PERCENTILE=10,td.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,td.DEFAULT=new td(41943040,td.DEFAULT_COLLECTION_PERCENTILE,td.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),td.DISABLED=new td(-1,0,0);function ed(){return"undefined"!=typeof document?document:null}
/**
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
 */
/**
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
 */
class nd{reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const e=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),i=Math.max(0,e-n);i>0&&cu("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,(()=>(this.Do=Date.now(),t()))),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}constructor(t,e,n=1e3,i=1.5,r=6e4){this.si=t,this.timerId=e,this.vo=n,this.Po=i,this.bo=r,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}}
/**
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
 */
/**
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
 */
class id{static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new id(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new gu(pu.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new mu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function rd(t,e){if(hu("AsyncQueue",`${e}: ${t}`),Pu(t))return new gu(pu.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */
/**
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
 */
class sd{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new gu(pu.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new mu;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=rd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=su.UNAUTHENTICATED,this.clientId=Su.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{cu("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(cu("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}
/**
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
 */
const od=new Map;
/**
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
 */function ad(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":du()}function cd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new gu(pu.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ad(t);throw new gu(pu.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class hd{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new gu(pu.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new gu(pu.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new gu(pu.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling||void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}}
/**
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
 */class ld{get app(){if(!this._app)throw new gu(pu.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new gu(pu.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hd(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new vu;switch(t.type){case"firstParty":return new Tu(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new gu(pu.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=od.get(t);e&&(cu("ComponentProvider","Removing Datastore"),od.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hd({}),this._settingsFrozen=!1}}function ud(t,e,n,i={}){var r;const s=(t=cd(t,ld))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&lu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=su.MOCK_USER;else{e=jn(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new gu(pu.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new su(s)}t._authCredentials=new bu(new yu(e,n))}}
/**
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
 */
/**
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
 */
class dd{get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const e=ed();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise((()=>{}));const e=new mu;return this.Zc((()=>this.Qc&&this.Hc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Gc.push(t),this.ta())))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Pu(t))throw t;cu("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo((()=>this.ta()))}}Zc(t){const e=this.Kc.then((()=>(this.Wc=!0,t().catch((t=>{this.zc=t,this.Wc=!1;throw hu("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Wc=!1,t))))));return this.Kc=e,e}enqueueAfterDelay(t,e,n){this.Xc(),this.Jc.indexOf(t)>-1&&(e=0);const i=id.createAndSchedule(this,t,e,n,(t=>this.ea(t)));return this.jc.push(i),i}Xc(){this.zc&&du()}verifyOperationInProgress(){}async na(){let t;do{t=this.Kc,await t}while(t!==this.Kc)}sa(t){for(const e of this.jc)if(e.timerId===t)return!0;return!1}ia(t){return this.na().then((()=>{this.jc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.jc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.na()}))}ra(t){this.Jc.push(t)}ea(t){const e=this.jc.indexOf(t);this.jc.splice(e,1)}constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new nd(this,"async_queue_retry"),this.Yc=()=>{const t=ed();t&&cu("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Lo.ko()};const t=ed();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Yc)}}class fd extends ld{_terminate(){return this._firestoreClient||pd(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new dd,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function pd(t){var e,n,i;const r=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new Gu(o,a,c,(h=r).host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,h.useFetchStreams));var o,a,c,h;t._firestoreClient=new sd(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){ou="9.21.0",Ui(new ni("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new fd(new wu(t.getProvider("auth-internal")),new _u(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new gu(pu.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ju(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),$i("@firebase/firestore","3.11.0",t),$i("@firebase/firestore","3.11.0","esm2017")}();const gd={emailForm:document.querySelector(".js-email"),passwordForm:document.querySelector(".js-password"),formTest:document.querySelector(".js-test")},md={emailLogIn:document.querySelector(".js-email__log"),passwordLogIn:document.querySelector(".js-password__log"),FormLogIn:document.querySelector(".js-log-in")},yd=(document.querySelector(".header__account-box"),document.querySelector(".js-sign_out")),vd=Fi({apiKey:"AIzaSyCJMItHBqFDoLJDsSUvyhMYr2rtrI8eHJA",authDomain:"naruto-a4b10.firebaseapp.com",projectId:"naruto-a4b10",storageBucket:"naruto-a4b10.appspot.com",messagingSenderId:"201982864594",appId:"1:201982864594:web:dd8cc327b440809fc0510b",measurementId:"G-5S182CBZBL"}),bd=function(t=Hi()){const e=Mi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Mi(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(Kn(n.getOptions(),null!=e?e:{}))return t;rr(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Ho,persistence:[io,Vs,Ws]}),i=Un("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Vo)return;const i=null==e?void 0:e.token;zo!==i&&(zo=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){ei(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){ei(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=Dn("auth");return s&&ds(n,`http://${s}`),n}(vd);!function(t,e){const n="string"==typeof t?t:e||"(default)",i=Mi("object"==typeof t?t:Hi(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=xn("firestore");t&&ud(i,...t)}}(vd);var wd,Ed,Td;gd.formTest.addEventListener("submit",(function(t){t.preventDefault(),gd.formTest.reset(),Fs(bd,gd.emailForm.value,gd.passwordForm.value).then((t=>{t.user})).catch((t=>{t.code,t.message}))})),md.FormLogIn.addEventListener("submit",(function(t){t.preventDefault(),md.FormLogIn.reset(),(e=bd,n=md.emailLogIn.value,i=md.passwordLogIn.value,Bs(ei(e),_s.credential(n,i))).then((t=>{const e=t.user;console.log(e),console.log("Signed in"),changeAccountBox(e)})).catch((t=>{console.log(t,"Signed in");t.code,t.message}));var e,n,i;
/**
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
 */})),yd.addEventListener("click",(function(t){console.log(t),(e=bd,ei(e).signOut()).then((()=>{console.log("Log out")})).catch((t=>{console.log(t,"Log out error")}));var e})),wd=t=>{if(t){const e=t.uid;t.email,console.log(e)}else console.log("Anyone log in")},ei(bd).onAuthStateChanged(wd,Ed,Td);var Id=Object.defineProperty,_d=(t,e,n)=>(((t,e,n)=>{e in t?Id(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);const Ad={},Sd=t=>{const{type:e,currentTarget:n}=t;[...Ad[e]].forEach((([i,r])=>{n===i&&[...r].forEach((([n,r])=>{n.apply(i,[t]),"object"==typeof r&&r.once&&kd(i,e,n,r)}))}))},Rd=(t,e,n,i)=>{Ad[e]||(Ad[e]=new Map);const r=Ad[e];r.has(t)||r.set(t,new Map);const s=r.get(t),{size:o}=s;s.set(n,i),o||t.addEventListener(e,Sd,i)},kd=(t,e,n,i)=>{const r=Ad[e],s=r&&r.get(t),o=s&&s.get(n),a=void 0!==o?o:i;s&&s.has(n)&&s.delete(n),r&&(!s||!s.size)&&r.delete(t),(!r||!r.size)&&delete Ad[e],(!s||!s.size)&&t.removeEventListener(e,Sd,a)},Cd=Rd,Od=kd,Nd=(Symbol.toStringTag,"focusin"),Pd="focusout",Ld="click",Dd="mousedown",xd="mouseenter",Ud="mouseleave",Md="resize",jd="scroll",Bd="ArrowDown",Fd="ArrowUp",Hd=navigator.userAgentData,{userAgent:$d}=navigator,Vd=$d,zd=/iPhone|iPad|iPod|Android/i;Hd?Hd.brands.some((t=>zd.test(t.brand))):zd.test(Vd);const Wd=/(iPhone|iPod|iPad)/,qd=Hd?Hd.brands.some((t=>Wd.test(t.brand))):Wd.test(Vd);Vd&&Vd.includes("Firefox");const{head:Kd}=document;["webkitPerspective","perspective"].some((t=>t in Kd.style));const Gd=()=>{};(()=>{let t=!1;try{const e=Object.defineProperty({},"passive",{get:()=>(t=!0,t)});((t,e,n,i)=>{const r=s=>{(s.target===t||s.currentTarget===t)&&(n.apply(t,[s]),((t,e,n,i)=>{const r=i||!1;t.removeEventListener(e,n,r)})(t,e,r,i))};((t,e,n,i)=>{const r=i||!1;t.addEventListener(e,n,r)})(t,e,r,i)})(document,"DOMContentLoaded",Gd,e)}catch{}})(),["webkitTransform","transform"].some((t=>t in Kd.style)),["webkitAnimation","animation"].some((t=>t in Kd.style)),["webkitTransition","transition"].some((t=>t in Kd.style));const Jd=(t,e)=>t.getAttribute(e),Xd=(t,e)=>t.hasAttribute(e),Yd=(t,e,n)=>t.setAttribute(e,n),Qd=(t,e)=>t.removeAttribute(e),Zd=(t,...e)=>{t.classList.add(...e)},tf=(t,...e)=>{t.classList.remove(...e)},ef=(t,e)=>t.classList.contains(e),nf=t=>null!=t&&"object"==typeof t||!1,rf=t=>nf(t)&&"number"==typeof t.nodeType&&[1,2,3,4,5,6,7,8,9,10,11].some((e=>t.nodeType===e))||!1,sf=t=>rf(t)&&1===t.nodeType||!1,of=new Map,af={data:of,set:(t,e,n)=>{sf(t)&&(of.has(e)||of.set(e,new Map),of.get(e).set(t,n))},getAllFor:t=>of.get(t)||null,get:(t,e)=>{if(!sf(t)||!e)return null;const n=af.getAllFor(e);return t&&n&&n.get(t)||null},remove:(t,e)=>{const n=af.getAllFor(e);!n||!sf(t)||(n.delete(t),0===n.size&&of.delete(e))}},cf=(t,e)=>af.get(t,e),hf=t=>"string"==typeof t||!1,lf=t=>nf(t)&&"Window"===t.constructor.name||!1,uf=t=>rf(t)&&9===t.nodeType||!1,df=t=>lf(t)?t.document:uf(t)?t:rf(t)?t.ownerDocument:window.document,ff=(t,...e)=>Object.assign(t,...e),pf=t=>{if(!t)return;if(hf(t))return df().createElement(t);const{tagName:e}=t,n=pf(e);if(!n)return;const i={...t};return delete i.tagName,ff(n,i)},gf=(t,e)=>t.dispatchEvent(e),mf=(t,e)=>{const n=getComputedStyle(t),i=e.replace("webkit","Webkit").replace(/([A-Z])/g,"-$1").toLowerCase();return n.getPropertyValue(i)},yf=t=>{const e=mf(t,"transitionProperty"),n=mf(t,"transitionDuration"),i=n.includes("ms")?1:1e3,r=e&&"none"!==e?parseFloat(n)*i:0;return Number.isNaN(r)?0:r},vf=(t,e)=>{let n=0;const i=new Event("transitionend"),r=yf(t),s=(t=>{const e=mf(t,"transitionProperty"),n=mf(t,"transitionDelay"),i=n.includes("ms")?1:1e3,r=e&&"none"!==e?parseFloat(n)*i:0;return Number.isNaN(r)?0:r})(t);if(r){const o=i=>{i.target===t&&(e.apply(t,[i]),t.removeEventListener("transitionend",o),n=1)};t.addEventListener("transitionend",o),setTimeout((()=>{n||gf(t,i)}),r+s+17)}else e.apply(t,[i])},bf=(t,e)=>t.focus(e),wf=t=>!!["true",!0].includes(t)||!["false",!1].includes(t)&&(["null","",null,void 0].includes(t)?null:""===t||Number.isNaN(+t)?t:+t),Ef=t=>Object.entries(t),Tf=t=>t.toLowerCase(),If=t=>Object.keys(t),_f=(t,e)=>{const n=new CustomEvent(t,{cancelable:!0,bubbles:!0});return nf(e)&&ff(n,e),n},Af={passive:!0},Sf=t=>t.offsetHeight,Rf=(t,e)=>{Ef(e).forEach((([e,n])=>{if(n&&hf(e)&&e.includes("--"))t.style.setProperty(e,n);else{const i={};i[e]=n,ff(t.style,i)}}))},kf=t=>nf(t)&&"Map"===t.constructor.name||!1,Cf=new Map,Of=(t,e,n,i)=>{sf(t)&&(i&&i.length?(Cf.has(t)||Cf.set(t,new Map),Cf.get(t).set(i,setTimeout(e,n))):Cf.set(t,setTimeout(e,n)))},Nf=(t,e)=>{if(!sf(t))return null;const n=Cf.get(t);return e&&n&&kf(n)?n.get(e)||null:(t=>"number"==typeof t||!1)(n)?n:null},Pf=(t,e)=>{if(!sf(t))return;const n=Cf.get(t);e&&e.length&&kf(n)?(clearTimeout(n.get(e)),n.delete(e),0===n.size&&Cf.delete(t)):(clearTimeout(n),Cf.delete(t))},Lf=(t,e)=>{const{width:n,height:i,top:r,right:s,bottom:o,left:a}=t.getBoundingClientRect();let c=1,h=1;if(e&&sf(t)){const{offsetWidth:e,offsetHeight:r}=t;c=e>0?Math.round(n)/e:1,h=r>0?Math.round(i)/r:1}return{width:n/c,height:i/h,top:r/h,right:s/c,bottom:o/h,left:a/c,x:a/c,y:r/h}},Df=t=>df(t).body,xf=t=>df(t).documentElement,Uf=t=>rf(t)&&"ShadowRoot"===t.constructor.name||!1,Mf=t=>"HTML"===t.nodeName?t:sf(t)&&t.assignedSlot||rf(t)&&t.parentNode||Uf(t)&&t.host||xf(t);let jf=0,Bf=0;const Ff=new Map,Hf=(t,e)=>{let n=e?jf:Bf;if(e){const i=Hf(t),r=Ff.get(i)||new Map;Ff.has(i)||Ff.set(i,r),kf(r)&&!r.has(e)?(r.set(e,n),jf+=1):n=r.get(e)}else{const e=t.id||t;Ff.has(e)?n=Ff.get(e):(Ff.set(e,n),Bf+=1)}return n},$f=t=>{var e;return t?uf(t)?t.defaultView:rf(t)?null==(e=null==t?void 0:t.ownerDocument)?void 0:e.defaultView:t:window},Vf=t=>{if(!rf(t))return!1;const{top:e,bottom:n}=Lf(t),{clientHeight:i}=xf(t);return e<=i&&n>=0},zf=t=>"rtl"===xf(t).dir,Wf=t=>rf(t)&&["TABLE","TD","TH"].includes(t.nodeName)||!1,qf=(t,e)=>t?t.closest(e)||qf(t.getRootNode().host,e):null,Kf=(t,e)=>sf(t)?t:(rf(e)?e:df()).querySelector(t),Gf=(t,e)=>(rf(e)?e:df()).getElementsByTagName(t),Jf=(t,e)=>(rf(e)?e:df()).querySelectorAll(t),Xf=(t,e)=>(e&&rf(e)?e:df()).getElementsByClassName(t),Yf=(t,e)=>t.matches(e);class Qf{get version(){return"5.0.6"}get name(){return"BaseComponent"}get defaults(){return{}}dispose(){af.remove(this.element,this.name),If(this).forEach((t=>{delete this[t]}))}constructor(t,e){const n=Kf(t);if(!n)throw hf(t)?Error(`${this.name} Error: "${t}" is not a valid selector.`):Error(`${this.name} Error: your target is not an instance of HTMLElement.`);const i=af.get(n,this.name);i&&i.dispose(),this.element=n,this.options=this.defaults&&If(this.defaults).length?((t,e,n,i)=>{const r={...n},s={...t.dataset},o={...e},a={},c="title";return Ef(s).forEach((([t,e])=>{const n=i&&"string"==typeof t&&t.includes(i)?t.replace(i,"").replace(/[A-Z]/g,(t=>Tf(t))):t;a[n]=wf(e)})),Ef(r).forEach((([t,e])=>{r[t]=wf(e)})),Ef(e).forEach((([e,n])=>{o[e]=e in r?r[e]:e in a?a[e]:e===c?Jd(t,c):n})),o})(n,this.defaults,e||{},"bs"):{},af.set(n,this.name,this)}}const Zf=_f("close.bs.alert"),tp=_f("closed.bs.alert"),ep=t=>{const{element:e}=t;np(t),gf(e,tp),t.dispose(),e.remove()},np=(t,e)=>{const n=e?Rd:kd,{dismiss:i,close:r}=t;i&&n(i,Ld,r)};class ip extends Qf{get name(){return"Alert"}dispose(){np(this),super.dispose()}constructor(t){super(t),_d(this,"dismiss"),_d(this,"close",(()=>{const{element:t}=this;t&&ef(t,"show")&&(gf(t,Zf),Zf.defaultPrevented||(tf(t,"show"),ef(t,"fade")?vf(t,(()=>ep(this))):ep(this)))})),this.dismiss=Kf('[data-bs-dismiss="alert"]',this.element),np(this,!0)}}_d(ip,"selector",".alert"),_d(ip,"init",(t=>new ip(t))),_d(ip,"getInstance",(t=>cf(t,"Alert")));const rp=(t,e)=>{(e?Rd:kd)(t.element,Ld,t.toggle)};class sp extends Qf{get name(){return"Button"}dispose(){rp(this),super.dispose()}constructor(t){super(t),_d(this,"isActive",!1),_d(this,"toggle",(t=>{t&&t.preventDefault();const{element:e,isActive:n}=this;!ef(e,"disabled")&&!Jd(e,"disabled")&&((n?tf:Zd)(e,"active"),Yd(e,"aria-pressed",n?"false":"true"),this.isActive=ef(e,"active"))}));const{element:e}=this;this.isActive=ef(e,"active"),Yd(e,"aria-pressed",String(!!this.isActive)),rp(this,!0)}}_d(sp,"selector",'[data-bs-toggle="button"]'),_d(sp,"init",(t=>new sp(t))),_d(sp,"getInstance",(t=>cf(t,"Button")));const op=t=>{const e=["data-bs-target","data-bs-parent","data-bs-container","href"],n=df(t);return e.map((e=>{const i=Jd(t,e);return i?"data-bs-parent"===e?qf(t,i):Kf(i,n):null})).filter((t=>t))[0]},ap={pause:"hover",keyboard:!1,touch:!0,interval:5e3},cp=t=>cf(t,"Carousel");let hp=0,lp=0,up=0;const dp=_f("slide.bs.carousel"),fp=_f("slid.bs.carousel"),pp=t=>{const{index:e,direction:n,element:i,slides:r,options:s}=t;if(t.isAnimating){const o=Rp(t),a="left"===n?"next":"prev",c="left"===n?"start":"end";Zd(r[e],"active"),tf(r[e],`carousel-item-${a}`),tf(r[e],`carousel-item-${c}`),tf(r[o],"active"),tf(r[o],`carousel-item-${c}`),gf(i,fp),Pf(i,"data-bs-slide"),t.cycle&&!df(i).hidden&&s.interval&&!t.isPaused&&t.cycle()}};function gp(){const t=cp(this);t&&!t.isPaused&&!Nf(this,"paused")&&Zd(this,"paused")}function mp(){const t=cp(this);t&&t.isPaused&&!Nf(this,"paused")&&t.cycle()}function yp(t){t.preventDefault();const e=qf(this,'[data-bs-ride="carousel"]')||op(this),n=cp(e);if(n&&!n.isAnimating){const t=+(Jd(this,"data-bs-slide-to")||0);this&&!ef(this,"active")&&!Number.isNaN(t)&&n.to(t)}}function vp(t){t.preventDefault();const e=qf(this,'[data-bs-ride="carousel"]')||op(this),n=cp(e);if(n&&!n.isAnimating){const t=Jd(this,"data-bs-slide");"next"===t?n.next():"prev"===t&&n.prev()}}const bp=({code:t,target:e})=>{const n=df(e),[i]=[...Jf('[data-bs-ride="carousel"]',n)].filter((t=>Vf(t))),r=cp(i);if(r&&!r.isAnimating&&!/textarea|input/i.test(e.nodeName)){const e=zf(i);t===(e?"ArrowRight":"ArrowLeft")?r.prev():t===(e?"ArrowLeft":"ArrowRight")&&r.next()}};function wp(t){const{target:e}=t,n=cp(this);n&&n.isTouch&&(n.indicator&&!n.indicator.contains(e)||!n.controls.includes(e))&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())}function Ep(t){const{target:e}=t,n=cp(this);if(n&&!n.isAnimating&&!n.isTouch){const{controls:i,indicators:r}=n;[...i,...r].every((t=>t===e||t.contains(e)))||(hp=t.pageX,this.contains(e)&&(n.isTouch=!0,Ap(n,!0)))}}const Tp=t=>{lp=t.pageX},Ip=t=>{var e;const{target:n}=t,i=df(n),r=[...Jf('[data-bs-ride="carousel"]',i)].map((t=>cp(t))).find((t=>t.isTouch));if(r){const{element:s,index:o}=r,a=zf(s);up=t.pageX,r.isTouch=!1,Ap(r),!(null!=(e=i.getSelection())&&e.toString().length)&&s.contains(n)&&Math.abs(hp-up)>120&&(lp<hp?r.to(o+(a?-1:1)):lp>hp&&r.to(o+(a?1:-1))),hp=0,lp=0,up=0}},_p=(t,e)=>{const{indicators:n}=t;[...n].forEach((t=>tf(t,"active"))),t.indicators[e]&&Zd(n[e],"active")},Ap=(t,e)=>{const{element:n}=t,i=e?Rd:kd;i(df(n),"pointermove",Tp,Af),i(df(n),"pointerup",Ip,Af)},Sp=(t,e)=>{const{element:n,options:i,slides:r,controls:s,indicators:o}=t,{touch:a,pause:c,interval:h,keyboard:l}=i,u=e?Rd:kd;c&&h&&(u(n,xd,gp),u(n,Ud,mp)),a&&r.length>2&&(u(n,"pointerdown",Ep,Af),u(n,"touchstart",wp,{passive:!1}),u(n,"dragstart",wp,{passive:!1})),s.length&&s.forEach((t=>{t&&u(t,Ld,vp)})),o.length&&o.forEach((t=>{u(t,Ld,yp)})),l&&u(df(n),"keydown",bp)},Rp=t=>{const{slides:e,element:n}=t,i=Kf(".carousel-item.active",n);return sf(i)?[...e].indexOf(i):-1};class kp extends Qf{get name(){return"Carousel"}get defaults(){return ap}get isPaused(){return ef(this.element,"paused")}get isAnimating(){return null!==Kf(".carousel-item-next,.carousel-item-prev",this.element)}cycle(){const{element:t,options:e,isPaused:n,index:i}=this;Pf(t,"carousel"),n&&(Pf(t,"paused"),tf(t,"paused")),Of(t,(()=>{this.element&&!this.isPaused&&!this.isTouch&&Vf(t)&&this.to(i+1)}),e.interval,"carousel")}pause(){const{element:t,options:e}=this;!this.isPaused&&e.interval&&(Zd(t,"paused"),Of(t,(()=>{}),1,"paused"))}next(){this.isAnimating||this.to(this.index+1)}prev(){this.isAnimating||this.to(this.index-1)}to(t){const{element:e,slides:n,options:i}=this,r=Rp(this),s=zf(e);let o=t;if(!this.isAnimating&&r!==o&&!Nf(e,"data-bs-slide")){r<o||0===r&&o===n.length-1?this.direction=s?"right":"left":(r>o||r===n.length-1&&0===o)&&(this.direction=s?"left":"right");const{direction:t}=this;o<0?o=n.length-1:o>=n.length&&(o=0);const a="left"===t?"next":"prev",c="left"===t?"start":"end",h={relatedTarget:n[o],from:r,to:o,direction:t};ff(dp,h),ff(fp,h),gf(e,dp),dp.defaultPrevented||(this.index=o,_p(this,o),yf(n[o])&&ef(e,"slide")?Of(e,(()=>{Zd(n[o],`carousel-item-${a}`),Sf(n[o]),Zd(n[o],`carousel-item-${c}`),Zd(n[r],`carousel-item-${c}`),vf(n[o],(()=>this.slides&&this.slides.length&&pp(this)))}),0,"data-bs-slide"):(Zd(n[o],"active"),tf(n[r],"active"),Of(e,(()=>{Pf(e,"data-bs-slide"),e&&i.interval&&!this.isPaused&&this.cycle(),gf(e,fp)}),0,"data-bs-slide")))}}dispose(){const{isAnimating:t}=this,e={...this,isAnimating:t};Sp(e),super.dispose(),e.isAnimating&&vf(e.slides[e.index],(()=>{pp(e)}))}constructor(t,e){super(t,e);const{element:n}=this;this.direction=zf(n)?"right":"left",this.isTouch=!1,this.slides=Xf("carousel-item",n);const{slides:i}=this;if(i.length>=2){const t=Rp(this),e=[...i].find((t=>Yf(t,".carousel-item-next,.carousel-item-next")));this.index=t;const r=df(n);this.controls=[...Jf("[data-bs-slide]",n),...Jf(`[data-bs-slide][data-bs-target="#${n.id}"]`,r)].filter(((t,e,n)=>e===n.indexOf(t))),this.indicator=Kf(".carousel-indicators",n),this.indicators=[...this.indicator?Jf("[data-bs-slide-to]",this.indicator):[],...Jf(`[data-bs-slide-to][data-bs-target="#${n.id}"]`,r)].filter(((t,e,n)=>e===n.indexOf(t)));const{options:s}=this;this.options.interval=!0===s.interval?ap.interval:s.interval,e?this.index=[...i].indexOf(e):t<0&&(this.index=0,Zd(i[0],"active"),this.indicators.length&&_p(this,0)),this.indicators.length&&_p(this,this.index),Sp(this,!0),s.interval&&this.cycle()}}}_d(kp,"selector",'[data-bs-ride="carousel"]'),_d(kp,"init",(t=>new kp(t))),_d(kp,"getInstance",cp);const Cp={parent:null},Op=t=>cf(t,"Collapse"),Np=_f("show.bs.collapse"),Pp=_f("shown.bs.collapse"),Lp=_f("hide.bs.collapse"),Dp=_f("hidden.bs.collapse"),xp=t=>{const{element:e,parent:n,triggers:i}=t;gf(e,Lp),Lp.defaultPrevented||(Of(e,Gd,17),n&&Of(n,Gd,17),Rf(e,{height:`${e.scrollHeight}px`}),tf(e,"collapse"),tf(e,"show"),Zd(e,"collapsing"),Sf(e),Rf(e,{height:"0px"}),vf(e,(()=>{Pf(e),n&&Pf(n),i.forEach((t=>Yd(t,"aria-expanded","false"))),tf(e,"collapsing"),Zd(e,"collapse"),Rf(e,{height:""}),gf(e,Dp)})))},Up=(t,e)=>{const n=e?Rd:kd,{triggers:i}=t;i.length&&i.forEach((t=>n(t,Ld,Mp)))},Mp=t=>{const{target:e}=t,n=e&&qf(e,'[data-bs-toggle="collapse"]'),i=n&&op(n),r=i&&Op(i);r&&r.toggle(),n&&"A"===n.tagName&&t.preventDefault()};class jp extends Qf{get name(){return"Collapse"}get defaults(){return Cp}toggle(){ef(this.element,"show")?this.hide():this.show()}hide(){const{triggers:t,element:e}=this;Nf(e)||(xp(this),t.length&&t.forEach((t=>Zd(t,"collapsed"))))}show(){const{element:t,parent:e,triggers:n}=this;let i,r;e&&(i=[...Jf(".collapse.show",e)].find((t=>Op(t))),r=i&&Op(i)),(!e||!Nf(e))&&!Nf(t)&&(r&&i!==t&&(xp(r),r.triggers.forEach((t=>{Zd(t,"collapsed")}))),(t=>{const{element:e,parent:n,triggers:i}=t;gf(e,Np),Np.defaultPrevented||(Of(e,Gd,17),n&&Of(n,Gd,17),Zd(e,"collapsing"),tf(e,"collapse"),Rf(e,{height:`${e.scrollHeight}px`}),vf(e,(()=>{Pf(e),n&&Pf(n),i.forEach((t=>Yd(t,"aria-expanded","true"))),tf(e,"collapsing"),Zd(e,"collapse"),Zd(e,"show"),Rf(e,{height:""}),gf(e,Pp)})))})(this),n.length&&n.forEach((t=>tf(t,"collapsed"))))}dispose(){Up(this),super.dispose()}constructor(t,e){super(t,e);const{element:n,options:i}=this,r=df(n);this.triggers=[...Jf('[data-bs-toggle="collapse"]',r)].filter((t=>op(t)===n)),this.parent=sf(i.parent)?i.parent:hf(i.parent)?op(n)||Kf(i.parent,r):null,Up(this,!0)}}_d(jp,"selector",".collapse"),_d(jp,"init",(t=>new jp(t))),_d(jp,"getInstance",Op);const Bp=["dropdown","dropup","dropstart","dropend"],Fp=t=>{const e=qf(t,"A");return"A"===t.tagName&&Xd(t,"href")&&"#"===t.href.slice(-1)||e&&Xd(e,"href")&&"#"===e.href.slice(-1)},[Hp,$p,Vp,zp]=Bp,Wp=`[data-bs-toggle="${Hp}"]`,qp=t=>cf(t,"Dropdown"),Kp=[Hp,$p],Gp=[Vp,zp],Jp=["A","BUTTON"],Xp={offset:5,display:"dynamic"},Yp=_f(`show.bs.${Hp}`),Qp=_f(`shown.bs.${Hp}`),Zp=_f(`hide.bs.${Hp}`),tg=_f(`hidden.bs.${Hp}`),eg=_f(`updated.bs.${Hp}`),ng=t=>{const{element:e,menu:n,parentElement:i,options:r}=t,{offset:s}=r;if("static"!==mf(n,"position")){const t=zf(e),r=ef(n,"dropdown-menu-end");["margin","top","bottom","left","right"].forEach((t=>{const e={};e[t]="",Rf(n,e)}));let o=Bp.find((t=>ef(i,t)))||Hp;const a={dropdown:[s,0,0],dropup:[0,0,s],dropstart:t?[-1,0,0,s]:[-1,s,0],dropend:t?[-1,s,0]:[-1,0,0,s]},c={dropdown:{top:"100%"},dropup:{top:"auto",bottom:"100%"},dropstart:t?{left:"100%",right:"auto"}:{left:"auto",right:"100%"},dropend:t?{left:"auto",right:"100%"}:{left:"100%",right:"auto"},menuStart:t?{right:"0",left:"auto"}:{right:"auto",left:"0"},menuEnd:t?{right:"auto",left:"0"}:{right:"0",left:"auto"}},{offsetWidth:h,offsetHeight:l}=n,{clientWidth:u,clientHeight:d}=xf(e),{left:f,top:p,width:g,height:m}=Lf(e),y=f-h-s<0,v=f+h+g+s>=u,b=p+l+s>=d,w=p+l+m+s>=d,E=p-l-s<0,T=(!t&&r||t&&!r)&&f+g-h<0,I=(t&&r||!t&&!r)&&f+h>=u;if(Gp.includes(o)&&y&&v&&(o=Hp),o===Vp&&(t?v:y)&&(o=zp),o===zp&&(t?y:v)&&(o=Vp),o===$p&&E&&!w&&(o=Hp),o===Hp&&w&&!E&&(o=$p),Gp.includes(o)&&b&&ff(c[o],{top:"auto",bottom:0}),Kp.includes(o)&&(T||I)){let e={left:"auto",right:"auto"};!T&&I&&!t&&(e={left:"auto",right:0}),T&&!I&&t&&(e={left:0,right:"auto"}),e&&ff(c[o],e)}const _=a[o];Rf(n,{...c[o],margin:`${_.map((t=>t&&`${t}px`)).join(" ")}`}),Kp.includes(o)&&r&&r&&Rf(n,c[!t&&T||t&&I?"menuStart":"menuEnd"]),gf(i,eg)}},ig=t=>{const{element:e,options:n}=t,i=t.open?Rd:kd,r=df(e);i(r,Ld,og),i(r,"focus",og),i(r,"keydown",cg),i(r,"keyup",hg),"dynamic"===n.display&&[jd,Md].forEach((t=>{i($f(e),t,lg,Af)}))},rg=(t,e)=>{(e?Rd:kd)(t.element,Ld,ag)},sg=t=>{const e=[...Bp,"btn-group","input-group"].map((e=>Xf(`${e} show`,df(t)))).find((t=>t.length));if(e&&e.length)return[...e[0].children].find((t=>Bp.some((e=>e===Jd(t,"data-bs-toggle")))))},og=t=>{const{target:e,type:n}=t;if(e&&sf(e)){const i=sg(e),r=i&&qp(i);if(r){const{parentElement:s,menu:o}=r,a=s&&s.contains(e)&&("form"===e.tagName||null!==qf(e,"form"));[Ld,Dd].includes(n)&&Fp(e)&&t.preventDefault(),!a&&"focus"!==n&&e!==i&&e!==o&&r.hide()}}},ag=t=>{const{target:e}=t,n=e&&qf(e,Wp),i=n&&qp(n);i&&(t.stopPropagation(),i.toggle(),n&&Fp(n)&&t.preventDefault())},cg=t=>{[Bd,Fd].includes(t.code)&&t.preventDefault()};function hg(t){const{code:e}=t,n=sg(this),i=n&&qp(n),{activeElement:r}=n&&df(n);if(i&&r){const{menu:t,open:s}=i,o=(t=>[...t.children].map((t=>{if(t&&Jp.includes(t.tagName))return t;const{firstElementChild:e}=t;return e&&Jp.includes(e.tagName)?e:null})).filter((t=>t)))(t);if(o&&o.length&&[Bd,Fd].includes(e)){let t=o.indexOf(r);r===n?t=0:e===Fd?t=t>1?t-1:0:e===Bd&&(t=t<o.length-1?t+1:t),o[t]&&bf(o[t])}"Escape"===e&&s&&(i.toggle(),bf(n))}}function lg(){const t=sg(this),e=t&&qp(t);e&&e.open&&ng(e)}class ug extends Qf{get name(){return"Dropdown"}get defaults(){return Xp}toggle(){this.open?this.hide():this.show()}show(){const{element:t,open:e,menu:n,parentElement:i}=this;if(!e){const r=sg(t),s=r&&qp(r);s&&s.hide(),[Yp,Qp,eg].forEach((e=>{e.relatedTarget=t})),gf(i,Yp),Yp.defaultPrevented||(Zd(n,"show"),Zd(i,"show"),Yd(t,"aria-expanded","true"),ng(this),this.open=!e,bf(t),ig(this),gf(i,Qp))}}hide(){const{element:t,open:e,menu:n,parentElement:i}=this;e&&([Zp,tg].forEach((e=>{e.relatedTarget=t})),gf(i,Zp),Zp.defaultPrevented||(tf(n,"show"),tf(i,"show"),Yd(t,"aria-expanded","false"),this.open=!e,ig(this),gf(i,tg)))}dispose(){this.open&&this.hide(),rg(this),super.dispose()}constructor(t,e){super(t,e);const{parentElement:n}=this.element,[i]=Xf("dropdown-menu",n);i&&(this.parentElement=n,this.menu=i,rg(this,!0))}}_d(ug,"selector",Wp),_d(ug,"init",(t=>new ug(t))),_d(ug,"getInstance",qp);const dg="sticky-top",fg="position-sticky",pg=t=>[...Xf("fixed-top",t),...Xf("fixed-bottom",t),...Xf(dg,t),...Xf(fg,t),...Xf("is-fixed",t)],gg=t=>{const{clientWidth:e}=xf(t),{innerWidth:n}=$f(t);return Math.abs(n-e)},mg=(t,e)=>{const n=Df(t),i=parseInt(mf(n,"paddingRight"),10),r="hidden"===mf(n,"overflow")&&i?0:gg(t),s=pg(n);e&&(Rf(n,{overflow:"hidden",paddingRight:`${i+r}px`}),s.length&&s.forEach((t=>{const e=mf(t,"paddingRight");if(t.style.paddingRight=`${parseInt(e,10)+r}px`,[dg,fg].some((e=>ef(t,e)))){const e=mf(t,"marginRight");t.style.marginRight=parseInt(e,10)-r+"px"}})))},yg=pf({tagName:"div",className:"popup-container"}),vg=(t,e)=>{const n=rf(e)&&"BODY"===e.nodeName,i=rf(e)&&!n?e:yg,r=n?e:Df(t);rf(t)&&(i===yg&&r.append(yg),i.append(t))},bg=(t,e)=>{const n=rf(e)&&"BODY"===e.nodeName,i=rf(e)&&!n?e:yg;rf(t)&&(t.remove(),i===yg&&!yg.children.length&&yg.remove())},wg=(t,e)=>{const n=rf(e)&&"BODY"!==e.nodeName?e:yg;return rf(t)&&n.contains(t)},Eg="modal-backdrop",Tg="offcanvas-backdrop",Ig=pf("div"),_g=t=>Kf(".modal.show,.offcanvas.show",df(t)),Ag=t=>{const e=t?Eg:Tg;[Eg,Tg].forEach((t=>{tf(Ig,t)})),Zd(Ig,e)},Sg=(t,e,n)=>{Ag(n),vg(Ig,Df(t)),e&&Zd(Ig,"fade")},Rg=()=>{ef(Ig,"show")||(Zd(Ig,"show"),Sf(Ig))},kg=()=>{tf(Ig,"show")},Cg=t=>{_g(t)||(tf(Ig,"fade"),bg(Ig,Df(t)),(t=>{const e=Df(t);Rf(e,{paddingRight:"",overflow:""});const n=pg(e);n.length&&n.forEach((t=>{Rf(t,{paddingRight:"",marginRight:""})}))})(t))},Og=t=>sf(t)&&"hidden"!==mf(t,"visibility")&&null!==t.offsetParent,Ng={backdrop:!0,keyboard:!0},Pg=t=>cf(t,"Modal"),Lg=_f("show.bs.modal"),Dg=_f("shown.bs.modal"),xg=_f("hide.bs.modal"),Ug=_f("hidden.bs.modal"),Mg=t=>{const{element:e}=t,n=gg(e),{clientHeight:i,scrollHeight:r}=xf(e),{clientHeight:s,scrollHeight:o}=e,a=s!==o;if(!a&&n){const t={};t[zf(e)?"paddingLeft":"paddingRight"]=`${n}px`,Rf(e,t)}mg(e,a||i!==r)},jg=(t,e)=>{const n=e?Rd:kd,{element:i,update:r}=t;n(i,Ld,qg),n($f(i),Md,r,Af),n(df(i),"keydown",Wg)},Bg=(t,e)=>{const n=e?Rd:kd,{triggers:i}=t;i.length&&i.forEach((t=>n(t,Ld,zg)))},Fg=t=>{const{triggers:e,element:n,relatedTarget:i}=t;Cg(n),Rf(n,{paddingRight:"",display:""}),jg(t);const r=Lg.relatedTarget||e.find(Og);r&&bf(r),Ug.relatedTarget=i,gf(n,Ug)},Hg=t=>{const{element:e,relatedTarget:n}=t;bf(e),jg(t,!0),Dg.relatedTarget=n,gf(e,Dg)},$g=t=>{const{element:e,hasFade:n}=t;Rf(e,{display:"block"}),Mg(t),_g(e)||Rf(Df(e),{overflow:"hidden"}),Zd(e,"show"),Qd(e,"aria-hidden"),Yd(e,"aria-modal","true"),n?vf(e,(()=>Hg(t))):Hg(t)},Vg=t=>{const{element:e,options:n,hasFade:i}=t;n.backdrop&&i&&ef(Ig,"show")&&!_g(e)?(kg(),vf(Ig,(()=>Fg(t)))):Fg(t)},zg=t=>{const{target:e}=t,n=e&&qf(e,'[data-bs-toggle="modal"]'),i=n&&op(n),r=i&&Pg(i);r&&(n&&"A"===n.tagName&&t.preventDefault(),r.relatedTarget=n,r.toggle())},Wg=({code:t,target:e})=>{const n=Kf(".modal.show",df(e)),i=n&&Pg(n);if(i){const{options:e}=i;e.keyboard&&"Escape"===t&&ef(n,"show")&&(i.relatedTarget=null,i.hide())}};function qg(t){var e,n;const i=Pg(this);if(i&&!Nf(this)){const{options:r,isStatic:s,modalDialog:o}=i,{backdrop:a}=r,{target:c}=t,h=null==(n=null==(e=df(this))?void 0:e.getSelection())?void 0:n.toString().length,l=o.contains(c),u=c&&qf(c,'[data-bs-dismiss="modal"]');s&&!l?Of(this,(()=>{Zd(this,"modal-static"),vf(o,(()=>Kg(i)))}),17):(u||!h&&!s&&!l&&a)&&(i.relatedTarget=u||null,i.hide(),t.preventDefault())}}const Kg=t=>{const{element:e,modalDialog:n}=t,i=(yf(n)||0)+17;tf(e,"modal-static"),Of(e,(()=>Pf(e)),i)};class Gg extends Qf{get name(){return"Modal"}get defaults(){return Ng}toggle(){ef(this.element,"show")?this.hide():this.show()}show(){const{element:t,options:e,hasFade:n,relatedTarget:i}=this,{backdrop:r}=e;let s=0;if(!ef(t,"show")&&(Lg.relatedTarget=i||void 0,gf(t,Lg),!Lg.defaultPrevented)){const e=_g(t);if(e&&e!==t){const t=Pg(e)||cf(e,"Offcanvas");t&&t.hide()}r?(wg(Ig)?Ag(!0):Sg(t,n,!0),s=yf(Ig),Rg(),setTimeout((()=>$g(this)),s)):($g(this),e&&ef(Ig,"show")&&kg())}}hide(){const{element:t,hasFade:e,relatedTarget:n}=this;ef(t,"show")&&(xg.relatedTarget=n||void 0,gf(t,xg),xg.defaultPrevented||(tf(t,"show"),Yd(t,"aria-hidden","true"),Qd(t,"aria-modal"),e?vf(t,(()=>Vg(this))):Vg(this)))}dispose(){const t={...this},{element:e,modalDialog:n}=t,i=()=>setTimeout((()=>super.dispose()),17);Bg(t),this.hide(),ef(e,"fade")?vf(n,i):i()}constructor(t,e){super(t,e),_d(this,"update",(()=>{ef(this.element,"show")&&Mg(this)}));const{element:n}=this,i=Kf(".modal-dialog",n);i&&(this.modalDialog=i,this.triggers=[...Jf('[data-bs-toggle="modal"]',df(n))].filter((t=>op(t)===n)),this.isStatic="static"===this.options.backdrop,this.hasFade=ef(n,"fade"),this.relatedTarget=null,Bg(this,!0))}}_d(Gg,"selector",".modal"),_d(Gg,"init",(t=>new Gg(t))),_d(Gg,"getInstance",Pg);const Jg={backdrop:!0,keyboard:!0,scroll:!1},Xg=t=>cf(t,"Offcanvas"),Yg=_f("show.bs.offcanvas"),Qg=_f("shown.bs.offcanvas"),Zg=_f("hide.bs.offcanvas"),tm=_f("hidden.bs.offcanvas"),em=(t,e)=>{const n=e?Rd:kd;t.triggers.forEach((t=>n(t,Ld,rm)))},nm=(t,e)=>{const n=e?Rd:kd,i=df(t.element);n(i,"keydown",om),n(i,Ld,sm)},im=t=>{const{element:e,options:n}=t;n.scroll||((t=>{const{element:e}=t,{clientHeight:n,scrollHeight:i}=xf(e);mg(e,n!==i)})(t),Rf(Df(e),{overflow:"hidden"})),Zd(e,"offcanvas-toggling"),Zd(e,"show"),Rf(e,{visibility:"visible"}),vf(e,(()=>am(t)))},rm=t=>{const e=qf(t.target,'[data-bs-toggle="offcanvas"]'),n=e&&op(e),i=n&&Xg(n);i&&(i.relatedTarget=e,i.toggle(),e&&"A"===e.tagName&&t.preventDefault())},sm=t=>{const{target:e}=t,n=Kf(".offcanvas.show",df(e)),i=Kf('[data-bs-dismiss="offcanvas"]',n),r=n&&Xg(n);if(r){const{options:s,triggers:o}=r,{backdrop:a}=s,c=qf(e,'[data-bs-toggle="offcanvas"]'),h=df(n).getSelection();(!Ig.contains(e)||"static"!==a)&&(!(h&&h.toString().length)&&(!n.contains(e)&&a&&(!c||o.includes(e))||i&&i.contains(e))&&(r.relatedTarget=i&&i.contains(e)?i:null,r.hide()),c&&"A"===c.tagName&&t.preventDefault())}},om=({code:t,target:e})=>{const n=Kf(".offcanvas.show",df(e)),i=n&&Xg(n);i&&i.options.keyboard&&"Escape"===t&&(i.relatedTarget=null,i.hide())},am=t=>{const{element:e}=t;tf(e,"offcanvas-toggling"),Qd(e,"aria-hidden"),Yd(e,"aria-modal","true"),Yd(e,"role","dialog"),gf(e,Qg),nm(t,!0),bf(e)},cm=t=>{const{element:e,triggers:n}=t;Yd(e,"aria-hidden","true"),Qd(e,"aria-modal"),Qd(e,"role"),Rf(e,{visibility:""});const i=Yg.relatedTarget||n.find(Og);i&&bf(i),Cg(e),gf(e,tm),tf(e,"offcanvas-toggling"),_g(e)||nm(t)};class hm extends Qf{get name(){return"Offcanvas"}get defaults(){return Jg}toggle(){ef(this.element,"show")?this.hide():this.show()}show(){const{element:t,options:e,relatedTarget:n}=this;let i=0;if(!ef(t,"show")&&(Yg.relatedTarget=n||void 0,Qg.relatedTarget=n||void 0,gf(t,Yg),!Yg.defaultPrevented)){const n=_g(t);if(n&&n!==t){const t=Xg(n)||cf(n,"Modal");t&&t.hide()}e.backdrop?(wg(Ig)?Ag():Sg(t,!0),i=yf(Ig),Rg(),setTimeout((()=>im(this)),i)):(im(this),n&&ef(Ig,"show")&&kg())}}hide(){const{element:t,relatedTarget:e}=this;ef(t,"show")&&(Zg.relatedTarget=e||void 0,tm.relatedTarget=e||void 0,gf(t,Zg),Zg.defaultPrevented||(Zd(t,"offcanvas-toggling"),tf(t,"show"),(t=>{const{element:e,options:n}=t,i=_g(e);e.blur(),!i&&n.backdrop&&ef(Ig,"show")?(kg(),vf(Ig,(()=>cm(t)))):cm(t)})(this)))}dispose(){const t={...this},{element:e,options:n}=t,i=n.backdrop?yf(Ig):0,r=()=>setTimeout((()=>super.dispose()),i+17);em(t),this.hide(),ef(e,"show")?vf(e,r):r()}constructor(t,e){super(t,e);const{element:n}=this;this.triggers=[...Jf('[data-bs-toggle="offcanvas"]',df(n))].filter((t=>op(t)===n)),this.relatedTarget=null,em(this,!0)}}_d(hm,"selector",".offcanvas"),_d(hm,"init",(t=>new hm(t))),_d(hm,"getInstance",Xg);const lm=t=>{const e="tooltip"===t;return`<div class="${t}" role="tooltip">${(e?"":`<h3 class="${t}-header"></h3>`)+`<div class="${t}-arrow"></div>`+`<div class="${e?`${t}-inner`:`${t}-body`}"></div>`}</div>`},um={top:"top",bottom:"bottom",left:"start",right:"end"},dm=t=>{const e=/\b(top|bottom|start|end)+/,{element:n,tooltip:i,container:r,options:s,arrow:o}=t;if(i){const a={...um},c=zf(n);Rf(i,{top:"",left:"",right:"",bottom:""});const h="Popover"===t.name,{offsetWidth:l,offsetHeight:u}=i,{clientWidth:d,clientHeight:f,offsetWidth:p}=xf(n);let{placement:g}=s;const{clientWidth:m,offsetWidth:y}=r,v="fixed"===mf(r,"position"),b=Math.abs(v?m-y:d-p),w=c&&v?b:0,E=d-(c?0:b)-1,{width:T,height:I,left:_,right:A,top:S}=Lf(n,!0),{x:R,y:k}={x:_,y:S};Rf(o,{top:"",left:"",right:"",bottom:""});let C=0,O="",N=0,P="",L="",D="",x="";const U=o.offsetWidth||0,M=o.offsetHeight||0,j=U/2;let B=S-u-M<0,F=S+u+I+M>=f,H=_-l-U<w,$=_+l+T+U>=E;const V=["left","right"],z=["top","bottom"];B=V.includes(g)?S+I/2-u/2-M<0:B,F=V.includes(g)?S+u/2+I/2+M>=f:F,H=z.includes(g)?_+T/2-l/2<w:H,$=z.includes(g)?_+l/2+T/2>=E:$,g=V.includes(g)&&H&&$?"top":g,g="top"===g&&B?"bottom":g,g="bottom"===g&&F?"top":g,g="left"===g&&H?"right":g,g="right"===g&&$?"left":g,i.className.includes(g)||(i.className=i.className.replace(e,a[g])),V.includes(g)?(N="left"===g?R-l-(h?U:0):R+T+(h?U:0),B&&F?(C=0,O=0,L=S+I/2-M/2):B?(C=k,O="",L=I/2-U):F?(C=k-u+I,O="",L=u-I/2-U):(C=k-u/2+I/2,L=u/2-M/2)):z.includes(g)&&(C="top"===g?k-u-(h?M:0):k+I+(h?M:0),H?(N=0,D=R+T/2-j):$?(N="auto",P=0,x=T/2+E-A-j):(N=R-l/2+T/2,D=l/2-j)),Rf(i,{top:`${C}px`,bottom:""===O?"":`${O}px`,left:"auto"===N?N:`${N}px`,right:""!==P?`${P}px`:""}),sf(o)&&(""!==L&&(o.style.top=`${L}px`),""!==D?o.style.left=`${D}px`:""!==x&&(o.style.right=`${x}px`));const W=_f(`updated.bs.${Tf(t.name)}`);gf(n,W)}},fm={template:lm("tooltip"),title:"",customClass:"",trigger:"hover focus",placement:"top",sanitizeFn:void 0,animation:!0,delay:200,container:document.body,content:"",dismissible:!1,btnClose:""},pm=(t,e,n)=>{if(hf(e)&&e.length){let i=e.trim();(t=>"function"==typeof t||!1)(n)&&(i=n(i));const r=(new DOMParser).parseFromString(i,"text/html");t.append(...r.body.childNodes)}else sf(e)?t.append(e):((t=>nf(t)&&"NodeList"===t.constructor.name||!1)(e)||(t=>Array.isArray(t)||!1)(e)&&e.every(rf))&&t.append(...e)};let gm=t=>cf(t,"Tooltip");const mm=t=>{const{tooltip:e,container:n,offsetParent:i}=t;return e&&wg(e,n===i?n:i)},ym=(t,e)=>{const n=e?Rd:kd,{element:i}=t;n(df(i),"touchstart",t.handleTouch,Af),[jd,Md].forEach((e=>{n($f(i),e,t.update,Af)}))},vm=t=>{const{element:e}=t,n=_f(`shown.bs.${Tf(t.name)}`);ym(t,!0),gf(e,n),Pf(e,"in")},bm=t=>{const{element:e}=t,n=_f(`hidden.bs.${Tf(t.name)}`);ym(t),(t=>{const{element:e,tooltip:n,container:i,offsetParent:r}=t;Qd(e,"aria-describedby"),bg(n,i===r?i:r)})(t),gf(e,n),Pf(e,"out")},wm=(t,e)=>{const n=e?Rd:kd,{element:i,options:r,btn:s}=t,{trigger:o}=r,a=!("Tooltip"===t.name||!r.dismissible);o.includes("manual")||(t.enabled=!!e,o.split(" ").forEach((e=>{"hover"===e?(n(i,Dd,t.handleShow),n(i,xd,t.handleShow),a||(n(i,Ud,t.handleHide),n(df(i),"touchstart",t.handleTouch,Af))):e===Ld?n(i,e,a?t.handleShow:t.toggle):"focus"===e&&(n(i,Nd,t.handleShow),a||n(i,Pd,t.handleHide),qd&&n(i,Ld,t.handleFocus)),a&&s&&n(s,Ld,t.handleHide)})))},Em=(t,e)=>{const n=e?Rd:kd,{element:i,container:r,offsetParent:s}=t,{offsetHeight:o,scrollHeight:a}=r,c=qf(i,".modal"),h=qf(i,".offcanvas"),l=$f(i),u=r===s&&o!==a?r:l;n(u,Md,t.update,Af),n(u,jd,t.update,Af),c&&n(c,"hide.bs.modal",t.handleHide),h&&n(h,"hide.bs.offcanvas",t.handleHide)},Tm=(t,e)=>{const n=["data-original-title","title"],{element:i}=t;Yd(i,n[e?0:1],e||Jd(i,n[0])||""),Qd(i,n[e?1:0])};class Im extends Qf{get name(){return"Tooltip"}get defaults(){return fm}show(){const{options:t,tooltip:e,element:n,container:i,offsetParent:r,id:s}=this,{animation:o}=t,a=Nf(n,"out"),c=i===r?i:r;Pf(n,"out"),e&&!a&&!mm(this)&&Of(n,(()=>{const t=_f(`show.bs.${Tf(this.name)}`);gf(n,t),t.defaultPrevented||(vg(e,c),Yd(n,"aria-describedby",`#${s}`),this.update(),Em(this,!0),ef(e,"show")||Zd(e,"show"),o?vf(e,(()=>vm(this))):vm(this))}),17,"in")}hide(){const{options:t,tooltip:e,element:n}=this,{animation:i,delay:r}=t;Pf(n,"in"),e&&mm(this)&&Of(n,(()=>{const t=_f(`hide.bs.${Tf(this.name)}`);gf(n,t),t.defaultPrevented||(this.update(),tf(e,"show"),Em(this),i?vf(e,(()=>bm(this))):bm(this))}),r+17,"out")}enable(){const{enabled:t}=this;t||(wm(this,!0),this.enabled=!t)}disable(){const{tooltip:t,options:e,enabled:n}=this,{animation:i}=e;n&&(t&&mm(this)&&i?(this.hide(),vf(t,(()=>wm(this)))):wm(this),this.enabled=!n)}toggleEnabled(){this.enabled?this.disable():this.enable()}dispose(){const{tooltip:t,options:e}=this,n={...this,name:this.name},i=()=>setTimeout((()=>((t,e)=>{const{element:n}=t;wm(t),Xd(n,"data-original-title")&&"Tooltip"===t.name&&Tm(t),e&&e()})(n,(()=>super.dispose()))),17);e.animation&&mm(n)?(this.options.delay=0,this.hide(),vf(t,i)):i()}constructor(t,e){super(t,e),_d(this,"handleFocus",(()=>bf(this.element))),_d(this,"handleShow",(()=>this.show())),_d(this,"handleHide",(()=>this.hide())),_d(this,"update",(()=>{dm(this)})),_d(this,"toggle",(()=>{const{tooltip:t}=this;t&&!mm(this)?this.show():this.hide()})),_d(this,"handleTouch",(({target:t})=>{const{tooltip:e,element:n}=this;e&&e.contains(t)||t===n||t&&n.contains(t)||this.hide()}));const{element:n}=this,i="Tooltip"===this.name,r=i?"tooltip":"popover",s=i?"Tooltip":"Popover";gm=t=>cf(t,s),this.enabled=!0,this.id=`${r}-${Hf(n,r)}`;const{options:o}=this;!o.title&&i||!i&&!o.content||(ff(fm,{titleAttr:""}),Xd(n,"title")&&i&&"string"==typeof o.title&&Tm(this,o.title),this.container=(t=>{const e=["HTML","BODY"],n=[];let{parentNode:i}=t;for(;i&&!e.includes(i.nodeName);)i=Mf(i),Uf(i)||Wf(i)||n.push(i);return n.find(((t,e)=>"relative"!==mf(t,"position")&&n.slice(e+1).every((t=>"static"===mf(t,"position")))?t:null))||df(t).body})(n),this.offsetParent=["sticky","fixed"].some((t=>mf(this.container,"position")===t))?this.container:df(this.element).body,(t=>{const e="Tooltip"===t.name,{id:n,element:i,options:r}=t,{title:s,placement:o,template:a,animation:c,customClass:h,sanitizeFn:l,dismissible:u,content:d,btnClose:f}=r,p=e?"tooltip":"popover",g={...um};let m=[],y=[];zf(i)&&(g.left="end",g.right="start");const v=`bs-${p}-${g[o]}`;let b;if(sf(a))b=a;else{const t=pf("div");pm(t,a,l),b=t.firstChild}t.tooltip=sf(b)?b.cloneNode(!0):void 0;const{tooltip:w}=t;if(w){Yd(w,"id",n),Yd(w,"role","tooltip");const i=e?"tooltip-inner":"popover-body",r=e?null:Kf(".popover-header",w),o=Kf(`.${i}`,w);t.arrow=Kf(`.${p}-arrow`,w);const{arrow:a}=t;if(sf(s))m=[s.cloneNode(!0)];else{const t=pf("div");pm(t,s,l),m=[...t.childNodes]}if(sf(d))y=[d.cloneNode(!0)];else{const t=pf("div");pm(t,d,l),y=[...t.childNodes]}if(u)if(s)if(sf(f))m=[...m,f.cloneNode(!0)];else{const t=pf("div");pm(t,f,l),m=[...m,t.firstChild]}else if(r&&r.remove(),sf(f))y=[...y,f.cloneNode(!0)];else{const t=pf("div");pm(t,f,l),y=[...y,t.firstChild]}e?s&&o&&pm(o,s,l):(s&&r&&pm(r,m,l),d&&o&&pm(o,y,l),t.btn=Kf(".btn-close",w)||void 0),Zd(w,"position-fixed"),Zd(a,"position-absolute"),ef(w,p)||Zd(w,p),c&&!ef(w,"fade")&&Zd(w,"fade"),h&&!ef(w,h)&&Zd(w,h),ef(w,v)||Zd(w,v)}})(this),wm(this,!0))}}_d(Im,"selector",'[data-bs-toggle="tooltip"],[data-tip="tooltip"]'),_d(Im,"init",(t=>new Im(t))),_d(Im,"getInstance",gm),_d(Im,"styleTip",dm);const _m=ff({},fm,{template:lm("popover"),content:"",dismissible:!1,btnClose:'<button class="btn-close" aria-label="Close"></button>'});class Am extends Im{get name(){return"Popover"}get defaults(){return _m}constructor(t,e){super(t,e),_d(this,"show",(()=>{super.show();const{options:t,btn:e}=this;t.dismissible&&e&&setTimeout((()=>bf(e)),17)}))}}_d(Am,"selector",'[data-bs-toggle="popover"],[data-tip="popover"]'),_d(Am,"init",(t=>new Am(t))),_d(Am,"getInstance",(t=>cf(t,"Popover"))),_d(Am,"styleTip",dm);const Sm={offset:10,target:null},Rm=_f("activate.bs.scrollspy"),km=t=>sf(t)?t.scrollHeight:xf(t).scrollHeight,Cm=({element:t,scrollTarget:e})=>lf(e)?e.innerHeight:Lf(t).height,Om=t=>{[...Gf("A",t)].forEach((t=>{ef(t,"active")&&tf(t,"active")}))},Nm=(t,e)=>{const{target:n,element:i}=t;sf(n)&&Om(n),t.activeItem=e,Zd(e,"active");const r=[];let s=e;for(;s!==Df(i);)s=s.parentElement,(ef(s,"nav")||ef(s,"dropdown-menu"))&&r.push(s);r.forEach((t=>{const e=t.previousElementSibling;e&&!ef(e,"active")&&Zd(e,"active")})),Rm.relatedTarget=e,gf(i,Rm)},Pm=(t,e)=>{(e?Rd:kd)(t.scrollTarget,jd,t.refresh,Af)};class Lm extends Qf{get name(){return"ScrollSpy"}get defaults(){return Sm}dispose(){Pm(this),super.dispose()}constructor(t,e){super(t,e),_d(this,"refresh",(()=>{const{target:t}=this;if(sf(t)&&t.offsetHeight>0){(t=>{const{target:e,scrollTarget:n,options:i,itemsLength:r,scrollHeight:s,element:o}=t,{offset:a}=i,c=lf(n),h=e&&Gf("A",e),l=n?km(n):s;if(t.scrollTop=c?n.scrollY:n.scrollTop,h&&(l!==s||r!==h.length)){let e,n,i;t.items=[],t.offsets=[],t.scrollHeight=l,t.maxScroll=t.scrollHeight-Cm(t),[...h].forEach((r=>{e=Jd(r,"href"),n=e&&"#"===e.charAt(0)&&"#"!==e.slice(-1)&&Kf(e,df(o)),n&&(t.items.push(r),i=Lf(n),t.offsets.push((c?i.top+t.scrollTop:n.offsetTop)-a))})),t.itemsLength=t.items.length}})(this);const{scrollTop:e,maxScroll:n,itemsLength:i,items:r,activeItem:s}=this;if(e>=n){const t=r[i-1];return void(s!==t&&Nm(this,t))}const{offsets:o}=this;if(s&&e<o[0]&&o[0]>0)return this.activeItem=null,void(t&&Om(t));r.forEach(((t,n)=>{s!==t&&e>=o[n]&&(typeof o[n+1]>"u"||e<o[n+1])&&Nm(this,t)}))}}));const{element:n,options:i}=this;this.target=Kf(i.target,df(n)),this.target&&(this.scrollTarget=n.clientHeight<n.scrollHeight?n:$f(n),this.scrollHeight=km(this.scrollTarget),Pm(this,!0),this.refresh())}}_d(Lm,"selector",'[data-bs-spy="scroll"]'),_d(Lm,"init",(t=>new Lm(t))),_d(Lm,"getInstance",(t=>cf(t,"ScrollSpy")));const Dm=t=>cf(t,"Tab"),xm=_f("show.bs.tab"),Um=_f("shown.bs.tab"),Mm=_f("hide.bs.tab"),jm=_f("hidden.bs.tab"),Bm=new Map,Fm=t=>{const{tabContent:e,nav:n}=t;e&&ef(e,"collapsing")&&(e.style.height="",tf(e,"collapsing")),n&&Pf(n)},Hm=t=>{const{element:e,tabContent:n,content:i,nav:r}=t,{tab:s}=sf(r)&&Bm.get(r)||{tab:null};if(n&&i&&ef(i,"fade")){const{currentHeight:i,nextHeight:r}=Bm.get(e)||{currentHeight:0,nextHeight:0};i===r?Fm(t):setTimeout((()=>{n.style.height=`${r}px`,Sf(n),vf(n,(()=>Fm(t)))}),50)}else r&&Pf(r);Um.relatedTarget=s,gf(e,Um)},$m=t=>{const{element:e,content:n,tabContent:i,nav:r}=t,{tab:s,content:o}=r&&Bm.get(r)||{tab:null,content:null};let a=0;if(i&&n&&ef(n,"fade")&&([o,n].forEach((t=>{sf(t)&&Zd(t,"overflow-hidden")})),a=sf(o)?o.scrollHeight:0),xm.relatedTarget=s,jm.relatedTarget=e,gf(e,xm),!xm.defaultPrevented){if(n&&Zd(n,"active"),o&&tf(o,"active"),i&&n&&ef(n,"fade")){const t=n.scrollHeight;Bm.set(e,{currentHeight:a,nextHeight:t,tab:null,content:null}),Zd(i,"collapsing"),i.style.height=`${a}px`,Sf(i),[o,n].forEach((t=>{t&&tf(t,"overflow-hidden")}))}n&&n&&ef(n,"fade")?setTimeout((()=>{Zd(n,"show"),vf(n,(()=>{Hm(t)}))}),1):(n&&Zd(n,"show"),Hm(t)),s&&gf(s,jm)}},Vm=t=>{const{nav:e}=t;if(!sf(e))return{tab:null,content:null};const n=Xf("active",e);let i=null;1!==n.length||Bp.some((t=>ef(n[0].parentElement,t)))?n.length>1&&(i=n[n.length-1]):[i]=n;return{tab:i,content:sf(i)?op(i):null}},zm=t=>{if(!sf(t))return null;const e=qf(t,`.${Bp.join(",.")}`);return e?Kf(`.${Bp[0]}-toggle`,e):null},Wm=(t,e)=>{(e?Rd:kd)(t.element,Ld,qm)},qm=t=>{const e=Dm(t.target);e&&(t.preventDefault(),e.show())};class Km extends Qf{get name(){return"Tab"}show(){const{element:t,content:e,nav:n,dropdown:i}=this;if(!(n&&Nf(n)||ef(t,"active"))){const{tab:r,content:s}=Vm(this);if(n&&Bm.set(n,{tab:r,content:s,currentHeight:0,nextHeight:0}),Mm.relatedTarget=t,sf(r)&&(gf(r,Mm),!Mm.defaultPrevented)){Zd(t,"active"),Yd(t,"aria-selected","true");const o=sf(r)&&zm(r);if(o&&ef(o,"active")&&tf(o,"active"),n){const t=()=>{r&&(tf(r,"active"),Yd(r,"aria-selected","false")),i&&!ef(i,"active")&&Zd(i,"active")};s&&(ef(s,"fade")||e&&ef(e,"fade"))?Of(n,t,1):t()}s&&(tf(s,"show"),ef(s,"fade")?vf(s,(()=>$m(this))):$m(this))}}}dispose(){Wm(this),super.dispose()}constructor(t){super(t);const{element:e}=this,n=op(e);if(n){const t=qf(e,".nav"),i=qf(n,".tab-content");this.nav=t,this.content=n,this.tabContent=i,this.dropdown=zm(e);const{tab:r}=Vm(this);if(t&&!r){const n=Kf('[data-bs-toggle="tab"]',t),i=n&&op(n);i&&(Zd(n,"active"),Zd(i,"show"),Zd(i,"active"),Yd(e,"aria-selected","true"))}Wm(this,!0)}}}_d(Km,"selector",'[data-bs-toggle="tab"]'),_d(Km,"init",(t=>new Km(t))),_d(Km,"getInstance",Dm);const Gm={animation:!0,autohide:!0,delay:5e3},Jm=t=>cf(t,"Toast"),Xm=_f("show.bs.toast"),Ym=_f("shown.bs.toast"),Qm=_f("hide.bs.toast"),Zm=_f("hidden.bs.toast"),ty=t=>{const{element:e,options:n}=t;tf(e,"showing"),Pf(e,"showing"),gf(e,Ym),n.autohide&&Of(e,(()=>t.hide()),n.delay,"toast")},ey=t=>{const{element:e}=t;tf(e,"showing"),tf(e,"show"),Zd(e,"hide"),Pf(e,"toast"),gf(e,Zm)},ny=(t,e)=>{const n=e?Rd:kd,{element:i,triggers:r,dismiss:s,options:o,hide:a}=t;s&&n(s,Ld,a),o.autohide&&[Nd,Pd,xd,Ud].forEach((t=>n(i,t,ry))),r.length&&r.forEach((t=>n(t,Ld,iy)))},iy=t=>{const{target:e}=t,n=e&&qf(e,'[data-bs-toggle="toast"]'),i=n&&op(n),r=i&&Jm(i);r&&(n&&"A"===n.tagName&&t.preventDefault(),r.relatedTarget=n,r.show())},ry=t=>{const e=t.target,n=Jm(e),{type:i,relatedTarget:r}=t;n&&e!==r&&!e.contains(r)&&([xd,Nd].includes(i)?Pf(e,"toast"):Of(e,(()=>n.hide()),n.options.delay,"toast"))};class sy extends Qf{get name(){return"Toast"}get defaults(){return Gm}get isShown(){return ef(this.element,"show")}dispose(){const{element:t,isShown:e}=this;var n;e&&tf(t,"show"),Pf((n=this).element,"toast"),ny(n),super.dispose()}constructor(t,e){super(t,e),_d(this,"show",(()=>{const{element:t,isShown:e}=this;t&&!e&&(gf(t,Xm),Xm.defaultPrevented||(t=>{const{element:e,options:n}=t;Of(e,(()=>{tf(e,"hide"),Sf(e),Zd(e,"show"),Zd(e,"showing"),n.animation?vf(e,(()=>ty(t))):ty(t)}),17,"showing")})(this))})),_d(this,"hide",(()=>{const{element:t,isShown:e}=this;t&&e&&(gf(t,Qm),Qm.defaultPrevented||(t=>{const{element:e,options:n}=t;Zd(e,"showing"),n.animation?(Sf(e),vf(e,(()=>ey(t)))):ey(t)})(this))}));const{element:n,options:i}=this;i.animation&&!ef(n,"fade")?Zd(n,"fade"):!i.animation&&ef(n,"fade")&&tf(n,"fade"),this.dismiss=Kf('[data-bs-dismiss="toast"]',n),this.triggers=[...Jf('[data-bs-toggle="toast"]',df(n))].filter((t=>op(t)===n)),ny(this,!0)}}_d(sy,"selector",".toast"),_d(sy,"init",(t=>new sy(t))),_d(sy,"getInstance",Jm);const oy=new Map;[ip,sp,kp,jp,ug,Gg,hm,Am,Lm,Km,sy,Im].forEach((t=>oy.set(t.prototype.name,t)));const ay=t=>{const e=t&&t.nodeName?t:document,n=[...Gf("*",e)];oy.forEach((t=>{const{init:e,selector:i}=t;((t,e)=>{[...e].forEach((e=>t(e)))})(e,n.filter((t=>Yf(t,i))))}))};document.body?ay():Rd(document,"DOMContentLoaded",(()=>ay()),{once:!0});const cy=document.querySelector(".js-form"),hy=document.querySelector(".js-box"),ly=document.querySelector(".js-input");cy.addEventListener("submit",(function(t){t.preventDefault(),(e=ly.value,Je.get(`https://api.narutodb.xyz/character/search?name=${e}`)).then((t=>function(t){const e=t.images[1].indexOf(".png"),n=`\n    <img src="${t.images[1].slice(0,e+4)}" alt="" width="300"  />\n        <h1>${t.name}</h1>`;hy.innerHTML=n}(t.data)));var e}));
//# sourceMappingURL=index.be818e44.js.map
