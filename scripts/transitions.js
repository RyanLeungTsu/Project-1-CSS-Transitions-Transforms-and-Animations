function startProgress() {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = "100%";
    setTimeout(() => {
        progressBar.style.width = '0%';
    }, 4000); 
}