/************************************************************************************************* 
Revision History
Date        By				Description
2016-05-05	Ramesh Kotike	SCRUM-1118 	
2016-05-05	Ramesh Kotike	SCRUM-1114
2016-05-06	Ramesh Kotike	SCRUM-1113
2016-05-06	Ramesh Kotike	SCRUM-1111, SCRUM-1112
**************************************************************************************************/
({
    doInit : function(component, event, helper) {
        helper.getCaseId(component);
        //helper.showCloseButton(component);
        //helper.showEditCARFButton(component);
        //helper.showCreateCARFButton(component);
        helper.getCaseBtnObjInfo(component);
    },
    redirectToCloseCasePage : function(component, event, helper){
        //component.set("v.displayEventDiv", false);
        //window.open('http://google.com', '_blank');
        //window.close();
        //window.focus();
        var caseId = component.get("v.CaseId");
        //location.href = "https://medassets--qa.cs19.my.salesforce.com/apex/CloseCaseButtonRedirectPage?&id=" + caseId;
        var vfPageURLPrefix = component.get("v.caseBtnInfoObj.vfPageURLPrefix");
        //alert(vfPageURLPrefix);
        //location.href = vfPageURLPrefix + "CloseCaseButtonRedirectPage?&id=" + caseId +'&portal=new';
        //location.href = vfPageURLPrefix + "CloseCasePageForNewPortal?&id=" + caseId +'&portal=new';
        var uriToOpenMultiple = encodeURI(vfPageURLPrefix + "CloseCasePageForNewPortal?&id=" + caseId +'&portal=new'); 
        //window.top.location.href = uriToOpenMultiple; 
		window.open(uriToOpenMultiple, "_self");
    },//redirectToCloseCasePage
    
    redirectToCARFCreatePage : function(component, event, helper){
        var caseId = component.get("v.CaseId");
        //location.href = "https://medassets--qa.cs19.my.salesforce.com/apex/CARFCreateButtonRedirectURLPage?id=" + caseId;
        var vfPageURLPrefix = component.get("v.caseBtnInfoObj.vfPageURLPrefix");
        console.log(vfPageURLPrefix + "CARFCreateButtonRedirectURLPage?&id=" + caseId +'&portal=new');
        //location.href = vfPageURLPrefix + "CARFCreateButtonRedirectURLPage?&id=" + caseId +'&portal=new';
        var uriToOpenMultiple = encodeURI(vfPageURLPrefix + "CARFCreateButtonRedirectURLPage?&id=" + caseId +'&portal=new'); 
        //window.top.location.href = uriToOpenMultiple; 
		window.open(uriToOpenMultiple);
    },//redirectToCARFCreatePage
    
    redirectToCARFEditPage : function(component, event, helper){
        var caseId = component.get("v.CaseId");
        //location.href = "https://medassets--qa.cs19.my.salesforce.com/apex/CARFEditButtonRedirectURLPage?id=" + caseId;
		var vfPageURLPrefix = component.get("v.caseBtnInfoObj.vfPageURLPrefix");
        console.log(vfPageURLPrefix + "CARFEditButtonRedirectURLPage?&id=" + caseId +'&portal=new');
        //location.href = vfPageURLPrefix + "CARFEditButtonRedirectURLPage?&id=" + caseId  +'&portal=new';
        var uriToOpenMultiple = encodeURI(vfPageURLPrefix + "CARFEditButtonRedirectURLPage?&id=" + caseId +'&portal=new'); 
        //window.top.location.href = uriToOpenMultiple; 
        window.open(uriToOpenMultiple);
    },//redirectToCARFEditPage
    //
    redirectToUpdateCaseUrgencyPage : function(component, event, helper){
        var caseId = component.get("v.CaseId");
        //location.href = "https://medassets--qa.cs19.my.salesforce.com/apex/SelectCasePriority?&id=" + caseId;
		var vfPageURLPrefix = component.get("v.caseBtnInfoObj.vfPageURLPrefix");
        //location.href = vfPageURLPrefix + "SelectCasePriority?&id=" + caseId  +'&portal=new';
        var uriToOpenMultiple = encodeURI(vfPageURLPrefix + "SelectCasePriority?&id=" + caseId +'&portal=new'); 
        //window.top.location.href = uriToOpenMultiple; 
        window.open(uriToOpenMultiple, "_self");
    },//redirectToUpdateCaseUrgencyPage
    
    redirectToAddContactPage : function(component, event, helper){
        var caseId = component.get("v.CaseId");
        //location.href = "https://medassets--qa.cs19.my.salesforce.com/apex/Add_CC_to_Cases?&id=" + caseId;
		var vfPageURLPrefix = component.get("v.caseBtnInfoObj.vfPageURLPrefix");
        console.log(vfPageURLPrefix);
        //location.href = vfPageURLPrefix + "Add_CC_to_Cases?&id=" + caseId +'&portal=new';
        console.log(vfPageURLPrefix + "Add_CC_to_Cases?&id=" + caseId +'&portal=new');
        var uriToOpenMultiple = encodeURI(vfPageURLPrefix + "Add_CC_to_Cases?&id=" + caseId +'&portal=new'); 
        //window.top.location.href = uriToOpenMultiple; 
        window.open(uriToOpenMultiple, "_self");
    },//redirectToAddContactPage
    
    redirectToEditSupportingFilesPage : function(component, event, helper){
        var isIEVar = helper.isIE(component);
        var supportsMultipleFiles = helper.supportsMultipleFiles(component);
        var caseId = component.get("v.CaseId");
        var vfPageURLPrefix = component.get("v.caseBtnInfoObj.vfPageURLPrefix");
		var parentId = component.get("v.caseBtnInfoObj.parentId");
        //alert(parentId);
		if (supportsMultipleFiles && isIEVar == false) { 
            //var uriToOpenMultiple = encodeURI('https://medassets--qa.cs19.my.salesforce.com/apex/CARFMultiUploadMatrixPage?id=' + caseId); 
            var uriToOpenMultiple = encodeURI(vfPageURLPrefix + 'CARFMultiUploadMatrixPage?id=' + parentId +'&portal=new'); 
            //window.top.location.href = uriToOpenMultiple; 
            window.open(uriToOpenMultiple);
            //location.href = vfPageURLPrefix + "CARFMultiUploadMatrixPage?&id=" + caseId;
        }
        else{ 
            //var uriToOpenSingle = encodeURI('https://medassets--qa.cs19.my.salesforce.com/apex/CARFSingleUploadPage?id=' + caseId); 
            var uriToOpenSingle = encodeURI(vfPageURLPrefix + 'CARFSingleUploadPage?id=' + parentId +'&portal=new'); 
            //window.top.location.href = uriToOpenSingle; 
            window.open(uriToOpenSingle);
            //location.href = vfPageURLPrefix + "CARFSingleUploadPage?&id=" + caseId;
        }//End If
        
        //location.href = "https://medassets--qa.cs19.my.salesforce.com/apex/Add_CC_to_Cases?&id=" + caseId;
    },//redirectToAddContactPage

	redirectToCasePrintPage : function(component, event, helper){
        var caseId = component.get("v.CaseId");
        //location.href = "https://qa-medassetsportal.cs19.force.com/portal/50029000002JJcY/p?retURL=/apex/CaseDetail?id=50029000002JJcY&sfdc.override=1;
		var vfPageURLPrefix = component.get("v.caseBtnInfoObj.vfPageURLPrefix");
        vfPageURLPrefix = vfPageURLPrefix.substring(0, vfPageURLPrefix.length - 1 - 5); //Remove apex/ at the end of the string
        vfPageURLPrefix = vfPageURLPrefix + "/" + caseId + "/p";
        //location.href = vfPageURLPrefix + "Add_CC_to_Cases?&id=" + caseId +'&portal=new';
        var uriToOpenMultiple = encodeURI(vfPageURLPrefix); 
        //window.top.location.href = uriToOpenMultiple; 
        window.open(vfPageURLPrefix);
    },//redirectToAddContactPage
    
    
})