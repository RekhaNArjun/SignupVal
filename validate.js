function validation(){
         var opass=document.conform.OldPassword.value;
		 var newpass=document.conform.NewPassword.value;
		 var cpass=document.conform.ConfirmPassword.value;
         
        
              
            
            if(opass==""){
                            window.alert("Password can't be blank");
		                    psw.focus();
		                    return false;
                        }
			if(newpass>6){
                            window.alert("Password length should be 6");
		                    psw.focus();
		                    return false;
                        }
			if(cpass!=newpass){
                            window.alert("Enter the correct password");
		                    npsw.focus();
		                    return false;
                        }	
};
