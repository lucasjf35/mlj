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
        


        <div class="contner">
                <form class="tableau" action="action_page.php">
                        <div class="tg"><label for="name">Nom</label>
                                <input type="text" id="name" name="nom" placeholder="Votre nom">

                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="Votre email..">

                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Votre message"></textarea>
                        </div>
                </form>
                <a href="#" class="button">Envoyer</a>
        </div>
        </div>
</section>

<?php get_footer(); ?>