/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var a;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",p=l.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u},m="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:h).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:h;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;b[m]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:b}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.2");const $=window,f=$.trustedTypes,y=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,A="?"+x,E=`<${A}>`,S=document,w=()=>S.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,U="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,j=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,T=/^(?:script|style|textarea|title)$/i,R=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=R(1),M=(R(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),q=new WeakMap,B=S.createTreeWalker(S,129,null,!1),I=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=D;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===D?"!--"===l[1]?r=O:void 0!==l[1]?r=P:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=null!=n?n:D,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?j:'"'===l[3]?N:H):r===N||r===H?r=j:r===O||r===P?r=D:(r=j,n=void 0);const p=r===j&&t[e+1].startsWith("/>")?" ":"";o+=r===D?i+E:d>=0?(s.push(a),i.slice(0,d)+_+i.slice(d)+x+p):i+x+(-2===d?(s.push(void 0),e):p)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,d]=I(t,e);if(this.el=V.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(_)||e.startsWith(x)){const i=d[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+_).split(x),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Q:"@"===e[1]?X:G})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),B.nextNode(),a.push({type:2,index:++n});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)a.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r,a;if(e===M)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const d=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);B.currentNode=n;let o=B.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new F(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Y(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=B.nextNode(),r++)}return B.currentNode=S,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),C(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==M&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new J(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new V(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new F(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=W(this,s[i+r],e,r),a===M&&(a=this._$AH[r]),o||(o=!C(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Z=f?f.emptyScript:"";class Q extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class X extends G{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===M)return;const s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=$.litHtmlPolyfillSupport;var et,it;null==tt||tt(V,F),(null!==(g=$.litHtmlVersions)&&void 0!==g?g:$.litHtmlVersions=[]).push("2.7.4");class st extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new F(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.2");class ot extends st{static styles=o`
    .collapsible-label {
      background-color: black;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 1.2rem;
    }
    .collapsible-label:hover {
      background-color: #363636;
    }
    .collapsible-label:after {
      content: "+";
      font-size: 20px;
      color: white;
      float: right;
      margin-left: 5px;
    }
    .active:after {
      content: "-";
    }
    .content {
      padding: 0;
      opacity: 0;
      max-height: 0;
      overflow: auto;
      transition: ease 0.25s;
    }
    .expanded {
      opacity: 1;
      max-height: 300px;
      padding: 1rem;
    }
  `;static properties={topLabel:{attribute:"top-label"},expanded:{type:Boolean}};constructor(){super(),this.topLabel="Collapsible Label",this.expanded=!1}render(){return L`
      <button
        type="button"
        class="collapsible-label ${this.expanded?"active":""}"
        @click=${this.setExpanded}
      >
        ${this.topLabel}
      </button>
      <div class="content ${this.expanded?"expanded":""}">
        <slot></slot>
      </div>
    `}setExpanded(){this.expanded=!this.expanded}}customElements.define("collapsible-div",ot);class rt extends st{static properties={resData:{type:Object},experience:{type:Array},education:{type:Array},skills:{type:Array}};static styles=o`
    :host {
    }

    .form-container {
      margin: 0;
      padding: 0;
    }

    .job-header,
    .ed-header {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .job-header h1,
    .ed-header h1 {
      font-size: 1.3rem;
    }

    collapsible-div button {
      font-size: 0.8rem;
      padding: 0.3rem;
      border: 2px solid black;
      border-radius: 8px;
      background-color: white;
      cursor: pointer;
    }

    collapsible-div button:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .input-group input {
      padding: 0.5rem;
      width: 15rem;
      min-width: 75%;
      border: 1px solid rgb(218, 209, 209);
      border-radius: 0.33em;
    }

    .input-group textarea {
      padding: 0.5rem;
      border: 1px solid rgb(218, 209, 209);
      width: 15rem;
      min-width: 75%;
      height: 5rem;
      border-radius: 0.33em;
      resize: none;
    }

    .input-el {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  `;constructor(){super()}connectedCallback(){super.connectedCallback(),this.experience=[...this.resData.experience]}render(){return L`
      <div class="form-container">
        <collapsible-div top-label="Title/Role">
          <div class="input-group">
            <label
              >Job Title:
              <p class="input-el">
                <input
                  type="text"
                  .value="${this.resData.role}"
                  @input=${t=>{const e=t.target.value;this.sendUpdateString("role",e)}}
                />
              </p>
            </label>
          </div> </collapsible-div
        ><collapsible-div top-label="Name">
          <div class="input-group">
            <label
              >Name:
              <p class="input-el">
                <input
                  type="text"
                  .value="${this.resData.name}"
                  @input=${t=>{const e=t.target.value;this.sendUpdateString("name",e)}}
                />
              </p>
            </label>
          </div>
        </collapsible-div>
        <collapsible-div top-label="Personal Summary">
          <div class="input-group">
            <label
              >Summary:
              <p class="input-el">
                <textarea
                  .value=${this.resData.summary}
                  @input=${t=>{const e=t.target.value;this.sendUpdateString("summary",e)}}
                ></textarea>
              </p>
            </label>
          </div>
        </collapsible-div>
        <collapsible-div top-label="Experience">
          ${this.resData.experience.map(((t,e)=>L`
              <div class="experience-group">
                <div class="job-header">
                  <h1>Job #${e+1}</h1>
                  <button type="button" class="delete-ex-btn">
                    Delete Job
                  </button>
                </div>
                <div class="input-group">
                  <label
                    >Dates:
                    <p class="input-el">
                      <input
                        type="text"
                        .value="${t.dates}"
                        @input=${t=>{const i=e,s=t.target.value;this.sendUpdateArrayOfObjects("experience",i,"dates",s)}}
                      />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Role:
                    <p class="input-el">
                      <input type="text" .value="${t.role}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Company:
                    <p class="input-el">
                      <input type="text" placeholder="${t.company}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Summary:
                    <p class="input-el">
                      <textarea .value=${t.description}></textarea>
                    </p>
                  </label>
                </div>
                ${e+1==this.resData.experience.length?L`<button type="button" class="add-ed-btn">
                      Add Education
                    </button>`:z}
              </div>
            `))}
        </collapsible-div>
        <collapsible-div top-label="Education">
          ${this.resData.education.map(((t,e)=>L`
              <div class="education-group">
                <div class="ed-header">
                  <h1>Education #${e+1}</h1>
                  <button type="button" class="delete-ed-btn">
                    Delete Education
                  </button>
                </div>
                <div class="input-group">
                  <label
                    >Date Finished:
                    <p class="input-el">
                      <input type="text" placeholder="${t.dateFinished}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >Degree/Major:
                    <p class="input-el">
                      <input type="text" placeholder="${t.degree}" />
                    </p>
                  </label>
                </div>
                <div class="input-group">
                  <label
                    >School:
                    <p class="input-el">
                      <input type="text" placeholder="${t.school}" />
                    </p>
                  </label>
                </div>
                ${e+1==this.resData.education.length?L`<button
                      type="button"
                      class="add-ed-btn"
                      @click=${t=>console.log("clicked")}
                    >
                      Add Education
                    </button>`:z}
              </div>
            `))}
        </collapsible-div>
        <collapsible-div top-label="Skills">
          <div class="input-group">
            <label
              >Skills (type skills separated by commas):
              <p class="input-el">
                <textarea .value=${this.resData.skills}></textarea>
              </p>
            </label>
          </div>
        </collapsible-div>
      </div>
    `}sendUpdateString(t,e){const i=new CustomEvent("data-updated-string",{detail:{key:t,value:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}sendUpdateArrayOfObjects(t,e,i,s){let n;"education"===t?(n=structuredClone(this.education),this.education=[...n]):(n=structuredClone(this.experience),this.experience=[...n]),n[e][i]=s;const o=new CustomEvent("data-updated-array-objects",{detail:{key:t,value:n},bubbles:!0,composed:!0});this.dispatchEvent(o)}}customElements.define("cv-form",rt);class at extends st{static styles=o`
    :host {
      font-family: "Mulish", sans-serif;
      box-sizing: border-box;
      background-color: white;
    }

    .cv-container {
      padding: 1.5rem;
      display: flex;
      justify-content: center;
      width: 700px;
      aspect-ratio: 17/22;
    }

    .left-column {
      width: 75%;
      border-right: 2px solid black;
      height: 100%;
    }

    .basic-info {
      border-bottom: 2px solid black;
      padding: 1.25rem;
    }

    .right-column {
      width: 25%;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 0.8rem;
    }

    .main-cat {
      font-weight: bold;
      font-size: 0.7rem;
      text-transform: uppercase;
      border: 2px solid black;
      padding: 0.25rem;
      width: fit-content;
      margin-top: 0;
    }

    .main-cat.right {
      width: 80%;
    }

    .hello {
      font-weight: 800;
      font-size: 3.25rem;
      margin: 0;
    }

    .summary {
      font-size: 0.85rem;
    }

    .summary,
    .experience-group {
      line-height: 1.6;
    }

    .experience {
      padding: 1.25rem;
    }

    .experience-group {
      position: relative;
    }

    .experience-jobs {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .experience-title {
      font-size: 1.7rem;
      border: none;
      padding-left: 0;
    }

    .job-dates {
      font-weight: bold;
      font-size: 0.6rem;
      text-transform: uppercase;
      transform: translateX(-50%) rotate(-90deg);
      position: absolute;
      text-align: center;
      top: 45%;
      left: 0.9rem;
      letter-spacing: 0.1rem;
    }

    .job-role {
      font-weight: bold;
      text-transform: uppercase;
      margin-left: 3rem;
    }

    .job-company {
      font-style: italic;
      margin-left: 3rem;
      color: #5d5a5adf;
      font-size: 0.8rem;
    }

    .job-description {
      margin-left: 3rem;
      font-size: 0.8rem;
    }

    .education-group {
      line-height: 1.6;
      padding: 1em 0 0 0;
    }

    .education-finished {
      font-weight: bold;
    }

    .skills-list {
      list-style: none;
      margin: 0;
      padding: 1rem 0 0 0;
    }

    .skill {
      line-height: 1.6rem;
    }
  `;static properties={resData:{type:Object}};constructor(){super()}render(){return L`
      <div class="cv-container">
        <div class="left-column">
          <div class="basic-info">
            <h1 class="main-cat">${this.resData.role}</h1>
            <p class="hello">Hello, I'm</p>
            <p class="hello hello-name">${this.resData.name}</p>
            <p class="summary">${this.resData.summary}</p>
          </div>
          <div class="experience">
            <h1 class="main-cat experience-title">Experience</h1>
            <div class="experience-jobs">
              ${this.resData.experience.map((t=>L`<div class="experience-group">
                    <div class="job-dates">${t.dates}</div>
                    <div class="job-role">${t.role}</div>
                    <div class="job-company">${t.company}</div>
                    <div class="job-description">${t.description}</div>
                  </div>`))}
            </div>
          </div>
        </div>
        <div class="right-column">
          <div class="contact">
            <div class="main-cat right">Contact</div>
            <div class="contact-details">
              ${Object.values(this.resData.contact).map((t=>L`<p>${t}</p>`))}
            </div>
          </div>
          <div class="education">
            <div class="main-cat right">Education</div>
            <div class="education-details">
              ${this.resData.education.map((t=>L`<div class="education-group">
                    <div class="education-finished">
                      ${t.dateFinished}
                    </div>
                    <div class="education-degree">${t.degree}</div>
                    <div class="education-school">${t.school}</div>
                  </div>`))}
            </div>
          </div>
          <div class="skills">
            <div class="main-cat right">Skills</div>
            <ul class="skills-list">
              ${this.resData.skills.map((t=>L`<li class="skill">${t}</li>`))}
            </ul>
          </div>
        </div>
      </div>
    `}}customElements.define("build-cv",at);class lt extends st{static styles=o`
    :host {
      font-family: "Mulish", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f6;
    }
    .body-container {
      overflow: auto;
    }
    .page-title {
      text-align: center;
      font-size: 3.75rem;
      margin: 0;
      padding: 0;
      text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
    }
    .main-container {
      display: flex;
      gap: 1rem;
      justify-content: space-around;
    }

    .cv-input {
      width: 40%;
    }

    .input-form {
      margin-top: 2.5rem;
      border: 2px solid black;
    }

    .cv-result {
      max-width: max-content;
    }

    .display-cv {
      margin: 1rem 1rem 1rem 0;
      width: max-content;
      height: max-content;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .display-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 1rem;
    }

    .display-header button {
      width: 125px;
      height: 35px;
      border: 3px solid black;
      border-radius: 8px;
      background-color: white;
      cursor: pointer;
    }

    .display-header button:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
    }
  `;static properties={resData:{type:Object}};constructor(){super(),this.resData={role:"Software Engineer",name:"Ichabod Crane",summary:"Frontend engineer experienced in developing modular full-stack JavaScript applications using WebComponents, React, Node, Express, RESTful APIs, and SQL databases.",experience:[{dates:"2022-Present",role:"Software Engineer",company:"Technology Company LLC",description:"Lorem ipsum dolor sit amet. At sunt tempora ea labore recusandae ab rerum mollitia non voluptatibus eligendi id quos temporibus et obcaecati dolorem. Sit odio aspernatur At amet incidunt At ullam optio nam dicta quia."},{dates:"2021",role:"Junior Web Developer",company:"Bob's Builders Online",description:"A sint labore 33 quos galisum a reiciendis excepturi aut corrupti quod aut nostrum porro. Est adipisci nihil et sapiente perferendis ut laborum commodi et voluptates enim vel reiciendis aliquam qui sequi corrupti sit quod voluptas. Non eaque pariatur est ullam nihil id exercitationem delectus est suscipit galisum eos aliquam harum."},{dates:"2020-2021",role:"Intern, Web Development",company:"Bob's Builders Online",description:"A sint labore 33 quos galisum a reiciendis excepturi aut corrupti quod aut nostrum porro. Est adipisci nihil et sapiente perferendis ut laborum commodi et voluptates enim vel reiciendis aliquam qui sequi corrupti sit quod voluptas. Non eaque pariatur est ullam nihil id exercitationem delectus est suscipit galisum eos aliquam harum."}],contact:{email:"ichabod@crane.dev",phone:"123-456-7890",site:"www.crane.dev",city:"Orlando, FL"},education:[{dateFinished:"2017",degree:"Ph.D. Philosophy",school:"UCLA"},{dateFinished:"2007",degree:"B.A. Philosophy",school:"University of Guam"}],skills:["HTML","CSS","JavaScript","Web Components","Lit","React","NodeJS","Python"]}}connectedCallback(){super.connectedCallback(),this.addEventListener("data-updated-string",this.handleUpdateString),this.addEventListener("data-updated-array-objects",this.handleUpdateArrayOfObjects)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("data-updated-string",this.handleUpdateString),this.removeEventListener("data-updated-array-objects",this.handleUpdateArrayOfObjects)}handleUpdateString(t){this.resData={...this.resData,[t.detail.key]:t.detail.value}}handleUpdateArrayOfObjects(t){this.resData={...this.resData,[t.detail.key]:t.detail.value},console.log(this.resData)}render(){return L`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700;800&display=swap"
        rel="stylesheet"
      />
      <div class="body-container">
        <h1 class="page-title">Build a CV with Lit</h1>
        <div class="main-container">
          <div class="cv-input">
            <h1>Enter Information Below:</h1>
            <div class="input-header"></div>
            <div class="input-form">
              <cv-form .resData=${this.resData}></cv-form>
            </div>
          </div>
          <div class="cv-result">
            <div class="display-header">
              <h1>Result:</h1>
              <button type="button">Download PDF</button>
            </div>
            <div class="display-cv">
              <build-cv .resData=${this.resData}></build-cv>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("main-app",lt)})();