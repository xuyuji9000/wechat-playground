<?php
use EasyWeChat\Factory;

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$config = [
    'app_id' => getenv('APP_ID'),
    'token' => getenv('TOKEN'),

    'response_type' => 'array',

    // 'log' => [
    //     'level' => 'debug',
    //     'file' => __DIR__.'/wechat.log',
    // ],
];

$app = Factory::officialAccount($config);

$app->server->push(function ($message) {
    return "您好！欢迎使用 EasyWeChat!";
});

$response = $app->server->serve();

// 将响应输出
$response->send(); // Laravel 里请使用：return $response;