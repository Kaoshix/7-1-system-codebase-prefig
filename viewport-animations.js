const content1 = document.querySelector("");

function content()
{   
    const clientH = document.documentElement.clientHeight;

    const contentY = content1.getBoundingClientRect().y;
    const contentHeight = content1.getBoundingClientRect().height;


    if(clientH > contentY + (contentHeight / 1.6))
    {
        content1.style.animation = "animate 1000ms forwards";
    }
}






document.addEventListener("scroll", content);

