(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{30:function(e,t,a){},34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(31),o=a.n(c),s=(a(39),a(5)),r=a(6),i=a(8),h=a(7),u=a(10),d=a(13);a(40);var m=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"./images/gsu-logo.png",alt:"logo"})),l.a.createElement("nav",{className:"header-mav"},l.a.createElement("ul",null,l.a.createElement("li",{id:"home"},l.a.createElement(u.b,{to:"/"},"Home")),l.a.createElement("li",{id:"events"},l.a.createElement(u.b,{to:"/events"},"Events")))))};a(46);var v=function(){return l.a.createElement("footer",null,l.a.createElement("span",null," \xa92020 Georgia State University "))},E=a(1),p=(a(47),a(48),a(12)),f=a.n(p);var g=function(e,t){return new Promise((function(a,n){console.log(e);try{f.a.post("http://localhost:8000/events/".concat(t,"/upload"),e,{}).then((function(e){e?a(e):n("Upload service failed")})).catch((function(e){n(e.message)}))}catch(l){console.log(l)}}))},b=(a(66),function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleOnChange=function(e){var t=e.target,a=t.name,l=t.value;e.target.files&&(l=e.target.files[0]),console.log("name:: ".concat(a," value::: ").concat(l)),n.setState((function(e){var t=Object.assign({},e.eventUploadObj);return t[a]=l,{eventUploadObj:t}}))},n.closeModal=function(){n.props.closeModal(!1)},n.state={eventUploadObj:{},formError:!1,formErrorMsg:""},n.handleOnChange=n.handleOnChange.bind(Object(E.a)(n)),n.handleEvenFormSubmit=n.handleEvenFormSubmit.bind(Object(E.a)(n)),n.closeModal=n.closeModal.bind(Object(E.a)(n)),n}return Object(r.a)(a,[{key:"handleEvenFormSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state.eventUploadObj);var a=new FormData;a.append("file",this.state.eventUploadObj.studentFile),g(a,this.props.eventName).then((function(e){t.props.history.push({pathname:"/event-check-in",state:{studentData:e.data.data,eventName:t.props.eventName}})}),(function(e){console.log("Error while calling upload service"),t.setState({formError:!0,formErrorMsg:e})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"eventsFormModal modal"},l.a.createElement("button",{className:"modal-close",onClick:this.closeModal}," "),this.state.formError?l.a.createElement("h2",{className:"error-msg"}," Error: ",this.state.formErrorMsg," "):"",l.a.createElement("form",{name:"eventsUploadForm",id:"eventUploadForm",onSubmit:this.handleEvenFormSubmit},l.a.createElement("h2",null," Event: ",this.props.eventName," "),l.a.createElement("div",{className:"inputCont"},l.a.createElement("label",{htmlFor:"eventYear"},"Year"),l.a.createElement("input",{name:"eventYear",id:"eventYear",onChange:this.handleOnChange}),l.a.createElement("label",{htmlFor:"semester"},"Semester"),l.a.createElement("input",{name:"eventType",id:"semester",onChange:this.handleOnChange})),l.a.createElement("div",{className:"inputCont"},l.a.createElement("label",{htmlFor:"aboutEvent",id:"aboutLabel"}," About Event(optional) "),l.a.createElement("textarea",{name:"comment",form:"usrform",id:"aboutEvent",onChange:this.handleOnChange})),l.a.createElement("div",{className:"inputCont"},l.a.createElement("label",{htmlFor:"eventDate"},"Event Date"),l.a.createElement("input",{type:"date",name:"eventType",id:"eventDate",onChange:this.handleOnChange}),l.a.createElement("label",{htmlFor:"eventLocation"},"Event Location"),l.a.createElement("input",{name:"eventLocation",id:"eventLocation",onChange:this.handleOnChange})),l.a.createElement("div",{className:"inputCont"},l.a.createElement("label",{htmlFor:"uploadBtn"},"Upload student info(only .xlsx files allowed) "),l.a.createElement("input",{type:"file",id:"uploadBtn",name:"studentFile",onChange:this.handleOnChange,accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),l.a.createElement("input",{type:"submit",className:"submit-event",value:"Submit Event Info"})))}}]),a}(n.Component)),k=Object(d.e)(b),C={postEventService:function(e){return new Promise((function(t,a){console.log(e);try{f.a.post("http://localhost:8000/events",e).then((function(e){201===e.data.code?t(e):a("Event not created")})).catch((function(e){}))}catch(n){console.log(n)}}))},getEventService:function(){return new Promise((function(e,t){try{f.a.get("http://localhost:8000/events").then((function(a){a?e(a):t("Event not created")})).catch((function(e){}))}catch(a){console.log(a)}}))},downloadEventService:function(e){return new Promise((function(t,a){try{f.a.get("http://localhost:8000/events/".concat(e,"/download")).then((function(e){e?t(e):a("Event not created")})).catch((function(e){}))}catch(n){console.log(n)}}))}},N=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).closeModal=function(e){n.setState({showForm:e})},n.createEventCards=function(){if(n.state.events.length>0)return n.state.events.map((function(e,t){return e.eventName===n.state.eventName?l.a.createElement("div",{className:"event-create-card ".concat(n.props.location.state.eventType),key:t,onClick:n.openEventUploadModal},l.a.createElement("h1",{className:"new-event-name"}," ",n.state.eventName," "),l.a.createElement("p",{className:"new-event-desc"}," ",n.state.eventDesc," "),l.a.createElement("button",{className:"event-btn"})):l.a.createElement("div",{className:"event-card",key:t},l.a.createElement("button",{className:"event-btn"},l.a.createElement("h1",{className:"event-name"}," ",e.eventName.toUpperCase()," "),l.a.createElement("p",{className:"event-desc"}," ",e.description," "),l.a.createElement("p",{className:"event-name"}," UPLOADED ")))}))},n.props.location.state?(console.log(n.props.location.state.eventType),n.state={eventName:n.props.location.state.eventName,eventDesc:n.props.location.state.eventDesc,showForm:!1,events:[]}):n.state={eventName:"",eventDesc:"",showForm:!1,events:[]},n.openEventUploadModal=n.openEventUploadModal.bind(Object(E.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.getEventService().then((function(t){console.log(t.data.events),e.setState({events:t.data.events})}))}},{key:"openEventUploadModal",value:function(){this.setState({showForm:!0})}},{key:"showSpinner",value:function(e){return 0===this.state.events.length?l.a.createElement("div",{className:"spinner"}," ",l.a.createElement("h1",null," ",e," ")," ",l.a.createElement("div",{className:"lds-roller"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))):""}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.showForm?l.a.createElement(k,{eventName:this.state.eventName,closeModal:this.closeModal}):"",this.createEventCards(),l.a.createElement("div",{className:"spinner"},this.showSpinner("Loading Your Events ")))}}]),a}(n.Component),S=Object(d.e)(N),w=(a(67),function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:"",desc:"",toEvent:!1,loading:!1,error:"",selectValue:"academics"},n.handleChange=n.handleChange.bind(Object(E.a)(n)),n.handleChangeDesc=n.handleChangeDesc.bind(Object(E.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(E.a)(n)),n.handleSelectChange=n.handleSelectChange.bind(Object(E.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSelectChange",value:function(e){this.setState({selectValue:e.target.value})}},{key:"handleChangeDesc",value:function(e){this.setState({desc:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),""!==this.state.value){var a={eventName:this.state.value,description:this.state.desc};this.setState({error:"",loading:!0}),C.postEventService([a]).then((function(e){t.setState({loading:!1}),t.props.history.push({pathname:"/events",state:{eventName:t.state.value,eventDesc:t.state.desc,eventType:t.state.selectValue}})}))}else this.setState({error:"***Event Name is required field.***"})}},{key:"showSpinner",value:function(e){return l.a.createElement("div",{className:"spinner"}," ",l.a.createElement("h1",null," ",e," ")," ",l.a.createElement("div",{className:"lds-roller"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.loading?this.showSpinner("Saving your event"):"",l.a.createElement("div",{className:"home-cont ".concat(this.state.loading?"hide-element":"")},this.state.error?l.a.createElement("p",{className:"error"},this.state.error):"",l.a.createElement("h1",null,"Create Event"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"inputCont"},l.a.createElement("label",null,"Enter Event name:"),l.a.createElement("input",{type:"text",className:""!==this.state.error?"error-input":"",value:this.state.value,placeholder:"Event name",onChange:this.handleChange})),l.a.createElement("div",{className:"inputCont"},l.a.createElement("label",null,"Enter Event Desc:"),l.a.createElement("input",{type:"text",value:this.state.desc,placeholder:"Event description",onChange:this.handleChangeDesc})),l.a.createElement("div",{className:"inputCont"},l.a.createElement("label",null,"Enter Event Type:"),l.a.createElement("select",{className:"select-class",value:this.state.selectValue,onChange:this.handleSelectChange},l.a.createElement("option",{value:"academics"},"Academics"),l.a.createElement("option",{value:"sports"},"Sports"),l.a.createElement("option",{value:"cultural"},"Cultural"))),l.a.createElement("input",{type:"submit",value:"Submit",className:"submit-event"}))))}}]),a}(n.Component)),O=Object(d.e)(w),y=a(19);a(30);var j=function(e,t,a){return new Promise((function(n,l){try{f.a.patch("http://localhost:8000/events/".concat(t,"/").concat(e,"/?checkin=").concat(a)).then((function(e){e?n(e):l("Upload service failed")})).catch((function(e){l(e.message)}))}catch(c){console.log(c)}}))},D=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getKeys=function(){return Object.keys(this.state.studentData[0])},n.getHeader=function(){return this.getKeys().map((function(e,t){return l.a.createElement("th",{key:e},e.toUpperCase())}))},n.renderRows=function(e,t){return t.map((function(t,a){return"checked_in"===t?l.a.createElement("td",{key:e[t],className:"toggle-cell"}," ",l.a.createElement("label",{className:"toggle-switch"}," ",l.a.createElement("input",{checked:e.checked_in,type:"checkbox",onChange:function(t){return n.toggleStatus(t,e.panther_id)}})," ",l.a.createElement("span",{className:"slider round"})," ")," "):l.a.createElement("td",{key:e[t]},e[t])}))},n.getEventRowData=function(){var e=this,t=0===this.state.filteredData.length?this.state.studentData:this.state.filteredData,a=this.getKeys();return t.map((function(t,n){return l.a.createElement("tr",{key:n},e.renderRows(t,a))}))},n.props.location.state?n.state={studentData:n.props.location.state.studentData,filteredData:[],searchValue:"",filters:[]}:n.state={studentData:[]},n.toggleFilterSelection=n.toggleFilterSelection.bind(Object(E.a)(n)),n.initiateSearch=n.initiateSearch.bind(Object(E.a)(n)),n.navigateCheckIn=n.navigateCheckIn.bind(Object(E.a)(n)),n}return Object(r.a)(a,[{key:"navigateCheckIn",value:function(){this.props.history.push({pathname:"/download",state:{eventName:this.props.location.state.eventName}})}},{key:"toggleFilterSelection",value:function(e){var t=this;if(-1===this.state.filters.indexOf(e.target.value)){var a=[];a.push(e.target.value),this.setState({filters:a},(function(){t.initiateSearch()}))}else{this.setState({filters:[]})}}},{key:"toggleStatus",value:function(e,t){var a;if(0!==this.state.filteredData.length){(a=this.state.filteredData.filter((function(e){return e.panther_id===t})))[0].checked_in=e.target.checked;var n=this.state.filteredData.findIndex((function(e){return e.panther_id===t})),l=Object(y.a)(this.state.filteredData);l[n]=a[0],this.setState({filteredData:l}),this.updateCheckInStatus(a[0])}else(a=this.state.studentData.filter((function(e){return e.panther_id===t})))[0].checked_in=e.target.checked,this.updateCheckInStatus(a[0])}},{key:"updateCheckInStatus",value:function(e){var t=this.state.studentData.findIndex((function(t){return t.panther_id===e.panther_id})),a=Object(y.a)(this.state.studentData);a[t]=e,this.setState({studentData:a}),j(e.panther_id,this.props.location.state.eventName,e.checked_in)}},{key:"initiateSearch",value:function(e){var t,a=this;if(e?(t=e.target.value,this.setState({searchValue:e.target.value})):t=this.state.searchValue,t.length>=3&&this.state.filters.length>0){var n;n=this.state.studentData.filter((function(e){return-1!==e[a.state.filters[0]].toLowerCase().indexOf(t.toLowerCase())})),console.log(n),this.setState({filteredData:n})}else 0!==this.state.filteredData.length&&this.setState({filteredData:[]})}},{key:"checkFilterSelection",value:function(e){return-1===this.state.filters.indexOf(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"search-check-in-cont"},0===this.state.studentData.length?l.a.createElement("h1",null," No events to check in"):l.a.createElement("div",null," ",l.a.createElement("h1",null," Search and Check In "),l.a.createElement("div",{className:"search-input-box"},l.a.createElement("label",null,"Enter search keyword(3 characters minimum)"),l.a.createElement("input",{placeholder:"Enter Search Text",className:"search-input",onChange:this.initiateSearch}),l.a.createElement("button",{value:"first_name",className:this.checkFilterSelection("first_name")?"":"selected-filter",onClick:this.toggleFilterSelection},"First Name"),l.a.createElement("button",{value:"last_name",className:this.checkFilterSelection("last_name")?"":"selected-filter",onClick:this.toggleFilterSelection},"Last Name"),l.a.createElement("button",{value:"panther_id",className:this.checkFilterSelection("panther_id")?"":"selected-filter",onClick:this.toggleFilterSelection},"Panther Id")),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,this.getHeader())),l.a.createElement("tbody",null,this.getEventRowData())),l.a.createElement("button",{className:"check-in",onClick:this.navigateCheckIn}," Completed Check In ")))}}]),a}(n.Component),F=Object(d.e)(D),x=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).downloadExcel=n.downloadExcel.bind(Object(E.a)(n)),n.downloadExcelCheckedIn=n.downloadExcelCheckedIn.bind(Object(E.a)(n)),n.downloadExcelNotCheckedIn=n.downloadExcelNotCheckedIn.bind(Object(E.a)(n)),n}return Object(r.a)(a,[{key:"downloadExcel",value:function(){window.location.href="http://localhost:8000/events/".concat(this.props.location.state.eventName,"/download")}},{key:"downloadExcelCheckedIn",value:function(){window.location.href="http://localhost:8000/events/".concat(this.props.location.state.eventName,"/download?checkedIn=true")}},{key:"downloadExcelNotCheckedIn",value:function(){window.location.href="http://localhost:8000/events/".concat(this.props.location.state.eventName,"/download?checkedIn=false")}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-cont"},l.a.createElement("h1",null,"Download the csv and .xlsx files here"),l.a.createElement("button",{className:"check-in",onClick:this.downloadExcel},"Download with all status"),l.a.createElement("button",{className:"check-in",onClick:this.downloadExcelCheckedIn},"Download with checked-in status"),l.a.createElement("button",{className:"check-in",onClick:this.downloadExcelNotCheckedIn},"Download with non checked-in status"))}}]),a}(n.Component),I=Object(d.e)(x),M=(a(68),function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={routeToEvents:!1,eventName:"",eventDesc:""},n}return Object(r.a)(a,[{key:"passEventInfo",value:function(e,t){e&&(console.log(e),this.setState({routeToEvents:!0,eventName:e,eventDesc:t}))}},{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(m,null),l.a.createElement(d.a,{exact:!0,path:"/events"},l.a.createElement(S,null)),l.a.createElement(d.a,{exact:!0,path:"/"},l.a.createElement(O,null)),l.a.createElement(d.a,{path:"/event-check-in"},l.a.createElement(F,null)),l.a.createElement(d.a,{path:"/download"},l.a.createElement(I,null)),l.a.createElement(v,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.adbffbda.chunk.js.map