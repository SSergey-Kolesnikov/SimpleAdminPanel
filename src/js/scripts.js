$(document).ready(function() {
    /**
     * Opening and closing the sidebar
     */
    $(document).on('click', '.sidebar-toggle', function(){
        $('#sidebar').toggleClass('toggled');
        return false;
    });
});
