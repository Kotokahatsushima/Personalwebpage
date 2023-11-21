var commentButton = document.getElementById("commentButton");
var inputComment = document.getElementById("inputComment");
var mainCanvas = document.getElementsByClassName("allcomments")[0]
commentButton.addEventListener("click", addComment);
function addComment(){
    var commentwrap = document.createElement("div");
    commentwrap.className = "commentwrap";
    commentwrap.id = "commentwrap" + Date.now();
    mainCanvas.appendChild(commentwrap);
    var comment = inputComment.value;
    if(comment === ""){
        return;
    }
    else{
        var commentAsString = `
        <div class="profile">
            <img src="https://i.pinimg.com/originals/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.webp" alt="">
            <h3>You</h3>
        </div>
        <p class="time">Just Now</p>
        <div class="comment">
            <p>${comment}</p>
        </div>
        <hr>
`;
        document.getElementById(commentwrap.id).innerHTML = commentAsString;
        inputComment.value = "";
    }
}