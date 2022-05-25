import {aboutSLIDER, portfolioSLIDER, testimonialsSLIDER, newsSLIDER} from './modules/slick'
import {preload} from './modules/preload.js'
import {filterMixItUp} from './modules/filterMixItUp.js'
import {Tab} from './modules/Tab'
import {slides} from './modules/slides'
import {progressBar} from './modules/progressBar'
import {bannerSlides} from './modules/bannerSlides'
import {teamSkill} from './modules/teamSkill'
import {priceCards} from './modules/priceCards'
import {clickMap} from './modules/clickMap'
import {Nav} from './modules/Nav'
import {parallax} from './modules/parallax'

const detailsTab = new Tab(
    '.details-container__tabs--items',
    '.details-container__tabs--items-tab',
    '.details-container__tabs--contents-item'
)

const servicesTab = new Tab (
    '.services-container__content_left--tabs',
    '.services-container__content_left--tabs-item',
    '.services-container__content_left--contents-item'
)

const testimonialsTab = new Tab (
    '.testimonials-container__dots',
    '.testimonials-container__dots li',
    '.testimonials-container__slider--wrapper_slide'
)

const nav = new Nav()

preload()
slides()
progressBar()
bannerSlides()
filterMixItUp()
teamSkill()
priceCards()
clickMap()

parallax('.banner-container')
parallax('.talk-container')
parallax('.subscribe-container')
parallax('.featured-container__submit')
parallax('.portfolio-container__filter_footer')