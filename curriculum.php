<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Curriculum</title>
  <link rel="stylesheet" type="text/css" href="css/style_curriculum.css">
</head>
<body id="Body">
  <div id="BackGround">
    <header class="header">
      <img src="image/LOGO.png" alt="LOGO">

    </header><!--頁首區-->
    <div class="course">
      <img src="image/schedulebackground.png" alt="school" id="SchoolBack">
      <div class="inclass inClass-active">
        <table style="width:80%">
          <tr>
            <td class="Spice">節\星期</td>
            <td class="Spice">Mon</td>
            <td class="Spice">Tue</td>
            <td class="Spice">Wed</td>
            <td class="Spice">Thu</td>
            <td class="Spice">Fri</td>
          </tr>
          <!--<td><a href="">進入課程</a> </td>-->
          <?php
          $Day = $_GET[Day]-1;
          $C1 = $_GET[C1]-1;
          $C2 = $_GET[C2]-1;
          $ID =$_GET[ID];
          for ($i=0;$i<9;$i++){
            echo "<tr>";
            echo "<td>$i</td>";
            for ($j=0;$j<5;$j++){
              if(($i==$C1 || $i==$C2) && $j==$Day){
                echo "<td>";
                echo '<a href="class/introduction';
                echo $ID;
                echo '.html">';
                echo "進入課程</a>";
                echo "</td>";
              }
              else {
                echo "<td> </td>";
              }
            }
            echo "</tr>";
          }
          ?>
        </table>
      </div>
    </div><!--課程區-->
    <div class="Line"></div><!--白線-->
    <a href="index.html"><img src="image/button_up.png" alt="" class="LL"></a>
  </div><!--主要框架-->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="js/page1.js"></script>

</body>
</html>
