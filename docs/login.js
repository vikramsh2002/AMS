function check(){
	var a = document.getElementById("User").value;
	var b= document.getElementById("Pass").value;
	
	if(a=="varsharaj1759@gmail.com" && b=="varsha123#")  //1
	{
	    window.localStorage.setItem('uid','1');
		document.getElementById("myform").action="../Home Page/Home Page.html";
		 
	}
	else if(a=="aggarwaldeepali.454@gmail.com" && b=="Deepali5#")//2
	{
		window.localStorage.setItem('uid','2');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	
	else if(a=="dokupathiabhinash@gmail.com" && b=="9133890410qazS") // 3
	{
		window.localStorage.setItem('uid','3');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	else if(a=="akshatsakharkar28@gmail.com" && b=="Akshat@123") // 4
	{
		window.localStorage.setItem('uid','4');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	
	else if(a=="Shekharmayank2001@gmail.com" && b=="Mayank2001#") // 5
	{
		window.localStorage.setItem('uid','5');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	
	else if(a=="singhgurneet@123" && b=="Gurkirpa@123") // 6
	{
		window.localStorage.setItem('uid','6');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	
	else if(a=="Shaileshsinghyadav3434@gmail.com" && b=="123456@Aa") // 7
	{
		window.localStorage.setItem('uid','7');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	}
	
	else if(a=="ss46290@gmail.com" && b=="Shivam@1") // 8
	{
		window.localStorage.setItem('uid','8');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	
	else if(a=="anujkannauj002@gmail.com" && b=="anuj2002@") // 9
	{
		window.localStorage.setItem('uid','9');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	
	else if(a=="jaideepkoranga@gmail.com" && b=="Jai7Cse8") // 10
	{
		window.localStorage.setItem('uid','10');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	
	}
	
	else if(a=="pranayahirwar@gmail.com" && b=="K%4}{H&XBE") // 11
	{               
					window.localStorage.setItem('uid','11');
		document.getElementById("myform").action="../Home Page/Home Page.html";				
	
	}
	
	else if(a=="avipandey415@gmail.con" && b=="Avi@123") // 12
	{
					window.localStorage.setItem('uid','12');
		document.getElementById("myform").action="../Home Page/Home Page.html";               	
	
	}
	
	else if(a=="tummetisairamkumar1234@gmail.com" && b=="Tsrk1234") // 13
	{
					window.localStorage.setItem('uid','13');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="ayushgour232@gmail.com" && b=="12345678#A") // 14
	{
					window.localStorage.setItem('uid','14');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="tandonshrutiii17201@gmail.com" && b=="Shruti111#") // 15
	{
					window.localStorage.setItem('uid','15');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	else if(a=="vipulsamant100@gmail.com" && b=="Asdfghjkl2#") // 16
	{
					window.localStorage.setItem('uid','16');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="sagar739130@gmail.com" && b=="blur@123") // 17
	{
					window.localStorage.setItem('uid','17');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="dikshasrivastava195@gmail.com" && b=="Diksha2#") // 18
	{
					window.localStorage.setItem('uid','18');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="shivanshu.yadav04@gmail.com" && b=="1234567890S#") // 19
	{
					window.localStorage.setItem('uid','19');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="kuldeeptwelve12@gmail.com" && b=="kuldeepsingh2#") // 20
	{
					window.localStorage.setItem('uid','20');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="manishkumarprajapati66@gmail.com" && b=="11904532M#") // 21
	{
					window.localStorage.setItem('uid','21');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	
	else if(a=="ayushiag341@gmail.com" && b=="rakshu@341") // 22
	{
					window.localStorage.setItem('uid','22');
		document.getElementById("myform").action="../Home Page/Home Page.html";	
	
	}
	else if(a=="armankumarsikriwal3@gmail.com" && b=="Easyone23#")//23
	{
		window.localStorage.setItem('uid','23');
		document.getElementById("myform").action="../Home Page/Home Page.html";
	}
	else
	{
	    window.alert("Invalid User");
	    window.localStorage.clear();
	    document.getElementById("Pass").value="";
	    document.getElementById("User").value="";
	     	
	}
}