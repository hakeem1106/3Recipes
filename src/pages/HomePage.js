import React from 'react';
import Navigation from '../components/Navigation';
import '../containers/homepage.css';
import AddRecipeButton from '../components/AddRecipeButton';

const HomePage = () => {
    return (
        <div className="page-background">
            <Navigation />
                <div className="container">
                    <h1 className="title">HomePage</h1>
                        <AddRecipeButton />
                        <div className="placement-text">
                        <p>Lorem ipsum dolor amet put a bird on it artisan wayfarers master cleanse raw denim chicharrones. Flexitarian fam brooklyn celiac yuccie, tofu swag jean shorts ethical etsy marfa venmo. Stumptown vegan migas adaptogen PBR&B salvia. Portland single-origin coffee coloring book kickstarter ramps, jianbing butcher. Celiac godard salvia meggings wolf echo park iceland.</p>

                        <p>You probably haven't heard of them neutra kickstarter paleo stumptown wayfarers tumeric readymade dreamcatcher tbh forage locavore hell of glossier before they sold out. Thundercats chia selvage poutine authentic artisan messenger bag humblebrag, etsy knausgaard vaporware chicharrones gochujang. Single-origin coffee portland air plant, ugh pork belly butcher tumblr XOXO DIY. Franzen migas kogi forage.</p>

                        <p>Jianbing fanny pack quinoa, plaid lumbersexual pug hella irony activated charcoal thundercats. Ennui raclette try-hard, af la croix keffiyeh chambray polaroid. Gochujang freegan seitan fashion axe kale chips austin butcher sriracha pop-up tbh. Vape ugh lumbersexual cray, echo park organic flannel lomo meh occupy fanny pack. Disrupt irony slow-carb hell of squid 8-bit kitsch.</p>

                        <p>Semiotics subway tile godard taxidermy. Franzen quinoa four loko, taiyaki keytar jianbing tumeric paleo. Health goth pork belly synth dreamcatcher live-edge vice vape succulents chillwave. Tilde drinking vinegar messenger bag waistcoat ennui lyft normcore activated charcoal. Kitsch tote bag chicharrones narwhal wayfarers air plant. Mumblecore quinoa fanny pack venmo dreamcatcher jean shorts pour-over shaman distillery.</p>

                        Humblebrag master cleanse thundercats organic, tumblr vape hell of waistcoat copper mug hammock next level photo booth. Scenester whatever ethical try-hard, cardigan PBR&B authentic neutra retro blue bottle humblebrag cloud bread next level. Kogi paleo enamel pin kitsch occupy banjo aesthetic deep v next level taxidermy craft beer. Fashion axe shabby chic mumblecore, dreamcatcher meggings copper mug everyday carry tilde vape typewriter flexitarian schlitz vinyl. Chia pinterest tilde portland pug cray kitsch godard health goth.

                        Oh. You need a little dummy text for your mockup? How quaint.

                        I bet you’re still using Bootstrap too…
                        </div>
                </div>
        </div>
    )
}

export default HomePage;