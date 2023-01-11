<?php
class DBManager{
    public function connect(){
          // $pdo = new PDO("mysql:host=mysql207.phy.lolipop.lan;dbname=LAA1417836-totsm;charset=utf8",'LAA1417836','GgfFQ3wVGbcDTk9');// 本番用
          $pdo = new PDO("mysql:host=localhost;dbname=ageage;charset=utf8", 'root', '');// 開発用
          return $pdo;
    }

    public function human(){
        $ps = $this -> connect() -> prepare("SELECT * FROM human WHERE human_id = ?");
        $ps ->  bindValue(1,mt_rand(1,40),PDO::PARAM_INT);
        $ps -> execute();
        return json_encode($ps->fetch());
    }

    public function anime(){
        $ps = $this -> connect() -> prepare("SELECT * FROM anime WHERE anime_id = ?");
        $ps ->  bindValue(1,mt_rand(1,35),PDO::PARAM_INT);
        $ps -> execute();
        return json_encode($ps->fetch());
    }

    public function music(){
        $ps = $this -> connect() -> prepare("SELECT * FROM music WHERE music_id = ?");
        $ps ->  bindValue(1,mt_rand(1,30),PDO::PARAM_INT);
        $ps -> execute();
        return json_encode($ps->fetch());
    }

}
?>