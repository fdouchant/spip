<?php
define("LINKEDIN_SHARE_URL", "https://www.linkedin.com/shareArticle?mini=true&url=%url%&title=%title%&summary=%summary%&source=FabriceDouchant");
define("TWITTER_SHARE_URL", "https://twitter.com/intent/tweet?text=%text%&url=%url%&hashtags=%hashtags%&via=fdouchant");

function linkedin_share_url($article_url, $article_title='', $article_summary='')
{
    $url = LINKEDIN_SHARE_URL;
    $url = str_replace("%url%", urlencode($article_url), $url);
    $url = str_replace("%title%", urlencode($article_title), $url);
    $url = str_replace("%summary%", urlencode($article_summary), $url);
    return $url;
}

function twitter_share_url($article_url, $article_text='', $article_hashtags='')
{
    $url = TWITTER_SHARE_URL;
    $url = str_replace("%text%", urlencode($article_text), $url);
    $url = str_replace("%url%", urlencode($article_url), $url);
    $url = str_replace("%hashtags%", strtolower($article_hashtags), $url);
    return $url;
}

function image_width($image_url)
{
    return getimagesize($image_url)[0];
}

function image_height($image_url)
{
    return getimagesize($image_url)[1];
}

function pretty_number($number)
{
    if ($number > 1000000)
        return round(($number / 1000000), 1).' M';
    else if ($number > 1000)
        return round(($number / 1000), 1).' k';

    return $number;
}

?>