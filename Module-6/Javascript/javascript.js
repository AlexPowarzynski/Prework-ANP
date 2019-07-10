function grow()
{
    document.getElementById("box").style.height = "250px";
}

function shrink()
{
    document.getElementById("box").style.height = "100px";
}

function blue()
{
    document.getElementById("box").style.backgroundColor = "blue"; 
}

function green()
{
    document.getElementById("box").style.backgroundColor = "green"; 
}

function resetBtn()
{
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
}

function fadeBtn()
{
    document.getElementById("box").style.opacity = "0.5";
}