$(window).load(function(){	
	$("input[type ='text']").attr('autocomplete', 'off');
	$("input[type ='email']").attr('autocomplete', 'off');
	$("input[type ='password']").attr('autocomplete', 'off');
});
$(document).ready(function(){
    $('#edit-name').attr('autocomplete','off');
    $('#edit-pass').attr('autocomplete','off');
  
   });
var LightBoxCaption = "test";

$(document).ready(function(){
	
	$('.galleryimages').click(function(){
		var tids = $(this).attr("id").split('_');
		var tid = tids[1];
		
		
	});
	
	
	$('.gallerybox > a').click(function(){
		var titlee = $(this).next().text();
		
		LightBoxCaption = titlee;
		
		$("#lightbox > #imageDataContainer #imageDetails #caption > p").remove();
		$("#lightbox > #imageDataContainer #imageDetails #caption > p").html(titlee);
	});
	
	$('.views-field-field-view-details .field-content .file a').attr("target","_blank");
	$('.views-field-field-upload-files .field-content .file a').attr("target","_blank");
	
	$('.views-field-field-view-details .field-content').hide();
	$('.views-field-field-view-details .views-label-field-view-details').each(function(){
		$(this).click(function(){			
			if($(this).parent('.views-field-field-view-details').find('.field-content').is(':visible'))
			{
				$(this).parent('.views-field-field-view-details').find('.field-content').hide();
			}
			else
			{
				$(this).parent('.views-field-field-view-details').find('.field-content').show();
			}
		});
	});
	$('.views-field-field-upload-files .field-content').hide();
	$('.views-field-field-upload-files .views-label-field-upload-files').each(function(){
		$(this).click(function(){			
			if($(this).parent('.views-field-field-upload-files').find('.field-content').is(':visible'))
			{
				$(this).parent('.views-field-field-upload-files').find('.field-content').hide();
			}
			else
			{
				$(this).parent('.views-field-field-upload-files').find('.field-content').show();
			}
		});
	});
	
	
	
	
	
	
	var cName = [];
	if($('#node-89').length>0)
	{
		var paginationHtml = "<ul class='pagination'>";
		$('#node-89 p').hide();
		$('#node-89 p.page1').show();
		$('#node-89 p').each(function(){
			if(!contains.call(cName,$(this).attr('class')))
			{
				cName.push($(this).attr('class'));
			}
		});	
		if(cName.length > 0)
		{
			for(var i=0; i<cName.length; i++)
			{
				paginationHtml += "<li><a id='"+ cName[i] +"' href='javascript:void(0);' onclick=showPages('node-89',this.id);>"+ (i+1) +"</a></li>";
			}
		}
		paginationHtml += "</ul>";
		$('#node-89').append(paginationHtml);
	}
	
});
$(document).ready(function(){
	var cName = [];
	var tName =  [];
	if($('#node-85').length>0)
	{
		var paginationHtml = "<ul class='pagination'>";
		$('#node-85 .wrap-dv > div').hide();
		$('#node-85 .wrap-dv > div.top-hd').show();	
		$('#node-85 .wrap-dv > div:eq(3)').show();				
		$('#node-85 .wrap-dv > div').each(function(){
			if(!contains.call(cName,$(this).attr('title')) && $(this).attr("title") !== undefined && $(this).attr("title") !== false)
			{
				cName.push($(this).attr('title'));
			}
		});	
		if(cName.length > 0)
		{
			for(var i=0; i<cName.length; i++)
			{
				paginationHtml += "<li><a id='"+ cName[i] +"' href='javascript:void(0);' onclick=showTitlePages('node-85',this.id);>"+ (i+1) +"</a></li>";
			}
		}
		paginationHtml += "</ul>";
		$('#node-85').append(paginationHtml);
	}
	
});
$(document).ready(function(){
	var cName = [];
	var tName =  [];
	if($('#node-81').length>0)
	{
		var paginationHtml = "<ul class='pagination'>";
		$('#node-81 .wrap-dv > div').hide();
		$('#node-81 .wrap-dv > div.top-hd').show();	
		$('#node-81 .wrap-dv > div:eq(3)').show();				
		$('#node-81 .wrap-dv > div').each(function(){
			if(!contains.call(cName,$(this).attr('title')) && $(this).attr("title") !== undefined && $(this).attr("title") !== false)
			{
				cName.push($(this).attr('title'));
			}
		});	
		if(cName.length > 0)
		{
			for(var i=0; i<cName.length; i++)
			{
				paginationHtml += "<li><a id='"+ cName[i] +"' href='javascript:void(0);' onclick=showTitlePagess('node-81',this.id);>"+ (i+1) +"</a></li>";
			}
		}
		paginationHtml += "</ul>";
		$('#node-81').append(paginationHtml);
	}
	
});

function showProfile(id)
{	
	$('div#P_' + id).modal('show');	
}

function closeProfile(id)
{	
	$('div#P_' + id).modal('hide');	
}


function showPages(nodeid,id)
{
	$('#' + nodeid + ' p').hide();
	$('#' + nodeid + ' p.' + id).show();
}
function showTitlePages(nodeid,id)
{
	$('#node-85 .wrap-dv > div').hide();
	$('#node-85 .wrap-dv > div.top-hd').show();
	$('#' + nodeid + ' .wrap-dv > div').each(function(){
		if($(this).attr("title")== id)
		{
			$(this).show();
		}
	});
}
function showTitlePagess(nodeid,id)
{
	$('#node-81 .wrap-dv > div').hide();
	$('#node-81 .wrap-dv > div.top-hd').show();
	$('#' + nodeid + ' .wrap-dv > div').each(function(){
		if($(this).attr("title")== id)
		{
			$(this).show();
		}
	});
}
var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};

$(function() {
  $('.view-notification .views-table').addClass('table table-bordered cutmtbl');
  $('.view-judgement-orders .views-table').addClass('table table-bordered cutmtbl');
  $('.view-rti .views-table').addClass('table table-bordered cutmtbl');
  $('.view-act .views-table').addClass('table table-bordered cutmtbl');
  $('.view-links .views-table').addClass('table table-bordered cutmtbl');
  $('.view-fresh-matter-list- .views-table').addClass('table table-bordered cutmtbl');
  $('.view-judges-s-roster .views-table').addClass('table table-bordered cutmtbl');
  $('.view-committees .views-table').addClass('table table-bordered cutmtbl');
  $('.view-recuitments-rules .views-table').addClass('table table-bordered cutmtbl');
  $('.view-circular .views-table').addClass('table table-bordered cutmtbl');
  $('.view-career .views-table').addClass('table table-bordered cutmtbl');
  $('.view-downloads .views-table').addClass('table table-bordered cutmtbl2');
  $('.view-members .views-table').addClass('table table-bordered cutmtbl2');
  $('.view-registar .views-table').addClass('table table-bordered cutmtbl2');
  $('.view-chairpersons .views-table').addClass('table table-bordered cutmtbl2');
  $('.view-benches .views-table').addClass('table table-bordered cutmtbl2 bench');
  $('.view-requirment .views-table').addClass('table table-bordered cutmtbl');
  $('.view-orders-lists .table').addClass('table table-bordered cutmtbl');
  
});
