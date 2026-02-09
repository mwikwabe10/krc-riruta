<script>
function openModal(src) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = src;
}
</script>

<script>
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});
</script>
