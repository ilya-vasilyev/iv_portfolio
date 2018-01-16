<template lang='pug'>
  div
    h2 Portfolio
    div.filter
      div(v-for="(category, index) in categories" :class="{selected: index == currCategory}")
        span |
        p(@click="currCategory = index") {{category.name}}

    div.container
      div(
        v-for="item in items"
        @click="expand($event, item)"
        v-if="item.category == categories[currCategory].name || currCategory == 0").item
        div(:style="{ backgroundImage: 'url(../static/' + item.coverPic + ')' }").pic
        h3(v-if="item.coverTitle") {{item.coverTitle}}

    div.full
      div(@click="collapse").dark
      div.content

        div.fullHead
          h3(v-if="fullItem.name") {{fullItem.name}}
          i
            span(v-for="job in fullItem.roles" v-if="fullItem.roles") {{job}}

        div(v-for="(mediaItem, indexFull) in fullItem.media").fullItem

          hr(v-if="fullItem.name")

          p(v-if="mediaItem.commentBefore").comment {{mediaItem.commentBefore}}

          img(
            v-if="mediaItem.type == 'pic'"
            :src="'../static/' + mediaItem.file"
            ).pic

          img(
            v-if="mediaItem.type == '500px'"
            :src="mediaItem.link"
            ).pic

          //- small(v-if="mediaItem.type == 'video' || mediaItem.type == 'youtube' || mediaItem.type == 'coub' || mediaItem.type == 'fbVideo'") click to play
          video(
            v-if="mediaItem.type == 'video'"
            :poster="'../static/' + mediaItem.poster"
            onclick="this.play(); this.controls=true"

            controlsList="nodownload"
            ).video
            source(:src="'../static/' + mediaItem.file" type="video/mp4")

          iframe(
            v-if="mediaItem.type == 'youtube'"
            frameborder="0" allowfullscreen
            :src="mediaItem.link"
            ).youtube

          iframe(
            v-if="mediaItem.type == 'coub'"
            frameborder="0" allowfullscreen
            :src="mediaItem.link"
            width="640"
            ).coub

          iframe(
            v-if="mediaItem.type == 'fbVideo'"
            frameborder="0" allowfullscreen
            :src="mediaItem.link"
            width="560"
            ).fbVideo

          iframe(
            v-if="mediaItem.type == 'soundcloud'"
            frameborder="no" scrolling="no"
            :src="mediaItem.link"
            width="100%"
            ).soundcloud

          p(v-if="mediaItem.comment").comment {{mediaItem.comment}}
          p(v-if="mediaItem.commentAfter").comment {{mediaItem.commentAfter}}

          div.links
            a(v-for="link in mediaItem.links"
              :href="link.url"
              target="_blank"
              v-if="mediaItem.links").likeButton {{link.text}}

        button(@click="collapse").close &#10060;

    div.filter
      div(v-for="(category, index) in categories" :class="{selected: index == currCategory}")
        span |
        p(@click="currCategory = index; sctollToTop()") {{category.name}}

    hr
</template>

<script>

