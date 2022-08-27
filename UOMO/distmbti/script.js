
// imagesLoaded.js, Hammer.js, and Sequence.js loaded as external assets
var sequenceElement = document.getElementById("sequence");
var options = {
  keyNavigation: true,
  animateCanvas: false,
  phaseThreshold: false,
  reverseWhenNavigatingBackwards: true}
var mySequence = sequence(sequenceElement, options);

var M="E";
var B="S";
var T="T";
var I="J";

function pri() {
   if ($("#1").text() == "I") { 
        $("#1").text("E");
	   						M="E";
    } else { 
        $("#1").text("I");
	   						M="I";
    };
	doa();
}
function sec() {
   if ($("#2").text() == "N") { 
        $("#2").text("S");
	   						B="S";
    } else { 
        $("#2").text("N");
							B="N";
    }; 
	doa();
}
function ter() {
   if ($("#3").text() == "F") { 
        $("#3").text("T"); 
	   						T="T";
    } else { 
        $("#3").text("F"); 
							T="F";
    };
	doa();
}
function qua() {
   if ($("#4").text() == "P") { 
        $("#4").text("J");
	   						I="J";
    } else { 
        $("#4").text("P");
							I="P";
    };
	doa();
}

var fotoo = document.getElementById("fot");


		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Te-Si-Ne-Fi');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Executive');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Excellent administrators, unsurpassed at managing things – or people.');

