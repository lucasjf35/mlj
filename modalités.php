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



                <form>
                        <h1>Me contactez</h1>
                        <div class="separation"></div>
                        <div class="corps-formulaire">
                                <div class="gauche">
                                        <div class="groupe">
                                                <label>Votre Prénom</label>
                                                <input type="text" autocomplete="off" />
                                                <i class="fas fa-user"></i>
                                        </div>
                                        <div class="groupe">
                                                <label>Votre adresse e-mail</label>
                                                <input type="text" autocomplete="off" />
                                                <i class="fas fa-envelope"></i>
                                        </div>
                                        <div class="groupe">
                                                <label>Votre téléphone</label>
                                                <input type="text" autocomplete="off" />
                                                <i class="fas fa-mobile"></i>
                                        </div>
                                </div>

                                <div class="droite">
                                        <div class="groupe">
                                                <label>Message</label>
                                                <textarea placeholder="Saisissez ici..."></textarea>
                                        </div>
                                </div>
                        </div>

                        <div class="pied-formulaire" align="center">
                                <button>Envoyer le message</button>
                        </div>
                </form>
</section>

<?php get_footer(); ?>