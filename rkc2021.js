function myFunction(){
			var letter1=document.getElementById("userNameId").value;
			var letter2=document.getElementById("userPassId").value;
			
			var text;

			if(letter1==="rkc"&&letter2==="2021"){
				document.location.href="rkc_home.html"
			}else{			
				text=letter+" Plase Enter Currect Input User ID";
			}

		}