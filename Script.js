document.querySelector(".Comment-Form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const NewName = document.getElementById("Blog-Comment-Name").value;
    const NewEmail = document.getElementById("Blog-Comment-Email").value;
    const NewComment = document.getElementById("Blog-Comment").value;
    
    // Parent Container
    const CommentContainer = document.getElementById("Comment-Container");
    
    // Comment Container for new comment
    const CommentElement = document.createElement("div");
    CommentElement.classList.add("mt-3","mb-3");
    
    // Profile Photo for Comments
    const ProfilePhoto = document.createElement("img");
    ProfilePhoto.classList.add("Comment-Profile-Photo", "mr-3");
    ProfilePhoto.setAttribute("src", "https://res.cloudinary.com/doxjkpn5a/image/upload/v1719748083/istockphoto-1316947194-612x612_m2v7y5.jpg");
    
    // Meta Container
    const MetaElement = document.createElement("div");
    MetaElement.classList.add("Comment-Meta", "d-flex", "flex-column");
    const NameElement = document.createElement("span");
    NameElement.classList.add("Comment-Name");
    NameElement.innerText = NewName;
    const EmailElement = document.createElement("span");
    EmailElement.classList.add("Comment-Name");
    EmailElement.innerText = NewEmail;
    MetaElement.appendChild(NameElement);
    MetaElement.appendChild(EmailElement);
    
    // Text Container
    const CommentTextElement = document.createElement("div");
    CommentTextElement.classList.add("Comment-Text", "mt-2");
    CommentTextElement.innerText = NewComment;

    // Div Container
    const CommentDiv = document.createElement("div");
    CommentDiv.classList.add("d-flex", "flex-row");
    CommentDiv.appendChild(ProfilePhoto);
    CommentDiv.appendChild(MetaElement);
    
    // Append elements to Comment Element
    CommentElement.appendChild(CommentDiv);
    CommentElement.appendChild(CommentTextElement);
    
    // Append Comment Element to Comment Container
    CommentContainer.appendChild(CommentElement);
    
    // Clear the form fields
    document.getElementById("Blog-Comment-Name").value = "";
    document.getElementById("Blog-Comment-Email").value = "";
    document.getElementById("Blog-Comment").value = "";
});
//git