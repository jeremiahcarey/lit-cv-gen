/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=s.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(i,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new n(s,e,i)},r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e;var o;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",p=l.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},u=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u},m="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=v){var s;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:h).toAttribute(t,i.type);this._$El=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=s.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:h;this._$El=n,this[n]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var g;b[m]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:b}),(null!==(o=l.reactiveElementVersions)&&void 0!==o?o:l.reactiveElementVersions=[]).push("1.6.2");const $=window,f=$.trustedTypes,y=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,A="?"+_,E=`<${A}>`,w=document,S=()=>w.createComment(""),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,j=/>/g,P=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,T=/^(?:script|style|textarea|title)$/i,R=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),L=R(1),M=(R(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),q=new WeakMap,B=w.createTreeWalker(w,129,null,!1),I=(e,t)=>{const i=e.length-1,s=[];let n,a=2===t?"<svg>":"",r=U;for(let t=0;t<i;t++){const i=e[t];let o,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===U?"!--"===l[1]?r=D:void 0!==l[1]?r=j:void 0!==l[2]?(T.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=P):void 0!==l[3]&&(r=P):r===P?">"===l[0]?(r=null!=n?n:U,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?P:'"'===l[3]?N:H):r===N||r===H?r=P:r===D||r===j?r=U:(r=P,n=void 0);const p=r===P&&e[t+1].startsWith("/>")?" ":"";a+=r===U?i+E:d>=0?(s.push(o),i.slice(0,d)+x+i.slice(d)+_+p):i+_+(-2===d?(s.push(void 0),t):p)}const o=a+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(o):o,s]};class V{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const r=e.length-1,o=this.parts,[l,d]=I(e,t);if(this.el=V.createElement(l,i),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=B.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith(x)||t.startsWith(_)){const i=d[a++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+x).split(_),t=/([.?@])?(.*)/.exec(i);o.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Q:"@"===t[1]?X:G})}else o.push({type:6,index:n})}for(const t of e)s.removeAttribute(t)}if(T.test(s.tagName)){const e=s.textContent.split(_),t=e.length-1;if(t>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],S()),B.nextNode(),o.push({type:2,index:++n});s.append(e[t],S())}}}else if(8===s.nodeType)if(s.data===A)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(_,e+1));)o.push({type:7,index:n}),e+=_.length-1}n++}}static createElement(e,t){const i=w.createElement("template");return i.innerHTML=e,i}}function W(e,t,i=e,s){var n,a,r,o;if(t===M)return t;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const d=C(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,s)),void 0!==s?(null!==(r=(o=i)._$Co)&&void 0!==r?r:o._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(t=W(e,l._$AS(e,t.values),l,s)),t}class F{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:w).importNode(i,!0);B.currentNode=n;let a=B.nextNode(),r=0,o=0,l=s[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new J(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new Y(a,this,e)),this._$AV.push(t),l=s[++o]}r!==(null==l?void 0:l.index)&&(a=B.nextNode(),r++)}return B.currentNode=w,n}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{constructor(e,t,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),C(e)?e===z||null==e||""===e?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==M&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>k(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==z&&C(this._$AH)?this._$AA.nextSibling.data=e:this.$(w.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,n="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(i);else{const e=new F(n,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new V(e)),t}T(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new J(this.k(S()),this.k(S()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class G{constructor(e,t,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(void 0===n)e=W(this,e,t,0),a=!C(e)||e!==this._$AH&&e!==M,a&&(this._$AH=e);else{const s=e;let r,o;for(e=n[0],r=0;r<n.length-1;r++)o=W(this,s[i+r],t,r),o===M&&(o=this._$AH[r]),a||(a=!C(o)||o!==this._$AH[r]),o===z?e=z:e!==z&&(e+=(null!=o?o:"")+n[r+1]),this._$AH[r]=o}a&&!s&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}const Z=f?f.emptyScript:"";class Q extends G{constructor(){super(...arguments),this.type=4}j(e){e&&e!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class X extends G{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=W(this,e,t,0))&&void 0!==i?i:z)===M)return;const s=this._$AH,n=e===z&&s!==z||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class Y{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const ee=$.litHtmlPolyfillSupport;var te,ie;null==ee||ee(V,J),(null!==(g=$.litHtmlVersions)&&void 0!==g?g:$.litHtmlVersions=[]).push("2.7.4");class se extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var s,n;const a=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let r=a._$litPart$;if(void 0===r){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=r=new J(t.insertBefore(S(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return M}}se.finalized=!0,se._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:se});const ne=globalThis.litElementPolyfillSupport;null==ne||ne({LitElement:se}),(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.3.2");class ae extends se{static styles=a`
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
      background-color: #2f2f2f;
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
    `}setExpanded(){this.expanded=!this.expanded}}customElements.define("collapsible-div",ae);const re=a`
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

  collapsible-div button:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
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
`;class oe extends se{static properties={resData:{type:Object},experience:{type:Array}};static styles=[re,a`
      button {
        font-size: 0.8rem;
        padding: 0.3rem;
        border: 2px solid black;
        border-radius: 8px;
        background-color: white;
        cursor: pointer;
      }

      button:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
      }

      button:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
          rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      }
    `];connectedCallback(){super.connectedCallback(),this.experience=[...this.resData.experience]}constructor(){super()}render(){return L`
      ${this.resData.experience.map(((e,t)=>L`
          <div class="experience-group">
            <div class="job-header">
              <h1>Job #${t+1}</h1>
              <button type="button" class="delete-ex-btn">Delete Job</button>
            </div>
            <div class="input-group">
              <label
                >Dates:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${e.dates}"
                    @input=${e=>{const i=t,s=e.target.value;this.sendUpdateArrayOfObjects(i,"dates",s)}}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >Role:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${e.role}"
                    @input=${e=>{const i=t,s=e.target.value;this.sendUpdateArrayOfObjects(i,"role",s)}}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >Company:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${e.company}"
                    @input=${e=>{const i=t,s=e.target.value;this.sendUpdateArrayOfObjects(i,"company",s)}}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >Summary:
                <p class="input-el">
                  <textarea
                    .value=${e.description}
                    @input=${e=>{const i=t,s=e.target.value;this.sendUpdateArrayOfObjects(i,"description",s)}}
                  ></textarea>
                </p>
              </label>
            </div>
            ${t+1==this.resData.experience.length?L`<button type="button" class="add-ed-btn">
                  Add Education
                </button>`:z}
          </div>
        `))}
    `}sendUpdateArrayOfObjects(e,t,i){let s;s=structuredClone(this.experience),this.experience=[...s],s[e][t]=i;const n=new CustomEvent("data-updated",{detail:{key:"experience",value:s},bubbles:!0,composed:!0});this.dispatchEvent(n)}}customElements.define("experience-manager",oe);class le extends se{static properties={resData:{type:Object},education:{type:Array}};static styles=[re,a`
      button {
        font-size: 0.8rem;
        padding: 0.3rem;
        border: 2px solid black;
        border-radius: 8px;
        background-color: white;
        cursor: pointer;
      }

      button:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
      }

      button:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
          rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      }
    `];connectedCallback(){super.connectedCallback(),this.education=[...this.resData.education]}constructor(){super()}render(){return L`
      ${this.resData.education.map(((e,t)=>L`
          <div class="education-group">
            <div class="ed-header">
              <h1>Education #${t+1}</h1>
              <button type="button" class="delete-ed-btn">
                Delete Education
              </button>
            </div>
            <div class="input-group">
              <label
                >Date Finished:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${e.dateFinished}"
                    @input=${e=>{const i=t,s=e.target.value;this.sendUpdateArrayOfObjects(i,"dateFinished",s)}}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >Degree/Major:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${e.degree}"
                    @input=${e=>{const i=t,s=e.target.value;this.sendUpdateArrayOfObjects(i,"degree",s)}}
                  />
                </p>
              </label>
            </div>
            <div class="input-group">
              <label
                >School:
                <p class="input-el">
                  <input
                    type="text"
                    .value="${e.school}"
                    @input=${e=>{const i=t,s=e.target.value;this.sendUpdateArrayOfObjects(i,"school",s)}}
                  />
                </p>
              </label>
            </div>
            ${t+1==this.resData.education.length?L`<button
                  type="button"
                  class="add-ed-btn"
                  @click=${e=>console.log("clicked")}
                >
                  Add Education
                </button>`:z}
          </div>
        `))}
    `}sendUpdateArrayOfObjects(e,t,i){let s;s=structuredClone(this.education),this.education=[...s],s[e][t]=i;const n=new CustomEvent("data-updated",{detail:{key:"education",value:s},bubbles:!0,composed:!0});this.dispatchEvent(n)}}customElements.define("education-manager",le);class de extends se{static properties={resData:{type:Object},experience:{type:Array},education:{type:Array},skills:{type:Array}};static styles=[re,a``];constructor(){super()}connectedCallback(){super.connectedCallback(),this.experience=[...this.resData.experience],this.education=[...this.resData.education],this.skills=[...this.resData.skills]}render(){return L`
      <div class="form-container">
        <collapsible-div top-label="Title/Role">
          <div class="input-group">
            <label
              >Job Title:
              <p class="input-el">
                <input
                  type="text"
                  .value="${this.resData.role}"
                  @input=${e=>{const t=e.target.value;this.sendUpdateSimple("role",t)}}
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
                  @input=${e=>{const t=e.target.value;this.sendUpdateSimple("name",t)}}
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
                  @input=${e=>{const t=e.target.value;this.sendUpdateSimple("summary",t)}}
                ></textarea>
              </p>
            </label>
          </div>
        </collapsible-div>
        <collapsible-div top-label="Experience">
          <experience-manager .resData=${this.resData}></experience-manager>
        </collapsible-div>
        <collapsible-div top-label="Education">
          <education-manager .resData=${this.resData}></education-manager>
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
    `}sendUpdateSimple(e,t){const i=new CustomEvent("data-updated",{detail:{key:e,value:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}}customElements.define("cv-form",de);class ce extends se{static styles=a`
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
              ${this.resData.experience.map((e=>L`<div class="experience-group">
                    <div class="job-dates">${e.dates}</div>
                    <div class="job-role">${e.role}</div>
                    <div class="job-company">${e.company}</div>
                    <div class="job-description">${e.description}</div>
                  </div>`))}
            </div>
          </div>
        </div>
        <div class="right-column">
          <div class="contact">
            <div class="main-cat right">Contact</div>
            <div class="contact-details">
              ${Object.values(this.resData.contact).map((e=>L`<p>${e}</p>`))}
            </div>
          </div>
          <div class="education">
            <div class="main-cat right">Education</div>
            <div class="education-details">
              ${this.resData.education.map((e=>L`<div class="education-group">
                    <div class="education-finished">
                      ${e.dateFinished}
                    </div>
                    <div class="education-degree">${e.degree}</div>
                    <div class="education-school">${e.school}</div>
                  </div>`))}
            </div>
          </div>
          <div class="skills">
            <div class="main-cat right">Skills</div>
            <ul class="skills-list">
              ${this.resData.skills.map((e=>L`<li class="skill">${e}</li>`))}
            </ul>
          </div>
        </div>
      </div>
    `}}customElements.define("build-cv",ce);class pe extends se{static styles=a`
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

    .display-header button:active {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
  `;static properties={resData:{type:Object}};constructor(){super(),this.resData={role:"Software Engineer",name:"Ichabod Crane",summary:"Frontend engineer experienced in developing modular full-stack JavaScript applications using WebComponents, React, Node, Express, RESTful APIs, and SQL databases.",experience:[{dates:"2022-Present",role:"Software Engineer",company:"Technology Company LLC",description:"Lorem ipsum dolor sit amet. At sunt tempora ea labore recusandae ab rerum mollitia non voluptatibus eligendi id quos temporibus et obcaecati dolorem. Sit odio aspernatur At amet incidunt At ullam optio nam dicta quia."},{dates:"2021",role:"Junior Web Developer",company:"Bob's Builders Online",description:"A sint labore 33 quos galisum a reiciendis excepturi aut corrupti quod aut nostrum porro. Est adipisci nihil et sapiente perferendis ut laborum commodi et voluptates enim vel reiciendis aliquam qui sequi corrupti sit quod voluptas. Non eaque pariatur est ullam nihil id exercitationem delectus est suscipit galisum eos aliquam harum."},{dates:"2020-2021",role:"Intern, Web Development",company:"Bob's Builders Online",description:"A sint labore 33 quos galisum a reiciendis excepturi aut corrupti quod aut nostrum porro. Est adipisci nihil et sapiente perferendis ut laborum commodi et voluptates enim vel reiciendis aliquam qui sequi corrupti sit quod voluptas. Non eaque pariatur est ullam nihil id exercitationem delectus est suscipit galisum eos aliquam harum."}],contact:{email:"ichabod@crane.dev",phone:"123-456-7890",site:"www.crane.dev",city:"Orlando, FL"},education:[{dateFinished:"2017",degree:"Ph.D. Philosophy",school:"UCLA"},{dateFinished:"2007",degree:"B.A. Philosophy",school:"University of Guam"}],skills:["HTML","CSS","JavaScript","Web Components","Lit","React","NodeJS","Python"]}}connectedCallback(){super.connectedCallback(),this.addEventListener("data-updated",this.handleUpdate),this.addEventListener("data-updated-array-objects",this.handleUpdateArrayOfObjects)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("data-updated",this.handleUpdate),this.removeEventListener("data-updated-array-objects",this.handleUpdateArrayOfObjects)}handleUpdate(e){this.resData={...this.resData,[e.detail.key]:e.detail.value}}handleUpdateArrayOfObjects(e){this.resData={...this.resData,[e.detail.key]:e.detail.value}}render(){return L`
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
    `}}customElements.define("main-app",pe)})();