function doa() {
	if (B+T == "NT") {
		$(".seq").css({backgroundColor: '#e8d8e0'});
		$(".TITAPP").css({color: '#5f394d'});}
	if (B+T == "NF") {
		$(".seq").css({backgroundColor: '#dbeee6'});
		$(".TITAPP").css({color: '#56ac8a'});}
	if (B+I == "SP") {
		$(".seq").css({backgroundColor: '#f7e7cb'});
		$(".TITAPP").css({color: '#dfc10c'});}
	if (B+I == "SJ") {
		$(".seq").css({backgroundColor: '#cde6e7'});
		$(".TITAPP").css({color: '#51a9ab'});}
	
	
	
	if (M+B+T+I == "INFJ") {
		$(".fot").attr({style: "content:url(F/INFJ.svg)" });
		//$('.F2').css('color', 'blue');}
		////$(".FAPP").addClass('FCONT').attr('data-content','INFJ');
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Ni-Fe-Ti-Se');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Advocate');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Quiet and mystical, yet very inspiring and tireless idealists.'); ranText = infj0; var ranText2 = infj00; var ran = infj000}

	else if (M+B+T+I == "ENFJ") {
		$(".fot").attr({style: "content:url(F/ENFJ.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Fe-Ni-Se-Ti');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Protagonist');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Charismatic and inspiring leaders, able to mesmerize their listeners.'); ranText = enfj0; var ranText2 = enfj00; var ran = enfj000}
	else if (M+B+T+I == "INFP") {
		$(".fot").attr({style: "content:url(F/INFP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Fi-Ne-Si-Te');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Mediator');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Poetic, kind and altruistic people, always eager to help a good cause.'); ranText = infp0; var ranText2 = infp00; var ran = infp000}
	else if (M+B+T+I == "ENFP") {
		$(".fot").attr({style: "content:url(F/ENFP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Ne-Fi-Te-Si');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Campaigner');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.'); ranText = enfp0; var ranText2 = enfp00; var ran = enfp000}
	
	else if (M+B+T+I == "ENTJ") {
		$(".fot").attr({style: "content:url(F/ENTJ.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Te-Ni-Se-Fi');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Commander');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Bold, imaginative and strong-willed leaders, always finding a way – or making one.'); ranText = entj0; var ranText2 = entj00; var ran = entj000}
	else if (M+B+T+I == "ENTP") {
		$(".fot").attr({style: "content:url(F/ENTP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Ne-Ti-Fe-Si');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Debater');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Smart and curious thinkers who cannot resist an intellectual challenge.'); ranText = entp0; var ranText2 = entp00; var ran = entp000}
	else if (M+B+T+I == "INTJ") {
		$(".fot").attr({style: "content:url(F/INTJ.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Ni-Te-Fi-Se');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Architect');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Imaginative and strategic thinkers, with a plan for everything.'); ranText = intj0; var ranText2 = intj00; var ran = intj000}
	else if (M+B+T+I == "INTP") {
		$(".fot").attr({style: "content:url(F/INTP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Ti-Ne-Si-Fe');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Logician');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Innovative inventors with an unquenchable thirst for knowledge.'); ranText = intp0; var ranText2 = intp00; var ran = intp000}
	
	else if (M+B+T+I == "ESTJ") {
		$(".fot").attr({style: "content:url(F/ESTJ.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Te-Si-Ne-Fi');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Executive');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Excellent administrators, unsurpassed at managing things – or people.'); ranText = estj0; var ranText2 = estj00; var ran = estj000}
	else if (M+B+T+I == "ESTP") {
		$(".fot").attr({style: "content:url(F/ESTP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Se-Ti-Fe-Ni');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Entrepreneur');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Smart, energetic and very perceptive people, who truly enjoy living on the edge.'); ranText = estp0; var ranText2 = estp00; var ran = estp000}
	else if (M+B+T+I == "ISTJ") {
		$(".fot").attr({style: "content:url(F/ISTJ.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Si-Te-Fi-Ne');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Logistician');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Practical and fact-minded individuals, whose reliability cannot be doubted.'); ranText = istj0; var ranText2 = istj00; var ran = istj000}
	else if (M+B+T+I == "ISTP") {
		$(".fot").attr({style: "content:url(F/ISTP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Ti-Se-Ni-Fe');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Virtuoso');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Bold and practical experimenters, masters of all kinds of tools.'); ranText = istp0; var ranText2 = istp00; var ran = istp000}
	
	else if (M+B+T+I == "ESFJ") {
		$(".fot").attr({style: "content:url(F/ESFJ.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Fe-Si-Ne-Ti');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Consul');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Extraordinarily caring, social and popular people, always eager to help.'); ranText = esfj0; var ranText2 = esfj00; var ran = esfj000}
	else if (M+B+T+I == "ESFP") {
		$(".fot").attr({style: "content:url(F/ESFP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Se-Fi-Te-Ni');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Entertainer');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Spontaneous, energetic and enthusiastic people – life is never boring around them.'); ranText = esfp0; var ranText2 = esfp00; var ran = esfp000}
	else if (M+B+T+I == "ISFJ") {
		$(".fot").attr({style: "content:url(F/ISFJ.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Si-Fe-Ti-Ne');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Defender');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Very dedicated and warm protectors, always ready to defend their loved ones.'); ranText = isfj0; var ranText2 = isfj00; var ran = isfj000}
	else if (M+B+T+I == "ISFP") {
		$(".fot").attr({style: "content:url(F/ISFP.svg)" });
		$(".PRYAPP").addClass('PRYCONT').attr('data-content','Fi-Se-Ni-Te');
		$(".TITAPP").addClass('TITCONT').attr('data-content','Adventurer');
		$(".STITAPP").addClass('STITCONT').attr('data-content','Flexible and charming artists, always ready to explore and experience something new.'); ranText = isfp0; var ranText2 = isfp00; var ran = isfp000}


cardText.innerHTML = ranText[0];
authorText.innerHTML = ranText[1];

cardText2.innerHTML = ranText2[0];
authorText2.innerHTML = ranText2[1];

tito.innerHTML = ran[0];
tessto.innerHTML = ran[1];
}



//carddddddddddd  
//INTJ
var intj0 = ["Rational<br/>Informed<br/>Independent<br/>Determined<br/>Curious<br/>Versatile", "Strengths"];
var intj2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements", "Rational"];
var intj2 = [" Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring", "Informed"];
var intj3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Independent"];
var intj4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Determined"];
var intj5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Curious"];
var intj6 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Versatile"];
//INTP
var intp0 = ["Analytical<br/>Original<br/>Open-Minded<br/>Curious<br/>Objective", "Strengths"];
var intp1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Analytical"];
var intp2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Original"];
var intp3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Open-Minded"];
var intp4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Curious"];
var intp5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Objective"];
//ENTJ
var entj0 = ["Efficient<br/>Energetic<br/>Self-Confident<br/>Strong-Willed<br/>Strategic Thinkers<br/>Charismatic and Inspiring", "Strengths"];
var entj1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Efficient"];
var entj2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Energetic"];
var entj3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Self-Confident"];
var entj4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Strong-Willed"];
var entj5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Strategic Thinkers"];
var entj6 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Charismatic and Inspiring"];
//ENTP
var entp0 = ["Knowledgeable<br/>Quick Thinkers<br/>Original<br/>Excellent Brainstormers<br/>Charismatic<br/>Energetic", "Strengths"];
var entp1 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Knowledgeable"];
var entp2 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Quick Thinkers"];
var entp3 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Original"];
var entp4 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Excellent Brainstormers"];
var entp5 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Charismatic"];
var entp6 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Energetic"];

//INFJ
var infj0 = ["Creative<br/>Insightful<br/>Principled<br/>Passionate<br/>Altruistic", "Strengths"];
var infj1 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Creative"];
var infj2 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Insightful"];
var infj3 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Principled"];
var infj4 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Passionate"];
var infj5 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Altruistic"];
//INFP
var infp0 = ["Empathetic<br/>Generous<br/>Open-Minded<br/>Creative<br/>Passionate<br/>Idealistic", "Strengths"];
var infp1 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Empathetic"];
var infp2 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Generous"];
var infp3 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Open-Minded"];
var infp4 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Creative"];
var infp5 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Passionate"];
var infp6 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Idealistic"];
//ENFJ
var enfj0 = ["Tolerant<br/>Reliable<br/>Charismatic<br/>Altruistic<br/>Natural Leaders", "Strengths"];
var enfj1 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Tolerant"];
var enfj2 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Reliable"];
var enfj3 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Charismatic"];
var enfj4 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Altruistic"];
var enfj5 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Natural Leaders"];
//ENFP
var enfp0 = ["Curious<br/>Observant<br/>Energetic and Enthusiastic<br/>Excellent Communicators<br/>Know How to Relax<br/>Very Popular and Friendly", "Strengths"];
var enfp1 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Curious"];
var enfp2 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Observant"];
var enfp3 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Energetic and Enthusiastic"];
var enfp4 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Excellent Communicators"];
var enfp5 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Know How to Relax"];
var enfp6 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Very Popular and Friendly"];

//ISTJ
var istj0 = ["Honest and Direct<br/>Strong-willed and Dutiful<br/>Very Responsible<br/>Calm and Practical<br/>Create and Enforce Order<br/>Jacks-of-all-trades", "Strengths"];
var istj1 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Honest and Direct"];
var istj2 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Strong-willed and Dutiful"];
var istj3 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Very Responsible"];
var istj4 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Calm and Practical"];
var istj5 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Create and Enforce Order"];
var istj6 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Jacks-of-all-trades"];
//ISFJ
var isfj0 = ["Supportive<br/>Reliable and Patient<br/>Imaginative and Observant<br/>Enthusiastic<br/>Loyal and Hard-Working<br/>Good Practical Skills", "Strengths"];
var istj1 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Supportive"];
var isfj2 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Reliable and Patient"];
var isfj3 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Imaginative and Observant"];
var isfj4 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Enthusiastic"];
var isfj5 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Loyal and Hard-Working"];
var isfj6 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Good Practical Skills"];
//ESTJ
var estj0 = ["Dedicated<br/>Direct and Honest<br/>Loyal, Patient and Reliable<br/>Enjoy Creating Order<br/>Excellent Organizers<br/>Strong-willed", "Strengths"];
var estj1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Dedicated"];
var estj2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Direct and Honest"];
var estj3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Loyal, Patient and Reliable"];
var estj4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Enjoy Creating Order"];
var estj5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Excellent Organizers"];
var estj6 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Strong-willed"];
//ESFJ
var esfj0 = ["Strong Practical Skills<br/>Strong Sense of Duty<br/>Very Loyal<br/>Sensitive and Warm<br/>Good at Connecting with Others", "Strengths"];
var esfj1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Strong Practical Skills"];
var esfj2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Strong Sense of Duty"];
var esfj3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Very Loyal"];
var esfj4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Sensitive and Warm"];
var esfj5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Good at Connecting with Others"];

//ISTP
var istp0 = ["Optimistic and Energetic<br/>Creative and Practical<br/>Spontaneous and Rational<br/>Know How to Prioritizer<br/>Great in a Crisis<br/>Relaxed", "Strengths"];
var istp1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Optimistic and Energetic"];
var istp2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Creative and Practical"];
var istp3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Spontaneous and Rational"];
var istp4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Know How to Prioritizer"];
var istp5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Great in a Crisis"];
var istp6 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Relaxed"];
//ISFP
var isfp0 = ["Charming<br/>Sensitive to Others<br/>Imaginative<br/>Passionate<br/>Curious<br/>Artistic", "Strengths"];
var isfp1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Charming"];
var isfp2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Sensitive to Others"];
var isfp3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Imaginative"];
var isfp4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Passionate"];
var isfp5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Curious"];
var isfp6 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Artistic"];
//ESTP
var estp0 = ["Bold<br/>Rational and Practical<br/>Original<br/>Perceptive<br/>Direct<br/>Sociable", "Strengths"];
var estp1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Bold"];
var estp2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Rational and Practical"];
var estp3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Original"];
var estp4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Perceptive"];
var estp5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Direct"];
var estp6 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Sociable"];
//ESFP
var esfp0 = ["Bold<br/>Original<br/>Aesthetics and Showmanship<br/>Practical<br/>Observant<br/>Excellent People Skills", "Strengths"];
var esfp1 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Bold"];
var esfp2 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Original"];
var esfp3 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Aesthetics and Showmanship"];
var esfp4 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Practical"];
var esfp5 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Observant"];
var esfp6 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Excellent People Skills"];


var col = ["#51a07d","#509c54"]

var k=0;
function contatoreESTJ() {
   k = k+1;
   if (k === 7) {k = 0};
}

var i=0;
function contatoreINTJ() {
	i = i+1;
	if (i === 7) {i = 0};
 }
  function contatoreINTP() {
	 i = i+1;
	 if (i === 6) {i = 0};
  }
  function contatoreENTJ() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreENTP() {
	i = i+1;
	if (i === 7) {i = 0};
 }


 function contatoreINFJ() {
	i = i+1;
	if (i === 6) {i = 0};
 }
 function contatoreINFP() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreENFJ() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreENFP() {
	i = i+1;
	if (i === 6) {i = 0};
 }


 function contatoreISTJ() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreISFJ() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreESFJ() {
	i = i+1;
	if (i === 6) {i = 0};
 }

 
 function contatoreISTP() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreISFP() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreESTP() {
	i = i+1;
	if (i === 7) {i = 0};
 }
 function contatoreESFP() {
	i = i+1;
	if (i === 7) {i = 0};
 }

var card = document.getElementById('card');
var cardText = document.getElementById('quoteText');
var author = document.getElementById('author');
var authorText = document.getElementById('authorText');
card.onclick = function(){

if (M+B+T+I == "ESTJ") {
   contatoreESTJ();
   if (k == 0) {var ranText = estj0};
   if (k == 1) {var ranText = estj1};
   if (k == 2) {var ranText = estj2};
   if (k == 3) {var ranText = estj3};
   if (k == 4) {var ranText = estj4};
   if (k == 5) {var ranText = estj5};
   if (k == 6) {var ranText = estj6};
}
else if (M+B+T+I == "INTJ") {
	contatoreINTJ();
	if (i == 0) {var ranText = intj0};
	if (i == 1) {var ranText = intj1};
	if (i == 2) {var ranText = intj2};
	if (i == 3) {var ranText = intj3};
	if (i == 4) {var ranText = intj4};
	if (i == 5) {var ranText = intj5};
	if (i == 6) {var ranText = intj6};
 }
 else if (M+B+T+I == "INTP") {
	contatoreINTP();
	if (i == 0) {var ranText = intp0};
	if (i == 1) {var ranText = intp1};
	if (i == 2) {var ranText = intp2};
	if (i == 3) {var ranText = intp3};
	if (i == 4) {var ranText = intp4};
	if (i == 5) {var ranText = intp5};
 }
 else if (M+B+T+I == "ENTJ") {
	contatoreENTJ();
	if (i == 0) {var ranText = entj0};
	if (i == 1) {var ranText = entj1};
	if (i == 2) {var ranText = entj2};
	if (i == 3) {var ranText = entj3};
	if (i == 4) {var ranText = entj4};
	if (i == 5) {var ranText = entj5};
	if (i == 6) {var ranText = entj6};
 }
 else if (M+B+T+I == "ENTP") {
	contatoreENTP();
	if (i == 0) {var ranText = entp0};
	if (i == 1) {var ranText = entp1};
	if (i == 2) {var ranText = entp2};
	if (i == 3) {var ranText = entp3};
	if (i == 4) {var ranText = entp4};
	if (i == 5) {var ranText = entp5};
	if (i == 6) {var ranText = entp6};
 }

 else if (M+B+T+I == "INFJ") {
	contatoreINFJ();
	if (i == 0) {var ranText = infj0};
	if (i == 1) {var ranText = infj1};
	if (i == 2) {var ranText = infj2};
	if (i == 3) {var ranText = infj3};
	if (i == 4) {var ranText = infj4};
	if (i == 5) {var ranText = infj5};
 }
 else if (M+B+T+I == "INFP") {
	contatoreINFP();
	if (i == 0) {var ranText = infp0};
	if (i == 1) {var ranText = infp1};
	if (i == 2) {var ranText = infp2};
	if (i == 3) {var ranText = infp3};
	if (i == 4) {var ranText = infp4};
	if (i == 5) {var ranText = infp5};
	if (i == 6) {var ranText = infp6};
 }
 else if (M+B+T+I == "ENFJ") {
	contatoreENFJ();
	if (i == 0) {var ranText = enfj0};
	if (i == 1) {var ranText = enfj1};
	if (i == 2) {var ranText = enfj2};
	if (i == 3) {var ranText = enfj3};
	if (i == 4) {var ranText = enfj4};
	if (i == 5) {var ranText = enfj5};
	if (i == 6) {var ranText = enfj6};
 }
 else if (M+B+T+I == "ENFP") {
	contatoreENFP();
	if (i == 0) {var ranText = enfp0};
	if (i == 1) {var ranText = enfp1};
	if (i == 2) {var ranText = enfp2};
	if (i == 3) {var ranText = enfp3};
	if (i == 4) {var ranText = enfp4};
	if (i == 5) {var ranText = enfp5};
 }

 else if (M+B+T+I == "ISTJ") {
	contatoreISTJ();
	if (i == 0) {var ranText = istj0};
	if (i == 1) {var ranText = istj1};
	if (i == 2) {var ranText = istj2};
	if (i == 3) {var ranText = istj3};
	if (i == 4) {var ranText = istj4};
	if (i == 5) {var ranText = istj5};
	if (i == 6) {var ranText = istj6};
 }
 else if (M+B+T+I == "ISFJ") {
	contatoreISFJ();
	if (i == 0) {var ranText = isfj0};
	if (i == 1) {var ranText = isfj1};
	if (i == 2) {var ranText = isfj2};
	if (i == 3) {var ranText = isfj3};
	if (i == 4) {var ranText = isfj4};
	if (i == 5) {var ranText = isfj5};
	if (i == 6) {var ranText = isfj6};
 }
else if (M+B+T+I == "ESFJ") {
	contatoreESFJ();
	if (i == 0) {var ranText = esfj0};
	if (i == 1) {var ranText = esfj1};
	if (i == 2) {var ranText = esfj2};
	if (i == 3) {var ranText = esfj3};
	if (i == 4) {var ranText = esfj4};
	if (i == 5) {var ranText = esfj5};
 }

 else if (M+B+T+I == "ISTP") {
	contatoreISTP();
	if (i == 0) {var ranText = istp0};
	if (i == 1) {var ranText = istp1};
	if (i == 2) {var ranText = istp2};
	if (i == 3) {var ranText = istp3};
	if (i == 4) {var ranText = istp4};
	if (i == 5) {var ranText = istp5};
	if (i == 6) {var ranText = istp6};
 }
 else if (M+B+T+I == "ISFP") {
	contatoreISFP();
	if (i == 0) {var ranText = isfp0};
	if (i == 1) {var ranText = isfp1};
	if (i == 2) {var ranText = isfp2};
	if (i == 3) {var ranText = isfp3};
	if (i == 4) {var ranText = isfp4};
	if (i == 5) {var ranText = isfp5};
	if (i == 6) {var ranText = isfp6};
 }
 else if (M+B+T+I == "ESTP") {
	contatoreESTP();
	if (i == 0) {var ranText = estp0};
	if (i == 1) {var ranText = estp1};
	if (i == 2) {var ranText = estp2};
	if (i == 3) {var ranText = estp3};
	if (i == 4) {var ranText = estp4};
	if (i == 5) {var ranText = estp5};
	if (i == 6) {var ranText = estp6};
 }
 else if (M+B+T+I == "ESFP") {
	contatoreESFP();
	if (i == 0) {var ranText = esfp0};
	if (i == 1) {var ranText = esfp1};
	if (i == 2) {var ranText = esfp2};
	if (i == 3) {var ranText = esfp3};
	if (i == 4) {var ranText = esfp4};
	if (i == 5) {var ranText = esfp5};
	if (i == 6) {var ranText = esfp6};
 }
   var ranColor = col;
   card.style.backgroundColor = ranColor[0];
   author.style.backgroundColor = ranColor[1];

cardText.innerHTML = ranText[0];
authorText.innerHTML = ranText[1];
}








//carddddddddddd 22222222222222222222222222222222222222222222222222222222222222222222

//INTJ
var intj00 = ["Arrogant<br/>Dismissive of Emotions<br/>Overly Critical<br/>Combative<br/>Romantically Clueless", "Weaknesses"];
var intj11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Arrogant"];
var intj22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Dismissive of Emotions"];
var intj33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Overly Critical"];
var intj44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Combative"];
var intj55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Romantically Clueless"];
//INTP
var intp00 = ["Disconnected<br/>Insensitive<br/>Dissatisfied<br/>Impatient<br/>Perfectionistic", "Weaknesses"];
var intp11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Disconnected"];
var intp22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Insensitive"];
var intp33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Dissatisfied"];
var intp44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Impatient"];
var intp55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Perfectionistic"];
//ENTJ
var entj00 = ["Stubborn and Dominant<br/>Intolerant<br/>Impatient<br/>Arrogant<br/>Poor Handling of Emotions<br/>Cold and Ruthless", "Weaknesses"];
var entj11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Stubborn and Dominant"];
var entj22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Intolerant"];
var entj33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Impatient"];
var entj44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Arrogant"];
var entj55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Poor Handling of Emotions"];
var entj66 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Cold and Ruthless"];
//ENTP
var entp00 = ["Very Argumentative<br/>Insensitive<br/>Intolerant<br/>Can Find It Difficult to Focus<br/>Dislike Practical Matters", "Weaknesses"];
var entp11 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Very Argumentative"];
var entp22 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Insensitive"];
var entp33 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Intolerant"];
var entp44 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Can Find It Difficult to Focus"];
var entp55 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Dislike Practical Matters"];

//INFJ
var infj00 = ["Sensitive to Criticism<br/>Reluctant to Open Up<br/>Perfectionistic<br/>Avoiding the Ordinary<br/>Prone to Burnout", "Weaknesses"];
var infj11 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Sensitive to Criticism"];
var infj22 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Reluctant to Open Up"];
var infj33 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Perfectionistic"];
var infj44 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Avoiding the Ordinary"];
var infj55 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Prone to Burnout"];
//INFP
var infp00 = ["Unrealistic<br/>Self-Isolating<br/>Unfocused<br/>Emotionally Vulnerable<br/>Desperate to Please<br/>Self-Critical", "Weaknesses"];
var infp11 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Unrealistic"];
var infp22 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Self-Isolating"];
var infp33 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Unfocused"];
var infp44 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Emotionally Vulnerable"];
var infp55 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Desperate to Please"];
var infp66 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Self-Critical"];
//ENFJ
var enfj00 = ["Overly Idealistic<br/>Too Selfless<br/>Too Sensitive<br/>Fluctuating Self-Esteem<br/>Struggle to Make Tough Decisions", "Weaknesses"];
var enfj11 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Overly Idealistic"];
var enfj22 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Too Selfless"];
var enfj33 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Too Sensitive"];
var enfj44 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Fluctuating Self-Esteem"];
var enfj55 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Struggle to Make Tough Decisions"];
//ENFP
var enfp00 = ["Poor Practical Skills<br/>Find it Difficult to Focus<br/>Overthink Things<br/>Get Stressed Easily<br/>Highly Emotional<br/>Independent to a Fault", "Weaknesses"];
var enfp11 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Poor Practical Skills"];
var enfp22 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Find it Difficult to Focus"];
var enfp33 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Overthink Things"];
var enfp44 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Get Stressed Easily"];
var enfp55 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Highly Emotional"];
var enfp66 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Independent to a Fault"];

//ISTJ
var istj00 = ["Stubborn<br/>Insensitive<br/>Always by the Book<br/>Judgmental<br/>Often Unreasonably Blame Themselves", "Weaknesses"];
var istj11 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Stubborn"];
var istj22 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Insensitive"];
var istj33 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Always by the Book"];
var istj44 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Judgmental"];
var istj55 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Often Unreasonably Blame Themselves"];
//ISFJ
var isfj00 = ["Humble and Shy<br/>Take Things Too Personally<br/>Repress Their Feelings<br/>Overload Themselves<br/>Reluctant to Change<br/>Too Altruistic", "Weaknesses"];
var istj11 = ["Debaters rarely pass up a good opportunity to learn something new, especially abstract concepts", "Humble and Shy"];
var isfj22 = ["Debaters have tremendously flexible minds, and are able to shift from idea to idea without effort,", "Take Things Too Personally"];
var isfj33 = ["Having little attachment to tradition, Debater personalities are able to discard existing systems and methods and pull together disparate ideas from their extensive knowledge base", "Repress Their Feelings"];
var isfj44 = ["Nothing is quite as enjoyable to Debaters as analyzing problems from every angle to find the best solutions.", "Overload Themselves"];
var isfj55 = ["People with the Debater personality type have a way with words and wit that others find intriguing ", "Reluctant to Change"];
var isfj66 = ["When given a chance to combine these traits to examine an interesting problem, Debaters can be truly impressive in their enthusiasm and energ", "Too Altruistic"];
//ESTJ
var estj00 = ["Inflexible and Stubborn<br/>Uncomfortable with Unconventional Situations<br/>Judgmental<br/>Too Focused on Social Status<br/>Difficult to Relax<br/>Difficulty Expressing Emotion", "Weaknesses"];
var estj11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Inflexible and Stubborn"];
var estj22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Uncomfortable with Unconventional Situations"];
var estj33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Judgmental"];
var estj44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Too Focused on Social Status"];
var estj55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Difficult to Relax"];
var estj66 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Difficulty Expressing Emotion"];
//ESFJ
var esfj00 = ["Worried about Their Social Status<br/>Inflexible<br/>Reluctant to Innovate or Improvise<br/>Vulnerable to Criticism<br/>Often Too Needy<br/>Too Selfless", "Weaknesses"];
var esfj11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Worried about Their Social Status"];
var esfj22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Inflexible"];
var esfj33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Reluctant to Innovate or Improvise"];
var esfj44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Vulnerable to Criticism"];
var esfj55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Often Too Needy"];
var esfj66 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Too Selfless"];
//ISTP
var istp00 = ["Stubborn<br/>Insensitive<br/>Private and Reserved<br/>Easily Bored<br/>Dislike Commitment<br/>Risky Behavior", "Weaknesses"];
var istp11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Stubborn"];
var istp22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Insensitive"];
var istp33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Private and Reserved"];
var istp44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Easily Bored"];
var istp55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Dislike Commitment"];
var istp66 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Risky Behavior"];
//ISFP
var isfp00 = ["Fiercely Independent<br/>Unpredictable<br/>Easily Stressed<br/>Overly Competitive<br/>Fluctuating Self-Esteem", "Weaknesses"];
var isfp11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Fiercely Independent"];
var isfp22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Unpredictable"];
var isfp33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Easily Stressed"];
var isfp44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Overly Competitive"];
var isfp55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Fluctuating Self-Esteem"];
//ESTP
var estp00 = ["Insensitive<br/>Informed<br/>Impatient<br/>Risk-prone<br/>May Miss the Bigger Picture<br/>Defiant", "Weaknesses"];
var estp11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Insensitive"];
var estp22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Impatient"];
var estp33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Risk-prone"];
var estp44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Unstructured"];
var estp55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "May Miss the Bigger Picture"];
var estp66 = ["A strong will makes this dedication possible, and Executives don’t give up their beliefs because of simple opposition..", "Defiant"];
//ESFP
var esfp00 = ["Sensitive<br/>Conflict-Averse<br/>Easily Bored<br/>Poor Long-Term Planners<br/>Unfocused", "Weaknesses"];
var esfp11 = ["Seeing things to completion borders on an ethical obligation for Executives. Tasks aren’t simply abandoned because they’ve become difficult or boring ", "Sensitive"];
var esfp22 = ["Executives trust facts far more than abstract ideas or opinions. Straightforward statements a", "Conflict-Averse"];
var esfp33 = ["Executives work to exemplify truthfulness and reliability, considering stability and security very important.", "Easily Bored"];
var esfp44 = ["Chaos makes things unpredictable, and unpredictable things can’t be trusted when they are needed most ", "Poor Long-Term Planners"];
var esfp55 = ["This commitment to truth and clear standards makes Executives capable and confident leaders.", "Unfocused"];

var col2 = ["#bf5959","#9c5050"]

var k2=0;
function contatoreESTJ2() {
   k2 = k2+1;
   if (k2 === 7) {k2 = 0};
}

var i2=0;
function contatoreINTJ2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }
  function contatoreINTP2() {
	 i2 = i2+1;
	 if (i2 === 6) {i2 = 0};
  }
  function contatoreENTJ2() {
	i2 = i2+1;
	if (i2 === 7) {i2 = 0};
 }
 function contatoreENTP2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }


 function contatoreINFJ2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }
 function contatoreINFP2() {
	i2 = i2+1;
	if (i2 === 7) {i2 = 0};
 }
 function contatoreENFJ2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }
 function contatoreENFP2() {
	i2 = i2+1;
	if (i2 === 7) {i2 = 0};
 }


 function contatoreISTJ2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }
 function contatoreISFJ2() {
	i2 = i2+1;
	if (i2 === 7) {i2 = 0};
 }
 function contatoreESFJ2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }

 
 function contatoreISTP2() {
	i2 = i2+1;
	if (i2 === 7) {i2 = 0};
 }
 function contatoreISFP2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }
 function contatoreESTP2() {
	i2 = i2+1;
	if (i2 === 7) {i2 = 0};
 }
 function contatoreESFP2() {
	i2 = i2+1;
	if (i2 === 6) {i2 = 0};
 }

var card2 = document.getElementById('card2');
var cardText2 = document.getElementById('quoteText2');
var author2 = document.getElementById('author2');
var authorText2 = document.getElementById('authorText2');
card2.onclick = function(){
	if (M+B+T+I == "ESTJ") {
		contatoreESTJ2();
		if (k2 == 0) {var ranText2 = estj00};
		if (k2 == 1) {var ranText2 = estj11};
		if (k2 == 2) {var ranText2 = estj22};
		if (k2 == 3) {var ranText2 = estj33};
		if (k2 == 4) {var ranText2 = estj44};
		if (k2 == 5) {var ranText2 = estj55};
		if (k2 == 6) {var ranText2 = estj66};
	 }
	 else if (M+B+T+I == "INTJ") {
		 contatoreINTJ2();
		 if (i2 == 0) {var ranText2 = intj00};
		 if (i2 == 1) {var ranText2 = intj11};
		 if (i2 == 2) {var ranText2 = intj22};
		 if (i2 == 3) {var ranText2 = intj33};
		 if (i2 == 4) {var ranText2 = intj44};
		 if (i2 == 5) {var ranText2 = intj55};
	  }
	  else if (M+B+T+I == "INTP") {
		 contatoreINTP2();
		 if (i2 == 0) {var ranText2 = intp00};
		 if (i2 == 1) {var ranText2 = intp11};
		 if (i2 == 2) {var ranText2 = intp22};
		 if (i2 == 3) {var ranText2 = intp33};
		 if (i2 == 4) {var ranText2 = intp44};
		 if (i2 == 5) {var ranText2 = intp55};
	  }
	  else if (M+B+T+I == "ENTJ") {
		 contatoreENTJ2();
		 if (i2 == 0) {var ranText2 = entj00};
		 if (i2 == 1) {var ranText2 = entj11};
		 if (i2 == 2) {var ranText2 = entj22};
		 if (i2 == 3) {var ranText2 = entj33};
		 if (i2 == 4) {var ranText2 = entj44};
		 if (i2 == 5) {var ranText2 = entj55};
		 if (i2 == 6) {var ranText2 = entj66};
	  }
	  else if (M+B+T+I == "ENTP") {
		 contatoreENTP2();
		 if (i2 == 0) {var ranText2 = entp00};
		 if (i2 == 1) {var ranText2 = entp11};
		 if (i2 == 2) {var ranText2 = entp22};
		 if (i2 == 3) {var ranText2 = entp33};
		 if (i2 == 4) {var ranText2 = entp44};
		 if (i2 == 5) {var ranText2 = entp55};
	  }
	 
	  else if (M+B+T+I == "INFJ") {
		 contatoreINFJ2();
		 if (i2 == 0) {var ranText2 = infj00};
		 if (i2 == 1) {var ranText2 = infj11};
		 if (i2 == 2) {var ranText2 = infj22};
		 if (i2 == 3) {var ranText2 = infj33};
		 if (i2 == 4) {var ranText2 = infj44};
		 if (i2 == 5) {var ranText2 = infj55};
	  }
	  else if (M+B+T+I == "INFP") {
		 contatoreINFP2();
		 if (i2 == 0) {var ranText2 = infp00};
		 if (i2 == 1) {var ranText2 = infp11};
		 if (i2 == 2) {var ranText2 = infp22};
		 if (i2 == 3) {var ranText2 = infp33};
		 if (i2 == 4) {var ranText2 = infp44};
		 if (i2 == 5) {var ranText2 = infp55};
		 if (i2 == 6) {var ranText2 = infp66};
	  }
	  else if (M+B+T+I == "ENFJ") {
		 contatoreENFJ2();
		 if (i2 == 0) {var ranText2 = enfj00};
		 if (i2 == 1) {var ranText2 = enfj11};
		 if (i2 == 2) {var ranText2 = enfj22};
		 if (i2 == 3) {var ranText2 = enfj33};
		 if (i2 == 4) {var ranText2 = enfj44};
		 if (i2 == 5) {var ranText2 = enfj55};
	  }
	  else if (M+B+T+I == "ENFP") {
		 contatoreENFP2();
		 if (i2 == 0) {var ranText2 = enfp00};
		 if (i2 == 1) {var ranText2 = enfp11};
		 if (i2 == 2) {var ranText2 = enfp22};
		 if (i2 == 3) {var ranText2 = enfp33};
		 if (i2 == 4) {var ranText2 = enfp44};
		 if (i2 == 5) {var ranText2 = enfp55};
		 if (i2 == 6) {var ranText2 = enfp66};
	  }
	 
	  else if (M+B+T+I == "ISTJ") {
		 contatoreISTJ2();
		 if (i2 == 0) {var ranText2 = istj00};
		 if (i2 == 1) {var ranText2 = istj11};
		 if (i2 == 2) {var ranText2 = istj22};
		 if (i2 == 3) {var ranText2 = istj33};
		 if (i2 == 4) {var ranText2 = istj44};
		 if (i2 == 5) {var ranText2 = istj55};
	  }
	  else if (M+B+T+I == "ISFJ") {
		 contatoreISFJ2();
		 if (i2 == 0) {var ranText2 = isfj00};
		 if (i2 == 1) {var ranText2 = isfj11};
		 if (i2 == 2) {var ranText2 = isfj22};
		 if (i2 == 3) {var ranText2 = isfj33};
		 if (i2 == 4) {var ranText2 = isfj44};
		 if (i2 == 5) {var ranText2 = isfj55};
		 if (i2 == 6) {var ranText2 = isfj66};
	  }
	 else if (M+B+T+I == "ESFJ") {
		 contatoreESFJ2();
		 if (i2 == 0) {var ranText2 = esfj00};
		 if (i2 == 1) {var ranText2 = esfj11};
		 if (i2 == 2) {var ranText2 = esfj22};
		 if (i2 == 3) {var ranText2 = esfj33};
		 if (i2 == 4) {var ranText2 = esfj44};
		 if (i2 == 5) {var ranText2 = esfj55};
	  }
	 
	  else if (M+B+T+I == "ISTP") {
		 contatoreISTP2();
		 if (i2 == 0) {var ranText2 = istp00};
		 if (i2 == 1) {var ranText2 = istp11};
		 if (i2 == 2) {var ranText2 = istp22};
		 if (i2 == 3) {var ranText2 = istp33};
		 if (i2 == 4) {var ranText2 = istp44};
		 if (i2 == 5) {var ranText2 = istp55};
		 if (i2 == 6) {var ranText2 = istp66};
	  }
	  else if (M+B+T+I == "ISFP") {
		 contatoreISFP2();
		 if (i2 == 0) {var ranText2 = isfp00};
		 if (i2 == 1) {var ranText2 = isfp11};
		 if (i2 == 2) {var ranText2 = isfp22};
		 if (i2 == 3) {var ranText2 = isfp33};
		 if (i2 == 4) {var ranText2 = isfp44};
		 if (i2 == 5) {var ranText2 = isfp55};
	  }
	  else if (M+B+T+I == "ESTP") {
		 contatoreESTP2();
		 if (i2 == 0) {var ranText2 = estp00};
		 if (i2 == 1) {var ranText2 = estp11};
		 if (i2 == 2) {var ranText2 = estp22};
		 if (i2 == 3) {var ranText2 = estp33};
		 if (i2 == 4) {var ranText2 = estp44};
		 if (i2 == 5) {var ranText2 = estp55};
		 if (i2 == 6) {var ranText2 = estp66};
	  }
	  else if (M+B+T+I == "ESFP") {
		 contatoreESFP2();
		 if (i2 == 0) {var ranText2 = esfp00};
		 if (i2 == 1) {var ranText2 = esfp11};
		 if (i2 == 2) {var ranText2 = esfp22};
		 if (i2 == 3) {var ranText2 = esfp33};
		 if (i2 == 4) {var ranText2 = esfp44};
		 if (i2 == 5) {var ranText2 = esfp55};
	  }
   var ranColor2 = col2;
   card2.style.backgroundColor = ranColor2[0];
   author2.style.backgroundColor = ranColor2[1];

cardText2.innerHTML = ranText2[0];
authorText2.innerHTML = ranText2[1];
}


















var tito = document.getElementById('quoteTextz');
var tessto = document.getElementById('authorTextz');


var intj000 = ["It can be lonely at the top. As one of the rarest personality types – and one of the most capable – Architects (INTJs) know this all too well. Rational and quick-witted, Architects may struggle to find people who can keep up with their nonstop analysis of everything around them.These personalities can be both the boldest of dreamers and the bitterest of pessimists. Architects believe that, through willpower and intelligence, they can achieve even the most challenging of goals. But they may be cynical about human nature more generally, assuming that most people are lazy, unimaginative, or simply doomed to mediocrity.Architects derive much of their self-esteem from their knowledge and mental acuity. In school, people with this personality type may have been called “bookworms” or “nerds.” But rather than taking these labels as insults, many Architects embrace them. They are confident in their ability to teach themselves about – and master – any topic that interests them, whether that’s coding or capoeira or classical music.Architects can be single-minded, with little patience for frivolity, distractions, or idle gossip. That said, it would be a mistake to stereotype these personalities as dull or humorless. Many Architects are known for their irreverent wit, and beneath their serious exteriors, they often have a sharp, delightfully sarcastic sense of humor.Architects question everything. Many personality types trust the status quo, relying on conventional wisdom and other people’s expertise as they go about their lives. But ever-skeptical Architects prefer to make their own discoveries. In their quest to find better ways of doing things, they aren’t afraid to break the rules or risk disapproval – in fact, they rather enjoy it.But as anyone with this personality type would tell you, a new idea isn’t worth anything unless it actually works. Architects want to be successful, not just inventive. They bring a single-minded drive to their passion projects, applying the full force of their insight, logic, and willpower. And heaven help anyone who tries to slow them down by enforcing pointless rules or offering poorly thought-out criticism.This personality type comes with a strong independent streak. Architects don’t mind acting alone, perhaps because they don’t like waiting around for others to catch up with them. They also generally feel comfortable making decisions without asking for anyone else’s input. At times, this lone-wolf behavior can come across as insensitive, as it fails to take into consideration other people’s thoughts, desires, and plans.Architects aren’t known for being warm and fuzzy. They tend to prioritize rationality and success over politeness and pleasantries – in other words, they’d rather be right than popular. This may explain why so many fictional villains are modeled on this personality type.Because Architects value truth and depth, many common social practices – from small talk to white lies – may seem pointless or downright stupid to them. As a result, they may inadvertently come across as rude or even offensive when they’re only trying to be honest. At times, Architects may wonder if dealing with other people is even worth the frustration.But like any personality type, Architects do crave social interaction – they’d just prefer to surround themselves with people who share their values and priorities. Often, they can achieve this just by being themselves. When Architects pursue their interests, their natural confidence can draw people to them – professionally, socially, and even romantically.This personality type is full of contradictions. Architects are imaginative yet decisive, ambitious yet private, and curious yet focused. From the outside, these contradictions may seem baffling, but they make perfect sense once you understand the inner workings of the Architect mind.For Architects, life is like a giant game of chess. Relying on strategy rather than chance, they contemplate the strengths and weaknesses of each move before they make it. And they never lose faith that, with enough ingenuity and insight, they can find a way to win – no matter what challenges might arise along the way.", "The Chess Game of Life"];

var intp000 = ["Logicians pride themselves on their unique perspectives and vigorous intellect. They can’t help but puzzle over the mysteries of the universe – which may explain why some of the most influential philosophers and scientists of all time have been Logicians. This personality type is fairly rare, but with their creativity and inventiveness, Logicians aren’t afraid to stand out from the crowd.Logicians often lose themselves in thought – which isn’t necessarily a bad thing. People with this personality type hardly ever stop thinking. From the moment they wake up, their minds buzz with ideas, questions, and insights. At times, they may even find themselves conducting full-fledged debates in their own heads.From the outside, Logicians may seem to live in a never-ending daydream. They have a reputation for being pensive, detached, and a bit reserved. That is, until they try to train all of their mental energy on the moment or the person at hand, which can be a bit uncomfortable for everyone. But regardless of which mode they’re in, Logicians are Introverts and tend to get tired out by extensive socializing. After a long day, they crave time alone to consult their own thoughts.But it would be a mistake to think that Logicians are unfriendly or uptight. When they connect with someone who can match their mental energy, these personalities absolutely light up, leaping from one thought to another. Few things energize them like the opportunity to swap ideas or enjoy a lively debate with another curious, inquiring soul.Logicians love to analyze patterns. Without necessarily knowing how they do it, people with this personality type often have a Sherlock Holmes–like knack for spotting discrepancies and irregularities. In other words, it’s a bad idea to lie to them.Ironically, Logicians shouldn’t always be held at their word. They rarely mean to be dishonest, but with their active minds, they sometimes overflow with ideas and theories that they haven’t thought through all the way. They may change their mind on anything from their weekend plans to a fundamental moral principle, without ever realizing that they’d appeared to have made up their mind in the first place. In addition, they are often happy to play devil’s advocate in order to keep an interesting discussion humming along.Logicians could spend all day musing about ideas and possibilities – and they often do. That said, the practical, everyday work of turning those ideas into reality doesn’t always hold their interest. Fortunately, when it comes to dissecting a tricky, multilayered problem and coming up with a creative solution, few personality types can match Logicians’ creative genius and potential.People with this personality type want to understand everything in the universe, but one area in particular tends to mystify them: human nature. As their name suggests, Logicians feel most at home in the realm of logic and rationality. As a result, they can find themselves baffled by the illogical, irrational ways that feelings and emotions influence people’s behavior – including their own.This doesn’t mean that Logicians are unfeeling. These personalities generally want to offer emotional support to their friends and loved ones, but they don’t necessarily know how. And because they can’t decide on the best, most efficient way to offer support, they may hold off on doing or saying anything at all.This “analysis paralysis” can affect multiple areas of Logicians’ lives. People with this personality type can overthink even the smallest of decisions. This makes them feel ineffective and stuck, so exhausted by the endless parade of thoughts in their mind that they struggle to get things done.The good news is that Logicians don’t have to stay stuck for long. Their unique strengths include everything they need to pull themselves out of the ruts that they occasionally fall into. By leveraging their creativity and their open-mindedness, Logicians can reach their full potential – both as thinkers and as happy, well-rounded people.", "Unfocused"];

var entj000 = ["Analyst type, Commanders are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, Commanders are also characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have Commanders to thank for many of the businesses and institutions we take for granted every day.If there’s anything Commanders love, it’s a good challenge, big or small, and they firmly believe that given enough time and resources, they can achieve any goal. This quality makes people with the Commander personality type brilliant entrepreneurs, and their ability to think strategically and hold a long-term focus while executing each step of their plans with determination and precision makes them powerful business leaders. This determination is often a self-fulfilling prophecy, as Commanders push their goals through with sheer willpower where others might give up and move on, and their Extraverted (E) nature means they are likely to push everyone else right along with them, achieving spectacular results in the process.At the negotiating table, be it in a corporate environment or buying a car, Commanders are dominant, relentless, and unforgiving. This isn’t because they are coldhearted or vicious per se – it’s more that Commander personalities genuinely enjoy the challenge, the battle of wits, the repartee that comes from this environment, and if the other side can’t keep up, that’s no reason for Commanders to fold on their own core tenet of ultimate victory.If there’s anyone Commanders respect, it’s someone who is able to stand up to them intellectually, who is able to act with a precision and quality equal to their own. Commander personalities have a particular skill in recognizing the talents of others, and this helps in both their team-building efforts (since no one, no matter how brilliant, can do everything alone), and to keep Commanders from displaying too much arrogance and condescension. However, they also have a particular skill in calling out others’ failures with a chilling degree of insensitivity, and this is where Commanders really start to run into trouble.Emotional expression isn’t the strong suit of any Analyst type, but Commanders’ distance from their emotions is especially public, and felt directly by a much broader swath of people. Especially in a professional environment, Commanders will simply crush the sensitivities of those they view as inefficient, incompetent or lazy. To people with the Commander personality type, emotional displays are displays of weakness, and it’s easy to make enemies with this approach – Commanders will do well to remember that they absolutely depend on having a functioning team, not just to achieve their goals, but for their validation and feedback as well, something Commanders are, curiously, very sensitive to.Commanders are true powerhouses, and they cultivate an image of being larger than life – and often enough they are. They need to remember though, that their stature comes not just from their own actions, but from the actions of the team that props them up, and that it’s important to recognize the contributions, talents and needs, especially from an emotional perspective, of their support network. Even if they have to adopt a fake it ‘til you make it mentality, if Commanders are able to combine an emotionally healthy focus alongside their many strengths, they will be rewarded with deep, satisfying relationships and all the challenging victories they can handle.", "Unfocused"];

var estp000 = ["No one loves the process of mental sparring more than the Debater personality type, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points. Debaters are the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don’t always do this because they are trying to achieve some deeper purpose or strategic goal, though. Sometimes it’s for the simple reason that it’s fun.Playing the devil’s advocate helps people with the Debater personality type to not only develop a better sense of others’ reasoning, but a better understanding of opposing ideas – since Debaters are the ones arguing them.This tactic shouldn’t be confused with the sort of mutual understanding Diplomat personalities seek – Debaters, like all Analyst personality types, are on a constant quest for knowledge, and what better way to gain it than to attack and defend an idea, from every angle, from every side?Taking a certain pleasure in being the underdog, Debaters enjoy the mental exercise found in questioning the prevailing mode of thought, making them irreplaceable in reworking existing systems or shaking things up and pushing them in clever new directions. However, they’ll be miserable managing the day-to-day mechanics of actually implementing their suggestions. Debater personalities love to brainstorm and think big, but they will avoid getting caught doing the “grunt work” at all costs. Debaters only make up about three percent of the population, which is just right, as it lets them create original ideas, then step back to let more numerous and fastidious personalities handle the logistics of implementation and maintenance.Debaters’ capacity for debate can be a vexing one – while often appreciated when it’s called for, it can fall painfully flat when they step on others’ toes by say, openly questioning their boss in a meeting, or picking apart everything their significant other says. This is further complicated by Debaters’ unyielding honesty, as this type doesn’t mince words and cares little about being seen as sensitive or compassionate. Likeminded types get along well enough with people with the Debater personality type, but more sensitive types, and society in general, are often conflict-averse, preferring feelings, comfort, and even white lies over unpleasant truths and hard rationality.This frustrates Debaters, and they find that their quarrelsome fun burns many bridges, oftentimes inadvertently, as they plow through others’ thresholds for having their beliefs questioned and their feelings brushed aside. Treating others as they’d be treated, Debaters have little tolerance for being coddled, and dislike when people beat around the bush, especially when asking a favor. Debater personalities find themselves respected for their vision, confidence, knowledge, and keen sense of humor, but often struggle to utilize these qualities as the basis for deeper friendships and romantic relationships.Debaters have a longer road than most in harnessing their natural abilities – their intellectual independence and free-form vision are tremendously valuable when they’re in charge, or at least have the ear of someone who is, but getting there can take a level of follow-through that Debaters struggle with.Once they’ve secured such a position, Debaters need to remember that for their ideas to come to fruition, they will always depend on others to assemble the pieces – if they’ve spent more time “winning” arguments than they have building consensus, many Debaters will find they simply don’t have the support necessary to be successful. Playing devil’s advocate so well, people with this personality type may find that the most complex and rewarding intellectual challenge is to understand a more sentimental perspective, and to argue consideration and compromise alongside logic and progress.", "Unfocused"];




var infj000 = ["Advocates are the rarest personality types of all. Still, Advocates leave their mark on the world. They have a deep sense of idealism and integrity, but they aren’t idle dreamers – they take concrete steps to realize their goals and make a lasting impact.Advocates’ unique combination of personality traits makes them complex and quite versatile. For example, Advocates can speak with great passion and conviction, especially when standing up for their ideals. At other times, however, they may choose to be soft-spoken and understated, preferring to keep the peace rather than challenge others.Advocates generally strive to do what’s right – and they want to help create a world where others do the right thing as well. People with this personality type may feel called to use their strengths – including creativity, imagination, and sensitivity – to uplift others and spread compassion. Concepts like egalitarianism and karma can mean a great deal to Advocates.Advocates may see helping others as their purpose in life. They are troubled by injustice, and they typically care more about altruism than personal gain. As a result, Advocates tend to step in when they see someone facing unfairness or hardship. Many people with this personality type also aspire to fix society’s deeper problems, in the hope that unfairness and hardship can become things of the past.Advocates may be reserved, but they communicate in a way that is warm and sensitive. This emotional honesty and insight can make a powerful impression on the people around them.Advocates value deep, authentic relationships with others, and they tend to take great care with other people’s feelings. That said, these personalities also need to prioritize reconnecting with themselves. Advocates need to take some time alone now and then to decompress, recharge, and process their thoughts and feelings.At times, Advocates may focus so intently on their ideals that they don’t take care of themselves. Advocates may feel that they aren’t allowed to rest until they’ve achieved their unique vision of success, but this mindset can lead to stress and burnout. If this happens, people with this personality type may find themselves feeling uncharacteristically ill-tempered.Advocates might find themselves feeling especially stressed in the face of conflict and criticism. These personalities tend to act with the best of intentions, and it can frustrate them when others don’t appreciate this. At times, even constructive criticism may feel deeply personal or hurtful to Advocates.Many Advocates feel compelled to find a mission for their lives. When they encounter inequity or unfairness, they tend to think, “How can I fix this?” They are well-suited to support a movement to right a wrong, no matter how big or small. Advocates just need to remember that while they’re busy taking care of the world, they need to take care of themselves too.", "Unfocused"];

var infp000 = ["Although they may seem quiet or unassuming, Mediators (INFPs) have vibrant, passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. These personalities are known for their sensitivity – Mediators can have profound emotional responses to music, art, nature, and the people around them.Idealistic and empathetic, Mediators long for deep, soulful relationships, and they feel called to help others. But because this personality type makes up such a small portion of the population, Mediators may sometimes feel lonely or invisible, adrift in a world that doesn’t seem to appreciate the traits that make them unique.Mediators share a sincere curiosity about the depths of human nature. Introspective to the core, they’re exquisitely attuned to their own thoughts and feelings, but they yearn to understand the people around them as well. Mediators are compassionate and nonjudgmental, always willing to hear another person’s story. When someone opens up to them or turns to them for comfort, they feel honored to listen and be of help.Empathy is among this personality type’s greatest gifts, but at times it can be a liability. The troubles of the world weigh heavily on Mediators’ shoulders, and these personalities can be vulnerable to internalizing other people’s negative moods or mindsets. Unless they learn to set boundaries, Mediators may feel overwhelmed by just how many wrongs there are that need to be set right.Few things make Mediators more uneasy than pretending to be someone they aren’t. With their sensitivity and their commitment to authenticity, people with this personality type tend to crave opportunities for creative self-expression. It comes as no surprise, then, that many famous Mediators are poets, writers, actors, and artists. They can’t help but muse about the meaning and purpose of life, dreaming up all sorts of stories, ideas, and possibilities along the way.Through these imaginative landscapes, Mediators can explore their own inner nature as well as their place in the world. While this is a beautiful trait, these personalities sometimes show a tendency to daydream and fantasize rather than take action. To avoid feeling frustrated, unfulfilled, or incapable, Mediators need to make sure that they take steps to turn their dreams and ideas into reality.People with this personality type tend to feel directionless or stuck until they connect with a sense of purpose for their lives. For many Mediators, this purpose has something to do with uplifting others and their ability to feel other people’s suffering as if it were their own. While Mediators want to help everyone, they need to focus their energy and efforts – otherwise, they can end up exhausted.Fortunately, like flowers in the spring, Mediators’ creativity and idealism can bloom even after the darkest of seasons. Although they know the world will never be perfect, Mediators still care about making it better however they can. This quiet belief in doing the right thing may explain why these personalities so often inspire compassion, kindness, and beauty wherever they go.", "Unfocused"];

var enfj000 = ["Protagonists are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, Protagonists take a great deal of pride and joy in guiding others to work together to improve themselves and their community.People are drawn to strong personalities, and Protagonists radiate authenticity, concern and altruism, unafraid to stand up and speak when they feel something needs to be said. They find it natural and easy to communicate with others, especially in person, and their Intuitive (N) trait helps people with the Protagonist personality type to reach every mind, be it through facts and logic or raw emotion. Protagonists easily see people’s motivations and seemingly disconnected events, and are able to bring these ideas together and communicate them as a common goal with an eloquence that is nothing short of mesmerizing.The interest Protagonists have in others is genuine, almost to a fault – when they believe in someone, they can become too involved in the other person’s problems, place too much trust in them. Luckily, this trust tends to be a self-fulfilling prophecy, as Protagonists’ altruism and authenticity inspire those they care about to become better themselves. But if they aren’t careful, they can overextend their optimism, sometimes pushing others further than they’re ready or willing to go.Protagonists are vulnerable to another snare as well: they have a tremendous capacity for reflecting on and analyzing their own feelings, but if they get too caught up in another person’s plight, they can develop a sort of emotional hypochondria, seeing other people’s problems in themselves, trying to fix something in themselves that isn’t wrong. If they get to a point where they are held back by limitations someone else is experiencing, it can hinder Protagonists’ ability to see past the dilemma and be of any help at all. When this happens, it’s important for Protagonists to pull back and use that self-reflection to distinguish between what they really feel, and what is a separate issue that needs to be looked at from another perspective.People with the Protagonist personality type are passionate altruists, sometimes even to a fault, and they are unlikely to be afraid to take the slings and arrows while standing up for the people and ideas they believe in. It is no wonder that many famous Protagonists are cultural or political icons – this personality type wants to lead the way to a brighter future, whether it’s by leading a nation to prosperity, or leading their little league softball team to a hard-fought victory.", "Unfocused"];

var enfp000 = ["The Campaigner personality is a true free spirit. They are often the life of the party, but unlike types in the Explorer Role group, Campaigners are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others. Charming, independent, energetic and compassionate, the 7% oMore than just sociable people-pleasers though, Campaigners, like all their Diplomat cousins, are shaped by their Intuitive (N) quality, allowing them to read between the lines with curiosity and energy. They tend to see life as a big, complex puzzle where everything is connected – but unlike Analyst personality types, who tend to see that puzzle as a series of systemic machinations, Campaigners see it through a prism of emotion, compassion and mysticism, and are always looking for a deeper meaning.f the population that they comprise can certainly be felt in any crowd.Many other types are likely to find these qualities irresistible, and if they’ve found a cause that sparks their imagination, Campaigners will bring an energy that oftentimes thrusts them into the spotlight, held up by their peers as a leader and a guru – but this isn’t always where independence-loving Campaigners want to be. Worse still if they find themselves beset by the administrative tasks and routine maintenance that can accompany a leadership position. Campaigners’ self-esteem is dependent on their ability to come up with original solutions, and they need to know that they have the freedom to be innovative – they can quickly lose patience or become dejected if they get trapped in a boring role.Luckily, Campaigners know how to relax, and they are perfectly capable of switching from a passionate, driven idealist in the workplace to that imaginative and enthusiastic free spirit on the dance floor, often with a suddenness that can surprise even their closest friends. Being in the mix also gives them a chance to connect emotionally with others, giving them cherished insight into what motivates their friends and colleagues. They believe that everyone should take the time to recognize and express their feelings, and their empathy and sociability make that a natural conversation topic.The Campaigner personality type needs to be careful, however – if they rely too much on their intuition, assume or anticipate too much about a friend’s motivations, they can misread the signals and frustrate plans that a more straightforward approach would have made simple. This kind of social stress is the bugbear that keeps harmony-focused Diplomats awake at night. Campaigners are very emotional and sensitive, and when they step on someone’s toes, they both feel it.Campaigners will spend a lot of time exploring social relationships, feelings and ideas before they find something that really rings true. But when they finally do find their place in the world, their imagination, empathy and courage are likely to produce incredible results.", "Unfocused"];




var istj000 = ["The Logistician personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make Logisticians a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the Logistician personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, Logisticians hold back none of their time and energy completing each relevant task with accuracy and patience.Logisticians don’t make many assumptions, preferring instead to analyze their surroundings, check their facts and arrive at practical courses of action. Logistician personalities are no-nonsense, and when they’ve made a decision, they will relay the facts necessary to achieve their goal, expecting others to grasp the situation immediately and take action. Logisticians have little tolerance for indecisiveness, but lose patience even more quickly if their chosen course is challenged with impractical theories, especially if they ignore key details – if challenges becomes time-consuming debates, Logisticians can become noticeably angry as deadlines tick nearer.When Logisticians say they are going to get something done, they do it, meeting their obligations no matter the personal cost, and they are baffled by people who don’t hold their own word in the same respect. Combining laziness and dishonesty is the quickest way to get on Logisticians’ bad side. Consequently, people with the Logistician personality type often prefer to work alone, or at least have their authority clearly established by hierarchy, where they can set and achieve their goals without debate or worry over other’s reliability.Logisticians have sharp, fact-based minds, and prefer autonomy and self-sufficiency to reliance on someone or something. Dependency on others is often seen by Logisticians as a weakness, and their passion for duty, dependability and impeccable personal integrity forbid falling into such a trap.This sense of personal integrity is core to Logisticians, and goes beyond their own minds – Logistician personalities adhere to established rules and guidelines regardless of cost, reporting their own mistakes and telling the truth even when the consequences for doing so could be disastrous. To Logisticians, honesty is far more important than emotional considerations, and their blunt approach leaves others with the false impression that Logisticians are cold, or even robotic. People with this type may struggle to express emotion or affection outwardly, but the suggestion that they don’t feel, or worse have no personality at all, is deeply hurtful.Logisticians’ dedication is an excellent quality, allowing them to accomplish much, but it is also a core weakness that less scrupulous individuals take advantage of. Logisticians seek stability and security, considering it their duty to maintain a smooth operation, and they may find that their coworkers and significant others shift their responsibilities onto them, knowing that they will always take up the slack. Logisticians tend to keep their opinions to themselves and let the facts do the talking, but it can be a long time before observable evidence tells the whole story.Logisticians need to remember to take care of themselves – their stubborn dedication to stability and efficiency can compromise those goals in the long term as others lean ever-harder on them, creating an emotional strain that can go unexpressed for years, only finally coming out after it’s too late to fix. If they can find coworkers and spouses who genuinely appreciate and complement their qualities, who enjoy the brightness, clarity and dependability that they offer, Logisticians will find that their stabilizing role is a tremendously satisfying one, knowing that they are part of a system that works.", "Unfocused"];

var isfj000 = ["The Defender personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though sensitive, Defenders have excellent analytical abilities; though reserved, they have well-developed people skills and robust social relationships; and though they are generally a conservative type, Defenders are often receptive to change and new ideas. As with so many things, people with the Defender personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.There’s hardly a better type to make up such a large proportion of the population, nearly 13%. Combining the best of tradition and the desire to do good, Defenders are found in lines of work with a sense of history behind them, such as medicine, academics and charitable social work.Defender personalities (especially Turbulent ones) are often meticulous to the point of perfectionism, and though they procrastinate, they can always be relied on to get the job done on time. Defenders take their responsibilities personally, consistently going above and beyond, doing everything they can to exceed expectations and delight others, at work and at home.The challenge for Defenders is ensuring that what they do is noticed. They have a tendency to underplay their accomplishments, and while their kindness is often respected, more cynical and selfish people are likely to take advantage of Defenders’ dedication and humbleness by pushing work onto them and then taking the credit. Defenders need to know when to say no and stand up for themselves if they are to maintain their confidence and enthusiasm.Naturally social, an odd quality for Introverts, Defenders utilize excellent memories not to retain data and trivia, but to remember people, and details about their lives. When it comes to gift-giving, Defenders have no equal, using their imagination and natural sensitivity to express their generosity in ways that touch the hearts of their recipients. While this is certainly true of their coworkers, whom people with the Defender personality type often consider their personal friends, it is in family that their expressions of affection fully bloom.Defender personalities are a wonderful group, rarely sitting idle while a worthy cause remains unfinished. Defenders’ ability to connect with others on an intimate level is unrivaled among Introverts, and the joy they experience in using those connections to maintain a supportive, happy family is a gift for everyone involved. They may never be truly comfortable in the spotlight, and may feel guilty taking due credit for team efforts, but if they can ensure that their efforts are recognized, Defenders are likely to feel a level of satisfaction in what they do that many other personality types can only dream of.", "Unfocused"];

var estj000 = ["Executives are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the Executive personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, Executives often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.Demand for such leadership is high in democratic societies, and forming no less than 11% of the population, it’s no wonder that many of America’s presidents have been Executives. Strong believers in the rule of law and authority that must be earned, Executive personalities lead by example, demonstrating dedication and purposeful honesty, and an utter rejection of laziness and cheating, especially in work. If anyone declares hard, manual work to be an excellent way to build character, it is Executives.Executives are aware of their surroundings and live in a world of clear, verifiable facts – the surety of their knowledge means that even against heavy resistance, they stick to their principles and push an unclouded vision of what is and is not acceptable. Their opinions aren’t just empty talk either, as Executives are more than willing to dive into the most challenging projects, improving action plans and sorting details along the way, making even the most complicated tasks seem easy and approachable.However, Executives don’t work alone, and they expect their reliability and work ethic to be reciprocated – people with this personality type meet their promises, and if partners or subordinates jeopardize them through incompetence or laziness, or worse still, dishonesty, they do not hesitate to show their wrath. This can earn them a reputation for inflexibility, a trait shared by all Sentinel personalities, but it’s not because Executives are arbitrarily stubborn, but because they truly believe that these values are what make society work.The main challenge for Executives is to recognize that not everyone follows the same path or contributes in the same way. A true leader recognizes the strength of the individual, as well as that of the group, and helps bring those individuals’ ideas to the table. That way, Executives really do have all the facts, and are able to lead the charge in directions that work for everyone.", "Unfocused"];

var esfj000 = ["People who share the Consul personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, Consuls are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, Consuls continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.Discussing scientific theories or debating European politics isn’t likely to capture Consuls’ interest for too long. Consuls are more concerned with fashion and their appearance, their social status and the standings of other people. Practical matters and gossip are their bread and butter, but Consuls do their best to use their powers for good.Consuls are altruists, and they take seriously their responsibility to help and to do the right thing. Unlike their Diplomat relatives however, people with the Consul personality type will base their moral compass on established traditions and laws, upholding authority and rules, rather than drawing their morality from philosophy or mysticism. It’s important for Consuls to remember though, that people come from many backgrounds and perspectives, and what may seem right to them isn’t always an absolute truth.Consuls love to be of service, enjoying any role that allows them to participate in a meaningful way, so long as they know that they are valued and appreciated. This is especially apparent at home, and Consuls make loyal and devoted partners and parents. Consul personalities respect hierarchy, and do their best to position themselves with some authority, at home and at work, which allows them to keep things clear, stable and organized for everyone.Supportive and outgoing, Consuls can always be spotted at a party – they’re the ones finding time to chat and laugh with everyone! But their devotion goes further than just breezing through because they have to. Consuls truly enjoy hearing about their friends’ relationships and activities, remembering little details and always standing ready to talk things out with warmth and sensitivity. If things aren’t going right, or there’s tension in the room, Consuls pick up on it and to try to restore harmony and stability to the group.Being pretty conflict-averse, Consuls spend a lot of their energy establishing social order, and prefer plans and organized events to open-ended activities or spontaneous get-togethers. People with this personality type put a lot of effort into the activities they’ve arranged, and it’s easy for Consuls’ feelings to be hurt if their ideas are rejected, or if people just aren’t interested. Again, it’s important for Consuls to remember that everyone is coming from a different place, and that disinterest isn’t a comment about them or the activity they’ve organized – it’s just not their thing.Coming to terms with their sensitivity is Consuls’ biggest challenge – people are going to disagree and they’re going to criticize, and while it hurts, it’s just a part of life. The best thing for Consuls to do is to do what they do best: be a role model, take care of what they have the power to take care of, and enjoy that so many people do appreciate the efforts they make.", "Unfocused"];




var istp000 = ["Virtuosos love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, Virtuosos find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.Virtuosos explore ideas through creating, troubleshooting, trial and error and first-hand experience. They enjoy having other people take an interest in their projects and sometimes don’t even mind them getting into their space. Of course, that’s on the condition that those people don’t interfere with Virtuosos’ principles and freedom, and they’ll need to be open to Virtuosos returning the interest in kind.Virtuosos enjoy lending a hand and sharing their experience, especially with the people they care about, and it’s a shame they’re so uncommon, making up only about five percent of the population. Virtuoso women are especially rare, and the typical gender roles that society tends to expect can be a poor fit – they’ll often be seen as tomboys from a young age.While their mechanical tendencies can make them appear simple at a glance, Virtuosos are actually quite enigmatic. Friendly but very private, calm but suddenly spontaneous, extremely curious but unable to stay focused on formal studies, Virtuoso personalities can be a challenge to predict, even by their friends and loved ones. Virtuosos can seem very loyal and steady for a while, but they tend to build up a store of impulsive energy that explodes without warning, taking their interests in bold new directions.Virtuosos’ decisions stem from a sense of practical realism, and at their heart is a strong sense of direct fairness, a “do unto others” attitude, which really helps to explain many of Virtuosos’ puzzling traits. Instead of being overly cautious though, avoiding stepping on toes in order to avoid having their toes stepped on, Virtuosos are likely to go too far, accepting likewise retaliation, good or bad, as fair play.The biggest issue Virtuosos are likely to face is that they often act too soon, taking for granted their permissive nature and assuming that others are the same. They’ll be the first to tell an insensitive joke, get overly involved in someone else’s project, roughhouse and play around, or suddenly change their plans because something more interesting came up.Virtuosos will come to learn that many other personality types have much more firmly drawn lines on rules and acceptable behavior than they do – they don’t want to hear an insensitive joke, and certainly wouldn’t tell one back, and they wouldn’t want to engage in horseplay, even with a willing party. If a situation is already emotionally charged, violating these boundaries can backfire tremendously.Virtuosos have a particular difficulty in predicting emotions, but this is just a natural extension of their fairness, given how difficult it is to gauge Virtuosos’ emotions and motivations. However, their tendency to explore their relationships through their actions rather than through empathy can lead to some very frustrating situations. People with the Virtuoso personality type struggle with boundaries and guidelines, preferring the freedom to move about and color outside the lines if they need to.Finding an environment where they can work with good friends who understand their style and unpredictability, combining their creativity, sense of humor and hands-on approach to build practical solutions and things, will give Virtuosos many happy years of building useful boxes – and admiring them from the outside.", "Unfocused"];

var isfp000 = ["Adventurer personalities are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention. Adventurers enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they’ve expressed more than once the phrase “Don’t box me in!”Adventurers live in a colorful, sensual world, inspired by connections with people and ideas. These personalities take joy in reinterpreting these connections, reinventing and experimenting with both themselves and new perspectives. No other type explores and experiments in this way more. This creates a sense of spontaneity, making Adventurers seem unpredictable, even to their close friends and loved ones.Despite all this, Adventurers are definitely Introverts, surprising their friends further when they step out of the spotlight to be by themselves to recharge. Just because they are alone though, doesn’t mean people with the Adventurer personality type sit idle – they take this time for introspection, assessing their principles. Rather than dwelling on the past or the future, Adventurers think about who they are. They return from their cloister, transformed.Adventurers live to find ways to push their passions. Riskier behaviors like gambling and extreme sports are more common with this personality type than with others. Fortunately their attunement to the moment and their environment allows them to do better than most. Adventurers also enjoy connecting with others, and have a certain irresistible charm.However, if a criticism does get through, it can end poorly. Some Adventurers can handle kindly phrased commentary, valuing it as another perspective to help push their passions in new directions. But if the comments are more biting and less mature, Adventurer personalities can lose their tempers in spectacular fashion.Adventurers are sensitive to others’ feelings and value harmony. When faced with criticism, it can be a challenge for people with this type to step away from the moment long enough to not get caught up in the heat of the moment. But living in the moment goes both ways, and once the heightened emotions of an argument cool, Adventurers can usually call the past the past and move on as though it never occurred.The biggest challenge facing Adventurers is planning for the future. Finding constructive ideals to base their goals on and working out goals that create positive principles is no small task. Adventurers don’t plan their futures in terms of assets and retirement. Rather, they plan actions and behaviors as contributions to a sense of identity, building a portfolio of experiences, not stocks.If these goals and principles are noble, Adventurers can act with amazing charity and selflessness – but it can also happen that people with the Adventurer personality type establish a more self-centered identity, acting with selfishness, manipulation and egoism. It’s important for Adventurers to remember to actively become the person they want to be. Developing and maintaining a new habit may not come naturally, but taking the time each day to understand their motivations allows Adventurers to use their strengths to pursue whatever they’ve come to love.", "Unfocused"];

var estp000 = ["Entrepreneurs always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, Entrepreneur personalities love to be the center of attention. If an audience member is asked to come on stage, Entrepreneurs volunteer – or volunteer a shy friend.Theory, abstract concepts and plodding discussions about global issues and their implications don’t keep Entrepreneurs interested for long. Entrepreneurs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it. Entrepreneurs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.Entrepreneurs are the likeliest personality type to make a lifestyle of risky behavior. They live in the moment and dive into the action – they are the eye of the storm. People with the Entrepreneur personality type enjoy drama, passion, and pleasure, not for emotional thrills, but because it’s so stimulating to their logical minds. They are forced to make critical decisions based on factual, immediate reality in a process of rapid-fire rational stimulus response.This makes school and other highly organized environments a challenge for Entrepreneurs. It certainly isn’t because they aren’t smart, and they can do well, but the regimented, lecturing approach of formal education is just so far from the hands-on learning that Entrepreneurs enjoy. It takes a great deal of maturity to see this process as a necessary means to an end, something that creates more exciting opportunities.Also challenging is that to Entrepreneurs, it makes more sense to use their own moral compass than someone else’s. Rules were made to be broken. This is a sentiment few high school instructors or corporate supervisors are likely to share, and can earn Entrepreneur personalities a certain reputation. But if they minimize the trouble-making, harness their energy, and focus through the boring stuff, Entrepreneurs are a force to be reckoned with.With perhaps the most perceptive, unfiltered view of any type, Entrepreneurs have a unique skill in noticing small changes. Whether a shift in facial expression, a new clothing style, or a broken habit, people with this personality type pick up on hidden thoughts and motives where most types would be lucky to pick up anything specific at all. Entrepreneurs use these observations immediately, calling out the change and asking questions, often with little regard for sensitivity. Entrepreneurs should remember that not everyone wants their secrets and decisions broadcast.If Entrepreneurs aren’t careful though, they may get too caught in the moment, take things too far, and run roughshod over more sensitive people, or forget to take care of their own health and safety. Making up only four percent of the population, there are just enough Entrepreneurs out there to keep things spicy and competitive, and not so many as to cause a systemic risk.Entrepreneurs are full of passion and energy, complemented by a rational, if sometimes distracted, mind. Inspiring, convincing and colorful, they are natural group leaders, pulling everyone along the path less traveled, bringing life and excitement everywhere they go. Putting these qualities to a constructive and rewarding end is Entrepreneurs’ true challenge.", "Unfocused"];

var esfp000 = ["Entrepreneurs always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, Entrepreneur personalities love to be the center of attention. If an audience member is asked to come on stage, Entrepreneurs volunteer – or volunteer a shy friend.Theory, abstract concepts and plodding discussions about global issues and their implications don’t keep Entrepreneurs interested for long. Entrepreneurs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it. Entrepreneurs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.Entrepreneurs are the likeliest personality type to make a lifestyle of risky behavior. They live in the moment and dive into the action – they are the eye of the storm. People with the Entrepreneur personality type enjoy drama, passion, and pleasure, not for emotional thrills, but because it’s so stimulating to their logical minds. They are forced to make critical decisions based on factual, immediate reality in a process of rapid-fire rational stimulus response.This makes school and other highly organized environments a challenge for Entrepreneurs. It certainly isn’t because they aren’t smart, and they can do well, but the regimented, lecturing approach of formal education is just so far from the hands-on learning that Entrepreneurs enjoy. It takes a great deal of maturity to see this process as a necessary means to an end, something that creates more exciting opportunities.Also challenging is that to Entrepreneurs, it makes more sense to use their own moral compass than someone else’s. Rules were made to be broken. This is a sentiment few high school instructors or corporate supervisors are likely to share, and can earn Entrepreneur personalities a certain reputation. But if they minimize the trouble-making, harness their energy, and focus through the boring stuff, Entrepreneurs are a force to be reckoned with.With perhaps the most perceptive, unfiltered view of any type, Entrepreneurs have a unique skill in noticing small changes. Whether a shift in facial expression, a new clothing style, or a broken habit, people with this personality type pick up on hidden thoughts and motives where most types would be lucky to pick up anything specific at all. Entrepreneurs use these observations immediately, calling out the change and asking questions, often with little regard for sensitivity. Entrepreneurs should remember that not everyone wants their secrets and decisions broadcast.If Entrepreneurs aren’t careful though, they may get too caught in the moment, take things too far, and run roughshod over more sensitive people, or forget to take care of their own health and safety. Making up only four percent of the population, there are just enough Entrepreneurs out there to keep things spicy and competitive, and not so many as to cause a systemic risk.Entrepreneurs are full of passion and energy, complemented by a rational, if sometimes distracted, mind. Inspiring, convincing and colorful, they are natural group leaders, pulling everyone along the path less traveled, bringing life and excitement everywhere they go. Putting these qualities to a constructive and rewarding end is Entrepreneurs’ true challenge.", "Unfocused"];






//magnifier
$.fn.magnifierRentgen = function() {

	return this.each(function() {

		var th        = $(this),
		dataImage     = th.data("image"),
		dataImageZoom = th.data("image-zoom"),
		dataSize      = th.data("size");

		th
		.addClass("magnifierRentgen")
		.resize(function() {
			th.find(".data-image, .magnifier-loupe img").css({
				"width" : th.width()
			})
		})
		.append("<img class='data-image' ><div class='magnifier-loupe'><img src='" + dataImageZoom + "'>")
			.hover(function() {
				th.find(".magnifier-loupe").stop().fadeIn()
			}, function() {
				th.find(".magnifier-loupe").stop().fadeOut()
			})
			.find(".data-image").css({
				"width" : th.width()
			}).parent().find(".magnifier-loupe").css({
					"width"  : dataSize,
					"height" : dataSize
				})
				.find("img").css({
					"position" : "absolute",
					"width"    : th.width()
				});

		th.mousemove(function(e) {

			var elemPos = {},
				offset  = th.offset();

			elemPos = {
				left : e.pageX - offset.left - dataSize/2,
				top  : e.pageY - offset.top - dataSize/2
			}

			th
			.find(".magnifier-loupe").css({
					"top"  : elemPos["top"],
					"left" : elemPos["left"]
				})
				.find("img").css({
					"top"   : -elemPos["top"],
					"left"  : -elemPos["left"],
					"width" : th.width()
				})

		});

		$(window).resize(function() {
			$(".magnifierRentgen").resize();
		});

	});

};

$(".div").magnifierRentgen();