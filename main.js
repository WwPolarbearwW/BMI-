console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	$("#my_btn").click(()=>{
		const shintyo =$("#my_shintyou").val()
		console.log("shintyo",shintyo);
		const keisan = parseInt(shintyo);
		const shintyou2 = keisan/ 100
		console.log("shintyou2",shintyou2);
		
    

		const taizyu = $("#my_taizyu").val()
		console.log("taizyu",taizyu);
		const taizyukeisan = parseInt(taizyu);
		console.log("taizyukeisan",taizyukeisan);

		const goukei = taizyukeisan / shintyou2 ** 2
		$("#my_result").text(goukei)

	});

})