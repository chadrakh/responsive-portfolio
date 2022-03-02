let modal = document.getElementById('micrositeModal'),
openModal = document.getElementById('openModal'),
closeModal = document.querySelector('.closeModal');

openModal.addEventListener('click', function() {
    modal.style.display = "block";
})

closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});