// 
// jQuery Bulletize 
// Plugin that transforms each <option> from a <select> into a list of clickable <a>
//
(function($){
		$.fn.extend({ 
				bulletize: function(options) {
					//Defaul values
					var defaults = {  
						showLabel: true,
						showIndexNo: false
					};
					var options =  $.extend(defaults, options); 

					return this.each(function() {
							var o = options; 
							var select = $(this);
							select.hide();
							select.wrap('<div class="bulletized" />');
							var bullet, option, option_val, page_no;
							$('option', select).each(function(index, value){
									var label;
									option = $(this);
									if(o.showLabel)
										label = option.text();
									else if(o.showIndexNo){
										page_no = parseInt(index) + 1;
										label = page_no;
									} else {
										label = '&nbsp;';
									}
									bullet = $('<a href="javascript:void(0);"></a>').attr('rel', option.val()).html(label).addClass('bullet').click(function(){
										$(this).addClass('current').siblings().removeClass('current');
										select.val( $(this).attr('rel') );
										select.change();
									});
									if (option.val() == select.val()){
										bullet.addClass('current');
									}
									select.parent().append(bullet).height( bullet.outerHeight(true) );
								});
						});
				}
			});
	})(jQuery);
