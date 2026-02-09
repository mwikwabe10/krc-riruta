<script>
function openModal(src) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = src;
}
</script>

<script>
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    // This adds or removes the 'active' class we styled in CSS
    navLinks.classList.toggle("active");
}

// Automatically close the menu when you click a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});
</script>
