<?php
add_theme_support( 'menus' );
add_theme_support('title-tag');
add_theme_support( 'post-thumbnails' );

add_action( 'wp_enqueue_scripts', 'insert_css' );

function insert_css() {

wp_register_style( 'ploume', 'https://source.ploume.io/latest/css/ploume.css' );
wp_enqueue_style( 'ploume' );

wp_enqueue_style( 'style', get_stylesheet_uri() );

wp_register_script( 'jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' );
wp_enqueue_script( 'jquery' );

}
register_nav_menus( [
    'menu-principal'  => 'Navigation principale',
    'socialnetworks'  => 'Réseaux sociaux',
    'footer-menu'     => 'Footer'
] );

