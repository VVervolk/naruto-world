var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t,e){return function(){return t.apply(e,arguments)}}const{toString:n}=Object.prototype,{getPrototypeOf:r}=Object,i=(s=Object.create(null),t=>{const e=n.call(t);return s[e]||(s[e]=e.slice(8,-1).toLowerCase())});var s;const o=t=>(t=t.toLowerCase(),e=>i(e)===t),a=t=>e=>typeof e===t,{isArray:c}=Array,u=a("undefined");const l=o("ArrayBuffer");const h=a("string"),d=a("function"),f=a("number"),p=t=>null!==t&&"object"==typeof t,g=t=>{if("object"!==i(t))return!1;const e=r(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},m=o("Date"),y=o("File"),v=o("Blob"),w=o("FileList"),b=o("URLSearchParams");function E(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,i;if("object"!=typeof t&&(t=[t]),c(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function T(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,_=t=>!u(t)&&t!==I;const S=(A="undefined"!=typeof Uint8Array&&r(Uint8Array),t=>A&&t instanceof A);var A;const C=o("HTMLFormElement"),k=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),R=o("RegExp"),N=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};E(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)},O={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const D=o("AsyncFunction");var P={isArray:c,isArrayBuffer:l,isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&d(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||d(t.append)&&("formdata"===(e=i(t))||"object"===e&&d(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&l(t.buffer),e},isString:h,isNumber:f,isBoolean:t=>!0===t||!1===t,isObject:p,isPlainObject:g,isUndefined:u,isDate:m,isFile:y,isBlob:v,isRegExp:R,isFunction:d,isStream:t=>p(t)&&d(t.pipe),isURLSearchParams:b,isTypedArray:S,isFileList:w,forEach:E,merge:function t(){const{caseless:e}=_(this)&&this||{},n={},r=(r,i)=>{const s=e&&T(n,i)||i;g(n[s])&&g(r)?n[s]=t(n[s],r):g(r)?n[s]=t({},r):c(r)?n[s]=r.slice():n[s]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&E(arguments[t],r);return n},extend:(t,n,r,{allOwnKeys:i}={})=>(E(n,((n,i)=>{r&&d(n)?t[i]=e(n,r):t[i]=n}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let s,o,a;const c={};if(e=e||{},null==t)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)a=s[o],i&&!i(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&r(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:i,kindOfTest:o,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(c(t))return t;let e=t.length;if(!f(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:N,freezeMethods:t=>{N(t,((e,n)=>{if(d(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];d(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return c(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:T,global:I,isContextDefined:_,ALPHABET:O,generateString:(t=16,e=O.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:function(t){return!!(t&&d(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,r)=>{if(p(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=c(t)?[]:{};return E(t,((t,e)=>{const s=n(t,r+1);!u(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)},isAsyncFn:D,isThenable:t=>t&&(p(t)||d(t))&&d(t.then)&&d(t.catch)};function L(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const x=L.prototype,M={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{M[t]={value:t}})),Object.defineProperties(L,M),Object.defineProperty(x,"isAxiosError",{value:!0}),L.from=(t,e,n,r,i,s)=>{const o=Object.create(x);return P.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),L.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var U,F,B,V=L;F=function(t){var e,n,r=Q(t),i=r[0],s=r[1],o=new q(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)e=H[t.charCodeAt(n)]<<18|H[t.charCodeAt(n+1)]<<12|H[t.charCodeAt(n+2)]<<6|H[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=H[t.charCodeAt(n)]<<2|H[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=H[t.charCodeAt(n)]<<10|H[t.charCodeAt(n+1)]<<4|H[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},B=function(t){for(var e,n=t.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(J(t,o,o+s>a?a:o+s));1===r?(e=t[n-1],i.push(z[e>>2]+z[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(z[e>>10]+z[e>>4&63]+z[e<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var j,$,z=[],H=[],q="undefined"!=typeof Uint8Array?Uint8Array:Array,K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",W=0,G=K.length;W<G;++W)z[W]=K[W],H[K.charCodeAt(W)]=W;function Q(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function J(t,e,n){for(var r,i,s=[],o=e;o<n;o+=3)r=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(z[(i=r)>>18&63]+z[i>>12&63]+z[i>>6&63]+z[63&i]);return s.join("")}H["-".charCodeAt(0)]=62,H["_".charCodeAt(0)]=63,j=function(t,e,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+t[e+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+t[e+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},$=function(t,e,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(e*c-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+f]=255&o,f+=p,o/=256,u-=8);t[n+f-p]|=128*g};const X="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;U=Z;function Y(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Z.prototype),e}function Z(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return nt(t)}return tt(t,e,n)}function tt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ot(t,e);let r=Y(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Bt(t,Uint8Array)){const e=new Uint8Array(t);return it(e.buffer,e.byteOffset,e.byteLength)}return rt(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Bt(t,ArrayBuffer)||t&&Bt(t.buffer,ArrayBuffer))return it(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Bt(t,SharedArrayBuffer)||t&&Bt(t.buffer,SharedArrayBuffer)))return it(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return Z.from(r,e,n);const i=function(t){if(Z.isBuffer(t)){const e=0|st(t.length),n=Y(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Vt(t.length)?Y(0):rt(t);if("Buffer"===t.type&&Array.isArray(t.data))return rt(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Z.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function et(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function nt(t){return et(t),Y(t<0?0:0|st(t))}function rt(t){const e=t.length<0?0:0|st(t.length),n=Y(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function it(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,Z.prototype),r}function st(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function ot(t,e){if(Z.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Bt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Mt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ut(t).length;default:if(i)return r?-1:Mt(t).length;e=(""+e).toLowerCase(),i=!0}}function at(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return bt(this,e,n);case"utf8":case"utf-8":return yt(this,e,n);case"ascii":return vt(this,e,n);case"latin1":case"binary":return wt(this,e,n);case"base64":return mt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Et(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function ct(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function ut(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Vt(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=Z.from(e,r)),Z.isBuffer(e))return 0===e.length?-1:lt(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):lt(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function lt(t,e,n,r,i){let s,o=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(t,s)===u(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(t,s+r)!==u(e,r)){n=!1;break}if(n)return s}return-1}function ht(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Vt(r))return o;t[n+o]=r}return o}function dt(t,e,n,r){return Ft(Mt(e,t.length-n),t,n,r)}function ft(t,e,n,r){return Ft(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function pt(t,e,n,r){return Ft(Ut(e),t,n,r)}function gt(t,e,n,r){return Ft(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function mt(t,e,n){return 0===e&&n===t.length?B(t):B(t.slice(e,n))}function yt(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(c=(15&e)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}Z.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Z.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Z.prototype,"parent",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.buffer}}),Object.defineProperty(Z.prototype,"offset",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.byteOffset}}),Z.poolSize=8192,Z.from=function(t,e,n){return tt(t,e,n)},Object.setPrototypeOf(Z.prototype,Uint8Array.prototype),Object.setPrototypeOf(Z,Uint8Array),Z.alloc=function(t,e,n){return function(t,e,n){return et(t),t<=0?Y(t):void 0!==e?"string"==typeof n?Y(t).fill(e,n):Y(t).fill(e):Y(t)}(t,e,n)},Z.allocUnsafe=function(t){return nt(t)},Z.allocUnsafeSlow=function(t){return nt(t)},Z.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Z.prototype},Z.compare=function(t,e){if(Bt(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),Bt(e,Uint8Array)&&(e=Z.from(e,e.offset,e.byteLength)),!Z.isBuffer(t)||!Z.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},Z.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Z.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Z.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=Z.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(Bt(e,Uint8Array))i+e.length>r.length?(Z.isBuffer(e)||(e=Z.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!Z.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},Z.byteLength=ot,Z.prototype._isBuffer=!0,Z.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ct(this,e,e+1);return this},Z.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ct(this,e,e+3),ct(this,e+1,e+2);return this},Z.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ct(this,e,e+7),ct(this,e+1,e+6),ct(this,e+2,e+5),ct(this,e+3,e+4);return this},Z.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?yt(this,0,t):at.apply(this,arguments)},Z.prototype.toLocaleString=Z.prototype.toString,Z.prototype.equals=function(t){if(!Z.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Z.compare(this,t)},Z.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},X&&(Z.prototype[X]=Z.prototype.inspect),Z.prototype.compare=function(t,e,n,r,i){if(Bt(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),!Z.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==u[t]){s=c[t],o=u[t];break}return s<o?-1:o<s?1:0},Z.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Z.prototype.indexOf=function(t,e,n){return ut(this,t,e,n,!0)},Z.prototype.lastIndexOf=function(t,e,n){return ut(this,t,e,n,!1)},Z.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return ht(this,t,e,n);case"utf8":case"utf-8":return dt(this,t,e,n);case"ascii":case"latin1":case"binary":return ft(this,t,e,n);case"base64":return pt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function vt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function wt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function bt(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=jt[t[r]];return i}function Et(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function Tt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function It(t,e,n,r,i,s){if(!Z.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function _t(t,e,n,r,i){Dt(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function St(t,e,n,r,i){Dt(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function At(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ct(t,e,n,r,i){return e=+e,n>>>=0,i||At(t,0,n,4),$(t,e,n,r,23,4),n+4}function kt(t,e,n,r,i){return e=+e,n>>>=0,i||At(t,0,n,8),$(t,e,n,r,52,8),n+8}Z.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,Z.prototype),r},Z.prototype.readUintLE=Z.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},Z.prototype.readUintBE=Z.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},Z.prototype.readUint8=Z.prototype.readUInt8=function(t,e){return t>>>=0,e||Tt(t,1,this.length),this[t]},Z.prototype.readUint16LE=Z.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Tt(t,2,this.length),this[t]|this[t+1]<<8},Z.prototype.readUint16BE=Z.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Tt(t,2,this.length),this[t]<<8|this[t+1]},Z.prototype.readUint32LE=Z.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Z.prototype.readUint32BE=Z.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Z.prototype.readBigUInt64LE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Lt(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Z.prototype.readBigUInt64BE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Lt(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Z.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},Z.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Tt(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},Z.prototype.readInt8=function(t,e){return t>>>=0,e||Tt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Z.prototype.readInt16LE=function(t,e){t>>>=0,e||Tt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt16BE=function(t,e){t>>>=0,e||Tt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt32LE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Z.prototype.readInt32BE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Z.prototype.readBigInt64LE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Lt(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Z.prototype.readBigInt64BE=$t((function(t){Pt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Lt(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Z.prototype.readFloatLE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),j(this,t,!0,23,4)},Z.prototype.readFloatBE=function(t,e){return t>>>=0,e||Tt(t,4,this.length),j(this,t,!1,23,4)},Z.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Tt(t,8,this.length),j(this,t,!0,52,8)},Z.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Tt(t,8,this.length),j(this,t,!1,52,8)},Z.prototype.writeUintLE=Z.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){It(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},Z.prototype.writeUintBE=Z.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){It(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},Z.prototype.writeUint8=Z.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,1,255,0),this[e]=255&t,e+1},Z.prototype.writeUint16LE=Z.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeUint16BE=Z.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeUint32LE=Z.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Z.prototype.writeUint32BE=Z.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigUInt64LE=$t((function(t,e=0){return _t(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeBigUInt64BE=$t((function(t,e=0){return St(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);It(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},Z.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);It(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},Z.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Z.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Z.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||It(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigInt64LE=$t((function(t,e=0){return _t(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeBigInt64BE=$t((function(t,e=0){return St(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeFloatLE=function(t,e,n){return Ct(this,t,e,!0,n)},Z.prototype.writeFloatBE=function(t,e,n){return Ct(this,t,e,!1,n)},Z.prototype.writeDoubleLE=function(t,e,n){return kt(this,t,e,!0,n)},Z.prototype.writeDoubleBE=function(t,e,n){return kt(this,t,e,!1,n)},Z.prototype.copy=function(t,e,n,r){if(!Z.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},Z.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Z.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=Z.isBuffer(t)?t:Z.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const Rt={};function Nt(t,e,n){Rt[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Ot(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Dt(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new Rt.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){Pt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Lt(e,t.length-(n+1))}(r,i,s)}function Pt(t,e){if("number"!=typeof t)throw new Rt.ERR_INVALID_ARG_TYPE(e,"number",t)}function Lt(t,e,n){if(Math.floor(t)!==t)throw Pt(t,n),new Rt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Rt.ERR_BUFFER_OUT_OF_BOUNDS;throw new Rt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Nt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Nt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Nt("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Ot(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Ot(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const xt=/[^+/0-9A-Za-z-_]/g;function Mt(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Ut(t){return F(function(t){if((t=(t=t.split("=")[0]).trim().replace(xt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Ft(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function Bt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Vt(t){return t!=t}const jt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function $t(t){return"undefined"==typeof BigInt?zt:t}function zt(){throw new Error("BigInt not supported")}var Ht=U;function qt(t){return P.isPlainObject(t)||P.isArray(t)}function Kt(t){return P.endsWith(t,"[]")?t.slice(0,-2):t}function Wt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Kt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Gt=P.toFlatObject(P,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Qt=function(t,e,n){if(!P.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!P.isUndefined(e[t])}))).metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&P.isSpecCompliantForm(e);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(P.isDate(t))return t.toISOString();if(!a&&P.isBlob(t))throw new V("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(t)||P.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Ht.from(t):t}function u(t,n,i){let a=t;if(t&&!i&&"object"==typeof t)if(P.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(P.isArray(t)&&function(t){return P.isArray(t)&&!t.some(qt)}(t)||(P.isFileList(t)||P.endsWith(n,"[]"))&&(a=P.toArray(t)))return n=Kt(n),a.forEach((function(t,r){!P.isUndefined(t)&&null!==t&&e.append(!0===o?Wt([n],r,s):null===o?n:n+"[]",c(t))})),!1;return!!qt(t)||(e.append(Wt(i,n,s),c(t)),!1)}const l=[],h=Object.assign(Gt,{defaultVisitor:u,convertValue:c,isVisitable:qt});if(!P.isObject(t))throw new TypeError("data must be an object");return function t(n,r){if(!P.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),P.forEach(n,(function(n,s){!0===(!(P.isUndefined(n)||null===n)&&i.call(e,n,P.isString(s)?s.trim():s,r,h))&&t(n,r?r.concat(s):[s])})),l.pop()}}(t),e};function Jt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Xt(t,e){this._pairs=[],t&&Qt(t,this,e)}const Yt=Xt.prototype;Yt.append=function(t,e){this._pairs.push([t,e])},Yt.toString=function(t){const e=t?function(e){return t.call(this,e,Jt)}:Jt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Zt=Xt;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(t,e,n){if(!e)return t;const r=n&&n.encode||te,i=n&&n.serialize;let s;if(s=i?i(e,n):P.isURLSearchParams(e)?e.toString():new Zt(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var ne=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ie={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Zt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function se(t,e){return Qt(t,new ie.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return ie.isNode&&P.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}var oe=function(t){function e(t,n,r,i){let s=t[i++];const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&P.isArray(r)?r.length:s,a)return P.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&P.isObject(r[s])||(r[s]=[]);return e(t,n,r[s],i)&&P.isArray(r[s])&&(r[s]=function(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}(r[s])),!o}if(P.isFormData(t)&&P.isFunction(t.entries)){const n={};return P.forEachEntry(t,((t,r)=>{e(function(t){return P.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,n,0)})),n}return null};const ae={"Content-Type":void 0};const ce={transitional:re,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=P.isObject(t);i&&P.isHTMLForm(t)&&(t=new FormData(t));if(P.isFormData(t))return r&&r?JSON.stringify(oe(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return se(t,this.formSerializer).toString();if((s=P.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Qt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),function(t,e,n){if(P.isString(t))try{return(e||JSON.parse)(t),P.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||ce.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&P.isString(t)&&(n&&!this.responseType||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw V.from(t,V.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],(function(t){ce.headers[t]={}})),P.forEach(["post","put","patch"],(function(t){ce.headers[t]=P.merge(ae)}));var ue=ce;const le=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var he=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&le[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const de=Symbol("internals");function fe(t){return t&&String(t).trim().toLowerCase()}function pe(t){return!1===t||null==t?t:P.isArray(t)?t.map(pe):String(t)}function ge(t,e,n,r,i){return P.isFunction(r)?r.call(this,e,n):(i&&(e=n),P.isString(e)?P.isString(r)?-1!==e.indexOf(r):P.isRegExp(r)?r.test(e):void 0:void 0)}let me=Symbol.iterator,ye=Symbol.toStringTag;class ve{set(t,e,n){const r=this;function i(t,e,n){const i=fe(e);if(!i)throw new Error("header name must be a non-empty string");const s=P.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=pe(t))}const s=(t,e)=>P.forEach(t,((t,n)=>i(t,n,e)));return P.isPlainObject(t)||t instanceof this.constructor?s(t,e):P.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(he(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=fe(t)){const n=P.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(P.isFunction(e))return e.call(this,t,n);if(P.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=fe(t)){const n=P.findKey(this,t);return!(!n||void 0===this[n]||e&&!ge(0,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=fe(t)){const i=P.findKey(n,t);!i||e&&!ge(0,n[i],i,e)||(delete n[i],r=!0)}}return P.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;for(;n--;){const i=e[n];t&&!ge(0,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return P.forEach(this,((r,i)=>{const s=P.findKey(n,i);if(s)return e[s]=pe(r),void delete e[i];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete e[i],e[o]=pe(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return P.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&P.isArray(n)?n.join(", "):n)})),e}[me](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[ye](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[de]=this[de]={accessors:{}}).accessors,n=this.prototype;function r(t){const r=fe(t);e[r]||(!function(t,e){const n=P.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}(n,t),e[r]=!0)}return P.isArray(t)?t.forEach(r):r(t),this}constructor(t){t&&this.set(t)}}ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),P.freezeMethods(ve.prototype),P.freezeMethods(ve);var we=ve;function be(t,e){const n=this||ue,r=e||n,i=we.from(r.headers);let s=r.data;return P.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function Ee(t){return!(!t||!t.__CANCEL__)}function Te(t,e,n){V.call(this,null==t?"canceled":t,V.ERR_CANCELED,e,n),this.name="CanceledError"}P.inherits(Te,V,{__CANCEL__:!0});var Ie=Te;function _e(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Se=ie.isStandardBrowserEnv?{write:function(t,e,n,r,i,s){const o=[];o.push(t+"="+encodeURIComponent(e)),P.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),P.isString(r)&&o.push("path="+r),P.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ae(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ce(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Ae(t,e):e}var ke=ie.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=P.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Re(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Ne=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function Oe(t,e){let n=0;const r=Ne(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}const De={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let r=t.data;const i=we.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}P.isFormData(r)&&(ie.isStandardBrowserEnv||ie.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=Ce(t.baseURL,t.url);function l(){if(!c)return;const r=we.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());_e((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),ee(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new V("Request aborted",V.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new V("Network Error",V.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||re;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new V(e,r.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,t,c)),c=null},ie.isStandardBrowserEnv){const e=(t.withCredentials||ke(u))&&t.xsrfCookieName&&Se.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&P.forEach(i.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),P.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",Oe(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Oe(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new Ie(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=Re(u);h&&-1===ie.protocols.indexOf(h)?n(new V("Unsupported protocol "+h+":",V.ERR_BAD_REQUEST,t)):c.send(r||null)}))}};P.forEach(De,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Pe={getAdapter:t=>{t=P.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=P.isString(n)?De[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new V(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(P.hasOwnProp(De,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!P.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:De};function Le(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ie(null,t)}function xe(t){Le(t),t.headers=we.from(t.headers),t.data=be.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Pe.getAdapter(t.adapter||ue.adapter)(t).then((function(e){return Le(t),e.data=be.call(t,t.transformResponse,e),e.headers=we.from(e.headers),e}),(function(e){return Ee(e)||(Le(t),e&&e.response&&(e.response.data=be.call(t,t.transformResponse,e.response),e.response.headers=we.from(e.response.headers))),Promise.reject(e)}))}const Me=t=>t instanceof we?t.toJSON():t;function Ue(t,e){e=e||{};const n={};function r(t,e,n){return P.isPlainObject(t)&&P.isPlainObject(e)?P.merge.call({caseless:n},t,e):P.isPlainObject(e)?P.merge({},e):P.isArray(e)?e.slice():e}function i(t,e,n){return P.isUndefined(e)?P.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function s(t,e){if(!P.isUndefined(e))return r(void 0,e)}function o(t,e){return P.isUndefined(e)?P.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>i(Me(t),Me(e),!0)};return P.forEach(Object.keys(Object.assign({},t,e)),(function(r){const s=c[r]||i,o=s(t[r],e[r],r);P.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Fe={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Fe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Be={};Fe.transitional=function(t,e,n){function r(t,e){return"[Axios v1.4.0] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new V(r(i," has been removed"+(e?" in "+e:"")),V.ERR_DEPRECATED);return e&&!Be[i]&&(Be[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}};var Ve={assertOptions:function(t,e,n){if("object"!=typeof t)throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new V("option "+s+" must be "+n,V.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new V("Unknown option "+s,V.ERR_BAD_OPTION)}},validators:Fe};const je=Ve.validators;class $e{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Ue(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;let s;void 0!==n&&Ve.assertOptions(n,{silentJSONParsing:je.transitional(je.boolean),forcedJSONParsing:je.transitional(je.boolean),clarifyTimeoutError:je.transitional(je.boolean)},!1),null!=r&&(P.isFunction(r)?e.paramsSerializer={serialize:r}:Ve.assertOptions(r,{encode:je.function,serialize:je.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=i&&P.merge(i.common,i[e.method]),s&&P.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=we.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[xe.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);h<l;)u=u.then(t[h++],t[h++]);return u}l=o.length;let d=e;for(h=0;h<l;){const t=o[h++],e=o[h++];try{d=t(d)}catch(t){e.call(this,t);break}}try{u=xe.call(this,d)}catch(t){return Promise.reject(t)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(t){return ee(Ce((t=Ue(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new ne,response:new ne}}}P.forEach(["delete","get","head","options"],(function(t){$e.prototype[t]=function(e,n){return this.request(Ue(n||{},{method:t,url:e,data:(n||{}).data}))}})),P.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(Ue(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}$e.prototype[t]=e(),$e.prototype[t+"Form"]=e(!0)}));var ze=$e;class He{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new He((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new Ie(t,r,i),e(n.reason))}))}}var qe=He;const Ke={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ke).forEach((([t,e])=>{Ke[e]=t}));var We=Ke;const Ge=function t(n){const r=new ze(n),i=e(ze.prototype.request,r);return P.extend(i,ze.prototype,r,{allOwnKeys:!0}),P.extend(i,r,null,{allOwnKeys:!0}),i.create=function(e){return t(Ue(n,e))},i}(ue);Ge.Axios=ze,Ge.CanceledError=Ie,Ge.CancelToken=qe,Ge.isCancel=Ee,Ge.VERSION="1.4.0",Ge.toFormData=Qt,Ge.AxiosError=V,Ge.Cancel=Ge.CanceledError,Ge.all=function(t){return Promise.all(t)},Ge.spread=function(t){return function(e){return t.apply(null,e)}},Ge.isAxiosError=function(t){return P.isObject(t)&&!0===t.isAxiosError},Ge.mergeConfig=Ue,Ge.AxiosHeaders=we,Ge.formToJSON=t=>oe(P.isHTMLForm(t)?new FormData(t):t),Ge.HttpStatusCode=We,Ge.default=Ge;var Qe=Ge;const{Axios:Je,AxiosError:Xe,CanceledError:Ye,isCancel:Ze,CancelToken:tn,VERSION:en,all:nn,Cancel:rn,isAxiosError:sn,spread:on,toFormData:an,AxiosHeaders:cn,HttpStatusCode:un,formToJSON:ln,mergeConfig:hn}=Qe;var dn,fn,pn,gn=dn={};function mn(){throw new Error("setTimeout has not been defined")}function yn(){throw new Error("clearTimeout has not been defined")}function vn(t){if(fn===setTimeout)return setTimeout(t,0);if((fn===mn||!fn)&&setTimeout)return fn=setTimeout,setTimeout(t,0);try{return fn(t,0)}catch(e){try{return fn.call(null,t,0)}catch(e){return fn.call(this,t,0)}}}!function(){try{fn="function"==typeof setTimeout?setTimeout:mn}catch(t){fn=mn}try{pn="function"==typeof clearTimeout?clearTimeout:yn}catch(t){pn=yn}}();var wn,bn=[],En=!1,Tn=-1;function In(){En&&wn&&(En=!1,wn.length?bn=wn.concat(bn):Tn=-1,bn.length&&_n())}function _n(){if(!En){var t=vn(In);En=!0;for(var e=bn.length;e;){for(wn=bn,bn=[];++Tn<e;)wn&&wn[Tn].run();Tn=-1,e=bn.length}wn=null,En=!1,function(t){if(pn===clearTimeout)return clearTimeout(t);if((pn===yn||!pn)&&clearTimeout)return pn=clearTimeout,clearTimeout(t);try{pn(t)}catch(e){try{return pn.call(null,t)}catch(e){return pn.call(this,t)}}}(t)}}function Sn(t,e){this.fun=t,this.array=e}function An(){}gn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];bn.push(new Sn(t,e)),1!==bn.length||En||vn(_n)},Sn.prototype.run=function(){this.fun.apply(null,this.array)},gn.title="browser",gn.browser=!0,gn.env={},gn.argv=[],gn.version="",gn.versions={},gn.on=An,gn.addListener=An,gn.once=An,gn.off=An,gn.removeListener=An,gn.removeAllListeners=An,gn.emit=An,gn.prependListener=An,gn.prependOnceListener=An,gn.listeners=function(t){return[]},gn.binding=function(t){throw new Error("process.binding is not supported")},gn.cwd=function(){return"/"},gn.chdir=function(t){throw new Error("process.chdir is not supported")},gn.umask=function(){return 0};
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
const Cn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},kn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw new Rn;const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class Rn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nn=function(t){return function(t){const e=Cn(t);return kn.encodeByteArray(e,!0)}(t).replace(/\./g,"")},On=function(t){try{return kn.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const Dn=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Pn=()=>{try{return Dn()||(()=>{if(void 0===dn||void 0===dn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&On(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Ln=t=>{var e,n;return null===(n=null===(e=Pn())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},xn=t=>{const e=Ln(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mn=t=>{var e;return null===(e=Pn())||void 0===e?void 0:e[`_${t}`]};
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
class Un{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */function Fn(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nn(JSON.stringify({alg:"none",type:"JWT"})),Nn(JSON.stringify(s)),""].join(".")}
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
 */function Bn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Vn(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function jn(){const t=Bn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $n(){try{return"object"==typeof indexedDB}catch(t){return!1}}class zn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(qn,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new zn(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const qn=/\{\$([^}]+)}/g;
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
 */function Kn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(Gn(n)&&Gn(s)){if(!Wn(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function Gn(t){return null!==t&&"object"==typeof t}
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
function Qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jn(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function Xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */function Yn(t,e){const n=new Zn(t,e);return n.subscribe.bind(n)}class Zn{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=tr),void 0===r.error&&(r.error=tr),void 0===r.complete&&(r.complete=tr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function tr(){}
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
function er(t){return t&&t._delegate?t._delegate:t}class nr{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class rr{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Un;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ir{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new rr(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
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
 */const sr=[];var or,ar;(ar=or||(or={}))[ar.DEBUG=0]="DEBUG",ar[ar.VERBOSE=1]="VERBOSE",ar[ar.INFO=2]="INFO",ar[ar.WARN=3]="WARN",ar[ar.ERROR=4]="ERROR",ar[ar.SILENT=5]="SILENT";const cr={debug:or.DEBUG,verbose:or.VERBOSE,info:or.INFO,warn:or.WARN,error:or.ERROR,silent:or.SILENT},ur=or.INFO,lr={[or.DEBUG]:"log",[or.VERBOSE]:"log",[or.INFO]:"info",[or.WARN]:"warn",[or.ERROR]:"error"},hr=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=lr[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class dr{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in or))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?cr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,or.DEBUG,...t),this._logHandler(this,or.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,or.VERBOSE,...t),this._logHandler(this,or.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,or.INFO,...t),this._logHandler(this,or.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,or.WARN,...t),this._logHandler(this,or.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,or.ERROR,...t),this._logHandler(this,or.ERROR,...t)}constructor(t){this.name=t,this._logLevel=ur,this._logHandler=hr,this._userLogHandler=null,sr.push(this)}}let fr,pr;const gr=new WeakMap,mr=new WeakMap,yr=new WeakMap,vr=new WeakMap,wr=new WeakMap;let br={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return mr.get(t);if("objectStoreNames"===e)return t.objectStoreNames||yr.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Er(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pr||(pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(_r(this),e),Ir(gr.get(this))}:function(...e){return Ir(t.apply(_r(this),e))}:function(e,...n){const r=t.call(_r(this),e,...n);return yr.set(r,e.sort?e.sort():[e]),Ir(r)}}function Tr(t){return"function"==typeof t?Er(t):(t instanceof IDBTransaction&&function(t){if(mr.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));mr.set(t,e)}(t),e=t,(fr||(fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,br):t);var e}function Ir(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(Ir(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&gr.set(e,t)})).catch((()=>{})),wr.set(e,t),e}(t);if(vr.has(t))return vr.get(t);const e=Tr(t);return e!==t&&(vr.set(t,e),wr.set(e,t)),e}const _r=t=>wr.get(t);function Sr(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(Ir(o.result),t.oldVersion,t.newVersion,Ir(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Ar=["get","getKey","getAll","getAllKeys","count"],Cr=["put","add","delete","clear"],kr=new Map;function Rr(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(kr.get(e))return kr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Cr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ar.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return kr.set(e,s),s}br=(t=>({...t,get:(e,n,r)=>Rr(e,n)||t.get(e,n,r),has:(e,n)=>!!Rr(e,n)||t.has(e,n)}))(br);
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
class Nr{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Or=new dr("@firebase/app"),Dr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Pr=new Map,Lr=new Map;function xr(t,e){try{t.container.addComponent(e)}catch(n){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(Lr.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;Lr.set(e,t);for(const e of Pr.values())xr(e,t);return!0}function Ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Fr=new Hn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Br{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nr("app",(()=>this),"PUBLIC"))}}
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
 */function Vr(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw Fr.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=Pn())||void 0===s?void 0:s.config),!n)throw Fr.create("no-options");const o=Pr.get(i);if(o){if(Wn(n,o.options)&&Wn(r,o.config))return o;throw Fr.create("duplicate-app",{appName:i})}const a=new ir(i);for(const t of Lr.values())a.addComponent(t);const c=new Br(n,r,a);return Pr.set(i,c),c}function jr(t="[DEFAULT]"){const e=Pr.get(t);if(!e&&"[DEFAULT]"===t)return Vr();if(!e)throw Fr.create("no-app",{appName:t});return e}function $r(t,e,n){var r;let i=null!==(r=Dr[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Or.warn(t.join(" "))}Mr(new nr(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}let zr=null;function Hr(){return zr||(zr=Sr("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})}))),zr}async function qr(t,e){try{const n=(await Hr()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(e,Kr(t)),n.done}catch(t){if(t instanceof zn)Or.warn(t.message);else{const e=Fr.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Or.warn(e.message)}}}function Kr(t){return`${t.name}!${t.options.appId}`}
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
 */class Wr{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Gr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Gr(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Jr(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Nn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Qr(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Gr(){return(new Date).toISOString().substring(0,10)}class Qr{async runIndexedDBEnvironmentCheck(){return!!$n()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Hr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Kr(t))}catch(t){if(t instanceof zn)Or.warn(t.message);else{const e=Fr.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Or.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return qr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return qr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Jr(t){return Nn(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Xr;Xr="",Mr(new nr("platform-logger",(t=>new Nr(t)),"PRIVATE")),Mr(new nr("heartbeat",(t=>new Wr(t)),"PRIVATE")),$r("@firebase/app","0.9.9",Xr),$r("@firebase/app","0.9.9","esm2017"),$r("fire-js","");
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
$r("firebase","9.21.0","app");function Yr(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;function Zr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ti=Zr,ei=new Hn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ni=new dr("@firebase/auth");function ri(t,...e){ni.logLevel<=or.ERROR&&ni.error(`Auth (9.21.0): ${t}`,...e)}
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
 */function ii(t,...e){throw ai(t,...e)}function si(t,...e){return ai(t,...e)}function oi(t,e,n){const r=Object.assign(Object.assign({},ti()),{[e]:n});return new Hn("auth","Firebase",r).create(e,{appName:t.name})}function ai(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ei.create(t,...e)}function ci(t,e,...n){if(!t)throw ai(e,...n)}function ui(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ri(e),new Error(e)}function li(t,e){t||ui(e)}
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
 */function hi(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function di(){return"http:"===fi()||"https:"===fi()}function fi(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function pi(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(di()||Vn()||"connection"in navigator))||navigator.onLine}
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
class gi{get(){return pi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,li(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bn())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function mi(t,e){li(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class yi{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const vi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},wi=new gi(3e4,6e4);
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
 */function bi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,i={}){return Ti(t,i,(async()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=Qn(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),yi.fetch()(_i(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ti(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vi),e);try{const e=new Si(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ai(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ai(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ai(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ai(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw oi(t,a,o);ii(t,a)}}catch(e){if(e instanceof zn)throw e;ii(t,"network-request-failed",{message:String(e)})}}async function Ii(t,e,n,r,i={}){const s=await Ei(t,e,n,r,i);return"mfaPendingCredential"in s&&ii(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _i(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mi(t.config,i):`${t.config.apiScheme}://${i}`}class Si{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(si(this.auth,"network-request-failed"))),wi.get())}))}}function Ai(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=si(t,e,r);return i.customData._tokenResponse=n,i}
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
function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function ki(t){return 1e3*Number(t)}function Ri(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return ri("JWT malformed, contained fewer than 3 sections"),null;try{const t=On(n);return t?JSON.parse(t):(ri("Failed to decode base64 JWT payload"),null)}catch(t){return ri("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function Ni(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof zn&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Oi{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Di{_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
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
 */async function Pi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ni(t,async function(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));ci(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Yr(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Di(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class Li{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ci(t.idToken,"internal-error"),ci(void 0!==t.idToken,"internal-error"),ci(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ri(t);return ci(e,"internal-error"),ci(void 0!==e.exp,"internal-error"),ci(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ci(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(t,e){const n=await Ti(t,{},(async()=>{const n=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=_i(t,r,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",yi.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new Li;return n&&(ci("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(ci("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(ci("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return ui("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function xi(t,e){ci("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Mi{async getIdToken(t){const e=await Ni(this,this.stsTokenManager.getToken(this.auth,t));return ci(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=er(t),r=await n.getIdToken(e),i=Ri(r);ci(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ci(ki(i.auth_time)),issuedAtTime:Ci(ki(i.iat)),expirationTime:Ci(ki(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=er(t);await Pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ci(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Mi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){ci(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Pi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ni(this,async function(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=e;ci(v&&T,t,"internal-error");const I=Li.fromJSON(this.name,T);ci("string"==typeof v,t,"internal-error"),xi(l,t.name),xi(h,t.name),ci("boolean"==typeof w,t,"internal-error"),ci("boolean"==typeof b,t,"internal-error"),xi(d,t.name),xi(f,t.name),xi(p,t.name),xi(g,t.name),xi(m,t.name),xi(y,t.name);const _=new Mi({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(_.providerData=E.map((t=>Object.assign({},t)))),g&&(_._redirectEventId=g),_}static async _fromIdTokenResponse(t,e,n=!1){const r=new Li;r.updateFromServerResponse(e);const i=new Mi({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Pi(i),i}constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Yr(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Di(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */const Ui=new Map;function Fi(t){li(t instanceof Function,"Expected a class definition");let e=Ui.get(t);return e?(li(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ui.set(t,e),e)}
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
 */class Bi{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Bi.type="NONE";const Vi=Bi;
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
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Mi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new $i(Fi(Vi),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Fi(Vi);const s=ji(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=Mi._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new $i(i,t,n)):new $i(i,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ji(this.userKey,r.apiKey,i),this.fullPersistenceKey=ji("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function zi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qi(e))return"Blackberry";if(Ji(e))return"Webos";if(qi(e))return"Safari";if((e.includes("chrome/")||Ki(e))&&!e.includes("edge/"))return"Chrome";if(Gi(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Hi(t=Bn()){return/firefox\//i.test(t)}function qi(t=Bn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ki(t=Bn()){return/crios\//i.test(t)}function Wi(t=Bn()){return/iemobile/i.test(t)}function Gi(t=Bn()){return/android/i.test(t)}function Qi(t=Bn()){return/blackberry/i.test(t)}function Ji(t=Bn()){return/webos/i.test(t)}function Xi(t=Bn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yi(){return jn()&&10===document.documentMode}function Zi(t=Bn()){return Xi(t)||Gi(t)||Ji(t)||Qi(t)||/windows phone/i.test(t)||Wi(t)}
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
function ts(t,e=[]){let n;switch(t){case"Browser":n=zi(Bn());break;case"Worker":n=`${zi(Bn())}-${t}`;break;default:n=t}return`${n}/JsCore/9.21.0/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */async function es(t,e){return Ei(t,"GET","/v2/recaptchaConfig",bi(t,e))}
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
 */function ns(t){return void 0!==t&&void 0!==t.enterprise}class rs{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
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
 */function is(t){return new Promise(((e,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=si("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function ss(t){return`__${t}${Math.floor(1e6*Math.random())}`}class os{async verify(t="verify",e=!1){function n(e,n,r){const i=window.grecaptcha;ns(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,r)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{es(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new rs(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((i=>{if(!e&&ns(window.grecaptcha))n(i,t,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));is("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}constructor(t){this.type="recaptcha-enterprise",this.auth=ls(t)}}async function as(t,e,n,r=!1){const i=new os(t);let s;try{s=await i.verify(n)}catch(t){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class cs{pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
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
 */class us{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Fi(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await $i.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ci(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Pi(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?er(t):null;return e&&ci(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&ci(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Fi(t))}))}async initializeRecaptchaConfig(){const t=await es(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new rs(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){new os(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Hn("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Fi(t)||this._popupRedirectResolver;ci(e,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[Fi(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ci(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ci(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ts(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){ni.logLevel<=or.WARN&&ni.warn(`Auth (9.21.0): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hs(this),this.idTokenSubscription=new hs(this),this.beforeStateQueue=new cs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ei,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}}function ls(t){return er(t)}class hs{get next(){return ci(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=Yn((t=>this.observer=t))}}
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
 */function ds(t,e,n){const r=ls(t);ci(r._canInitEmulator,r,"emulator-config-failed"),ci(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=fs(e),{host:o,port:a}=function(t){const e=fs(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ps(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ps(e)}}}(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function fs(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ps(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class gs{toJSON(){return ui("not implemented")}_getIdTokenResponse(t){return ui("not implemented")}_linkToIdToken(t,e){return ui("not implemented")}_getReauthenticationResolver(t){return ui("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
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
 */async function ms(t,e){return Ei(t,"POST","/v1/accounts:update",e)}
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
async function ys(t,e){return Ii(t,"POST","/v1/accounts:signInWithPassword",bi(t,e))}
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
return async function(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}(t,{email:this._email,oobCode:this._password});default:ii(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return ms(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",bi(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:ii(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}}
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
 */async function ws(t,e){return Ii(t,"POST","/v1/accounts:signInWithIdp",bi(t,e))}
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
 */class bs extends gs{static _fromParams(t){const e=new bs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ii("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Yr(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new bs(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return ws(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ws(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ws(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Qn(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
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
class Ts extends gs{static _fromVerification(t,e){return new Ts({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Ts({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Ii(t,"POST","/v1/accounts:signInWithPhoneNumber",bi(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Ii(t,"POST","/v1/accounts:signInWithPhoneNumber",bi(t,e));if(n.temporaryProof)throw Ai(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Ii(t,"POST","/v1/accounts:signInWithPhoneNumber",bi(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Es)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Ts({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(t){super("phone","phone"),this.params=t}}
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
 */class Is{static parseLink(t){const e=function(t){const e=Jn(Xn(t)).link,n=e?Jn(Xn(e)).deep_link_id:null,r=Jn(Xn(t)).deep_link_id;return(r?Jn(Xn(r)).link:null)||r||n||e||t}(t);try{return new Is(e)}catch(t){return null}}constructor(t){var e,n,r,i,s,o;const a=Jn(Xn(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);ci(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class _s{static credential(t,e){return vs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Is.parseLink(e);return ci(n,"argument-error"),vs._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=_s.PROVIDER_ID}}_s.PROVIDER_ID="password",_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password",_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ss{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class As extends Ss{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Cs extends As{static credential(t){return bs._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cs.credentialFromTaggedObject(t)}static credentialFromError(t){return Cs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Cs.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Cs.FACEBOOK_SIGN_IN_METHOD="facebook.com",Cs.PROVIDER_ID="facebook.com";
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
class ks extends As{static credential(t,e){return bs._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ks.credentialFromTaggedObject(t)}static credentialFromError(t){return ks.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ks.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}ks.GOOGLE_SIGN_IN_METHOD="google.com",ks.PROVIDER_ID="google.com";
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
class Rs extends As{static credential(t){return bs._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rs.credentialFromTaggedObject(t)}static credentialFromError(t){return Rs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Rs.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Rs.GITHUB_SIGN_IN_METHOD="github.com",Rs.PROVIDER_ID="github.com";
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
class Ns extends As{static credential(t,e){return bs._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ns.credentialFromTaggedObject(t)}static credentialFromError(t){return Ns.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ns.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
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
async function Os(t,e){return Ii(t,"POST","/v1/accounts:signUp",bi(t,e))}
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
 */Ns.TWITTER_SIGN_IN_METHOD="twitter.com",Ns.PROVIDER_ID="twitter.com";class Ds{static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Mi._fromIdTokenResponse(t,n,r),s=Ps(n);return new Ds({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Ps(n);return new Ds({user:t,providerId:r,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Ps(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Ls extends zn{static _fromErrorAndOperation(t,e,n,r){return new Ls(t,e,n,r)}constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ls.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function xs(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ls._fromErrorAndOperation(t,n,e,r);throw n}))}
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
 */async function Ms(t,e,n=!1){const r=await Ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ds._forOperation(t,"link",r)}
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
async function Us(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ni(t,xs(r,i,e,t),n);ci(s.idToken,r,"internal-error");const o=Ri(s.idToken);ci(o,r,"internal-error");const{sub:a}=o;return ci(t.uid===a,r,"user-mismatch"),Ds._forOperation(t,i,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&ii(r,"user-mismatch"),t}}
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
 */async function Fs(t,e,n=!1){const r="signIn",i=await xs(t,r,e),s=await Ds._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bs(t,e){return Fs(ls(t),e)}async function Vs(t,e,n){var r;const i=ls(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await as(i,s,"signUpPassword");o=Os(i,t)}else o=Os(i,s).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const t=await as(i,s,"signUpPassword");return Os(i,t)}return Promise.reject(t)}));const a=await o.catch((t=>Promise.reject(t))),c=await Ds._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}new WeakMap;
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
class js{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
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
 */class $s extends js{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);Yi()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Bn();return qi(t)||Xi(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Zi(),this._shouldAllowMigration=!0}}$s.type="LOCAL";const zs=$s;
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
 */class Hs extends js{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Hs.type="SESSION";const qs=Hs;
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
class Ks{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ks(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Ws(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */Ks.receivers=[];class Gs{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ws("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
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
 */function Qs(){return window}
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
function Js(){return void 0!==Qs().WorkerGlobalScope&&"function"==typeof Qs().importScripts}class Xs{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Ys(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Zs(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Xs(t).toPromise()}(),e(await Zs()))}))}))}async function to(t,e,n){const r=Ys(t,!0).put({fbase_key:e,value:n});return new Xs(r).toPromise()}function eo(t,e){const n=Ys(t,!0).delete(e);return new Xs(n).toPromise()}class no{async _openDb(){return this.db||(this.db=await Zs()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Js()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ks._getInstance(Js()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Gs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zs();return await to(t,"__sak","1"),await eo(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>to(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Ys(t,!1).get(e),r=await new Xs(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>eo(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ys(t,!1).getAll();return new Xs(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}no.type="LOCAL";const ro=no;
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
ss("rcb"),new gi(3e4,6e4);async function io(t,e,n){var r;const i=await n.verify();try{let s;if(ci("string"==typeof i,t,"argument-error"),ci("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){ci("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return Ei(t,"POST","/v2/accounts/mfaEnrollment:start",bi(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{ci("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;ci(n,t,"missing-multi-factor-info");const o=await function(t,e){return Ei(t,"POST","/v2/accounts/mfaSignIn:start",bi(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Ei(t,"POST","/v1/accounts:sendVerificationCode",bi(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
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
class so{verifyPhoneNumber(t,e){return io(this.auth,t,er(e))}static credential(t,e){return Ts._fromVerification(t,e)}static credentialFromResult(t){const e=t;return so.credentialFromTaggedObject(e)}static credentialFromError(t){return so.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Ts._fromTokenResponse(e,n):null}constructor(t){this.providerId=so.PROVIDER_ID,this.auth=ls(t)}}
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
function oo(t,e){return e?Fi(e):(ci(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */so.PROVIDER_ID="phone",so.PHONE_SIGN_IN_METHOD="phone";class ao extends gs{_getIdTokenResponse(t){return ws(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ws(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ws(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function co(t){return Fs(t.auth,new ao(t),t.bypassAuthState)}function uo(t){const{auth:e,user:n}=t;return ci(n,e,"internal-error"),Us(n,new ao(t),t.bypassAuthState)}async function lo(t){const{auth:e,user:n}=t;return ci(n,e,"internal-error"),Ms(n,new ao(t),t.bypassAuthState)}
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
 */class ho{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return co;case"linkViaPopup":case"linkViaRedirect":return lo;case"reauthViaPopup":case"reauthViaRedirect":return uo;default:ii(this.auth,"internal-error")}}resolve(t){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
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
 */const fo=new gi(2e3,1e4);class po extends ho{async executeNotNull(){const t=await this.execute();return ci(t,this.auth,"internal-error"),t}async onExecution(){li(1===this.filter.length,"Popup operations only handle one event");const t=Ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(si(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,po.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(si(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,fo.get())};t()}constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,po.currentPopupAction&&po.currentPopupAction.cancel(),po.currentPopupAction=this}}po.currentPopupAction=null;
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
const go=new Map;class mo extends ho{async execute(){let t=go.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=wo(e),r=vo(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}go.set(this.auth._key(),t)}return this.bypassAuthState||go.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function yo(t,e){go.set(t._key(),e)}function vo(t){return Fi(t._redirectPersistence)}function wo(t){return ji("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function bo(t,e,n=!1){const r=ls(t),i=oo(r,e),s=new mo(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class Eo{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Io(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Io(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(si(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(t))}saveEventToCache(t){this.cachedEventUids.add(To(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function To(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Io({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const _o=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,So=/^https?/;async function Ao(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Ei(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Co(t))return}catch(t){}ii(t,"unauthorized-domain")}function Co(t){const e=hi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!So.test(n))return!1;if(_o.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const ko=new gi(3e4,6e4);function Ro(){const t=Qs().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let No=null;function Oo(t){return No=No||function(t){return new Promise(((e,n)=>{var r,i,s;function o(){Ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ro(),n(si(t,"network-request-failed"))},timeout:ko.get()})}if(null===(i=null===(r=Qs().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Qs().gapi)||void 0===s?void 0:s.load)){const e=ss("iframefcb");return Qs()[e]=()=>{gapi.load?o():n(si(t,"network-request-failed"))},is(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw No=null,t}))}(t),No}
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
 */const Do=new gi(5e3,15e3),Po={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xo(t){const e=t.config;ci(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mi(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"9.21.0"},i=Lo.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qn(r).slice(1)}`}
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
const Mo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Uo{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Fo(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Mo),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Bn().toLowerCase();n&&(a=Ki(u)?"_blank":n),Hi(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Bn()){var e;return Xi(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(e||"",a),new Uo(null);const h=window.open(e||"",a,l);ci(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Uo(h)}const Bo=encodeURIComponent("fac");async function Vo(t,e,n,r,i,s){ci(t.config.authDomain,t,"auth-domain-config-required"),ci(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"9.21.0",eventId:i};if(e instanceof Ss){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kn(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof As){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),u=c?`#${Bo}=${encodeURIComponent(c)}`:"";return`${function({config:t}){return t.emulator?mi(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${Qn(a).slice(1)}${u}`}const jo=class{async _openPopup(t,e,n,r){var i;li(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Fo(t,await Vo(t,e,n,hi(),r),Ws())}async _openRedirect(t,e,n,r){await this._originValidation(t);return function(t){Qs().location.href=t}(await Vo(t,e,n,hi(),r)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(li(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Oo(t),n=Qs().gapi;return ci(n,t,"internal-error"),e.open({where:document.body,url:xo(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Po,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=si(t,"network-request-failed"),s=Qs().setTimeout((()=>{r(i)}),Do.get());function o(){Qs().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}(t),n=new Eo(t);return e.register("authEvent",(e=>{ci(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),ii(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ao(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Zi()||qi()||Xi()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qs,this._completeRedirectFn=bo,this._overrideRedirectResult=yo}};
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
class $o{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ci(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
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
const zo=Mn("authIdTokenMaxAge")||300;let Ho=null;var qo;qo="Browser",Mr(new nr("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;ci(s&&!s.includes(":"),"invalid-api-key",{appName:n.name}),ci(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:qo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ts(qo)},c=new us(n,r,i,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fi);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Mr(new nr("auth-internal",(t=>{const e=ls(t.getProvider("auth").getImmediate());return new $o(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),$r("@firebase/auth","0.23.1",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qo)),$r("@firebase/auth","0.23.1","esm2017");var Ko,Wo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Go={},Qo=Qo||{},Jo=Wo||self;function Xo(){}function Yo(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Zo(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ta="closure_uid_"+(1e9*Math.random()>>>0),ea=0;function na(t,e,n){return t.call.apply(t.bind,arguments)}function ra(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ia(t,e,n){return(ia=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:ra).apply(null,arguments)}function sa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function oa(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function aa(){this.s=this.s,this.o=this.o}aa.prototype.s=!1,aa.prototype.ra=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ta)&&t[ta]||(t[ta]=++ea))},aa.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ca=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ua(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function la(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Yo(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function ha(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ha.prototype.h=function(){this.defaultPrevented=!0};var da=function(){if(!Jo.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Jo.addEventListener("test",Xo,e),Jo.removeEventListener("test",Xo,e)}catch(t){}return t}();function fa(t){return/^[\s\xa0]*$/.test(t)}var pa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ga(t,e){return t<e?-1:t>e?1:0}function ma(){var t=Jo.navigator;return t&&(t=t.userAgent)?t:""}function ya(t){return-1!=ma().indexOf(t)}function va(t){return va[" "](t),t}function wa(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}va[" "]=Xo;var ba,Ea,Ta=ya("Opera"),Ia=ya("Trident")||ya("MSIE"),_a=ya("Edge"),Sa=_a||Ia,Aa=ya("Gecko")&&!(-1!=ma().toLowerCase().indexOf("webkit")&&!ya("Edge"))&&!(ya("Trident")||ya("MSIE"))&&!ya("Edge"),Ca=-1!=ma().toLowerCase().indexOf("webkit")&&!ya("Edge");function ka(){var t=Jo.document;return t?t.documentMode:void 0}t:{var Ra="",Na=(Ea=ma(),Aa?/rv:([^\);]+)(\)|;)/.exec(Ea):_a?/Edge\/([\d\.]+)/.exec(Ea):Ia?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ea):Ca?/WebKit\/(\S+)/.exec(Ea):Ta?/(?:Version)[ \/]?(\S+)/.exec(Ea):void 0);if(Na&&(Ra=Na?Na[1]:""),Ia){var Oa=ka();if(null!=Oa&&Oa>parseFloat(Ra)){ba=String(Oa);break t}}ba=Ra}var Da,Pa={};if(Jo.document&&Ia){var La=ka();Da=La||(parseInt(ba,10)||void 0)}else Da=void 0;var xa=Da;function Ma(t,e){if(ha.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Aa){t:{try{va(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ua[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ma.$.h.call(this)}}oa(Ma,ha);var Ua={2:"touch",3:"pen",4:"mouse"};Ma.prototype.h=function(){Ma.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fa="closure_listenable_"+(1e6*Math.random()|0),Ba=0;function Va(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Ba,this.fa=this.ia=!1}function ja(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $a(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function za(t){const e={};for(const n in t)e[n]=t[n];return e}const Ha="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qa(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<Ha.length;e++)n=Ha[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ka(t){this.src=t,this.g={},this.h=0}function Wa(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=ca(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ja(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ga(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}Ka.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Ga(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Va(e,this.src,s,!!r,i)).ia=n,t.push(e)),e};var Qa="closure_lm_"+(1e6*Math.random()|0),Ja={};function Xa(t,e,n,r,i){if(r&&r.once)return Za(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xa(t,e[s],n,r,i);return null}return n=oc(n),t&&t[Fa]?t.O(e,n,Zo(r)?!!r.capture:!!r,i):Ya(t,e,n,!1,r,i)}function Ya(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zo(i)?!!i.capture:!!i,a=ic(t);if(a||(t[Qa]=a=new Ka(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=rc;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)da||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(nc(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Za(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Za(t,e[s],n,r,i);return null}return n=oc(n),t&&t[Fa]?t.P(e,n,Zo(r)?!!r.capture:!!r,i):Ya(t,e,n,!0,r,i)}function tc(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)tc(t,e[s],n,r,i);else r=Zo(r)?!!r.capture:!!r,n=oc(n),t&&t[Fa]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ga(s=t.g[e],n,r,i))&&(ja(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=ic(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ga(e,n,r,i)),(n=-1<t?e[t]:null)&&ec(n))}function ec(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Fa])Wa(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(nc(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ic(e))?(Wa(n,t),0==n.h&&(n.src=null,e[Qa]=null)):ja(t)}}}function nc(t){return t in Ja?Ja[t]:Ja[t]="on"+t}function rc(t,e){if(t.fa)t=!0;else{e=new Ma(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ec(t),t=n.call(r,e)}return t}function ic(t){return(t=t[Qa])instanceof Ka?t:null}var sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function oc(t){return"function"==typeof t?t:(t[sc]||(t[sc]=function(e){return t.handleEvent(e)}),t[sc])}function ac(){aa.call(this),this.i=new Ka(this),this.S=this,this.J=null}function cc(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new ha(e,t);else if(e instanceof ha)e.target=e.target||t;else{var i=e;qa(e=new ha(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=uc(o,r,!0,e)&&i}if(i=uc(o=e.g=t,r,!0,e)&&i,i=uc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=uc(o=e.g=n[s],r,!1,e)&&i}function uc(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Wa(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}oa(ac,aa),ac.prototype[Fa]=!0,ac.prototype.removeEventListener=function(t,e,n,r){tc(this,t,e,n,r)},ac.prototype.N=function(){if(ac.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ja(n[r]);delete e.g[t],e.h--}}this.J=null},ac.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ac.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var lc=Jo.JSON.stringify;function hc(){var t=vc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var dc,fc=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new pc),(t=>t.reset()));class pc{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function gc(t){Jo.setTimeout((()=>{throw t}),0)}function mc(t,e){dc||function(){var t=Jo.Promise.resolve(void 0);dc=function(){t.then(wc)}}(),yc||(dc(),yc=!0),vc.add(t,e)}var yc=!1,vc=new class{add(t,e){const n=fc.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function wc(){for(var t;t=hc();){try{t.h.call(t.g)}catch(t){gc(t)}var e=fc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yc=!1}function bc(t,e){ac.call(this),this.h=t||1,this.g=e||Jo,this.j=ia(this.qb,this),this.l=Date.now()}function Ec(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Tc(t,e,n){if("function"==typeof t)n&&(t=ia(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ia(t.handleEvent,t)}return 2147483647<Number(e)?-1:Jo.setTimeout(t,e||0)}function Ic(t){t.g=Tc((()=>{t.g=null,t.i&&(t.i=!1,Ic(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}oa(bc,ac),(Ko=bc.prototype).ga=!1,Ko.T=null,Ko.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),cc(this,"tick"),this.ga&&(Ec(this),this.start()))}},Ko.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ko.N=function(){bc.$.N.call(this),Ec(this),delete this.g};class _c extends aa{l(t){this.h=arguments,this.g?this.i=!0:Ic(this)}N(){super.N(),this.g&&(Jo.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Sc(t){aa.call(this),this.h=t,this.g={}}oa(Sc,aa);var Ac=[];function Cc(t,e,n,r){Array.isArray(n)||(n&&(Ac[0]=n.toString()),n=Ac);for(var i=0;i<n.length;i++){var s=Xa(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kc(t){$a(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ec(t)}),t),t.g={}}function Rc(){this.g=!0}function Nc(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return lc(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Sc.prototype.N=function(){Sc.$.N.call(this),kc(this)},Sc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Rc.prototype.Ea=function(){this.g=!1},Rc.prototype.info=function(){};var Oc={},Dc=null;function Pc(){return Dc=Dc||new ac}function Lc(t){ha.call(this,Oc.Ta,t)}function xc(t){const e=Pc();cc(e,new Lc(e))}function Mc(t,e){ha.call(this,Oc.STAT_EVENT,t),this.stat=e}function Uc(t){const e=Pc();cc(e,new Mc(e,t))}function Fc(t,e){ha.call(this,Oc.Ua,t),this.size=e}function Bc(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Jo.setTimeout((function(){t()}),e)}Oc.Ta="serverreachability",oa(Lc,ha),Oc.STAT_EVENT="statevent",oa(Mc,ha),Oc.Ua="timingevent",oa(Fc,ha);var Vc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $c(){}function zc(t){return t.h||(t.h=t.i())}function Hc(){}$c.prototype.h=null;var qc,Kc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wc(){ha.call(this,"d")}function Gc(){ha.call(this,"c")}function Qc(){}function Jc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Sc(this),this.P=Yc,t=Sa?125:void 0,this.V=new bc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Xc}function Xc(){this.i=null,this.g="",this.h=!1}oa(Wc,ha),oa(Gc,ha),oa(Qc,$c),Qc.prototype.g=function(){return new XMLHttpRequest},Qc.prototype.i=function(){return{}},qc=new Qc;var Yc=45e3,Zc={},tu={};function eu(t,e,n){t.L=1,t.v=bu(gu(e)),t.s=n,t.S=!0,nu(t,null)}function nu(t,e){t.G=Date.now(),ou(t),t.A=gu(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Pu(n.i,"t",r),t.C=0,n=t.l.I,t.h=new Xc,t.g=Dl(t.l,n?e:null,!t.s),0<t.O&&(t.M=new _c(ia(t.Pa,t,t.g),t.O)),Cc(t.U,t.g,"readystatechange",t.nb),e=t.I?za(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xc(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function ru(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function iu(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=su(t,n),r==tu){4==e&&(t.o=4,Uc(14),i=!1),Nc(t.j,t.m,null,"[Incomplete Response]");break}if(r==Zc){t.o=4,Uc(15),Nc(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Nc(t.j,t.m,r,null),hu(t,r)}ru(t)&&r!=tu&&r!=Zc&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Uc(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,(e=t.l).g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_l(e),e.L=!0,Uc(11))):(Nc(t.j,t.m,n,"[Invalid Chunked Response]"),lu(t),uu(t))}function su(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?tu:(n=Number(e.substring(n,r)),isNaN(n)?Zc:(r+=1)+n>e.length?tu:(e=e.substr(r,n),t.C=r+n,e))}function ou(t){t.Y=Date.now()+t.P,au(t,t.P)}function au(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Bc(ia(t.lb,t),e)}function cu(t){t.B&&(Jo.clearTimeout(t.B),t.B=null)}function uu(t){0==t.l.H||t.J||Cl(t.l,t)}function lu(t){cu(t);var e=t.M;e&&"function"==typeof e.ra&&e.ra(),t.M=null,Ec(t.V),kc(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function hu(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Bu(n.h,t)))if(!t.K&&Bu(n.h,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Al(n),ml(n)}Il(n),Uc(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=Bc(ia(n.ib,n),6e3));if(1>=Fu(n.h)&&n.na){try{n.na()}catch(t){}n.na=void 0}}else Rl(n,11)}else if((t.K||n.g==t)&&Al(n),!fa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const e=u[3];null!=e&&(n.qa=e,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Vu(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,wu(r.G,r.F,t))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=Ol(r,r.I?r.oa:null,r.Y),o.K){ju(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(cu(a),ou(a)),r.g=o}else Tl(r);0<n.i.length&&vl(n)}else"stop"!=u[0]&&"close"!=u[0]||Rl(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Rl(n,7):gl(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}xc()}catch(t){}}function du(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Yo(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.sa&&"function"==typeof t.sa)return t.sa();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Yo(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Yo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(Ko=Jc.prototype).setTimeout=function(t){this.P=t},Ko.nb=function(t){t=t.target;const e=this.M;e&&3==ul(t)?e.l():this.Pa(t)},Ko.Pa=function(t){try{if(t==this.g)t:{const l=ul(this.g);var e=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||Sa||this.g&&(this.h.h||this.g.ja()||ll(this.g)))){this.J||4!=l||7==e||xc(),cu(this);var n=this.g.da();this.aa=n;e:if(ru(this)){var r=ll(this.g);t="";var i=r.length,s=4==ul(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){lu(this),uu(this);var o="";break e}this.h.i=new Jo.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fa(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Uc(12),lu(this),uu(this);break t}Nc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hu(this,n)}this.S?(iu(this,l,o),Sa&&this.i&&3==l&&(Cc(this.U,this.V,"tick",this.mb),this.V.start())):(Nc(this.j,this.m,o,null),hu(this,o)),4==l&&lu(this),this.i&&!this.J&&(4==l?Cl(this.l,this):(this.i=!1,ou(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Uc(12)):(this.o=0,Uc(13)),lu(this),uu(this)}}}catch(t){}},Ko.mb=function(){if(this.g){var t=ul(this.g),e=this.g.ja();this.C<e.length&&(cu(this),iu(this,t,e),this.i&&4!=t&&ou(this))}},Ko.cancel=function(){this.J=!0,lu(this)},Ko.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(xc(),Uc(17)),lu(this),this.o=2,uu(this)):au(this,this.Y-t)};var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pu(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pu){this.h=void 0!==e?e:t.h,mu(this,t.j),this.s=t.s,this.g=t.g,yu(this,t.m),this.l=t.l,e=t.i;var n=new Ru;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vu(this,n),this.o=t.o}else t&&(n=String(t).match(fu))?(this.h=!!e,mu(this,n[1]||"",!0),this.s=Eu(n[2]||""),this.g=Eu(n[3]||"",!0),yu(this,n[4]),this.l=Eu(n[5]||"",!0),vu(this,n[6]||"",!0),this.o=Eu(n[7]||"")):(this.h=!!e,this.i=new Ru(null,this.h))}function gu(t){return new pu(t)}function mu(t,e,n){t.j=n?Eu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vu(t,e,n){e instanceof Ru?(t.i=e,function(t,e){e&&!t.j&&(Nu(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ou(this,e),Pu(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Tu(e,Cu)),t.i=new Ru(e,t.h))}function wu(t,e,n){t.i.set(e,n)}function bu(t){return wu(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Eu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tu(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Iu),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Iu(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}pu.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tu(e,_u,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Tu(e,_u,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Tu(n,"/"==n.charAt(0)?Au:Su,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tu(n,ku)),t.join("")};var _u=/[#\/\?@]/g,Su=/[#\?:]/g,Au=/[#\?]/g,Cu=/[#\?@]/g,ku=/#/g;function Ru(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Nu(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ou(t,e){Nu(t),e=Lu(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Du(t,e){return Nu(t),e=Lu(t,e),t.g.has(e)}function Pu(t,e,n){Ou(t,e),0<n.length&&(t.i=null,t.g.set(Lu(t,e),ua(n)),t.h+=n.length)}function Lu(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ko=Ru.prototype).add=function(t,e){Nu(this),this.i=null,t=Lu(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ko.forEach=function(t,e){Nu(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},Ko.sa=function(){Nu(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},Ko.Z=function(t){Nu(this);let e=[];if("string"==typeof t)Du(this,t)&&(e=e.concat(this.g.get(Lu(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ko.set=function(t,e){return Nu(this),this.i=null,Du(this,t=Lu(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ko.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Ko.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function xu(t){this.l=t||Mu,Jo.PerformanceNavigationTiming?t=0<(t=Jo.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Jo.g&&Jo.g.Ka&&Jo.g.Ka()&&Jo.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mu=10;function Uu(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Fu(t){return t.h?1:t.g?t.g.size:0}function Bu(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Vu(t,e){t.g?t.g.add(e):t.h=e}function ju(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function $u(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ua(t.i)}function zu(){}function Hu(){this.g=new zu}function qu(t,e,n){const r=n||"";try{du(t,(function(t,n){let i=t;Zo(t)&&(i=lc(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Ku(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function Wu(t){this.l=t.fc||null,this.j=t.ob||!1}function Gu(t,e){ac.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xu.prototype.cancel=function(){if(this.i=$u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},zu.prototype.stringify=function(t){return Jo.JSON.stringify(t,void 0)},zu.prototype.parse=function(t){return Jo.JSON.parse(t,void 0)},oa(Wu,$c),Wu.prototype.g=function(){return new Gu(this.l,this.j)},Wu.prototype.i=function(t){return function(){return t}}({}),oa(Gu,ac);var Qu=0;function Ju(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Xu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yu(t)}function Yu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ko=Gu.prototype).open=function(t,e){if(this.readyState!=Qu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yu(this)},Ko.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Jo).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Ko.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Xu(this)),this.readyState=Qu},Ko.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yu(this)),this.g&&(this.readyState=3,Yu(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Jo.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ju(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Ko.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xu(this):Yu(this),3==this.readyState&&Ju(this)}},Ko.Za=function(t){this.g&&(this.response=this.responseText=t,Xu(this))},Ko.Ya=function(t){this.g&&(this.response=t,Xu(this))},Ko.ka=function(){this.g&&Xu(this)},Ko.setRequestHeader=function(t,e){this.v.append(t,e)},Ko.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ko.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Gu.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Zu=Jo.JSON.parse;function tl(t){ac.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=el,this.L=this.M=!1}oa(tl,ac);var el="",nl=/^https?$/i,rl=["POST","PUT"];function il(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,sl(t),al(t)}function sl(t){t.F||(t.F=!0,cc(t,"complete"),cc(t,"error"))}function ol(t){if(t.h&&void 0!==Qo&&(!t.C[1]||4!=ul(t)||2!=t.da()))if(t.v&&4==ul(t))Tc(t.La,0,t);else if(cc(t,"readystatechange"),4==ul(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(fu)[1]||null;if(!i&&Jo.self&&Jo.self.location){var s=Jo.self.location.protocol;i=s.substr(0,s.length-1)}r=!nl.test(i?i.toLowerCase():"")}n=r}if(n)cc(t,"complete"),cc(t,"success");else{t.m=6;try{var o=2<ul(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.da()+"]",sl(t)}}finally{al(t)}}}function al(t,e){if(t.g){cl(t);const n=t.g,r=t.C[0]?Xo:null;t.g=null,t.C=null,e||cc(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function cl(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Jo.clearTimeout(t.A),t.A=null)}function ul(t){return t.g?t.g.readyState:0}function ll(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case el:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function hl(t){let e="";return $a(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function dl(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=hl(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):wu(t,e,n))}function fl(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pl(t){this.Ga=0,this.i=[],this.j=new Rc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fl("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fl("baseRetryDelayMs",5e3,t),this.hb=fl("retryDelaySeedMs",1e4,t),this.eb=fl("forwardChannelMaxRetries",2,t),this.xa=fl("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new xu(t&&t.concurrentRequestLimit),this.Ja=new Hu,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function gl(t){if(yl(t),3==t.H){var e=t.W++,n=gu(t.G);wu(n,"SID",t.J),wu(n,"RID",e),wu(n,"TYPE","terminate"),bl(t,n),(e=new Jc(t,t.j,e,void 0)).L=2,e.v=bu(gu(n)),n=!1,Jo.navigator&&Jo.navigator.sendBeacon&&(n=Jo.navigator.sendBeacon(e.v.toString(),"")),!n&&Jo.Image&&((new Image).src=e.v,n=!0),n||(e.g=Dl(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ou(e)}Nl(t)}function ml(t){t.g&&(_l(t),t.g.cancel(),t.g=null)}function yl(t){ml(t),t.u&&(Jo.clearTimeout(t.u),t.u=null),Al(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Jo.clearTimeout(t.m),t.m=null)}function vl(t){Uu(t.h)||t.m||(t.m=!0,mc(t.Na,t),t.C=0)}function wl(t,e){var n;n=e?e.m:t.W++;const r=gu(t.G);wu(r,"SID",t.J),wu(r,"RID",n),wu(r,"AID",t.V),bl(t,r),t.o&&t.s&&dl(r,t.o,t.s),n=new Jc(t,t.j,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=El(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vu(t.h,n),eu(n,r,e)}function bl(t,e){t.ma&&$a(t.ma,(function(t,n){wu(e,n,t)})),t.l&&du({},(function(t,n){wu(e,n,t)}))}function El(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ia(t.l.Va,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{qu(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.F=t,r}function Tl(t){t.g||t.u||(t.ba=1,mc(t.Ma,t),t.A=0)}function Il(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Bc(ia(t.Ma,t),kl(t,t.A)),t.A++,!0)}function _l(t){null!=t.B&&(Jo.clearTimeout(t.B),t.B=null)}function Sl(t){t.g=new Jc(t,t.j,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=gu(t.wa);wu(e,"RID","rpc"),wu(e,"SID",t.J),wu(e,"CI",t.M?"0":"1"),wu(e,"AID",t.V),wu(e,"TYPE","xmlhttp"),bl(t,e),t.o&&t.s&&dl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=bu(gu(e)),n.s=null,n.S=!0,nu(n,t)}function Al(t){null!=t.v&&(Jo.clearTimeout(t.v),t.v=null)}function Cl(t,e){var n=null;if(t.g==e){Al(t),_l(t),t.g=null;var r=2}else{if(!Bu(t.h,e))return;n=e.F,ju(t.h,e),r=1}if(0!=t.H)if(t.ta=e.aa,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;cc(r=Pc(),new Fc(r,n)),vl(t)}else Tl(t);else if(3==(i=e.o)||0==i&&0<t.ta||!(1==r&&function(t,e){return!(Fu(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.F.concat(t.i),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Bc(ia(t.Na,t,e),kl(t,t.C)),t.C++,0)))}(t,e)||2==r&&Il(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Rl(t,5);break;case 4:Rl(t,10);break;case 3:Rl(t,6);break;default:Rl(t,2)}}function kl(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Rl(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=ia(t.pb,t);n||(n=new pu("//www.google.com/images/cleardot.gif"),Jo.location&&"http"==Jo.location.protocol||mu(n,"https"),bu(n)),function(t,e){const n=new Rc;if(Jo.Image){const r=new Image;r.onload=sa(Ku,n,r,"TestLoadImage: loaded",!0,e),r.onerror=sa(Ku,n,r,"TestLoadImage: error",!1,e),r.onabort=sa(Ku,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=sa(Ku,n,r,"TestLoadImage: timeout",!1,e),Jo.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Uc(2);t.H=0,t.l&&t.l.za(e),Nl(t),yl(t)}function Nl(t){if(t.H=0,t.pa=[],t.l){const e=$u(t.h);0==e.length&&0==t.i.length||(la(t.pa,e),la(t.pa,t.i),t.h.i.length=0,ua(t.i),t.i.length=0),t.l.ya()}}function Ol(t,e,n){var r=n instanceof pu?gu(n):new pu(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),yu(r,r.m);else{var i=Jo.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new pu(null,void 0);r&&mu(s,r),e&&(s.g=e),i&&yu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&wu(r,n,e),wu(r,"VER",t.qa),bl(t,r),r}function Dl(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new tl(new Wu({ob:!0})):new tl(t.va)).Oa(t.I),e}function Pl(){}function Ll(){if(Ia&&!(10<=Number(xa)))throw Error("Environmental error: no available transport.")}function xl(t,e){ac.call(this),this.g=new pl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fa(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Fl(this)}function Ml(t){Wc.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ul(){Gc.call(this),this.status=1}function Fl(t){this.g=t}function Bl(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Vl(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function jl(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}(Ko=tl.prototype).Oa=function(t){this.M=t},Ko.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qc.g(),this.C=this.u?zc(this.u):zc(qc),this.g.onreadystatechange=ia(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void il(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Jo.FormData&&t instanceof Jo.FormData,!(0<=ca(rl,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cl(this),0<this.B&&((this.L=function(t){return Ia&&wa(Pa,9,(function(){let t=0;const e=pa(String(ba)).split("."),n=pa("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=ga(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||ga(0==i[2].length,0==s[2].length)||ga(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ia(this.ua,this)):this.A=Tc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){il(this,t)}},Ko.ua=function(){void 0!==Qo&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,cc(this,"timeout"),this.abort(8))},Ko.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,cc(this,"complete"),cc(this,"abort"),al(this))},Ko.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),al(this,!0)),tl.$.N.call(this)},Ko.La=function(){this.s||(this.G||this.v||this.l?ol(this):this.kb())},Ko.kb=function(){ol(this)},Ko.da=function(){try{return 2<ul(this)?this.g.status:-1}catch(t){return-1}},Ko.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ko.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Zu(e)}},Ko.Ia=function(){return this.m},Ko.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ko=pl.prototype).qa=8,Ko.H=1,Ko.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Jc(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=za(s),qa(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=El(this,i,e),wu(n=gu(this.G),"RID",t),wu(n,"CVER",22),this.F&&wu(n,"X-HTTP-Session-Id",this.F),bl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(hl(s)))+"&"+e:this.o&&dl(n,this.o,s)),Vu(this.h,i),this.bb&&wu(n,"TYPE","init"),this.P?(wu(n,"$req",e),wu(n,"SID","null"),i.ba=!0,eu(i,n,null)):eu(i,n,e),this.H=2}}else 3==this.H&&(t?wl(this,t):0==this.i.length||Uu(this.h)||wl(this))},Ko.Ma=function(){if(this.u=null,Sl(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Bc(ia(this.jb,this),t)}},Ko.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Uc(10),ml(this),Sl(this))},Ko.ib=function(){null!=this.v&&(this.v=null,ml(this),Il(this),Uc(19))},Ko.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Uc(2)):(this.j.info("Failed to ping google.com"),Uc(1))},(Ko=Pl.prototype).Ba=function(){},Ko.Aa=function(){},Ko.za=function(){},Ko.ya=function(){},Ko.Va=function(){},Ll.prototype.g=function(t,e){return new xl(t,e)},oa(xl,ac),xl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Uc(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Ol(t,null,t.Y),vl(t)},xl.prototype.close=function(){gl(this.g)},xl.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=lc(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.fb++,t)),3==e.H&&vl(e)},xl.prototype.N=function(){this.g.l=null,delete this.j,gl(this.g),delete this.g,xl.$.N.call(this)},oa(Ml,Wc),oa(Ul,Gc),oa(Fl,Pl),Fl.prototype.Ba=function(){cc(this.g,"a")},Fl.prototype.Aa=function(t){cc(this.g,new Ml(t))},Fl.prototype.za=function(t){cc(this.g,new Ul)},Fl.prototype.ya=function(){cc(this.g,"b")},oa(Bl,(function(){this.blockSize=-1})),Bl.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Bl.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)Vl(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Vl(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Vl(this,r),i=0;break}}this.h=i,this.i+=e},Bl.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var $l={};function zl(t){return-128<=t&&128>t?wa($l,t,(function(t){return new jl([0|t],0>t?-1:0)})):new jl([0|t],0>t?-1:0)}function Hl(t){if(isNaN(t)||!isFinite(t))return Kl;if(0>t)return Xl(Hl(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ql;return new jl(e,0)}var ql=4294967296,Kl=zl(0),Wl=zl(1),Gl=zl(16777216);function Ql(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Jl(t){return-1==t.h}function Xl(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new jl(n,~t.h).add(Wl)}function Yl(t,e){return t.add(Xl(e))}function Zl(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function th(t,e){this.g=t,this.h=e}function eh(t,e){if(Ql(e))throw Error("division by zero");if(Ql(t))return new th(Kl,Kl);if(Jl(t))return e=eh(Xl(t),e),new th(Xl(e.g),Xl(e.h));if(Jl(e))return e=eh(t,Xl(e)),new th(Xl(e.g),e.h);if(30<t.g.length){if(Jl(t)||Jl(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wl,r=e;0>=r.X(t);)n=nh(n),r=nh(r);var i=rh(n,1),s=rh(r,1);for(r=rh(r,2),n=rh(n,2);!Ql(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=rh(r,1),n=rh(n,1)}return e=Yl(t,i.R(e)),new th(i,e)}for(i=Kl;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=Hl(n)).R(e);Jl(o)||0<o.X(t);)o=(s=Hl(n-=r)).R(e);Ql(s)&&(s=Wl),i=i.add(s),t=Yl(t,o)}return new th(i,t)}function nh(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new jl(n,t.h)}function rh(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new jl(i,t.h)}(Ko=jl.prototype).ea=function(){if(Jl(this))return-Xl(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ql+r)*e,e*=ql}return t},Ko.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Ql(this))return"0";if(Jl(this))return"-"+Xl(this).toString(t);for(var e=Hl(Math.pow(t,6)),n=this,r="";;){var i=eh(n,e).g,s=((0<(n=Yl(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Ql(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},Ko.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Ko.X=function(t){return Jl(t=Yl(this,t))?-1:Ql(t)?0:1},Ko.abs=function(){return Jl(this)?Xl(this):this},Ko.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new jl(n,-2147483648&n[n.length-1]?-1:0)},Ko.R=function(t){if(Ql(this)||Ql(t))return Kl;if(Jl(this))return Jl(t)?Xl(this).R(Xl(t)):Xl(Xl(this).R(t));if(Jl(t))return Xl(this.R(Xl(t)));if(0>this.X(Gl)&&0>t.X(Gl))return Hl(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Zl(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Zl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Zl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Zl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new jl(n,0)},Ko.gb=function(t){return eh(this,t).h},Ko.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new jl(n,this.h&t.h)},Ko.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new jl(n,this.h|t.h)},Ko.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new jl(n,this.h^t.h)},Ll.prototype.createWebChannel=Ll.prototype.g,xl.prototype.send=xl.prototype.u,xl.prototype.open=xl.prototype.m,xl.prototype.close=xl.prototype.close,Vc.NO_ERROR=0,Vc.TIMEOUT=8,Vc.HTTP_ERROR=6,jc.COMPLETE="complete",Hc.EventType=Kc,Kc.OPEN="a",Kc.CLOSE="b",Kc.ERROR="c",Kc.MESSAGE="d",ac.prototype.listen=ac.prototype.O,tl.prototype.listenOnce=tl.prototype.P,tl.prototype.getLastError=tl.prototype.Sa,tl.prototype.getLastErrorCode=tl.prototype.Ia,tl.prototype.getStatus=tl.prototype.da,tl.prototype.getResponseJson=tl.prototype.Wa,tl.prototype.getResponseText=tl.prototype.ja,tl.prototype.send=tl.prototype.ha,tl.prototype.setWithCredentials=tl.prototype.Oa,Bl.prototype.digest=Bl.prototype.l,Bl.prototype.reset=Bl.prototype.reset,Bl.prototype.update=Bl.prototype.j,jl.prototype.add=jl.prototype.add,jl.prototype.multiply=jl.prototype.R,jl.prototype.modulo=jl.prototype.gb,jl.prototype.compare=jl.prototype.X,jl.prototype.toNumber=jl.prototype.ea,jl.prototype.toString=jl.prototype.toString,jl.prototype.getBits=jl.prototype.D,jl.fromNumber=Hl,jl.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Xl(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Hl(Math.pow(n,8)),i=Kl,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Hl(Math.pow(n,o)),i=i.R(o).add(Hl(a))):i=(i=i.R(r)).add(Hl(a))}return i};var ih=Go.createWebChannelTransport=function(){return new Ll},sh=Go.getStatEventTarget=function(){return Pc()},oh=Go.ErrorCode=Vc,ah=Go.EventType=jc,ch=Go.Event=Oc,uh=Go.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},lh=Go.FetchXmlHttpFactory=Wu,hh=Go.WebChannel=Hc,dh=Go.XhrIo=tl,fh=Go.Md5=Bl,ph=Go.Integer=jl;
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
class gh{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}gh.UNAUTHENTICATED=new gh(null),gh.GOOGLE_CREDENTIALS=new gh("google-credentials-uid"),gh.FIRST_PARTY=new gh("first-party-uid"),gh.MOCK_USER=new gh("mock-user");
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
let mh="9.21.0";
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
 */const yh=new dr("@firebase/firestore");function vh(){return yh.logLevel}function wh(t,...e){if(yh.logLevel<=or.DEBUG){const n=e.map(Th);yh.debug(`Firestore (${mh}): ${t}`,...n)}}function bh(t,...e){if(yh.logLevel<=or.ERROR){const n=e.map(Th);yh.error(`Firestore (${mh}): ${t}`,...n)}}function Eh(t,...e){if(yh.logLevel<=or.WARN){const n=e.map(Th);yh.warn(`Firestore (${mh}): ${t}`,...n)}}function Th(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Ih(t="Unexpected state"){const e=`FIRESTORE (${mh}) INTERNAL ASSERTION FAILED: `+t;throw bh(e),new Error(e)}function _h(t,e){t||Ih()}function Sh(t,e){return t}
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
 */const Ah={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ch extends zn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class kh{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Rh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gh.UNAUTHENTICATED)))}shutdown(){}}class Oh{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class Dh{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new kh;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kh,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{wh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(wh("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kh)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(wh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(_h("string"==typeof e.accessToken),new Rh(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _h(null===t||"string"==typeof t),new gh(t)}constructor(t){this.t=t,this.currentUser=gh.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Ph{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=gh.FIRST_PARTY,this.g=new Map}}class Lh{getToken(){return Promise.resolve(new Ph(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(gh.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class xh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mh{start(t,e){const n=t=>{null!=t.error&&wh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,wh("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{wh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):wh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(_h("string"==typeof t.token),this.T=t.token,new xh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
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
function Uh(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class Fh{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Uh(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Bh(t,e){return t<e?-1:t>e?1:0}function Vh(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class jh{static now(){return jh.fromMillis(Date.now())}static fromDate(t){return jh.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new jh(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Bh(this.nanoseconds,t.nanoseconds):Bh(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ch(Ah.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ch(Ah.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ch(Ah.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ch(Ah.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class $h{static fromTimestamp(t){return new $h(t)}static min(){return new $h(new jh(0,0))}static max(){return new $h(new jh(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */class zh{get length(){return this.len}isEqual(t){return 0===zh.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zh?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Ih(),void 0===n?n=t.length-e:n>t.length-e&&Ih(),this.segments=t,this.offset=e,this.len=n}}class Hh extends zh{construct(t,e,n){return new Hh(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ch(Ah.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Hh(e)}static emptyPath(){return new Hh([])}}const qh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kh extends zh{construct(t,e,n){return new Kh(t,e,n)}static isValidIdentifier(t){return qh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kh.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Kh(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ch(Ah.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Ch(Ah.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ch(Ah.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Ch(Ah.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Kh(e)}static emptyPath(){return new Kh([])}}
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
 */class Wh{static fromPath(t){return new Wh(Hh.fromString(t))}static fromName(t){return new Wh(Hh.fromString(t).popFirst(5))}static empty(){return new Wh(Hh.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Hh.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Hh.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Wh(new Hh(t.slice()))}constructor(t){this.path=t}}
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
 */class Gh{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Gh.UNKNOWN_ID=-1;function Qh(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$h.fromTimestamp(1e9===r?new jh(n+1,0):new jh(n,r));return new Xh(i,Wh.empty(),e)}function Jh(t){return new Xh(t.readTime,t.key,-1)}class Xh{static min(){return new Xh($h.min(),Wh.empty(),-1)}static max(){return new Xh($h.max(),Wh.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Yh(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Wh.comparator(t.documentKey,e.documentKey),0!==n?n:Bh(t.largestBatchId,e.largestBatchId))}
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
 */const Zh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class td{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function ed(t){if(t.code!==Ah.FAILED_PRECONDITION||t.message!==Zh)throw t;wh("LocalStore","Unexpectedly lost primary lease")}
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
 */class nd{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ih(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new nd(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof nd?e:nd.resolve(e)}catch(t){return nd.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):nd.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):nd.reject(e)}static resolve(t){return new nd(((e,n)=>{e(t)}))}static reject(t){return new nd(((e,n)=>{n(t)}))}static waitFor(t){return new nd(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=nd.resolve(!1);for(const n of t)e=e.next((t=>t?nd.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new nd(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new nd(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function rd(t){return"IndexedDbTransactionError"===t.name}
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
class id{ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}}function sd(t){return null==t}function od(t){return 0===t&&1/t==-1/0}function ad(t){return"number"==typeof t&&Number.isInteger(t)&&!od(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */id.ct=-1;const cd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ud=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ld=ud;
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
function hd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function dd(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class pd{insert(t,e){return new pd(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,md.BLACK,null,null))}remove(t){return new pd(this.comparator,this.root.remove(t,this.comparator).copy(null,null,md.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gd(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gd(this.root,t,this.comparator,!1)}getReverseIterator(){return new gd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gd(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||md.EMPTY}}class gd{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class md{copy(t,e,n,r,i){return new md(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return md.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return md.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,md.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,md.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ih();if(this.right.isRed())throw Ih();const t=this.left.check();if(t!==this.right.check())throw Ih();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:md.RED,this.left=null!=r?r:md.EMPTY,this.right=null!=i?i:md.EMPTY,this.size=this.left.size+1+this.right.size}}md.EMPTY=null,md.RED=!0,md.BLACK=!1,md.EMPTY=new class{get key(){throw Ih()}get value(){throw Ih()}get color(){throw Ih()}get left(){throw Ih()}get right(){throw Ih()}copy(t,e,n,r,i){return this}insert(t,e,n){return new md(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class yd{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new vd(this.data.getIterator())}getIteratorFrom(t){return new vd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof yd))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new yd(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new pd(this.comparator)}}class vd{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class wd{static empty(){return new wd([])}unionWith(t){let e=new yd(Kh.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new wd(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vh(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Kh.comparator)}}
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
 */class bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */let Ed=Symbol.iterator;
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
 */class Td{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new bd("Invalid base64 string: "+t):t}}(t);return new Td(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Td(e)}[Ed](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Bh(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Td.EMPTY_BYTE_STRING=new Td("");const Id=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _d(t){if(_h(!!t),"string"==typeof t){let e=0;const n=Id.exec(t);if(_h(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Sd(t.seconds),nanos:Sd(t.nanos)}}function Sd(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ad(t){return"string"==typeof t?Td.fromBase64String(t):Td.fromUint8Array(t)}
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
 */function Cd(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function kd(t){const e=t.mapValue.fields.__previous_value__;return Cd(e)?kd(e):e}function Rd(t){const e=_d(t.mapValue.fields.__local_write_time__.timestampValue);return new jh(e.seconds,e.nanos)}
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
 */class Nd{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Od{static empty(){return new Od("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Od&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */const Dd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pd(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cd(t)?4:Kd(t)?9007199254740991:10:Ih()}function Ld(t,e){if(t===e)return!0;const n=Pd(t);if(n!==Pd(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rd(t).isEqual(Rd(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=_d(t.timestampValue),r=_d(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Ad(t.bytesValue).isEqual(Ad(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Sd(t.geoPointValue.latitude)===Sd(e.geoPointValue.latitude)&&Sd(t.geoPointValue.longitude)===Sd(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Sd(t.integerValue)===Sd(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Sd(t.doubleValue),r=Sd(e.doubleValue);return n===r?od(n)===od(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Vh(t.arrayValue.values||[],e.arrayValue.values||[],Ld);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(hd(n)!==hd(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Ld(n[t],r[t])))return!1;return!0}(t,e);default:return Ih()}var r}function xd(t,e){return void 0!==(t.values||[]).find((t=>Ld(t,e)))}function Md(t,e){if(t===e)return 0;const n=Pd(t),r=Pd(e);if(n!==r)return Bh(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Bh(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Sd(t.integerValue||t.doubleValue),r=Sd(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ud(t.timestampValue,e.timestampValue);case 4:return Ud(Rd(t),Rd(e));case 5:return Bh(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ad(t),r=Ad(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Bh(n[t],r[t]);if(0!==e)return e}return Bh(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Bh(Sd(t.latitude),Sd(e.latitude));return 0!==n?n:Bh(Sd(t.longitude),Sd(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Md(n[t],r[t]);if(e)return e}return Bh(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Dd.mapValue&&e===Dd.mapValue)return 0;if(t===Dd.mapValue)return 1;if(e===Dd.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Bh(r[t],s[t]);if(0!==e)return e;const o=Md(n[r[t]],i[s[t]]);if(0!==o)return o}return Bh(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Ih()}}function Ud(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Bh(t,e);const n=_d(t),r=_d(e),i=Bh(n.seconds,r.seconds);return 0!==i?i:Bh(n.nanos,r.nanos)}function Fd(t){return Bd(t)}function Bd(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=_d(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ad(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Wh.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Bd(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Bd(t.fields[i])}`;return n+"}"}(t.mapValue):Ih()}function Vd(t){return!!t&&"integerValue"in t}function jd(t){return!!t&&"arrayValue"in t}function $d(t){return!!t&&"nullValue"in t}function zd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hd(t){return!!t&&"mapValue"in t}function qd(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return dd(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=qd(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qd(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Kd(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Wd{static empty(){return new Wd({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Hd(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qd(e)}setAll(t){let e=Kh.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=qd(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Hd(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ld(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Hd(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){dd(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Wd(qd(this.value))}constructor(t){this.value=t}}function Gd(t){const e=[];return dd(t.fields,((t,n)=>{const r=new Kh([t]);if(Hd(n)){const t=Gd(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new wd(e)
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
 */}class Qd{static newInvalidDocument(t){return new Qd(t,0,$h.min(),$h.min(),$h.min(),Wd.empty(),0)}static newFoundDocument(t,e,n,r){return new Qd(t,1,e,$h.min(),n,r,0)}static newNoDocument(t,e){return new Qd(t,2,e,$h.min(),$h.min(),Wd.empty(),0)}static newUnknownDocument(t,e){return new Qd(t,3,e,$h.min(),$h.min(),Wd.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($h.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Wd.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Wd.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$h.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Qd&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qd(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
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
 */class Jd{constructor(t,e){this.position=t,this.inclusive=e}}function Xd(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Wh.comparator(Wh.fromName(o.referenceValue),n.key):Md(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Yd(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ld(t.position[n],e.position[n]))return!1;return!0}
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
 */class Zd{constructor(t,e="asc"){this.field=t,this.dir=e}}function tf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class ef{}class nf extends ef{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new hf(t,e,n):"array-contains"===e?new gf(t,n):"in"===e?new mf(t,n):"not-in"===e?new yf(t,n):"array-contains-any"===e?new vf(t,n):new nf(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new df(t,n):new ff(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Md(e,this.value)):null!==e&&Pd(this.value)===Pd(e)&&this.matchesComparison(Md(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ih()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class rf extends ef{static create(t,e){return new rf(t,e)}matches(t){return sf(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}}function sf(t){return"and"===t.op}function of(t){return af(t)&&sf(t)}function af(t){for(const e of t.filters)if(e instanceof rf)return!1;return!0}function cf(t){if(t instanceof nf)return t.field.canonicalString()+t.op.toString()+Fd(t.value);if(of(t))return t.filters.map((t=>cf(t))).join(",");{const e=t.filters.map((t=>cf(t))).join(",");return`${t.op}(${e})`}}function uf(t,e){return t instanceof nf?(n=t,(r=e)instanceof nf&&n.op===r.op&&n.field.isEqual(r.field)&&Ld(n.value,r.value)):t instanceof rf?function(t,e){return e instanceof rf&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&uf(n,e.filters[r])),!0)}(t,e):void Ih();var n,r}function lf(t){return t instanceof nf?`${(e=t).field.canonicalString()} ${e.op} ${Fd(e.value)}`:t instanceof rf?function(t){return t.op.toString()+" {"+t.getFilters().map(lf).join(" ,")+"}"}(t):"Filter";var e}class hf extends nf{matches(t){const e=Wh.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=Wh.fromName(n.referenceValue)}}class df extends nf{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=pf("in",e)}}class ff extends nf{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=pf("not-in",e)}}function pf(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Wh.fromName(t.referenceValue)))}class gf extends nf{matches(t){const e=t.data.field(this.field);return jd(e)&&xd(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class mf extends nf{matches(t){const e=t.data.field(this.field);return null!==e&&xd(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class yf extends nf{matches(t){if(xd(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!xd(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class vf extends nf{matches(t){const e=t.data.field(this.field);return!(!jd(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>xd(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
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
 */class wf{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function bf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wf(t,e,n,r,i,s,o)}function Ef(t){const e=Sh(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>cf(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),sd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Fd(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Fd(t))).join(",")),e.ft=t}return e.ft}function Tf(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tf(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yd(t.startAt,e.startAt)&&Yd(t.endAt,e.endAt)}function If(t){return Wh.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class _f{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Sf(t,e,n,r,i,s,o,a){return new _f(t,e,n,r,i,s,o,a)}function Af(t){return new _f(t)}function Cf(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function kf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Rf(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Nf(t){return null!==t.collectionGroup}function Of(t){const e=Sh(t);if(null===e.dt){e.dt=[];const t=Rf(e),n=kf(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Zd(t)),e.dt.push(new Zd(Kh.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Zd(Kh.keyField(),t))}}}return e.dt}function Df(t){const e=Sh(t);if(!e._t)if("F"===e.limitType)e._t=bf(e.path,e.collectionGroup,Of(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Of(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Zd(n.field,e))}const n=e.endAt?new Jd(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Jd(e.startAt.position,e.startAt.inclusive):null;e._t=bf(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function Pf(t,e,n){return new _f(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lf(t,e){return Tf(Df(t),Df(e))&&t.limitType===e.limitType}function xf(t){return`${Ef(Df(t))}|lt:${t.limitType}`}function Mf(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>lf(t))).join(", ")}]`),sd(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Fd(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Fd(t))).join(",")),`Target(${e})`}(Df(t))}; limitType=${t.limitType})`}function Uf(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Wh.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Of(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Xd(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Of(n),r)||n.endAt&&!function(t,e,n){const r=Xd(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Of(n),r)));var n,r}function Ff(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bf(t){return(e,n)=>{let r=!1;for(const i of Of(t)){const t=Vf(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Vf(t,e,n){const r=t.field.isKeyField()?Wh.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Md(r,i):Ih()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ih()}}
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
 */class jf{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){dd(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return fd(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
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
 */const $f=new pd(Wh.comparator);function zf(){return $f}const Hf=new pd(Wh.comparator);function qf(...t){let e=Hf;for(const n of t)e=e.insert(n.key,n);return e}function Kf(t){let e=Hf;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Wf(){return Qf()}function Gf(){return Qf()}function Qf(){return new jf((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Jf=new pd(Wh.comparator),Xf=new yd(Wh.comparator);function Yf(...t){let e=Xf;for(const n of t)e=e.add(n);return e}const Zf=new yd(Bh);function tp(){return Zf}
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
 */function ep(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:od(e)?"-0":e}}function np(t){return{integerValue:""+t}}function rp(t,e){return ad(e)?np(e):ep(t,e)}
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
 */class ip{constructor(){this._=void 0}}function sp(t,e,n){return t instanceof cp?up(t,e):t instanceof lp?hp(t,e):n}function op(t,e){var n,r;return t instanceof dp?Vd(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class ap extends ip{}class cp extends ip{constructor(t){super(),this.elements=t}}function up(t,e){const n=pp(e);for(const e of t.elements)n.some((t=>Ld(t,e)))||n.push(e);return{arrayValue:{values:n}}}class lp extends ip{constructor(t){super(),this.elements=t}}function hp(t,e){let n=pp(e);for(const e of t.elements)n=n.filter((t=>!Ld(t,e)));return{arrayValue:{values:n}}}class dp extends ip{constructor(t,e){super(),this.serializer=t,this.wt=e}}function fp(t){return Sd(t.integerValue||t.doubleValue)}function pp(t){return jd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class gp{constructor(t,e){this.version=t,this.transformResults=e}}class mp{static none(){return new mp}static exists(t){return new mp(void 0,t)}static updateTime(t){return new mp(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function yp(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class vp{}function wp(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Rp(t.key,mp.none()):new _p(t.key,t.data,mp.none());{const n=t.data,r=Wd.empty();let i=new yd(Kh.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Sp(t.key,r,new wd(i.toArray()),mp.none())}}function bp(t,e,n){var r;t instanceof _p?function(t,e,n){const r=t.value.clone(),i=Cp(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Sp?function(t,e,n){if(!yp(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Cp(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ap(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Ep(t,e,n,r){return t instanceof _p?function(t,e,n,r){if(!yp(t.precondition,e))return n;const i=t.value.clone(),s=kp(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sp?function(t,e,n,r){if(!yp(t.precondition,e))return n;const i=kp(t.fieldTransforms,r,e),s=e.data;return s.setAll(Ap(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,yp(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Tp(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=op(r.transform,t||null);null!=i&&(null===n&&(n=Wd.empty()),n.set(r.field,i))}return n||null}function Ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Vh(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof cp&&r instanceof cp||n instanceof lp&&r instanceof lp?Vh(n.elements,r.elements,Ld):n instanceof dp&&r instanceof dp?Ld(n.wt,r.wt):n instanceof ap&&r instanceof ap);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class _p extends vp{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Sp extends vp{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ap(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Cp(t,e,n){const r=new Map;_h(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sp(o,a,n[i]))}return r}function kp(t,e,n){const r=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=e,(i=t)instanceof ap?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Cd(e)&&(e=kd(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof cp?up(i,s):i instanceof lp?hp(i,s):function(t,e){const n=op(t,e),r=fp(n)+fp(t.wt);return Vd(n)&&Vd(t.wt)?np(r):ep(t.serializer,r)}(i,s)))}var i,s,o;return r}class Rp extends vp{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Np extends vp{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Op{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&bp(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ep(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ep(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Gf();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=wp(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument($h.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Yf())}isEqual(t){return this.batchId===t.batchId&&Vh(this.mutations,t.mutations,((t,e)=>Ip(t,e)))&&Vh(this.baseMutations,t.baseMutations,((t,e)=>Ip(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class Dp{static from(t,e,n){_h(t.mutations.length===n.length);let r=Jf;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Dp(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
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
 */class Pp{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
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
class Lp{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var xp,Mp;function Up(t){switch(t){default:return Ih();case Ah.CANCELLED:case Ah.UNKNOWN:case Ah.DEADLINE_EXCEEDED:case Ah.RESOURCE_EXHAUSTED:case Ah.INTERNAL:case Ah.UNAVAILABLE:case Ah.UNAUTHENTICATED:return!1;case Ah.INVALID_ARGUMENT:case Ah.NOT_FOUND:case Ah.ALREADY_EXISTS:case Ah.PERMISSION_DENIED:case Ah.FAILED_PRECONDITION:case Ah.ABORTED:case Ah.OUT_OF_RANGE:case Ah.UNIMPLEMENTED:case Ah.DATA_LOSS:return!0}}function Fp(t){if(void 0===t)return bh("GRPC error has no .code"),Ah.UNKNOWN;switch(t){case xp.OK:return Ah.OK;case xp.CANCELLED:return Ah.CANCELLED;case xp.UNKNOWN:return Ah.UNKNOWN;case xp.DEADLINE_EXCEEDED:return Ah.DEADLINE_EXCEEDED;case xp.RESOURCE_EXHAUSTED:return Ah.RESOURCE_EXHAUSTED;case xp.INTERNAL:return Ah.INTERNAL;case xp.UNAVAILABLE:return Ah.UNAVAILABLE;case xp.UNAUTHENTICATED:return Ah.UNAUTHENTICATED;case xp.INVALID_ARGUMENT:return Ah.INVALID_ARGUMENT;case xp.NOT_FOUND:return Ah.NOT_FOUND;case xp.ALREADY_EXISTS:return Ah.ALREADY_EXISTS;case xp.PERMISSION_DENIED:return Ah.PERMISSION_DENIED;case xp.FAILED_PRECONDITION:return Ah.FAILED_PRECONDITION;case xp.ABORTED:return Ah.ABORTED;case xp.OUT_OF_RANGE:return Ah.OUT_OF_RANGE;case xp.UNIMPLEMENTED:return Ah.UNIMPLEMENTED;case xp.DATA_LOSS:return Ah.DATA_LOSS;default:return Ih()}}(Mp=xp||(xp={}))[Mp.OK=0]="OK",Mp[Mp.CANCELLED=1]="CANCELLED",Mp[Mp.UNKNOWN=2]="UNKNOWN",Mp[Mp.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mp[Mp.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mp[Mp.NOT_FOUND=5]="NOT_FOUND",Mp[Mp.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mp[Mp.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mp[Mp.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mp[Mp.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mp[Mp.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mp[Mp.ABORTED=10]="ABORTED",Mp[Mp.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mp[Mp.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mp[Mp.INTERNAL=13]="INTERNAL",Mp[Mp.UNAVAILABLE=14]="UNAVAILABLE",Mp[Mp.DATA_LOSS=15]="DATA_LOSS";
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
class Bp{static get instance(){return Vp}static getOrCreateInstance(){return null===Vp&&(Vp=new Bp),Vp}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let Vp=null;
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
 */function jp(){return new TextEncoder}
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
 */const $p=new ph([4294967295,4294967295],0);function zp(t){const e=jp().encode(t),n=new fh;return n.update(e),new Uint8Array(n.digest())}function Hp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ph([n,r],0),new ph([i,s],0)]}class qp{Tt(t,e,n){let r=t.add(e.multiply(ph.fromNumber(n)));return 1===r.compare($p)&&(r=new ph([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}At(t){if(0===this.yt)return!1;const e=zp(t),[n,r]=Hp(e);for(let t=0;t<this.hashCount;t++){const e=this.Tt(n,r,t);if(!this.Et(e))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new qp(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.yt)return;const e=zp(t),[n,r]=Hp(e);for(let t=0;t<this.hashCount;t++){const e=this.Tt(n,r,t);this.Rt(e)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Kp(`Invalid padding: ${e}`);if(n<0)throw new Kp(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Kp(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Kp(`Invalid padding when bitmap length is 0: ${e}`);this.yt=8*t.length-e,this.It=ph.fromNumber(this.yt)}}class Kp extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Wp{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Gp.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Wp($h.min(),r,new pd(Bh),zf(),Yf())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class Gp{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Gp(n,e,Yf(),Yf(),Yf())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
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
 */class Qp{constructor(t,e,n,r){this.vt=t,this.removedTargetIds=e,this.key=n,this.Pt=r}}class Jp{constructor(t,e){this.targetId=t,this.bt=e}}class Xp{constructor(t,e,n=Td.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Yp{get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Yf(),e=Yf(),n=Yf();return this.St.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ih()}})),new Gp(this.Dt,this.Ct,t,e,n)}$t(){this.xt=!1,this.St=eg()}Ft(t,e){this.xt=!0,this.St=this.St.insert(t,e)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}constructor(){this.Vt=0,this.St=eg(),this.Dt=Td.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}}class Zp{Wt(t){for(const e of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(e,t.Pt):this.Jt(e,t.key,t.Pt);for(const e of t.removedTargetIds)this.Jt(e,t.key,t.Pt)}Yt(t){this.forEachTarget(t,(e=>{const n=this.Xt(e);switch(t.state){case 0:this.Zt(e)&&n.Mt(t.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(t.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(e);break;case 3:this.Zt(e)&&(n.Ut(),n.Mt(t.resumeToken));break;case 4:this.Zt(e)&&(this.te(e),n.Mt(t.resumeToken));break;default:Ih()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Gt.forEach(((t,n)=>{this.Zt(n)&&e(n)}))}ee(t){var e;const n=t.targetId,r=t.bt.count,i=this.ne(n);if(i){const s=i.target;if(If(s))if(0===r){const t=new Wh(s.path);this.Jt(n,t,Qd.newNoDocument(t,$h.min()))}else _h(1===r);else{const i=this.se(n);if(i!==r){const r=this.ie(t,i);if(0!==r){this.te(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(n,t)}null===(e=Bp.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,s,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}(r,i,t.bt))}}}}ie(t,e){const{unchangedNames:n,count:r}=t.bt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=Ad(i).toUint8Array()}catch(t){if(t instanceof bd)return Eh("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new qp(a,s,o)}catch(t){return Eh(t instanceof Kp?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.yt?1:r!==e-this.re(t.targetId,c)?2:0}re(t,e){const n=this.Kt.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.At(s)||(this.Jt(t,n,null),r++)})),r}ue(t){const e=new Map;this.Gt.forEach(((n,r)=>{const i=this.ne(r);if(i){if(n.current&&If(i.target)){const e=new Wh(i.target.path);null!==this.Qt.get(e)||this.ce(r,e)||this.Jt(r,e,Qd.newNoDocument(e,t))}n.kt&&(e.set(r,n.Ot()),n.$t())}}));let n=Yf();this.jt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ne(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Qt.forEach(((e,n)=>n.setReadTime(t)));const r=new Wp(t,e,this.zt,this.Qt,n);return this.Qt=zf(),this.jt=tg(),this.zt=new pd(Bh),r}Ht(t,e){if(!this.Zt(t))return;const n=this.ce(t,e.key)?2:0;this.Xt(t).Ft(e.key,n),this.Qt=this.Qt.insert(e.key,e),this.jt=this.jt.insert(e.key,this.ae(e.key).add(t))}Jt(t,e,n){if(!this.Zt(t))return;const r=this.Xt(t);this.ce(t,e)?r.Ft(e,1):r.Bt(e),this.jt=this.jt.insert(e,this.ae(e).delete(t)),n&&(this.Qt=this.Qt.insert(e,n))}removeTarget(t){this.Gt.delete(t)}se(t){const e=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let e=this.Gt.get(t);return e||(e=new Yp,this.Gt.set(t,e)),e}ae(t){let e=this.jt.get(t);return e||(e=new yd(Bh),this.jt=this.jt.insert(t,e)),e}Zt(t){const e=null!==this.ne(t);return e||wh("WatchChangeAggregator","Detected inactive target",t),e}ne(t){const e=this.Gt.get(t);return e&&e.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new Yp),this.Kt.getRemoteKeysForTarget(t).forEach((e=>{this.Jt(t,e,null)}))}ce(t,e){return this.Kt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=zf(),this.jt=tg(),this.zt=new pd(Bh)}}function tg(){return new pd(Wh.comparator)}function eg(){return new pd(Wh.comparator)}const ng={asc:"ASCENDING",desc:"DESCENDING"},rg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ig={and:"AND",or:"OR"};class sg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function og(t,e){return t.useProto3Json||sd(e)?e:{value:e}}function ag(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ug(t,e){return ag(t,e.toTimestamp())}function lg(t){return _h(!!t),$h.fromTimestamp(function(t){const e=_d(t);return new jh(e.seconds,e.nanos)}(t))}function hg(t,e){return(n=t,new Hh(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function dg(t){const e=Hh.fromString(t);return _h(Og(e)),e}function fg(t,e){return hg(t.databaseId,e.path)}function pg(t,e){const n=dg(e);if(n.get(1)!==t.databaseId.projectId)throw new Ch(Ah.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ch(Ah.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Wh(vg(n))}function gg(t,e){return hg(t.databaseId,e)}function mg(t){const e=dg(t);return 4===e.length?Hh.emptyPath():vg(e)}function yg(t){return new Hh(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vg(t){return _h(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function wg(t,e,n){return{name:fg(t,e),fields:n.value.mapValue.fields}}function bg(t,e){let n;if(e instanceof _p)n={update:wg(t,e.key,e.value)};else if(e instanceof Rp)n={delete:fg(t,e.key)};else if(e instanceof Sp)n={update:wg(t,e.key,e.data),updateMask:Ng(e.fieldMask)};else{if(!(e instanceof Np))return Ih();n={verify:fg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ap)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof cp)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof lp)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof dp)return{fieldPath:e.field.canonicalString(),increment:n.wt};throw Ih()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:ug(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ih())),n;var r,i}function Eg(t,e){return{documents:[gg(t,e.path)]}}function Tg(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=gg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return Rg(rf.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Cg((e=t).field),direction:Sg(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=og(t,e.limit);var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt={before:!(c=e.endAt).inclusive,values:c.position}),n}function Ig(t){let e=mg(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_h(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=_g(t);return e instanceof rf&&of(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Zd(kg((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,sd(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Jd(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Jd(n,e)}(n.endAt)),Sf(e,i,o,s,a,"F",c,u)}function _g(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=kg(t.unaryFilter.field);return nf.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=kg(t.unaryFilter.field);return nf.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=kg(t.unaryFilter.field);return nf.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=kg(t.unaryFilter.field);return nf.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ih()}}(t):void 0!==t.fieldFilter?(n=t,nf.create(kg(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ih()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,rf.create(e.compositeFilter.filters.map((t=>_g(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ih()}}(e.compositeFilter.op))):Ih();var e,n}function Sg(t){return ng[t]}function Ag(t){return rg[t]}function Cg(t){return{fieldPath:t.canonicalString()}}function kg(t){return Kh.fromServerFormat(t.fieldPath)}function Rg(t){return t instanceof nf?function(t){if("=="===t.op){if(zd(t.value))return{unaryFilter:{field:Cg(t.field),op:"IS_NAN"}};if($d(t.value))return{unaryFilter:{field:Cg(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(zd(t.value))return{unaryFilter:{field:Cg(t.field),op:"IS_NOT_NAN"}};if($d(t.value))return{unaryFilter:{field:Cg(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cg(t.field),op:Ag(t.op),value:t.value}}}(t):t instanceof rf?function(t){const e=t.getFilters().map((t=>Rg(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,ig[n]),filters:e}};var n}(t):Ih()}function Ng(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Og(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Dg{withSequenceNumber(t){return new Dg(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Dg(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Dg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Dg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}constructor(t,e,n,r,i=$h.min(),s=$h.min(),o=Td.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}}
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
 */class Pg{constructor(t){this.le=t}}function Lg(t){const e=Ig({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Pf(e,e.limit,"L"):e}
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
 */class xg{_e(t,e){this.we(t,e),e.me()}we(t,e){if("nullValue"in t)this.ge(e,5);else if("booleanValue"in t)this.ge(e,10),e.ye(t.booleanValue?1:0);else if("integerValue"in t)this.ge(e,15),e.ye(Sd(t.integerValue));else if("doubleValue"in t){const n=Sd(t.doubleValue);isNaN(n)?this.ge(e,13):(this.ge(e,15),od(n)?e.ye(0):e.ye(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ge(e,20),"string"==typeof n?e.pe(n):(e.pe(`${n.seconds||""}`),e.ye(n.nanos||0))}else if("stringValue"in t)this.Ie(t.stringValue,e),this.Te(e);else if("bytesValue"in t)this.ge(e,30),e.Ee(Ad(t.bytesValue)),this.Te(e);else if("referenceValue"in t)this.Ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ge(e,45),e.ye(n.latitude||0),e.ye(n.longitude||0)}else"mapValue"in t?Kd(t)?this.ge(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Te(e)):"arrayValue"in t?(this.ve(t.arrayValue,e),this.Te(e)):Ih()}Ie(t,e){this.ge(e,25),this.Pe(t,e)}Pe(t,e){e.pe(t)}Re(t,e){const n=t.fields||{};this.ge(e,55);for(const t of Object.keys(n))this.Ie(t,e),this.we(n[t],e)}ve(t,e){const n=t.values||[];this.ge(e,50);for(const t of n)this.we(t,e)}Ae(t,e){this.ge(e,37),Wh.fromName(t).path.forEach((t=>{this.ge(e,60),this.Pe(t,e)}))}ge(t,e){t.ye(e)}Te(t){t.ye(2)}constructor(){}}xg.be=new xg;
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
class Mg{addToCollectionParentIndex(t,e){return this.sn.add(e),nd.resolve()}getCollectionParents(t,e){return nd.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return nd.resolve()}deleteFieldIndex(t,e){return nd.resolve()}getDocumentsMatchingTarget(t,e){return nd.resolve(null)}getIndexType(t,e){return nd.resolve(0)}getFieldIndexes(t,e){return nd.resolve([])}getNextCollectionGroupToUpdate(t){return nd.resolve(null)}getMinOffset(t,e){return nd.resolve(Xh.min())}getMinOffsetFromCollectionGroup(t,e){return nd.resolve(Xh.min())}updateCollectionGroup(t,e,n){return nd.resolve()}updateIndexEntries(t,e){return nd.resolve()}constructor(){this.sn=new Ug}}class Ug{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new yd(Hh.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new yd(Hh.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Fg{static withCacheSize(t){return new Fg(t,Fg.DEFAULT_COLLECTION_PERCENTILE,Fg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */Fg.DEFAULT_COLLECTION_PERCENTILE=10,Fg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fg.DEFAULT=new Fg(41943040,Fg.DEFAULT_COLLECTION_PERCENTILE,Fg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fg.DISABLED=new Fg(-1,0,0);
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
class Bg{next(){return this.xn+=2,this.xn}static Nn(){return new Bg(0)}static kn(){return new Bg(-1)}constructor(t){this.xn=t}}
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
class Vg{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Qd.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?nd.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new jf((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
class jg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class $g{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ep(n.mutation,t,wd.empty(),jh.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Yf()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Yf()){const r=Wf();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=qf();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Wf();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Yf())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=zf();const s=Qf(),o=Qf();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Sp)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Ep(o.mutation,e,o.mutation.getFieldMask(),jh.now())):s.set(e.key,wd.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new jg(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Qf();let r=new pd(((t,e)=>t-e)),i=Yf();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||wd.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Yf()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Gf();c.forEach((t=>{if(!i.has(t)){const r=wp(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return nd.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,Wh.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Nf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):nd.resolve(Wf());let o=-1,a=i;return s.next((e=>nd.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?nd.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Yf()))).next((t=>({batchId:o,changes:Kf(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Wh(e)).next((t=>{let e=qf();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=qf();return this.indexManager.getCollectionParents(t,r).next((s=>nd.forEach(s,(s=>{const o=(a=e,c=s.child(r),new _f(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Qd.newInvalidDocument(r)))}));let n=qf();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&Ep(s.mutation,i,wd.empty(),jh.now()),Uf(e,i)&&(n=n.insert(t,i))})),n}))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
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
 */class zg{getBundleMetadata(t,e){return nd.resolve(this.us.get(e))}saveBundleMetadata(t,e){var n;return this.us.set(e.id,{id:(n=e).id,version:n.version,createTime:lg(n.createTime)}),nd.resolve()}getNamedQuery(t,e){return nd.resolve(this.cs.get(e))}saveNamedQuery(t,e){return this.cs.set(e.name,{name:(n=e).name,query:Lg(n.bundledQuery),readTime:lg(n.readTime)}),nd.resolve();var n}constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}}
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
 */class Hg{getOverlay(t,e){return nd.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Wf();return nd.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.de(t,e,r)})),nd.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.hs.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.hs.delete(n)),nd.resolve()}getOverlaysForCollection(t,e,n){const r=Wf(),i=e.length+1,s=new Wh(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return nd.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new pd(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Wf(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Wf(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return nd.resolve(o)}de(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Pp(e,n));let i=this.hs.get(e);void 0===i&&(i=Yf(),this.hs.set(e,i)),this.hs.set(e,i.add(n.key))}constructor(){this.overlays=new pd(Wh.comparator),this.hs=new Map}}
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
 */class qg{isEmpty(){return this.ls.isEmpty()}addReference(t,e){const n=new Kg(t,e);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gs(new Kg(t,e))}ys(t,e){t.forEach((t=>this.removeReference(t,e)))}ps(t){const e=new Wh(new Hh([])),n=new Kg(e,t),r=new Kg(e,t+1),i=[];return this.ds.forEachInRange([n,r],(t=>{this.gs(t),i.push(t.key)})),i}Is(){this.ls.forEach((t=>this.gs(t)))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const e=new Wh(new Hh([])),n=new Kg(e,t),r=new Kg(e,t+1);let i=Yf();return this.ds.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Kg(t,0),n=this.ls.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.ls=new yd(Kg.fs),this.ds=new yd(Kg._s)}}class Kg{static fs(t,e){return Wh.comparator(t.key,e.key)||Bh(t.Es,e.Es)}static _s(t,e){return Bh(t.Es,e.Es)||Wh.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.Es=e}}
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
 */class Wg{checkEmpty(t){return nd.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Op(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.Rs=this.Rs.add(new Kg(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return nd.resolve(s)}lookupMutationBatch(t,e){return nd.resolve(this.vs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Ps(n),i=r<0?0:r;return nd.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return nd.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(t){return nd.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Kg(e,0),r=new Kg(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(t=>{const e=this.vs(t.Es);i.push(e)})),nd.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new yd(Bh);return e.forEach((t=>{const e=new Kg(t,0),r=new Kg(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],(t=>{n=n.add(t.Es)}))})),nd.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Wh.isDocumentKey(i)||(i=i.child(""));const s=new Kg(new Wh(i),0);let o=new yd(Bh);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Es)),!0)}),s),nd.resolve(this.bs(o))}bs(t){const e=[];return t.forEach((t=>{const n=this.vs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){_h(0===this.Vs(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return nd.forEach(e.mutations,(r=>{const i=new Kg(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Rs=n}))}Dn(t){}containsKey(t,e){const n=new Kg(e,0),r=this.Rs.firstAfterOrEqual(n);return nd.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,nd.resolve()}Vs(t,e){return this.Ps(t)}Ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}vs(t){const e=this.Ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.As=1,this.Rs=new yd(Kg.fs)}}
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
 */class Gg{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ss(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return nd.resolve(n?n.document.mutableCopy():Qd.newInvalidDocument(e))}getEntries(t,e){let n=zf();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Qd.newInvalidDocument(t))})),nd.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=zf();const s=e.path,o=new Wh(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Yh(Jh(o),n)<=0||(r.has(o.key)||Uf(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return nd.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Ih()}Ds(t,e){return nd.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Qg(this)}getSize(t){return nd.resolve(this.size)}constructor(t){this.Ss=t,this.docs=new pd(Wh.comparator),this.size=0}}class Qg extends Vg{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.rs.addEntry(t,r)):this.rs.removeEntry(n)})),nd.waitFor(e)}getFromCache(t,e){return this.rs.getEntry(t,e)}getAllFromCache(t,e){return this.rs.getEntries(t,e)}constructor(t){super(),this.rs=t}}
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
 */class Jg{forEachTarget(t,e){return this.Cs.forEach(((t,n)=>e(n))),nd.resolve()}getLastRemoteSnapshotVersion(t){return nd.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return nd.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),nd.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.xs&&(this.xs=e),nd.resolve()}$n(t){this.Cs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ks=new Bg(e),this.highestTargetId=e),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,e){return this.$n(e),this.targetCount+=1,nd.resolve()}updateTargetData(t,e){return this.$n(e),nd.resolve()}removeTargetData(t,e){return this.Cs.delete(e.target),this.Ns.ps(e.targetId),this.targetCount-=1,nd.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Cs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),nd.waitFor(i).next((()=>r))}getTargetCount(t){return nd.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cs.get(e)||null;return nd.resolve(n)}addMatchingKeys(t,e,n){return this.Ns.ws(e,n),nd.resolve()}removeMatchingKeys(t,e,n){this.Ns.ys(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),nd.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ns.ps(e),nd.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ns.Ts(e);return nd.resolve(n)}containsKey(t,e){return nd.resolve(this.Ns.containsKey(e))}constructor(t){this.persistence=t,this.Cs=new jf((t=>Ef(t)),Tf),this.lastRemoteSnapshotVersion=$h.min(),this.highestTargetId=0,this.xs=0,this.Ns=new qg,this.targetCount=0,this.ks=Bg.Nn()}}
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
 */class Xg{start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ms[t.toKey()];return n||(n=new Wg(e,this.referenceDelegate),this.Ms[t.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,e,n){wh("MemoryPersistence","Starting transaction:",t);const r=new Yg(this.Os.next());return this.referenceDelegate.qs(),n(r).next((t=>this.referenceDelegate.Us(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ks(t,e){return nd.or(Object.values(this.Ms).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Ms={},this.overlays={},this.Os=new id(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new Jg(this),this.indexManager=new Mg,this.remoteDocumentCache=new Gg((t=>this.referenceDelegate.Bs(t))),this.serializer=new Pg(e),this.Ls=new zg(this.serializer)}}class Yg extends td{constructor(t){super(),this.currentSequenceNumber=t}}class Zg{static js(t){return new Zg(t)}get zs(){if(this.Qs)return this.Qs;throw Ih()}addReference(t,e,n){return this.Gs.addReference(n,e),this.zs.delete(n.toString()),nd.resolve()}removeReference(t,e,n){return this.Gs.removeReference(n,e),this.zs.add(n.toString()),nd.resolve()}markPotentiallyOrphaned(t,e){return this.zs.add(e.toString()),nd.resolve()}removeTarget(t,e){this.Gs.ps(e.targetId).forEach((t=>this.zs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}qs(){this.Qs=new Set}Us(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nd.forEach(this.zs,(n=>{const r=Wh.fromPath(n);return this.Ws(t,r).next((t=>{t||e.removeEntry(r,$h.min())}))})).next((()=>(this.Qs=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ws(t,e).next((t=>{t?this.zs.delete(e.toString()):this.zs.add(e.toString())}))}Bs(t){return 0}Ws(t,e){return nd.or([()=>nd.resolve(this.Gs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ks(t,e)])}constructor(t){this.persistence=t,this.Gs=new qg,this.Qs=null}}
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
class tm{static Bi(t,e){let n=Yf(),r=Yf();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new tm(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Fi=r}}
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
 */class em{initialize(t,e){this.qi=t,this.indexManager=e,this.Li=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ui(t,e).next((i=>i||this.Ki(t,e,r,n))).next((n=>n||this.Gi(t,e)))}Ui(t,e){if(Cf(e))return nd.resolve(null);let n=Df(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Pf(e,null,"F"),n=Df(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Yf(...r);return this.qi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Qi(e,r);return this.ji(e,s,i,n.readTime)?this.Ui(t,Pf(e,null,"F")):this.zi(t,s,e,n)}))))})))))}Ki(t,e,n,r){return Cf(e)||r.isEqual($h.min())?this.Gi(t,e):this.qi.getDocuments(t,n).next((i=>{const s=this.Qi(e,i);return this.ji(e,s,n,r)?this.Gi(t,e):(vh()<=or.DEBUG&&wh("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mf(e)),this.zi(t,s,e,Qh(r,-1)))}))}Qi(t,e){let n=new yd(Bf(t));return e.forEach(((e,r)=>{Uf(t,r)&&(n=n.add(r))})),n}ji(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(t,e){return vh()<=or.DEBUG&&wh("QueryEngine","Using full collection scan to execute query:",Mf(e)),this.qi.getDocumentsMatchingQuery(t,e,Xh.min())}zi(t,e,n,r){return this.qi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Li=!1}}
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
 */class nm{Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $g(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Hi)))}constructor(t,e,n,r){this.persistence=t,this.Wi=e,this.serializer=r,this.Hi=new pd(Bh),this.Ji=new jf((t=>Ef(t)),Tf),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(n)}}function rm(t,e,n,r){return new nm(t,e,n,r)}async function im(t,e){const n=Sh(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Yf();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({tr:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function sm(t){const e=Sh(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Fs.getLastRemoteSnapshotVersion(t)))}function om(t,e,n){let r=Yf(),i=Yf();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=zf();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual($h.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):wh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{er:r,nr:i}}))}function am(t,e){const n=Sh(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function cm(t,e){const n=Sh(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Fs.getTargetData(t,e).next((i=>i?(r=i,nd.resolve(r)):n.Fs.allocateTargetId(t).next((i=>(r=new Dg(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Fs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Hi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(t.targetId,t),n.Ji.set(e,t.targetId)),t}))}async function um(t,e,n){const r=Sh(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!rd(t))throw t;wh("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function lm(t,e,n){const r=Sh(t);let i=$h.min(),s=Yf();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Sh(t),i=r.Ji.get(n);return void 0!==i?nd.resolve(r.Hi.get(i)):r.Fs.getTargetData(e,n)}(r,t,Df(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Wi.getDocumentsMatchingQuery(t,e,n?i:$h.min(),n?s:Yf()))).next((t=>(hm(r,Ff(e),t),{documents:t,sr:s})))))}function hm(t,e,n){let r=t.Yi.get(e)||$h.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Yi.set(e,r)}class dm{hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=tp()}}class fm{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,e,n){this.Hr[t]=e}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new dm,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Wr=new dm,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class pm{Jr(t){}shutdown(){}}
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
 */class gm{Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){wh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){wh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}}
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
 */let mm=null;function ym(){return null===mm?mm=268435456+Math.round(2147483648*Math.random()):mm++,"0x"+mm.toString(16)
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
 */}const vm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class wm{oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}constructor(t){this.io=t.io,this.ro=t.ro}}
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
 */class bm extends class{get yo(){return!1}po(t,e,n,r,i){const s=ym(),o=this.Io(t,e);wh("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.To(a,r,i),this.Eo(t,o,a,n).then((e=>(wh("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Eh("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Ao(t,e,n,r,i,s){return this.po(t,e,n,r,i)}To(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+mh,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Io(t,e){const n=vm[t];return`${this.wo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.wo=e+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Eo(t,e,n,r){const i=ym();return new Promise(((s,o)=>{const a=new dh;a.setWithCredentials(!0),a.listenOnce(ah.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case oh.NO_ERROR:const e=a.getResponseJson();wh("WebChannelConnection",`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case oh.TIMEOUT:wh("WebChannelConnection",`RPC '${t}' ${i} timed out`),o(new Ch(Ah.DEADLINE_EXCEEDED,"Request time out"));break;case oh.HTTP_ERROR:const n=a.getStatus();if(wh("WebChannelConnection",`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ah).indexOf(e)>=0?e:Ah.UNKNOWN}(e.status);o(new Ch(t,e.message))}else o(new Ch(Ah.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ch(Ah.UNAVAILABLE,"Connection failed."));break;default:Ih()}}finally{wh("WebChannelConnection",`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);wh("WebChannelConnection",`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const r=ym(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ih(),o=sh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lh({})),this.To(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");wh("WebChannelConnection",`Creating RPC '${t}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new wm({io:e=>{h?wh("WebChannelConnection",`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(wh("WebChannelConnection",`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),wh("WebChannelConnection",`RPC '${t}' stream ${r} sending:`,e),u.send(e))},ro:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,hh.EventType.OPEN,(()=>{h||wh("WebChannelConnection",`RPC '${t}' stream ${r} transport opened.`)})),f(u,hh.EventType.CLOSE,(()=>{h||(h=!0,wh("WebChannelConnection",`RPC '${t}' stream ${r} transport closed`),d.fo())})),f(u,hh.EventType.ERROR,(e=>{h||(h=!0,Eh("WebChannelConnection",`RPC '${t}' stream ${r} transport errored:`,e),d.fo(new Ch(Ah.UNAVAILABLE,"The operation could not be completed")))})),f(u,hh.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];_h(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){wh("WebChannelConnection",`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=xp[t];if(void 0!==e)return Fp(e)}(e),i=o.message;void 0===n&&(n=Ah.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.fo(new Ch(n,i)),u.close()}else wh("WebChannelConnection",`RPC '${t}' stream ${r} received:`,i),d._o(i)}})),f(o,ch.STAT_EVENT,(e=>{e.stat===uh.PROXY?wh("WebChannelConnection",`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===uh.NOPROXY&&wh("WebChannelConnection",`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.lo()}),0),d}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
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
 */function Em(){return"undefined"!=typeof document?document:null}
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
 */function Tm(t){return new sg(t,!0)}
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
 */class Im{reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const e=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,e-n);r>0&&wh("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Do=Date.now(),t()))),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}constructor(t,e,n=1e3,r=1.5,i=6e4){this.si=t,this.timerId=e,this.vo=n,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}}
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
 */class _m{qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,(()=>this.jo())))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,e){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==t?this.Lo.reset():e&&e.code===Ah.RESOURCE_EXHAUSTED?(bh(e.toString()),bh("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):e&&e.code===Ah.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(e)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),e=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.$o===e&&this.Xo(t,n)}),(e=>{t((()=>{const t=new Ch(Ah.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Zo(t)}))}))}Xo(t,e){const n=this.Yo(this.$o);this.stream=this.tu(t,e),this.stream.oo((()=>{n((()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener.oo())))})),this.stream.co((t=>{n((()=>this.Zo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Ko(){this.state=5,this.Lo.xo((async()=>{this.state=0,this.start()}))}Zo(t){return wh("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return e=>{this.si.enqueueAndForget((()=>this.$o===t?e():(wh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.si=t,this.Mo=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Im(t,e)}}class Sm extends _m{tu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.Lo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ih(),s=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(_h(void 0===e||"string"==typeof e),Td.fromBase64String(e||"")):(_h(void 0===e||e instanceof Uint8Array),Td.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Ah.UNKNOWN:Fp(t.code);return new Ch(e,t.message||"")}(a);n=new Xp(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pg(t,r.document.name),s=lg(r.document.updateTime),o=r.document.createTime?lg(r.document.createTime):$h.min(),a=new Wd({mapValue:{fields:r.document.fields}}),c=Qd.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Qp(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pg(t,r.document),s=r.readTime?lg(r.readTime):$h.min(),o=Qd.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qp([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pg(t,r.document),s=r.removedTargetIds||[];n=new Qp([],s,i,null)}else{if(!("filter"in e))return Ih();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Lp(r,i),o=t.targetId;n=new Jp(o,s)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return $h.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?$h.min():e.readTime?lg(e.readTime):$h.min()}(t);return this.listener.eu(e,n)}nu(t){const e={};e.database=yg(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=If(r)?{documents:Eg(t,r)}:{query:Tg(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=cg(t,e.resumeToken);const r=og(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo($h.min())>0){n.readTime=ag(t,e.snapshotVersion.toTimestamp());const r=og(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ih()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.zo(e)}su(t){const e={};e.database=yg(this.serializer),e.removeTarget=t,this.zo(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}}class Am extends _m{get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(_h(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(_h(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?lg(t.updateTime):lg(e);return n.isEqual($h.min())&&(n=lg(e)),new gp(n,t.transformResults||[])}(t,n)))):[]),i=lg(t.commitTime);return this.listener.uu(i,r)}var e,n;return _h(!t.writeResults||0===t.writeResults.length),this.iu=!0,this.listener.cu()}au(){const t={};t.database=yg(this.serializer),this.zo(t)}ou(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>bg(this.serializer,t)))};this.zo(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.iu=!1}}
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
 */class Cm extends class{}{lu(){if(this.hu)throw new Ch(Ah.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,e,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.po(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ah.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ch(Ah.UNKNOWN,t.toString())}))}Ao(t,e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ah.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ch(Ah.UNKNOWN,t.toString())}))}terminate(){this.hu=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.hu=!1}}class km{mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve()))))}pu(t){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,"Online"===t&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(bh(e),this.wu=!1):wh("OnlineStateTracker",e)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}}
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
 */class Rm{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr((t=>{n.enqueueAndForget((async()=>{Fm(this)&&(wh("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Sh(t);e.Au.add(4),await Om(e),e.Pu.set("Unknown"),e.Au.delete(4),await Nm(e)}(this))}))})),this.Pu=new km(n,r)}}async function Nm(t){if(Fm(t))for(const e of t.Ru)await e(!0)}async function Om(t){for(const e of t.Ru)await e(!1)}function Dm(t,e){const n=Sh(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Um(n)?Mm(n):ny(n).Uo()&&Lm(n,e))}function Pm(t,e){const n=Sh(t),r=ny(n);n.Eu.delete(e),r.Uo()&&xm(n,e),0===n.Eu.size&&(r.Uo()?r.Qo():Fm(n)&&n.Pu.set("Unknown"))}function Lm(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($h.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ny(t).nu(e)}function xm(t,e){t.bu.Lt(e),ny(t).su(e)}function Mm(t){t.bu=new Zp({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),ny(t).start(),t.Pu.mu()}function Um(t){return Fm(t)&&!ny(t).qo()&&t.Eu.size>0}function Fm(t){return 0===Sh(t).Au.size}function Bm(t){t.bu=void 0}async function Vm(t){t.Eu.forEach(((e,n)=>{Lm(t,e)}))}async function jm(t,e){Bm(t),Um(t)?(t.Pu.pu(e),Mm(t)):t.Pu.set("Unknown")}async function $m(t,e,n){if(t.Pu.set("Online"),e instanceof Xp&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Eu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Eu.delete(r),t.bu.removeTarget(r))}(t,e)}catch(n){wh("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await zm(t,n)}else if(e instanceof Qp?t.bu.Wt(e):e instanceof Jp?t.bu.ee(e):t.bu.Yt(e),!n.isEqual($h.min()))try{const e=await sm(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.bu.ue(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Eu.get(r);i&&t.Eu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Eu.get(e);if(!r)return;t.Eu.set(e,r.withResumeToken(Td.EMPTY_BYTE_STRING,r.snapshotVersion)),xm(t,e);const i=new Dg(r.target,e,n,r.sequenceNumber);Lm(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){wh("RemoteStore","Failed to raise snapshot:",e),await zm(t,e)}}async function zm(t,e,n){if(!rd(e))throw e;t.Au.add(1),await Om(t),t.Pu.set("Offline"),n||(n=()=>sm(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{wh("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Nm(t)}))}function Hm(t,e){return e().catch((n=>zm(t,n,e)))}async function qm(t){const e=Sh(t),n=ry(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Km(e);)try{const t=await am(e.localStore,r);if(null===t){0===e.Tu.length&&n.Qo();break}r=t.batchId,Wm(e,t)}catch(t){await zm(e,t)}Gm(e)&&Qm(e)}function Km(t){return Fm(t)&&t.Tu.length<10}function Wm(t,e){t.Tu.push(e);const n=ry(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Gm(t){return Fm(t)&&!ry(t).qo()&&t.Tu.length>0}function Qm(t){ry(t).start()}async function Jm(t){ry(t).au()}async function Xm(t){const e=ry(t);for(const n of t.Tu)e.ou(n.mutations)}async function Ym(t,e,n){const r=t.Tu.shift(),i=Dp.from(r,e,n);await Hm(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await qm(t)}async function Zm(t,e){e&&ry(t).ru&&await async function(t,e){if(Up(n=e.code)&&n!==Ah.ABORTED){const n=t.Tu.shift();ry(t).Go(),await Hm(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await qm(t)}var n}(t,e),Gm(t)&&Qm(t)}async function ty(t,e){const n=Sh(t);n.asyncQueue.verifyOperationInProgress(),wh("RemoteStore","RemoteStore received new credentials");const r=Fm(n);n.Au.add(3),await Om(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Nm(n)}async function ey(t,e){const n=Sh(t);e?(n.Au.delete(2),await Nm(n)):e||(n.Au.add(2),await Om(n),n.Pu.set("Unknown"))}function ny(t){return t.Vu||(t.Vu=function(t,e,n){const r=Sh(t);return r.lu(),new Sm(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{oo:Vm.bind(null,t),co:jm.bind(null,t),eu:$m.bind(null,t)}),t.Ru.push((async e=>{e?(t.Vu.Go(),Um(t)?Mm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Bm(t))}))),t.Vu}function ry(t){return t.Su||(t.Su=function(t,e,n){const r=Sh(t);return r.lu(),new Am(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{oo:Jm.bind(null,t),co:Zm.bind(null,t),cu:Xm.bind(null,t),uu:Ym.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Go(),await qm(t)):(await t.Su.stop(),t.Tu.length>0&&(wh("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))}))),t.Su
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
 */}class iy{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new iy(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ch(Ah.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new kh,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function sy(t,e){if(bh("AsyncQueue",`${e}: ${t}`),rd(t))return new Ch(Ah.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class oy{static emptySet(t){return new oy(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof oy))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new oy;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Wh.comparator(e.key,n.key):(t,e)=>Wh.comparator(t.key,e.key),this.keyedMap=qf(),this.sortedSet=new pd(this.comparator)}}
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
 */class ay{track(t){const e=t.doc.key,n=this.Du.get(e);n?0!==t.type&&3===n.type?this.Du=this.Du.insert(e,t):3===t.type&&1!==n.type?this.Du=this.Du.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Du=this.Du.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Du=this.Du.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Du=this.Du.remove(e):1===t.type&&2===n.type?this.Du=this.Du.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Du=this.Du.insert(e,{type:2,doc:t.doc}):Ih():this.Du=this.Du.insert(e,t)}Cu(){const t=[];return this.Du.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Du=new pd(Wh.comparator)}}class cy{static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new cy(t,e,oy.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Lf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
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
 */class uy{constructor(){this.xu=void 0,this.listeners=[]}}class ly{constructor(){this.queries=new jf((t=>xf(t)),Lf),this.onlineState="Unknown",this.Nu=new Set}}async function hy(t,e){const n=Sh(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new uy),i)try{s.xu=await n.onListen(r)}catch(t){const n=sy(t,`Initialization of query '${Mf(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&gy(n)}async function dy(t,e){const n=Sh(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fy(t,e){const n=Sh(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Mu(t)&&(r=!0);i.xu=t}}r&&gy(n)}function py(t,e,n){const r=Sh(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function gy(t){t.Nu.forEach((t=>{t.next()}))}class my{Mu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new cy(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),e=!0):this.Lu(t,this.onlineState)&&(this.qu(t),e=!0),this.Fu=t,e}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let e=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),e=!0),e}Lu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Uu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Bu(t){if(t.docChanges.length>0)return!0;const e=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}qu(t){t=cy.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}constructor(t,e,n){this.query=t,this.Ou=e,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}}
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
class yy{constructor(t){this.key=t}}class vy{constructor(t){this.key=t}}class wy{get ec(){return this.Ju}nc(t,e){const n=e?e.sc:new ay,r=e?e.tc:this.tc;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Uf(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ic(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Zu(l,a)>0||c&&this.Zu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tc:s,sc:n,ji:o,mutatedKeys:i}}ic(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const i=t.sc.Cu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ih()}};return n(t)-n(e)}(t.type,e.type)||this.Zu(t.doc,e.doc))),this.rc(n);const s=e?this.oc():[],o=0===this.Xu.size&&this.current?1:0,a=o!==this.Yu;return this.Yu=o,0!==i.length||a?{snapshot:new cy(this.query,t.tc,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tc:this.tc,sc:new ay,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach((t=>this.Ju=this.Ju.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ju=this.Ju.delete(t))),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Yf(),this.tc.forEach((t=>{this.cc(t.key)&&(this.Xu=this.Xu.add(t.key))}));const e=[];return t.forEach((t=>{this.Xu.has(t)||e.push(new vy(t))})),this.Xu.forEach((n=>{t.has(n)||e.push(new yy(n))})),e}ac(t){this.Ju=t.sr,this.Xu=Yf();const e=this.nc(t.documents);return this.applyChanges(e,!0)}hc(){return cy.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}constructor(t,e){this.query=t,this.Ju=e,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Yf(),this.mutatedKeys=Yf(),this.Zu=Bf(t),this.tc=new oy(this.Zu)}}class by{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ey{constructor(t){this.key=t,this.lc=!1}}class Ty{get isPrimaryClient(){return!0===this.Ac}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new jf((t=>xf(t)),Lf),this._c=new Map,this.wc=new Set,this.mc=new pd(Wh.comparator),this.gc=new Map,this.yc=new qg,this.Ic={},this.Tc=new Map,this.Ec=Bg.kn(),this.onlineState="Unknown",this.Ac=void 0}}async function Iy(t,e){const n=jy(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const t=await cm(n.localStore,Df(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await _y(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Dm(n.remoteStore,t)}return i}async function _y(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.nc(n);i.ji&&(i=await lm(t.localStore,e.query,!1).then((({documents:t})=>e.view.nc(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return xy(t,e.targetId,o.uc),o.snapshot}(t,e,n,r);const s=await lm(t.localStore,e,!0),o=new wy(e,s.sr),a=o.nc(s.documents),c=Gp.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);xy(t,n,u.uc);const l=new by(e,n,o);return t.dc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Sy(t,e){const n=Sh(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((t=>!Lf(t,e)))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await um(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Pm(n.remoteStore,r.targetId),Py(n,r.targetId)})).catch(ed)):(Py(n,r.targetId),await um(n.localStore,r.targetId,!0))}async function Ay(t,e){const n=Sh(t);try{const t=await function(t,e){const n=Sh(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Fs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Fs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var l,h,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(Td.EMPTY_BYTE_STRING,$h.min()).withLastLimboFreeSnapshotVersion($h.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Fs.updateTargetData(t,u))}));let a=zf(),c=Yf();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(om(t,s,e.documentUpdates).next((t=>{a=t.er,c=t.nr}))),!r.isEqual($h.min())){const e=n.Fs.getLastRemoteSnapshotVersion(t).next((e=>n.Fs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return nd.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Hi=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.gc.get(e);r&&(_h(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.lc=!0:t.modifiedDocuments.size>0?_h(r.lc):t.removedDocuments.size>0&&(_h(r.lc),r.lc=!1))})),await Fy(n,t,e)}catch(t){await ed(t)}}function Cy(t,e,n){const r=Sh(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.dc.forEach(((n,r)=>{const i=r.view.ku(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Sh(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ku(e)&&(r=!0)})),r&&gy(n)}(r.eventManager,e),t.length&&r.fc.eu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ky(t,e,n){const r=Sh(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let t=new pd(Wh.comparator);t=t.insert(s,Qd.newNoDocument(s,$h.min()));const n=Yf().add(s),i=new Wp($h.min(),new Map,new pd(Bh),t,n);await Ay(r,i),r.mc=r.mc.remove(s),r.gc.delete(e),Uy(r)}else await um(r.localStore,e,!1).then((()=>Py(r,e,n))).catch(ed)}async function Ry(t,e){const n=Sh(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Sh(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=nd.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);_h(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Yf();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);Dy(n,r,null),Oy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fy(n,t)}catch(t){await ed(t)}}async function Ny(t,e,n){const r=Sh(t);try{const t=await function(t,e){const n=Sh(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(_h(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Dy(r,e,n),Oy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fy(r,t)}catch(t){await ed(t)}}function Oy(t,e){(t.Tc.get(e)||[]).forEach((t=>{t.resolve()})),t.Tc.delete(e)}function Dy(t,e,n){const r=Sh(t);let i=r.Ic[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Py(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach((e=>{t.yc.containsKey(e)||Ly(t,e)}))}function Ly(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);null!==n&&(Pm(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Uy(t))}function xy(t,e,n){for(const r of n)r instanceof yy?(t.yc.addReference(r.key,e),My(t,r)):r instanceof vy?(wh("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||Ly(t,r.key)):Ih()}function My(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(wh("SyncEngine","New document in limbo: "+n),t.wc.add(r),Uy(t))}function Uy(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new Wh(Hh.fromString(e)),r=t.Ec.next();t.gc.set(r,new Ey(n)),t.mc=t.mc.insert(n,r),Dm(t.remoteStore,new Dg(Df(Af(n.path)),r,"TargetPurposeLimboResolution",id.ct))}}async function Fy(t,e,n){const r=Sh(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach(((t,a)=>{o.push(r.Rc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=tm.Bi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.fc.eu(i),await async function(t,e){const n=Sh(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>nd.forEach(e,(e=>nd.forEach(e.$i,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>nd.forEach(e.Fi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!rd(t))throw t;wh("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Hi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(e,i)}}}(r.localStore,s))}async function By(t,e){const n=Sh(t);if(!n.currentUser.isEqual(e)){wh("SyncEngine","User change. New user:",e.toKey());const t=await im(n.localStore,e);n.currentUser=e,(r=n).Tc.forEach((t=>{t.forEach((t=>{t.reject(new Ch(Ah.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Tc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Fy(n,t.tr)}var r}function Vy(t,e){const n=Sh(t),r=n.gc.get(e);if(r&&r.lc)return Yf().add(r.key);{let t=Yf();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.dc.get(e);t=t.unionWith(r.view.ec)}return t}}function jy(t){const e=Sh(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ky.bind(null,e),e.fc.eu=fy.bind(null,e.eventManager),e.fc.vc=py.bind(null,e.eventManager),e}function $y(t){const e=Sh(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ry.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ny.bind(null,e),e}class zy{async initialize(t){this.serializer=Tm(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return rm(this.persistence,new em,t.initialUser,this.serializer)}createPersistence(t){return new Xg(Zg.js,this.serializer)}createSharedClientState(t){return new fm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Hy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Cy(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=By.bind(null,this.syncEngine),await ey(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ly}createDatastore(t){const e=Tm(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new bm(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new Cm(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Cy(this.syncEngine,t,0),s=gm.D()?new gm:new pm,new Rm(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Ty(t,e,n,r,i,s);return o&&(a.Ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Sh(t);wh("RemoteStore","RemoteStore shutting down."),e.Au.add(5),await Om(e),e.vu.shutdown(),e.Pu.set("Unknown")}(this.remoteStore)}}
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
class qy{next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):bh("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
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
class Ky{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ch(Ah.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kh;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sy(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=gh.UNAUTHENTICATED,this.clientId=Fh.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{wh("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(wh("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function Wy(t,e){t.asyncQueue.verifyOperationInProgress(),wh("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await im(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jy(t);wh("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>ty(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ty(e.remoteStore,n))),t._onlineComponents=e}function Qy(t){return"FirebaseError"===t.name?t.code===Ah.FAILED_PRECONDITION||t.code===Ah.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Jy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){wh("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wy(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Qy(n))throw n;Eh("Error using user provided cache. Falling back to memory cache: "+n),await Wy(t,new zy)}}else wh("FirestoreClient","Using default OfflineComponentProvider"),await Wy(t,new zy);return t._offlineComponents}async function Xy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(wh("FirestoreClient","Using user provided OnlineComponentProvider"),await Gy(t,t._uninitializedComponentsProvider._online)):(wh("FirestoreClient","Using default OnlineComponentProvider"),await Gy(t,new Hy))),t._onlineComponents}function Yy(t){return Xy(t).then((t=>t.syncEngine))}async function Zy(t){const e=await Xy(t),n=e.eventManager;return n.onListen=Iy.bind(null,e.syncEngine),n.onUnlisten=Sy.bind(null,e.syncEngine),n}function tv(t,e,n={}){const r=new kh;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new qy({next:s=>{e.enqueueAndForget((()=>dy(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ch(Ah.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ch(Ah.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new my(Af(n.path),s,{includeMetadataChanges:!0,Uu:!0});return hy(t,o)}(await Zy(t),t.asyncQueue,e,n,r))),r.promise}
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
const ev=new Map;
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
 */function nv(t,e,n){if(!n)throw new Ch(Ah.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rv(t){if(!Wh.isDocumentKey(t))throw new Ch(Ah.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iv(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Ih()}function sv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ch(Ah.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iv(t);throw new Ch(Ah.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class ov{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ch(Ah.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ch(Ah.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new Ch(Ah.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling||void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}}
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
 */class av{get app(){if(!this._app)throw new Ch(Ah.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ch(Ah.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ov(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Nh;switch(t.type){case"firstParty":return new Lh(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ch(Ah.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ev.get(t);e&&(wh("ComponentProvider","Removing Datastore"),ev.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ov({}),this._settingsFrozen=!1}}function cv(t,e,n,r={}){var i;const s=(t=sv(t,av))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Eh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=gh.MOCK_USER;else{e=Fn(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Ch(Ah.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new gh(s)}t._authCredentials=new Oh(new Rh(e,n))}}
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
 */class uv{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hv(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new uv(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class lv{withConverter(t){return new lv(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class hv extends lv{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new uv(this.firestore,null,new Wh(t))}withConverter(t){return new hv(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,Af(n)),this._path=n,this.type="collection"}}function dv(t,e,...n){if(t=er(t),1===arguments.length&&(e=Fh.A()),nv("doc","path",e),t instanceof av){const r=Hh.fromString(e,...n);return rv(r),new uv(t,null,new Wh(r))}{if(!(t instanceof uv||t instanceof hv))throw new Ch(Ah.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Hh.fromString(e,...n));return rv(r),new uv(t.firestore,t instanceof hv?t.converter:null,new Wh(r))}}
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
class fv{get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const e=Em();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise((()=>{}));const e=new kh;return this.Zc((()=>this.Qc&&this.Hc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Gc.push(t),this.ta())))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!rd(t))throw t;wh("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo((()=>this.ta()))}}Zc(t){const e=this.Kc.then((()=>(this.Wc=!0,t().catch((t=>{this.zc=t,this.Wc=!1;throw bh("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Wc=!1,t))))));return this.Kc=e,e}enqueueAfterDelay(t,e,n){this.Xc(),this.Jc.indexOf(t)>-1&&(e=0);const r=iy.createAndSchedule(this,t,e,n,(t=>this.ea(t)));return this.jc.push(r),r}Xc(){this.zc&&Ih()}verifyOperationInProgress(){}async na(){let t;do{t=this.Kc,await t}while(t!==this.Kc)}sa(t){for(const e of this.jc)if(e.timerId===t)return!0;return!1}ia(t){return this.na().then((()=>{this.jc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.jc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.na()}))}ra(t){this.Jc.push(t)}ea(t){const e=this.jc.indexOf(t);this.jc.splice(e,1)}constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Im(this,"async_queue_retry"),this.Yc=()=>{const t=Em();t&&wh("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Lo.ko()};const t=Em();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Yc)}}class pv extends av{_terminate(){return this._firestoreClient||mv(this),this._firestoreClient.terminate()}constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new fv,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function gv(t){return t._firestoreClient||mv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mv(t){var e,n,r;const i=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new Nd(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams));var o,a,c,u;t._firestoreClient=new Ky(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
class yv{static fromBase64String(t){try{return new yv(Td.fromBase64String(t))}catch(t){throw new Ch(Ah.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new yv(Td.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class vv{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ch(Ah.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kh(t)}}
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
class wv{constructor(t){this._methodName=t}}
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
 */class bv{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Bh(this._lat,t._lat)||Bh(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ch(Ah.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ch(Ah.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const Ev=/^__.*__$/;class Tv{toMutation(t,e){return new Sp(t,this.data,this.fieldMask,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Iv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ih()}}class _v{get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new _v(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ca({path:n,ha:!1});return r.la(t),r}fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ca({path:n,ha:!1});return r.oa(),r}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return Uv(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Iv(this.ua)&&Ev.test(t))throw this._a('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class Sv{ga(t,e,n,r=!1){return new _v({ua:t,methodName:e,ma:n,path:Kh.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Tm(t)}}function Av(t){const e=t._freezeSettings(),n=Tm(t._databaseId);return new Sv(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Cv extends wv{_toFieldTransform(t){if(2!==t.ua)throw 1===t.ua?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cv}}function kv(t,e,n,r){const i=t.ga(1,e,n);Pv("Data must be an object, but it was:",i,r);const s=[],o=Wd.empty();dd(r,((t,r)=>{const a=Mv(e,t,n);r=er(r);const c=i.fa(a);if(r instanceof Cv)s.push(a);else{const t=Nv(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new wd(s);return new Tv(o,a,i.fieldTransforms)}function Rv(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Lv(e,r,n)],c=[i];if(s.length%2!=0)throw new Ch(Ah.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)a.push(Lv(e,s[t])),c.push(s[t+1]);const u=[],l=Wd.empty();for(let t=a.length-1;t>=0;--t)if(!Fv(u,a[t])){const e=a[t];let n=c[t];n=er(n);const r=o.fa(e);if(n instanceof Cv)u.push(e);else{const t=Nv(n,r);null!=t&&(u.push(e),l.set(e,t))}}const h=new wd(u);return new Tv(l,h,o.fieldTransforms)}function Nv(t,e){if(Dv(t=er(t)))return Pv("Unsupported field value:",e,t),Ov(t,e);if(t instanceof wv)return function(t,e){if(!Iv(e.ua))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&4!==e.ua)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Nv(i,e.da(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=er(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return rp(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=jh.fromDate(t);return{timestampValue:ag(e.serializer,n)}}if(t instanceof jh){const n=new jh(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ag(e.serializer,n)}}if(t instanceof bv)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof yv)return{bytesValue:cg(e.serializer,t._byteString)};if(t instanceof uv){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:hg(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${iv(t)}`)}(t,e)}function Ov(t,e){const n={};return fd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dd(t,((t,r)=>{const i=Nv(r,e.aa(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Dv(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof jh||t instanceof bv||t instanceof yv||t instanceof uv||t instanceof wv)}function Pv(t,e,n){if(!Dv(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=iv(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}var r}function Lv(t,e,n){if((e=er(e))instanceof vv)return e._internalPath;if("string"==typeof e)return Mv(t,e);throw Uv("Field path arguments must be of type string or ",t,!1,void 0,n)}const xv=new RegExp("[~\\*/\\[\\]]");function Mv(t,e,n){if(e.search(xv)>=0)throw Uv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vv(...e.split("."))._internalPath}catch(r){throw Uv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uv(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ch(Ah.INVALID_ARGUMENT,a+t+c)}function Fv(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Bv{get id(){return this._key.path.lastSegment()}get ref(){return new uv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Vv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(jv("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class Vv extends Bv{data(){return super.data()}}function jv(t,e){return"string"==typeof e?Mv(t,e):e instanceof vv?e._internalPath:e._delegate._internalPath}
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
 */class $v{convertValue(t,e="none"){switch(Pd(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Sd(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ad(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ih()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return dd(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new bv(Sd(t.latitude),Sd(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=kd(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Rd(t));default:return null}}convertTimestamp(t){const e=_d(t);return new jh(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Hh.fromString(t);_h(Og(n));const r=new Od(n.get(1),n.get(3)),i=new Wh(n.popFirst(5));return r.isEqual(e)||bh(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
class zv{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Hv extends Bv{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(jv("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class qv extends Hv{data(t={}){return super.data(t)}}
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
function Kv(t){t=sv(t,uv);const e=sv(t.firestore,pv);return tv(gv(e),t._key).then((n=>Jv(e,t,n)))}class Wv extends $v{convertBytes(t){return new yv(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new uv(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Gv(t,e,n,...r){t=sv(t,uv);const i=sv(t.firestore,pv),s=Av(i);let o;return o="string"==typeof(e=er(e))||e instanceof vv?Rv(s,"updateDoc",t._key,e,n,r):kv(s,"updateDoc",t._key,e),Qv(i,[o.toMutation(t._key,mp.exists(!0))])}function Qv(t,e){return function(t,e){const n=new kh;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=$y(t);try{const t=await function(t,e){const n=Sh(t),r=jh.now(),i=e.reduce(((t,e)=>t.add(e.key)),Yf());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=zf(),c=Yf();return n.Xi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Tp(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Sp(t.key,e,Gd(e.value.mapValue),mp.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Kf(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ic[t.currentUser.toKey()];r||(r=new pd(Bh)),r=r.insert(e,n),t.Ic[t.currentUser.toKey()]=r}(r,t.batchId,n),await Fy(r,t.changes),await qm(r.remoteStore)}catch(t){const e=sy(t,"Failed to persist write");n.reject(e)}}(await Yy(t),e,n))),n.promise}(gv(t),e)}function Jv(t,e,n){const r=n.docs.get(e._key),i=new Wv(t);return new Hv(t,i,e._key,r,new zv(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){mh="9.21.0",Mr(new nr("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new pv(new Dh(t.getProvider("auth-internal")),new Mh(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ch(Ah.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Od(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),$r("@firebase/firestore","3.11.0",t),$r("@firebase/firestore","3.11.0","esm2017")}();const Xv={emailReg:document.querySelector(".js-email"),passwordReg:document.querySelector(".js-password"),formReg:document.querySelector(".js-test")},Yv={emailLogIn:document.querySelector(".js-email__log"),passwordLogIn:document.querySelector(".js-password__log"),formLogIn:document.querySelector(".js-log-in")},Zv={signOutButton:document.querySelector(".js-sign_out"),signUpButton:document.querySelector(".js-sign_up"),signInButton:document.querySelector(".js-sign_in"),welcome:document.querySelector(".js-welcome")},tw=Vr({apiKey:"AIzaSyCJMItHBqFDoLJDsSUvyhMYr2rtrI8eHJA",authDomain:"naruto-a4b10.firebaseapp.com",projectId:"naruto-a4b10",storageBucket:"naruto-a4b10.appspot.com",messagingSenderId:"201982864594",appId:"1:201982864594:web:dd8cc327b440809fc0510b",measurementId:"G-5S182CBZBL"}),ew=function(t=jr()){const e=Ur(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Ur(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(Wn(n.getOptions(),null!=e?e:{}))return t;ii(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:jo,persistence:[ro,zs,qs]}),r=Mn("authTokenSyncURL");if(r){const t=(i=r,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>zo)return;const r=null==e?void 0:e.token;Ho!==r&&(Ho=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,e,n){er(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,r){er(t).onIdTokenChanged(e,n,r)}(n,(e=>t(e)))}var i;const s=Ln("auth");return s&&ds(n,`http://${s}`),n}(tw),nw=function(t,e){const n="string"==typeof t?t:e||"(default)",r=Ur("object"==typeof t?t:jr(),"firestore").getImmediate({identifier:n});if(!r._initialized){const t=xn("firestore");t&&cv(r,...t)}return r}(tw);let rw=null;var iw,sw,ow;Xv.formReg.addEventListener("submit",(async function(t){t.preventDefault(),await Vs(ew,Xv.emailReg.value,Xv.passwordReg.value).then((t=>{t.user})).catch((t=>{t.code,t.message})),location.reload()})),Yv.formLogIn.addEventListener("submit",(async function(t){t.preventDefault(),await(e=ew,n=Yv.emailLogIn.value,r=Yv.passwordLogIn.value,Bs(er(e),_s.credential(n,r))).then((t=>{const e=t.user;console.log(e),console.log("Signed in")})).catch((t=>{console.log(t,"Signed in");t.code,t.message})),location.reload();var e,n,r;
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
 */})),Zv.signOutButton.addEventListener("click",(function(t){(e=ew,er(e).signOut()).then((()=>{console.log("Log out")})).catch((t=>{console.log(t,"Log out error")}));var e})),iw=t=>{if(t)return console.log(t.uid),Zv.signUpButton.classList.add("hidden"),Zv.signInButton.classList.add("hidden"),Zv.signOutButton.classList.remove("hidden"),Zv.welcome.classList.remove("hidden"),Zv.welcome.textContent=`Hi, ${t.email}`,rw=t.email;console.log("Anyone log in"),Zv.signUpButton.classList.remove("hidden"),Zv.signInButton.classList.remove("hidden"),Zv.signOutButton.classList.add("hidden"),Zv.welcome.classList.add("hidden")},er(ew).onAuthStateChanged(iw,sw,ow);async function aw(t,e){try{const n=(new Date).toUTCString();await Gv(dv(nw,`requests/${t}`),{[n]:`${e}`},{merge:!0})}catch(t){console.error("Error adding document: ",t)}}document.querySelector(".js-get-test").addEventListener("click",(async function(){try{console.log(rw);const t=await Kv(dv(nw,`requests/${rw}`));console.log(t.data())}catch(t){console.error("Error adding document: ",t)}}));var cw=Object.defineProperty,uw=(t,e,n)=>(((t,e,n)=>{e in t?cw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);const lw={},hw=t=>{const{type:e,currentTarget:n}=t;[...lw[e]].forEach((([r,i])=>{n===r&&[...i].forEach((([n,i])=>{n.apply(r,[t]),"object"==typeof i&&i.once&&fw(r,e,n,i)}))}))},dw=(t,e,n,r)=>{lw[e]||(lw[e]=new Map);const i=lw[e];i.has(t)||i.set(t,new Map);const s=i.get(t),{size:o}=s;s.set(n,r),o||t.addEventListener(e,hw,r)},fw=(t,e,n,r)=>{const i=lw[e],s=i&&i.get(t),o=s&&s.get(n),a=void 0!==o?o:r;s&&s.has(n)&&s.delete(n),i&&(!s||!s.size)&&i.delete(t),(!i||!i.size)&&delete lw[e],(!s||!s.size)&&t.removeEventListener(e,hw,a)},pw=dw,gw=fw,mw=(Symbol.toStringTag,"focusin"),yw="focusout",vw="click",ww="mousedown",bw="mouseenter",Ew="mouseleave",Tw="resize",Iw="scroll",_w="ArrowDown",Sw="ArrowUp",Aw=navigator.userAgentData,{userAgent:Cw}=navigator,kw=Cw,Rw=/iPhone|iPad|iPod|Android/i;Aw?Aw.brands.some((t=>Rw.test(t.brand))):Rw.test(kw);const Nw=/(iPhone|iPod|iPad)/,Ow=Aw?Aw.brands.some((t=>Nw.test(t.brand))):Nw.test(kw);kw&&kw.includes("Firefox");const{head:Dw}=document;["webkitPerspective","perspective"].some((t=>t in Dw.style));const Pw=()=>{};(()=>{let t=!1;try{const e=Object.defineProperty({},"passive",{get:()=>(t=!0,t)});((t,e,n,r)=>{const i=s=>{(s.target===t||s.currentTarget===t)&&(n.apply(t,[s]),((t,e,n,r)=>{const i=r||!1;t.removeEventListener(e,n,i)})(t,e,i,r))};((t,e,n,r)=>{const i=r||!1;t.addEventListener(e,n,i)})(t,e,i,r)})(document,"DOMContentLoaded",Pw,e)}catch{}})(),["webkitTransform","transform"].some((t=>t in Dw.style)),["webkitAnimation","animation"].some((t=>t in Dw.style)),["webkitTransition","transition"].some((t=>t in Dw.style));const Lw=(t,e)=>t.getAttribute(e),xw=(t,e)=>t.hasAttribute(e),Mw=(t,e,n)=>t.setAttribute(e,n),Uw=(t,e)=>t.removeAttribute(e),Fw=(t,...e)=>{t.classList.add(...e)},Bw=(t,...e)=>{t.classList.remove(...e)},Vw=(t,e)=>t.classList.contains(e),jw=t=>null!=t&&"object"==typeof t||!1,$w=t=>jw(t)&&"number"==typeof t.nodeType&&[1,2,3,4,5,6,7,8,9,10,11].some((e=>t.nodeType===e))||!1,zw=t=>$w(t)&&1===t.nodeType||!1,Hw=new Map,qw={data:Hw,set:(t,e,n)=>{zw(t)&&(Hw.has(e)||Hw.set(e,new Map),Hw.get(e).set(t,n))},getAllFor:t=>Hw.get(t)||null,get:(t,e)=>{if(!zw(t)||!e)return null;const n=qw.getAllFor(e);return t&&n&&n.get(t)||null},remove:(t,e)=>{const n=qw.getAllFor(e);!n||!zw(t)||(n.delete(t),0===n.size&&Hw.delete(e))}},Kw=(t,e)=>qw.get(t,e),Ww=t=>"string"==typeof t||!1,Gw=t=>jw(t)&&"Window"===t.constructor.name||!1,Qw=t=>$w(t)&&9===t.nodeType||!1,Jw=t=>Gw(t)?t.document:Qw(t)?t:$w(t)?t.ownerDocument:window.document,Xw=(t,...e)=>Object.assign(t,...e),Yw=t=>{if(!t)return;if(Ww(t))return Jw().createElement(t);const{tagName:e}=t,n=Yw(e);if(!n)return;const r={...t};return delete r.tagName,Xw(n,r)},Zw=(t,e)=>t.dispatchEvent(e),tb=(t,e)=>{const n=getComputedStyle(t),r=e.replace("webkit","Webkit").replace(/([A-Z])/g,"-$1").toLowerCase();return n.getPropertyValue(r)},eb=t=>{const e=tb(t,"transitionProperty"),n=tb(t,"transitionDuration"),r=n.includes("ms")?1:1e3,i=e&&"none"!==e?parseFloat(n)*r:0;return Number.isNaN(i)?0:i},nb=(t,e)=>{let n=0;const r=new Event("transitionend"),i=eb(t),s=(t=>{const e=tb(t,"transitionProperty"),n=tb(t,"transitionDelay"),r=n.includes("ms")?1:1e3,i=e&&"none"!==e?parseFloat(n)*r:0;return Number.isNaN(i)?0:i})(t);if(i){const o=r=>{r.target===t&&(e.apply(t,[r]),t.removeEventListener("transitionend",o),n=1)};t.addEventListener("transitionend",o),setTimeout((()=>{n||Zw(t,r)}),i+s+17)}else e.apply(t,[r])},rb=(t,e)=>t.focus(e),ib=t=>!!["true",!0].includes(t)||!["false",!1].includes(t)&&(["null","",null,void 0].includes(t)?null:""===t||Number.isNaN(+t)?t:+t),sb=t=>Object.entries(t),ob=t=>t.toLowerCase(),ab=t=>Object.keys(t),cb=(t,e)=>{const n=new CustomEvent(t,{cancelable:!0,bubbles:!0});return jw(e)&&Xw(n,e),n},ub={passive:!0},lb=t=>t.offsetHeight,hb=(t,e)=>{sb(e).forEach((([e,n])=>{if(n&&Ww(e)&&e.includes("--"))t.style.setProperty(e,n);else{const r={};r[e]=n,Xw(t.style,r)}}))},db=t=>jw(t)&&"Map"===t.constructor.name||!1,fb=new Map,pb=(t,e,n,r)=>{zw(t)&&(r&&r.length?(fb.has(t)||fb.set(t,new Map),fb.get(t).set(r,setTimeout(e,n))):fb.set(t,setTimeout(e,n)))},gb=(t,e)=>{if(!zw(t))return null;const n=fb.get(t);return e&&n&&db(n)?n.get(e)||null:(t=>"number"==typeof t||!1)(n)?n:null},mb=(t,e)=>{if(!zw(t))return;const n=fb.get(t);e&&e.length&&db(n)?(clearTimeout(n.get(e)),n.delete(e),0===n.size&&fb.delete(t)):(clearTimeout(n),fb.delete(t))},yb=(t,e)=>{const{width:n,height:r,top:i,right:s,bottom:o,left:a}=t.getBoundingClientRect();let c=1,u=1;if(e&&zw(t)){const{offsetWidth:e,offsetHeight:i}=t;c=e>0?Math.round(n)/e:1,u=i>0?Math.round(r)/i:1}return{width:n/c,height:r/u,top:i/u,right:s/c,bottom:o/u,left:a/c,x:a/c,y:i/u}},vb=t=>Jw(t).body,wb=t=>Jw(t).documentElement,bb=t=>$w(t)&&"ShadowRoot"===t.constructor.name||!1,Eb=t=>"HTML"===t.nodeName?t:zw(t)&&t.assignedSlot||$w(t)&&t.parentNode||bb(t)&&t.host||wb(t);let Tb=0,Ib=0;const _b=new Map,Sb=(t,e)=>{let n=e?Tb:Ib;if(e){const r=Sb(t),i=_b.get(r)||new Map;_b.has(r)||_b.set(r,i),db(i)&&!i.has(e)?(i.set(e,n),Tb+=1):n=i.get(e)}else{const e=t.id||t;_b.has(e)?n=_b.get(e):(_b.set(e,n),Ib+=1)}return n},Ab=t=>{var e;return t?Qw(t)?t.defaultView:$w(t)?null==(e=null==t?void 0:t.ownerDocument)?void 0:e.defaultView:t:window},Cb=t=>{if(!$w(t))return!1;const{top:e,bottom:n}=yb(t),{clientHeight:r}=wb(t);return e<=r&&n>=0},kb=t=>"rtl"===wb(t).dir,Rb=t=>$w(t)&&["TABLE","TD","TH"].includes(t.nodeName)||!1,Nb=(t,e)=>t?t.closest(e)||Nb(t.getRootNode().host,e):null,Ob=(t,e)=>zw(t)?t:($w(e)?e:Jw()).querySelector(t),Db=(t,e)=>($w(e)?e:Jw()).getElementsByTagName(t),Pb=(t,e)=>($w(e)?e:Jw()).querySelectorAll(t),Lb=(t,e)=>(e&&$w(e)?e:Jw()).getElementsByClassName(t),xb=(t,e)=>t.matches(e);class Mb{get version(){return"5.0.6"}get name(){return"BaseComponent"}get defaults(){return{}}dispose(){qw.remove(this.element,this.name),ab(this).forEach((t=>{delete this[t]}))}constructor(t,e){const n=Ob(t);if(!n)throw Ww(t)?Error(`${this.name} Error: "${t}" is not a valid selector.`):Error(`${this.name} Error: your target is not an instance of HTMLElement.`);const r=qw.get(n,this.name);r&&r.dispose(),this.element=n,this.options=this.defaults&&ab(this.defaults).length?((t,e,n,r)=>{const i={...n},s={...t.dataset},o={...e},a={},c="title";return sb(s).forEach((([t,e])=>{const n=r&&"string"==typeof t&&t.includes(r)?t.replace(r,"").replace(/[A-Z]/g,(t=>ob(t))):t;a[n]=ib(e)})),sb(i).forEach((([t,e])=>{i[t]=ib(e)})),sb(e).forEach((([e,n])=>{o[e]=e in i?i[e]:e in a?a[e]:e===c?Lw(t,c):n})),o})(n,this.defaults,e||{},"bs"):{},qw.set(n,this.name,this)}}const Ub=cb("close.bs.alert"),Fb=cb("closed.bs.alert"),Bb=t=>{const{element:e}=t;Vb(t),Zw(e,Fb),t.dispose(),e.remove()},Vb=(t,e)=>{const n=e?dw:fw,{dismiss:r,close:i}=t;r&&n(r,vw,i)};class jb extends Mb{get name(){return"Alert"}dispose(){Vb(this),super.dispose()}constructor(t){super(t),uw(this,"dismiss"),uw(this,"close",(()=>{const{element:t}=this;t&&Vw(t,"show")&&(Zw(t,Ub),Ub.defaultPrevented||(Bw(t,"show"),Vw(t,"fade")?nb(t,(()=>Bb(this))):Bb(this)))})),this.dismiss=Ob('[data-bs-dismiss="alert"]',this.element),Vb(this,!0)}}uw(jb,"selector",".alert"),uw(jb,"init",(t=>new jb(t))),uw(jb,"getInstance",(t=>Kw(t,"Alert")));const $b=(t,e)=>{(e?dw:fw)(t.element,vw,t.toggle)};class zb extends Mb{get name(){return"Button"}dispose(){$b(this),super.dispose()}constructor(t){super(t),uw(this,"isActive",!1),uw(this,"toggle",(t=>{t&&t.preventDefault();const{element:e,isActive:n}=this;!Vw(e,"disabled")&&!Lw(e,"disabled")&&((n?Bw:Fw)(e,"active"),Mw(e,"aria-pressed",n?"false":"true"),this.isActive=Vw(e,"active"))}));const{element:e}=this;this.isActive=Vw(e,"active"),Mw(e,"aria-pressed",String(!!this.isActive)),$b(this,!0)}}uw(zb,"selector",'[data-bs-toggle="button"]'),uw(zb,"init",(t=>new zb(t))),uw(zb,"getInstance",(t=>Kw(t,"Button")));const Hb=t=>{const e=["data-bs-target","data-bs-parent","data-bs-container","href"],n=Jw(t);return e.map((e=>{const r=Lw(t,e);return r?"data-bs-parent"===e?Nb(t,r):Ob(r,n):null})).filter((t=>t))[0]},qb={pause:"hover",keyboard:!1,touch:!0,interval:5e3},Kb=t=>Kw(t,"Carousel");let Wb=0,Gb=0,Qb=0;const Jb=cb("slide.bs.carousel"),Xb=cb("slid.bs.carousel"),Yb=t=>{const{index:e,direction:n,element:r,slides:i,options:s}=t;if(t.isAnimating){const o=hE(t),a="left"===n?"next":"prev",c="left"===n?"start":"end";Fw(i[e],"active"),Bw(i[e],`carousel-item-${a}`),Bw(i[e],`carousel-item-${c}`),Bw(i[o],"active"),Bw(i[o],`carousel-item-${c}`),Zw(r,Xb),mb(r,"data-bs-slide"),t.cycle&&!Jw(r).hidden&&s.interval&&!t.isPaused&&t.cycle()}};function Zb(){const t=Kb(this);t&&!t.isPaused&&!gb(this,"paused")&&Fw(this,"paused")}function tE(){const t=Kb(this);t&&t.isPaused&&!gb(this,"paused")&&t.cycle()}function eE(t){t.preventDefault();const e=Nb(this,'[data-bs-ride="carousel"]')||Hb(this),n=Kb(e);if(n&&!n.isAnimating){const t=+(Lw(this,"data-bs-slide-to")||0);this&&!Vw(this,"active")&&!Number.isNaN(t)&&n.to(t)}}function nE(t){t.preventDefault();const e=Nb(this,'[data-bs-ride="carousel"]')||Hb(this),n=Kb(e);if(n&&!n.isAnimating){const t=Lw(this,"data-bs-slide");"next"===t?n.next():"prev"===t&&n.prev()}}const rE=({code:t,target:e})=>{const n=Jw(e),[r]=[...Pb('[data-bs-ride="carousel"]',n)].filter((t=>Cb(t))),i=Kb(r);if(i&&!i.isAnimating&&!/textarea|input/i.test(e.nodeName)){const e=kb(r);t===(e?"ArrowRight":"ArrowLeft")?i.prev():t===(e?"ArrowLeft":"ArrowRight")&&i.next()}};function iE(t){const{target:e}=t,n=Kb(this);n&&n.isTouch&&(n.indicator&&!n.indicator.contains(e)||!n.controls.includes(e))&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())}function sE(t){const{target:e}=t,n=Kb(this);if(n&&!n.isAnimating&&!n.isTouch){const{controls:r,indicators:i}=n;[...r,...i].every((t=>t===e||t.contains(e)))||(Wb=t.pageX,this.contains(e)&&(n.isTouch=!0,uE(n,!0)))}}const oE=t=>{Gb=t.pageX},aE=t=>{var e;const{target:n}=t,r=Jw(n),i=[...Pb('[data-bs-ride="carousel"]',r)].map((t=>Kb(t))).find((t=>t.isTouch));if(i){const{element:s,index:o}=i,a=kb(s);Qb=t.pageX,i.isTouch=!1,uE(i),!(null!=(e=r.getSelection())&&e.toString().length)&&s.contains(n)&&Math.abs(Wb-Qb)>120&&(Gb<Wb?i.to(o+(a?-1:1)):Gb>Wb&&i.to(o+(a?1:-1))),Wb=0,Gb=0,Qb=0}},cE=(t,e)=>{const{indicators:n}=t;[...n].forEach((t=>Bw(t,"active"))),t.indicators[e]&&Fw(n[e],"active")},uE=(t,e)=>{const{element:n}=t,r=e?dw:fw;r(Jw(n),"pointermove",oE,ub),r(Jw(n),"pointerup",aE,ub)},lE=(t,e)=>{const{element:n,options:r,slides:i,controls:s,indicators:o}=t,{touch:a,pause:c,interval:u,keyboard:l}=r,h=e?dw:fw;c&&u&&(h(n,bw,Zb),h(n,Ew,tE)),a&&i.length>2&&(h(n,"pointerdown",sE,ub),h(n,"touchstart",iE,{passive:!1}),h(n,"dragstart",iE,{passive:!1})),s.length&&s.forEach((t=>{t&&h(t,vw,nE)})),o.length&&o.forEach((t=>{h(t,vw,eE)})),l&&h(Jw(n),"keydown",rE)},hE=t=>{const{slides:e,element:n}=t,r=Ob(".carousel-item.active",n);return zw(r)?[...e].indexOf(r):-1};class dE extends Mb{get name(){return"Carousel"}get defaults(){return qb}get isPaused(){return Vw(this.element,"paused")}get isAnimating(){return null!==Ob(".carousel-item-next,.carousel-item-prev",this.element)}cycle(){const{element:t,options:e,isPaused:n,index:r}=this;mb(t,"carousel"),n&&(mb(t,"paused"),Bw(t,"paused")),pb(t,(()=>{this.element&&!this.isPaused&&!this.isTouch&&Cb(t)&&this.to(r+1)}),e.interval,"carousel")}pause(){const{element:t,options:e}=this;!this.isPaused&&e.interval&&(Fw(t,"paused"),pb(t,(()=>{}),1,"paused"))}next(){this.isAnimating||this.to(this.index+1)}prev(){this.isAnimating||this.to(this.index-1)}to(t){const{element:e,slides:n,options:r}=this,i=hE(this),s=kb(e);let o=t;if(!this.isAnimating&&i!==o&&!gb(e,"data-bs-slide")){i<o||0===i&&o===n.length-1?this.direction=s?"right":"left":(i>o||i===n.length-1&&0===o)&&(this.direction=s?"left":"right");const{direction:t}=this;o<0?o=n.length-1:o>=n.length&&(o=0);const a="left"===t?"next":"prev",c="left"===t?"start":"end",u={relatedTarget:n[o],from:i,to:o,direction:t};Xw(Jb,u),Xw(Xb,u),Zw(e,Jb),Jb.defaultPrevented||(this.index=o,cE(this,o),eb(n[o])&&Vw(e,"slide")?pb(e,(()=>{Fw(n[o],`carousel-item-${a}`),lb(n[o]),Fw(n[o],`carousel-item-${c}`),Fw(n[i],`carousel-item-${c}`),nb(n[o],(()=>this.slides&&this.slides.length&&Yb(this)))}),0,"data-bs-slide"):(Fw(n[o],"active"),Bw(n[i],"active"),pb(e,(()=>{mb(e,"data-bs-slide"),e&&r.interval&&!this.isPaused&&this.cycle(),Zw(e,Xb)}),0,"data-bs-slide")))}}dispose(){const{isAnimating:t}=this,e={...this,isAnimating:t};lE(e),super.dispose(),e.isAnimating&&nb(e.slides[e.index],(()=>{Yb(e)}))}constructor(t,e){super(t,e);const{element:n}=this;this.direction=kb(n)?"right":"left",this.isTouch=!1,this.slides=Lb("carousel-item",n);const{slides:r}=this;if(r.length>=2){const t=hE(this),e=[...r].find((t=>xb(t,".carousel-item-next,.carousel-item-next")));this.index=t;const i=Jw(n);this.controls=[...Pb("[data-bs-slide]",n),...Pb(`[data-bs-slide][data-bs-target="#${n.id}"]`,i)].filter(((t,e,n)=>e===n.indexOf(t))),this.indicator=Ob(".carousel-indicators",n),this.indicators=[...this.indicator?Pb("[data-bs-slide-to]",this.indicator):[],...Pb(`[data-bs-slide-to][data-bs-target="#${n.id}"]`,i)].filter(((t,e,n)=>e===n.indexOf(t)));const{options:s}=this;this.options.interval=!0===s.interval?qb.interval:s.interval,e?this.index=[...r].indexOf(e):t<0&&(this.index=0,Fw(r[0],"active"),this.indicators.length&&cE(this,0)),this.indicators.length&&cE(this,this.index),lE(this,!0),s.interval&&this.cycle()}}}uw(dE,"selector",'[data-bs-ride="carousel"]'),uw(dE,"init",(t=>new dE(t))),uw(dE,"getInstance",Kb);const fE={parent:null},pE=t=>Kw(t,"Collapse"),gE=cb("show.bs.collapse"),mE=cb("shown.bs.collapse"),yE=cb("hide.bs.collapse"),vE=cb("hidden.bs.collapse"),wE=t=>{const{element:e,parent:n,triggers:r}=t;Zw(e,yE),yE.defaultPrevented||(pb(e,Pw,17),n&&pb(n,Pw,17),hb(e,{height:`${e.scrollHeight}px`}),Bw(e,"collapse"),Bw(e,"show"),Fw(e,"collapsing"),lb(e),hb(e,{height:"0px"}),nb(e,(()=>{mb(e),n&&mb(n),r.forEach((t=>Mw(t,"aria-expanded","false"))),Bw(e,"collapsing"),Fw(e,"collapse"),hb(e,{height:""}),Zw(e,vE)})))},bE=(t,e)=>{const n=e?dw:fw,{triggers:r}=t;r.length&&r.forEach((t=>n(t,vw,EE)))},EE=t=>{const{target:e}=t,n=e&&Nb(e,'[data-bs-toggle="collapse"]'),r=n&&Hb(n),i=r&&pE(r);i&&i.toggle(),n&&"A"===n.tagName&&t.preventDefault()};class TE extends Mb{get name(){return"Collapse"}get defaults(){return fE}toggle(){Vw(this.element,"show")?this.hide():this.show()}hide(){const{triggers:t,element:e}=this;gb(e)||(wE(this),t.length&&t.forEach((t=>Fw(t,"collapsed"))))}show(){const{element:t,parent:e,triggers:n}=this;let r,i;e&&(r=[...Pb(".collapse.show",e)].find((t=>pE(t))),i=r&&pE(r)),(!e||!gb(e))&&!gb(t)&&(i&&r!==t&&(wE(i),i.triggers.forEach((t=>{Fw(t,"collapsed")}))),(t=>{const{element:e,parent:n,triggers:r}=t;Zw(e,gE),gE.defaultPrevented||(pb(e,Pw,17),n&&pb(n,Pw,17),Fw(e,"collapsing"),Bw(e,"collapse"),hb(e,{height:`${e.scrollHeight}px`}),nb(e,(()=>{mb(e),n&&mb(n),r.forEach((t=>Mw(t,"aria-expanded","true"))),Bw(e,"collapsing"),Fw(e,"collapse"),Fw(e,"show"),hb(e,{height:""}),Zw(e,mE)})))})(this),n.length&&n.forEach((t=>Bw(t,"collapsed"))))}dispose(){bE(this),super.dispose()}constructor(t,e){super(t,e);const{element:n,options:r}=this,i=Jw(n);this.triggers=[...Pb('[data-bs-toggle="collapse"]',i)].filter((t=>Hb(t)===n)),this.parent=zw(r.parent)?r.parent:Ww(r.parent)?Hb(n)||Ob(r.parent,i):null,bE(this,!0)}}uw(TE,"selector",".collapse"),uw(TE,"init",(t=>new TE(t))),uw(TE,"getInstance",pE);const IE=["dropdown","dropup","dropstart","dropend"],_E=t=>{const e=Nb(t,"A");return"A"===t.tagName&&xw(t,"href")&&"#"===t.href.slice(-1)||e&&xw(e,"href")&&"#"===e.href.slice(-1)},[SE,AE,CE,kE]=IE,RE=`[data-bs-toggle="${SE}"]`,NE=t=>Kw(t,"Dropdown"),OE=[SE,AE],DE=[CE,kE],PE=["A","BUTTON"],LE={offset:5,display:"dynamic"},xE=cb(`show.bs.${SE}`),ME=cb(`shown.bs.${SE}`),UE=cb(`hide.bs.${SE}`),FE=cb(`hidden.bs.${SE}`),BE=cb(`updated.bs.${SE}`),VE=t=>{const{element:e,menu:n,parentElement:r,options:i}=t,{offset:s}=i;if("static"!==tb(n,"position")){const t=kb(e),i=Vw(n,"dropdown-menu-end");["margin","top","bottom","left","right"].forEach((t=>{const e={};e[t]="",hb(n,e)}));let o=IE.find((t=>Vw(r,t)))||SE;const a={dropdown:[s,0,0],dropup:[0,0,s],dropstart:t?[-1,0,0,s]:[-1,s,0],dropend:t?[-1,s,0]:[-1,0,0,s]},c={dropdown:{top:"100%"},dropup:{top:"auto",bottom:"100%"},dropstart:t?{left:"100%",right:"auto"}:{left:"auto",right:"100%"},dropend:t?{left:"auto",right:"100%"}:{left:"100%",right:"auto"},menuStart:t?{right:"0",left:"auto"}:{right:"auto",left:"0"},menuEnd:t?{right:"auto",left:"0"}:{right:"0",left:"auto"}},{offsetWidth:u,offsetHeight:l}=n,{clientWidth:h,clientHeight:d}=wb(e),{left:f,top:p,width:g,height:m}=yb(e),y=f-u-s<0,v=f+u+g+s>=h,w=p+l+s>=d,b=p+l+m+s>=d,E=p-l-s<0,T=(!t&&i||t&&!i)&&f+g-u<0,I=(t&&i||!t&&!i)&&f+u>=h;if(DE.includes(o)&&y&&v&&(o=SE),o===CE&&(t?v:y)&&(o=kE),o===kE&&(t?y:v)&&(o=CE),o===AE&&E&&!b&&(o=SE),o===SE&&b&&!E&&(o=AE),DE.includes(o)&&w&&Xw(c[o],{top:"auto",bottom:0}),OE.includes(o)&&(T||I)){let e={left:"auto",right:"auto"};!T&&I&&!t&&(e={left:"auto",right:0}),T&&!I&&t&&(e={left:0,right:"auto"}),e&&Xw(c[o],e)}const _=a[o];hb(n,{...c[o],margin:`${_.map((t=>t&&`${t}px`)).join(" ")}`}),OE.includes(o)&&i&&i&&hb(n,c[!t&&T||t&&I?"menuStart":"menuEnd"]),Zw(r,BE)}},jE=t=>{const{element:e,options:n}=t,r=t.open?dw:fw,i=Jw(e);r(i,vw,HE),r(i,"focus",HE),r(i,"keydown",KE),r(i,"keyup",WE),"dynamic"===n.display&&[Iw,Tw].forEach((t=>{r(Ab(e),t,GE,ub)}))},$E=(t,e)=>{(e?dw:fw)(t.element,vw,qE)},zE=t=>{const e=[...IE,"btn-group","input-group"].map((e=>Lb(`${e} show`,Jw(t)))).find((t=>t.length));if(e&&e.length)return[...e[0].children].find((t=>IE.some((e=>e===Lw(t,"data-bs-toggle")))))},HE=t=>{const{target:e,type:n}=t;if(e&&zw(e)){const r=zE(e),i=r&&NE(r);if(i){const{parentElement:s,menu:o}=i,a=s&&s.contains(e)&&("form"===e.tagName||null!==Nb(e,"form"));[vw,ww].includes(n)&&_E(e)&&t.preventDefault(),!a&&"focus"!==n&&e!==r&&e!==o&&i.hide()}}},qE=t=>{const{target:e}=t,n=e&&Nb(e,RE),r=n&&NE(n);r&&(t.stopPropagation(),r.toggle(),n&&_E(n)&&t.preventDefault())},KE=t=>{[_w,Sw].includes(t.code)&&t.preventDefault()};function WE(t){const{code:e}=t,n=zE(this),r=n&&NE(n),{activeElement:i}=n&&Jw(n);if(r&&i){const{menu:t,open:s}=r,o=(t=>[...t.children].map((t=>{if(t&&PE.includes(t.tagName))return t;const{firstElementChild:e}=t;return e&&PE.includes(e.tagName)?e:null})).filter((t=>t)))(t);if(o&&o.length&&[_w,Sw].includes(e)){let t=o.indexOf(i);i===n?t=0:e===Sw?t=t>1?t-1:0:e===_w&&(t=t<o.length-1?t+1:t),o[t]&&rb(o[t])}"Escape"===e&&s&&(r.toggle(),rb(n))}}function GE(){const t=zE(this),e=t&&NE(t);e&&e.open&&VE(e)}class QE extends Mb{get name(){return"Dropdown"}get defaults(){return LE}toggle(){this.open?this.hide():this.show()}show(){const{element:t,open:e,menu:n,parentElement:r}=this;if(!e){const i=zE(t),s=i&&NE(i);s&&s.hide(),[xE,ME,BE].forEach((e=>{e.relatedTarget=t})),Zw(r,xE),xE.defaultPrevented||(Fw(n,"show"),Fw(r,"show"),Mw(t,"aria-expanded","true"),VE(this),this.open=!e,rb(t),jE(this),Zw(r,ME))}}hide(){const{element:t,open:e,menu:n,parentElement:r}=this;e&&([UE,FE].forEach((e=>{e.relatedTarget=t})),Zw(r,UE),UE.defaultPrevented||(Bw(n,"show"),Bw(r,"show"),Mw(t,"aria-expanded","false"),this.open=!e,jE(this),Zw(r,FE)))}dispose(){this.open&&this.hide(),$E(this),super.dispose()}constructor(t,e){super(t,e);const{parentElement:n}=this.element,[r]=Lb("dropdown-menu",n);r&&(this.parentElement=n,this.menu=r,$E(this,!0))}}uw(QE,"selector",RE),uw(QE,"init",(t=>new QE(t))),uw(QE,"getInstance",NE);const JE="sticky-top",XE="position-sticky",YE=t=>[...Lb("fixed-top",t),...Lb("fixed-bottom",t),...Lb(JE,t),...Lb(XE,t),...Lb("is-fixed",t)],ZE=t=>{const{clientWidth:e}=wb(t),{innerWidth:n}=Ab(t);return Math.abs(n-e)},tT=(t,e)=>{const n=vb(t),r=parseInt(tb(n,"paddingRight"),10),i="hidden"===tb(n,"overflow")&&r?0:ZE(t),s=YE(n);e&&(hb(n,{overflow:"hidden",paddingRight:`${r+i}px`}),s.length&&s.forEach((t=>{const e=tb(t,"paddingRight");if(t.style.paddingRight=`${parseInt(e,10)+i}px`,[JE,XE].some((e=>Vw(t,e)))){const e=tb(t,"marginRight");t.style.marginRight=parseInt(e,10)-i+"px"}})))},eT=Yw({tagName:"div",className:"popup-container"}),nT=(t,e)=>{const n=$w(e)&&"BODY"===e.nodeName,r=$w(e)&&!n?e:eT,i=n?e:vb(t);$w(t)&&(r===eT&&i.append(eT),r.append(t))},rT=(t,e)=>{const n=$w(e)&&"BODY"===e.nodeName,r=$w(e)&&!n?e:eT;$w(t)&&(t.remove(),r===eT&&!eT.children.length&&eT.remove())},iT=(t,e)=>{const n=$w(e)&&"BODY"!==e.nodeName?e:eT;return $w(t)&&n.contains(t)},sT="modal-backdrop",oT="offcanvas-backdrop",aT=Yw("div"),cT=t=>Ob(".modal.show,.offcanvas.show",Jw(t)),uT=t=>{const e=t?sT:oT;[sT,oT].forEach((t=>{Bw(aT,t)})),Fw(aT,e)},lT=(t,e,n)=>{uT(n),nT(aT,vb(t)),e&&Fw(aT,"fade")},hT=()=>{Vw(aT,"show")||(Fw(aT,"show"),lb(aT))},dT=()=>{Bw(aT,"show")},fT=t=>{cT(t)||(Bw(aT,"fade"),rT(aT,vb(t)),(t=>{const e=vb(t);hb(e,{paddingRight:"",overflow:""});const n=YE(e);n.length&&n.forEach((t=>{hb(t,{paddingRight:"",marginRight:""})}))})(t))},pT=t=>zw(t)&&"hidden"!==tb(t,"visibility")&&null!==t.offsetParent,gT={backdrop:!0,keyboard:!0},mT=t=>Kw(t,"Modal"),yT=cb("show.bs.modal"),vT=cb("shown.bs.modal"),wT=cb("hide.bs.modal"),bT=cb("hidden.bs.modal"),ET=t=>{const{element:e}=t,n=ZE(e),{clientHeight:r,scrollHeight:i}=wb(e),{clientHeight:s,scrollHeight:o}=e,a=s!==o;if(!a&&n){const t={};t[kb(e)?"paddingLeft":"paddingRight"]=`${n}px`,hb(e,t)}tT(e,a||r!==i)},TT=(t,e)=>{const n=e?dw:fw,{element:r,update:i}=t;n(r,vw,NT),n(Ab(r),Tw,i,ub),n(Jw(r),"keydown",RT)},IT=(t,e)=>{const n=e?dw:fw,{triggers:r}=t;r.length&&r.forEach((t=>n(t,vw,kT)))},_T=t=>{const{triggers:e,element:n,relatedTarget:r}=t;fT(n),hb(n,{paddingRight:"",display:""}),TT(t);const i=yT.relatedTarget||e.find(pT);i&&rb(i),bT.relatedTarget=r,Zw(n,bT)},ST=t=>{const{element:e,relatedTarget:n}=t;rb(e),TT(t,!0),vT.relatedTarget=n,Zw(e,vT)},AT=t=>{const{element:e,hasFade:n}=t;hb(e,{display:"block"}),ET(t),cT(e)||hb(vb(e),{overflow:"hidden"}),Fw(e,"show"),Uw(e,"aria-hidden"),Mw(e,"aria-modal","true"),n?nb(e,(()=>ST(t))):ST(t)},CT=t=>{const{element:e,options:n,hasFade:r}=t;n.backdrop&&r&&Vw(aT,"show")&&!cT(e)?(dT(),nb(aT,(()=>_T(t)))):_T(t)},kT=t=>{const{target:e}=t,n=e&&Nb(e,'[data-bs-toggle="modal"]'),r=n&&Hb(n),i=r&&mT(r);i&&(n&&"A"===n.tagName&&t.preventDefault(),i.relatedTarget=n,i.toggle())},RT=({code:t,target:e})=>{const n=Ob(".modal.show",Jw(e)),r=n&&mT(n);if(r){const{options:e}=r;e.keyboard&&"Escape"===t&&Vw(n,"show")&&(r.relatedTarget=null,r.hide())}};function NT(t){var e,n;const r=mT(this);if(r&&!gb(this)){const{options:i,isStatic:s,modalDialog:o}=r,{backdrop:a}=i,{target:c}=t,u=null==(n=null==(e=Jw(this))?void 0:e.getSelection())?void 0:n.toString().length,l=o.contains(c),h=c&&Nb(c,'[data-bs-dismiss="modal"]');s&&!l?pb(this,(()=>{Fw(this,"modal-static"),nb(o,(()=>OT(r)))}),17):(h||!u&&!s&&!l&&a)&&(r.relatedTarget=h||null,r.hide(),t.preventDefault())}}const OT=t=>{const{element:e,modalDialog:n}=t,r=(eb(n)||0)+17;Bw(e,"modal-static"),pb(e,(()=>mb(e)),r)};class DT extends Mb{get name(){return"Modal"}get defaults(){return gT}toggle(){Vw(this.element,"show")?this.hide():this.show()}show(){const{element:t,options:e,hasFade:n,relatedTarget:r}=this,{backdrop:i}=e;let s=0;if(!Vw(t,"show")&&(yT.relatedTarget=r||void 0,Zw(t,yT),!yT.defaultPrevented)){const e=cT(t);if(e&&e!==t){const t=mT(e)||Kw(e,"Offcanvas");t&&t.hide()}i?(iT(aT)?uT(!0):lT(t,n,!0),s=eb(aT),hT(),setTimeout((()=>AT(this)),s)):(AT(this),e&&Vw(aT,"show")&&dT())}}hide(){const{element:t,hasFade:e,relatedTarget:n}=this;Vw(t,"show")&&(wT.relatedTarget=n||void 0,Zw(t,wT),wT.defaultPrevented||(Bw(t,"show"),Mw(t,"aria-hidden","true"),Uw(t,"aria-modal"),e?nb(t,(()=>CT(this))):CT(this)))}dispose(){const t={...this},{element:e,modalDialog:n}=t,r=()=>setTimeout((()=>super.dispose()),17);IT(t),this.hide(),Vw(e,"fade")?nb(n,r):r()}constructor(t,e){super(t,e),uw(this,"update",(()=>{Vw(this.element,"show")&&ET(this)}));const{element:n}=this,r=Ob(".modal-dialog",n);r&&(this.modalDialog=r,this.triggers=[...Pb('[data-bs-toggle="modal"]',Jw(n))].filter((t=>Hb(t)===n)),this.isStatic="static"===this.options.backdrop,this.hasFade=Vw(n,"fade"),this.relatedTarget=null,IT(this,!0))}}uw(DT,"selector",".modal"),uw(DT,"init",(t=>new DT(t))),uw(DT,"getInstance",mT);const PT={backdrop:!0,keyboard:!0,scroll:!1},LT=t=>Kw(t,"Offcanvas"),xT=cb("show.bs.offcanvas"),MT=cb("shown.bs.offcanvas"),UT=cb("hide.bs.offcanvas"),FT=cb("hidden.bs.offcanvas"),BT=(t,e)=>{const n=e?dw:fw;t.triggers.forEach((t=>n(t,vw,$T)))},VT=(t,e)=>{const n=e?dw:fw,r=Jw(t.element);n(r,"keydown",HT),n(r,vw,zT)},jT=t=>{const{element:e,options:n}=t;n.scroll||((t=>{const{element:e}=t,{clientHeight:n,scrollHeight:r}=wb(e);tT(e,n!==r)})(t),hb(vb(e),{overflow:"hidden"})),Fw(e,"offcanvas-toggling"),Fw(e,"show"),hb(e,{visibility:"visible"}),nb(e,(()=>qT(t)))},$T=t=>{const e=Nb(t.target,'[data-bs-toggle="offcanvas"]'),n=e&&Hb(e),r=n&&LT(n);r&&(r.relatedTarget=e,r.toggle(),e&&"A"===e.tagName&&t.preventDefault())},zT=t=>{const{target:e}=t,n=Ob(".offcanvas.show",Jw(e)),r=Ob('[data-bs-dismiss="offcanvas"]',n),i=n&&LT(n);if(i){const{options:s,triggers:o}=i,{backdrop:a}=s,c=Nb(e,'[data-bs-toggle="offcanvas"]'),u=Jw(n).getSelection();(!aT.contains(e)||"static"!==a)&&(!(u&&u.toString().length)&&(!n.contains(e)&&a&&(!c||o.includes(e))||r&&r.contains(e))&&(i.relatedTarget=r&&r.contains(e)?r:null,i.hide()),c&&"A"===c.tagName&&t.preventDefault())}},HT=({code:t,target:e})=>{const n=Ob(".offcanvas.show",Jw(e)),r=n&&LT(n);r&&r.options.keyboard&&"Escape"===t&&(r.relatedTarget=null,r.hide())},qT=t=>{const{element:e}=t;Bw(e,"offcanvas-toggling"),Uw(e,"aria-hidden"),Mw(e,"aria-modal","true"),Mw(e,"role","dialog"),Zw(e,MT),VT(t,!0),rb(e)},KT=t=>{const{element:e,triggers:n}=t;Mw(e,"aria-hidden","true"),Uw(e,"aria-modal"),Uw(e,"role"),hb(e,{visibility:""});const r=xT.relatedTarget||n.find(pT);r&&rb(r),fT(e),Zw(e,FT),Bw(e,"offcanvas-toggling"),cT(e)||VT(t)};class WT extends Mb{get name(){return"Offcanvas"}get defaults(){return PT}toggle(){Vw(this.element,"show")?this.hide():this.show()}show(){const{element:t,options:e,relatedTarget:n}=this;let r=0;if(!Vw(t,"show")&&(xT.relatedTarget=n||void 0,MT.relatedTarget=n||void 0,Zw(t,xT),!xT.defaultPrevented)){const n=cT(t);if(n&&n!==t){const t=LT(n)||Kw(n,"Modal");t&&t.hide()}e.backdrop?(iT(aT)?uT():lT(t,!0),r=eb(aT),hT(),setTimeout((()=>jT(this)),r)):(jT(this),n&&Vw(aT,"show")&&dT())}}hide(){const{element:t,relatedTarget:e}=this;Vw(t,"show")&&(UT.relatedTarget=e||void 0,FT.relatedTarget=e||void 0,Zw(t,UT),UT.defaultPrevented||(Fw(t,"offcanvas-toggling"),Bw(t,"show"),(t=>{const{element:e,options:n}=t,r=cT(e);e.blur(),!r&&n.backdrop&&Vw(aT,"show")?(dT(),nb(aT,(()=>KT(t)))):KT(t)})(this)))}dispose(){const t={...this},{element:e,options:n}=t,r=n.backdrop?eb(aT):0,i=()=>setTimeout((()=>super.dispose()),r+17);BT(t),this.hide(),Vw(e,"show")?nb(e,i):i()}constructor(t,e){super(t,e);const{element:n}=this;this.triggers=[...Pb('[data-bs-toggle="offcanvas"]',Jw(n))].filter((t=>Hb(t)===n)),this.relatedTarget=null,BT(this,!0)}}uw(WT,"selector",".offcanvas"),uw(WT,"init",(t=>new WT(t))),uw(WT,"getInstance",LT);const GT=t=>{const e="tooltip"===t;return`<div class="${t}" role="tooltip">${(e?"":`<h3 class="${t}-header"></h3>`)+`<div class="${t}-arrow"></div>`+`<div class="${e?`${t}-inner`:`${t}-body`}"></div>`}</div>`},QT={top:"top",bottom:"bottom",left:"start",right:"end"},JT=t=>{const e=/\b(top|bottom|start|end)+/,{element:n,tooltip:r,container:i,options:s,arrow:o}=t;if(r){const a={...QT},c=kb(n);hb(r,{top:"",left:"",right:"",bottom:""});const u="Popover"===t.name,{offsetWidth:l,offsetHeight:h}=r,{clientWidth:d,clientHeight:f,offsetWidth:p}=wb(n);let{placement:g}=s;const{clientWidth:m,offsetWidth:y}=i,v="fixed"===tb(i,"position"),w=Math.abs(v?m-y:d-p),b=c&&v?w:0,E=d-(c?0:w)-1,{width:T,height:I,left:_,right:S,top:A}=yb(n,!0),{x:C,y:k}={x:_,y:A};hb(o,{top:"",left:"",right:"",bottom:""});let R=0,N="",O=0,D="",P="",L="",x="";const M=o.offsetWidth||0,U=o.offsetHeight||0,F=M/2;let B=A-h-U<0,V=A+h+I+U>=f,j=_-l-M<b,$=_+l+T+M>=E;const z=["left","right"],H=["top","bottom"];B=z.includes(g)?A+I/2-h/2-U<0:B,V=z.includes(g)?A+h/2+I/2+U>=f:V,j=H.includes(g)?_+T/2-l/2<b:j,$=H.includes(g)?_+l/2+T/2>=E:$,g=z.includes(g)&&j&&$?"top":g,g="top"===g&&B?"bottom":g,g="bottom"===g&&V?"top":g,g="left"===g&&j?"right":g,g="right"===g&&$?"left":g,r.className.includes(g)||(r.className=r.className.replace(e,a[g])),z.includes(g)?(O="left"===g?C-l-(u?M:0):C+T+(u?M:0),B&&V?(R=0,N=0,P=A+I/2-U/2):B?(R=k,N="",P=I/2-M):V?(R=k-h+I,N="",P=h-I/2-M):(R=k-h/2+I/2,P=h/2-U/2)):H.includes(g)&&(R="top"===g?k-h-(u?U:0):k+I+(u?U:0),j?(O=0,L=C+T/2-F):$?(O="auto",D=0,x=T/2+E-S-F):(O=C-l/2+T/2,L=l/2-F)),hb(r,{top:`${R}px`,bottom:""===N?"":`${N}px`,left:"auto"===O?O:`${O}px`,right:""!==D?`${D}px`:""}),zw(o)&&(""!==P&&(o.style.top=`${P}px`),""!==L?o.style.left=`${L}px`:""!==x&&(o.style.right=`${x}px`));const q=cb(`updated.bs.${ob(t.name)}`);Zw(n,q)}},XT={template:GT("tooltip"),title:"",customClass:"",trigger:"hover focus",placement:"top",sanitizeFn:void 0,animation:!0,delay:200,container:document.body,content:"",dismissible:!1,btnClose:""},YT=(t,e,n)=>{if(Ww(e)&&e.length){let r=e.trim();(t=>"function"==typeof t||!1)(n)&&(r=n(r));const i=(new DOMParser).parseFromString(r,"text/html");t.append(...i.body.childNodes)}else zw(e)?t.append(e):((t=>jw(t)&&"NodeList"===t.constructor.name||!1)(e)||(t=>Array.isArray(t)||!1)(e)&&e.every($w))&&t.append(...e)};let ZT=t=>Kw(t,"Tooltip");const tI=t=>{const{tooltip:e,container:n,offsetParent:r}=t;return e&&iT(e,n===r?n:r)},eI=(t,e)=>{const n=e?dw:fw,{element:r}=t;n(Jw(r),"touchstart",t.handleTouch,ub),[Iw,Tw].forEach((e=>{n(Ab(r),e,t.update,ub)}))},nI=t=>{const{element:e}=t,n=cb(`shown.bs.${ob(t.name)}`);eI(t,!0),Zw(e,n),mb(e,"in")},rI=t=>{const{element:e}=t,n=cb(`hidden.bs.${ob(t.name)}`);eI(t),(t=>{const{element:e,tooltip:n,container:r,offsetParent:i}=t;Uw(e,"aria-describedby"),rT(n,r===i?r:i)})(t),Zw(e,n),mb(e,"out")},iI=(t,e)=>{const n=e?dw:fw,{element:r,options:i,btn:s}=t,{trigger:o}=i,a=!("Tooltip"===t.name||!i.dismissible);o.includes("manual")||(t.enabled=!!e,o.split(" ").forEach((e=>{"hover"===e?(n(r,ww,t.handleShow),n(r,bw,t.handleShow),a||(n(r,Ew,t.handleHide),n(Jw(r),"touchstart",t.handleTouch,ub))):e===vw?n(r,e,a?t.handleShow:t.toggle):"focus"===e&&(n(r,mw,t.handleShow),a||n(r,yw,t.handleHide),Ow&&n(r,vw,t.handleFocus)),a&&s&&n(s,vw,t.handleHide)})))},sI=(t,e)=>{const n=e?dw:fw,{element:r,container:i,offsetParent:s}=t,{offsetHeight:o,scrollHeight:a}=i,c=Nb(r,".modal"),u=Nb(r,".offcanvas"),l=Ab(r),h=i===s&&o!==a?i:l;n(h,Tw,t.update,ub),n(h,Iw,t.update,ub),c&&n(c,"hide.bs.modal",t.handleHide),u&&n(u,"hide.bs.offcanvas",t.handleHide)},oI=(t,e)=>{const n=["data-original-title","title"],{element:r}=t;Mw(r,n[e?0:1],e||Lw(r,n[0])||""),Uw(r,n[e?1:0])};class aI extends Mb{get name(){return"Tooltip"}get defaults(){return XT}show(){const{options:t,tooltip:e,element:n,container:r,offsetParent:i,id:s}=this,{animation:o}=t,a=gb(n,"out"),c=r===i?r:i;mb(n,"out"),e&&!a&&!tI(this)&&pb(n,(()=>{const t=cb(`show.bs.${ob(this.name)}`);Zw(n,t),t.defaultPrevented||(nT(e,c),Mw(n,"aria-describedby",`#${s}`),this.update(),sI(this,!0),Vw(e,"show")||Fw(e,"show"),o?nb(e,(()=>nI(this))):nI(this))}),17,"in")}hide(){const{options:t,tooltip:e,element:n}=this,{animation:r,delay:i}=t;mb(n,"in"),e&&tI(this)&&pb(n,(()=>{const t=cb(`hide.bs.${ob(this.name)}`);Zw(n,t),t.defaultPrevented||(this.update(),Bw(e,"show"),sI(this),r?nb(e,(()=>rI(this))):rI(this))}),i+17,"out")}enable(){const{enabled:t}=this;t||(iI(this,!0),this.enabled=!t)}disable(){const{tooltip:t,options:e,enabled:n}=this,{animation:r}=e;n&&(t&&tI(this)&&r?(this.hide(),nb(t,(()=>iI(this)))):iI(this),this.enabled=!n)}toggleEnabled(){this.enabled?this.disable():this.enable()}dispose(){const{tooltip:t,options:e}=this,n={...this,name:this.name},r=()=>setTimeout((()=>((t,e)=>{const{element:n}=t;iI(t),xw(n,"data-original-title")&&"Tooltip"===t.name&&oI(t),e&&e()})(n,(()=>super.dispose()))),17);e.animation&&tI(n)?(this.options.delay=0,this.hide(),nb(t,r)):r()}constructor(t,e){super(t,e),uw(this,"handleFocus",(()=>rb(this.element))),uw(this,"handleShow",(()=>this.show())),uw(this,"handleHide",(()=>this.hide())),uw(this,"update",(()=>{JT(this)})),uw(this,"toggle",(()=>{const{tooltip:t}=this;t&&!tI(this)?this.show():this.hide()})),uw(this,"handleTouch",(({target:t})=>{const{tooltip:e,element:n}=this;e&&e.contains(t)||t===n||t&&n.contains(t)||this.hide()}));const{element:n}=this,r="Tooltip"===this.name,i=r?"tooltip":"popover",s=r?"Tooltip":"Popover";ZT=t=>Kw(t,s),this.enabled=!0,this.id=`${i}-${Sb(n,i)}`;const{options:o}=this;!o.title&&r||!r&&!o.content||(Xw(XT,{titleAttr:""}),xw(n,"title")&&r&&"string"==typeof o.title&&oI(this,o.title),this.container=(t=>{const e=["HTML","BODY"],n=[];let{parentNode:r}=t;for(;r&&!e.includes(r.nodeName);)r=Eb(r),bb(r)||Rb(r)||n.push(r);return n.find(((t,e)=>"relative"!==tb(t,"position")&&n.slice(e+1).every((t=>"static"===tb(t,"position")))?t:null))||Jw(t).body})(n),this.offsetParent=["sticky","fixed"].some((t=>tb(this.container,"position")===t))?this.container:Jw(this.element).body,(t=>{const e="Tooltip"===t.name,{id:n,element:r,options:i}=t,{title:s,placement:o,template:a,animation:c,customClass:u,sanitizeFn:l,dismissible:h,content:d,btnClose:f}=i,p=e?"tooltip":"popover",g={...QT};let m=[],y=[];kb(r)&&(g.left="end",g.right="start");const v=`bs-${p}-${g[o]}`;let w;if(zw(a))w=a;else{const t=Yw("div");YT(t,a,l),w=t.firstChild}t.tooltip=zw(w)?w.cloneNode(!0):void 0;const{tooltip:b}=t;if(b){Mw(b,"id",n),Mw(b,"role","tooltip");const r=e?"tooltip-inner":"popover-body",i=e?null:Ob(".popover-header",b),o=Ob(`.${r}`,b);t.arrow=Ob(`.${p}-arrow`,b);const{arrow:a}=t;if(zw(s))m=[s.cloneNode(!0)];else{const t=Yw("div");YT(t,s,l),m=[...t.childNodes]}if(zw(d))y=[d.cloneNode(!0)];else{const t=Yw("div");YT(t,d,l),y=[...t.childNodes]}if(h)if(s)if(zw(f))m=[...m,f.cloneNode(!0)];else{const t=Yw("div");YT(t,f,l),m=[...m,t.firstChild]}else if(i&&i.remove(),zw(f))y=[...y,f.cloneNode(!0)];else{const t=Yw("div");YT(t,f,l),y=[...y,t.firstChild]}e?s&&o&&YT(o,s,l):(s&&i&&YT(i,m,l),d&&o&&YT(o,y,l),t.btn=Ob(".btn-close",b)||void 0),Fw(b,"position-fixed"),Fw(a,"position-absolute"),Vw(b,p)||Fw(b,p),c&&!Vw(b,"fade")&&Fw(b,"fade"),u&&!Vw(b,u)&&Fw(b,u),Vw(b,v)||Fw(b,v)}})(this),iI(this,!0))}}uw(aI,"selector",'[data-bs-toggle="tooltip"],[data-tip="tooltip"]'),uw(aI,"init",(t=>new aI(t))),uw(aI,"getInstance",ZT),uw(aI,"styleTip",JT);const cI=Xw({},XT,{template:GT("popover"),content:"",dismissible:!1,btnClose:'<button class="btn-close" aria-label="Close"></button>'});class uI extends aI{get name(){return"Popover"}get defaults(){return cI}constructor(t,e){super(t,e),uw(this,"show",(()=>{super.show();const{options:t,btn:e}=this;t.dismissible&&e&&setTimeout((()=>rb(e)),17)}))}}uw(uI,"selector",'[data-bs-toggle="popover"],[data-tip="popover"]'),uw(uI,"init",(t=>new uI(t))),uw(uI,"getInstance",(t=>Kw(t,"Popover"))),uw(uI,"styleTip",JT);const lI={offset:10,target:null},hI=cb("activate.bs.scrollspy"),dI=t=>zw(t)?t.scrollHeight:wb(t).scrollHeight,fI=({element:t,scrollTarget:e})=>Gw(e)?e.innerHeight:yb(t).height,pI=t=>{[...Db("A",t)].forEach((t=>{Vw(t,"active")&&Bw(t,"active")}))},gI=(t,e)=>{const{target:n,element:r}=t;zw(n)&&pI(n),t.activeItem=e,Fw(e,"active");const i=[];let s=e;for(;s!==vb(r);)s=s.parentElement,(Vw(s,"nav")||Vw(s,"dropdown-menu"))&&i.push(s);i.forEach((t=>{const e=t.previousElementSibling;e&&!Vw(e,"active")&&Fw(e,"active")})),hI.relatedTarget=e,Zw(r,hI)},mI=(t,e)=>{(e?dw:fw)(t.scrollTarget,Iw,t.refresh,ub)};class yI extends Mb{get name(){return"ScrollSpy"}get defaults(){return lI}dispose(){mI(this),super.dispose()}constructor(t,e){super(t,e),uw(this,"refresh",(()=>{const{target:t}=this;if(zw(t)&&t.offsetHeight>0){(t=>{const{target:e,scrollTarget:n,options:r,itemsLength:i,scrollHeight:s,element:o}=t,{offset:a}=r,c=Gw(n),u=e&&Db("A",e),l=n?dI(n):s;if(t.scrollTop=c?n.scrollY:n.scrollTop,u&&(l!==s||i!==u.length)){let e,n,r;t.items=[],t.offsets=[],t.scrollHeight=l,t.maxScroll=t.scrollHeight-fI(t),[...u].forEach((i=>{e=Lw(i,"href"),n=e&&"#"===e.charAt(0)&&"#"!==e.slice(-1)&&Ob(e,Jw(o)),n&&(t.items.push(i),r=yb(n),t.offsets.push((c?r.top+t.scrollTop:n.offsetTop)-a))})),t.itemsLength=t.items.length}})(this);const{scrollTop:e,maxScroll:n,itemsLength:r,items:i,activeItem:s}=this;if(e>=n){const t=i[r-1];return void(s!==t&&gI(this,t))}const{offsets:o}=this;if(s&&e<o[0]&&o[0]>0)return this.activeItem=null,void(t&&pI(t));i.forEach(((t,n)=>{s!==t&&e>=o[n]&&(typeof o[n+1]>"u"||e<o[n+1])&&gI(this,t)}))}}));const{element:n,options:r}=this;this.target=Ob(r.target,Jw(n)),this.target&&(this.scrollTarget=n.clientHeight<n.scrollHeight?n:Ab(n),this.scrollHeight=dI(this.scrollTarget),mI(this,!0),this.refresh())}}uw(yI,"selector",'[data-bs-spy="scroll"]'),uw(yI,"init",(t=>new yI(t))),uw(yI,"getInstance",(t=>Kw(t,"ScrollSpy")));const vI=t=>Kw(t,"Tab"),wI=cb("show.bs.tab"),bI=cb("shown.bs.tab"),EI=cb("hide.bs.tab"),TI=cb("hidden.bs.tab"),II=new Map,_I=t=>{const{tabContent:e,nav:n}=t;e&&Vw(e,"collapsing")&&(e.style.height="",Bw(e,"collapsing")),n&&mb(n)},SI=t=>{const{element:e,tabContent:n,content:r,nav:i}=t,{tab:s}=zw(i)&&II.get(i)||{tab:null};if(n&&r&&Vw(r,"fade")){const{currentHeight:r,nextHeight:i}=II.get(e)||{currentHeight:0,nextHeight:0};r===i?_I(t):setTimeout((()=>{n.style.height=`${i}px`,lb(n),nb(n,(()=>_I(t)))}),50)}else i&&mb(i);bI.relatedTarget=s,Zw(e,bI)},AI=t=>{const{element:e,content:n,tabContent:r,nav:i}=t,{tab:s,content:o}=i&&II.get(i)||{tab:null,content:null};let a=0;if(r&&n&&Vw(n,"fade")&&([o,n].forEach((t=>{zw(t)&&Fw(t,"overflow-hidden")})),a=zw(o)?o.scrollHeight:0),wI.relatedTarget=s,TI.relatedTarget=e,Zw(e,wI),!wI.defaultPrevented){if(n&&Fw(n,"active"),o&&Bw(o,"active"),r&&n&&Vw(n,"fade")){const t=n.scrollHeight;II.set(e,{currentHeight:a,nextHeight:t,tab:null,content:null}),Fw(r,"collapsing"),r.style.height=`${a}px`,lb(r),[o,n].forEach((t=>{t&&Bw(t,"overflow-hidden")}))}n&&n&&Vw(n,"fade")?setTimeout((()=>{Fw(n,"show"),nb(n,(()=>{SI(t)}))}),1):(n&&Fw(n,"show"),SI(t)),s&&Zw(s,TI)}},CI=t=>{const{nav:e}=t;if(!zw(e))return{tab:null,content:null};const n=Lb("active",e);let r=null;1!==n.length||IE.some((t=>Vw(n[0].parentElement,t)))?n.length>1&&(r=n[n.length-1]):[r]=n;return{tab:r,content:zw(r)?Hb(r):null}},kI=t=>{if(!zw(t))return null;const e=Nb(t,`.${IE.join(",.")}`);return e?Ob(`.${IE[0]}-toggle`,e):null},RI=(t,e)=>{(e?dw:fw)(t.element,vw,NI)},NI=t=>{const e=vI(t.target);e&&(t.preventDefault(),e.show())};class OI extends Mb{get name(){return"Tab"}show(){const{element:t,content:e,nav:n,dropdown:r}=this;if(!(n&&gb(n)||Vw(t,"active"))){const{tab:i,content:s}=CI(this);if(n&&II.set(n,{tab:i,content:s,currentHeight:0,nextHeight:0}),EI.relatedTarget=t,zw(i)&&(Zw(i,EI),!EI.defaultPrevented)){Fw(t,"active"),Mw(t,"aria-selected","true");const o=zw(i)&&kI(i);if(o&&Vw(o,"active")&&Bw(o,"active"),n){const t=()=>{i&&(Bw(i,"active"),Mw(i,"aria-selected","false")),r&&!Vw(r,"active")&&Fw(r,"active")};s&&(Vw(s,"fade")||e&&Vw(e,"fade"))?pb(n,t,1):t()}s&&(Bw(s,"show"),Vw(s,"fade")?nb(s,(()=>AI(this))):AI(this))}}}dispose(){RI(this),super.dispose()}constructor(t){super(t);const{element:e}=this,n=Hb(e);if(n){const t=Nb(e,".nav"),r=Nb(n,".tab-content");this.nav=t,this.content=n,this.tabContent=r,this.dropdown=kI(e);const{tab:i}=CI(this);if(t&&!i){const n=Ob('[data-bs-toggle="tab"]',t),r=n&&Hb(n);r&&(Fw(n,"active"),Fw(r,"show"),Fw(r,"active"),Mw(e,"aria-selected","true"))}RI(this,!0)}}}uw(OI,"selector",'[data-bs-toggle="tab"]'),uw(OI,"init",(t=>new OI(t))),uw(OI,"getInstance",vI);const DI={animation:!0,autohide:!0,delay:5e3},PI=t=>Kw(t,"Toast"),LI=cb("show.bs.toast"),xI=cb("shown.bs.toast"),MI=cb("hide.bs.toast"),UI=cb("hidden.bs.toast"),FI=t=>{const{element:e,options:n}=t;Bw(e,"showing"),mb(e,"showing"),Zw(e,xI),n.autohide&&pb(e,(()=>t.hide()),n.delay,"toast")},BI=t=>{const{element:e}=t;Bw(e,"showing"),Bw(e,"show"),Fw(e,"hide"),mb(e,"toast"),Zw(e,UI)},VI=(t,e)=>{const n=e?dw:fw,{element:r,triggers:i,dismiss:s,options:o,hide:a}=t;s&&n(s,vw,a),o.autohide&&[mw,yw,bw,Ew].forEach((t=>n(r,t,$I))),i.length&&i.forEach((t=>n(t,vw,jI)))},jI=t=>{const{target:e}=t,n=e&&Nb(e,'[data-bs-toggle="toast"]'),r=n&&Hb(n),i=r&&PI(r);i&&(n&&"A"===n.tagName&&t.preventDefault(),i.relatedTarget=n,i.show())},$I=t=>{const e=t.target,n=PI(e),{type:r,relatedTarget:i}=t;n&&e!==i&&!e.contains(i)&&([bw,mw].includes(r)?mb(e,"toast"):pb(e,(()=>n.hide()),n.options.delay,"toast"))};class zI extends Mb{get name(){return"Toast"}get defaults(){return DI}get isShown(){return Vw(this.element,"show")}dispose(){const{element:t,isShown:e}=this;var n;e&&Bw(t,"show"),mb((n=this).element,"toast"),VI(n),super.dispose()}constructor(t,e){super(t,e),uw(this,"show",(()=>{const{element:t,isShown:e}=this;t&&!e&&(Zw(t,LI),LI.defaultPrevented||(t=>{const{element:e,options:n}=t;pb(e,(()=>{Bw(e,"hide"),lb(e),Fw(e,"show"),Fw(e,"showing"),n.animation?nb(e,(()=>FI(t))):FI(t)}),17,"showing")})(this))})),uw(this,"hide",(()=>{const{element:t,isShown:e}=this;t&&e&&(Zw(t,MI),MI.defaultPrevented||(t=>{const{element:e,options:n}=t;Fw(e,"showing"),n.animation?(lb(e),nb(e,(()=>BI(t)))):BI(t)})(this))}));const{element:n,options:r}=this;r.animation&&!Vw(n,"fade")?Fw(n,"fade"):!r.animation&&Vw(n,"fade")&&Bw(n,"fade"),this.dismiss=Ob('[data-bs-dismiss="toast"]',n),this.triggers=[...Pb('[data-bs-toggle="toast"]',Jw(n))].filter((t=>Hb(t)===n)),VI(this,!0)}}uw(zI,"selector",".toast"),uw(zI,"init",(t=>new zI(t))),uw(zI,"getInstance",PI);const HI=new Map;[jb,zb,dE,TE,QE,DT,WT,uI,yI,OI,zI,aI].forEach((t=>HI.set(t.prototype.name,t)));const qI=t=>{const e=t&&t.nodeName?t:document,n=[...Db("*",e)];HI.forEach((t=>{const{init:e,selector:r}=t;((t,e)=>{[...e].forEach((e=>t(e)))})(e,n.filter((t=>xb(t,r))))}))};document.body?qI():dw(document,"DOMContentLoaded",(()=>qI()),{once:!0});const KI=document.querySelector(".js-form"),WI=document.querySelector(".js-box"),GI=document.querySelector(".js-input");KI.addEventListener("submit",(function(t){t.preventDefault(),aw(rw,GI.value),(e=GI.value,Qe.get(`https://api.narutodb.xyz/character/search?name=${e}`)).then((t=>function(t){const e=t.images[1].indexOf(".png"),n=`\n    <img src="${t.images[1].slice(0,e+4)}" alt="" width="300"  />\n        <h1>${t.name}</h1>`;WI.innerHTML=n}(t.data)));var e}));
//# sourceMappingURL=index.4d9a1277.js.map
