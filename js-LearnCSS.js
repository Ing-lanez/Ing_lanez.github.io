function testMessage(){
    

    alert("Thank You, for your message.")
    
    
}
function Quizfeedback(){
    /*The variable score will store the marks the user got in the quiz. It is initialized to zero as one has not started */ 
    var score=0;
    /* Declared five variables which represents the div elements of each questions. */
    var ans1= document.getElementById("qn1");
    var ans2 = document.getElementById("qn2");
    var ans3 =document.getElementById("qn3");
    var ans4 =document.getElementById("qn4");
    var ans5 =document.getElementById("qn5"); 
    /*This access the quiz by the getElementById option then use the display property to make the questions making feedback appear on the page. */
    document.getElementById("quiz").style.display="none";
    /*The if else statements are there to check when the selected answer is true then increment the score if not then don't change the score. They also display the feedback by replacing the paragraphs in html for feedback with their resepective information.  */
   if(ans1.children[5].checked){
        score++;
        document.getElementById("feedback1").innerHTML="1. Correct Answer" +"<br>"+"<br>"+"Score:1/1"+"<br>"+"<br>"
        + "Feedback: CSS syntax is composed of selector and declaration wherein selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.Each declaration includes a CSS property name and a value, separated by a colon and declaration blocks are surrounded by curly braces."+"<br>"+"<br>"
        + "See this for more info".link("https://www.w3schools.com/css/css_syntax.asp")+"<br>"+"<br>";
    }
    
  else {
     document.getElementById("feedback1").innerHTML= "1. Wrong Answer"+"<br>"+"<br>"+"Score:0/1"+"<br>"+"<br>" + "Correct Answer B"+"<br>"+"<br>"
    + "Feedback: CSS syntax is composed of selector and declaration wherein selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.Each declaration includes a CSS property name and a value, separated by a colon and declaration blocks are surrounded by curly braces."+"<br>"+"<br>"
    + "See this for more info".link("https://www.w3schools.com/css/css_syntax.asp")+"<br>"+"<br>";
    }
    
   
    if (ans2.children[8].checked){
        score++;
        document.getElementById("feedback2").innerHTML= "2. Correct Answer" +"<br>"+"<br>"+"Score:1/1"+"<br>"+"<br>"
        + "Feedback:Hash (#) character is being used to select an element with a specific id. An ID name cannot start with a number"+"<br>"+"<br>"
        + "See this for more info".link("https://www.w3schools.com/css/css_selectors.asp")+"<br>"+"<br>";
    }
    else {
        document.getElementById("feedback2").innerHTML= "2. Wrong Answer"+"<br>"+"<br>"+"Score:0/1"+"<br>"+"<br>"+
        "Correct Answer C"+"<br>"+"<br>"+
        "Feedback:Hash (#) character is being used to select an element with a specific id. An ID name cannot start with a number"+"<br>"+"<br>"
        "See this for more info".link("https://www.w3schools.com/css/css_selectors.asp")+"<br>"+"<br>";
    } 
    
    if(ans3.children[2].checked && ans3.children[8].checked){
        score++;
        document.getElementById("feedback3").innerHTML= "3. Correct Answer A and C"  +"<br>"+"<br>"+"Score:1/1"+"<br>"+"<br>" + "B and D do not exist as values in CSS margin properties."+ "<br>"+"<br>" +"See this more info".link("https://www.w3schools.com/css/css_margin.asp")+"<br>"+"<br>";
    }
    else{
        document.getElementById("feedback3").innerHTML= "3. Wrong Answer"+"<br>"+"<br>"+"Score:0/1"+"<br>"+"<br>" + "Correct answer A and C" + "<br>"+"<br>"
       +  "B and D do not exist as values in CSS margin properties."+ "<br>"+"<br>"
        + "See this more info".link("https://www.w3schools.com/css/css_margin.asp")+"<br>"+"<br>";
    }
    
    if(ans4.children[7].checked){
        score++;
        document.getElementById("feedback4").innerHTML = "4. Correct Answer C"  +"<br>"+"<br>"+"Score:1/1"+"<br>"+"<br>"
        "Text-transform property controls the capitalization of a text"+ "<br>"+"<br>"
        "See this more info".link("https://www.w3schools.com/cssref/pr_text_text-transform.asp")+"<br>"+"<br>";
    }
    else{
        document.getElementById("feedback4").innerHTML= "4. Wrong Answer"+"<br>"+"<br>"+"Score:0/1"+"<br>"+"<br>" +
        "Correct answer C" + "<br>"+"<br>" +
        "Text-transform property controls the capitalization of a text"+ "<br>"+"<br>" +
        "See this more info".link("https://www.w3schools.com/cssref/pr_text_text-transform.asp")+"<br>"+"<br>";
    }
    
    if(ans5.children[4].checked){
        score++;
        document.getElementById("feedback5").innerHTML= "5. Correct Answer B"  +"<br>"+"<br>"+"Score:1/1"+"<br>"+"<br>"
        + "HTML elements are positioned static by default"+ "<br>"+"<br>"
        + "See this more info".link("https://www.w3schools.com/css/css_positioning.asp")+"<br>"+"<br>";
    }
    else{
        document.getElementById("feedback5").innerHTML= "5. Wrong Answer"+"<br>"+"<br>"+"Score:0/1"+"<br>"+"<br>"+
        "Correct answer B" + "<br>"+"<br>"+
        "HTML elements are positioned static by default"+ "<br>"+"<br>"+
        "See this more info".link("https://www.w3schools.com/css/css_positioning.asp")+"<br>"+"<br>";
    }
   /*This displays the total score after taking the quiz. */
    document.getElementById("score").innerHTML= "Total Score :"+ score;
    
}

