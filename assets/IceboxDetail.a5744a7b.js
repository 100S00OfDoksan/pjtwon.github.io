import{i as e,h as a,l as t,a2 as l,c as o,a as r,d as i,w as s,Q as n,F as d,e as c,o as m,f as u,t as g,a9 as p,aM as b}from"./index.2e312cfe.js";import{Q as f,a as x}from"./QCard.bd150a0f.js";import{Q as v}from"./QCardActions.ab103709.js";const y=["top","middle","bottom"],q=e({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>y.includes(e)}},setup(e,{slots:o}){const r=a((()=>void 0!==e.align?{verticalAlign:e.align}:null)),i=a((()=>{const a=!0===e.outline&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${!0===e.multiLine?"multi":"single"}-line`+(!0===e.outline?" q-badge--outline":void 0!==e.color?` bg-${e.color}`:"")+(void 0!==a?` text-${a}`:"")+(!0===e.floating?" q-badge--floating":"")+(!0===e.rounded?" q-badge--rounded":"")+(!0===e.transparent?" q-badge--transparent":"")}));return()=>t("div",{class:i.value,style:r.value,role:"alert","aria-label":e.label},l(o.default,void 0!==e.label?[e.label]:[]))}}),w={class:"row items-center",style:{height:"3rem"}},_=b("22"),h={class:"row",style:{padding:"10px 10px 10px 10px",border:"1px solid #7e98b1"}},B={class:"row q-gutter-sm"},Q=r("div",{class:"text-overline"},"입고일자",-1),S={class:"text-h6 q-mt-sm q-mb-xs"},A={class:"text-caption text-grey"},C={class:"text-caption text-grey"},L=r("div",{class:"text-caption text-grey"}," 남은기간: ",-1),j={class:"row"},N={class:"row items-end"},$={__name:"IceboxDetail",props:{itemList:Array,itemName:String},emits:["eventA"],setup(e,{emit:a}){const t=e;return(a,l)=>(m(),o(d,null,[r("div",w,[i(n,{color:"white","text-color":"primary",label:e.itemName},{default:s((()=>[i(q,{color:"orange",floating:""},{default:s((()=>[_])),_:1})])),_:1},8,["label"])]),r("div",h,[r("div",B,[(m(!0),o(d,null,c(t.itemList.value,((e,a)=>(m(),u(x,{class:"foods",flat:"",bordered:"",key:a},{default:s((()=>[i(f,{horizontal:""},{default:s((()=>[i(f,{class:"q-pt-xs"},{default:s((()=>[Q,r("div",S,g(e.name),1),r("div",A," 수량: "+g(e.qry),1),r("div",C," 무게: "+g(e.weight),1),L])),_:2},1024)])),_:2},1024),i(p),i(v,{align:"center"},{default:s((()=>[i(n,{flat:"",color:"primary",label:"수정"}),i(n,{flat:"",color:"primary",label:"제거"})])),_:1})])),_:2},1024)))),128))])]),r("div",j,[r("div",N,[i(n,{round:"",color:"primary",size:"md",icon:"add"})])])],64))}};export{$ as default};
