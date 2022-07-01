<?php

/*
  Template Name: modalités
*/

get_header(); ?>
<section class="page">
        <div class="wrapper">

                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <?php the_content(); ?>
                <?php endwhile; else: endif; ?>
               
</section>

<?php get_footer(); ?>