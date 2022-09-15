import{u as e,a as t,b as a,c as n,d as l,e as o,f as r,g as s}from"./use-key-composition.b324ef3a.js";import{r as i,m as u,n as c,s as d,d as f,b as v,p as g,q as p,h,v as m,x as w,g as y}from"./index.fa604b75.js";const k={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},x={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},b=Object.keys(x);b.forEach((e=>{x[e].regex=new RegExp(x[e].pattern)}));const M=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+b.join("")+"])|(.)","g"),S=/[.*+?^${}()|[\]\\]/g,C=String.fromCharCode(1);function R(e,t,a,n){let l,o,r,s;const f=i(null),v=i(function(){if(p(),!0===f.value){const t=w(y(e.modelValue));return!1!==e.fillMask?b(t):t}return e.modelValue}());function g(e){if(e<l.length)return l.slice(-e);let t="",a=l;const n=a.indexOf(C);if(n>-1){for(let n=e-a.length;n>0;n--)t+=C;a=a.slice(0,n)+t+a.slice(n)}return a}function p(){if(f.value=void 0!==e.mask&&e.mask.length>0&&(!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)),!1===f.value)return s=void 0,l="",void(o="");const t=void 0===k[e.mask]?e.mask:k[e.mask],a="string"==typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",n=a.replace(S,"\\$&"),i=[],u=[],c=[];let d=!0===e.reverseFillMask,v="",g="";t.replace(M,((e,t,a,n,l)=>{if(void 0!==n){const e=x[n];c.push(e),g=e.negate,!0===d&&(u.push("(?:"+g+"+)?("+e.pattern+"+)?(?:"+g+"+)?("+e.pattern+"+)?"),d=!1),u.push("(?:"+g+"+)?("+e.pattern+")?")}else if(void 0!==a)v="\\"+("\\"===a?"":a),c.push(a),i.push("([^"+v+"]+)?"+v+"?");else{const e=void 0!==t?t:l;v="\\"===e?"\\\\\\\\":e.replace(S,"\\\\$&"),c.push(e),i.push("([^"+v+"]+)?"+v+"?")}}));const p=new RegExp("^"+i.join("")+"("+(""===v?".":"[^"+v+"]")+"+)?$"),h=u.length-1,m=u.map(((t,a)=>0===a&&!0===e.reverseFillMask?new RegExp("^"+n+"*"+t):a===h?new RegExp("^"+t+"("+(""===g?".":g)+"+)?"+(!0===e.reverseFillMask?"$":n+"*")):new RegExp("^"+t)));r=c,s=e=>{const t=p.exec(e);null!==t&&(e=t.slice(1).join(""));const a=[],n=m.length;for(let l=0,o=e;l<n;l++){const e=m[l].exec(o);if(null===e)break;o=o.slice(e.shift().length),a.push(...e)}return a.length>0?a.join(""):e},l=c.map((e=>"string"==typeof e?e:C)).join(""),o=l.split(C).join(a)}function h(t,r,s){const i=n.value,u=i.selectionEnd,d=i.value.length-u,f=y(t);!0===r&&p();const g=w(f),h=!1!==e.fillMask?b(g):g,k=v.value!==h;i.value!==h&&(i.value=h),!0===k&&(v.value=h),document.activeElement===i&&c((()=>{if(h!==o)if("insertFromPaste"!==s||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const t=!0===e.reverseFillMask?0===u?h.length>g.length?1:0:Math.max(0,h.length-(h===o?0:Math.min(g.length,d)+1))+1:u;i.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===k){const e=Math.max(0,h.length-(h===o?0:Math.min(g.length,d+1)));1===e&&1===u?i.setSelectionRange(e,e,"forward"):m.rightReverse(i,e,e)}else{const e=h.length-d;i.setSelectionRange(e,e,"backward")}else if(!0===k){const e=Math.max(0,l.indexOf(C),Math.min(g.length,u)-1);m.right(i,e,e)}else{const e=u-1;m.right(i,e,e)}else{const e=u-1;m.right(i,e,e)}else{const t=!0===e.reverseFillMask?o.length:0;i.setSelectionRange(t,t,"forward")}}));const x=!0===e.unmaskedValue?y(h):h;String(e.modelValue)!==x&&a(x,!0)}u((()=>e.type+e.autogrow),p),u((()=>e.mask),(a=>{if(void 0!==a)h(v.value,!0);else{const a=y(v.value);p(),e.modelValue!==a&&t("update:modelValue",a)}})),u((()=>e.fillMask+e.reverseFillMask),(()=>{!0===f.value&&h(v.value,!0)})),u((()=>e.unmaskedValue),(()=>{!0===f.value&&h(v.value)}));const m={left(e,t,a,n){const o=-1===l.slice(t-1).indexOf(C);let r=Math.max(0,t-1);for(;r>=0;r--)if(l[r]===C){t=r,!0===o&&t++;break}if(r<0&&void 0!==l[t]&&l[t]!==C)return m.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===n?a:t,"backward")},right(e,t,a,n){const o=e.value.length;let r=Math.min(o,a+1);for(;r<=o;r++){if(l[r]===C){a=r;break}l[r-1]===C&&(a=r)}if(r>o&&void 0!==l[a-1]&&l[a-1]!==C)return m.left(e,o,o);e.setSelectionRange(n?t:a,a,"forward")},leftReverse(e,t,a,n){const l=g(e.value.length);let o=Math.max(0,t-1);for(;o>=0;o--){if(l[o-1]===C){t=o;break}if(l[o]===C&&(t=o,0===o))break}if(o<0&&void 0!==l[t]&&l[t]!==C)return m.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===n?a:t,"backward")},rightReverse(e,t,a,n){const l=e.value.length,o=g(l),r=-1===o.slice(0,a+1).indexOf(C);let s=Math.min(l,a+1);for(;s<=l;s++)if(o[s-1]===C){(a=s)>0&&!0===r&&a--;break}if(s>l&&void 0!==o[a-1]&&o[a-1]!==C)return m.leftReverse(e,l,l);e.setSelectionRange(!0===n?t:a,a,"forward")}};function w(t){if(null==t||""===t)return"";if(!0===e.reverseFillMask)return function(e){const t=r,a=l.indexOf(C);let n=e.length-1,o="";for(let l=t.length-1;l>=0&&n>-1;l--){const r=t[l];let s=e[n];if("string"==typeof r)o=r+o,s===r&&n--;else{if(void 0===s||!r.regex.test(s))return o;do{o=(void 0!==r.transform?r.transform(s):s)+o,n--,s=e[n]}while(a===l&&void 0!==s&&r.regex.test(s))}}return o}(t);const a=r;let n=0,o="";for(let e=0;e<a.length;e++){const l=t[n],r=a[e];if("string"==typeof r)o+=r,l===r&&n++;else{if(void 0===l||!r.regex.test(l))return o;o+=void 0!==r.transform?r.transform(l):l,n++}}return o}function y(e){return"string"!=typeof e||void 0===s?"number"==typeof e?s(""+e):e:s(e)}function b(t){return o.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?o.slice(0,-t.length)+t:t+o.slice(t.length)}return{innerValue:v,hasMask:f,moveCursorForPaste:function(e,t,a){const n=w(y(e.value));t=Math.max(0,l.indexOf(C),Math.min(n.length,t)),e.setSelectionRange(t,a,"forward")},updateMaskValue:h,onMaskedKeydown:function(t){if(!0===d(t))return;const a=n.value,l=a.selectionStart,o=a.selectionEnd;if(37===t.keyCode||39===t.keyCode){const n=m[(39===t.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];t.preventDefault(),n(a,l,o,t.shiftKey)}else 8===t.keyCode&&!0!==e.reverseFillMask&&l===o?m.left(a,l,o,!0):46===t.keyCode&&!0===e.reverseFillMask&&l===o&&m.rightReverse(a,l,o,!0)}}}const V=v({name:"QInput",inheritAttrs:!1,props:{...e,...{mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean},...t,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...a,"paste","change"],setup(e,{emit:t,attrs:a}){const d={};let v,k,x,b,M=NaN;const S=i(null),C=n(e),{innerValue:V,hasMask:A,moveCursorForPaste:F,updateMaskValue:E,onMaskedKeydown:O}=R(e,t,_,S),j=function(e,t){function a(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(a){return{files:void 0}}}return f(!0===t?()=>{if("file"===e.type)return a()}:a)}(e,!0),z=f((()=>r(V.value))),T=s($),Z=l(),q=f((()=>"textarea"===e.type||!0===e.autogrow)),B=f((()=>!0===q.value||["text","search","url","tel","password"].includes(e.type))),N=f((()=>{const t={...Z.splitAttrs.listeners.value,onInput:$,onPaste:P,onChange:K,onBlur:U,onFocus:w};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=T,!0===A.value&&(t.onKeydown=O),!0===e.autogrow&&(t.onAnimationend=D),t})),L=f((()=>{const t={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:C.value,...Z.splitAttrs.attributes.value,id:Z.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===q.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function P(a){if(!0===A.value&&!0!==e.reverseFillMask){const e=a.target;F(e,e.selectionStart,e.selectionEnd)}t("paste",a)}function $(a){if(!a||!a.target)return;if("file"===e.type)return void t("update:modelValue",a.target.files);const n=a.target.value;if(!0!==a.target.qComposing){if(!0===A.value)E(n,!1,a.inputType);else if(_(n),!0===B.value&&a.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=a.target;void 0!==e&&void 0!==t&&c((()=>{a.target===document.activeElement&&0===n.indexOf(a.target.value)&&a.target.setSelectionRange(e,t)}))}!0===e.autogrow&&D()}else d.value=n}function _(a,n){b=()=>{"number"!==e.type&&!0===d.hasOwnProperty("value")&&delete d.value,e.modelValue!==a&&M!==a&&(M=a,!0===n&&(k=!0),t("update:modelValue",a),c((()=>{M===a&&(M=NaN)}))),b=void 0},"number"===e.type&&(v=!0,d.value=a),void 0!==e.debounce?(clearTimeout(x),d.value=a,x=setTimeout(b,e.debounce)):b()}function D(){const e=S.value;if(null!==e){const t=e.parentNode.style,{overflow:a}=e.style;t.marginBottom=e.scrollHeight-1+"px",e.style.height="1px",e.style.overflow="hidden",e.style.height=e.scrollHeight+"px",e.style.overflow=a,t.marginBottom=""}}function K(e){T(e),clearTimeout(x),void 0!==b&&b(),t("change",e.target.value)}function U(t){void 0!==t&&w(t),clearTimeout(x),void 0!==b&&b(),v=!1,k=!1,delete d.value,"file"!==e.type&&setTimeout((()=>{null!==S.value&&(S.value.value=void 0!==V.value?V.value:"")}))}function H(){return!0===d.hasOwnProperty("value")?d.value:void 0!==V.value?V.value:""}u((()=>e.type),(()=>{S.value&&(S.value.value=e.modelValue)})),u((()=>e.modelValue),(t=>{if(!0===A.value){if(!0===k&&(k=!1,String(t)===M))return;E(t)}else V.value!==t&&(V.value=t,"number"===e.type&&!0===d.hasOwnProperty("value")&&(!0===v?v=!1:delete d.value));!0===e.autogrow&&c(D)})),u((()=>e.autogrow),(e=>{!0===e?c(D):null!==S.value&&a.rows>0&&(S.value.style.height="auto")})),u((()=>e.dense),(()=>{!0===e.autogrow&&c(D)})),g((()=>{U()})),p((()=>{!0===e.autogrow&&D()})),Object.assign(Z,{innerValue:V,fieldClass:f((()=>"q-"+(!0===q.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:f((()=>"file"!==e.type&&"string"==typeof e.shadowText&&e.shadowText.length>0)),inputRef:S,emitValue:_,hasValue:z,floatingLabel:f((()=>!0===z.value||r(e.displayValue))),getControl:()=>h(!0===q.value?"textarea":"input",{ref:S,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...L.value,...N.value,..."file"!==e.type?{value:H()}:j.value}),getShadowControl:()=>h("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===q.value?"":" text-no-wrap")},[h("span",{class:"invisible"},H()),h("span",e.shadowText)])});const I=o(Z),Q=y();return Object.assign(Q.proxy,{focus:function(){m((()=>{const e=document.activeElement;null===S.value||S.value===e||null!==e&&e.id===Z.targetUid.value||S.value.focus({preventScroll:!0})}))},select:function(){null!==S.value&&S.value.select()},getNativeElement:()=>S.value}),I}});export{V as Q};
