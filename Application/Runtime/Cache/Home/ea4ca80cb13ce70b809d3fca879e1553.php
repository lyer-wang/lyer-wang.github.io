<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/oo/Public/css/credit.css">
    <title>信用卡列表</title>
</head>
<body>
<!--头部开始-->
<div class="header">
    <div class="top">
        <div class="title">信用卡列表</div>
    </div>
</div>
<div class="all">
    <!--内容开始-->
    <div class="container">
        <div class="credit-list">
            <?php if(is_array($sql)): foreach($sql as $key=>$b): ?><div class="list pufa">
                    <p class="title"><?php echo ($b['car_name']); ?></p>
                    <img src="/oo/Public/./img/<?php echo ($b['car_logo']); ?>" alt="">
                    <input type="button" value="立即申请">
                </div><?php endforeach; endif; ?>
        </div>
    </div>
</div>
<div class="footer">
    <div class="ad">
        <i class="logo">
            <img src="/oo/Public/./img/logo.jpg" alt="">
        </i>
        <i class="erweima">
            <img src="/oo/Public/./img/erweima.jpg" alt="">
        </i>
    </div>
    <div class="wechat">更多金融产品请关注 <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU2MjA5NTY5Mg==&scene=124#wechat_redirect">金牛<span>e</span>融</a>
    </div>
</div>
</body>
<script src="/oo/Public/js/jquery-3.1.1.js"></script>
<script src="/oo/Public/js/cardclick.js"></script>
</html>