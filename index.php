<?php get_header(); ?>

<div class="backmain">

<img class="logo_posts" src="assets/images/posts.png" alt="">

<h3>Last posts</h3>
<section>
            <div class="grids">
                <div class="grid">
                <?php
        $args = array(
            'post_type' => 'posts',
            'posts_per_page' => 4,
            'orderby' => 'date',
            'order' => 'DESC',
        );
        ?>

        <div class="section_post">
                <?php $the_query = new WP_Query($args); ?>

                <?php if ($the_query->have_posts()) : ?>
                <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>

                
                <div class="post">
               <div class="post-photo">
                    <img class="photos" src="<?php the_field('post_photo') ?>" />
               </div>
               <div class="texte-post">
                    
                    <p class="post_date"><?php echo 'publié il y a ' .human_time_diff(get_the_time('U'), current_time('timestamp')) ?></p>
                    <p><?php the_field('title_article') ?></p>
                    <p><?php the_field('desc_article') ?></p>
                    <p class="post-texte"><?php echo wp_trim_words(get_field('desc_article'),25,'...'); ?></p>
                    <a class="btn_post" href="<?php the_permalink()?>"><?php the_field('post_buton') ?></a>
               </div>
          </div>

                <?php endwhile; ?>
                <?php endif; ?>

                <?php wp_reset_query(); ?>
                <?php wp_reset_postdata(); ?>
                </div>
            </div>
            </div>
        </section>    

        </div>

<?php get_footer(); ?>