<!doctype html>
<html>
<!-- Import JQUERY framework and css -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" media="all"
  href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/smoothness/jquery-ui.css"    />
    
    <script>
        function ShowCommentForm(id) {
            // Submit Post Request
            $.post('nb_ret_answerform.php', "answerid="+id, function(data){
                        $('#answerform'+id).html(data);
                        $('#form_'+id).html(data);
            });
        }
        
         function DisplayComments(id) {
            // Submit Post Request
            $.post('nb_ret_displaycomments.php', "", function(data){
                        $('#comments'+id).html(data);
            });
        }
        
        
        
        $(document).ready(function(){
            DisplayComments();
        }
    </script>
     

    <?php
    include ('nb_functions.php');




    ?>
    <div id="comments"> </div>
    
    
    <div id="form_0"> </div>
    <a href="#" onclick="ShowCommentForm(0)"> Eintrag erstellen </a>
    
</html>
