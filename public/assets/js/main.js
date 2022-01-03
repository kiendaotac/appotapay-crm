$(document).ready(function() {
    $('.datatable-list').DataTable({
        searching:false,
        pagingType: "numbers",
        "dom": '<"top">rt<"bottom_paging"iflp>'
    });

    $('.input-append.date').datepicker();

    $('[data-bs-toggle="dropdown"]').each(function(){
        $(this).next('.dropdown-menu').click(function(){
            $(this).find('.dropdown-item').click(function(){
                //$(this).addClass('active');
               console.log($(this).text());
            });
        });
    });

    $('.close-canvas').click(function(){
        $('.right_canvas').remove('show');
    })

    $('[data-bs-toggle=status]').on('change',function(){
        var status = $(this).find('option:selected').data('bs-status');
        $(this).removeClass (function (index, css) {
            return (css.match (/(^|\s)status\S+/g) || []).join(' ');
         });
        $(this).addClass(status);
    });
});

function show_canvas(pos){
    $('#'+pos).toggleClass('show');
}

function close_canvas(target){
    $('#'+target).toggleClass('show');
}