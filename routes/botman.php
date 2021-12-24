<?php

$botman = app('botman');

$botman->hears('hi', fn ($bot) => $bot->reply('hello'));
