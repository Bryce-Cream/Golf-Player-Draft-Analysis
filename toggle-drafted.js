document.getElementById('toggleDrafted').addEventListener('change', function() {
    const draftedRows = document.querySelectorAll('tr.drafted-visible, tr.drafted-hidden');

    draftedRows.forEach(row => {
        if(this.checked)
        {
            //Hide
            row.classList.remove('drafted-visible');
            row.classList.add('drafted-hidden');
        }
        else
        {
            //Show
            row.classList.remove('drafted-hidden');
            row.classList.add('drafted-visible');
        }
    });
});