export default {
  name: 'portfolio',
  data () {
    return {
      categories: [
        {name: 'all'},
        {name: 'code'},
        {name: 'design'},
        {name: 'video'},
        {name: 'audio'},
      ],
      currCategory: 1,
      fullItem: {},
      items: [

        // {
        //   name: "",
        //   category: "",
        //   coverTitle: "",
        //   coverPic: "",
        //   media: [
        //     {
        //       type: "",
        //       comment: "",
        //       file: "",
        //       poster: "",
        //       links: [
        //         {text: "", url: ""},
        //       ]
        //     },
        //   ]
        // },



        {
          category: "code",
          coverTitle: "«MeYou» demo",
          coverPic: "p_meyoudemo_cover.jpg",
          name: "MeYou demo",
          roles: ["Design", "Animation", "Frontend"],
          media: [
            {
              type: "video",
              commentBefore: "Explanaition demo with different presentation modes and with customisable colors, images and language.",
              commentAfter: "All animation made with SVG and GSAP, assembled with Vue components.",
              file: "p_meyoudemo.mp4",
              poster: "p_meyoudemo_poster.jpg",
              links: [
                {text: "Live demo", url: "http://meyoudemo.netlify.com/#/rep"},
              ]
            },
          ],
        },

        {
          name: "LBO model",
          category: "code",
          coverTitle: "LBO model",
          coverPic: "p_lbo_cover.jpg",
          roles: ["UI", "UX", "Frontend"],
          media: [
            {
              comment: "New design and interfaces for full refactoring of dynamic visualisation engine",
            },
            {
              type: "video",
              file: "mining.mp4",
              poster: "p_lbo_poster.jpg",
              comment: "Was built in collaboration with Pavel Kityan on Angular 1.6",
              links: [
                {text: "Live demo", url: "https://pulsevisuals.ru/lbo"},
              ]
            },
          ]
        },

        {
          category: "code",
          coverTitle: "LNG strategic model",
          coverPic: "p_lng_cover.jpg",
          name: "LNG strategic model",
          roles: ["Design", "UI", "UX", "Frontend", "Backend"],
          media: [
            {
              comment: "Interactive SVG map and dynamic visualisation of strategic infrastructure project",
            },
            {
              type: "video",
              file: "lng.mp4",
              poster: "p_lng_poster.jpg",
              comment: "No public link available",
            },
          ]
        },

        {
          category: "code",
          coverTitle: "Railroad model",
          coverPic: "p_rail_cover.jpg",
          name: "Railroad model",
          roles: ["Design", "UI", "UX", "Frontend", "Backend"],
          media: [
            {
              comment: "Multi-scenario visualisation of railroad infrastructure renovation model",
            },
            {
              type: "pic",
              file: "p_rail.jpg",
              comment: "No public link available",
            },
          ]
        },

        {
          category: "code",
          coverTitle: "Hotel business game",
          coverPic: "p_hotel_cover.jpg",
          name: "Hotel business model",
          roles: ["Design", "UI", "UX", "Frontend", "Backend"],
          media: [
            {
              comment: "Business game for CFOs of subsidiary companies of AFK Sistema, was built in callaboration with risk management department of PwC Russia",
            },
            {
              type: "video",
              file: "p_hotels.mp4",
              poster: "p_hotel_poster.jpg",
              links: [
                {text: "Live demo (EN)", url: "https://pulsevisuals.ru/hotel-case/en/"},
                {text: "Live demo (RU)", url: "https://pulsevisuals.ru/afk-case/"},
              ]
            },
          ]
        },

        {
          category: "code",
          coverTitle: "Meat holding business game",
          coverPic: "p_meat_cover.jpg",
          name: "Meat holding model",
          roles: ["Design", "UI", "UX", "Frontend", "Backend"],
          media: [
            {
              comment: "Business game for students of Faculty of Economics of Lomonosov Moscow State University",
            },
            {
              type: "video",
              comment: ".",
              file: "p_meat.mp4",
              poster: "p_meat_poster.jpg",
              links: [
                {text: "Live demo", url: "https://pulsevisuals.ru/meat-holding-case/"},
              ]
            },
          ]
        },

        {
          category: "code",
          coverTitle: "«PULSE.visuals»",
          coverPic: "p_pulse_cover.jpg",
          name: "«PULSE.visuals»",
          roles: ["Idea", "Design", "UI", "UX", "Frontend", "Backend"],
          media: [
            {
              comment: "Landing page",
              links: [
                {text: "Open", url: "https://pulsevisuals.ru/"},
              ]
            },
            {
              type: "pic",
              file: "p_pulse_intro.gif",
            },
            {
              type: "pic",
              file: "p_pulse.jpg",
            },
            {
              type: "pic",
              file: "p_pulse2.gif",
            },
            {
              type: "pic",
              file: "p_pulse3.jpg",
            },
          ]
        },

        {
          category: "code",
          coverTitle: "«PLAIN.solutions»",
          coverPic: "p_charts01.jpg",
          name: "«PLAIN.solutions»",
          roles: ["Idea", "Design", "UI", "UX", "Frontend", "Backend"],
          media: [
            {
              comment: "Landing page",
              links: [
                {text: "Open", url: "http://plain.solutions/"},
              ]
            },
            {
              type: "pic",
              file: "p_plain.jpg",
            },
            {
              type: "pic",
              file: "p_plain2.jpg",
            },
            {
              type: "pic",
              file: "p_charts01.jpg",
            },
            {
              type: "pic",
              file: "p_charts02.jpg",
            },
            {
              type: "pic",
              file: "p_charts03.jpg",
            },
          ]
        },

        {
          category: "code",
          coverTitle: "«Creatomus»",
          coverPic: "p_creatomus00.jpg",
          name: "«Creatomus»",
          roles: ["Design", "Frontend"],
          media: [
            {
              comment: "I was a part of the winning team in Garage48 GreenTech hackathon in Tallinn",
              links: [
                {text: "Event page", url: "http://garage48.org/blog/it-is-raining-winners-at-garage48-greentech-tallinn-2015"},
              ]
            },
            {
              type: "pic",
              file: "p_creatomus01.jpg",
              comment: "We've built the prototype of house configurator",
            },
            {
              type: "pic",
              file: "p_creatomus02.jpg",
              comment: "It helps home buyers to see how different house parameters affect energy performance and construction costs",
            },
            {
              type: "pic",
              file: "p_creatomus00.jpg",
            },
            {
              type: "pic",
              file: "p_creatomus03.jpg",
              comment: "That was an amazing international team with estonian architects and marketeers, latvian developers, finnish environmental specialist and russian designer. I was really happy to be part of it.",
            },
            {
              comment: "This hackaton project managed to grow to a company with powerful product, and today it looks like this:",
              type: "pic",
              file: "p_creatomus04.jpg",
              links: [
                {text: "Creatomus Solutions", url: "https://house.creatomus.com/project/hta"},
              ]
            },
          ]
        },

        // DESIGN
        // DESIGN
        // DESIGN

        {
          category: "design",
          coverTitle: "What if analysis",
          coverPic: "p_whatif_cover.jpg",
          name: "What if analysis",
          roles: ["Idea", "UI", "Motion design"],
          media: [
            {
              type: "video",
              file: "p_whatif.mp4",
              poster: "p_whatif_poster.jpg",
            },
          ],
        },

        {
          category: "design",
          coverTitle: "Hockey coach app",
          coverPic: "p_hockey_cover.jpg",
          name: "Hockey coach app",
          roles: ["Design", "UI"],
          media: [
            {
              comment: "Prototype of the app for hockey coaches and team managers",
            },
            {
              type: "pic",
              file: "p_hockey01.jpg",
            },
            // {
            //   type: "pic",
            //   file: "p_hockey02.jpg",
            // },
            {
              type: "pic",
              file: "p_hockey03.jpg",
            },
            {
              type: "pic",
              file: "p_hockey04.jpg",
            },
            {
              type: "pic",
              file: "p_hockey05.jpg",
            },
          ]
        },

        {
          name: "Interactive infographics",
          category: "design",
          coverTitle: "Interactive infographics",
          coverPic: "p_ii.jpg",
          roles: ["Idea", "Motion design", "Music"],
          media: [
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/-LKNRQJnk8o?rel=0&amp;showinfo=0",
            },
          ]
        },

        {
          category: "design",
          coverTitle: "«MeYou» web app",
          coverPic: "p_meyou_ui_cover.jpg",
          name: "«MeYou» web app",
          roles: ["Design", "UI", "UX"],
          media: [
            {
              comment: "Prototyping of the web app interfaces from scratch for event networking startup, that now is becoming local market leader in event solutions industry",
              links: [
                {text: "MeYou", url: "http://meyou.ru/"},
              ]
            },
            {
              type: "pic",
              file: "p_meyou_ui.jpg",
            },
          ],
        },

        {
          name: "Photo post-production",
          category: "design",
          coverTitle: "Photo post-production",
          coverPic: "p_500px.jpg",
          media: [
            {
              comment: "Post production of all photos in Yanona's gallery",
              links: [
                {text: "Open gallery", url: "https://500px.com/yanona"},
              ]
            },
            {
              type: "500px",
              link: "https://drscdn.500px.org/photo/228931907/m%3D900/v2?webp=true&sig=acf6d469948b1911b29267f9cb0ef09f9f132ebe45575185e865d8c61696fbc2",
            },
            {
              type: "500px",
              link: "https://drscdn.500px.org/photo/230928069/m%3D900/v2?webp=true&sig=8dc0e15227b39d8fdc645533c9b020067eb0f6a6803ba47b2de077a4b58d22c1",
            },
            {
              type: "500px",
              link: "https://drscdn.500px.org/photo/216845447/m%3D900/v2?webp=true&sig=0434e72e5660186d71581c8f4a1f19ba2d9a7b3b8fac2dc69f8e22039ece4e3e",
            },
            {
              type: "500px",
              link: "https://drscdn.500px.org/photo/163775361/m%3D900/v2?webp=true&sig=be4591812a1c4688b41a0ec48afb71b321391b096d5d18e7dd77037bbaf9ce9c",
            },
            {
              type: "500px",
              link: "https://drscdn.500px.org/photo/232266589/m%3D900/v2?webp=true&sig=76f86cf5a589315b2143fb4f01d75e10454079efc2fff023bd2f21d88aa492c7",
            },
          ]
        },

        // VIDEO
        // VIDEO
        // VIDEO

        {
          name: "Coubs",
          category: "video",
          coverTitle: "Coubs",
          coverPic: "p_coubs.jpg",
          roles: ["Camera", "Editing"],
          media: [
            {
              type: "coub",
              link: "//coub.com/embed/1006a2?muted=false&autostart=false&originalSize=false&startWithHD=true",
            },
            {
              type: "coub",
              link: "//coub.com/embed/106hzg?muted=false&autostart=false&originalSize=false&startWithHD=true",
            },
            {
              type: "coub",
              link: "//coub.com/embed/107xfa?muted=false&autostart=false&originalSize=false&startWithHD=true",
            },
          ]
        },
        {
          name: "Tel-Aviv",
          category: "video",
          coverTitle: "Tel-Aviv",
          coverPic: "p_tlv.jpg",
          roles: ["Camera", "VFX"],
          media: [
            {
              comment: "Short sketches from Tel-Aviv for Facebook & Instagram",
            },
            {
              type: "fbVideo",
              link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827509104187814%2F&show_text=0&width=560",
            },
            {
              type: "fbVideo",
              link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827510357521022%2F&show_text=0&width=560",
            },
            {
              type: "fbVideo",
              link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827511114187613%2F&show_text=0&width=560",
            },
            {
              type: "fbVideo",
              link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Filya.vasilyev.5817%2Fvideos%2F1827512967520761%2F&show_text=0&width=560",
            },
          ]
        },

        {
          name: "Cartoons",
          category: "video",
          coverTitle: "Cartoons",
          coverPic: "p_cartoons.jpg",
          roles: ["Screenplay", "Hiring", "Motion design", "Editing", "VFX"],
          media: [
            {
              comment: "Totally five 3-minute cartoons, one 50-minute animated LED-background were made for children live shows at «Golden Ring» theatre",
            },
            {
              type: "fbVideo",
              link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFluffymove%2Fvideos%2F678951658912009%2F&show_text=0&width=560",
              comment: "Director & Animator: Jane Nitylkina",
            },
          ]
        },

        {
          name: "Interactive comics",
          category: "video",
          coverTitle: "Interactive comics",
          coverPic: "p_fluffy_trailer.jpg",
          roles: ["Director", "Motion design", "VFX", "Sound design", "Music"],
          media: [
            {
              comment: "Video prototype of interactive comics made in Fluffy Move experimental studio",
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/9r8w89_q8js?rel=0&amp;showinfo=0",
            },
            {
              links: [
                {text: "Fluffy Move", url: "https://fluffymove.com/"},
                {text: "Fluffy Move FB", url: "https://www.facebook.com/Fluffymove/"},
              ]
            },
          ]
        },

        {
          name: "Mini football promo",
          category: "video",
          coverTitle: "Mini football promo",
          coverPic: "p_minifootball.jpg",
          roles: ["Director", "Camera", "Motion design", "Sound design", "Editing"],
          media: [
            {
              comment: "Video promo for mini footbal championship",
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/sW_qMY44Rn0?rel=0&amp;showinfo=0",
              links: [
                {text: "Championship page", url: "https://vk.com/club81387426"},
              ]
            },
          ]
        },

        {
          name: "«Week-clicks»",
          category: "video",
          coverTitle: "«Week-clicks»",
          coverPic: "p_weekclick.jpg",
          roles: ["Music", "Audio mixing", "Camera", "Editing", "VFX"],
          media: [
            {
              comment: "Series of short music videos"
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/cw7rpIWv0lw?rel=0&amp;showinfo=0",
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/K734wiM386c?rel=0&amp;showinfo=0",
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/1W3LHcCG79A?rel=0&amp;showinfo=0",
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/kcfJXzZY2T4?rel=0&amp;showinfo=0",
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/bEmUfotmcGo?rel=0&amp;showinfo=0",
            },
          ]
        },

        {
          name: "Zooms",
          category: "video",
          coverTitle: "Zooms",
          coverPic: "p_zooms.jpg",
          roles: ["Motion design"],
          media: [
            {
              type: "fbVideo",
              link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFluffymove%2Fvideos%2F773981466075694%2F&show_text=0&width=560",
            },
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/4CKd5VbJU-M?rel=0&amp;showinfo=0",
            },
          ]
        },

        // AUDIO
        // AUDIO
        // AUDIO

        {
          name: '«City birds»',
          category: "audio",
          coverTitle: '«City birds»',
          coverPic: "p_city_birds.jpg",
          roles: ["Music"],
          media: [
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/B5T9bICijUs?rel=0&amp;showinfo=0",
              comment: "Feature film. Director: Yuliya Belaya",
              links: [
                {text: "Full film", url: "https://www.youtube.com/watch?v=5vJFlzMYKRQ"},
              ]
            }
          ]
        },

        {
          name: '«..., but love»',
          category: "audio",
          coverTitle: '«..., but love»',
          coverPic: "p_but_love.jpg",
          roles: ["Sound design", "Recording", "Audio mixing", "Music"],
          media: [
            {
              type: "pic",
              file: "p_but_love.jpg",
              comment: "Short film. Director: Yuliya Belaya. Film is not publicly available",
            },
          ]
        },

        {
          name: '«Russian Yogis»',
          category: "audio",
          coverTitle: '«Russian Yogis»',
          coverPic: "p_yogi.jpg",
          roles: ["Sound design", "Audio mixing", "Music", "Title design", "Poster desing"],
          media: [
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/L8ojQ32UU3E?rel=0&amp;showinfo=0",
              comment: "Documentary film. Director: Leo Nekrasov",
            },
          ]
        },

        {
          name: '«Repka»',
          category: "audio",
          coverTitle: '"Repka"',
          coverPic: "p_repka.jpg",
          roles: ["Sound design", "Recording", "Audio mixing", "SFX"],
          media: [
            {
              type: "youtube",
              link: "https://www.youtube.com/embed/LuZ9xPAC82M?rel=0&amp;showinfo=0",
              comment: "Short film. Director: Leo Nekrasov",
            },
          ]
        },

        {
          category: "audio",
          coverTitle: "«Fake View»",
          coverDetails: "rock-band",
          coverPic: "p_fakeview.jpg",
          name: "«Fake View»",
          roles: ["Songwriting", "Composing", "Guitar", "Keys", "Vocals", "Sound engineering", "Design"],
          media: [
            {
              comment: "My own alternative-indie-rock band. Rocked for 3 years.",
            },
            {
              type: "pic",
              file: "p_fakeview1.jpg",
            },
            {
              type: "soundcloud",
              link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2026643&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true",
            },
          ]
        },

        // {
        //   category: "other",
        //   coverTitle: "2D art",
        //   coverPic: "",
        //   name: "2D art",
        // },
        //
        // {
        //   category: "other",
        //   coverTitle: "3D art",
        //   coverPic: "",
        //   name: "3D art",
        // },



        // {
        //   coverTitle: "Only cover title",
        // },
        //
        // {
        //   coverPic: "exp_break.JPG",
        // },
        //
        // {
        //   coverTitle: "Cover title + pic",
        //   coverPic: "exp_break.JPG",
        // },
        //
        // {
        //   name: "Only name",
        //   coverTitle: "Only name",
        //   coverPic: "exp_break.JPG",
        //   media: [],
        // },
        //
        // {
        //   name: "Category: CODE",
        //   category: 'code',
        //   coverTitle: "Category: CODE",
        //   coverPic: "exp_break.JPG",
        //   media: [],
        // },
        //
        // {
        //   name: "Category: VIDEO",
        //   category: 'video',
        //   coverTitle: "Category: VIDEO",
        //   coverPic: "exp_garage.jpg",
        //   media: [],
        // },
        //
        // {
        //   name: "Category: PICS",
        //   category: 'pics',
        //   coverTitle: "Category: PICS",
        //   coverPic: "exp_fake.jpg",
        //   media: [],
        // },
        //
        // {
        //   coverTitle: "Only comment",
        //   coverPic: "exp_break.JPG",
        //   media: [
        //     {
        //       comment: "This is comment",
        //     }
        //   ],
        // },
        //
        // {
        //   coverTitle: "Only link",
        //   coverPic: "exp_break.JPG",
        //   media: [
        //     {
        //       links: [
        //         {text: "Link", url: "/portfolio"},
        //       ],
        //     }
        //   ],
        // },
        //
        // {
        //   category: 'code',
        //   name: "Text article",
        //   coverTitle: "Text article",
        //   coverPic: "exp_break.JPG",
        //   media: [
        //     {
        //       comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //       links: [
        //         {text: "Full article", url: "/portfolio"},
        //         {text: "Info about author", url: "/portfolio"},
        //       ],
        //     }
        //   ],
        // },
        //
        // {
        //   category: 'code',
        //   name: "Multiple text articles",
        //   coverTitle: "Multiple text articles",
        //   coverPic: "exp_break.JPG",
        //   media: [
        //     {
        //       comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //       links: [
        //         {text: "Full article", url: "/portfolio"},
        //       ],
        //     },
        //     {
        //       comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //       links: [
        //         {text: "Full article", url: "/portfolio"},
        //       ],
        //     },
        //     {
        //       comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //       links: [
        //         {text: "Full article", url: "/portfolio"},
        //         {text: "Info about author", url: "/portfolio"},
        //       ],
        //     },
        //   ],
        // },
        //
        // {
        //   category: 'pics',
        //   coverTitle: "One picture",
        //   coverPic: "exp_fake.jpg",
        //   media: [
        //     {
        //       type: 'pic',
        //       file: "exp_fake.jpg",
        //     },
        //   ],
        // },
        //
        // {
        //   category: 'pics',
        //   coverTitle: "Many pictures",
        //   coverPic: "exp_fake.jpg",
        //   media: [
        //     {
        //       type: 'pic',
        //       file: "exp_fake.jpg",
        //     },
        //     {
        //       type: 'pic',
        //       file: "exp_meyou.jpg",
        //     },
        //     {
        //       type: 'pic',
        //       file: "exp_garage.jpg",
        //     },
        //   ],
        // },
        //
        // {
        //   category: 'pics',
        //   coverTitle: "Gif",
        //   coverPic: "poster.gif",
        //   media: [
        //     {
        //       type: 'pic',
        //       file: "poster.gif",
        //     },
        //   ],
        // },
        //
        // {
        //   name: 'Blog post',
        //   category: 'pics',
        //   coverTitle: 'Blog post',
        //   coverPic: 'exp_fake.jpg',
        //   media: [
        //     {
        //       comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //     },
        //     {
        //       type: 'pic',
        //       comment: "01. This picture is about music",
        //       file: "exp_fake.jpg",
        //     },
        //     {
        //       type: 'pic',
        //       comment: "02. This picture is about events",
        //       file: "exp_meyou.jpg",
        //     },
        //     {
        //       type: 'pic',
        //       comment: "03. This picture is about hackathon",
        //       file: "exp_garage.jpg",
        //     },
        //     {
        //       comment: "Thanks for your time, like, subscribe, share",
        //       links: [
        //         {text: "Facebook", url: "/portfolio"},
        //         {text: "Twitter", url: "/portfolio"},
        //       ]
        //     },
        //   ]
        // },
        //
        // {
        //   category: 'video',
        //   coverTitle: 'One video',
        //   coverPic: 'exp_garage.jpg',
        //   media: [
        //     {
        //       type: 'video',
        //       file: "lng.mp4",
        //       poster: "lng_poster.png",
        //     },
        //   ]
        // },
        //
        // {
        //   category: 'video',
        //   coverTitle: 'Multiple videos',
        //   coverPic: 'exp_garage.jpg',
        //   media: [
        //     {
        //       type: 'video',
        //       file: "lng.mp4",
        //       poster: "lng_poster.png",
        //     },
        //     {
        //       type: 'video',
        //       file: "mining.mp4",
        //       poster: "mining_poster.png",
        //     },
        //   ]
        // },
        //
        // {
        //   category: 'video',
        //   coverTitle: 'With gif poster',
        //   coverPic: 'exp_garage.jpg',
        //   media: [
        //     {
        //       type: 'video',
        //       file: "lng.mp4",
        //       poster: "poster.gif",
        //     },
        //   ]
        // },

      ],
    }
  },
  created: function() {
    this.sctollToTop()
  },
  methods: {
    sctollToTop: function () {
      window.scrollTo(0, 0);
    },
    expand: function (e, item) {
      if ( !item.media ) { return } // do not expand empty items
      this.fullItem = item  // set clicked item as full item
      const offsetX = e.x - window.innerWidth / 2   // get click coordinates to expand from it
      const offsetY = e.y - window.innerHeight / 2  // get click coordinates to expand from it
      const full = document.querySelector('.full')
      const content = document.querySelector('.full .content')
      const dark = document.querySelector('.full .dark')
      // make all visible
      full.style.display = 'block'
      // hide overflow
      document.body.style.overflow = 'hidden'
      // instantly move content to click position
      content.style.transition = '0s'
      content.style.opacity = '0'
      content.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(.5)`
      // instantly make darkness invisible
      dark.style.transition = '0s'
      dark.style.opacity = '0'
      // then expand from click position
      this.$nextTick(function () {
        // animate content
        content.style.transition = '.3s'
        content.style.opacity = '1'
        content.style.transform = `translate(0px,0px) scale(1)`
        // animate darkness
        dark.style.transition = '.5s'
        dark.style.opacity = '1'
      })
    },
    collapse: function (e) {
      const full = document.querySelector('.full')
      const content = document.querySelector('.full .content')
      const dark = document.querySelector('.full .dark')
      const self = this
      // animate content
      content.style.transition = '.3s'
      content.style.opacity = '0'
      content.style.transform = `scale(.5)`
      // animate darkness
      dark.style.transition = '.5s'
      dark.style.opacity = '0'
      // show overflow
      document.body.style.overflow = 'auto'
      // hide and clean full when all animation is played
      setTimeout(function () {
        full.style.display = 'none'
        self.fullItem = {}
      }, 300)
    },
  },
}
</script>

<style scoped lang='scss'>

@import "../assets/_common.scss";

.filter {
  @include flex(row, center, center, wrap);
  margin: 2rem 0;

  div {
    display: inline-block;
    &:first-child span {
      display: none;
    }
  }
  p {
    display: inline-block;
    margin: 0;
    padding: .25rem;
    color: $grey;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: $baseColor;
      text-decoration: underline;
    }
  }
  .selected p {
    color: $baseColor;
    font-weight: 800;
    text-decoration: none;
  }
  span {
    padding: 0 .5rem;
    // opacity: .5;
    color: $lightGrey;
    font-size: 1.3rem;
    user-select: none;
    font-weight: 300;
    // @media screen and (max-width: 600px) {
    //   display: none;
    // }
  }
}

.container {
  @include flex(row, center, stretch, wrap);

  .item {
    width: calc(50% - 2px);
    min-width: 10rem;
    height: 15rem;
    margin: 1px;
    position: relative;
    overflow: hidden;
    background: #4eb16c;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    cursor: pointer;
    &:hover .pic {
      transform: scale(1.02);
      filter: grayscale(0) brightness(1);
    }
    @media screen and (max-width: 500px) {
      min-width: calc(100% - 4px);
    }
    @media screen and (max-width: 300px) {
      height: 10rem;
    }
    .pic {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      transition: transform 2s, filter .5s;
      transition-timing-function: ease-in-out;
      filter: grayscale(.2) brightness(.8);
    }
    h3 {
      position: relative;
      color: #fff;
      background: rgba(50,50,50,.5);
      text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
      text-align: left;
      margin: 0;
      padding: .5rem;
    }
  }
}

.full {
  @include flex(row, center, center, wrap);
  position: fixed;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  display: none;

  .dark {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    background: rgba(50,50,50,.9);
    cursor: pointer;
  }
  .content {
    max-height: calc(100vh - 6rem);
    overflow-y: scroll;
    position: relative;
    width: calc(100% - 6rem);
    max-width: 900px;
    margin: 1rem auto;
    padding: 2rem 1rem;
    background: #fff;
    @media screen and (max-width: 400px) {
      max-height: calc(100vh - 6rem);
      max-width: calc(100% - 2rem);
      width: calc(100% - 2rem);
      margin: .5rem auto;
      padding: 2rem .5rem;
    }

    .fullHead {
      margin: 4rem auto;
      h3 {
        margin: 0;
        font-size: 1.5rem;
      }
      i {
        margin: .5rem auto;
        &::before {content: none;}
        span {
          display: inline-block;
          margin: 0 .5rem;
          line-height: 1.5;
        }
      }
    }
    hr {
      margin: 4rem auto;
      width: 100px;
    }
    small {
      display: block;
    }
    .comment {
      max-width: 900px;
    }
    .pic {
      width: 85%;
      max-width: 900px;
      user-select: none;
    }
    .video {
      width: 85%;
      max-width: 900px;
      max-height: 80vh;
      cursor: pointer;
      &::-webkit-media-controls-overlay-play-button {
        display: block;
      }
    }
    .youtube, .coub, .fbVideo {
      width: 85%;
      max-width: 900px;
      min-height: 200px;
      height: 40vw;
      max-height: 500px;
    }
    .soundcloud {
      width: 80vw;
      height: 350px;
      max-width: 600px;
      max-height: 350px;
    }
    .links {
      // a {
      //   margin: .5rem .25rem;
      // }
    }
    button.close {
      position: absolute;
      top: 0;
      right: .5rem;
      margin: 0;
      font-weight: 300;
      font-size: 1.5rem;
      background: none;
      text-decoration: none;
      color: $textColor;
    }
  }
}

</style>
