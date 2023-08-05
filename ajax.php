<?
if(!empty($_REQUEST)){
    $arResult = [];
    $dataSaved = [];
    if(file_exists($_SERVER['DOCUMENT_ROOT']."/sabmitevent.json")){
        $dataSaved = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT']."/sabmitevent.json") , true);
    }
    if(empty($_REQUEST["name"])){
        $arResult = [
            "result"=>false,
            "message"=>"Заполните имя",
        ];
    }
    if(empty($_REQUEST["email"])){
        $arResult = [
            "result"=>false,
            "message"=>"Заполните email",
        ];
    }
    if(empty($_REQUEST["phone"])){
        $arResult = [
            "result"=>false,
            "message"=>"Заполните номер телефона",
        ];
    }
    if(empty($_REQUEST["region"])){
        $arResult = [
            "result"=>false,
            "message"=>"Заполните регион",
        ];
    }
    if(count($dataSaved)==301){
        $arResult = [
            "result"=>false,
            "message"=>"Привышен лимит заявок",
        ];
    }
    if(empty($arResult)){
        $dataSaved[] = $_REQUEST;
        file_put_contents($_SERVER['DOCUMENT_ROOT']."/sabmitevent.json" , json_encode($dataSaved));
        
        $arResult = [
            "result"=>true,
            "message"=>"Сохранение успешно",
        ];
    }
}

echo json_encode($arResult);
?>