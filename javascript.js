let charIndex=0;
let headingText="Ankita's Artwork";
window.onload=function(){typingEffect()};


function typingEffect(){
    if (charIndex<headingText.length){
        document.getElementById("heading").innerHTML+=headingText.charAt(charIndex);
        charIndex++;
        setTimeout(typingEffect,100);
        
        
    }
}