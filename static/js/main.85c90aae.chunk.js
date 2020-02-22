(this.webpackJsonpsynth=this.webpackJsonpsynth||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},37:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),o=(a(37),a(7)),l=a(10),s=a(67),m=a(66),u=a(11),f=a.n(u),h=a(65),d=a(70),E=(a(38),a(39),a(40)),p=function(e){var t=E.MidiNumbers.fromNote("c4"),a=E.MidiNumbers.fromNote("f5"),n=E.KeyboardShortcuts.create({firstNote:t,lastNote:a,keyboardConfig:E.KeyboardShortcuts.HOME_ROW});return r.a.createElement(E.Piano,{noteRange:{first:t,last:a},playNote:function(t){e.synth.triggerAttack(t)},stopNote:function(t){e.synth.triggerRelease()},width:700,keyboardShortcuts:n})},x=a(69),v=function(e){var t,a,n,i,c=null!==(t=e.initialValue)&&void 0!==t?t:5;return e.action(c),r.a.createElement("div",null,r.a.createElement(x.a,{defaultValue:c,valueLabelDisplay:"auto",step:null!==(a=e.step)&&void 0!==a?a:1,min:null!==(n=e.min)&&void 0!==n?n:0,max:null!==(i=e.max)&&void 0!==i?i:30,onChange:function(t,a){return e.action(a)}}))},y=a(68),b=a(64),g=function(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],i=a[1];return r.a.createElement(y.a,{size:"small",value:"check",selected:n,onChange:function(){var t=!n;i(t),e.effect.wet.value=Number(t)}},r.a.createElement(b.a,null,e.text))},w=new f.a.PitchShift;w.wet.value=0;var N=new f.a.Distortion;N.wet.value=0;var S=new f.a.AutoWah;S.wet.value=0;var j,O={pitchShift:w,distortion:N,filter:S},k=a(71),A=function(e){var t=r.a.useState("sawtooth"),a=Object(l.a)(t,2),n=a[0],i=a[1];return r.a.createElement(k.a,{value:n,exclusive:!0,onChange:function(t,a){i(a),e.synth.oscillator.type=a}},r.a.createElement(y.a,{value:"sawtooth"}),r.a.createElement(y.a,{value:"square"}),r.a.createElement(y.a,{value:"sine8"}))},C=Object(h.a)((function(e){return Object(d.a)({root:{display:"flex",maxWidth:700,justifyContent:"center",alignItems:"center"},synth:{"background-color":"indianred","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,"background-color":"bisque"}})})),M=Object.entries(O).map((function(e){var t=Object(l.a)(e,2);t[0];return t[1]})),I=(j=new f.a.MonoSynth({oscillator:{type:"sawtooth"}})).chain.apply(j,Object(o.a)(M).concat([f.a.Master])),P=function(){var e=C();return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{className:e.synth,container:!0,spacing:2,alignItems:"flex-start",justify:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(s.a,{className:e.paper},"A Synth")),r.a.createElement(m.a,{container:!0,item:!0,xs:3,direction:"column"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(A,{synth:I}))),r.a.createElement(m.a,{container:!0,item:!0,xs:3,direction:"column"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(g,{text:"Pitch",effect:O.pitchShift})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(v,{action:function(e){return O.pitchShift.pitch=e}}))),r.a.createElement(m.a,{container:!0,item:!0,xs:3,direction:"column"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(g,{text:"Filter",effect:O.filter})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(v,{min:-40,max:50,action:function(e){return O.filter.sensitivity=e}}))),r.a.createElement(m.a,{container:!0,item:!0,xs:3,direction:"column"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(g,{text:"@!%\xa3@",effect:O.distortion})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(v,{initialValue:1,max:10,action:function(e){return O.distortion.distortion=e}}))),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(p,{synth:I}))))};c.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(P,null)))}),null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.85c90aae.chunk.js.map