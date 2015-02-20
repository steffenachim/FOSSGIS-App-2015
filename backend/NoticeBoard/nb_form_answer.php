<?
	/*
		Answer form
		
	*/
?>

<script>
    $(document).ready(function(){
        // Bind to the submit event of our form
        $("#answerform").submit(function(event){
            $.post('nb_ret_insertcomment.php', $(this).serialize(),function(data) {
                $("#commentInsert").html("Der Kommentar wurde erfolgreich hinzugef&uuml;gt.");
				DisplayComments();
            });
            
            
            return false;
        });
    });
    
</script>

<div id="commentInsert">
 <form action="NoticeBoard.php" method="post" id="answerform">
    
	<input type="hidden" name="answer_to" id="answer_to" value="!answerid!" />
    Name: </br><input type="text" id="author_name" name="author_name" required /></br></br>
    Mail (optional): </br><input type="text" id="author_mail" name="author_mail" /></br></br>
    Text: </br><textarea name="message" id="message" required/></textarea ></br></br>
    <input id="submit" type="submit" class="button expand" value="Abschicken" />
</form>
<br><br>
</div>
