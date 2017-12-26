$.fn.picAuto = function(space) {
	this.each( function() {
		var BoxWidth = $(this).attr("width"),BoxHeight = $(this).attr("height");
		var img = new Image(),$this = $(this);
		img.src = $(this).attr("src");
		if ( img.complete ) {
			var RealWidth = img.width,RealHeight = img.height,spacing = 0;
			if ( RealWidth < BoxWidth && RealHeight < BoxHeight ) {
				var spacingl = 0,spacingr = 0;
				spacingl = parseInt( ( BoxWidth - RealWidth ) / 2 );
				spacingr = parseInt( ( BoxHeight - RealHeight ) / 2 );
				$this.css( {
					"width" : RealWidth + "px",
					"height" : RealHeight + "px"
				} );
				var spaceTop = space + "Top",spaceRight = space + "Right",spaceBottom = space + "Bottom",spaceLeft = space + "Left"
				if ( ( BoxWidth - RealWidth ) % 2 == 0 ) {
					$this.css( {
						spaceRight : spacingl + "px",
						spaceLeft : spacingl + "px"
					} );
				}
				else {
					$this.css( {
						spaceRight : ( spacingl + 1 ) + "px",
						spaceLeft : spacingl + "px"
					} );
				}
				if ( ( BoxHeight - RealHeight ) % 2 == 0 ) {
					$this.css( {
						spaceTop : spacingr + "px",
						spaceBottom : spacingr + "px"
					} );
				}
				else {
					$this.css( {
						spaceTop : spacingr + "px",
						spaceBottom : ( spacingr + 1 ) + "px"
					} );
				}
			}
			else {
				if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
					RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
					RealWidth = parseInt( BoxWidth );
					spacing = parseInt( ( BoxHeight - RealHeight ) / 2 );
					if ( ( BoxHeight - RealHeight ) % 2 == 0 ) {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : spacing + "px 0"
						} );
					}
					else {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : spacing + "px 0 " + ( spacing + 1 ) + "px 0"
						} );
					}
				}
				else {
					RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
					RealHeight = parseInt( BoxHeight );
					spacing = parseInt( ( BoxWidth - RealWidth ) / 2 );
					if ( ( BoxWidth - RealWidth ) % 2 == 0 ) {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : "0 " + spacing + "px"
						} );
					}
					else {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : "0 " + spacing + "px 0 " + ( spacing + 1 ) + "px"
						} );
					}
				}
			}
		}
		img.onload = function() {
			var RealWidth = img.width,RealHeight = img.height,spacing = 0;
			if ( RealWidth < BoxWidth && RealHeight < BoxHeight ) {
				var spacingl = 0,spacingr = 0;
				spacingl = parseInt( ( BoxWidth - RealWidth ) / 2 );
				spacingr = parseInt( ( BoxHeight - RealHeight ) / 2 );
				$this.css( {
					"width" : RealWidth + "px",
					"height" : RealHeight + "px"
				} );
				var spaceTop = space + "Top",spaceRight = space + "Right",spaceBottom = space + "Bottom",spaceLeft = space + "Left"
				if ( ( BoxWidth - RealWidth ) % 2 == 0 ) {
					$this.css( {
						spaceRight : spacingl + "px",
						spaceLeft : spacingl + "px"
					} );
				}
				else {
					$this.css( {
						spaceRight : ( spacingl + 1 ) + "px",
						spaceLeft : spacingl + "px"
					} );
				}
				if ( ( BoxHeight - RealHeight ) % 2 == 0 ) {
					$this.css( {
						spaceTop : spacingr + "px",
						spaceBottom : spacingr + "px"
					} );
				}
				else {
					$this.css( {
						spaceTop : spacingr + "px",
						spaceBottom : ( spacingr + 1 ) + "px"
					} );
				}
			}
			else {
				if ( RealWidth / RealHeight > BoxWidth / BoxHeight ) {
					RealHeight = parseInt( BoxWidth / RealWidth * RealHeight );
					RealWidth = parseInt( BoxWidth );
					spacing = parseInt( ( BoxHeight - RealHeight ) / 2 );
					if ( ( BoxHeight - RealHeight ) % 2 == 0 ) {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : spacing + "px 0"
						} );
					}
					else {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : spacing + "px 0 " + ( spacing + 1 ) + "px 0"
						} );
					}
				}
				else {
					RealWidth = parseInt( BoxHeight / RealHeight * RealWidth );
					RealHeight = parseInt( BoxHeight );
					spacing = parseInt( ( BoxWidth - RealWidth ) / 2 );
					if ( ( BoxWidth - RealWidth ) % 2 == 0 ) {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : "0 " + spacing + "px"
						} );
					}
					else {
						$this.css( {
							"width" : RealWidth + "px",
							"height" : RealHeight + "px",
							space : "0 " + spacing + "px 0 " + ( spacing + 1 ) + "px"
						} );
					}
				}
			}
			return;
		};
	} );
	return this;
};