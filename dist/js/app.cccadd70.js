(function(e){function a(a){for(var t,n,l=a[0],s=a[1],c=a[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,a=0;a<i.length;a++){for(var o=i[a],t=!0,l=1;l<o.length;l++){var s=o[l];0!==r[s]&&(t=!1)}t&&(i.splice(a--,1),e=n(n.s=o[0]))}return e}var t={},r={app:0},i=[];function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,a,o){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)n.d(o,t,function(a){return e[a]}.bind(null,t));return o},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"340f":function(e,a,o){},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("f9e3");var t=o("2b0e"),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],n=(o("5c0b"),o("2877")),l={},s=Object(n["a"])(l,r,i,!1,null,null,null),c=s.exports,d=o("8c4f"),u=o("5f5b"),p=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",[o("title",[e._v("Calculadora de Sueldo")]),o("div",[o("b-navbar",{attrs:{fixed:"top",toggleable:"true",type:"dark",variant:"dark"}},[o("b-navbar-brand",{staticStyle:{"max-width":"550px",margin:"auto"},attrs:{href:"#"}},[o("b-img-lazy",{attrs:{rounded:"circle",width:"40px",fluid:"",src:"https://i.imgur.com/KWG4mnv.jpg"}}),e._v(" Depto. Educación ")],1),o("b-navbar-toggle",{staticStyle:{"margin-right":"auto"},attrs:{target:"nav-collapse",right:""}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":"",align:"end"}},[o("b-navbar-nav",{attrs:{align:"right"}},[o("b-nav-item-dropdown",{attrs:{text:"INSTRUCCIONES",align:"end"}},[o("b-dropdown-text",[o("p",{staticStyle:{"text-align":"justify","overflow-wrap":"break-word","word-wrap":"break-word","word-break-wrap":"break-word",margin:"10px"}},[e._v(' Ingresa la información que se solicita en el formulario de más abajo. Cuando hayas ingresado toda la información correctamente, presiona el botón "Calcular Sueldo" y verás el detalle por asignación que deberías recibir cada mes, actualizado en la tabla de arriba. '),o("br"),e._v('Puedes cambiar los valores del formulario las veces que quieras, pero luego recuerda siempre presionar el botón "Calcular Sueldo" para volver a actualizar los datos de la tabla. ')])])],1),o("b-nav-item-dropdown",{attrs:{text:"Consideraciones",align:"end"}},[o("b-dropdown-text",[o("p",{staticStyle:{"text-align":"justify","overflow-wrap":"break-word","word-wrap":"break-word","word-break-wrap":"break-word",margin:"10px"}},[e._v(" Esta calculadora es sólo para uso referencial, ya que, por la forma en que realiza los cálculos, es posible que exista una diferencia de menos de $5 con el monto real. ")])])],1),o("b-nav-item-dropdown",{attrs:{text:"Acerca de",align:"end"}},[o("b-dropdown-text",[o("p",{staticStyle:{"text-align":"justify","overflow-wrap":"break-word","word-wrap":"break-word","word-break-wrap":"break-word",margin:"10px"}},[e._v(" Esta "),o("b",[e._v("calculadora de sueldo")]),e._v(" es fruto del trabajo del "),o("b",[e._v("Departamento de Educación")]),e._v(" del Comunal Valparaíso del Colegio de Profesoras y Profesores. "),o("br"),e._v("El Departamento, que está integrado por un pequeño grupo de docentes de la comuna de Valparaíso, está abierto a la colaboración de cualquier colega que tenga interés en participar. Si quieres trabajar con nosotras y nosotros, escríbenos al siguiente correo:"),o("br")]),o("p",{staticStyle:{"text-align":"center"}},[o("a",{staticStyle:{"text-align":"center"},attrs:{href:"mailto:depto.educacioncomunal@gmail.com"}},[o("b-icon",{attrs:{icon:"envelope-fill"}}),e._v(" depto.educacioncomunal@gmail.com ")],1)])])],1),o("b-nav-item-dropdown",{attrs:{text:"RRSS",align:"end"}},[o("b-dropdown-item",{attrs:{href:"https://www.facebook.com/dptoeducacionvalpo/"}},[e._v("Facebook")]),o("b-dropdown-item",{attrs:{href:"https://www.instagram.com/dpto.educacion_valparaiso/"}},[e._v("Instagram")])],1),o("b-nav-item-dropdown",{attrs:{text:"Contacto",align:"end"}},[o("b-dropdown-text",[o("p",{staticStyle:{"text-align":"justify","overflow-wrap":"break-word","word-wrap":"break-word","word-break-wrap":"break-word",margin:"10px"}},[e._v(" Si necesitas contactarte con el Departamento de Educación, escríbenos al siguiente correo y te contestaremos a la brevedad:"),o("br")]),o("p",{staticStyle:{"text-align":"center"}},[o("a",{staticStyle:{"text-align":"center"},attrs:{href:"mailto:depto.educacioncomunal@gmail.com"}},[o("b-icon",{attrs:{icon:"envelope-fill"}}),e._v(" depto.educacioncomunal@gmail.com ")],1)])])],1),o("b-nav-item",{attrs:{href:"https://sites.google.com/view/dptoeducacionvalparaiso",align:"end"}},[e._v(" Nuestro sitio web "),o("b-icon",{attrs:{icon:"box-arrow-up-right"}})],1),o("b-nav-item-dropdown",{attrs:{text:"Más información",align:"end"}},[o("b-dropdown-item",{attrs:{href:"https://www.cpeip.cl/valores-2020-brp-y-asignaciones-carrera-docente/"}},[o("b-icon",{attrs:{icon:"box-arrow-up-right"}}),e._v(" Valores 2020 asignaciones ")],1),o("b-dropdown-item",{attrs:{href:"https://github.com/elisa-a-v/sueldoprofesvalpo"}},[o("b-icon",{attrs:{icon:"box-arrow-up-right"}}),e._v(" Repositorio GitHub ")],1)],1)],1)],1)],1)],1),o("span",{attrs:{id:"arriba-izq"}},[e._m(0),o("b-container",{staticClass:"body"},[o("table",{staticClass:"table table-bordered table-striped table-sm",attrs:{id:"tabla-colilla"}},[o("thead",[o("tr",[o("th",{staticStyle:{"max-width":"35px"},attrs:{scope:"col"}},[e._v("Código")]),o("th",{staticClass:"d",attrs:{scope:"col"}},[e._v("Ítem")]),o("th",{staticStyle:{"max-width":"30px"},attrs:{scope:"col"}},[e._v("Monto")])])]),o("tbody",[e._l(e.colilla,(function(a){return o("tr",{key:a},[o("td",[e._v(e._s(a.codigo))]),o("td",{staticClass:"d"},[e._v(e._s(a.item))]),o("td",[e._v(e._s(a.monto))])])})),o("tr",[o("td",{staticStyle:{"border-right":"none"}}),o("td",{staticClass:"text-right",staticStyle:{"border-left":"none"}},[o("b",[e._v("Sueldo bruto:")])]),o("td",[o("b",[e._v(e._s(e.sueldoBruto))])])])],2)])])],1),o("span",{staticStyle:{margin:"auto"},attrs:{id:"abajo-der"}},[e._m(1),o("table",{staticClass:"table table-hover table-borderless table-striped"},[e._m(2),o("tbody",e._l(e.filasPosibles,(function(a){return o("tr",{key:a},["horasTotal"===a.id||"prioritario80"===a.id&&1!==e.FCS.prioritario60.value?e._e():[o("div",{staticClass:"clearfix"},[o("td",{staticStyle:{float:"left"}},[o("b-container",{staticClass:"text-left"},[o("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:a.tog,expression:"fila.tog"}],attrs:{icon:"info-square-fill",pill:"",size:"sm",variant:"secondary"},on:{click:function(o){return e.info(a.idInfo,a.info)}}}),e._v(" "+e._s(a.nombre)+" ")],1)],1),o("br"),o("td",{staticStyle:{float:"right",width:"150px"}},["valorHora"===a.id?o("select",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"fila.value"}],staticStyle:{width:"150px"},attrs:{id:a.id},on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(a,"value",o.target.multiple?t:t[0])}}},[o("option",{domProps:{value:14403}},[e._v("Enseñanza básica")]),o("option",{domProps:{value:15155}},[e._v("Enseñanza media")])]):e._e(),"horasRegular"===a.id||"horasReemplazo"===a.id||"horasSEP"===a.id||"horasPIE"===a.id?o("select",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"fila.value"}],staticStyle:{width:"150px"},attrs:{id:a.id},on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(a,"value",o.target.multiple?t:t[0])}}},e._l(e.horasPosibles,(function(a){return o("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})),0):e._e(),"bieniosCormuval"===a.id||"bieniosCpeip"===a.id?o("select",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"fila.value"}],staticStyle:{width:"150px"},attrs:{id:a.id},on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(a,"value",o.target.multiple?t:t[0])}}},e._l(e.bieniosPosibles,(function(a){return o("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})),0):e._e(),"tramo"===a.id?o("select",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"fila.value"}],staticStyle:{width:"150px"},attrs:{id:a.id},on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(a,"value",o.target.multiple?t:t[0])}}},e._l(e.tramosPosibles,(function(a){return o("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})),0):e._e(),"nivelBRP"===a.id?o("select",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"fila.value"}],staticStyle:{width:"150px"},attrs:{id:a.id},on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(a,"value",o.target.multiple?t:t[0])}}},[o("option",{domProps:{value:0}},[e._v("Sin título")]),o("option",{domProps:{value:253076}},[e._v("Con título, sin mención")]),o("option",{domProps:{value:337436}},[e._v("Con título, con mención")])]):e._e(),"prioritario60"===a.id||"prioritario80"===a.id?o("select",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"fila.value"}],staticStyle:{width:"150px"},attrs:{id:a.id},on:{change:function(o){var t=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(a,"value",o.target.multiple?t:t[0])}}},[o("option",{domProps:{value:0}},[e._v("No")]),o("option",{domProps:{value:1}},[e._v("Sí")])]):e._e()])]),o("b-collapse",{staticClass:"mt-2",attrs:{id:a.tog,accordion:"info"}},[o("b-card",[o("b-card-text",{staticClass:"text-justify"},[o("small",{attrs:{id:a.idInfo}})])],1)],1),("Experto I"===a.value||"Experto II"===a.value)&&e.FCS.bieniosCpeip.value<4?o("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(" Revise los datos ingresados. Recuerde que para alcanzar el tramo "),o("b",[e._v("Experto I")]),e._v(" o "),o("b",[e._v("Experto II")]),e._v(" no puede tener menos de 4 bienios reconocidos por el CPEIP. ")]):e._e(),"Avanzado"===a.value&&e.FCS.bieniosCpeip.value<2?o("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(" Revise los datos ingresados. Recuerde que para alcanzar el tramo "),o("B",[e._v("Avanzado")]),e._v(", no puede tener menos de 2 bienios reconocidos por el CPEIP. ")],1):e._e()],"horasTotal"===a.id?[o("span",{staticStyle:{margin:"auto"}},[o("td",{staticStyle:{"margin-left":"auto"}},[o("b",[e._v(e._s(a.nombre))])]),o("td",{staticClass:"d",staticStyle:{"margin-right":"auto"}},[o("b",[e._v(e._s(e.horasTotal))])])]),e.horasTotal>44?o("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(" Revise que haya ingresado la cantidad de horas correctamente. "),o("br"),e._v("Recuerde que el máximo legal es de 44 horas semanales. ")]):e._e()]:e._e()],2)})),0)]),o("br"),o("div",{staticClass:"bottom-margin"},[o("b-button",{staticClass:"btn btn-success btn-sm",attrs:{variant:"primary"},on:{click:function(a){return e.calcularSueldo()}}},[e._v(" Calcular Sueldo ")])],1)])])},v=[function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticStyle:{"margin-top":"70px"}},[o("h1",[o("br"),e._v("Calculadora de sueldo ")]),o("p",[e._v(" Herramienta para profesoras y profesores que trabajan en establecimientos municipales de la comuna de Valparaíso. "),o("br"),o("br")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("h4",[o("br"),e._v("Formulario ")])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("thead",[o("tr",[o("th",{staticStyle:{"max-width":"40%"},attrs:{scope:"col"}}),o("th",{attrs:{scope:"col"}})])])}],m=o("b1e0");t["default"].use(u["a"]),t["default"].use(m["a"]);var b={name:"Home",data:function(){return{datos:[],show:!0,FCS:{valorHora:{id:"valorHora",tog:"valorHoraToggle",idInfo:"valorHoraInfo",value:14403,nombre:"Valor hora:",info:"El valor hora para calcular la Remuneración Básica Mínima Nacional para docentes en Chile depende del nivel en el que se desempeñe la o el docente.<br>Para el año 2020 los valores son: <br><br><b>Enseñanza básica</b><br>$14.403<br><b>Enseñanza media</b><br>$15.155"},horasRegular:{id:"horasRegular",tog:"horasRegularToggle",idInfo:"horasRegularInfo",value:0,nombre:"Horas por subvención regular:",info:'Cantidad de horas de contrato que son  financiadas con la subvención regular; es decir, no son horas SEP, ni de reemplazo,  ni PIE, etc. <br>En su liquidación aparece en la parte superior en<br><center>"<b>JORNADA: XX HRS</b>".</center>'},horasReemplazo:{id:"horasReemplazo",tog:"horasReemplazoToggle",idInfo:"horasReemplazoInfo",value:0,nombre:"Horas de reemplazo:",info:"Horas de reemplazo que realizó durante el mes."},horasSEP:{id:"horasSEP",tog:"horasSEPToggle",idInfo:"horasSEPInfo",value:0,nombre:"Horas SEP:",info:"Cantidad de horas financiadas con la Subvención Escolar Preferencial (ley 20.248)."},horasPIE:{id:"horasPIE",tog:"horasPIEToggle",idInfo:"horasPIEInfo",value:0,nombre:"Horas PIE:",info:"Cantidad de horas financiadas con el Programa de Integración Escolar."},horasTotales:{value:this.horasTotal,id:"horasTotal",tog:"",nombre:"Total de horas:",info:"",idInfo:""},bieniosCormuval:{id:"bieniosCormuval",tog:"bieniosCormuvalToggle",idInfo:"bieniosCormuvalInfo",value:0,nombre:"Bienios CORMUVAL:",info:"Número de bienios (período de 2 años completos) reconocidos por la Corporación Municipal de Valparaíso."},bieniosCpeip:{id:"bieniosCpeip",tog:"bieniosCpeipToggle",idInfo:"bieniosCpeipInfo",value:0,nombre:"Bienios CPEIP:",info:" Número de bienios (período de 2 años completos) reconocidos por el Centro de Perfeccionamiento, Experimentación e Investigaciones Pedagógicas."},tramo:{id:"tramo",tog:"tramoToggle",idInfo:"tramoInfo",value:"Acceso",nombre:"Tramo Carrera Docente:",info:"Tramo de la Carrera Docente en el que se encuentra."},nivelBRP:{id:"nivelBRP",tog:"nivelBRPToggle",idInfo:"nivelBRPInfo",value:0,nombre:"Título para BRP:",info:'El <b>Bono de Reconocimiento Profesional</b> tiene dos niveles, dependiendo de la presencia o ausencia de una "mención" en el título profesional. <br>Los montos para contratos de 30 horas o más, al año 2020 son: <br><br><b>Sin mención</b><br>253.076 <br><b>Con mención</b><br>337.436'},prioritario60:{id:"prioritario60",tog:"prioritario60Toggle",idInfo:"prioritario60Info",value:0,nombre:"Trabaja en un establecimiento con 60% de estudiantes prioritarios o más:",info:'La <b>Asignación por docencia en establecimientos con alta concentración de alumnos prioritarios</b> se paga a todos y todas las docentes que trabajan en establecimientos con un 60% de alumnos prioritarios o más.<br><br> <a href="https://www.cpeip.cl/wp-content/uploads/2019/06/Porcentaje-alumnos-prioritarios-2019.pdf"> Click aquí</a> para ver porcentaje de alumnos prioritarios por establecimiento.'},prioritario80:{id:"prioritario80",tog:"prioritario80Toggle",idInfo:"prioritario80Info",value:0,nombre:"Trabaja en un establecimiento con 80% de estudiantes prioritarios o más:",info:'La <b>Asignación por docencia en establecimientos con alta concentración de alumnos prioritarios</b> aumenta para docentes en los tramos Avanzado, Experto I y Experto II que trabajen en establecimientos con 80% de estudiantes prioritarios o más.<br><br> <a href= "https://www.cpeip.cl/wp-content/uploads/2019/06/Porcentaje-alumnos-prioritarios-2019.pdf"> Click aquí </a> para ver porcentaje de alumnos prioritarios por establecimiento.'}},colilla:[{codigo:0,item:"Sueldo base",monto:0},{codigo:8,item:"Asignación de movilización",monto:0},{codigo:25,item:"Ampliación horaria PIE",monto:0},{codigo:32,item:"Bono Reconocimiento Profesional",monto:0},{codigo:47,item:"Asignación por Desempeño",monto:0},{codigo:48,item:"Ampliación horaria SEP",monto:0},{codigo:49,item:"Ampliación horaria Lic. Med., Reemplazo, etc.",monto:0},{codigo:52,item:"Asignación por Experiencia",monto:0},{codigo:80,item:"Asignación por alta concentración a. prioritarios",monto:0}],horasPosibles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],bieniosPosibles:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],tramosPosibles:["Acceso","Inicial","Temprano","Avanzado","Experto I","Experto II"],sueldoBruto:0,horasBRP:0,isHovered:!1}},computed:{filasPosibles:function(){return[this.FCS.valorHora,this.FCS.horasRegular,this.FCS.horasReemplazo,this.FCS.horasSEP,this.FCS.horasPIE,this.FCS.horasTotales,this.FCS.bieniosCormuval,this.FCS.bieniosCpeip,this.FCS.tramo,this.FCS.nivelBRP,this.FCS.prioritario60,this.FCS.prioritario80]},horasTotal:function(){return this.FCS.horasSEP.value+this.FCS.horasPIE.value+this.FCS.horasRegular.value+this.FCS.horasReemplazo.value}},methods:{calcularSueldo:function(){0===this.FCS.prioritario60.value&&(this.FCS.prioritario80.value=0);var e=this.FCS.horasRegular.value*this.FCS.valorHora.value,a=6921;this.horasTotal>30?this.horasBRP=30:this.horasBRP=this.horasTotal;var o=this.horasBRP*this.FCS.nivelBRP.value;o=Math.round(o/30);var t=this.horasTotal/44;t*=this.FCS.bieniosCpeip.value/15;var r=14315,i=0;"Acceso"===this.FCS.tramo.value||"Inicial"===this.FCS.tramo.value?r=14315:"Temprano"===this.FCS.tramo.value?r=47831:"Avanzado"===this.FCS.tramo.value?(r=96266,i=103410.99):"Experto I"===this.FCS.tramo.value?(r=360892,i=143625.915):"Experto II"===this.FCS.tramo.value&&(r=776654,i=218311.515),t*=r,t=Math.round(t);var n=this.FCS.bieniosCpeip.value-1;n*=.0333,n+=.0338,n*=this.horasTotal*this.FCS.valorHora.value,n=Math.round(n);var l=0;l=this.horasTotal/44,l*=i,l=Math.round(l);var s=0;s=t,s+=n,s+=l;var c=this.FCS.bieniosCormuval.value-1;c*=.0333,c+=.0338,c*=this.FCS.valorHora.value*this.FCS.horasSEP.value,c+=this.FCS.valorHora.value*this.FCS.horasSEP.value,c=Math.round(c);var d=.0338+.0333*(this.FCS.bieniosCormuval.value-1);d*=this.FCS.valorHora.value*this.FCS.horasReemplazo.value,d+=this.FCS.valorHora.value*this.FCS.horasReemplazo.value,d=Math.round(d);var u=e*(.0338+.0333*(this.FCS.bieniosCormuval.value-1));u=Math.round(u);var p=.2*s+this.horasTotal/44*65689,v=0;"Avanzado"!==this.FCS.tramo.value&&"Experto I"!==this.FCS.tramo.value&&"Experto II"!==this.FCS.tramo.value||(v=1),p*=this.FCS.prioritario80.value*v,p+=this.FCS.prioritario60.value*(.2*s+this.horasTotal/44*47872),p=Math.round(p);var m=.0338+.0333*(this.FCS.bieniosCormuval.value-1);m*=this.FCS.valorHora.value*this.FCS.horasPIE.value,m+=this.FCS.valorHora.value*this.FCS.horasPIE.value,m=Math.round(m),this.colilla[0].monto=e,this.colilla[1].monto=a,this.colilla[2].monto=m,this.colilla[3].monto=o,this.colilla[4].monto=s,this.colilla[5].monto=c,this.colilla[6].monto=d,this.colilla[7].monto=u,this.colilla[8].monto=p,this.sueldoBruto=e+a+m+o+s+c+d+u+p,window.scrollTo({top:window,behavior:"smooth"})},info:function(e,a){document.getElementById(e).innerHTML=a},handleHover:function(e){this.isHovered=e}}},h=b,f=(o("8ac1"),Object(n["a"])(h,p,v,!1,null,null,null)),g=f.exports;t["default"].use(d["a"]),t["default"].use(u["a"]);var S=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:g}]}),C=S;t["default"].config.productionTip=!1,new t["default"]({router:C,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,a,o){"use strict";var t=o("9c0c"),r=o.n(t);r.a},"8ac1":function(e,a,o){"use strict";var t=o("340f"),r=o.n(t);r.a},"9c0c":function(e,a,o){}});
//# sourceMappingURL=app.cccadd70.js.map