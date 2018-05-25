<!DOCTYPE html>
<!-- web client term project / sujeong-lee's code start-->
<html>
    <head>
        <meta charset="utf-8">
</head>
<body>
    <?php
    $id = $_GET("school_num");
    $pw = $_GET("pw");
    if($id=="20171666" || $id=="20171613" || $id=="20171674" || $id=="20171646" || $id=="20171640"){
        if($pw=="pw"){
            echo "로그인 성공!";
        }
        else{
            echo "로그인 실패!";
        }
    }
    ?>
</body>
<!-- web client term project / sujeong-lee's code end-->
</html>
