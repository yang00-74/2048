// JavaScript Document
$(document).keydown(function(event){
      switch(event.keyCode){
		  case 37://left
		       if(moveLeft()){
				   setTimeout("generateOneNumber()",250);
				   setTimeout("isgameover()",400);
				   }
		       break;
		   case 38://up
		         if(moveUp()){
				  setTimeout("generateOneNumber()",250);
				   setTimeout("isgameover()",400);
				   }
		       break;
		   case 39://right
		         if(moveRight()){
				   setTimeout("generateOneNumber()",250);
				   setTimeout("isgameover()",400);
				   }
		       break;
		   case 40://down
		      if(moveDown()){
				   setTimeout("generateOneNumber()",250);
				   setTimeout("isgameover()",400);
				   }
		       break;
		   
		  }

});
function moveLeft(){
   if(!canMoveLeft(board)){
	   return false;
	   }
	   for(var i=0;i<4;i++){
		 for(var j=0;j<4;j++){
			 if(board[i][j]!=0){
				 for(var k=0;k<j;k++){
					 if(board[i][k]==0 && noBlokHorizontalCol(i,k,j,board)){
						  showMoveAnimation(i,j,i,k);
						  board[i][k]=board[i][j];
						  board[i][j]=0;
						  continue;
						}
					 else if(board[i][k]==board[i][j] && noBlokHorizontalCol(i,k,j,board)&&hasConflicted[i][k]){
						  showMoveAnimation(i,j,i,k);
						  board[i][k]+=board[i][j];
						  board[i][j]=0;
						  
						  score+=board[i][k];
						  updateScore(score);
						  hasConflicted[i][k]=false;
						  continue;
						} 
					 }
				 }
			 
			 }  
		 }
		setTimeout("updateBoardView();",200);
	   return true;
}
function moveRight(){
   if(!canMoveRight(board)){
	   return false;
	   }
	   for(var i=0;i<4;i++){
		 for(var j=0;j<3;j++){
			 if(board[i][j]!=0){
				 for(var k=3;k>j;k--){
					 if(board[i][k]==0 && noBlokHorizontalCol(i,j,k,board)){
						  showMoveAnimation(i,j,i,k);
						  board[i][k]=board[i][j];
						  board[i][j]=0;
						  continue;
						}
					 else if(board[i][k]==board[i][j] && noBlokHorizontalCol(i,j,k,board)&&hasConflicted[i][k]){
						  showMoveAnimation(i,j,i,k);
						  board[i][k]+=board[i][j];
						  board[i][j]=0;
						  score+=board[i][k];
						  updateScore(score);
						   hasConflicted[i][k]=false;
						  continue;
						} 
					 }
				 }
			 
			 }  
		 }
		setTimeout("updateBoardView();",200);
	   return true;
}
function moveUp(){
   if(!canMoveUp(board)){
	   return false;
	   }
	   for(var i=0;i<4;i++){
		 for(var j=1;j<4;j++){
			 if(board[j][i]!=0){
				 for(var k=0;k<j;k++){
					 if(board[k][i]==0 && noBlokHorizontalCol2(i,k,j,board)){
						  showMoveAnimation(j,i,k,i);
						  board[k][i]=board[j][i];
						  board[j][i]=0;
						  continue;
						}
					 else if(board[k][i]==board[j][i] && noBlokHorizontalCol2(i,k,j,board)&&hasConflicted[k][i]){
						  showMoveAnimation(j,i,k,i);
						  board[k][i]+=board[j][i];
						  board[j][i]=0;
						  score+=board[k][i];
						  updateScore(score);
						   hasConflicted[k][i]=false;
						  continue;
						} 
					 }
				 }
			 
			 }  
		 }
		setTimeout("updateBoardView();",200);
	   return true;
}

function moveDown(){
   if(!canMoveDown(board)){
	   return false;
	   }
	   for(var i=0;i<4;i++){
		 for(var j=0;j<3;j++){
			 if(board[j][i]!=0){
				 for(var k=3;k>j;k--){
					 if(board[k][i]==0 && noBlokHorizontalCol2(i,j,k,board)){
						  showMoveAnimation(j,i,k,i);
						  board[k][i]=board[j][i];
						  board[j][i]=0;
						  continue;
						}
					 else if(board[k][i]==board[j][i] && noBlokHorizontalCol2(i,j,k,board)&&hasConflicted[k][i]){
						  showMoveAnimation(j,i,k,i);
						  board[k][i]+=board[j][i];
						  board[j][i]=0;
						  score+=board[k][i];
						  updateScore(score);
						   hasConflicted[k][i]=false;
						  continue;
						} 
					 }
				 }
			 
			 }  
		 }
		setTimeout("updateBoardView();",200);
	   return true;
}

function isgameover(){
   if(nospace(board) && nomove(board))	{
	   gameover();
	   }
}
function gameover(){
    alert("Game Over!");	
}